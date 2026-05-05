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
                
                // Hide original link
                link.style.display = 'none';

                // Create Lock UI
                const lockUI = document.createElement('div');
                lockUI.className = 'lock-ui-container';
                lockUI.style.marginTop = "15px";
                lockUI.style.padding = "15px";
                lockUI.style.background = "rgba(0,0,0,0.03)";
                lockUI.style.borderRadius = "12px";
                lockUI.style.border = "1px dashed #ccc";
                
                lockUI.innerHTML = `
                    <p style="margin: 0 0 12px 0; font-size: 0.85rem; color: #666; font-weight: 500;">🔒 Урок заблокирован</p>
                    <button type="button" class="unlock-btn-trigger" style="width: 100%; padding: 10px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s;">Ввести пароль</button>
                `;
                
                card.appendChild(lockUI);

                // Attach Event
                const trigger = lockUI.querySelector('.unlock-btn-trigger');
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const pass = prompt('Введите пароль для доступа к уроку:');
                    if (pass === SECRET_PASSWORD) {
                        manualUnlocks[lessonFileName] = true;
                        localStorage.setItem('manual_unlocks', JSON.stringify(manualUnlocks));
                        alert('✅ Доступ разрешен!');
                        window.location.reload();
                    } else if (pass !== null) {
                        alert('❌ Неверный пароль!');
                    }
                });
                
                // Add hover effect for button
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
            <div class="quiz-header" style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: var(--accent-color);">🎯 Проверка знаний</h2>
                <p>Ответьте на вопросы, чтобы открыть следующий урок.</p>
            </div>
            <div id="quiz-questions"></div>
            <button id="submit-quiz" class="btn" style="width: 100%; margin-top: 20px; display: none; background: var(--success-color); color: white; border: none; padding: 15px; border-radius: 10px; cursor: pointer; font-weight: 700;">Проверить ответы</button>
            <div id="quiz-result" style="margin-top: 25px; text-align: center; font-weight: 700; font-size: 1.1rem;"></div>
        `;

        const questionsDiv = document.getElementById('quiz-questions');
        questions.forEach((q, qIdx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'quiz-question';
            qDiv.innerHTML = `<p>${qIdx + 1}. ${q.question}</p>`;
            
            const optionsDiv = document.createElement('div');
            optionsDiv.style.display = 'flex';
            optionsDiv.style.flexWrap = 'wrap';
            optionsDiv.style.gap = '10px';

            q.options.forEach((opt, optIdx) => {
                const btn = document.createElement('button');
                btn.className = 'btn-quiz-opt';
                btn.textContent = opt;
                btn.onclick = () => {
                    optionsDiv.querySelectorAll('.btn-quiz-opt').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
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
                if (btn.textContent === q.answer || (q.correctIndex !== undefined && q.options[q.correctIndex] === btn.textContent)) {
                    correctCount++;
                    btn.style.background = "#d1fae5";
                    btn.style.borderColor = "#10b981";
                } else {
                    btn.style.background = "#fee2e2";
                    btn.style.borderColor = "#ef4444";
                }
            });

            const resultDiv = document.getElementById('quiz-result');
            if (correctCount === questions.length) {
                resultDiv.innerHTML = "✅ Отлично! Все ответы верны. Следующий урок разблокирован!";
                resultDiv.style.color = "#10b981";
                const progress = JSON.parse(localStorage.getItem('python_quiz_progress') || '{}');
                progress[lessonId] = true;
                localStorage.setItem('python_quiz_progress', JSON.stringify(progress));
            } else {
                resultDiv.innerHTML = `❌ Вы ошиблись в ${questions.length - correctCount} вопросах. Попробуйте еще раз!`;
                resultDiv.style.color = "#ef4444";
            }
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
            if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
                localStorage.removeItem('python_quiz_progress');
                localStorage.removeItem('manual_unlocks');
                location.reload();
            }
        };
    }

    // --- 7. Logo Secret Shortcut ---
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('dblclick', () => {
            const cmd = prompt('Введите команду (admin/reset):');
            if (cmd === 'admin') {
                const unlocks = {};
                lessonsList.forEach(l => unlocks[l] = true);
                localStorage.setItem('manual_unlocks', JSON.stringify(unlocks));
                alert('🔓 Все уроки открыты!');
                location.reload();
            } else if (cmd === 'reset') {
                localStorage.clear();
                alert('🔄 Прогресс полностью сброшен.');
                location.reload();
            }
        });
    }

    // Init All
    initLockSystem();
    initQuiz();
    updateProgressUI();
});

// --- Quiz Data ---
const quizData = {
    'lesson1.html': [
        { question: "Кто создал язык Python?", options: ["Билл Гейтс", "Гвидо ван Россум", "Марк Цукерберг", "Линус Торвальдс"], answer: "Гвидо ван Россум" },
        { question: "Какое расширение имеют файлы с кодом на Python?", options: [".py", ".pyt", ".python", ".txt"], answer: ".py" },
        { question: "Что выведет команда print(5 + 5)?", options: ["5 + 5", "10", "55", "Ошибка"], answer: "10" }
    ],
    'lesson2.html': [
        { question: "Как правильно объявить переменную x со значением 10?", options: ["var x = 10", "int x = 10", "x = 10", "let x = 10"], answer: "x = 10" },
        { question: "Какой тип данных у значения '3.14' (в кавычках)?", options: ["int", "float", "str", "bool"], answer: "str" },
        { question: "Можно ли в Python менять тип переменной на лету?", options: ["Да (динамическая типизация)", "Нет (статическая типизация)", "Только для чисел", "Только в функциях"], answer: "Да (динамическая типизация)" }
    ]
    // ... more quiz data could be added here
};
