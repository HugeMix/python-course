import os

lessons_content = {
    1: {
        "title": "Введение в Python: История, Установка и Первая программа",
        "goal": "Понять философию Python, настроить рабочее окружение и запустить первый скрипт.",
        "content": """
            <h3>Что такое Python?</h3>
            <p>Python — это интерпретируемый, объектно-ориентированный язык программирования высокого уровня с динамической типизацией. Созданный Гвидо ван Россумом в конце 80-х, Python стал стандартом в Data Science, веб-разработке и автоматизации.</p>
            
            <h3>Почему Python?</h3>
            <ul>
                <li><strong>Читаемость:</strong> Код на Python часто называют "исполняемым псевдокодом".</li>
                <li><strong>Огромная стандартная библиотека:</strong> "Батарейки в комплекте".</li>
                <li><strong>Сообщество:</strong> Миллионы разработчиков и готовых решений.</li>
            </ul>

            <h3>Установка и Настройка</h3>
            <p>Для работы вам понадобится интерпретатор с сайта python.org и редактор кода (VS Code, PyCharm или просто IDLE). Проверьте установку командой <code>python --version</code>.</p>

            <h3>Ваша первая программа</h3>
            <pre><code>print("Привет, мир!")
# Это комментарий. Он не выполняется.
print(5 + 3)</code></pre>
            <p>Функция <code>print()</code> выводит данные в консоль. В Python 3 она всегда требует скобок.</p>
        """
    },
    2: {
        "title": "Переменные и Типы данных: Основы хранения информации",
        "goal": "Научиться объявлять переменные и понимать разницу между числами, строками и булевыми значениями.",
        "content": """
            <h3>Переменные — это контейнеры</h3>
            <p>В Python не нужно указывать тип данных при создании переменной. Это называется динамической типизацией.</p>
            <pre><code>age = 25  # Целое число (int)
price = 19.99  # Число с плавающей точкой (float)
name = "Алексей"  # Строка (str)
is_active = True  # Логическое значение (bool)</code></pre>

            <h3>Правила именования</h3>
            <p>Имена переменных должны начинаться с буквы или подчеркивания, могут содержать цифры, но не могут быть зарезервированными словами (как if, else, print).</p>

            <h3>Преобразование типов</h3>
            <p>Вы можете менять тип данных с помощью функций <code>int()</code>, <code>float()</code>, <code>str()</code>.</p>
            <pre><code>x = "10"
y = int(x) + 5  # Результат: 15</code></pre>
        """
    },
    3: {
        "title": "Операторы: Арифметика и Логика",
        "goal": "Освоить математические вычисления и логические сравнения в коде.",
        "content": """
            <h3>Арифметические операторы</h3>
            <ul>
                <li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> — стандартные операции.</li>
                <li><code>//</code> — целочисленное деление (10 // 3 = 3).</li>
                <li><code>%</code> — остаток от деления (10 % 3 = 1).</li>
                <li><code>**</code> — возведение в степень (2 ** 3 = 8).</li>
            </ul>

            <h3>Операторы сравнения</h3>
            <p>Всегда возвращают True или False: <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</p>

            <h3>Логические операторы</h3>
            <ul>
                <li><code>and</code> — И (оба условия верны).</li>
                <li><code>or</code> — ИЛИ (хотя бы одно верно).</li>
                <li><code>not</code> — НЕ (инверсия).</li>
            </ul>
        """
    },
    4: {
        "title": "Условные операторы: Принятие решений",
        "goal": "Научить программу делать выбор на основе условий.",
        "content": """
            <h3>Конструкция if-elif-else</h3>
            <p>Отступы (4 пробела) — критически важны в Python. Они определяют блок кода.</p>
            <pre><code>score = 85
if score >= 90:
    print("Отлично!")
elif score >= 70:
    print("Хорошо")
else:
    print("Нужно подтянуть")</code></pre>
            
            <h3>Вложенные условия</h3>
            <p>Вы можете помещать один if внутрь другого, но старайтесь избегать слишком большой вложенности для читаемости.</p>
        """
    },
    5: {
        "title": "Циклы: Автоматизация повторений",
        "goal": "Изучить циклы for и while для эффективной обработки данных.",
        "content": """
            <h3>Цикл for</h3>
            <p>Используется для перебора последовательностей (списков, строк, диапазонов).</p>
            <pre><code>for i in range(5):
    print(f"Итерация {i}")</code></pre>

            <h3>Цикл while</h3>
            <p>Выполняется, пока условие истинно. Опасайтесь бесконечных циклов!</p>
            <pre><code>count = 0
while count < 3:
    print("Работаю...")
    count += 1</code></pre>

            <h3>Управление циклом</h3>
            <ul>
                <li><code>break</code> — немедленный выход.</li>
                <li><code>continue</code> — переход к следующей итерации.</li>
            </ul>
        """
    },
    6: {
        "title": "Списки и Кортежи: Коллекции данных",
        "goal": "Научиться хранить группы элементов и работать с ними.",
        "content": """
            <h3>Списки (list)</h3>
            <p>Изменяемые, упорядоченные коллекции. Индексация начинается с 0.</p>
            <pre><code>fruits = ["apple", "banana"]
fruits.append("cherry")  # Добавить
fruits[0] = "pear"  # Изменить</code></pre>

            <h3>Кортежи (tuple)</h3>
            <p>Неизменяемые списки. Используются для защиты данных от изменений.</p>
            <pre><code>coords = (10, 20)
# coords[0] = 5  -- Выдаст ошибку!</code></pre>

            <h3>Срезы (Slices)</h3>
            <p><code>my_list[start:stop:step]</code> — мощный инструмент извлечения частей списка.</p>
        """
    },
    7: {
        "title": "Функции: Повторное использование кода",
        "goal": "Научиться создавать свои инструменты и структурировать программу.",
        "content": """
            <h3>Объявление функции</h3>
            <pre><code>def multiply(a, b):
    return a * b

result = multiply(5, 4)  # 20</code></pre>

            <h3>Аргументы и Return</h3>
            <p>Функции могут принимать параметры по умолчанию и возвращать любые типы данных.</p>
            
            <h3>Область видимости</h3>
            <p>Переменные внутри функции — локальные. Переменные снаружи — глобальные.</p>
        """
    },
    8: {
        "title": "Словари и Множества: Ключи и Уникальность",
        "goal": "Освоить хранение данных в формате 'ключ-значение' и работу с уникальными наборами.",
        "content": """
            <h3>Словари (dict)</h3>
            <p>Хранят данные парами. Доступ по ключу быстрее, чем поиск в списке.</p>
            <pre><code>user = {"name": "Ivan", "age": 20}
print(user["name"])</code></pre>

            <h3>Множества (set)</h3>
            <p>Неупорядоченные коллекции уникальных элементов. Идеальны для удаления дубликатов.</p>
            <pre><code>nums = {1, 2, 2, 3}  # Станет {1, 2, 3}</code></pre>
        """
    },
    9: {
        "title": "Работа со строками: Текстовая магия",
        "goal": "Изучить методы форматирования и обработки текста.",
        "content": """
            <h3>Методы строк</h3>
            <ul>
                <li><code>.upper()</code>, <code>.lower()</code> — регистр.</li>
                <li><code>.strip()</code> — удаление пробелов.</li>
                <li><code>.replace("old", "new")</code> — замена.</li>
            </ul>

            <h3>f-строки</h3>
            <p>Современный способ вставки переменных в текст: <code>f"Привет, {name}!"</code>.</p>
        """
    },
    10: {
        "title": "Файлы: Сохранение данных",
        "goal": "Научиться читать из файлов и записывать информацию на диск.",
        "content": """
            <h3>Открытие файла</h3>
            <p>Всегда используйте менеджер контекста <code>with</code>, он сам закроет файл.</p>
            <pre><code>with open("test.txt", "w") as f:
    f.write("Привет, файл!")

with open("test.txt", "r") as f:
    content = f.read()</code></pre>
            <h3>Режимы:</h3>
            <ul>
                <li><code>'r'</code> — чтение.</li>
                <li><code>'w'</code> — запись (перезапишет файл).</li>
                <li><code>'a'</code> — добавление в конец.</li>
            </ul>
        """
    },
    11: {
        "title": "Обработка ошибок: Исключения",
        "goal": "Сделать программу устойчивой к сбоям.",
        "content": """
            <h3>Конструкция try-except</h3>
            <pre><code>try:
    num = 10 / 0
except ZeroDivisionError:
    print("На ноль делить нельзя!")
finally:
    print("Завершение операции")</code></pre>
            <p>Это позволяет программе не "падать" при возникновении предсказуемых ошибок.</p>
        """
    },
    12: {
        "title": "Модули и Библиотеки: Сила экосистемы",
        "goal": "Научиться подключать чужой код и расширять возможности Python.",
        "content": """
            <h3>Импорт модулей</h3>
            <pre><code>import math
print(math.sqrt(16))

from datetime import datetime
print(datetime.now())</code></pre>
            <h3>Библиотека <code>requests</code></h3>
            <p>Пример работы с интернетом (нужно установить через pip).</p>
        """
    },
    13: {
        "title": "Основы ООП: Классы и Объекты",
        "goal": "Понять объектно-ориентированный подход к программированию.",
        "content": """
            <h3>Класс — это чертеж</h3>
            <pre><code>class Car:
    def __init__(self, brand):
        self.brand = brand
    
    def drive(self):
        print(f"{self.brand} едет!")

my_car = Car("Tesla")
my_car.drive()</code></pre>
            <p><code>self</code> — это ссылка на конкретный экземпляр класса.</p>
        """
    },
    14: {
        "title": "Работа с датой и временем",
        "goal": "Освоить планирование и расчет временных интервалов.",
        "content": """
            <h3>Модуль datetime</h3>
            <pre><code>import datetime
now = datetime.datetime.now()
print(now.strftime("%d.%m.%Y")) # Форматирование</code></pre>
            <p>Вы можете вычитать даты, получая объект <code>timedelta</code>.</p>
        """
    },
    15: {
        "title": "Итоговый проект и Алгоритмы",
        "goal": "Закрепить всё пройденное и понять, куда двигаться дальше.",
        "content": """
            <h3>Алгоритмическое мышление</h3>
            <p>Программирование — это не только синтаксис, но и умение разбивать задачу на шаги.</p>
            <h3>Что дальше?</h3>
            <ul>
                <li>Веб: Django, Flask.</li>
                <li>Данные: Pandas, NumPy.</li>
                <li>AI: PyTorch, TensorFlow.</li>
            </ul>
            <p>Поздравляем! Вы прошли базовый курс.</p>
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
</head>
<body>
    <header>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
                <img src="logo.png" alt="Логотип" class="logo" style="height: 40px;">
                <span style="font-weight: 800; font-size: 1.4rem; margin-left: 12px; color: var(--text-color);">Python<span style="color: var(--accent-color);">Basic</span></span>
            </a>
            <nav>
                <ul style="display: flex; list-style: none; margin: 0; padding: 0; gap: 15px;">
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
            <p>Глубокое погружение в тему. Время изучения: ~30 минут.</p>
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

        <div style="text-align: center; margin: 50px 0;">
            <button id="start-quiz-btn" class="btn" style="padding: 20px 50px; font-size: 1.2rem; background: var(--accent-color); color: white; border: none; border-radius: 50px; cursor: pointer; box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);">🚀 Перейти к тесту</button>
        </div>

        <div id="quiz-container" style="display: none;"></div>

        <div class="lesson-navigation" style="display: flex; justify-content: space-between; margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee;">
            <a href="lesson{prev}.html" class="btn" style="{prev_style}">← Предыдущий урок</a>
            <a href="lesson{next}.html" id="next-lesson-btn" class="btn" style="display: none; background: var(--success-color); color: white;">Следующий урок →</a>
        </div>
    </main>

    <footer>
        <p>© 2025 PythonBasic. Все права защищены.</p>
    </footer>

    <script src="script.js"></script>
    <script>
        document.getElementById('start-quiz-btn').onclick = function() {{
            this.style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            window.scrollTo({{ top: document.getElementById('quiz-container').offsetTop - 100, behavior: 'smooth' }});
        }};
        
        // Постоянно проверяем, пройден ли тест, чтобы показать кнопку "Следующий"
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
    data = lessons_content[i]
    
    html = template.format(
        id=i,
        title=data["title"],
        goal=data["goal"],
        content=data["content"],
        prev=prev_i,
        next=next_i,
        prev_style="display: inline-block" if i > 1 else "display: none",
        next_style="display: inline-block" if i < 15 else "display: none"
    )
    
    with open(f"lesson{i}.html", "w", encoding="utf-8") as f:
        f.write(html)

print("All 15 lessons updated successfully!")
