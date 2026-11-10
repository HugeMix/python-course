// Общие функции для страниц «Кабинет преподавателя» и «Моё задание».
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
        return { lessons, solved };
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

    return {
        LESSON_TITLES, LESSON_COUNT, TASK_POINTS, PASS_PERCENT, TEACHER_TG,
        read, write, encode, decode, fromHash, pageUrl, lessonFile,
        collectProgress, computePoints, maxPoints, taskDifficulty, clampInt,
        copy, telegramShare, formatDate, el, cleanText, randomId
    };
})();
