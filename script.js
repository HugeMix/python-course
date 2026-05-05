document.addEventListener('DOMContentLoaded', () => {

    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html'
    ];

    // --- Navigation & Active Link Logic ---
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isLesson = currentPath.startsWith('lesson');
        const isCourseList = currentPath === 'python-basic.html';
        const isIndex = currentPath === 'index.html';
        const isLibraries = currentPath === 'libraries.html';

        if (href === currentPath) {
            link.classList.add('active');
        } else if (isLesson && href === 'python-basic.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- 1. Quiz Data (15 Lessons) ---
    const quizData = {
        'lesson1.html': [
            {
                        "question": "Кто создал язык Python?",
                        "options": [
                                    "Билл Гейтс",
                                    "Гвидо ван Россум",
                                    "Марк Цукерберг",
                                    "Линус Торвальдс"
                        ],
                        "correct": 1
            },
            {
                        "question": "Какое расширение имеют файлы с кодом на Python?",
                        "options": [
                                    ".py",
                                    ".pyt",
                                    ".python",
                                    ".txt"
                        ],
                        "correct": 0
            },
            {
                        "question": "Что выведет команда print(5 + 5)?",
                        "options": [
                                    "5 + 5",
                                    "10",
                                    "55",
                                    "Ошибка"
                        ],
                        "correct": 1
            }
],
        'lesson2.html': [
            {
                        "question": "Как правильно объявить переменную x со значением 10?",
                        "options": [
                                    "var x = 10",
                                    "int x = 10",
                                    "x := 10",
                                    "x = 10"
                        ],
                        "correct": 3
            },
            {
                        "question": "Какой тип данных у значения '3.14' (в кавычках)?",
                        "options": [
                                    "int",
                                    "float",
                                    "str",
                                    "bool"
                        ],
                        "correct": 2
            },
            {
                        "question": "Можно ли в Python менять тип переменной на лету?",
                        "options": [
                                    "Да (динамическая типизация)",
                                    "Нет",
                                    "Только для чисел",
                                    "Только в новых версиях"
                        ],
                        "correct": 0
            }
],
        'lesson3.html': [
            {
                        "question": "Что выведет print(10 // 3)?",
                        "options": [
                                    "3.33",
                                    "3",
                                    "4",
                                    "Ошибка"
                        ],
                        "correct": 1
            },
            {
                        "question": "Какой оператор используется для возведения в степень?",
                        "options": [
                                    "^",
                                    "**",
                                    "pow",
                                    "exp"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что вернет выражение 5 == '5'?",
                        "options": [
                                    "True",
                                    "False",
                                    "Ошибка",
                                    "None"
                        ],
                        "correct": 1
            }
],
        'lesson4.html': [
            {
                        "question": "Как правильно пишется 'иначе если' в Python?",
                        "options": [
                                    "else if",
                                    "elseif",
                                    "elif",
                                    "if else"
                        ],
                        "correct": 2
            },
            {
                        "question": "Обязательны ли отступы в Python?",
                        "options": [
                                    "Нет, это для красоты",
                                    "Да, они определяют блоки кода",
                                    "Только в циклах",
                                    "Только в функциях"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что выведет код: if False: print(1) else: print(2)?",
                        "options": [
                                    "1",
                                    "2",
                                    "Ничего",
                                    "Ошибка"
                        ],
                        "correct": 1
            }
],
        'lesson5.html': [
            {
                        "question": "Что делает функция range(3)?",
                        "options": [
                                    "Генерирует 1, 2, 3",
                                    "Генерирует 0, 1, 2",
                                    "Генерирует 0, 1, 2, 3",
                                    "Ничего"
                        ],
                        "correct": 1
            },
            {
                        "question": "Как досрочно выйти из цикла?",
                        "options": [
                                    "exit",
                                    "stop",
                                    "break",
                                    "return"
                        ],
                        "correct": 2
            },
            {
                        "question": "Что будет, если в цикле while условие всегда True?",
                        "options": [
                                    "Ошибка",
                                    "Цикл не запустится",
                                    "Бесконечный цикл",
                                    "Программа закроется"
                        ],
                        "correct": 2
            }
],
        'lesson6.html': [
            {
                        "question": "Как добавить элемент в конец списка?",
                        "options": [
                                    "list.add()",
                                    "list.insert()",
                                    "list.append()",
                                    "list.push()"
                        ],
                        "correct": 2
            },
            {
                        "question": "С какого индекса начинаются элементы списка?",
                        "options": [
                                    "1",
                                    "0",
                                    "-1",
                                    "С любого"
                        ],
                        "correct": 1
            },
            {
                        "question": "В чем главное отличие кортежа от списка?",
                        "options": [
                                    "Кортеж быстрее",
                                    "Кортеж нельзя изменить",
                                    "Кортеж только для чисел",
                                    "Отличий нет"
                        ],
                        "correct": 1
            }
],
        'lesson7.html': [
            {
                        "question": "Какое ключевое слово используется для создания функции?",
                        "options": [
                                    "func",
                                    "function",
                                    "def",
                                    "create"
                        ],
                        "correct": 2
            },
            {
                        "question": "Зачем нужен оператор return?",
                        "options": [
                                    "Чтобы выйти из программы",
                                    "Чтобы вернуть результат работы функции",
                                    "Чтобы напечатать текст",
                                    "Это не обязательно"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что вернет функция, если в ней нет return?",
                        "options": [
                                    "0",
                                    "False",
                                    "None",
                                    "Ошибка"
                        ],
                        "correct": 2
            }
],
        'lesson8.html': [
            {
                        "question": "Как создать пустой словарь?",
                        "options": [
                                    "[]",
                                    "{}",
                                    "set()",
                                    "dict([])"
                        ],
                        "correct": 1
            },
            {
                        "question": "Могут ли в множестве быть дубликаты?",
                        "options": [
                                    "Да",
                                    "Нет",
                                    "Только числа",
                                    "Только строки"
                        ],
                        "correct": 1
            },
            {
                        "question": "Как получить значение из словаря d по ключу 'k'?",
                        "options": [
                                    "d('k')",
                                    "d['k']",
                                    "d{'k'}",
                                    "d.k"
                        ],
                        "correct": 1
            }
],
        'lesson9.html': [
            {
                        "question": "Какой метод переводит строку в нижний регистр?",
                        "options": [
                                    "down()",
                                    "lower()",
                                    "small()",
                                    "casefold()"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что делает метод split()?",
                        "options": [
                                    "Склеивает строки",
                                    "Разбивает строку на список",
                                    "Удаляет пробелы",
                                    "Переворачивает строку"
                        ],
                        "correct": 1
            },
            {
                        "question": "Как узнать длину строки s?",
                        "options": [
                                    "s.size()",
                                    "s.length()",
                                    "len(s)",
                                    "count(s)"
                        ],
                        "correct": 2
            }
],
        'lesson10.html': [
            {
                        "question": "В каком режиме нужно открыть файл для записи (с удалением старого)?",
                        "options": [
                                    "'r'",
                                    "'a'",
                                    "'w'",
                                    "'x'"
                        ],
                        "correct": 2
            },
            {
                        "question": "Что делает режим 'a'?",
                        "options": [
                                    "Перезаписывает файл",
                                    "Дописывает в конец файла",
                                    "Только читает",
                                    "Создает папку"
                        ],
                        "correct": 1
            },
            {
                        "question": "Зачем нужен блок with при работе с файлами?",
                        "options": [
                                    "Чтобы быстрее работало",
                                    "Чтобы автоматически закрыть файл",
                                    "Это просто традиция",
                                    "Для красоты"
                        ],
                        "correct": 1
            }
],
        'lesson11.html': [
            {
                        "question": "В каком блоке мы пишем код, который может вызвать ошибку?",
                        "options": [
                                    "try",
                                    "except",
                                    "finally",
                                    "error"
                        ],
                        "correct": 0
            },
            {
                        "question": "Как называется блок, который выполняется ВСЕГДА (была ошибка или нет)?",
                        "options": [
                                    "always",
                                    "finally",
                                    "end",
                                    "except"
                        ],
                        "correct": 1
            },
            {
                        "question": "Какая ошибка возникнет при 1 / 0?",
                        "options": [
                                    "ValueError",
                                    "TypeError",
                                    "ZeroDivisionError",
                                    "NameError"
                        ],
                        "correct": 2
            }
],
        'lesson12.html': [
            {
                        "question": "Как подключить модуль в программу?",
                        "options": [
                                    "include",
                                    "using",
                                    "import",
                                    "connect"
                        ],
                        "correct": 2
            },
            {
                        "question": "Что такое pip?",
                        "options": [
                                    "Редактор кода",
                                    "Менеджер пакетов",
                                    "Версия Python",
                                    "Тип данных"
                        ],
                        "correct": 1
            },
            {
                        "question": "Как импортировать только функцию sqrt из модуля math?",
                        "options": [
                                    "import math.sqrt",
                                    "from math import sqrt",
                                    "get sqrt from math",
                                    "import sqrt"
                        ],
                        "correct": 1
            }
],
        'lesson13.html': [
            {
                        "question": "Что такое класс?",
                        "options": [
                                    "Готовый объект",
                                    "Чертеж/шаблон для создания объектов",
                                    "Список функций",
                                    "Переменная"
                        ],
                        "correct": 1
            },
            {
                        "question": "Зачем нужен метод __init__?",
                        "options": [
                                    "Для удаления объекта",
                                    "Для инициализации (настройки) объекта при создании",
                                    "Это главная функция программы",
                                    "Для вывода текста"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что такое self в методах класса?",
                        "options": [
                                    "Ссылка на сам объект",
                                    "Служебное слово для Python",
                                    "Имя класса",
                                    "Ничего"
                        ],
                        "correct": 0
            }
],
        'lesson14.html': [
            {
                        "question": "Какой модуль используется для работы с датами?",
                        "options": [
                                    "time",
                                    "date",
                                    "datetime",
                                    "calendar"
                        ],
                        "correct": 2
            },
            {
                        "question": "Как получить текущую дату и время?",
                        "options": [
                                    "datetime.today()",
                                    "datetime.now()",
                                    "datetime.get()",
                                    "datetime.current()"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что делает метод strftime()?",
                        "options": [
                                    "Превращает строку в дату",
                                    "Форматирует дату в строку по шаблону",
                                    "Считает разницу во времени",
                                    "Удаляет время"
                        ],
                        "correct": 1
            }
],
        'lesson15.html': [
            {
                        "question": "Какой тип данных лучше всего подходит для списка задач?",
                        "options": [
                                    "int",
                                    "list",
                                    "bool",
                                    "float"
                        ],
                        "correct": 1
            },
            {
                        "question": "Как лучше всего хранить данные постоянно?",
                        "options": [
                                    "В переменной",
                                    "В файле",
                                    "В принтере",
                                    "В памяти"
                        ],
                        "correct": 1
            },
            {
                        "question": "Что нужно сделать после завершения этого курса?",
                        "options": [
                                    "Забыть всё",
                                    "Начать писать свои проекты и практиковаться",
                                    "Ждать диплома",
                                    "Удалить Python"
                        ],
                        "correct": 1
            }
],
    };

    // --- 2. Locking System & Navigation ---
    function initLockSystem() {
        const progress = JSON.parse(localStorage.getItem('quiz_results')) || {};

        // A. Handle 'python-basic.html' (Course List)
        if (currentPath === 'python-basic.html') {
            const cards = document.querySelectorAll('.lesson-card');
            let passedCount = 0;

            cards.forEach((card, index) => {
                const lessonFileName = `lesson${index + 1}.html`;
                const isPassed = progress[lessonFileName];

                // Add Checkmark
                if (isPassed) {
                    passedCount++;
                    card.classList.add('completed');
                    // Prevent double checkmarks
                    if (!card.querySelector('.check-mark')) {
                        card.style.position = 'relative'; // Ensure relative for absolute checkmark
                        card.innerHTML += `<div class="check-mark">✅ Пройдено</div>`;
                    }
                }

                // Lock Logic: Lesson 1 is always open. Others need prev one passed.
                if (index > 0) {
                    const prevLesson = `lesson${index}.html`; // e.g. lesson1.html for lesson2
                    if (!progress[prevLesson]) {
                        // Locked!
                        card.classList.add('locked');
                        const link = card.querySelector('a.btn');
                        if (link) {
                            link.href = '#';
                            link.textContent = '🔒 Закрыто';
                            link.style.background = '#6c757d';
                            link.onclick = (e) => {
                                e.preventDefault();
                                alert('❌ Доступ закрыт! Сначала пройдите предыдущий урок.');
                            };
                        }
                    } else {
                        // Unlocked - Ensure proper state if previously locked
                        card.classList.remove('locked');
                    }
                }
            });

            // Update Progress Bar
            const totalLessons = cards.length;
            const progressContainer = document.getElementById('course-progress-container');
            const progressText = document.getElementById('progress-text');
            const progressPercentage = document.getElementById('progress-percentage');
            const progressBarFill = document.getElementById('progress-bar-fill');

            if (progressContainer && totalLessons > 0) {
                progressContainer.style.display = 'block';
                const percentage = Math.round((passedCount / totalLessons) * 100);
                progressText.textContent = `Пройдено ${passedCount} из ${totalLessons} уроков`;
                progressPercentage.textContent = `${percentage}%`;

                // Small delay to allow CSS transition to play on load
                setTimeout(() => {
                    progressBarFill.style.width = `${percentage}%`;
                }, 100);
            }

            return;
        }

        // B. Handle Individual Lesson Pages (Redirect if locked)
        const lessonIndex = lessonsList.indexOf(currentPath);
        if (lessonIndex > 0) { // If not lesson1
            const prevLesson = lessonsList[lessonIndex - 1];

            if (!progress[prevLesson]) {
                // If previous not done, REDIRECT
                document.body.innerHTML = `
                    <div style="text-align:center; padding-top: 100px; color: #dc3545;">
                        <h1>🚫 Доступ закрыт!</h1>
                        <p>Сначала пройдите предыдущий урок.</p>
                        <p>Перенаправление...</p>
                    </div>
                `;
                setTimeout(() => {
                    window.location.href = 'python-basic.html';
                }, 2000);
                return; // Stop execution
            }
        }

        // C. Generate Nav Buttons (Prev/Next)
        const navContainer = document.querySelector('.lesson-navigation');
        if (navContainer) {
            navContainer.innerHTML = ''; // Clear default hardcoded nav

            // Prev Button
            if (lessonIndex > 0) {
                const prevBtn = document.createElement('a');
                prevBtn.href = lessonsList[lessonIndex - 1];
                prevBtn.className = 'btn-nav prev';
                prevBtn.textContent = '⬅ Назад';
                navContainer.appendChild(prevBtn);
            }

            // Next Button is handled by showNextLessonButton after quiz
            // Show finish button if it's the last lesson AND passed? 
            // We'll let the quiz logic handle the forward navigation visibility.
        }
    }

    function toggleLessonVisibility(show) {
        document.querySelectorAll('.lesson-title, .lesson-goal, .lesson-content, .lesson-homework').forEach(el => {
            // Check if quiz container or start btn is inside this element
            const hasQuizInfo = el.querySelector('#quiz-container') || el.querySelector('#btn-start-quiz');
            if (hasQuizInfo) {
                // hide children instead of el
                Array.from(el.children).forEach(child => {
                    const childHasQuiz = child.id === 'quiz-container' || child.id === 'btn-start-quiz' || child.querySelector('#quiz-container') || child.querySelector('#btn-start-quiz');
                    if (!childHasQuiz) {
                        child.style.display = show ? '' : 'none';
                    }
                });
            } else {
                el.style.display = show ? '' : 'none';
            }
        });
    }

    // --- 3. Quiz Logic ---
    function initQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer || !quizData[currentPath]) return;

        // Ensure clean state
        quizContainer.innerHTML = '';
        quizContainer.style.display = 'none';

        // Add "Start Quiz" Button BEFORE container
        // Check if button already exists to avoid duplicates
        let startBtn = document.getElementById('btn-start-quiz');
        if (!startBtn) {
            startBtn = document.createElement('button');
            startBtn.id = 'btn-start-quiz';
            startBtn.textContent = '🧠 Я изучил теорию, готов к тесту!';
            startBtn.className = 'btn-complete';
            startBtn.onclick = () => {
                startBtn.style.display = 'none'; // Hide self
                quizContainer.style.display = 'block'; // Show quiz
                toggleLessonVisibility(false); // Hide lesson text!
                renderQuizContent(quizContainer);
                quizContainer.scrollIntoView({ behavior: 'smooth' });
            };
            quizContainer.parentNode.insertBefore(startBtn, quizContainer);
        }

        // FIX: Ensure button is visible when resetting (e.g. after 'Retake')
        startBtn.style.display = 'block';

        // Check if already passed
        const savedResults = JSON.parse(localStorage.getItem('quiz_results')) || {};
        if (savedResults[currentPath]) {
            startBtn.style.display = 'none';
            quizContainer.style.display = 'block';
            renderQuizContent(quizContainer, true); // True = render passed state
            showNextLessonButton(); // Show navigation since passed
        }
    }

    function renderQuizContent(container, alreadyPassed = false) {
        try {
            if (alreadyPassed) {
                renderQuizCompleted(container);
                return;
            }

            const questions = quizData[currentPath];
            if (!questions || questions.length === 0) {
                container.innerHTML = `<h3 style="color:var(--error-color)">Вопросов пока нет</h3>`;
                return;
            }
            container.innerHTML = ''; // Clear

            const title = document.createElement('h2');
            title.textContent = '🚀 Проверочный тест';
            container.appendChild(title);

            questions.forEach((q, index) => {
                const qBlock = document.createElement('div');
                qBlock.className = 'quiz-question';

                const qText = document.createElement('p');
                qText.textContent = `${index + 1}. ${q.question}`;
                qBlock.appendChild(qText);

                if (q.type === 'code') {
                    const inputArea = document.createElement('textarea');
                    inputArea.className = 'code-input';
                    inputArea.style.width = '100%';
                    inputArea.style.border = '1px solid #ccc';
                    inputArea.style.borderRadius = '5px';
                    inputArea.style.padding = '10px';
                    inputArea.style.margin = '10px 0';
                    inputArea.style.resize = 'vertical';
                    inputArea.rows = 2;
                    inputArea.placeholder = 'Напишите ваш код...';

                    const checkBtn = document.createElement('button');
                    checkBtn.textContent = '✔️ Проверить код';
                    checkBtn.className = 'btn-quiz-opt';

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';

                    checkBtn.onclick = () => {
                        const userCode = inputArea.value.trim().replace(/\s+/g, ' ');
                        const correctAnswers = q.correct.map(c => c.trim().replace(/\s+/g, ' '));

                        const isCorrect = correctAnswers.some(ans => userCode.includes(ans) || userCode.replace(/\s/g, '') === ans.replace(/\s/g, ''));

                        inputArea.disabled = true;
                        checkBtn.disabled = true;
                        checkBtn.style.opacity = '0.7';

                        if (isCorrect) {
                            feedback.textContent = '✅ Верно';
                            feedback.style.color = '#10b981';
                            qBlock.classList.add('answered-correct');
                        } else {
                            feedback.textContent = '❌ Ошибка';
                            feedback.style.color = '#ef4444';
                            qBlock.classList.add('answered-wrong');
                        }

                        checkQuizCompletion(questions.length);
                    };

                    qBlock.appendChild(inputArea);
                    qBlock.appendChild(checkBtn);
                    qBlock.appendChild(feedback);

                } else {
                    const optionsDiv = document.createElement('div');

                    // SHUFFLE LOGIC
                    const indexedOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
                    // Simple Shuffle
                    indexedOptions.sort(() => Math.random() - 0.5);

                    indexedOptions.forEach((optObj) => {
                        const btn = document.createElement('button');
                        btn.textContent = optObj.text;
                        btn.className = 'btn-quiz-opt';
                        // Pass ORIGINAL Index for correctness check
                        btn.onclick = () => checkAnswer(btn, optObj.originalIndex, q.correct, questions.length);
                        optionsDiv.appendChild(btn);
                    });
                    qBlock.appendChild(optionsDiv);

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';
                    qBlock.appendChild(feedback);
                }

                container.appendChild(qBlock);
            });
        } catch (e) {
            container.innerHTML = `<div style="padding: 20px; background: #fee2e2; color: #b91c1c; border-radius: 12px; border: 2px solid #ef4444;">
                <h3 style="margin-top:0;">ОШИБКА ОТРИСОВКИ ТЕСТА!</h3>
                <p><strong>Мы не смогли загрузить тест из-за сбоя в браузере:</strong></p>
                <div style="background: #fff; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 0.9em; overflow-x: auto;"><b>${e.name}</b>: ${e.message}<br><br>${e.stack}</div>
                <button class="btn-retake" onclick="window.location.reload()">Перезагрузить страницу</button>
            </div>`;
        }
    }

    function checkAnswer(btn, selected, correct, total) {
        const optionsDiv = btn.parentElement;
        const qBlock = optionsDiv.parentElement;
        const feedback = qBlock.querySelector('.quiz-feedback');

        // Disable buttons in this question
        optionsDiv.querySelectorAll('.btn-quiz-opt').forEach(b => b.disabled = true);

        if (selected === correct) {
            btn.classList.add('correct');
            feedback.textContent = '✅ Верно'; // Less verbose
            feedback.style.color = '#28a745';
            qBlock.classList.add('answered-correct');
        } else {
            btn.classList.add('incorrect');
            // Show correct answer? No, let them find it themselves next time.
            feedback.textContent = '❌ Ошибка';
            feedback.style.color = '#dc3545';
            qBlock.classList.add('answered-wrong');
        }

        // Always check if quiz is finished (all questions answered)
        checkQuizCompletion(total);
    }

    function checkQuizCompletion(total) {
        const container = document.getElementById('quiz-container');
        const correctCount = container.querySelectorAll('.answered-correct').length;
        const wrongCount = container.querySelectorAll('.answered-wrong').length;

        if (correctCount + wrongCount === total) {
            // Quiz Finished
            if (wrongCount === 0) {
                // SUCCESS
                const progress = JSON.parse(localStorage.getItem('quiz_results')) || {};
                progress[currentPath] = true;
                localStorage.setItem('quiz_results', JSON.stringify(progress));

                setTimeout(() => {
                    renderQuizCompleted(container);
                    showNextLessonButton();
                }, 800);
            } else {
                // FAIL
                setTimeout(() => {
                    renderQuizFailed(container, correctCount, total);
                }, 800);
            }
        }
    }

    function renderQuizFailed(container, score, total) {
        container.innerHTML = `
            <div style="text-align:center; padding: 30px; border: 2px solid #dc3545; border-radius: 12px; background: #fff5f5;">
                <h3 style="color: #dc3545; margin-top:0;">❌ Тест не пройден</h3>
                <p style="font-size: 1.1em;">Вы ответили верно на <b>${score}</b> из <b>${total}</b> вопросов.</p>
                <p>Чтобы пройти дальше, нужно ответить на все вопросы правильно.</p>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                    <button class="btn-retake" id="btn-restart-quiz" style="background: #dc3545;">🔄 Пересдать тест</button>
                    <button class="btn-retake" id="btn-read-lesson" style="background: #007bff;">📖 Повторить урок</button>
                </div>
            </div>
        `;
        document.getElementById('btn-restart-quiz').onclick = () => {
            // Instant restart without going back to "Start" button
            renderQuizContent(container);
            container.scrollIntoView({ behavior: 'smooth' });
        };
        document.getElementById('btn-read-lesson').onclick = () => {
            toggleLessonVisibility(true);
            container.style.display = 'none';
            container.innerHTML = '';
            document.getElementById('btn-start-quiz').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    function renderQuizCompleted(container) {
        toggleLessonVisibility(true); // Always show lesson again after passing

        container.innerHTML = `
            <div class="quiz-passed-container">
                <h3>🎉 Урок пройден!</h3>
                <p>Доступ к следующему уроку открыт.</p>
                <button class="btn-retake" id="btn-retake-finished">Пройти заново для закрепления</button>
            </div>
        `;
        const retakeBtn = document.getElementById('btn-retake-finished');
        if (retakeBtn) {
            retakeBtn.onclick = () => {
                toggleLessonVisibility(false);
                renderQuizContent(container, false); // Start quiz normally
                container.scrollIntoView({ behavior: 'smooth' });
            };
        }
    }

    function showNextLessonButton() {
        const lessonIndex = lessonsList.indexOf(currentPath);
        const navContainer = document.querySelector('.lesson-navigation');
        if (!navContainer) return;

        // Avoid dupes
        if (navContainer.querySelector('.next') || navContainer.querySelector('.finish')) return;

        if (lessonIndex >= 0 && lessonIndex < lessonsList.length - 1) {
            const nextLink = lessonsList[lessonIndex + 1];
            const nextBtn = document.createElement('a');
            nextBtn.href = nextLink;
            nextBtn.className = 'btn-nav next';
            nextBtn.textContent = 'Следующий урок ➡';
            navContainer.appendChild(nextBtn);

            // Auto scroll to nav
            navContainer.scrollIntoView({ behavior: 'smooth' });

        } else if (lessonIndex === lessonsList.length - 1) {
            navContainer.innerHTML += '<div class="btn-nav finish" style="background:green;color:white;cursor:default;">🏆 Курс завершен!</div>';
        }
    }

    // --- 4. Utilities ---
    function initCopyButtons() {
        document.querySelectorAll('pre').forEach(pre => {
            // Игнорируем технические блоки из онлайн-редактора
            if (pre.closest('.CodeMirror') || pre.id === 'terminal-output') return;

            if (pre.querySelector('.btn-copy')) return; // Avoid duplicates

            pre.style.position = 'relative';
            const btn = document.createElement('button');
            btn.className = 'btn-copy';
            btn.textContent = '📋';
            btn.onclick = () => {
                const text = pre.innerText.replace('📋', '').replace('✅', ''); // Clean text
                navigator.clipboard.writeText(text);
                btn.textContent = '✅';
                setTimeout(() => btn.textContent = '📋', 2000);
            };
            pre.appendChild(btn);
        });
    }

    function initTheme() {
        const headerContainer = document.querySelector('header .container');
        if (!headerContainer) return;

        if (document.querySelector('.theme-toggle-btn')) return; // Avoid dupes

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle-btn';
        const updateIcon = (isDark) => toggleBtn.textContent = isDark ? '☀️' : '🌙';

        const savedTheme = localStorage.getItem('theme');
        let isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDarkMode) document.body.classList.add('dark-mode');
        updateIcon(isDarkMode);

        toggleBtn.onclick = () => {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            updateIcon(isDarkMode);
        };

        const nav = headerContainer.querySelector('nav');
        if (nav && nav.querySelector('ul')) {
            const li = document.createElement('li');
            li.appendChild(toggleBtn);
            nav.querySelector('ul').appendChild(li);
        }
    }

    function initResetButton() {
        const resetBtn = document.getElementById('btn-reset-progress');
        if (!resetBtn) return;

        resetBtn.onclick = () => {
            if (confirm('⚠️ Вы уверены, что хотите сбросить весь прогресс обучения? Все пройденные уроки будут снова заблокированы.')) {
                localStorage.removeItem('quiz_results');
                location.reload();
            }
        };
    }

    // --- Scroll Animations ---
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.card, .lesson-card, .lesson-content, .lesson-goal, .lesson-homework, #quiz-container, .tasks-sidebar, .task-description, .editor-container');

        // Helper to add base class explicitly
        animatedElements.forEach(el => {
            el.classList.add('fade-in-up');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once animated so it doesn't replay when scrolling back up
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Run All
    initLockSystem();
    initCopyButtons();
    initQuiz();
    initTheme();
    initResetButton();
    initScrollAnimations();
});

// --- Password Access System ---
const SECRET_PASSWORD = "admin"; // Вы можете изменить пароль здесь

function checkLessonAccess() {
    const currentPath = window.location.pathname.split('/').pop();
    if (!currentPath.startsWith('lesson')) return;

    const isUnlocked = localStorage.getItem('lessons_unlocked') === 'true';
    if (isUnlocked) return;

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'access-overlay';
    overlay.innerHTML = `
        <div class="access-modal">
            <h2>🔒 Доступ ограничен</h2>
            <p>Для перехода к любому уроку введите специальный пароль.</p>
            <input type="password" class="access-input" id="access-password" placeholder="Введите пароль...">
            <button class="access-btn" id="access-submit">Войти</button>
            <div class="access-error" id="access-error">Неверный пароль!</div>
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const input = document.getElementById('access-password');
    const submit = document.getElementById('access-submit');
    const error = document.getElementById('access-error');

    function verify() {
        if (input.value === SECRET_PASSWORD) {
            localStorage.setItem('lessons_unlocked', 'true');
            overlay.remove();
            document.body.style.overflow = 'auto';
        } else {
            error.style.display = 'block';
            input.style.borderColor = 'var(--error-color)';
            input.value = '';
            setTimeout(() => {
                error.style.display = 'none';
                input.style.borderColor = '';
            }, 2000);
        }
    }

    submit.onclick = verify;
    input.onkeypress = (e) => { if (e.key === 'Enter') verify(); };
}

// Initialize access check
checkLessonAccess();
