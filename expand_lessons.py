import os
import re

LESSONS_CONTENT = {
    1: {
        "theory": """
            <h2>📌 Что такое Python?</h2>
            <p>Python — это высокоуровневый язык программирования, который славится своей простотой и читаемостью. Его часто называют "исполняемым псевдокодом", потому что программы на нём выглядят почти как обычный английский текст.</p>
            
            <h2>🔧 Почему выбирают Python?</h2>
            <ul>
                <li><strong>Простота:</strong> Меньше кода, больше дела. То, что на Java занимает 10 строк, на Python — одну.</li>
                <li><strong>Универсальность:</strong> Веб-разработка (Django), Data Science, AI, автоматизация, игры.</li>
                <li><strong>Огромное сообщество:</strong> На любой ваш вопрос уже есть ответ на Stack Overflow.</li>
            </ul>

            <h2>🚀 Ваша первая команда: print()</h2>
            <p>Функция <code>print()</code> — это ваш главный инструмент общения с программой. Она выводит всё, что вы ей дадите, на экран.</p>
            <pre><code>print("Привет, будущий программист!")
print(2025) # Можно выводить и числа</code></pre>
            
            <div style="background: rgba(79, 70, 229, 0.1); padding: 15px; border-radius: 10px; border-left: 5px solid var(--accent-color);">
                <strong>💡 Важно:</strong> Python чувствителен к регистру. <code>print()</code> и <code>Print()</code> — это разные вещи для компьютера!
            </div>
        """,
        "quiz": [
            { "question": "Кто создал язык Python?", "options": ["Билл Гейтс", "Гвидо ван Россум", "Марк Цукерберг", "Линус Торвальдс"], "correct": 1 },
            { "question": "Какое расширение имеют файлы с кодом на Python?", "options": [".py", ".pyt", ".python", ".txt"], "correct": 0 },
            { "question": "Что выведет команда print(5 + 5)?", "options": ["5 + 5", "10", "55", "Ошибка"], "correct": 1 }
        ]
    },
    2: {
        "theory": """
            <h2>📦 Что такое переменные?</h2>
            <p>Представьте переменную как коробку с наклеенным именем, в которой лежит какое-то значение. Мы можем обращаться к содержимому коробки по её имени.</p>
            <pre><code>name = "Алексей"
age = 25
is_student = True</code></pre>

            <h2>🔢 Основные типы данных</h2>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: var(--accent-color); color: white;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Тип</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Описание</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Пример</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>int</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Целые числа</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">10, -5, 0</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>float</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Числа с плавающей точкой</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">3.14, -0.5</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>str</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Строки (текст)</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">"Hello", 'Python'</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;"><strong>bool</strong></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Логический тип</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">True, False</td>
                </tr>
            </table>

            <h2>📝 Правила именования</h2>
            <p>Имя переменной должно начинаться с буквы или подчеркивания. Оно не может начинаться с цифры и не должно содержать пробелов.</p>
        """,
        "quiz": [
            { "question": "Как правильно объявить переменную x со значением 10?", "options": ["var x = 10", "int x = 10", "x := 10", "x = 10"], "correct": 3 },
            { "question": "Какой тип данных у значения '3.14' (в кавычках)?", "options": ["int", "float", "str", "bool"], "correct": 2 },
            { "question": "Можно ли в Python менять тип переменной на лету?", "options": ["Да (динамическая типизация)", "Нет", "Только для чисел", "Только в новых версиях"], "correct": 0 }
        ]
    },
    3: {
        "theory": """
            <h2>➕ Арифметические операторы</h2>
            <p>Python умеет выполнять все базовые математические операции:</p>
            <ul>
                <li><code>+</code> Сложение</li>
                <li><code>-</code> Вычитание</li>
                <li><code>*</code> Умножение</li>
                <li><code>/</code> Деление (всегда дает float)</li>
                <li><code>//</code> Целочисленное деление (отбрасывает остаток)</li>
                <li><code>%</code> Остаток от деления</li>
                <li><code>**</code> Возведение в степень</li>
            </ul>

            <h2>⚖️ Операторы сравнения</h2>
            <p>Результатом сравнения всегда является <code>True</code> или <code>False</code>.</p>
            <pre><code>print(5 > 3)  # True
print(10 == 10) # True (равенство)
print(7 != 8)  # True (неравенство)</code></pre>
        """,
        "quiz": [
            { "question": "Что выведет print(10 // 3)?", "options": ["3.33", "3", "4", "Ошибка"], "correct": 1 },
            { "question": "Какой оператор используется для возведения в степень?", "options": ["^", "**", "pow", "exp"], "correct": 1 },
            { "question": "Что вернет выражение 5 == '5'?", "options": ["True", "False", "Ошибка", "None"], "correct": 1 }
        ]
    },
    4: {
        "theory": """
            <h2>🤔 Условный оператор if</h2>
            <p>Позволяет программе принимать решения в зависимости от условий.</p>
            <pre><code>age = 18
if age >= 18:
    print("Доступ разрешен")
else:
    print("Доступ запрещен")</code></pre>

            <h2>🧩 Конструкция if-elif-else</h2>
            <p>Если условий много, используйте <code>elif</code> (сокращение от else if).</p>
            <pre><code>score = 85
if score >= 90:
    print("Отлично")
elif score >= 70:
    print("Хорошо")
else:
    print("Нужно подтянуть")</code></pre>
            <div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 10px; border-left: 5px solid #f59e0b;">
                <strong>⚠️ Важно:</strong> Не забывайте про двоеточие <code>:</code> в конце условия и отступы (4 пробела) для блока кода внутри!
            </div>
        """,
        "quiz": [
            { "question": "Как правильно пишется 'иначе если' в Python?", "options": ["else if", "elseif", "elif", "if else"], "correct": 2 },
            { "question": "Обязательны ли отступы в Python?", "options": ["Нет, это для красоты", "Да, они определяют блоки кода", "Только в циклах", "Только в функциях"], "correct": 1 },
            { "question": "Что выведет код: if False: print(1) else: print(2)?", "options": ["1", "2", "Ничего", "Ошибка"], "correct": 1 }
        ]
    },
    5: {
        "theory": """
            <h2>🔄 Цикл for</h2>
            <p>Используется для перебора элементов (например, чисел в диапазоне или символов в строке).</p>
            <pre><code>for i in range(5):
    print("Шаг №", i) # Выведет от 0 до 4</code></pre>

            <h2>♾️ Цикл while</h2>
            <p>Работает до тех пор, пока условие истинно.</p>
            <pre><code>count = 0
while count < 3:
    print("Считаю...")
    count += 1</code></pre>

            <h2>🛑 break и continue</h2>
            <ul>
                <li><code>break</code> — полностью прерывает цикл.</li>
                <li><code>continue</code> — переходит к следующей итерации, пропуская остаток кода в текущей.</li>
            </ul>
        """,
        "quiz": [
            { "question": "Что делает функция range(3)?", "options": ["Генерирует 1, 2, 3", "Генерирует 0, 1, 2", "Генерирует 0, 1, 2, 3", "Ничего"], "correct": 1 },
            { "question": "Как досрочно выйти из цикла?", "options": ["exit", "stop", "break", "return"], "correct": 2 },
            { "question": "Что будет, если в цикле while условие всегда True?", "options": ["Ошибка", "Цикл не запустится", "Бесконечный цикл", "Программа закроется"], "correct": 2 }
        ]
    },
    6: {
        "theory": """
            <h2>📜 Списки (list)</h2>
            <p>Это упорядоченные коллекции данных, которые могут содержать элементы разных типов.</p>
            <pre><code>fruits = ["яблоко", "банан", "вишня"]
print(fruits[0]) # яблоко</code></pre>

            <h2>🔧 Методы списков</h2>
            <ul>
                <li><code>append(x)</code> — добавить в конец.</li>
                <li><code>remove(x)</code> — удалить элемент по значению.</li>
                <li><code>pop(i)</code> — удалить по индексу.</li>
                <li><code>len(list)</code> — узнать длину.</li>
            </ul>

            <h2>🔒 Кортежи (tuple)</h2>
            <p>Похожи на списки, но их <strong>нельзя изменять</strong> после создания. Пишутся в круглых скобках.</p>
            <pre><code>point = (10, 20)</code></pre>
        """,
        "quiz": [
            { "question": "Как добавить элемент в конец списка?", "options": ["list.add()", "list.insert()", "list.append()", "list.push()"], "correct": 2 },
            { "question": "С какого индекса начинаются элементы списка?", "options": ["1", "0", "-1", "С любого"], "correct": 1 },
            { "question": "В чем главное отличие кортежа от списка?", "options": ["Кортеж быстрее", "Кортеж нельзя изменить", "Кортеж только для чисел", "Отличий нет"], "correct": 1 }
        ]
    },
    7: {
        "theory": """
            <h2>🛠️ Создание функций</h2>
            <p>Функции позволяют группировать код для повторного использования.</p>
            <pre><code>def say_hello(name):
    print("Привет,", name)

say_hello("Максим")</code></pre>

            <h2>📥 Аргументы и возвращаемое значение</h2>
            <p>Используйте <code>return</code>, чтобы функция отдала результат обратно в программу.</p>
            <pre><code>def add(a, b):
    return a + b

result = add(5, 7) # result станет 12</code></pre>
        """,
        "quiz": [
            { "question": "Какое ключевое слово используется для создания функции?", "options": ["func", "function", "def", "create"], "correct": 2 },
            { "question": "Зачем нужен оператор return?", "options": ["Чтобы выйти из программы", "Чтобы вернуть результат работы функции", "Чтобы напечатать текст", "Это не обязательно"], "correct": 1 },
            { "question": "Что вернет функция, если в ней нет return?", "options": ["0", "False", "None", "Ошибка"], "correct": 2 }
        ]
    },
    8: {
        "theory": """
            <h2>📖 Словари (dict)</h2>
            <p>Хранят данные в формате <code>ключ: значение</code>. Это как записная книжка.</p>
            <pre><code>user = {"name": "Ivan", "age": 20}
print(user["name"]) # Ivan</code></pre>

            <h2>💎 Множества (set)</h2>
            <p>Содержат только <strong>уникальные</strong> элементы. Порядок не важен.</p>
            <pre><code>numbers = {1, 2, 2, 3}
print(numbers) # {1, 2, 3}</code></pre>
        """,
        "quiz": [
            { "question": "Как создать пустой словарь?", "options": ["[]", "{}", "set()", "dict([])"], "correct": 1 },
            { "question": "Могут ли в множестве быть дубликаты?", "options": ["Да", "Нет", "Только числа", "Только строки"], "correct": 1 },
            { "question": "Как получить значение из словаря d по ключу 'k'?", "options": ["d('k')", "d['k']", "d{'k'}", "d.k"], "correct": 1 }
        ]
    },
    9: {
        "theory": """
            <h2>🔤 Работа со строками</h2>
            <p>Строки в Python — это объекты с множеством полезных методов.</p>
            <pre><code>text = "  Hello Python  "
print(text.upper())    # "  HELLO PYTHON  "
print(text.strip())    # "Hello Python" (убирает пробелы)
print(text.split())    # ["Hello", "Python"]</code></pre>

            <h2>🔗 Форматирование строк</h2>
            <p>Самый современный способ — f-строки.</p>
            <pre><code>name = "Анна"
print(f"Привет, {name}!")</code></pre>
        """,
        "quiz": [
            { "question": "Какой метод переводит строку в нижний регистр?", "options": ["down()", "lower()", "small()", "casefold()"], "correct": 1 },
            { "question": "Что делает метод split()?", "options": ["Склеивает строки", "Разбивает строку на список", "Удаляет пробелы", "Переворачивает строку"], "correct": 1 },
            { "question": "Как узнать длину строки s?", "options": ["s.size()", "s.length()", "len(s)", "count(s)"], "correct": 2 }
        ]
    },
    10: {
        "theory": """
            <h2>📂 Чтение и запись файлов</h2>
            <p>Для работы с файлами используйте встроенную функцию <code>open()</code>.</p>
            <pre><code># Запись
with open("test.txt", "w") as f:
    f.write("Привет, файл!")

# Чтение
with open("test.txt", "r") as f:
    content = f.read()
    print(content)</code></pre>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; border-left: 5px solid var(--success-color);">
                <strong>✅ Совет:</strong> Всегда используйте <code>with</code>. Он автоматически закрывает файл, даже если произошла ошибка.
            </div>
        """,
        "quiz": [
            { "question": "В каком режиме нужно открыть файл для записи (с удалением старого)?", "options": ["'r'", "'a'", "'w'", "'x'"], "correct": 2 },
            { "question": "Что делает режим 'a'?", "options": ["Перезаписывает файл", "Дописывает в конец файла", "Только читает", "Создает папку"], "correct": 1 },
            { "question": "Зачем нужен блок with при работе с файлами?", "options": ["Чтобы быстрее работало", "Чтобы автоматически закрыть файл", "Это просто традиция", "Для красоты"], "correct": 1 }
        ]
    },
    11: {
        "theory": """
            <h2>⚠️ Ошибки и исключения</h2>
            <p>Даже идеальный код может упасть (например, если нет интернета или файла). Для этого есть <code>try-except</code>.</p>
            <pre><code>try:
    x = 10 / 0
except ZeroDivisionError:
    print("На ноль делить нельзя!")
except Exception as e:
    print(f"Произошла ошибка: {e}")</code></pre>
        """,
        "quiz": [
            { "question": "В каком блоке мы пишем код, который может вызвать ошибку?", "options": ["try", "except", "finally", "error"], "correct": 0 },
            { "question": "Как называется блок, который выполняется ВСЕГДА (была ошибка или нет)?", "options": ["always", "finally", "end", "except"], "correct": 1 },
            { "question": "Какая ошибка возникнет при 1 / 0?", "options": ["ValueError", "TypeError", "ZeroDivisionError", "NameError"], "correct": 2 }
        ]
    },
    12: {
        "theory": """
            <h2>📦 Модули и библиотеки</h2>
            <p>Не нужно изобретать велосипед. Используйте готовые модули.</p>
            <pre><code>import math
print(math.sqrt(16)) # 4.0

import random
print(random.randint(1, 10)) # Случайное число</code></pre>

            <h2>🐍 Менеджер пакетов PIP</h2>
            <p>Позволяет устанавливать миллионы сторонних библиотек.</p>
            <pre><code>pip install requests</code></pre>
        """,
        "quiz": [
            { "question": "Как подключить модуль в программу?", "options": ["include", "using", "import", "connect"], "correct": 2 },
            { "question": "Что такое pip?", "options": ["Редактор кода", "Менеджер пакетов", "Версия Python", "Тип данных"], "correct": 1 },
            { "question": "Как импортировать только функцию sqrt из модуля math?", "options": ["import math.sqrt", "from math import sqrt", "get sqrt from math", "import sqrt"], "correct": 1 }
        ]
    },
    13: {
        "theory": """
            <h2>🏗️ Основы ООП</h2>
            <p>Объектно-ориентированное программирование — это способ организации кода через "объекты" (чертежи и детали).</p>
            <pre><code>class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(f"{self.name} говорит: Гав!")

my_dog = Dog("Шарик")
my_dog.bark()</code></pre>
        """,
        "quiz": [
            { "question": "Что такое класс?", "options": ["Готовый объект", "Чертеж/шаблон для создания объектов", "Список функций", "Переменная"], "correct": 1 },
            { "question": "Зачем нужен метод __init__?", "options": ["Для удаления объекта", "Для инициализации (настройки) объекта при создании", "Это главная функция программы", "Для вывода текста"], "correct": 1 },
            { "question": "Что такое self в методах класса?", "options": ["Ссылка на сам объект", "Служебное слово для Python", "Имя класса", "Ничего"], "correct": 0 }
        ]
    },
    14: {
        "theory": """
            <h2>⏰ Работа с датами</h2>
            <p>Модуль <code>datetime</code> незаменим для работы со временем.</p>
            <pre><code>from datetime import datetime

now = datetime.now()
print(now.strftime("%d.%m.%Y")) # Форматированный вывод</code></pre>
        """,
        "quiz": [
            { "question": "Какой модуль используется для работы с датами?", "options": ["time", "date", "datetime", "calendar"], "correct": 2 },
            { "question": "Как получить текущую дату и время?", "options": ["datetime.today()", "datetime.now()", "datetime.get()", "datetime.current()"], "correct": 1 },
            { "question": "Что делает метод strftime()?", "options": ["Превращает строку в дату", "Форматирует дату в строку по шаблону", "Считает разницу во времени", "Удаляет время"], "correct": 1 }
        ]
    },
    15: {
        "theory": """
            <h2>🎓 Итоговый проект</h2>
            <p>Вы прошли путь от <code>print("Hello")</code> до основ ООП. Теперь пора собрать всё воедино.</p>
            <p><strong>Ваша задача:</strong> Создать консольный менеджер задач (To-Do List).</p>
            <ul>
                <li>Используйте <strong>списки</strong> для хранения задач.</li>
                <li>Используйте <strong>функции</strong> для добавления и просмотра.</li>
                <li>Используйте <strong>цикл while</strong> для меню управления.</li>
                <li>Используйте <strong>файлы</strong> для сохранения списка между запусками.</li>
            </ul>
            <p>Удачи, программист! Это только начало твоего пути.</p>
        """,
        "quiz": [
            { "question": "Какой тип данных лучше всего подходит для списка задач?", "options": ["int", "list", "bool", "float"], "correct": 1 },
            { "question": "Как лучше всего хранить данные постоянно?", "options": ["В переменной", "В файле", "В принтере", "В памяти"], "correct": 1 },
            { "question": "Что нужно сделать после завершения этого курса?", "options": ["Забыть всё", "Начать писать свои проекты и практиковаться", "Ждать диплома", "Удалить Python"], "correct": 1 }
        ]
    }
}

def update_lessons():
    # Update HTML files with theory
    for i in range(1, 16):
        filename = f"lesson{i}.html"
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace theory block
            theory_html = LESSONS_CONTENT[i]["theory"]
            # Look for <section class="lesson-content">...</section>
            new_content = re.sub(r'<section class="lesson-content">.*?</section>', 
                               f'<section class="lesson-content">{theory_html}</section>', 
                               content, flags=re.DOTALL)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated theory for {filename}")

    # Update script.js with new quiz data
    if os.path.exists("script.js"):
        with open("script.js", 'r', encoding='utf-8') as f:
            js_content = f.read()
        
        # Build the new quizData object string
        quiz_data_str = "const quizData = {\n"
        for i in range(1, 16):
            lesson_key = f"lesson{i}.html"
            questions = LESSONS_CONTENT[i]["quiz"]
            import json
            questions_json = json.dumps(questions, ensure_ascii=False, indent=12)
            quiz_data_str += f"        '{lesson_key}': {questions_json},\n"
        quiz_data_str += "    };"
        
        # Replace the old quizData
        new_js = re.sub(r'const quizData = \{.*?\};', quiz_data_str, js_content, flags=re.DOTALL)
        
        with open("script.js", 'w', encoding='utf-8') as f:
            f.write(new_js)
        print("Updated quizData in script.js")

if __name__ == "__main__":
    update_lessons()
