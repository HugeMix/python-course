// Проверка содержимого сайта без браузера.
// Запускает в настоящем Python (Pyodide, как на сайте) код из уроков, тестов и задач и сверяет результаты.
// Запуск: cd checks && npm install && node check-content.cjs
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { loadPyodide } = require('pyodide');

const ROOT = path.resolve(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const problems = [];
const fail = (where, what) => problems.push(`✗ ${where}: ${what}`);
let checked = 0;

const unescapeHtml = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const lastLine = (e) => String(e || '').trim().split('\n').filter(l => l.trim() && !l.startsWith('💡')).pop() || '';
const flat = (s) => String(s).trim().split(/\s+/).join(' ');
// так же, как сравнивает упражнения «Попробуйте сами» (script.js → normalizeOutput)
const tryNorm = (s) => String(s).replace(/\r/g, '').split('\n').map(l => l.trim().replace(/\s+/g, ' ')).join('\n')
    .trim().toLowerCase().replace(/ё/g, 'е').replace(/[.!]+$/g, '');
// так же, как сравнивает задачи «ввод → вывод» (tasks.html)
const ioNorm = (s) => String(s).replace(/\r/g, '').split('\n').map(l => l.trim().replace(/\s+/g, ' ').toLowerCase().replace(/ё/g, 'е')).join('\n').trim();

// ---------- Python: тот же py-worker.js, что работает на сайте ----------
let messages = [];
const workerScope = { importScripts() {}, loadPyodide, postMessage: (m) => messages.push(m), TextDecoder };
const sendToWorker = new Function(...Object.keys(workerScope), read('py-worker.js') + ';return (d) => onmessage({ data: d });')(...Object.values(workerScope));
async function py(code, extra = {}) {
    messages = [];
    await sendToWorker({ id: 1, code, ...extra });
    const done = messages.find(m => m.type === 'done');
    return { error: done.error, passed: done.passed, out: messages.filter(m => m.type === 'stdout').map(m => m.text).join('') };
}

async function main() {
    const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

    // ---------- 1. JavaScript без синтаксических ошибок ----------
    for (const f of ['script.js', 'pb-share.js', 'py-runner.js', 'py-worker.js', 'tasks_data.js']) {
        try { new vm.Script(read(f), { filename: f }); checked++; } catch (e) { fail(f, 'ошибка в JavaScript: ' + e.message); }
    }
    for (const f of htmlFiles) {
        [...read(f).matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, i) => {
            try { new vm.Script(m[1], { filename: f }); checked++; } catch (e) { fail(f, `ошибка в JavaScript (скрипт ${i + 1}): ${e.message}`); }
        });
    }

    const tasks = vm.runInNewContext(read('tasks_data.js') + ';tasks');
    const taskById = new Map(tasks.map(t => [t.id, t]));
    const quizData = vm.runInNewContext('(' + read('script.js').match(/const quizData = (\{[\s\S]*?\n {4}\});/)[1] + ')');

    // ---------- 2. Ссылки на файлы сайта и на задачи ----------
    for (const f of htmlFiles) {
        for (const m of read(f).matchAll(/(?:href|src)="([^"]+)"/g)) {
            const url = m[1];
            if (/^(https?:|mailto:|tel:|tg:|#|data:|javascript:)/.test(url)) continue;
            const [file, hash] = url.split('#');
            if (file && !fs.existsSync(path.join(ROOT, file.split('?')[0]))) fail(f, `ссылка на несуществующий файл «${url}»`);
            if (hash && hash.startsWith('task=') && !taskById.has(hash.slice(5))) fail(f, `ссылка на несуществующую задачу «${url}»`);
            checked++;
        }
    }

    while (!messages.some(m => m.type === 'ready')) await new Promise(r => setTimeout(r, 100));
    console.log('Python загружен, проверяем уроки…');

    // ---------- 3. Уроки ----------
    for (let n = 1; n <= 16; n++) {
        const file = `lesson${n}.html`;
        const html = read(file);

        // примеры с кнопкой «Запустить»
        for (const [i, m] of [...html.matchAll(/<pre data-run([^>]*)><code class="language-python">([\s\S]*?)<\/code><\/pre>/g)].entries()) {
            const attr = (name) => { const a = m[1].match(new RegExp(name + '="([^"]*)"')); return a ? unescapeHtml(a[1]) : ''; };
            const r = await py(unescapeHtml(m[2]), { stdin: attr('data-stdin'), echoInput: true });
            const expected = attr('data-expect-error');
            if (expected) { if (!r.error || !lastLine(r.error).includes(expected)) fail(file, `пример ${i + 1} должен падать с ${expected}, а получилось: ${lastLine(r.error) || 'без ошибки'}`); }
            else if (r.error) fail(file, `пример ${i + 1} падает с ошибкой: ${lastLine(r.error)}`);
            checked++;
        }

        // «Частые ошибки»: неправильный код даёт ровно то сообщение, что написано; правильный — работает
        for (const m of html.matchAll(/<div class="mistake"(?: data-stdin="([^"]*)")?>\s*<h3>([\s\S]*?)<\/h3>([\s\S]*?)<p class="mistake-error"><span>Python скажет:<\/span> <code>([\s\S]*?)<\/code><\/p>/g)) {
            const stdin = unescapeHtml(m[1] || '');
            const title = unescapeHtml(m[2]);
            const codes = [...m[3].matchAll(/<pre><code class="language-python">([\s\S]*?)<\/code><\/pre>/g)].map(x => unescapeHtml(x[1]));
            const expected = unescapeHtml(m[4]);
            if (codes.length !== 2) { fail(file, `«${title}»: ожидалось два блока кода`); continue; }
            const wrong = await py(codes[0], { stdin });
            if (lastLine(wrong.error) !== expected) fail(file, `«${title}»: написано «${expected}», а Python говорит «${lastLine(wrong.error) || 'ошибки нет'}»`);
            const right = await py(codes[1], { stdin });
            if (right.error) fail(file, `«${title}»: правильный вариант падает: ${lastLine(right.error)}`);
            checked += 2;
        }

        // «Попробуйте сами»: проверки записаны правильно, а пустая заготовка их не проходит
        for (const m of html.matchAll(/<div class="try-it" data-id="([^"]+)">[\s\S]*?<textarea class="try-code"[^>]*>([\s\S]*?)<\/textarea>\s*<script type="application\/json" class="try-cases">([\s\S]*?)<\/script>/g)) {
            const id = m[1];
            let cases;
            try { cases = JSON.parse(m[3]); } catch (e) { fail(file, `упражнение ${id}: проверки не читаются (${e.message})`); continue; }
            if (!Array.isArray(cases) || !cases.length || !cases.every(c => typeof c.in === 'string' && typeof c.out === 'string')) { fail(file, `упражнение ${id}: проверки записаны неправильно`); continue; }
            let startPasses = true;
            for (const c of cases) {
                const r = await py(unescapeHtml(m[2]), { stdin: c.in, quietInput: true });
                if (r.error || tryNorm(r.out) !== tryNorm(c.out)) { startPasses = false; break; }
            }
            if (startPasses) fail(file, `упражнение ${id}: заготовка проходит проверку без решения`);
            checked++;
        }

        // домашка: задачи существуют и относятся к этому уроку
        for (const m of html.matchAll(/<li data-task="([^"]+)">/g)) {
            const t = taskById.get(m[1]);
            if (!t) fail(file, `в домашке задача «${m[1]}», которой нет в tasks_data.js`);
            else if (!t.hw || t.lesson !== n) fail(file, `задача «${m[1]}» в домашке, но в tasks_data.js она не домашняя задача урока ${n}`);
            checked++;
        }

        // тест урока
        const quiz = quizData[file];
        if (!quiz) { fail(file, 'нет теста в quizData (script.js)'); continue; }
        if (quiz.length < 10) fail(file, `в тесте ${quiz.length} вопросов, нужно не меньше 10`);
        for (const q of quiz) {
            const where = `${file}, вопрос «${q.question}»`;
            if (!q.explanation) fail(where, 'нет пояснения');
            if (q.type === 'code') {
                if (!Array.isArray(q.correct) || !q.correct.length) fail(where, 'нет правильных ответов');
                continue;
            }
            if (!Array.isArray(q.options) || q.options.length < 2) { fail(where, 'мало вариантов ответа'); continue; }
            if (!(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.length)) { fail(where, 'номер правильного ответа вне списка'); continue; }
            if (new Set(q.options).size !== q.options.length) fail(where, 'варианты ответа повторяются');
            if (!q.code) continue;
            const answer = q.options[q.correct];
            if (/^Что выведет/.test(q.question)) {
                const r = await py(q.code);
                if (answer === 'Ошибка') { if (!r.error) fail(where, 'правильный ответ «Ошибка», но код работает'); }
                else if (r.error) fail(where, `код падает: ${lastLine(r.error)}`);
                else if (flat(r.out) !== (answer === 'Ничего' ? '' : flat(answer))) fail(where, `правильным отмечено «${answer}», а программа выводит «${r.out.trim()}»`);
                checked++;
            } else if (/^Найдите ошибку/.test(q.question) && !/Ошибки нет/.test(answer)) {
                const r = await py(q.code);
                if (!r.error) fail(where, 'в коде должна быть ошибка, но он работает');
                checked++;
            }
        }
    }

    // ---------- 4. Задачи ----------
    const seen = new Set();
    for (const t of tasks) {
        const where = `задача ${t.id}`;
        if (seen.has(t.id)) fail(where, 'такой id уже есть');
        seen.add(t.id);
        if (!t.title || !t.desc || typeof t.startCode !== 'string') fail(where, 'нет названия, условия или заготовки');
        if (!['easy', 'medium', 'hard'].includes(t.difficulty)) fail(where, `неизвестная сложность «${t.difficulty}»`);
        if (!(t.lesson >= 1 && t.lesson <= 16)) fail(where, `неверный номер урока ${t.lesson}`);
        if ((t.exam || t.project) && ![6, 11, 16].includes(t.lesson)) fail(where, 'задача контрольной или проекта должна стоять после урока 6, 11 или 16');
        if (t.kind === 'io') {
            if (!Array.isArray(t.cases) || !t.cases.length) { fail(where, 'нет проверок'); continue; }
            let startPasses = true;
            for (const c of t.cases) {
                const r = await py(t.startCode, { stdin: c.in, quietInput: true });
                if (r.error || ioNorm(r.out) !== ioNorm(c.out)) { startPasses = false; break; }
            }
            if (startPasses) fail(where, 'заготовка проходит проверку без решения');
        } else {
            if (!t.testCode) { fail(where, 'нет скрытых тестов'); continue; }
            const r = await py(t.startCode, { testCode: t.testCode });
            if (r.error && /SyntaxError|IndentationError/.test(r.error)) fail(where, 'в скрытых тестах или заготовке синтаксическая ошибка: ' + lastLine(r.error));
            if (r.passed) fail(where, 'заготовка проходит скрытые тесты без решения');
        }
        checked++;
    }
    for (let n = 1; n <= 16; n++) {
        const hw = tasks.filter(t => t.hw && t.lesson === n).length;
        if (hw < 3 || hw > 5) fail(`урок ${n}`, `в домашке ${hw} задач, нужно 3–5`);
        // задача на повторение: ровно одна в уроках 3–16, и она входит в домашку
        const rv = tasks.filter(t => t.review && t.lesson === n);
        if (n >= 3 && rv.length !== 1) fail(`урок ${n}`, `задач на повторение ${rv.length}, нужна 1`);
        if (n < 3 && rv.length) fail(`урок ${n}`, 'в уроках 1–2 задач на повторение нет');
        rv.filter(t => !t.hw).forEach(t => fail(`задача ${t.id}`, 'задача на повторение должна быть в домашке (hw: true)'));
    }
    // контрольные 1–3 — по 5 задач, итоговый экзамен (exam: 4) — 6 задач
    for (const [e, need] of [[1, 5], [2, 5], [3, 5], [4, 6]]) {
        const k = tasks.filter(t => t.exam === e).length;
        if (k !== need) fail(e === 4 ? 'итоговый экзамен' : `контрольная ${e}`, `${k} задач, нужно ${need}`);
    }
    // проекты модулей: шаги 1, 2, 3… без пропусков, проект стоит после последнего урока модуля
    for (const k of [...new Set(tasks.filter(t => t.project).map(t => t.project))]) {
        const steps = tasks.filter(t => t.project === k).map(t => t.step).sort((a, b) => a - b);
        if (steps.some((s, i) => s !== i + 1)) fail(`проект ${k}`, `шаги должны идти 1, 2, 3…, а сейчас: ${steps.join(', ')}`);
        if (tasks.some(t => t.project === k && t.lesson !== [0, 6, 11, 16][k])) fail(`проект ${k}`, 'задачи проекта должны стоять после урока ' + [0, 6, 11, 16][k]);
    }

    console.log(`\nПроверено: ${checked}.`);
    if (problems.length) {
        console.log(`Найдены проблемы (${problems.length}):\n` + problems.join('\n'));
        process.exit(1);
    }
    console.log('Всё в порядке ✓');
}

main().catch(e => { console.error(e); process.exit(1); });
