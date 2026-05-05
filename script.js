document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Configuration ---
    const SECRET_PASSWORD = "admin";
    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html'
    ];

    // --- 2. Navigation & Active Link Logic ---
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === '/') currentPath = 'index.html';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else if (currentPath.startsWith('lesson') && href === 'python-basic.html') {
            link.classList.add('active');
        }
    });

    // --- 3. Lock System & Password Logic ---
    function initLockSystem() {
        if (!document.querySelector('.lessons-grid')) return;

        const cards = document.querySelectorAll('.lesson-card');
        const quizProgress = JSON.parse(localStorage.getItem('python_quiz_progress') || '{}');
        const manualUnlocks = JSON.parse(localStorage.getItem('manual_unlocks') || '{}');

        cards.forEach((card, index) => {
            const link = card.querySelector('a.btn');
            if (!link) return;

            const lessonFileName = link.getAttribute('href');
            const isManuallyUnlocked = manualUnlocks[lessonFileName];
            const isFirst = index === 0;
            const prevLesson = lessonsList[index - 1];
            const isPrevPassed = isFirst || quizProgress[prevLesson];

            if (!isFirst && !isPrevPassed && !isManuallyUnlocked) {
                card.classList.add('locked');
                card.style.opacity = "0.8";
                link.style.display = 'none';

                const lockUI = document.createElement('div');
                lockUI.className = 'lock-ui-container';
                lockUI.style.cssText = "margin-top: 15px; padding: 15px; background: rgba(0,0,0,0.03); border-radius: 12px; border: 1px dashed #ccc; position: relative; z-index: 10;";
                
                lockUI.innerHTML = `
                    <p style="margin: 0 0 12px 0; font-size: 0.85rem; color: #666; font-weight: 500;">🔒 Урок заблокирован</p>
                    <button type="button" class="unlock-btn-trigger" style="width: 100%; padding: 12px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; transition: 0.2s; position: relative; z-index: 9999;">Ввести пароль</button>
                `;
                
                card.appendChild(lockUI);

                // Use direct onclick to ensure it's not blocked by other listeners
                const trigger = lockUI.querySelector('.unlock-btn-trigger');
                trigger.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const pass = prompt('Введите пароль для доступа к уроку:');
                    if (pass === SECRET_PASSWORD) {
                        manualUnlocks[lessonFileName] = true;
                        localStorage.setItem('manual_unlocks', JSON.stringify(manualUnlocks));
                        alert('✅ Доступ разрешен!');
                        window.location.reload();
                    } else if (pass !== null && pass !== "") {
                        alert('❌ Неверный пароль!');
                    }
                    return false;
                };
                
                // Add hover effect
                trigger.onmouseover = () => trigger.style.background = "#4f46e5";
                trigger.onmouseout = () => trigger.style.background = "#6366f1";
            }
        });
    }

    // --- 4. Quiz Logic ---
    function initQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer) return;

        const lessonId = currentPath;
        const questions = quizData[lessonId];
        if (!questions) return;

        quizContainer.innerHTML = `
            <div class="quiz-header" style="text-align: center; margin-bottom: 30px; padding: 20px; background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow);">
                <h2 style="color: var(--accent-color); margin-bottom: 10px;">🎯 Проверка знаний</h2>
                <p style="color: #666;">Ответьте правильно на все вопросы, чтобы подтвердить изучение темы.</p>
            </div>
            <div id="quiz-questions" style="background: var(--card-bg); padding: 30px; border-radius: 16px; box-shadow: var(--shadow); border: 1px solid rgba(0,0,0,0.05);"></div>
            <div id="quiz-controls" style="margin-top: 30px; text-align: center;">
                <button id="submit-quiz" class="btn" style="display: none; width: 100%; background: var(--accent-color); color: white; border: none; padding: 18px; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 1.1rem; transition: 0.3s;">🚀 Проверить мои ответы</button>
                <div id="quiz-result" style="margin-top: 25px; padding: 20px; border-radius: 12px; font-weight: 700; font-size: 1.1rem; display: none;"></div>
                <button id="retry-lesson-btn" class="btn" style="display: none; width: 100%; margin-top: 15px; background: #6b7280; color: white; border: none; padding: 15px; border-radius: 12px; cursor: pointer;">📖 Вернуться к теории и повторить</button>
            </div>
        `;

        const questionsDiv = document.getElementById('quiz-questions');
        questions.forEach((q, qIdx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'quiz-question';
            qDiv.style.marginBottom = "30px";
            qDiv.innerHTML = `<p style="font-size: 1.15rem; font-weight: 700; margin-bottom: 15px;">${qIdx + 1}. ${q.question}</p>`;
            
            const optionsDiv = document.createElement('div');
            optionsDiv.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 12px;';

            q.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'btn-quiz-opt';
                btn.style.cssText = "padding: 15px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; cursor: pointer; transition: 0.2s; font-weight: 500; text-align: left;";
                btn.textContent = opt;
                btn.onclick = () => {
                    optionsDiv.querySelectorAll('.btn-quiz-opt').forEach(b => {
                        b.classList.remove('selected');
                        b.style.borderColor = "#e2e8f0";
                        b.style.background = "white";
                    });
                    btn.classList.add('selected');
                    btn.style.borderColor = "var(--accent-color)";
                    btn.style.background = "rgba(79, 70, 229, 0.05)";
                    checkAllAnswered();
                };
                optionsDiv.appendChild(btn);
            });
            qDiv.appendChild(optionsDiv);
            questionsDiv.appendChild(qDiv);
        });

        function checkAllAnswered() {
            const selected = questionsDiv.querySelectorAll('.btn-quiz-opt.selected');
            document.getElementById('submit-quiz').style.display = selected.length === questions.length ? 'block' : 'none';
        }

        document.getElementById('submit-quiz').onclick = () => {
            const selected = questionsDiv.querySelectorAll('.btn-quiz-opt.selected');
            let correctCount = 0;

            selected.forEach((btn, idx) => {
                const q = questions[idx];
                if (btn.textContent === q.answer) {
                    correctCount++;
                    btn.style.background = "#d1fae5";
                    btn.style.borderColor = "#10b981";
                    btn.style.color = "#065f46";
                } else {
                    btn.style.background = "#fee2e2";
                    btn.style.borderColor = "#ef4444";
                    btn.style.color = "#991b1b";
                }
            });

            const resultDiv = document.getElementById('quiz-result');
            const retryBtn = document.getElementById('retry-lesson-btn');
            resultDiv.style.display = "block";
            
            if (correctCount === questions.length) {
                resultDiv.innerHTML = "🎉 Поздравляем! Вы идеально усвоили материал. Следующий урок разблокирован!";
                resultDiv.style.background = "#d1fae5";
                resultDiv.style.color = "#065f46";
                retryBtn.style.display = "none";
                
                const progress = JSON.parse(localStorage.getItem('python_quiz_progress') || '{}');
                progress[lessonId] = true;
                localStorage.setItem('python_quiz_progress', JSON.stringify(progress));
                
                // Show next lesson button if exists
                const nextBtn = document.getElementById('next-lesson-btn');
                if (nextBtn) nextBtn.style.display = 'inline-block';
            } else {
                resultDiv.innerHTML = `⚠️ Вы ответили верно на ${correctCount} из ${questions.length} вопросов. Чтобы пройти дальше, нужно ответить на все вопросы правильно.`;
                resultDiv.style.background = "#fff7ed";
                resultDiv.style.color = "#9a3412";
                retryBtn.style.display = "block";
            }
            
            window.scrollTo({ top: resultDiv.offsetTop - 100, behavior: 'smooth' });
        };

        document.getElementById('retry-lesson-btn').onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => location.reload(), 500);
        };
    }

    // --- 5. Progress UI ---
    function updateProgressUI() {
        const container = document.getElementById('course-progress-container');
        if (!container) return;
        const quizProgress = JSON.parse(localStorage.getItem('python_quiz_progress') || '{}');
        const passedCount = Object.keys(quizProgress).length;
        const total = lessonsList.length;
        const percent = Math.round((passedCount / total) * 100);
        container.style.display = 'block';
        document.getElementById('progress-text').textContent = `Пройдено ${passedCount} из ${total} уроков`;
        document.getElementById('progress-percentage').textContent = `${percent}%`;
        document.getElementById('progress-bar-fill').style.width = `${percent}%`;
    }

    // --- 6. Reset Progress ---
    const resetBtn = document.getElementById('btn-reset-progress');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (confirm('Сбросить весь прогресс?')) {
                localStorage.clear();
                location.reload();
            }
        };
    }

    // --- 7. Logo Shortcut ---
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('dblclick', () => {
            const cmd = prompt('Команда (admin/reset):');
            if (cmd === 'admin') {
                const unlocks = {};
                lessonsList.forEach(l => unlocks[l] = true);
                localStorage.setItem('manual_unlocks', JSON.stringify(unlocks));
                location.reload();
            }
        });
    }

    initLockSystem();
    initQuiz();
    updateProgressUI();
});

// --- FULL QUIZ DATA (15 LESSONS) ---
const quizData = {
    'lesson1.html': [
        { question: "Кто создал Python?", options: ["Билл Гейтс", "Гвидо ван Россум", "Линус Торвальдс"], answer: "Гвидо ван Россум" },
        { question: "Расширение файлов Python?", options: [".py", ".txt", ".exe"], answer: ".py" }
    ],
    'lesson2.html': [
        { question: "Как объявить переменную x=10?", options: ["var x=10", "x = 10", "int x=10"], answer: "x = 10" },
        { question: "Тип данных для текста?", options: ["int", "float", "str"], answer: "str" }
    ],
    'lesson3.html': [
        { question: "Результат 10 // 3?", options: ["3.33", "3", "1"], answer: "3" },
        { question: "Оператор 'не равно'?", options: ["<>", "==", "!="], answer: "!=" }
    ],
    'lesson4.html': [
        { question: "Как пишется 'иначе если'?", options: ["else if", "elseif", "elif"], answer: "elif" },
        { question: "Нужны ли отступы в if?", options: ["Да", "Нет", "Только в конце"], answer: "Да" }
    ],
    'lesson5.html': [
        { question: "Цикл с условием?", options: ["for", "while", "do"], answer: "while" },
        { question: "Функция для диапазона чисел?", options: ["range()", "list()", "len()"], answer: "range()" }
    ],
    'lesson6.html': [
        { question: "Как добавить элемент в список?", options: ["add()", "push()", "append()"], answer: "append()" },
        { question: "Кортеж — это...?", options: ["Изменяемый список", "Неизменяемый список", "Словарь"], answer: "Неизменяемый список" }
    ],
    'lesson7.html': [
        { question: "Ключевое слово для функции?", options: ["func", "def", "function"], answer: "def" },
        { question: "Как вернуть значение?", options: ["give", "send", "return"], answer: "return" }
    ],
    'lesson8.html': [
        { question: "Чем разделяются ключ и значение?", options: ["Тире", "Двоеточием", "Запятой"], answer: "Двоеточием" },
        { question: "Множество хранит дубликаты?", options: ["Да", "Нет", "Только числа"], answer: "Нет" }
    ],
    'lesson9.html': [
        { question: "Метод для перевода в верхний регистр?", options: ["up()", "upper()", "capitalize()"], answer: "upper()" },
        { question: "Как найти длину строки?", options: ["size()", "length()", "len()"], answer: "len()" }
    ],
    'lesson10.html': [
        { question: "Режим для записи в файл?", options: ["'r'", "'w'", "'a'"], answer: "'w'" },
        { question: "Нужно ли закрывать файл?", options: ["Да", "Нет", "Только если он большой"], answer: "Да" }
    ],
    'lesson11.html': [
        { question: "Блок для перехвата ошибок?", options: ["try", "catch", "except"], answer: "except" },
        { question: "Блок, который выполнится всегда?", options: ["always", "finally", "end"], answer: "finally" }
    ],
    'lesson12.html': [
        { question: "Как импортировать модуль?", options: ["include", "import", "using"], answer: "import" },
        { question: "Библиотека для математики?", options: ["math", "calc", "numbers"], answer: "math" }
    ],
    'lesson13.html': [
        { question: "Чертеж объекта — это...?", options: ["Функция", "Класс", "Переменная"], answer: "Класс" },
        { question: "Первый аргумент метода класса?", options: ["this", "me", "self"], answer: "self" }
    ],
    'lesson14.html': [
        { question: "Модуль для даты?", options: ["time", "date", "datetime"], answer: "datetime" },
        { question: "Метод для текущей даты?", options: ["now()", "today()", "current()"], answer: "now()" }
    ],
    'lesson15.html': [
        { question: "Что такое алгоритм?", options: ["Код", "Инструкция", "Переменная"], answer: "Инструкция" },
        { question: "Python — это какой язык?", options: ["Низкоуровневый", "Высокоуровневый", "Машинный"], answer: "Высокоуровневый" }
    ]
};
