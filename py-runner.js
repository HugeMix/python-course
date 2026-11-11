// Обёртка над py-worker.js для страниц «Задачи» и «Python Online».
// Даёт простой интерфейс: runner.run({ code, stdin, testCode, onOutput }) → Promise с результатом,
// плюс runner.stop() — прервать выполнение (например, бесконечный цикл).

class PyRunner {
    constructor({ onReady, onLoadError, timeoutMs = 10000 } = {}) {
        this.onReady = onReady || (() => {});
        this.onLoadError = onLoadError || (() => {});
        this.timeoutMs = timeoutMs;
        this.ready = false;
        this.current = null; // { id, resolve, onOutput, timer }
        this.nextId = 1;
        this._start();
    }

    _start() {
        this.ready = false;
        this.worker = new Worker('py-worker.js');
        this.worker.onmessage = ({ data }) => this._handle(data);
        this.worker.onerror = (e) => {
            if (!this.ready) this.onLoadError(e.message || 'Не удалось запустить Python');
        };
    }

    _handle(msg) {
        if (msg.type === 'ready') { this.ready = true; this.onReady(); return; }
        if (msg.type === 'load-error') { this.onLoadError(msg.error); return; }

        const cur = this.current;
        if (!cur || msg.id !== cur.id) return;

        if (msg.type === 'stdout') cur.onOutput(msg.text);
        if (msg.type === 'done') this._finish({ error: msg.error, passed: msg.passed, timedOut: false, stopped: false });
    }

    _finish(result) {
        const cur = this.current;
        if (!cur) return;
        clearTimeout(cur.timer);
        this.current = null;
        cur.resolve(result);
    }

    run({ code, stdin = '', testCode = null, quietInput = false, echoInput = false, onOutput = () => {} }) {
        if (this.current) this.stop();
        return new Promise((resolve) => {
            const id = this.nextId++;
            const timer = setTimeout(() => this._kill({ timedOut: true }), this.timeoutMs);
            this.current = { id, resolve, onOutput, timer };
            this.worker.postMessage({ id, code, stdin, testCode, quietInput, echoInput });
        });
    }

    // Останавливаем зависший код: единственный надёжный способ — уничтожить поток
    // и создать новый (Python при этом загрузится заново, это занимает несколько секунд).
    _kill({ timedOut }) {
        this.worker.terminate();
        this._finish({ error: null, passed: false, timedOut, stopped: !timedOut });
        this._start();
    }

    stop() {
        if (this.current) this._kill({ timedOut: false });
    }

    get busy() {
        return this.current !== null;
    }
}

// Если CodeMirror не загрузился с CDN, работаем с обычным <textarea>,
// чтобы страница не падала целиком.
function createEditor(textarea, options) {
    if (typeof CodeMirror !== 'undefined') {
        return CodeMirror.fromTextArea(textarea, options);
    }
    textarea.classList.add('editor-fallback');
    textarea.spellcheck = false;
    return {
        getValue: () => textarea.value,
        setValue: (v) => { textarea.value = v; },
        on: (event, fn) => { if (event === 'change') textarea.addEventListener('input', fn); },
        setSize: () => {},
        showHint: () => {},
    };
}
