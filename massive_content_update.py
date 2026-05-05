import os

lessons_deep_content = {
    1: {
        "title": "Урок 1: Введение в Python — от философии до первой строки",
        "goal": "Освоить основы синтаксиса, понять, почему Python так популярен, и настроить мышление программиста.",
        "content": """
            <div class="theory-block">
                <h3>1. Философия Python (The Zen of Python)</h3>
                <p>Python — это не просто инструмент, это философия. Наберите <code>import this</code> в консоли, и вы увидите принципы, которыми руководствуются разработчики:</p>
                <ul>
                    <li>Красивое лучше, чем уродливое.</li>
                    <li>Явное лучше, чем неявное.</li>
                    <li>Простое лучше, чем сложное.</li>
                    <li>Читаемость имеет значение.</li>
                </ul>
                <p>Это делает Python идеальным для командной разработки: ваш код легко читать другим.</p>
            </div>

            <div class="theory-block">
                <h3>2. Как работает Python под капотом?</h3>
                <p>Python — это <strong>интерпретируемый</strong> язык. Это значит, что код не компилируется сразу в машинные нули и единицы, а читается специальной программой (интерпретатором) строка за строкой. Это замедляет выполнение, но ускоряет разработку и отладку.</p>
                <p><strong>Компиляция в байт-код:</strong> Перед выполнением Python создает файлы <code>.pyc</code> — это промежуточный код, который понимает виртуальная машина Python (PVM).</p>
            </div>

            <div class="theory-block">
                <h3>3. Настройка окружения: PEP 8</h3>
                <p>Профессионалы следуют стандарту <strong>PEP 8</strong>. Главные правила:</p>
                <ul>
                    <li>Отступы: всегда 4 пробела (не Tab!).</li>
                    <li>Длина строки: до 79 символов.</li>
                    <li>Имена: <code>snake_case</code> для переменных и функций.</li>
                </ul>
            </div>

            <div class="theory-block">
                <h3>4. Практика: Расширенный Print</h3>
                <pre><code># Использование именованных аргументов
print("Python", "is", "cool", sep="-", end="!!!\\n")
# Результат: Python-is-cool!!!</code></pre>
                <p>Аргумент <code>sep</code> меняет разделитель, а <code>end</code> — то, что будет в конце строки.</p>
            </div>
        """
    },
    2: {
        "title": "Урок 2: Переменные, Память и Динамическая типизация",
        "goal": "Понять, как Python управляет памятью и как работать с базовыми типами данных на глубоком уровне.",
        "content": """
            <div class="theory-block">
                <h3>1. Переменные — это ссылки</h3>
                <p>В отличие от C++, в Python переменная — это не "коробка", а "ярлык", прикрепленный к объекту в памяти. Если вы напишете <code>a = [1, 2]</code> и <code>b = a</code>, обе переменные будут указывать на один и тот же список!</p>
            </div>

            <div class="theory-block">
                <h3>2. Динамическая типизация: Плюсы и Минусы</h3>
                <p>Вы можете написать <code>x = 5</code>, а затем <code>x = "Hello"</code>. Это дает гибкость, но требует осторожности — вы можете случайно передать строку туда, где ожидалось число.</p>
                <p><strong>Type Hinting (Подсказки типов):</strong> В современном Python принято указывать типы для самодокументирования: <code>age: int = 25</code>.</p>
            </div>

            <div class="theory-block">
                <h3>3. Глубокий разбор типов</h3>
                <table>
                    <tr><th>Тип</th><th>Описание</th><th>Пример</th></tr>
                    <tr><td>int</td><td>Целые числа (неограниченной длины!)</td><td>10**100</td></tr>
                    <tr><td>float</td><td>Числа с точкой (стандарт IEEE 754)</td><td>0.1 + 0.2 != 0.3</td></tr>
                    <tr><td>complex</td><td>Комплексные числа</td><td>1 + 2j</td></tr>
                </table>
                <p><strong>Нюанс с float:</strong> Из-за особенностей хранения двоичных дробей <code>0.1 + 0.2</code> даст <code>0.30000000000000004</code>. Помните об этом при финансовых расчетах!</p>
            </div>
        """
    },
    3: {
        "title": "Урок 3: Операторы и Битовые операции",
        "goal": "Изучить все виды операторов, включая приоритеты и работу на уровне битов.",
        "content": """
            <div class="theory-block">
                <h3>1. Приоритет операций</h3>
                <p>Python следует математическим правилам: сначала скобки, потом возведение в степень, затем умножение/деление, и в конце сложение/вычитание.</p>
                <pre><code>result = 2 + 2 * 2 ** 3  # 2 + 2 * 8 = 18</code></pre>
            </div>

            <div class="theory-block">
                <h3>2. Операторы присваивания</h3>
                <p>Вместо <code>x = x + 5</code> пишите <code>x += 5</code>. Это не только короче, но иногда и эффективнее для изменяемых объектов.</p>
            </div>

            <div class="theory-block">
                <h3>3. Битовые операторы (Для продвинутых)</h3>
                <p>Иногда нужно работать с данными на уровне 0 и 1 (например, в криптографии или работе с железом):</p>
                <ul>
                    <li><code>&</code> (AND), <code>|</code> (OR), <code>^</code> (XOR), <code>~</code> (NOT)</li>
                    <li><code><<</code>, <code>>></code> (Сдвиги)</li>
                </ul>
            </div>
        """
    },
    4: {
        "title": "Урок 4: Условные конструкции и Моржовый оператор",
        "goal": "Научиться строить сложные логические цепочки и использовать современные фишки синтаксиса.",
        "content": """
            <div class="theory-block">
                <h3>1. Логика True/False</h3>
                <p>В Python "пустые" объекты считаются <code>False</code>: это <code>0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>None</code>. Всё остальное — <code>True</code>.</p>
                <pre><code>name = ""
if not name:
    print("Имя не введено!")</code></pre>
            </div>

            <div class="theory-block">
                <h3>2. Моржовый оператор (Walrus Operator) <code>:=</code></h3>
                <p>Появился в Python 3.8. Позволяет присвоить значение переменной прямо внутри условия.</p>
                <pre><code>if (n := len("Python")) > 5:
    print(f"Длинное слово: {n} букв")</code></pre>
            </div>

            <div class="theory-block">
                <h3>3. Тернарный оператор</h3>
                <p>Краткая запись if-else: <code>status = "Adult" if age >= 18 else "Child"</code>.</p>
            </div>
        """
    },
    5: {
        "title": "Урок 5: Циклы и Итераторы",
        "goal": "Глубокое понимание циклов, работа с else в циклах и предотвращение утечек памяти.",
        "content": """
            <div class="theory-block">
                <h3>1. Цикл for и функция range()</h3>
                <p><code>range(start, stop, step)</code> не создает список в памяти, а генерирует числа на лету. Это экономит ресурсы.</p>
            </div>

            <div class="theory-block">
                <h3>2. Конструкция for-else</h3>
                <p>Уникальная фишка Python: блок <code>else</code> выполнится, если цикл завершился "естественно" (без <code>break</code>).</p>
                <pre><code>for i in range(5):
    if i == 10: break
else:
    print("Цикл не был прерван!")</code></pre>
            </div>

            <div class="theory-block">
                <h3>3. Вложенные циклы и сложность</h3>
                <p>Будьте осторожны: вложенный цикл внутри другого цикла увеличивает время выполнения в геометрической прогрессии (O(n²)).</p>
            </div>
        """
    },
    6: {
        "title": "Урок 6: Списки, Кортежи и Глубокое копирование",
        "goal": "Мастерство работы с коллекциями и понимание разницы между ссылками и копиями.",
        "content": """
            <div class="theory-block">
                <h3>1. List Comprehensions (Генераторы списков)</h3>
                <p>Самый "питонический" способ создания списков:</p>
                <pre><code>squares = [x**2 for x in range(10) if x % 2 == 0]</code></pre>
            </div>

            <div class="theory-block">
                <h3>2. Глубокое vs Поверхностное копирование</h3>
                <p>Обычный <code>list.copy()</code> копирует только верхний уровень. Если внутри есть другие списки, они останутся общими. Для полной копии используйте модуль <code>copy</code>.</p>
                <pre><code>import copy
new_list = copy.deepcopy(old_list)</code></pre>
            </div>

            <div class="theory-block">
                <h3>3. Методы списков</h3>
                <ul>
                    <li><code>.extend()</code> — объединение списков.</li>
                    <li><code>.sort()</code> — сортировка на месте (эффективно).</li>
                    <li><code>.pop()</code> — удаление и возврат элемента.</li>
                </ul>
            </div>
        """
    },
    7: {
        "title": "Урок 7: Функции, *args и **kwargs",
        "goal": "Создание гибких функций и понимание функционального программирования.",
        "content": """
            <div class="theory-block">
                <h3>1. Гибкие аргументы</h3>
                <p><code>*args</code> собирает лишние позиционные аргументы в кортеж, а <code>**kwargs</code> — именованные в словарь.</p>
                <pre><code>def func(*args, **kwargs):
    print(args, kwargs)

func(1, 2, a=3)  # (1, 2) {'a': 3}</code></pre>
            </div>

            <div class="theory-block">
                <h3>2. Лямбда-функции</h3>
                <p>Анонимные функции для простых задач: <code>add = lambda x, y: x + y</code>.</p>
            </div>

            <div class="theory-block">
                <h3>3. Документирование (Docstrings)</h3>
                <p>Всегда пишите описание функции в тройных кавычках сразу после <code>def</code>. Это стандарт индустрии.</p>
            </div>
        """
    },
    8: {
        "title": "Урок 8: Словари, Множества и Хэширование",
        "goal": "Понять, как работают хэш-таблицы и почему словари такие быстрые.",
        "content": """
            <div class="theory-block">
                <h3>1. Как работает словарь?</h3>
                <p>Словарь использует хэш-функцию для мгновенного поиска. Это значит, что поиск по ключу занимает одинаковое время, будь в словаре 10 элементов или 10 миллионов.</p>
            </div>

            <div class="theory-block">
                <h3>2. Методы словарей</h3>
                <p><code>.get(key, default)</code> — безопасный способ получения значения без риска вызвать ошибку <code>KeyError</code>.</p>
            </div>

            <div class="theory-block">
                <h3>3. Множества и операции над ними</h3>
                <p>Множества поддерживают математические операции: объединение (<code>|</code>), пересечение (<code>&</code>), разность (<code>-</code>).</p>
            </div>
        """
    },
    9: {
        "title": "Урок 9: Строки и Регулярные выражения",
        "goal": "Мастерство обработки текста и введение в поиск по шаблонам.",
        "content": """
            <div class="theory-block">
                <h3>1. Форматирование строк: f-strings</h3>
                <p>f-строки позволяют выполнять код прямо внутри текста: <code>f"Результат: {2 + 2}"</code>.</p>
            </div>

            <div class="theory-block">
                <h3>2. Кодировки: Unicode и UTF-8</h3>
                <p>В Python 3 все строки — это Unicode. Поймите разницу между <code>str</code> (текст) и <code>bytes</code> (бинарные данные).</p>
            </div>

            <div class="theory-block">
                <h3>3. Введение в Regex (re)</h3>
                <p>Регулярные выражения — это язык в языке для поиска сложных шаблонов (например, email или номеров телефонов).</p>
            </div>
        """
    },
    10: {
        "title": "Урок 10: Работа с файлами и Пути (pathlib)",
        "goal": "Научиться надежно сохранять данные и работать с файловой системой.",
        "content": """
            <div class="theory-block">
                <h3>1. Контекстные менеджеры (with)</h3>
                <p>Никогда не открывайте файлы без <code>with</code>. Если программа упадет в середине записи, файл может повредиться. <code>with</code> гарантирует закрытие в любой ситуации.</p>
            </div>

            <div class="theory-block">
                <h3>2. Современный подход: pathlib</h3>
                <p>Забудьте про <code>os.path</code>. Модуль <code>pathlib</code> позволяет работать с путями как с объектами, что гораздо удобнее и безопаснее.</p>
            </div>

            <div class="theory-block">
                <h3>3. Работа с JSON</h3>
                <p>JSON — стандарт обмена данными. Python имеет встроенный модуль <code>json</code> для превращения словарей в текст и обратно.</p>
            </div>
        """
    },
    11: {
        "title": "Урок 11: Исключения и Собственные ошибки",
        "goal": "Создание отказоустойчивых приложений и культура обработки ошибок.",
        "content": """
            <div class="theory-block">
                <h3>1. Иерархия исключений</h3>
                <p>Все ошибки в Python — это классы. <code>Exception</code> — базовый класс для большинства. Ловить все ошибки подряд (<code>except:</code>) — плохая практика.</p>
            </div>

            <div class="theory-block">
                <h3>2. Инструкция raise</h3>
                <p>Вы можете сами вызывать ошибки, если что-то идет не так: <code>raise ValueError("Возраст не может быть отрицательным")</code>.</p>
            </div>

            <div class="theory-block">
                <h3>3. Создание своих исключений</h3>
                <p>Для больших проектов принято создавать свои классы ошибок, наследуясь от <code>Exception</code>.</p>
            </div>
        """
    },
    12: {
        "title": "Урок 12: Модули, Пакеты и venv",
        "goal": "Организация кода в большие проекты и управление зависимостями.",
        "content": """
            <div class="theory-block">
                <h3>1. Виртуальные окружения (venv)</h3>
                <p>Никогда не устанавливайте библиотеки глобально! Используйте <code>python -m venv venv</code>, чтобы создать изолированную среду для каждого проекта.</p>
            </div>

            <div class="theory-block">
                <h3>2. Структура пакета</h3>
                <p>Папка становится пакетом, если в ней есть файл <code>__init__.py</code>. Это позволяет импортировать код из папок.</p>
            </div>

            <div class="theory-block">
                <h3>3. Менеджер пакетов pip</h3>
                <p>Изучите файл <code>requirements.txt</code> — это список всех библиотек, нужных для работы вашего проекта.</p>
            </div>
        """
    },
    13: {
        "title": "Урок 13: ООП — Наследование, Инкапсуляция, Полиморфизм",
        "goal": "Глубокое понимание трех столпов ООП и магия методов (Dunder methods).",
        "content": """
            <div class="theory-block">
                <h3>1. Наследование</h3>
                <p>Позволяет создавать классы на основе существующих, переиспользуя код. Используйте <code>super()</code> для обращения к родителю.</p>
            </div>

            <div class="theory-block">
                <h3>2. Инкапсуляция</h3>
                <p>Скрытие данных. В Python нет жестких <code>private</code>, но есть соглашение: имена с <code>_</code> (защищенные) и <code>__</code> (скрытые).</p>
            </div>

            <div class="theory-block">
                <h3>3. Магические методы</h3>
                <p>Методы типа <code>__str__</code>, <code>__len__</code>, <code>__add__</code> позволяют вашим объектам вести себя как встроенные типы данных.</p>
            </div>
        """
    },
    14: {
        "title": "Урок 14: Итераторы, Генераторы и Декораторы",
        "goal": "Освоение продвинутых инструментов для написания чистого и быстрого кода.",
        "content": """
            <div class="theory-block">
                <h3>1. Генераторы (yield)</h3>
                <p>Функции, которые "возвращают" значения по одному, не занимая память всем списком сразу. Идеально для работы с гигантскими данными.</p>
            </div>

            <div class="theory-block">
                <h3>2. Декораторы</h3>
                <p>Функции, которые изменяют поведение других функций без изменения их кода. Часто используются для логирования или проверки прав доступа.</p>
            </div>

            <div class="theory-block">
                <h3>3. Замыкания (Closures)</h3>
                <p>Способность функции помнить переменные из своей внешней области видимости даже после того, как та завершила работу.</p>
            </div>
        """
    },
    15: {
        "title": "Урок 15: Тестирование, Чистый код и Что дальше?",
        "goal": "Подготовка к реальной работе: юнит-тесты и выбор пути развития.",
        "content": """
            <div class="theory-block">
                <h3>1. Тестирование (unittest / pytest)</h3>
                <p>Профессиональный код всегда покрыт тестами. Это гарантирует, что ваши правки не сломают проект в будущем.</p>
            </div>

            <div class="theory-block">
                <h3>2. Принципы SOLID</h3>
                <p>5 принципов проектирования, которые делают код гибким и поддерживаемым. Это следующий уровень после изучения синтаксиса.</p>
            </div>

            <div class="theory-block">
                <h3>3. Карьерные пути</h3>
                <ul>
                    <li><strong>Backend:</strong> FastAPI, Asyncio.</li>
                    <li><strong>Data Science:</strong> NumPy, Pandas, Scikit-learn.</li>
                    <li><strong>DevOps:</strong> Ansible, Docker API.</li>
                </ul>
                <p>Вы прошли огромный путь. Теперь практика — ваш лучший учитель!</p>
            </div>
        """
    }
}

template = """<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .theory-block {{
            margin-bottom: 40px;
            padding: 25px;
            background: var(--card-bg);
            border-radius: 12px;
            border-left: 5px solid var(--accent-color);
            box-shadow: var(--shadow);
        }}
        .theory-block h3 {{
            color: var(--accent-color);
            margin-top: 0;
            font-size: 1.4rem;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }}
        th, td {{
            padding: 12px;
            border: 1px solid #e2e8f0;
            text-align: left;
        }}
        th {{ background: #f8fafc; }}
        .lesson-header-meta {{
            display: flex;
            gap: 20px;
            margin-top: 15px;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.8);
        }}
    </style>
</head>
<body>
    <header>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
                <img src="logo.png" alt="Логотип" class="logo" style="height: 40px;">
                <span style="font-weight: 800; font-size: 1.4rem; margin-left: 12px; color: var(--text-color);">Python<span style="color: var(--accent-color);">Basic</span></span>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="python-basic.html">Курс</a></li>
                    <li><a href="libraries.html">Библиотеки</a></li>
                    <li><a href="tasks.html">Задачи</a></li>
                    <li><a href="python-online.html">Python Online</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="lesson-title">
        <div class="container">
            <h2>{title}</h2>
            <div class="lesson-header-meta" style="justify-content: center;">
                <span>⏱ Время изучения: ~30 минут</span>
                <span>🎓 Уровень: Базовый+</span>
            </div>
        </div>
    </section>

    <main class="container">
        <section class="lesson-goal">
            <h2>🎯 Цель урока</h2>
            <p>{goal}</p>
        </section>

        <section class="lesson-content">
            {content}
        </section>

        <div id="quiz-start-section" style="text-align: center; margin: 60px 0; padding: 40px; background: var(--card-bg); border-radius: 20px; box-shadow: var(--shadow-hover);">
            <h3 style="margin-bottom: 20px;">Готовы проверить знания?</h3>
            <p style="margin-bottom: 30px; color: #666;">Тест состоит из вопросов по всей теории урока. Для прохождения нужно ответить на все вопросы верно.</p>
            <button id="start-quiz-btn" class="btn" style="padding: 20px 60px; font-size: 1.2rem; background: var(--accent-color); color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: 800; transition: 0.3s;">🚀 Начать финальный тест</button>
        </div>

        <div id="quiz-container" style="display: none;"></div>

        <div class="lesson-navigation" style="display: flex; justify-content: space-between; margin-top: 50px; padding: 30px 0; border-top: 1px solid #e2e8f0;">
            <a href="lesson{prev}.html" class="btn-nav" style="{prev_style}">← Назад</a>
            <a href="lesson{next}.html" id="next-lesson-btn" class="btn-nav next" style="display: none;">Следующий урок →</a>
        </div>
    </main>

    <footer>
        <p>© 2025 PythonBasic. Образовательная платформа нового поколения.</p>
    </footer>

    <script src="script.js"></script>
    <script>
        document.getElementById('start-quiz-btn').onclick = function() {{
            document.getElementById('quiz-start-section').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            window.scrollTo({{ top: document.getElementById('quiz-container').offsetTop - 100, behavior: 'smooth' }});
        }};
        
        setInterval(() => {{
            const progress = JSON.parse(localStorage.getItem('python_quiz_progress') || '{{}}');
            if (progress['lesson{id}.html']) {{
                const nextBtn = document.getElementById('next-lesson-btn');
                if (nextBtn) nextBtn.style.display = 'inline-block';
            }}
        }}, 1000);
    </script>
</body>
</html>
"""

for i in range(1, 16):
    prev_i = i - 1
    next_i = i + 1
    data = lessons_deep_content[i]
    
    html = template.format(
        id=i,
        title=data["title"],
        goal=data["goal"],
        content=data["content"],
        prev=prev_i,
        next=next_i,
        prev_style="display: flex" if i > 1 else "display: none",
        next_style="display: flex" if i < 15 else "display: none"
    )
    
    with open(f"lesson{i}.html", "w", encoding="utf-8") as f:
        f.write(html)

print("Massive content update for 15 lessons completed!")
