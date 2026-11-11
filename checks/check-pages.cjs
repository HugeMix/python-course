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
    if (openAll) await ctx.addInitScript(() => {
        try {
            if (!localStorage.getItem('unlocked_lessons')) {
                localStorage.setItem('unlocked_lessons', JSON.stringify(Array.from({ length: 16 }, (_, i) => 'lesson' + (i + 1) + '.html')));
            }
        } catch (e) { /* about:blank */ }
    });
    return ctx;
}

function watchErrors(page, where) {
    page.on('pageerror', (e) => fail(where(), 'ошибка JavaScript: ' + e.message));
}

// Ученик и преподаватель — в разных браузерах (как в жизни), ссылки передаются между ними
async function accessFlow(browser, BASE) {
    const T = await (await newContext(browser, {}, false)).newPage();
    const S = await (await newContext(browser, {}, false)).newPage();
    for (const [p, who] of [[T, 'кабинет'], [S, 'ученик']]) { watchErrors(p, () => 'доступ к урокам (' + who + ')'); p.on('dialog', d => d.accept()); }
    const must = (ok, what) => { if (!ok) throw new Error(what); };

    await S.goto(BASE + 'lesson1.html');
    must(!(await S.locator('.lesson-lock').count()), 'урок 1 должен быть открыт всем');
    await S.goto(BASE + 'lesson3.html');
    must(await S.locator('.lesson-lock').count() === 1, 'урок 3 без ссылки преподавателя должен быть закрыт');

    // кабинет: PIN, новый ученик с двумя оплаченными уроками → открывается урок 2
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

    // ученик открывает ссылку
    await S.goto(BASE + link1.slice(link1.indexOf('python-basic.html')));
    await S.waitForSelector('.my-row');
    const open1 = await S.evaluate(() => JSON.parse(localStorage.getItem('unlocked_lessons') || '[]'));
    must(open1.join() === 'lesson1.html,lesson2.html', 'по ссылке должны открыться уроки 1 и 2, а открыто: ' + open1.join(', '));
    await S.goto(BASE + 'lesson2.html');
    must(!(await S.locator('.lesson-lock').count()), 'урок 2 после ссылки должен открыться');

    // ученик «прошёл» урок 1 и отправляет результат
    await S.evaluate(() => {
        localStorage.setItem('quiz_results', JSON.stringify({ 'lesson1.html': true }));
        localStorage.setItem('quiz_scores', JSON.stringify({ 'lesson1.html': { best: 90, attempts: 1 } }));
    });
    await S.goto('about:blank');
    await S.goto(BASE + 'python-basic.html#send');
    await S.waitForFunction(() => (document.querySelector('.send-btn') || { dataset: {} }).dataset.report);
    const report = await S.locator('.send-btn').getAttribute('data-report');

    // преподаватель открывает результат, засчитывает урок 1 и открывает урок 3
    await T.goto('about:blank');
    await T.goto(BASE + report.slice(report.indexOf('teacher.html')));
    await T.waitForSelector('.cab-review');
    await T.click('.cab-review button:has-text("Зачесть урок")');
    await T.waitForSelector('.cab-sendbox');
    await T.locator('.cab-lrow', { hasText: 'Операторы' }).locator('button:has-text("Открыть")').click();
    await T.waitForSelector('.cab-sendbox a[data-link]');
    const link2 = await T.locator('.cab-sendbox a[data-link]').getAttribute('data-link');

    // ученик видит ответ и новый урок
    await S.goto('about:blank');
    await S.goto(BASE + link2.slice(link2.indexOf('python-basic.html')));
    await S.waitForSelector('.my-row');
    const open2 = await S.evaluate(() => JSON.parse(localStorage.getItem('unlocked_lessons') || '[]'));
    must(open2.includes('lesson3.html'), 'после второй ссылки должен открыться урок 3');
    must(await S.locator('.my-row', { hasText: 'Введение в Python' }).locator('.my-pill-ok').count() === 1, 'урок 1 у ученика должен быть «Зачтён»');
    await T.context().close();
    await S.context().close();
}

async function main() {
    const server = await serve();
    const BASE = `http://127.0.0.1:${server.address().port}/`;
    const browser = await chromium.launch();
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
            await page.goto(BASE + file + '#quiz');
            await page.waitForSelector('.qz-run', { timeout: 10000 });
            let asked = 0;
            while (await page.locator('.qz-run').count()) {
                const text = await page.textContent('.qz-question');
                const code = await page.locator('.qz-run .quiz-code code').count() ? await page.textContent('.qz-run .quiz-code code') : '';
                const q = quizData[file].find(x => x.question === text && (x.code || '') === code);
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
    if (await page.locator('.my-row').count() !== 19) fail('python-basic.html', 'на «Моих уроках» должно быть 16 уроков и 3 контрольные');
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
