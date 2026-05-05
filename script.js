document.addEventListener('DOMContentLoaded', () => {

    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html'
    ];

    const SECRET_PASSWORD = "admin"; // Единый пароль для открытия уроков

    // --- Navigation & Active Link Logic ---
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

    // --- 1. Quiz Data ---
    const quizData = {
        'lesson1.html': [
            { "question": "Кто создал язык Python?", "options": ["Билл Гейтс", "Гвидо ван Россум", "Марк Цукерберг", "Линус Торвальдс"], "correct": 1 },
            { "question": "Какое расширение имеют файлы с кодом на Python?", "options": [".py", ".pyt", ".python", ".txt"], "correct": 0 },
            { "question": "Что выведет команда print(5 + 5)?", "options": ["5 + 5", "10", "55", "Ошибка"], "correct": 1 }
        ],
        'lesson2.html': [
            { "question": "Как правильно объявить переменную x со значением 10?", "options": ["var x = 10", "int x = 10", "x := 10", "x = 10"], "correct": 3 },
            { "question": "Какой тип данных у значения '3.14' (в кавычках)?", "options": ["int", "float", "str", "bool"], "correct": 2 },
            { "question": "Можно ли в Python менять тип переменной на лету?", "options": ["Да (динамическая типизация)", "Нет", "Только для чисел", "Только в новых версиях"], "correct": 0 }
        ],
        'lesson3.html': [
            { "question": "Что выведет print(10 // 3)?", "options": ["3.33", "3", "4", "Ошибка"], "correct": 1 },
            { "question": "Какой оператор используется для возведения в степень?", "options": ["^", "**", "pow", "exp"], "correct": 1 },
            { "question": "Что вернет выражение 5 == '5'?", "options": ["True", "False", "Ошибка", "None"], "correct": 1 }
        ],
        'lesson4.html': [
            { "question": "Как правильно пишется 'иначе если' в Python?", "options": ["else if", "elseif", "elif", "if else"], "correct": 2 },
            { "question": "Обязательны ли отступы в Python?", "options": ["Нет, это для красоты", "Да, они определяют блоки кода", "Только в циклах", "Только в функциях"], "correct": 1 },
            { "question": "Что выведет код: if False: print(1) else: print(2)?", "options": ["1", "2", "Ничего", "Ошибка"], "correct": 1 }
        ],
        'lesson5.html': [
            { "question": "Что делает функция range(3)?", "options": ["Генерирует 1, 2, 3", "Генерирует 0, 1, 2", "Генерирует 0, 1, 2, 3", "Ничего"], "correct": 1 },
            { "question": "Как досрочно выйти из цикла?", "options": ["exit", "stop", "break", "return"], "correct": 2 },
            { "question": "Что будет, если в цикле while условие всегда True?", "options": ["Ошибка", "Цикл не запустится", "Бесконечный цикл", "Программа закроется"], "correct": 2 }
        ],
        'lesson6.html': [
            { "question": "Как добавить элемент в конец списка?", "options": ["list.add()", "list.insert()", "list.append()", "list.push()"], "correct": 2 },
            { "question": "С какого индекса начинаются элементы списка?", "options": ["1", "0", "-1", "С любого"], "correct": 1 },
            { "question": "В чем главное отличие кортежа от списка?", "options": ["Кортеж быстрее", "Кортеж нельзя изменить", "Кортеж только для чисел", "Отличий нет"], "correct": 1 }
        ],
        'lesson7.html': [
            { "question": "Какое ключевое слово используется для создания функции?", "options": ["func", "function", "def", "create"], "correct": 2 },
            { "question": "Зачем нужен оператор return?", "options": ["Чтобы выйти из программы", "Чтобы вернуть результат работы функции", "Чтобы напечатать текст", "Это не обязательно"], "correct": 1 },
            { "question": "Что вернет функция, если в ней нет return?", "options": ["0", "False", "None", "Ошибка"], "correct": 2 }
        ],
        'lesson8.html': [
            { "question": "Как создать пустой словарь?", "options": ["[]", "{}", "set()", "dict([])"], "correct": 1 },
            { "question": "Могут ли в множестве быть дубликаты?", "options": ["Да", "Нет", "Только числа", "Только строки"], "correct": 1 },
            { "question": "Как получить значение из словаря d по ключу 'k'?", "options": ["d('k')", "d['k']", "d{'k'}", "d.k"], "correct": 1 }
        ],
        'lesson9.html': [
            { "question": "Какой метод переводит строку в нижний регистр?", "options": ["down()", "lower()", "small()", "casefold()"], "correct": 1 },
            { "question": "Что делает метод split()?", "options": ["Склеивает строки", "Разбивает строку на список", "Удаляет пробелы", "Переворачивает строку"], "correct": 1 },
            { "question": "Как узнать длину строки s?", "options": ["s.size()", "s.length()", "len(s)", "count(s)"], "correct": 2 }
        ],
        'lesson10.html': [
            { "question": "В каком режиме нужно открыть файл для записи (с удалением старого)?", "options": ["'r'", "'a'", "'w'", "'x'"], "correct": 2 },
            { "question": "Что делает режим 'a'?", "options": ["Перезаписывает файл", "Дописывает в конец файла", "Только читает", "Создает папку"], "correct": 1 },
            { "question": "Зачем нужен блок with при работе с файлами?", "options": ["Чтобы быстрее работало", "Чтобы автоматически закрыть файл", "Это просто традиция", "Для красоты"], "correct": 1 }
        ],
        'lesson11.html': [
            { "question": "В каком блоке мы пишем код, который может вызвать ошибку?", "options": ["try", "except", "finally", "error"], "correct": 0 },
            { "question": "Как называется блок, который выполняется ВСЕГДА (была ошибка или нет)?", "options": ["always", "finally", "end", "except"], "correct": 1 },
            { "question": "Какая ошибка возникнет при 1 / 0?", "options": ["ValueError", "TypeError", "ZeroDivisionError", "NameError"], "correct": 2 }
        ],
        'lesson12.html': [
            { "question": "Как подключить модуль в программу?", "options": ["include", "using", "import", "connect"], "correct": 2 },
            { "question": "Что такое pip?", "options": ["Редактор кода", "Менеджер пакетов", "Версия Python", "Тип данных"], "correct": 1 },
            { "question": "Как импортировать только функцию sqrt из модуля math?", "options": ["import math.sqrt", "from math import sqrt", "get sqrt from math", "import sqrt"], "correct": 1 }
        ],
        'lesson13.html': [
            { "question": "Что такое класс?", "options": ["Готовый объект", "Чертеж/шаблон для создания объектов", "Список функций", "Переменная"], "correct": 1 },
            { "question": "Зачем нужен метод __init__?", "options": ["Для удаления объекта", "Для инициализации (настройки) объекта при создании", "Это главная функция программы", "Для вывода текста"], "correct": 1 },
            { "question": "Что такое self в методах класса?", "options": ["Ссылка на сам объект", "Служебное слово для Python", "Имя класса", "Ничего"], "correct": 0 }
        ],
        'lesson14.html': [
            { "question": "Какой модуль используется для работы с датами?", "options": ["time", "date", "datetime", "calendar"], "correct": 2 },
            { "question": "Как получить текущую дату и время?", "options": ["datetime.today()", "datetime.now()", "datetime.get()", "datetime.current()"], "correct": 1 },
            { "question": "Что делает метод strftime()?", "options": ["Превращает строку в дату", "Форматирует дату в строку по шаблону", "Считает разницу во времени", "Удаляет время"], "correct": 1 }
        ],
        'lesson15.html': [
            { "question": "Какой тип данных лучше всего подходит для списка задач?", "options": ["int", "list", "bool", "float"], "correct": 1 },
            { "question": "Как лучше всего хранить данные постоянно?", "options": ["В переменной", "В файле", "В принтере", "В памяти"], "correct": 1 },
            { "question": "Что нужно сделать после завершения этого курса?", "options": ["Забыть всё", "Начать писать свои проекты и практиковаться", "Ждать диплома", "Удалить Python"], "correct": 1 }
        ]
    };

    // --- 2. Locking System ---
    function initLockSystem() {
        const quizProgress = JSON.parse(localStorage.getItem('quiz_results')) || {};
        const manualUnlocks = JSON.parse(localStorage.getItem('manual_unlocks')) || {};

        if (currentPath === 'python-basic.html') {
            const cards = document.querySelectorAll('.lesson-card');
            cards.forEach((card, index) => {
                const lessonFileName = `lesson${index + 1}.html`;
                const isPassed = quizProgress[lessonFileName];
                const isManuallyUnlocked = manualUnlocks[lessonFileName];
                
                // Checkmark for passed
                if (isPassed) {
                    card.classList.add('completed');
                    if (!card.querySelector('.check-mark')) {
                        card.style.position = 'relative';
                        card.innerHTML += `<div class="check-mark">✅ Пройдено</div>`;
                    }
                }

                // Lock logic
                const isFirst = index === 0;
                const prevLesson = `lesson${index}.html`;
                const isPrevPassed = quizProgress[prevLesson];

                if (!isFirst && !isPrevPassed && !isManuallyUnlocked) {
                    // LOCKED STATE
                    card.classList.add('locked');
                    const originalBtn = card.querySelector('.btn');
                    if (originalBtn) {
                        const btnContainer = originalBtn.parentNode;
                        originalBtn.style.display = 'none';

                        // Add Lock Notification & Password Button
                        const lockUI = document.createElement('div');
                        lockUI.className = 'lock-ui';
                        lockUI.style.zIndex = "10";
                        lockUI.style.position = "relative";
                        lockUI.innerHTML = `
                            <p style="color: #666; font-size: 0.85rem; margin-bottom: 10px;">🔒 Урок закрыт. Пройдите предыдущий или введите пароль.</p>
                            <button class="btn btn-password-unlock" style="background: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; width: 100%; font-weight: bold;">Ввести пароль</button>
                        `;
                        btnContainer.appendChild(lockUI);

                        lockUI.querySelector('.btn-password-unlock').addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const pass = prompt('Введите пароль для разблокировки урока:');
                            if (pass === SECRET_PASSWORD) {
                                manualUnlocks[lessonFileName] = true;
                                localStorage.setItem('manual_unlocks', JSON.stringify(manualUnlocks));
                                alert('✅ Урок разблокирован!');
                                location.reload();
                            } else {
                                alert('❌ Неверный пароль!');
                            }
                        });
                    }
                }
            });
            return;
        }

        // Redirect if trying to access locked lesson directly
        if (currentPath.startsWith('lesson')) {
            const lessonIndex = lessonsList.indexOf(currentPath);
            if (lessonIndex > 0) {
                const prevLesson = lessonsList[lessonIndex - 1];
                if (!quizProgress[prevLesson] && !manualUnlocks[currentPath]) {
                    window.location.href = 'python-basic.html';
                }
            }
        }
    }

    // --- 3. Quiz Logic ---
    function initQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer || !quizData[currentPath]) return;

        const quizProgress = JSON.parse(localStorage.getItem('quiz_results')) || {};
        if (quizProgress[currentPath]) {
            renderQuizCompleted(quizContainer);
            showNextLessonButton();
            return;
        }

        const startBtn = document.createElement('button');
        startBtn.textContent = '🧠 Начать тест по теме';
        startBtn.className = 'btn-complete';
        startBtn.style.margin = '20px 0';
        startBtn.onclick = () => {
            startBtn.style.display = 'none';
            renderQuizContent(quizContainer);
        };
        quizContainer.parentNode.insertBefore(startBtn, quizContainer);
    }

    function renderQuizContent(container) {
        const questions = quizData[currentPath];
        container.innerHTML = '<h2 style="margin-bottom: 20px;">🚀 Проверочный тест</h2>';
        container.style.display = 'block';

        questions.forEach((q, index) => {
            const div = document.createElement('div');
            div.className = 'quiz-question';
            div.style.background = 'var(--bg-color)';
            div.style.padding = '20px';
            div.style.borderRadius = '12px';
            div.style.marginBottom = '15px';
            div.innerHTML = `<p style="font-weight: 700; margin-bottom: 15px;">${index + 1}. ${q.question}</p>`;
            
            q.options.forEach((opt, optIndex) => {
                const btn = document.createElement('button');
                btn.className = 'btn-quiz-opt';
                btn.style.display = 'block';
                btn.style.width = '100%';
                btn.style.textAlign = 'left';
                btn.style.padding = '12px 15px';
                btn.style.marginBottom = '8px';
                btn.style.borderRadius = '8px';
                btn.style.border = '2px solid transparent';
                btn.style.background = 'var(--card-bg)';
                btn.style.cursor = 'pointer';
                btn.style.transition = '0.2s';
                btn.textContent = opt;
                
                btn.onclick = () => {
                    div.querySelectorAll('.btn-quiz-opt').forEach(b => {
                        b.style.borderColor = 'transparent';
                        b.style.background = 'var(--card-bg)';
                    });
                    btn.style.borderColor = 'var(--accent-color)';
                    btn.style.background = 'rgba(99, 102, 241, 0.1)';
                    div.dataset.selected = optIndex;
                };
                div.appendChild(btn);
            });
            container.appendChild(div);
        });

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Проверить ответы';
        submitBtn.className = 'btn-complete';
        submitBtn.style.width = '100%';
        submitBtn.style.padding = '15px';
        submitBtn.onclick = () => {
            let correctCount = 0;
            const blocks = container.querySelectorAll('.quiz-question');
            blocks.forEach((block, i) => {
                const selected = block.dataset.selected;
                if (selected !== undefined && parseInt(selected) === questions[i].correct) {
                    correctCount++;
                    block.style.borderLeft = '5px solid #10b981';
                } else {
                    block.style.borderLeft = '5px solid #ef4444';
                }
            });

            if (correctCount === questions.length) {
                const results = JSON.parse(localStorage.getItem('quiz_results')) || {};
                results[currentPath] = true;
                localStorage.setItem('quiz_results', JSON.stringify(results));
                alert('🎉 Поздравляем! Вы правильно ответили на все вопросы.');
                renderQuizCompleted(container);
                showNextLessonButton();
            } else {
                alert(`Вы ответили правильно на ${correctCount} из ${questions.length}. Попробуйте еще раз!`);
            }
        };
        container.appendChild(submitBtn);
    }

    function renderQuizCompleted(container) {
        container.style.display = 'block';
        container.innerHTML = `
            <div style="text-align:center; padding: 30px; background: rgba(16,185,129,0.1); border: 2px solid #10b981; border-radius: 16px;">
                <h3 style="color: #10b981; margin-bottom: 10px;">🎉 Урок успешно пройден!</h3>
                <p>Вы закрепили знания и открыли доступ к следующему этапу.</p>
            </div>
        `;
    }

    function showNextLessonButton() {
        const lessonIndex = lessonsList.indexOf(currentPath);
        const nav = document.querySelector('.lesson-navigation');
        if (nav && lessonIndex < lessonsList.length - 1) {
            nav.innerHTML = `<a href="${lessonsList[lessonIndex+1]}" class="btn-nav next" style="display: inline-block; padding: 15px 30px; background: var(--accent-color); color: white; border-radius: 50px; font-weight: 700; margin-top: 20px;">Следующий урок ➡</a>`;
        }
    }

    // --- 4. Utilities ---
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') document.body.classList.add('dark-mode');
        
        const navUl = document.querySelector('nav ul');
        if (navUl && !document.querySelector('.theme-toggle')) {
            const li = document.createElement('li');
            li.innerHTML = `<button class="theme-toggle" style="background:none; border:none; cursor:pointer; font-size:1.2rem; padding: 10px;">${document.body.classList.contains('dark-mode') ? '☀️' : '🌙'}</button>`;
            li.onclick = () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                li.querySelector('button').textContent = isDark ? '☀️' : '🌙';
            };
            navUl.appendChild(li);
        }
    }

    // Run
    initLockSystem();
    initQuiz();
    initTheme();
});
