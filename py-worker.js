// Python (Pyodide) в отдельном потоке (Web Worker).
// Зачем: если код ученика зависнет (например, while True), зависнет только этот поток,
// а страница останется живой — её можно «убить» через worker.terminate() и создать заново.
//
// Сообщения от страницы:
//   { id, code, stdin }                     — просто выполнить код (Python Online)
//   { id, code, stdin, testCode }           — выполнить код ученика, затем скрытые тесты (Задачи)
// Сообщения странице:
//   { type: 'ready' } / { type: 'load-error', error }
//   { type: 'stdout', id, text }
//   { type: 'done', id, error, passed }

let pyodide = null;
let scriptError = null;

try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js');
} catch (err) {
    scriptError = err; // CDN недоступен (нет интернета или блокировка)
}

const ready = (scriptError ? Promise.reject(scriptError) : loadPyodide())
    .then(p => { pyodide = p; postMessage({ type: 'ready' }); })
    .catch(err => postMessage({ type: 'load-error', error: String(err) }));

// Вспомогательные функции для тестов: проверяют исходный код ученика через модуль ast,
// а не через inspect.getsource (который в Pyodide не работает для кода из строки).
const TEST_HELPERS = `
def __uses_call__(name):
    import ast
    return any(isinstance(n, ast.Call) and isinstance(n.func, ast.Name) and n.func.id == name
               for n in ast.walk(ast.parse(__user_source__)))

def __uses_node__(kind):
    import ast
    return any(type(n).__name__ == kind for n in ast.walk(ast.parse(__user_source__)))

__task_passed__ = False
`;

function shortError(err) {
    // Pyodide отдаёт полный traceback вместе со своими внутренними строками.
    // Оставляем только часть, относящуюся к коду ученика.
    const text = String(err && err.message ? err.message : err);
    const marker = 'File "<exec>"';
    const idx = text.indexOf(marker);
    const tail = idx >= 0 ? 'Traceback (most recent call last):\n  ' + text.slice(idx) : text;
    if (/EOFError/.test(tail)) {
        return tail.trim() + '\n\n💡 Программа вызвала input(), но данных для ввода не хватило. Заполните поле «Ввод данных» — по одной строке на каждый input().';
    }
    return tail.trim();
}

onmessage = async ({ data }) => {
    await ready;
    if (!pyodide) return;

    const { id, code, stdin = '', testCode } = data;

    const decoder = new TextDecoder();
    const write = (buf) => {
        postMessage({ type: 'stdout', id, text: decoder.decode(buf, { stream: true }) });
        return buf.length;
    };
    pyodide.setStdout({ write });
    pyodide.setStderr({ write });

    const lines = stdin === '' ? [] : stdin.replace(/\r\n/g, '\n').split('\n');
    let lineIndex = 0;
    pyodide.setStdin({ stdin: () => (lineIndex < lines.length ? lines[lineIndex++] : undefined) });

    // Каждый запуск — в новом, чистом пространстве имён:
    // функции из прошлых запусков не «доживают» до следующего.
    const globals = pyodide.globals.get('dict')();
    globals.set('__name__', '__main__');

    let error = null;
    let passed = false;
    try {
        await pyodide.runPythonAsync(code, { globals });
        if (testCode) {
            globals.set('__user_source__', code);
            await pyodide.runPythonAsync(TEST_HELPERS, { globals });
            await pyodide.runPythonAsync(testCode, { globals });
            passed = globals.get('__task_passed__') === true;
        }
    } catch (err) {
        error = shortError(err);
    } finally {
        // Выталкиваем то, что осталось в буфере (например, print(..., end=""))
        try { pyodide.runPython('import sys\nsys.stdout.flush()\nsys.stderr.flush()'); } catch (e) { /* ignore */ }
        globals.destroy();
    }
    postMessage({ type: 'done', id, error, passed });
};
