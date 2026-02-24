import re

def fix():
    with open("tasks.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Move scripts to head
    head_scripts = """    <!-- CodeMirror for the editor -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/dracula.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/python/python.min.js"></script>

    <!-- Pyodide -->
    <script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>"""
    
    html = re.sub(
        r'    <!-- CodeMirror -->.*?<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/theme/dracula.min.css">',
        head_scripts,
        html,
        flags=re.DOTALL
    )

    # Remove the old script tags from body
    html = re.sub(
        r'    <!-- Скрипты -->\s*<script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>\s*<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js"></script>\s*<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/python/python.min.js"></script>',
        '    <!-- Скрипты -->',
        html
    )

    # Fix the javascript execution logic
    old_init = """        async function loadPython() {
            try {
                pyodideInstance = await loadPyodide();
                btnSubmit.textContent = "▶ Проверить решение";
                btnSubmit.disabled = false;
                resultsDiv.textContent = "Готово. Напишите код в редакторе и нажмите «Проверить».";
                renderTasks();
                selectTask(0);
            } catch (err) {
                resultsDiv.textContent = "Ошибка загрузки движка Python: " + err;
            }
        }"""
        
    new_init = """        // Initialize UI immediately
        renderTasks();
        selectTask(0);
        
        async function loadPython() {
            try {
                pyodideInstance = await loadPyodide();
                btnSubmit.innerHTML = "▶ Проверить решение";
                btnSubmit.disabled = false;
                resultsDiv.textContent = "✅ Python движок загружен. Напишите код и нажмите «Проверить».";
                resultsDiv.style.color = "var(--text-color)";
            } catch (err) {
                resultsDiv.textContent = "❌ Ошибка загрузки движка Python: " + err;
            }
        }"""
    html = html.replace(old_init, new_init)

    with open("tasks.html", "w", encoding="utf-8") as f:
        f.write(html)

fix()
