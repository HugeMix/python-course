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

            const existingLock = card.querySelector('.lock-ui-container');
            if (existingLock) existingLock.remove();

            if (!isFirst && !isPrevPassed && !isManuallyUnlocked) {
                card.classList.add('locked');
                card.style.opacity = "0.8";
                link.style.display = 'none';

                const lockUI = document.createElement('div');
                lockUI.className = 'lock-ui-container';
                lockUI.style.cssText = "margin-top: 15px; padding: 15px; background: rgba(0,0,0,0.03); border-radius: 12px; border: 1px dashed #ccc; position: relative; z-index: 10;";
                
                lockUI.innerHTML = `
                    <p style="margin: 0 0 12px 0; font-size: 0.85rem; color: #666; font-weight: 500;">🔒 Урок заблокирован</p>
                    <button type="button" class="unlock-btn-trigger" style="width: 100%; padding: 12px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; transition: 0.2s; position: relative; z-index: 9999; pointer-events: auto;">Ввести пароль</button>
                `;
                
                card.appendChild(lockUI);

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
            } else {
                card.classList.remove('locked');
                card.style.opacity = "1";
                link.style.display = 'inline-block';
            }
        });
    }

    // --- 4. Quiz Logic ---
    function initQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer) return;

        const startBtn = document.getElementById('start-quiz-btn');
        if (startBtn) {
            startBtn.onclick = () => {
                const content = document.querySelector('.lesson-content');
                if (content) content.style.display = 'none';
                startBtn.parentElement.style.display = 'none';
                renderQuiz();
            };
        }

        function renderQuiz() {
            const lessonId = currentPath;
            const questions = quizData[lessonId];
            if (!questions) return;

            const quizWrapper = document.createElement('div');
            quizWrapper.id = 'active-quiz-wrapper';
            quizWrapper.innerHTML = `
                <div class="quiz-header" style="text-align: center; margin-bottom: 30px; padding: 20px; background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow);">
                    <h2 style="color: var(--accent-color); margin-bottom: 10px;">🎯 Финальный тест</h2>
                    <p style="color: #666;">Ответьте правильно на все вопросы, чтобы подтвердить изучение темы.</p>
                </div>
                <div id="quiz-questions" style="background: var(--card-bg); padding: 30px; border-radius: 16px; box-shadow: var(--shadow); border: 1px solid rgba(0,0,0,0.05);"></div>
                <div id="quiz-controls" style="margin-top: 30px; text-align: center;">
                    <button id="submit-quiz" class="btn" style="display: none; width: 100%; background: var(--accent-color); color: white; border: none; padding: 18px; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 1.1rem; transition: 0.3s;">🚀 Проверить мои ответы</button>
                    <div id="quiz-result" style="margin-top: 25px; padding: 20px; border-radius: 12px; font-weight: 700; font-size: 1.1rem; display: none;"></div>
                    <button id="retry-lesson-btn" class="btn" style="display: none; width: 100%; margin-top: 15px; background: #6b7280; color: white; border: none; padding: 15px; border-radius: 12px; cursor: pointer;">📖 Вернуться к теории и повторить</button>
                </div>
            `;
            quizContainer.appendChild(quizWrapper);

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

    initLockSystem();
    initQuiz();
    updateProgressUI();
});

const quizData = {
    'lesson1.html': [
        { question: "В каком году началась разработка Python?", options: ["1989", "1991", "2000", "1980"], answer: "1989" },
        { question: "Что такое Zen of Python?", options: ["Название библиотеки", "Философия и правила языка", "Игра на Python", "Тип данных"], answer: "Философия и правила языка" },
        { question: "Как вывести текст в консоль?", options: ["console.log()", "print()", "echo", "System.out.println()"], answer: "print()" },
        { question: "Что означает 'интерпретируемый язык'?", options: ["Код переводится в файл .exe", "Код выполняется построчно интерпретатором", "Код работает только в браузере", "Код нельзя изменять"], answer: "Код выполняется построчно интерпретатором" },
        { question: "Какой стиль именования переменных принят в PEP 8?", options: ["camelCase", "snake_case", "PascalCase", "kebab-case"], answer: "snake_case" }
    ],
    'lesson2.html': [
        { question: "Какая функция проверяет тип переменной?", options: ["check()", "type()", "kind()", "is_a()"], answer: "type()" },
        { question: "Результат выполнения: print(type(5.0))?", options: ["int", "float", "double", "number"], answer: "float" },
        { question: "Можно ли изменить значение переменной с int на str?", options: ["Нет", "Да", "Только с помощью функций", "Только в Python 2"], answer: "Да" },
        { question: "Что такое f-строка?", options: ["Строка с ошибкой", "Форматированная строка", "Функциональная строка", "Финальная строка"], answer: "Форматированная строка" },
        { question: "Какой тип данных у значения '100'?", options: ["int", "float", "str", "bool"], answer: "str" }
    ],
    'lesson3.html': [
        { question: "Результат 7 // 2?", options: ["3.5", "3", "4", "1"], answer: "3" },
        { question: "Результат 7 % 2?", options: ["3.5", "3", "4", "1"], answer: "1" },
        { question: "Как возвести 2 в 3 степень?", options: ["2 ^ 3", "2 ** 3", "pow(2, 3)", "Оба варианта 2 и 3"], answer: "Оба варианта 2 и 3" },
        { question: "Что вернет 'not True or False'?", options: ["True", "False", "None", "Ошибка"], answer: "False" },
        { question: "Какой оператор проверяет равенство?", options: ["=", "==", "===", "is"], answer: "==" }
    ],
    'lesson4.html': [
        { question: "Нужны ли скобки в условии if?", options: ["Да", "Нет", "Только в Python 2", "Только если много условий"], answer: "Нет" },
        { question: "Какое слово используется для 'иначе если'?", options: ["else if", "elseif", "elif", "case"], answer: "elif" },
        { question: "Что вернет bool(0)?", options: ["True", "False", "None", "Ошибка"], answer: "False" },
        { question: "Как проверить, что число x находится между 1 и 10?", options: ["1 < x < 10", "x > 1 and x < 10", "Оба варианта верны", "Ни один из вариантов"], answer: "Оба варианта верны" },
        { question: "Что делает оператор 'in'?", options: ["Вводит данные", "Проверяет наличие элемента в коллекции", "Создает цикл", "Удаляет элемент"], answer: "Проверяет наличие элемента в коллекции" }
    ],
    'lesson5.html': [
        { question: "Что выведет range(5)?", options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"], answer: "0, 1, 2, 3, 4" },
        { question: "Как выйти из цикла досрочно?", options: ["stop", "exit", "break", "return"], answer: "break" },
        { question: "Когда сработает else после цикла?", options: ["Всегда", "Никогда", "Если цикл не был прерван через break", "Если в цикле была ошибка"], answer: "Если цикл не был прерван через break" },
        { question: "Что делает continue?", options: ["Прерывает цикл", "Переходит к следующей итерации", "Запускает цикл заново", "Ничего"], answer: "Переходит к следующей итерации" },
        { question: "Какой цикл лучше использовать, если количество повторений неизвестно?", options: ["for", "while", "repeat", "do-while"], answer: "while" }
    ],
    'lesson6.html': [
        { question: "Как получить последний элемент списка 'my_list'?", options: ["my_list[last]", "my_list[-1]", "my_list[len(my_list)]", "my_list.last()"], answer: "my_list[-1]" },
        { question: "В чем главное отличие кортежа от списка?", options: ["Разные скобки", "Кортеж нельзя изменить", "Список работает быстрее", "В кортеже только числа"], answer: "Кортеж нельзя изменить" },
        { question: "Что делает метод append()?", options: ["Удаляет элемент", "Добавляет элемент в начало", "Добавляет элемент в конец", "Сортирует список"], answer: "Добавляет элемент в конец" },
        { question: "Результат: [1, 2] + [3, 4]?", options: ["[4, 6]", "[1, 2, 3, 4]", "Ошибка", "[1, 2, [3, 4]]"], answer: "[1, 2, 3, 4]" },
        { question: "Как создать пустой список?", options: ["list()", "[]", "Оба варианта верны", "None"], answer: "Оба варианта верны" }
    ],
    'lesson7.html': [
        { question: "Что вернет функция без оператора return?", options: ["0", "False", "None", "Ошибка"], answer: "None" },
        { question: "Как вызвать функцию my_func?", options: ["call my_func", "my_func()", "my_func[]", "run my_func"], answer: "my_func()" },
        { question: "Что такое анонимная функция?", options: ["Функция без названия (lambda)", "Скрытая функция", "Функция в другом файле", "Ошибка в коде"], answer: "Функция без названия (lambda)" },
        { question: "Где видны локальные переменные?", options: ["Везде", "Только внутри функции", "Только в главном файле", "В соседних функциях"], answer: "Только внутри функции" },
        { question: "Зачем нужны аргументы по умолчанию?", options: ["Чтобы ускорить код", "Чтобы функцию можно было вызвать без части параметров", "Чтобы защитить данные", "Они не нужны"], answer: "Чтобы функцию можно было вызвать без части параметров" }
    ],
    'lesson8.html': [
        { question: "В каких скобках создаются множества?", options: ["[]", "()", "{}", "<>"], answer: "{}" },
        { question: "Может ли список быть ключом в словаре?", options: ["Да", "Нет", "Только пустой", "Только в Python 2"], answer: "Нет" },
        { question: "Что вернет set([1, 2, 2, 3])?", options: ["{1, 2, 2, 3}", "{1, 2, 3}", "[1, 2, 3]", "Ошибка"], answer: "{1, 2, 3}" },
        { question: "Как безопасно получить значение из словаря?", options: ["dict[key]", "dict.get(key)", "dict.find(key)", "dict.search(key)"], answer: "dict.get(key)" },
        { question: "Что такое пересечение множеств?", options: ["Все элементы обоих множеств", "Только общие элементы", "Элементы, которых нет в обоих", "Удаление элементов"], answer: "Только общие элементы" }
    ],
    'lesson9.html': [
        { question: "Как перевернуть строку s?", options: ["s.reverse()", "s[::-1]", "reverse(s)", "s.flip()"], answer: "s[::-1]" },
        { question: "Что делает метод strip()?", options: ["Разрезает строку", "Удаляет пробелы по краям", "Переводит в нижний регистр", "Заменяет символы"], answer: "Удаляет пробелы по краям" },
        { question: "Как собрать список ['a', 'b'] в строку 'a,b'?", options: ["join(',', list)", "','.join(list)", "list.join(',')", "str(list)"], answer: "','.join(list)" },
        { question: "Результат: '123'.isdigit()?", options: ["True", "False", "None", "Ошибка"], answer: "True" },
        { question: "Как создать многострочную строку?", options: ["С помощью \\n", "В тройных кавычках ''' '''", "Оба варианта верны", "Ни один из вариантов"], answer: "Оба варианта верны" }
    ],
    'lesson10.html': [
        { question: "Зачем нужен оператор with при работе с файлами?", options: ["Чтобы ускорить запись", "Чтобы файл закрылся автоматически", "Чтобы сжать файл", "Он не обязателен"], answer: "Чтобы файл закрылся автоматически" },
        { question: "Что произойдет при открытии файла в режиме 'w', если он уже существует?", options: ["Ошибка", "Файл будет очищен", "Данные добавятся в конец", "Создастся копия"], answer: "Файл будет очищен" },
        { question: "Какая кодировка рекомендуется для файлов?", options: ["ASCII", "CP1251", "UTF-8", "Latin-1"], answer: "UTF-8" },
        { question: "Как прочитать файл построчно в цикле?", options: ["for line in file:", "while file.read():", "file.foreach()", "Никак"], answer: "for line in file:" },
        { question: "Что делает метод readlines()?", options: ["Читает одну строку", "Возвращает список всех строк", "Удаляет строки", "Считает количество строк"], answer: "Возвращает список всех строк" }
    ],
    'lesson11.html': [
        { question: "Какой блок выполняется в любом случае?", options: ["except", "finally", "else", "catch"], answer: "finally" },
        { question: "Как поймать любую ошибку (не рекомендуется)?", options: ["except Error:", "except Exception:", "catch all:", "try all:"], answer: "except Exception:" },
        { question: "Что делает ключевое слово raise?", options: ["Исправляет ошибку", "Вызывает исключение вручную", "Поднимает значение переменной", "Ускоряет код"], answer: "Вызывает исключение вручную" },
        { question: "Когда выполняется блок else в try-except?", options: ["Если была ошибка", "Если ошибки не было", "Всегда", "Никогда"], answer: "Если ошибки не было" },
        { question: "Результат: 10 / '2'?", options: ["5", "TypeError", "ValueError", "ZeroDivisionError"], answer: "TypeError" }
    ],
    'lesson12.html': [
        { question: "Как установить внешнюю библиотеку?", options: ["install lib", "pip install lib", "python get lib", "download lib"], answer: "pip install lib" },
        { question: "Что такое PyPI?", options: ["Версия Python", "Главный репозиторий пакетов Python", "Тип данных", "Редактор кода"], answer: "Главный репозиторий пакетов Python" },
        { question: "Как импортировать только функцию sqrt из math?", options: ["import sqrt from math", "from math import sqrt", "math.import(sqrt)", "import math.sqrt"], answer: "from math import sqrt" },
        { question: "Зачем нужен файл __init__.py?", options: ["Для инициализации переменных", "Чтобы папка считалась пакетом", "Для ускорения кода", "Он не нужен"], answer: "Чтобы папка считалась пакетом" },
        { question: "Какая команда создает виртуальное окружение?", options: ["python -m venv env", "pip venv create", "venv start", "python new env"], answer: "python -m venv env" }
    ],
    'lesson13.html': [
        { question: "Что такое класс?", options: ["Функция", "Чертеж для создания объектов", "Список данных", "Тип ошибки"], answer: "Чертеж для создания объектов" },
        { question: "Зачем нужен метод __init__?", options: ["Для удаления объекта", "Для инициализации атрибутов при создании", "Для вывода текста", "Для математических расчетов"], answer: "Для инициализации атрибутов при создании" },
        { question: "Что такое наследование?", options: ["Копирование кода", "Создание класса на основе другого", "Удаление старого класса", "Использование глобальных переменных"], answer: "Создание класса на основе другого" },
        { question: "Как создать объект класса MyClass?", options: ["obj = new MyClass()", "obj = MyClass()", "obj = call MyClass", "obj = MyClass.create()"], answer: "obj = MyClass()" },
        { question: "Что означает инкапсуляция?", options: ["Ускорение кода", "Сокрытие внутренней логики класса", "Связывание файлов", "Множественное наследование"], answer: "Сокрытие внутренней логики класса" }
    ],
    'lesson14.html': [
        { question: "Какой класс хранит и дату, и время?", options: ["date", "time", "datetime", "moment"], answer: "datetime" },
        { question: "Как получить только текущий год из объекта dt?", options: ["dt.getYear()", "dt.year", "dt.year()", "year(dt)"], answer: "dt.year" },
        { question: "Что делает timedelta?", options: ["Меняет формат даты", "Представляет разницу во времени", "Удаляет время", "Считает миллисекунды"], answer: "Представляет разницу во времени" },
        { question: "Метод для превращения даты в строку?", options: ["strptime", "strftime", "toString", "format"], answer: "strftime" },
        { question: "Как получить текущую дату без времени?", options: ["date.today()", "now.date()", "Оба варианта верны", "Ни один из вариантов"], answer: "Оба варианта верны" }
    ],
    'lesson15.html': [
        { question: "Какой фреймворк популярен для веб-разработки?", options: ["React", "Django", "TensorFlow", "Unity"], answer: "Django" },
        { question: "Где лучше всего хранить свой код и портфолио?", options: ["В Google Диске", "На GitHub", "В Telegram", "На флешке"], answer: "На GitHub" },
        { question: "Что такое LeetCode?", options: ["Редактор кода", "Платформа для решения алгоритмических задач", "Название новой версии Python", "Библиотека для графики"], answer: "Платформа для решения алгоритмических задач" },
        { question: "Нужно ли знать алгоритмы программисту?", options: ["Нет, библиотеки всё делают сами", "Да, это развивает мышление и нужно на собеседованиях", "Только если пишешь игры", "Только математикам"], answer: "Да, это развивает мышление и нужно на собеседованиях" },
        { question: "Какой главный совет новичку?", options: ["Учить всё наизусть", "Больше практиковаться и писать код", "Ждать идеального момента", "Сдаться при первой ошибке"], answer: "Больше практиковаться и писать код" }
    ]
};
