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
            { question: "Какая команда используется для вывода текста на экран?", options: ["input()", "print()", "scan()", "output()"], correct: 1 },
            { question: "Какое расширение имеют файлы Python?", options: [".txt", ".exe", ".py", ".pyt"], correct: 2 },
            { question: "В каком году был выпущен Python?", options: ["1991", "2000", "1985", "1995"], correct: 0 },
            { question: "Какую роль выполняет функция print()?", options: ["Считывает ввод с клавиатуры", "Выводит переданные данные в консоль", "Удаляет пробелы", "Объявляет функцию"], correct: 1 },
            { question: "Print регистрозависима?", options: ["Да (PRiNT и print - разные)", "Нет", "В Python не важен регистр", "Регистр влияет только на Windows"], correct: 0 },
            { question: "Напишите программу, которая выводит текст 'Привет'", type: "code", correct: ["print('Привет')", "print(\"Привет\")"] },
            { question: "Напишите программу, которая выводит число 42", type: "code", correct: ["print(42)", "print('42')", "print(\"42\")"] }
        ],
        'lesson2.html': [
            { question: "Как правильно объявить переменную в Python?", options: ["var x = 5", "int x = 5", "x = 5", "$x = 5"], correct: 2 },
            { question: "Какой тип данных у значения 3.14?", options: ["int", "float", "string", "bool"], correct: 1 },
            { question: "Что выведет код: print(type(\"10\"))?", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1 },
            { question: "Какое имя переменной недопустимо в Python?", options: ["my_var", "var1", "1var", "_var_"], correct: 2 },
            { question: "Что будет результатом: str(5) + '5'?", options: ["10", "Ошибка", "55", "'5'"], correct: 2 },
            { question: "Создайте переменную age и присвойте ей значение 20", type: "code", correct: ["age=20", "age = 20"] },
            { question: "Сконвертируйте строку '10' в число и присвойте в x", type: "code", correct: ["x=int('10')", "x=int(\"10\")", "x = int('10')", "x = int(\"10\")"] }
        ],
        'lesson3.html': [
            { question: "Результат операции 10 // 3?", options: ["3.333", "3", "4", "3.0"], correct: 1 },
            { question: "Какой оператор используется для возведения в степень?", options: ["^", "*", "**", "^^"], correct: 2 },
            { question: "Как проверить равенство двух переменных?", options: ["x = y", "x == y", "x === y", "x equals y"], correct: 1 },
            { question: "Что выведет код: print(True and False)?", options: ["True", "False", "Ошибка", "None"], correct: 1 },
            { question: "Какой оператор меняет логическое значение на противоположное?", options: ["not", "!=!", "reverse", "invert"], correct: 0 },
            { question: "Напишите выражение: остаток от деления 10 на 3", type: "code", correct: ["10%3", "10 % 3"] }
        ],
        'lesson4.html': [
            { question: "Как правильно написать условие 'если x больше 5'?", options: ["if x > 5 then:", "if (x > 5)", "if x > 5:", "if x > 5 ;"], correct: 2 },
            { question: "Какое слово обрабатывает ситуацию, когда все предыдущие условия ложны?", options: ["else if", "else:", "elif", "finally"], correct: 1 },
            { question: "Какой оператор означает 'не равно'?", options: ["<>", "!=", "/=", "not="], correct: 1 },
            { question: "Что всегда обязательно ставить в конце условия if/elif/else перед переходом на новую строку?", options: ["Точку с запятой", "Двоеточие (:)", "Круглые скобки", "Запятую"], correct: 1 },
            { question: "Напишите код условия: если a меньше b:", type: "code", correct: ["if a<b:", "if a < b:"] },
            { question: "Напишите ключевое слово 'иначе если':", type: "code", correct: ["elif", "elif:"] }
        ],
        'lesson5.html': [
            { question: "Какой цикл работает, пока его условие истинно (True)?", options: ["while", "for", "do-while", "loop"], correct: 0 },
            { question: "Что генерирует функция range(5)?", options: ["Числа от 1 до 5", "Числа от 0 до 4", "Числа от 0 до 5", "Считает до 5"], correct: 1 },
            { question: "Как досрочно полностью выйти из цикла (оборвать его)?", options: ["stop", "exit", "break", "return"], correct: 2 },
            { question: "Как пропустить текущий шаг цикла и перейти сразу к следующему?", options: ["skip", "pass", "continue", "next"], correct: 2 },
            { question: "Напишите команду досрочного прерывания цикла", type: "code", correct: ["break"] },
            { question: "Напишите начало цикла 'для i в диапазоне 3':", type: "code", correct: ["for i in range(3):", "for i in range(0,3):"] }
        ],
        'lesson6.html': [
            { question: "Как правильно создать список (list) в Python?", options: ["x = (1, 2)", "x = {1, 2}", "x = [1, 2]", "x = <1, 2>"], correct: 2 },
            { question: "С какого индекса (номера) начинается счет элементов в списке?", options: ["1", "0", "-1", "Любого"], correct: 1 },
            { question: "Как добавить элемент 'apple' в конец существующего списка list?", options: ["list.add('apple')", "list.insert('apple')", "list.append('apple')", "list.push('apple')"], correct: 2 },
            { question: "Какая функция определяет количество элементов (длину) в списке?", options: ["list.count()", "size(list)", "list.length", "len()"], correct: 3 },
            { question: "Создайте пустой список numbers", type: "code", correct: ["numbers=[]", "numbers = []", "numbers=list()"] },
            { question: "Напишите метод, который удаляет элемент по его значению:", type: "code", correct: ["remove", "remove()"] }
        ],
        'lesson7.html': [
            { question: "Какое ключевое слово используется для создания (объявления) функции?", options: ["function", "func", "def", "create"], correct: 2 },
            { question: "Как правильно вызывать функцию с именем my_func?", options: ["call my_func()", "my_func", "my_func()", "execute my_func"], correct: 2 },
            { question: "Что возвратит функция, если в ней нет явного оператора return?", options: ["0", "False", "None", "Ошибка"], correct: 2 },
            { question: "Что такое аргументы по умолчанию?", options: ["Аргументы, которые нельзя изменить", "Параметры, имеющие стартовое значение, если их не забыли передать", "Обязательные параметры", "Такого нет в Python"], correct: 1 },
            { question: "Как вернуть значение переменной x из функции назад в программу?", type: "code", correct: ["return x", "return(x)"] },
            { question: "Напишите объявление функции hello без аргументов", type: "code", correct: ["def hello():", "def hello() :"] }
        ],
        'lesson8.html': [
            { question: "Как правильно понимать и создавать словарь (dict)?", options: ["x = {1, 2}", "Пары ключ:значение, x = {'a': 1, 'b': 2}", "x = [1: 2]", "x = (1)"], correct: 1 },
            { question: "Какая главная особенность и отличие множества (set) от списка?", options: ["Оно упорядочено", "Элементы могут повторяться", "Все уникальны и не имеют индексов", "Использует дробные индексы"], correct: 2 },
            { question: "Как правильно создать ПУСТОЕ множество (а не пустой словарь)?", options: ["{}", "set()", "[]", "dict()"], correct: 1 },
            { question: "Как получить все ключи словаря d?", options: ["d.keys()", "d.get()", "d.values()", "d.items()"], correct: 0 },
            { question: "Получите значение по ключу 'name' из словаря data (через [])", type: "code", correct: ["data['name']", "data[\"name\"]"] },
            { question: "Напишите удаление ключа 'age' из словаря d с помощью оператора del", type: "code", correct: ["del d['age']", "del d[\"age\"]", "del(d['age'])"] }
        ],
        'lesson9.html': [
            { question: "Как узнать длину строки s (количество символов)?", options: ["s.length()", "len(s)", "s.size()", "count(s)"], correct: 1 },
            { question: "Какой метод переводит всю строку в верхний регистр (ЗАГЛАВНЫЕ БУКВЫ)?", options: ["upper()", "to_upper()", "capitalize()", "UPPER()"], correct: 0 },
            { question: "Какой метод делит строку s на список слов по пробелам?", options: ["s.divide()", "s.split()", "s.cut()", "s.break()"], correct: 1 },
            { question: "Какой метод заменяет подстроку 'a' на 'b'?", options: ["s.swap('a', 'b')", "s.change('a', 'b')", "s.replace('a', 'b')", "s.switch('a', 'b')"], correct: 2 },
            { question: "Что делает метод s.strip()?", options: ["Очищает всю строку", "Удаляет пробелы и переносы по самым краям строки", "Сделает буквы строчными", "Удалит все числа"], correct: 1 },
            { question: "Напишите вызов функции для получения длины строки t", type: "code", correct: ["len(t)"] }
        ],
        'lesson10.html': [
            { question: "Какая функция используется для открытия файла?", options: ["file.open()", "read()", "open()", "start()"], correct: 2 },
            { question: "Какой режим (mode) используется для записи в файл с УДАЛЕНИЕМ старого содержимого?", options: ["'r'", "'a'", "'w'", "'x'"], correct: 2 },
            { question: "Почему 'with open()' используют чаще, чем просто open()?", options: ["Она работает быстрее", "Она автоматически закроет файл даже при ошибке, не оставляя утечек памяти", "Позволяет писать цветной текст", "Ускоряет загрузку"], correct: 1 },
            { question: "Как прочитать весь текстовый файл целиком в одну строку?", options: ["file.read()", "file.get()", "file.text()", "file.lines()"], correct: 0 },
            { question: "Напишите режим открытия файла для ДОЗАПИСИ (в конец файла)", type: "code", correct: ["'a'", "\"a\""] },
            { question: "Напишите метод закрытия файла f (например открытого через open без with)", type: "code", correct: ["f.close()"] }
        ],
        'lesson11.html': [
            { question: "Для чего используется блок try-except?", options: ["Для создания циклов", "Для перехвата ошибок и защиты программы от внезапных 'падений'", "Для ускорения кода", "Для работы с базами"], correct: 1 },
            { question: "В каком блоке описывается перехват и логика обработки пойманной ошибки?", options: ["try", "except", "handle", "finally"], correct: 1 },
            { question: "В каких случаях выполняется блок finally?", options: ["Только если возникла ошибка", "Только если код отработал успешно", "Он выполняется ВСЕГДА, в самом конце", "Он никогда не выполняется"], correct: 2 },
            { question: "Что случится, если поделить число на 0 в Python?", options: ["ValueError", "TypeError", "ZeroDivisionError", "SyntaxError"], correct: 2 },
            { question: "Ключевое слово для искусственного вызова исключения (ошибки)", type: "code", correct: ["raise"] },
            { question: "Универсальный класс для перехвата любых ошибок: except ________:", type: "code", correct: ["Exception"] }
        ],
        'lesson12.html': [
            { question: "Для чего используют конструкцию import?", options: ["Чтобы красить текст", "Для подключения встроенных и скачанных библиотек в свой проект", "Для компиляции кода", "Для архивации"], correct: 1 },
            { question: "Как из модуля math импортировать ТОЛЬКО константу pi?", options: ["import math.pi", "from math import pi", "get pi from math", "using math.pi"], correct: 1 },
            { question: "Что такое PIP?", options: ["Платформа игр", "Официальный менеджер для загрузки и установки пакетов (библиотек) из интернета", "Вид ошибки", "Модуль для работы с фото"], correct: 1 },
            { question: "Напишите команду консоли для установки библиотеки requests", type: "code", correct: ["pip install requests"] }
        ],
        'lesson13.html': [
            { question: "Что является основным 'шаблоном' для создания объекта в ООП программировании?", options: ["Функция", "Класс", "Переменная", "Пакет"], correct: 1 },
            { question: "Как называется метод инициализации (или конструктор) нового объекта?", options: ["__start__", "__main__", "__init__", "__create__"], correct: 2 },
            { question: "Какое слово всегда обязательно должен принимать любой метод внутри класса (как самый 1-й аргумент)?", options: ["Имя класса", "self", "ID", "cls"], correct: 1 },
            { question: "Какой принцип программирования описывается словом Инкапсуляция?", options: ["Скрытие внутренней реализации логики/данных от пользователей объекта", "Наследование от других классов", "Вызов разных методов", "Копирование объекта"], correct: 0 },
            { question: "Создайте экземпляр класса Car в переменной obj", type: "code", correct: ["obj=Car()", "obj = Car()"] }
        ],
        'lesson14.html': [
            { question: "Какой встроенно класс позволяет получить текущую дату и время ПК?", options: ["time.now()", "calendar.today()", "datetime.now()", "dates.get()"], correct: 2 },
            { question: "Какой специальный класс отвечает за разницу (промежуток) между двумя датами?", options: ["difference", "timedelta", "timeshift", "dategap"], correct: 1 },
            { question: "Как получить текущую системную дату и время?", options: ["datetime.now()", "datetime.current()", "datetime.today()", "datetime.get()"], correct: 0 },
            { question: "Напишите метод, превращающий Дату в строку по шаблону (например '%Y-%m')", type: "code", correct: ["strftime", "strftime()"] }
        ],
        'lesson15.html': [
            { question: "Какая библиотека встроена в Python 'из коробки' для создания настольных окон (GUI)?", options: ["Pandas", "Tkinter", "Requests", "PyQt"], correct: 1 },
            { question: "Как называется популярный всемирный стандарт оформления и чистоты кода в Python?", options: ["PEP8", "PY-STYLE", "CLEAN-CODE 2.0", "ISO-PY"], correct: 0 },
            { question: "Для хранения своего кода в облаке и портфолио программисты обычно используют:", options: ["Facebook", "GitHub", "Google Drive", "VK"], correct: 1 },
            { question: "Напишите сокращенное название системы контроля версий программного обеспечения", type: "code", correct: ["Git", "git"] }
        ]
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
