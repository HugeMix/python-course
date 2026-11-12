// Общие функции для страниц «Кабинет преподавателя», «Мои уроки» и «Задачи».
//
// Сервера у сайта нет, поэтому задание и отчёт передаются ссылкой:
// данные упаковываются (JSON → сжатие → base64url) и кладутся в адрес после «#».
// Часть адреса после «#» не отправляется на сервер — она остаётся только в браузере.
//
// Важно: всё, что пришло из ссылки, — чужие данные. Показываем их только через
// textContent (никакого innerHTML), чтобы ссылка не могла встроить на страницу свой код.

const PB = (() => {
    const LESSON_TITLES = [
        'Введение в Python', 'Переменные и типы данных', 'Операторы', 'Условия', 'Циклы',
        'Списки и кортежи', 'Функции', 'Словари и множества', 'Строки', 'Файлы',
        'Обработка ошибок', 'Модули и библиотеки', 'Основы ООП', 'Дата и время',
        'Итоговый проект', 'Работа с API'
    ];
    const LESSON_COUNT = LESSON_TITLES.length;
    const TASK_POINTS = { easy: 1, medium: 2, hard: 3 };
    const PASS_PERCENT = 70;
    const TEACHER_TG = 'https://t.me/HugeMixProfile';

    function read(key, fallback) {
        try {
            const v = localStorage.getItem(key);
            return v === null ? fallback : JSON.parse(v);
        } catch (e) { return fallback; }
    }

    function write(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch (e) { return false; }
    }

    // --- Упаковка данных в ссылку ---
    function toBase64Url(bytes) {
        let bin = '';
        bytes.forEach(b => { bin += String.fromCharCode(b); });
        return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    function fromBase64Url(str) {
        const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const bin = atob(b64 + '==='.slice((b64.length + 3) % 4));
        return Uint8Array.from(bin, c => c.charCodeAt(0));
    }

    async function pipe(bytes, stream) {
        const out = new Response(new Blob([bytes]).stream().pipeThrough(stream));
        return new Uint8Array(await out.arrayBuffer());
    }

    async function encode(obj) {
        const bytes = new TextEncoder().encode(JSON.stringify(obj));
        if (typeof CompressionStream !== 'undefined') {
            try { return 'z' + toBase64Url(await pipe(bytes, new CompressionStream('deflate'))); }
            catch (e) { /* без сжатия */ }
        }
        return 'j' + toBase64Url(bytes);
    }

    async function decode(str) {
        try {
            return await decodeRaw(str);
        } catch (e) {
            throw new Error('ссылка повреждена или открыта не целиком');
        }
    }

    async function decodeRaw(str) {
        if (!str || str.length < 2 || str.length > 200000) throw new Error('пустая или слишком длинная ссылка');
        const kind = str[0];
        let bytes = fromBase64Url(str.slice(1));
        if (kind === 'z') {
            if (typeof DecompressionStream === 'undefined') throw new Error('браузер слишком старый');
            bytes = await pipe(bytes, new DecompressionStream('deflate'));
        } else if (kind !== 'j') {
            throw new Error('неизвестный формат');
        }
        const obj = JSON.parse(new TextDecoder().decode(bytes));
        if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('неверные данные');
        return obj;
    }

    // Достаёт упакованные данные из адреса: #a=..., #r=...
    function fromHash(prefix) {
        const m = location.hash.match(new RegExp('^#' + prefix + '=([A-Za-z0-9_-]+)'));
        return m ? m[1] : null;
    }

    function pageUrl(file) {
        return new URL(file, location.href).href.split('#')[0];
    }

    // --- Прогресс ученика в этом браузере ---
    function lessonFile(n) { return 'lesson' + n + '.html'; }
    const LESSON_FILES_INDEX = {};
    for (let n = 1; n <= LESSON_COUNT; n++) LESSON_FILES_INDEX['lesson' + n + '.html'] = n;

    function collectProgress() {
        const passed = read('quiz_results', {});
        const scores = read('quiz_scores', {});
        const lessons = {};
        for (let n = 1; n <= LESSON_COUNT; n++) {
            const f = lessonFile(n);
            const sc = scores[f];
            if (passed[f] || sc) {
                lessons[n] = {
                    p: passed[f] ? 1 : 0,
                    b: sc ? clampInt(sc.best, 0, 100) : (passed[f] ? PASS_PERCENT : 0),
                    a: sc ? clampInt(sc.attempts, 0, 999) : 1
                };
            }
        }
        const solved = Object.keys(read('solved_tasks', {})).filter(id => /^[\w-]{1,40}$/.test(id));
        // вопросы теста, на которые ученик ответил неверно и ещё не исправился (номера в тесте урока)
        const mistakes = {};
        Object.entries(read('quiz_mistakes', {}) || {}).forEach(([f, list]) => {
            const n = LESSON_FILES_INDEX[f];
            if (n && Array.isArray(list) && list.length) mistakes[n] = list.map(i => clampInt(i, 0, 99)).slice(0, 30);
        });
        return { lessons, solved, mistakes };
    }

    function clampInt(v, min, max) {
        const n = Math.round(Number(v));
        return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min;
    }

    // --- Баллы ---
    // Тест: до 10 баллов (лучший результат / 10). Задача: лёгкая 1, средняя 2, сложная 3.
    function taskDifficulty(id) {
        const list = typeof tasks !== 'undefined' ? tasks : [];
        const t = list.find(x => x.id === id);
        return t ? t.difficulty : null;
    }

    function computePoints(lessons, solved) {
        let pts = 0;
        Object.values(lessons || {}).forEach(l => { pts += Math.round(clampInt(l.b, 0, 100) / 10); });
        (solved || []).forEach(id => { pts += TASK_POINTS[taskDifficulty(id)] || 0; });
        return pts;
    }

    function maxPoints() {
        const list = typeof tasks !== 'undefined' ? tasks : [];
        return LESSON_COUNT * 10 + list.reduce((s, t) => s + (TASK_POINTS[t.difficulty] || 0), 0);
    }

    // --- Отправка ---
    function copy(text) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
        return new Promise((resolve, reject) => {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            ta.remove();
            ok ? resolve() : reject(new Error('copy failed'));
        });
    }

    function telegramShare(url, text) {
        return 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text || '');
    }

    function formatDate(iso) {
        const d = new Date(iso);
        if (isNaN(d)) return '—';
        return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) +
            ', ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    }

    function el(tag, attrs, ...children) {
        const node = document.createElement(tag);
        Object.entries(attrs || {}).forEach(([k, v]) => {
            if (v === null || v === undefined || v === false) return;
            if (k === 'class') node.className = v;
            else if (k === 'text') node.textContent = v;
            else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
            else node.setAttribute(k, v === true ? '' : v);
        });
        children.flat().forEach(c => {
            if (c === null || c === undefined || c === false) return;
            node.append(c instanceof Node ? c : document.createTextNode(String(c)));
        });
        return node;
    }

    function cleanText(v, max) {
        return String(v === undefined || v === null ? '' : v).slice(0, max || 200);
    }

    function randomId() {
        const a = new Uint8Array(6);
        crypto.getRandomValues(a);
        return toBase64Url(a);
    }

    function plural(n, one, few, many) {
        const m10 = n % 10, m100 = n % 100;
        return n + ' ' + (m10 === 1 && m100 !== 11 ? one : m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? few : many);
    }

    // --- Результат урока: освоен или нет, оценка, что осталось сделать ---
    // Урок освоен, когда тест сдан (70% и больше) и решена вся домашка, кроме, может быть, одной задачи.
    // Оценка ставится сама: «Отлично» — тест на 90% и выше и решена вся домашка; «Хорошо» — урок освоен.
    // Преподаватель может засчитать урок вручную (например, после занятия по созвону).
    // Одни и те же правила работают у ученика (по его прогрессу) и в кабинете (по присланному результату).
    const EXCELLENT_PERCENT = 90;
    const EXAM_PASS = 4;                    // контрольная зачтена: решено 4 задачи из 5
    const GRADE_TEXT = { excellent: 'Отлично', good: 'Хорошо' };
    // Контрольные после модулей и итоговый экзамен перед сертификатом (задачи с полем exam в tasks_data.js)
    const EXAMS = {
        1: { title: 'Контрольная 1', from: 1, to: 6, need: 4 },
        2: { title: 'Контрольная 2', from: 7, to: 11, need: 4 },
        3: { title: 'Контрольная 3', from: 12, to: 16, need: 4 },
        4: { title: 'Итоговый экзамен', from: 1, to: 16, need: 5, final: true }
    };
    // Мини-проект в конце каждого модуля (задачи с полем project; шаги проекта — по порядку)
    const PROJECTS = {
        1: { module: 1, after: 6 },
        2: { module: 2, after: 11 },
        3: { module: 3, after: 16 }
    };

    function allTasks() { return typeof tasks !== 'undefined' ? tasks : []; }
    function hwTasks(n) { return allTasks().filter(t => t.hw && t.lesson === n).map(t => t.id); }
    function examTasks(k) { return allTasks().filter(t => t.exam === k).map(t => t.id); }
    function projectTasks(k) { return allTasks().filter(t => t.project === k).sort((a, b) => (a.step || 0) - (b.step || 0)).map(t => t.id); }
    function projectTitle(k) { const t = allTasks().find(x => x.project === k); return t && t.projectTitle ? t.projectTitle : 'Проект модуля ' + k; }
    const solvedCache = new WeakMap();   // чтобы не пересобирать множество решённых задач на каждый урок
    function solvedSetOf(prog) {
        let set = solvedCache.get(prog);
        if (!set) { set = new Set(prog.solved || []); solvedCache.set(prog, set); }
        return set;
    }

    // prog — {lessons: {n: {p, b, a}}, solved: [id…]}; reply — ответ преподавателя по уроку
    function lessonResult(n, prog, reply) {
        const q = (prog.lessons || {})[n] || null;
        const best = q ? clampInt(q.b, 0, 100) : 0;
        const solvedSet = solvedSetOf(prog);
        const hw = hwTasks(n);
        const solved = hw.filter(id => solvedSet.has(id)).length;
        const needHw = Math.max(0, hw.length - 1);
        const quizOk = !!q && (!!q.p || best >= PASS_PERCENT);
        const hwOk = solved >= needHw;
        const byTeacher = !!(reply && reply.s === 'ok');
        const mastered = (quizOk && hwOk) || byTeacher;
        const grade = !mastered ? null : (quizOk && best >= EXCELLENT_PERCENT && solved === hw.length ? 'excellent' : 'good');
        const todo = [];
        if (!mastered) {
            if (!quizOk) todo.push(q ? `пересдать тест — сейчас ${best}%, нужно ${PASS_PERCENT}%` : 'сдать тест урока');
            if (!hwOk) todo.push(`решить ещё ${plural(needHw - solved, 'задачу', 'задачи', 'задач')} из домашки`);
        }
        return { n, quiz: q, best, hw, solved, needHw, quizOk, hwOk, mastered, byTeacher, grade, todo, started: !!q || solved > 0 };
    }

    function examResult(k, prog) {
        const ids = examTasks(k);
        const solvedSet = solvedSetOf(prog);
        const done = ids.filter(id => solvedSet.has(id)).length;
        const need = Math.min(EXAMS[k].need, ids.length);
        return { k, ids, done, total: ids.length, need, passed: done >= need };
    }

    // Проект зачтён, когда решены все его шаги (пока у модуля нет проекта — он не мешает)
    function projectResult(k, prog) {
        const ids = projectTasks(k);
        const solvedSet = solvedSetOf(prog);
        const done = ids.filter(id => solvedSet.has(id)).length;
        return { k, ids, done, total: ids.length, passed: done >= ids.length, title: projectTitle(k) };
    }

    // --- Доступ ученика ---
    // Урок 1 открыт всем. Дальше ученик идёт сам: следующий урок открывается, когда предыдущий освоен, —
    // пока не закончатся оплаченные уроки. Перед уроками 7 и 12 нужно сдать контрольную (4 задачи из 5).
    // Ссылка преподавателя (python-basic.html#a=...) сообщает, сколько уроков оплачено, ответы по урокам
    // и сообщение ученику; ещё в ней можно открыть урок или выдать контрольную вручную.
    const FREE_LESSONS = [1];
    const EXAM_LESSONS = { 1: [1, 6], 2: [7, 11], 3: [12, 16], 4: [1, 16] };
    const GATE_EXAM = { 7: 1, 12: 2 };      // перед уроком 7 — контрольная 1 и проект 1, перед уроком 12 — контрольная 2 и проект 2

    function isTeacherBrowser() { return !!read('pb_teacher_pin', null); }

    function lessonList(arr) {
        return [...new Set((Array.isArray(arr) ? arr : []).map(n => clampInt(n, 0, 99)).filter(n => n >= 1 && n <= LESSON_COUNT))].sort((a, b) => a - b);
    }

    // Проверяем и чистим данные из ссылки преподавателя (старый формат «задание» тоже понимаем)
    function cleanAccess(obj) {
        if (!obj || (obj.t !== 'access' && obj.t !== 'assign')) return null;
        const known = typeof tasks !== 'undefined' ? new Set(tasks.map(t => t.id)) : null;
        const replies = {};
        Object.entries(obj.replies && typeof obj.replies === 'object' ? obj.replies : {}).forEach(([k, v]) => {
            const n = clampInt(k, 0, 99);
            if (n >= 1 && n <= LESSON_COUNT && v && ['ok', 'redo', 'note'].includes(v.s)) {
                replies[n] = { s: v.s, c: cleanText(v.c, 800), at: cleanText(v.at, 40) };
            }
        });
        return {
            v: 3,
            sid: cleanText(obj.sid || obj.id, 20),
            name: cleanText(obj.name, 60),
            note: cleanText(obj.note, 600),
            paid: clampInt(obj.paid, 0, 99),
            lessons: lessonList([...FREE_LESSONS, ...(obj.lessons || [])]),
            tasks: (Array.isArray(obj.tasks) ? obj.tasks : []).filter(id => typeof id === 'string' && (!known || known.has(id))).slice(0, 200),
            exams: [...new Set((Array.isArray(obj.exams) ? obj.exams : []).map(n => clampInt(n, 0, 9)).filter(n => n >= 1 && n <= 3))],
            replies,
            cert: obj.cert && typeof obj.cert === 'object' && obj.cert.no
                ? { no: cleanText(obj.cert.no, 30), name: cleanText(obj.cert.name, 60), at: cleanText(obj.cert.at, 40) } : null,
            profileReset: cleanText(obj.profileReset || '', 40),
            at: cleanText(obj.at, 40) || new Date().toISOString()
        };
    }

    function readAccess() {
        const a = read('pb_access', null);
        if (a && (a.v === 3 || a.v === 2)) return { paid: 0, ...a };
        const old = read('pb_assignment', null); // ссылка-задание старого образца
        return old ? cleanAccess({ ...old, t: 'assign' }) : null;
    }

    function saveAccess(a) {
        write('pb_access', a);
        if (a.name) write('pb_student_name', a.name);
    }

    // Ссылка преподавателя открыта: сохраняем доступ (если он не старее уже сохранённого)
    async function receiveAccess() {
        const packed = fromHash('a');
        if (!packed) return null;
        history.replaceState(null, '', location.pathname); // данные не остаются в адресе
        try {
            const a = cleanAccess(await decode(packed));
            if (!a) throw new Error('это не ссылка преподавателя');
            const prev = readAccess();
            if (prev && prev.sid === a.sid && prev.at && a.at && a.at < prev.at) return { ok: true, access: prev, stale: true };
            saveAccess(a);
            return { ok: true, access: a, prev };
        } catch (e) {
            return { ok: false, error: e.message };
        }
    }

    // Что открыто ученику: уроки, контрольные, проекты, и почему закрыт урок.
    // why[n]: 'prev' — сначала освоить предыдущий урок, 'exam' — сначала сдать контрольную и проект модуля,
    //         'pay' — урок не оплачен (без ссылки преподавателя — «откроет преподаватель»).
    // kept — уроки, которые у ученика уже открывались: обратно они не закрываются (даже если правила поменяются).
    function computeAccess(access, prog, kept) {
        const paidTo = Math.min(LESSON_COUNT, FREE_LESSONS.length + (access ? clampInt(access.paid, 0, 99) : 0));
        const replies = (access && access.replies) || {};
        const results = {};
        for (let n = 1; n <= LESSON_COUNT; n++) results[n] = lessonResult(n, prog, replies[n]);
        const exams = {};
        Object.keys(EXAMS).forEach(k => { exams[k] = examResult(Number(k), prog); });
        const projects = {};
        Object.keys(PROJECTS).forEach(k => { projects[k] = projectResult(Number(k), prog); });
        const open = new Set([...FREE_LESSONS, ...((access && access.lessons) || []), ...lessonList(kept || [])]);
        const why = {};
        for (let n = 2; n <= LESSON_COUNT; n++) {
            if (open.has(n)) continue;
            const gate = GATE_EXAM[n];
            if (n > paidTo) why[n] = 'pay';
            else if (!open.has(n - 1) || !results[n - 1].mastered) why[n] = 'prev';
            else if (gate && !(exams[gate].passed && projects[gate].passed)) why[n] = 'exam';
            else open.add(n);
        }
        const given = (access && access.exams) || [];
        [1, 2, 3].forEach(k => {
            const last = EXAM_LESSONS[k][1];
            const ready = open.has(last) && results[last].mastered;
            exams[k].open = given.includes(k) || ready;
            projects[k].open = given.includes(k) || ready;
        });
        // итоговый экзамен — когда освоены все уроки и сданы все контрольные и проекты модулей
        const allLessons = Object.values(results).every(r => r.mastered);
        const allModules = [1, 2, 3].every(k => exams[k].passed && projects[k].passed);
        exams[4].open = given.includes(4) || (allLessons && allModules);
        // урок, которым ученик занимается сейчас: первый открытый и ещё не освоенный
        let current = null;
        for (let n = 1; n <= LESSON_COUNT; n++) if (open.has(n) && !results[n].mastered) { current = n; break; }
        const certReady = allLessons && allModules && exams[4].passed;
        return { paidTo, paid: paidTo - FREE_LESSONS.length, open, why, results, exams, projects, current, gate: GATE_EXAM, allLessons, allModules, certReady };
    }

    // Что нужно для сертификата — списком (для «Моих уроков», кабинета и страницы сертификата)
    function certChecklist(state) {
        const mastered = Object.values(state.results).filter(r => r.mastered).length;
        const items = [{ text: `Освоить все уроки: ${mastered} из ${LESSON_COUNT}`, done: state.allLessons }];
        [1, 2, 3].forEach(k => {
            const ex = state.exams[k], pr = state.projects[k];
            items.push({ text: `Контрольная ${k}: решено ${ex.done} из ${ex.total}, нужно ${ex.need}`, done: ex.passed });
            if (pr.total) items.push({ text: `${pr.title}: шагов ${pr.done} из ${pr.total}`, done: pr.passed });
        });
        const fin = state.exams[4];
        items.push({ text: `Итоговый экзамен: решено ${fin.done} из ${fin.total}, нужно ${fin.need}`, done: fin.passed });
        return items;
    }

    function myState() {
        const kept = read('pb_opened', []);
        const st = computeAccess(readAccess(), collectProgress(), kept);
        // запоминаем открытые уроки, чтобы они не закрылись обратно
        const list = [...st.open].sort((a, b) => a - b);
        if (list.length !== lessonList(kept).length) write('pb_opened', list);
        return st;
    }

    // --- Профиль ученика ---
    // Имя приходит из ссылки преподавателя (ученик сам его не меняет). Фото ставится один раз;
    // сменить его можно, только если преподаватель разрешит (кнопка в кабинете).
    function readProfile() { return read('pb_profile', null); }
    function profileName() {
        const a = readAccess();
        const p = readProfile();
        return (a && a.name) || (p && p.name) || '';
    }
    function profileLocked() {
        const p = readProfile();
        if (!p || !p.savedAt) return false;
        const a = readAccess();
        return !(a && a.profileReset && a.profileReset > p.savedAt);
    }
    function saveProfile(data) {
        const p = { ...(readProfile() || {}), ...data, savedAt: new Date().toISOString() };
        if (!p.startedAt) p.startedAt = p.savedAt;
        return write('pb_profile', p);
    }

    function isLessonOpen(n) {
        if (FREE_LESSONS.includes(n) || isTeacherBrowser()) return true;
        return myState().open.has(n);
    }

    function isExamOpen(k) {
        if (isTeacherBrowser()) return true;
        return myState().exams[k].open;
    }

    function isTaskOpen(t) {
        if (!t) return false;
        if (isTeacherBrowser()) return true;
        const a = readAccess();
        if (a && a.tasks.includes(t.id)) return true;
        if (t.exam) return isExamOpen(t.exam);
        if (t.project) return myState().projects[t.project].open;
        return isLessonOpen(t.lesson);
    }

    // Почему урок закрыт — простыми словами (для страницы урока и «Моих уроков»)
    function lockText(n, state) {
        const st = state || myState();
        const why = st.why[n];
        if (why === 'prev') return { kind: 'prev', title: `Урок откроется после урока ${n - 1}`, text: `Освойте урок ${n - 1}: сдайте тест и решите домашку — этот урок откроется сам.` };
        if (why === 'exam') {
            const k = st.gate[n];
            const need = [];
            if (!st.exams[k].passed) need.push(`сдайте контрольную ${k} (${st.exams[k].need} задачи из ${st.exams[k].total})`);
            if (!st.projects[k].passed) need.push(`сделайте ${st.projects[k].title.replace(/^Проект/, 'проект')}`);
            return { kind: 'exam', title: `Сначала — итоги модуля ${k}`, text: `Чтобы перейти к следующему модулю, ${need.join(' и ')}. После этого урок откроется сам.` };
        }
        if (readAccess()) return { kind: 'pay', title: 'Оплаченные уроки закончились', text: 'Чтобы продолжить, напишите преподавателю в Telegram — после оплаты урок откроется.' };
        return { kind: 'pay', title: 'Этот урок откроет преподаватель', text: 'Урок 1 бесплатный — его можно пройти прямо сейчас. Остальные уроки открываются после записи на занятия: преподаватель пришлёт ссылку, и уроки появятся в разделе «Мои уроки».' };
    }

    // Ссылка-отчёт для преподавателя: тесты, решённые задачи и код решений открытых уроков
    const MAX_REPORT_LINK = 3500;
    async function buildReportLink(name, focus) {
        const a = readAccess();
        const prog = collectProgress();
        const report = { v: 2, t: 'report', sid: a ? a.sid : '', name: cleanText(name, 60), at: new Date().toISOString(),
            focus: focus ? clampInt(focus, 1, LESSON_COUNT) : 0, lessons: prog.lessons, solved: prog.solved, mk: prog.mistakes,
            op: lessonList(read('pb_opened', [])), code: {} };
        const list = typeof tasks !== 'undefined' ? tasks : [];
        const ids = list.filter(t => isTaskOpen(t)).map(t => t.id);
        // код: сначала до 1500 символов на задачу; если ссылка не помещается в сообщение — короче
        for (const limit of [1500, 600, 250, 0]) {
            report.code = {};
            if (limit) ids.forEach(id => {
                let code = '';
                try { code = localStorage.getItem('saved_code_' + id) || ''; } catch (e) { /* нет кода */ }
                if (code.trim()) report.code[id] = code.slice(0, limit);
            });
            const link = pageUrl('teacher.html') + '#r=' + await encode(report);
            if (link.length <= MAX_REPORT_LINK || !limit) return link;
        }
    }

    return {
        LESSON_TITLES, LESSON_COUNT, TASK_POINTS, PASS_PERCENT, TEACHER_TG, FREE_LESSONS, EXAM_LESSONS,
        read, write, encode, decode, fromHash, pageUrl, lessonFile,
        collectProgress, computePoints, maxPoints, taskDifficulty, clampInt,
        copy, telegramShare, formatDate, el, cleanText, randomId,
        isTeacherBrowser, cleanAccess, readAccess, saveAccess, receiveAccess,
        isLessonOpen, isExamOpen, isTaskOpen, buildReportLink,
        plural, lessonResult, examResult, projectResult, computeAccess, myState, lockText, hwTasks, examTasks, projectTasks,
        certChecklist, readProfile, profileName, profileLocked, saveProfile,
        EXAM_PASS, GRADE_TEXT, GATE_EXAM, EXCELLENT_PERCENT, EXAMS, PROJECTS
    };
})();
