// Проверка страниц в настоящем браузере (Chromium через Playwright):
// страницы открываются без ошибок JavaScript, в меню 4 пункта, тесты уроков проходятся, Python запускается,
// задачи показываются, закрытые уроки закрыты, путь «кабинет → ссылка ученику → результат → ответ» работает,
// на телефоне ничего не вылезает за экран.
// Запуск: cd checks && npm install && npx playwright install chromium && node check-pages.cjs
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
const { chromium, devices } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const PYODIDE_DIR = path.dirname(require.resolve('pyodide/package.json'));
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const problems = [];
const fail = (where, what) => problems.push(`✗ ${where}: ${what}`);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.xml': 'application/xml', '.json': 'application/json', '.wasm': 'application/wasm', '.zip': 'application/zip' };

// маленький веб-сервер для файлов сайта
function serve() {
    return new Promise((resolve) => {
        const server = http.createServer((req, res) => {
            const file = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname));
            if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
            res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
            fs.createReadStream(file).pipe(res);
        });
        server.listen(0, '127.0.0.1', () => resolve(server));
    });
}

async function newContext(browser, options = {}, openAll = true) {
    const ctx = await browser.newContext(options);
    // Python берём из пакета pyodide той же версии, что и на сайте, — не зависим от сети
    await ctx.route('https://cdn.jsdelivr.net/pyodide/v0.24.1/full/**', (route) => {
        const f = path.join(PYODIDE_DIR, path.basename(new URL(route.request().url()).pathname));
        if (!fs.existsSync(f)) return route.abort();
        route.fulfill({ body: fs.readFileSync(f), contentType: TYPES[path.extname(f)] || 'application/octet-stream', headers: { 'access-control-allow-origin': '*' } });
    });
    // Для проверки уроков открываем всё: как будто преподаватель открыл ученику все уроки и контрольные
    if (openAll) await ctx.addInitScript(() => {
        try {
            if (!localStorage.getItem('pb_access')) {
                localStorage.setItem('pb_access', JSON.stringify({ v: 3, sid: 'check', name: 'Проверка', note: '', paid: 15,
                    lessons: Array.from({ length: 16 }, (_, i) => i + 1), tasks: [], exams: [1, 2, 3], replies: {}, at: new Date().toISOString() }));
            }
        } catch (e) { /* about:blank */ }
    });
    return ctx;
}

function watchErrors(page, where) {
    page.on('pageerror', (e) => fail(where(), 'ошибка JavaScript: ' + e.message));
}

// Ученик и преподаватель — в разных браузерах (как в жизни), ссылки передаются между ними.
// Проверяем всю схему: оплата → ссылка → урок освоен → следующий открылся сам → результат в кабинете
// с оценкой → «Нужна оплата» → оплата → следующий урок.
async function accessFlow(browser, BASE) {
    const T = await (await newContext(browser, {}, false)).newPage();
    const S = await (await newContext(browser, {}, false)).newPage();
    for (const [p, who] of [[T, 'кабинет'], [S, 'ученик']]) { watchErrors(p, () => 'доступ к урокам (' + who + ')'); p.on('dialog', d => d.accept()); }
    const must = (ok, what) => { if (!ok) throw new Error(what); };
    const goto = async (p, url) => { await p.goto('about:blank'); await p.goto(url); };
    const isOpen = (n) => S.evaluate((k) => PB.isLessonOpen(k), n);
    // ученик «прошёл» тест урока и решил его домашку (все задачи или все, кроме одной)
    const master = (n, percent, skip) => S.evaluate(([k, pct, skipOne]) => {
        const f = 'lesson' + k + '.html';
        const q = JSON.parse(localStorage.getItem('quiz_results') || '{}'); q[f] = true;
        const sc = JSON.parse(localStorage.getItem('quiz_scores') || '{}'); sc[f] = { best: pct, last: pct, attempts: 1 };
        const solved = JSON.parse(localStorage.getItem('solved_tasks') || '{}');
        const hw = tasks.filter(t => t.hw && t.lesson === k).map(t => t.id);
        hw.slice(0, skipOne ? hw.length - 1 : hw.length).forEach(id => { solved[id] = true; });
        localStorage.setItem('quiz_results', JSON.stringify(q));
        localStorage.setItem('quiz_scores', JSON.stringify(sc));
        localStorage.setItem('solved_tasks', JSON.stringify(solved));
    }, [n, percent, skip]);

    await S.goto(BASE + 'lesson1.html');
    must(!(await S.locator('.lesson-lock').count()), 'урок 1 должен быть открыт всем');
    must(!(await S.locator('.warmup').count()), 'в уроке 1 не должно быть разминки');
    await S.goto(BASE + 'lesson3.html');
    must(await S.locator('.lesson-lock').count() === 1, 'урок 3 без ссылки преподавателя должен быть закрыт');

    // кабинет: PIN, новый ученик с двумя оплаченными уроками
    await T.goto(BASE + 'teacher.html');
    await T.fill('#pin', '1234');
    await T.fill('.hub-gate-form input:nth-of-type(2)', '1234');
    await T.click('.hub-gate-form button[type=submit]');
    await T.waitForSelector('.cab-nav');
    await T.fill('#new-name', 'Проверка Ученик');
    await T.fill('#new-paid', '2');
    await T.click('.cab-new button[type=submit]');
    await T.waitForSelector('.cab-sendbox a[data-link]');
    const link1 = await T.locator('.cab-sendbox a[data-link]').getAttribute('data-link');

    // ученик открывает ссылку: урок 2 оплачен, но откроется, когда освоен урок 1
    await goto(S, BASE + link1.slice(link1.indexOf('python-basic.html')));
    await S.waitForSelector('.my-row');
    must(!(await isOpen(2)), 'урок 2 должен открыться только после освоения урока 1');
    await goto(S, BASE + 'lesson2.html');
    must(/после урока 1/.test(await S.textContent('.lesson-lock h2')), 'на закрытом уроке 2 должно быть «откроется после урока 1»');

    // урок 1 освоен (тест 90%, вся домашка) → урок 2 открылся сам, оценка «Отлично»
    await master(1, 90, false);
    must(await isOpen(2), 'после освоения урока 1 урок 2 должен открыться сам');
    await goto(S, BASE + 'lesson1.html');
    must(/Отлично/.test(await S.textContent('#lesson-status')), 'в уроке 1 должно быть «Урок освоен — Отлично»');
    // урок 2: тест 75%, домашка без одной задачи → «Хорошо», урок 3 открылся, урок 4 не оплачен
    await master(2, 75, true);
    must(await isOpen(3), 'после освоения урока 2 урок 3 должен открыться сам');
    must(!(await isOpen(4)), 'урок 4 не оплачен и должен быть закрыт');
    must(await S.evaluate(() => PB.myState().results[2].grade) === 'good', 'урок 2 должен получить «Хорошо»');
    await goto(S, BASE + 'lesson3.html');
    must(await S.locator('.warmup').count() === 1, 'в уроке 3 должна быть разминка');
    await S.click('.warmup button:has-text("Начать разминку")');
    await S.locator('.warmup .qz-option').first().click();
    must(await S.locator('.warmup .qz-feedback').count() === 1, 'разминка должна показать, верен ли ответ');
    await master(3, 80, false);
    must(!(await isOpen(4)), 'урок 4 не оплачен — даже после освоения урока 3 он закрыт');

    // ученик отправляет результат
    await goto(S, BASE + 'python-basic.html#send');
    await S.fill('#student-name', 'Проверка Ученик');
    await S.waitForFunction(() => (document.querySelector('.send-btn') || { dataset: {} }).dataset.report);
    const report = await S.locator('.send-btn').getAttribute('data-report');

    // кабинет: новый результат с оценками, ученику нужна оплата
    await goto(T, BASE + report.slice(report.indexOf('teacher.html')));
    await T.waitForSelector('.cab-review');
    must(/Отлично/.test(await T.textContent('.cab-review')), 'в новом результате должна быть оценка «Отлично» за урок 1');
    await T.click('.cab-review button:has-text("Посмотрел")');
    await T.waitForSelector('.cab-profile');
    must(/Нужна оплата/.test(await T.textContent('.cab-profile')), 'ученик освоил все оплаченные уроки — должно быть «Нужна оплата»');

    // оплата +1 урок → новая ссылка → у ученика открылся урок 4
    await T.click('button:has-text("+1 урок")');
    await T.waitForSelector('.cab-sendbox a[data-link]');
    const link2 = await T.locator('.cab-sendbox a[data-link]').getAttribute('data-link');
    await goto(S, BASE + link2.slice(link2.indexOf('python-basic.html')));
    await S.waitForSelector('.my-row');
    must(await isOpen(4), 'после оплаты и новой ссылки урок 4 должен открыться');
    must(await S.locator('.my-row', { hasText: 'Введение в Python' }).locator('.my-pill-excellent').count() === 1, 'урок 1 у ученика должен быть «Отлично»');

    // профиль: фото ставится один раз, потом профиль закрыт для изменений
    const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
    await S.setInputFiles('.my-profile-edit input[type=file]', { name: 'me.png', mimeType: 'image/png', buffer: PNG });
    await S.waitForSelector('.my-photo-preview img');
    await S.click('button:has-text("Сохранить профиль")');
    await S.waitForSelector('.my-profile-lock');
    must(!(await S.locator('.my-profile-edit').count()), 'после сохранения профиль нельзя менять без разрешения преподавателя');

    // сертификат: пока не выдан — список условий; выдал преподаватель — номер, имя и фото
    await goto(S, BASE + 'certificate.html');
    must(await S.locator('#cert-locked').isVisible() && await S.locator('#cert-checklist li').count() >= 5, 'до выдачи на странице сертификата должен быть список условий');
    await T.click('.cab-cert button:has-text("Выдать сертификат")');
    await T.waitForSelector('.cab-cert-issued');
    await T.waitForSelector('.cab-sendbox a[data-link]');
    const link3 = await T.locator('.cab-sendbox a[data-link]').getAttribute('data-link');
    await goto(S, BASE + link3.slice(link3.indexOf('python-basic.html')));
    await S.waitForSelector('.my-row');
    await goto(S, BASE + 'certificate.html');
    must(/PB-\d{4}-001/.test(await S.textContent('#cert-number')), 'на сертификате должен быть номер вида PB-2026-001');
    must((await S.textContent('#cert-name-display')).trim() === 'Проверка Ученик', 'на сертификате должно быть имя из кабинета');
    must(await S.locator('#cert-photo').isVisible(), 'на сертификате должно быть фото из профиля');
    await T.context().close();
    await S.context().close();
}

async function main() {
    const server = await serve();
    const BASE = `http://127.0.0.1:${server.address().port}/`;
    // PW_CHANNEL=chrome — взять уже установленный Google Chrome (так делает проверка на GitHub)
    const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
    const tasks = vm.runInNewContext(read('tasks_data.js') + ';tasks');
    const quizData = vm.runInNewContext('(' + read('script.js').match(/const quizData = (\{[\s\S]*?\n {4}\});/)[1] + ')');
    let current = '';
    const ctx = await newContext(browser, { viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    watchErrors(page, () => current);

    // 1. Все страницы открываются без ошибок JavaScript
    const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html') && !/^(google|yandex)/.test(f));
    const MENU = ['index.html', 'python-basic.html', 'tasks.html', 'cheatsheet.html'];
    for (const f of pages) {
        current = f;
        await page.goto(BASE + f, { waitUntil: 'load' });
        await page.waitForTimeout(300);
        if (['assignment.html', 'exams.html'].includes(f)) {
            if (!page.url().includes('python-basic.html')) fail(f, 'старая страница должна переводить на «Мои уроки»');
            continue;
        }
        const menu = await page.$$eval('header nav ul li a', as => as.map(a => a.getAttribute('href')));
        if (menu.join() !== MENU.join()) fail(f, `в меню должно быть 4 пункта (${MENU.join(', ')}), а там: ${menu.join(', ')}`);
    }
    console.log(`Открыто страниц: ${pages.length}`);

    // 2. Тест каждого урока проходится от начала до конца
    for (let n = 1; n <= 16; n++) {
        const file = `lesson${n}.html`;
        current = file;
        try {
            await page.goto('about:blank');
            // тест открывается после упражнений «Попробуйте сами» — отмечаем их решёнными
            const tryIds = [...read(file).matchAll(/<div class="try-it" data-id="([^"]+)"/g)].map(m => m[1]);
            await page.goto(BASE + file);
            await page.evaluate((ids) => { const d = {}; ids.forEach(id => { d[id] = true; }); localStorage.setItem('try_done', JSON.stringify(d)); }, tryIds);
            await page.goto('about:blank');
            await page.goto(BASE + file + '#quiz');
            await page.waitForSelector('.qz-run', { timeout: 10000 });
            let asked = 0;
            while (await page.locator('.qz-run').count()) {
                const text = await page.textContent('.qz-question');
                const code = await page.locator('.qz-run .quiz-code code').count() ? await page.textContent('.qz-run .quiz-code code') : '';
                const q = quizData[file].flatMap(x => x.variants ? x.variants.map(v => ({ ...x, ...v })) : [x])
                    .find(x => x.question === text && (x.code || '') === code);
                if (!q) throw new Error('вопрос на странице не найден в quizData: ' + text);
                if (q.type === 'code') { await page.fill('.qz-input', q.correct[0]); await page.click('.qz-answer button[type=submit]'); }
                else await page.click(`.qz-option[data-orig-index="${q.correct}"]`);
                if (!(await page.locator('.qz-feedback.is-ok').count())) throw new Error('правильный ответ не засчитан: ' + text);
                await page.click('.qz-next');
                asked++;
                if (asked > 30) throw new Error('тест не заканчивается');
            }
            await page.waitForSelector('.qz-result', { timeout: 5000 });
            const label = await page.textContent('.qz-result .qz-eyebrow');
            if (label !== 'Тест пройден') fail(file, `после всех верных ответов написано «${label}»`);
            const saved = await page.evaluate((f) => (JSON.parse(localStorage.getItem('quiz_results') || '{}'))[f], file);
            if (!saved) fail(file, 'пройденный тест не сохранился');
        } catch (e) { fail(file, 'тест: ' + e.message.split('\n')[0]); }
    }
    console.log('Тесты всех уроков пройдены в браузере');

    // 2б. Правила честной сдачи теста (урок 3, браузер ученика)
    current = 'lesson3.html: правила сдачи';
    try {
        const tryIds = [...read('lesson3.html').matchAll(/<div class="try-it" data-id="([^"]+)"/g)].map(m => m[1]);
        const setState = (st) => page.evaluate(([s, ids]) => {
            ['quiz_results', 'quiz_scores', 'try_done', 'solved_tasks', 'quiz_mistakes'].forEach(k => localStorage.removeItem(k));
            const d = {}; ids.slice(0, s.tries).forEach(id => { d[id] = true; });
            localStorage.setItem('try_done', JSON.stringify(d));
            if (s.score) localStorage.setItem('quiz_scores', JSON.stringify({ 'lesson3.html': s.score }));
            if (s.hw) localStorage.setItem('solved_tasks', JSON.stringify(Object.fromEntries(tasks.filter(t => t.hw && t.lesson === 3).map(t => [t.id, true]))));
        }, [st, tryIds]);
        const gateText = async () => (await page.locator('#quiz-container .qz-gate').count()) ? await page.textContent('#quiz-container .qz-gate') : '';
        const startBtn = () => page.locator('#quiz-container #btn-start-quiz').count();
        await page.goto(BASE + 'lesson3.html');
        // упражнения не решены — теста нет
        await setState({ tries: 0 });
        await page.goto(BASE + 'lesson3.html');
        if (!/Попробуйте сами/.test(await gateText()) || await startBtn()) fail('lesson3.html', 'без решённых упражнений тест должен быть закрыт');
        // неудача минуту назад — пауза
        await setState({ tries: 9, score: { best: 40, attempts: 1, failStreak: 1, lastFailAt: new Date(Date.now() - 60000).toISOString() } });
        await page.goto(BASE + 'lesson3.html');
        if (!/Пересдать можно через/.test(await gateText()) || await startBtn()) fail('lesson3.html', 'после неудачной попытки должна быть пауза');
        // пауза прошла — тест открыт; неверный ответ не раскрывает правильный
        await setState({ tries: 9, score: { best: 40, attempts: 1, failStreak: 1, lastFailAt: new Date(Date.now() - 11 * 60000).toISOString() } });
        await page.goto(BASE + 'lesson3.html');
        if (!(await startBtn())) fail('lesson3.html', 'после паузы тест должен открыться');
        else {
            await page.click('#btn-start-quiz');
            for (let k = 0; k < 10 && await page.locator('.qz-run').count(); k++) {
                if (await page.locator('.qz-run .qz-input').count()) { await page.fill('.qz-input', 'нет'); await page.click('.qz-answer button[type=submit]'); }
                else {
                    const text = await page.textContent('.qz-question');
                    const code = await page.locator('.qz-run .quiz-code code').count() ? await page.textContent('.qz-run .quiz-code code') : '';
                    const q = quizData['lesson3.html'].flatMap(x => x.variants ? x.variants.map(v => ({ ...x, ...v })) : [x]).find(x => x.question === text && (x.code || '') === code);
                    await page.click(`.qz-option:not([data-orig-index="${q.correct}"])`);
                    if (await page.locator('.qz-option.is-correct').count()) { fail('lesson3.html', 'пока тест не сдан, правильный вариант не должен подсвечиваться'); break; }
                }
                await page.click('.qz-next');
            }
            await page.waitForSelector('.qz-result', { timeout: 5000 });
            if (await page.locator('.qz-review-line.is-ok').count()) fail('lesson3.html', 'в разборе проваленного теста не должно быть правильных ответов');
            if (!/Пересдать можно через|закрыт/.test(await page.textContent('.qz-result'))) fail('lesson3.html', 'после провала должно быть сказано, когда можно пересдать');
        }
        // 3 неудачи подряд — тест закрыт до решения домашки; домашка решена — можно открыть ещё попытки
        await setState({ tries: 9, score: { best: 40, attempts: 3, failStreak: 3, lastFailAt: new Date(Date.now() - 3600000).toISOString() } });
        await page.goto(BASE + 'lesson3.html');
        if (!/закрыт/.test(await gateText()) || await startBtn()) fail('lesson3.html', 'после 3 неудачных попыток тест должен закрыться');
        await setState({ tries: 9, hw: true, score: { best: 40, attempts: 3, failStreak: 3, lastFailAt: new Date(Date.now() - 3600000).toISOString() } });
        await page.goto(BASE + 'lesson3.html');
        await page.click('#quiz-container button:has-text("Открыть ещё")');
        if (!(await startBtn())) fail('lesson3.html', 'после решённой домашки должны открыться ещё попытки');
        // после второй серии неудач — только преподаватель
        await setState({ tries: 9, hw: true, score: { best: 40, attempts: 6, failStreak: 3, hwUnlock: true, lastFailAt: new Date(Date.now() - 3600000).toISOString() } });
        await page.goto(BASE + 'lesson3.html');
        if (!/преподавател/.test(await gateText()) || await startBtn()) fail('lesson3.html', 'после второй серии неудач тест открывает только преподаватель');
        // «Отлично» — только с 1-й или 2-й попытки
        const grade = await page.evaluate(() => {
            const g = (f) => PB.lessonResult(3, { lessons: { 3: { p: 1, b: 100, a: f, f } }, solved: tasks.filter(t => t.hw && t.lesson === 3).map(t => t.id) }, null).grade;
            return [g(2), g(3)];
        });
        if (grade[0] !== 'excellent' || grade[1] !== 'good') fail('lesson3.html', `«Отлично» только с 1–2 попытки, а получилось: ${grade.join(', ')}`);
        await setState({ tries: 0 });
        console.log('Правила честной сдачи теста работают');
    } catch (e) { fail('lesson3.html', 'правила сдачи: ' + e.message.split('\n')[0]); }

    // 2в. Подсказки к задачам: закрыты до первой проверки, открываются по одной
    current = 'tasks.html: подсказки';
    try {
        await page.goto(BASE + 'tasks.html#task=io_candies');
        await page.waitForSelector('#task-hints:not([hidden])', { timeout: 10000 });
        if (!(await page.locator('#task-hints .task-hint-btn[disabled]').count())) fail('tasks.html', 'до первой проверки подсказки должны быть закрыты');
        await page.evaluate(() => localStorage.setItem('task_tried', JSON.stringify({ io_candies: true })));
        await page.goto('about:blank');
        await page.goto(BASE + 'tasks.html#task=io_candies');
        await page.waitForSelector('#task-hints .task-hint-btn:not([disabled])', { timeout: 10000 });
        await page.click('#task-hints .task-hint-btn');
        if (await page.locator('#task-hints .task-hint').count() !== 1) fail('tasks.html', 'подсказка должна открыться');
        const pts = await page.evaluate(() => [PB.taskPoints('io_candies', 0), PB.taskPoints('io_candies', 1), PB.taskPoints('io_candies', 3)]);
        if (pts.join() !== '1,0.7,0') fail('tasks.html', 'баллы с подсказками считаются неверно: ' + pts.join());
        await page.evaluate(() => { localStorage.removeItem('task_tried'); localStorage.removeItem('task_hints'); });
        console.log('Подсказки к задачам работают');
    } catch (e) { fail('tasks.html', 'подсказки: ' + e.message.split('\n')[0]); }

    // 3. Python запускается: пример урока 1 и упражнение «Попробуйте сами»
    current = 'lesson1.html';
    try {
        await page.goto(BASE + 'lesson1.html');
        await page.locator('.run-block .run-btn').first().click();
        await page.waitForFunction(() => /Привет, мир!/.test(document.querySelector('.run-output').textContent), null, { timeout: 90000 });
        const box = page.locator('.try-it').first();
        await box.locator('button:has-text("Проверить")').click();
        await page.waitForFunction(() => /не пройдена|ошибка/i.test((document.querySelector('.try-it .try-output') || {}).textContent || ''), null, { timeout: 30000 });
        console.log('Python в браузере работает');
    } catch (e) { fail('lesson1.html', 'Python в браузере: ' + e.message.split('\n')[0]); }

    // 4. Страница задач и контрольные
    current = 'tasks.html';
    try {
        await page.goto(BASE + 'tasks.html');
        await page.waitForSelector('.task-item');
        const shown = await page.locator('.task-item').count();
        if (shown !== tasks.length) fail('tasks.html', `в списке ${shown} задач, а в tasks_data.js — ${tasks.length}`);
        await page.goto('about:blank');
        await page.goto(BASE + 'tasks.html#exam=2');
        await page.waitForSelector('.task-item');
        if (await page.locator('.task-item').count() !== 5) fail('tasks.html#exam=2', 'должно быть 5 задач контрольной');
    } catch (e) { fail('tasks.html', e.message.split('\n')[0]); }
    current = 'python-basic.html';
    await page.goto(BASE + 'python-basic.html');
    const projects = new Set(tasks.filter(t => t.project).map(t => t.project)).size;
    const rows = await page.locator('.my-row').count();
    if (rows !== 20 + projects) fail('python-basic.html', `на «Моих уроках» ${rows} строк, а должно быть 16 уроков, ${projects} проектов, 3 контрольные и итоговый экзамен`);
    current = 'teacher.html';
    await page.goto(BASE + 'teacher.html');
    if (!(await page.locator('.hub-gate').count())) fail('teacher.html', 'не показан вход по PIN-коду');

    // 5. Доступ к урокам: без ссылки открыт только урок 1; путь «кабинет → ученик → результат → ответ»
    try { await accessFlow(browser, BASE); console.log('Доступ к урокам и связь с кабинетом работают'); }
    catch (e) { fail('доступ к урокам', e.message.split('\n')[0]); }

    // 6. На телефоне страницы не прокручиваются вбок
    const phone = await newContext(browser, { ...devices['iPhone 13'] });
    const p2 = await phone.newPage();
    watchErrors(p2, () => 'телефон: ' + current);
    for (const f of ['index.html', 'python-basic.html', 'lesson4.html', 'lesson13.html', 'tasks.html', 'python-online.html', 'cheatsheet.html', 'teacher.html']) {
        current = f;
        await p2.goto(BASE + f);
        await p2.waitForTimeout(300);
        if (await p2.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) fail('телефон: ' + f, 'страница шире экрана');
    }
    console.log('Вид на телефоне проверен');

    await browser.close();
    server.close();
    if (problems.length) {
        console.log(`\nНайдены проблемы (${problems.length}):\n` + problems.join('\n'));
        process.exit(1);
    }
    console.log('\nВсё в порядке ✓');
}

main().catch((e) => { console.error(e); process.exit(1); });
