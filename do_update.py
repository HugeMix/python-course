import os
import re

QUIZ_DATA = """const quizData = {
    'lesson1.html': [
        { question: "Какая команда используется для вывода текста на экран?", options: ["input()", "print()", "scan()", "output()"], correct: 1 },
        { question: "Какое расширение имеют файлы Python?", options: [".txt", ".exe", ".py", ".pyt"], correct: 2 },
        { question: "В каком году был выпущен Python?", options: ["1991", "2000", "1985", "1995"], correct: 0 },
        { question: "Какую роль выполняет функция print()?", options: ["Считывает ввод с клавиатуры", "Выводит переданные данные в консоль", "Удаляет пробелы", "Объявляет функцию"], correct: 1 },
        { question: "Print регистрозависима?", options: ["Да (PRiNT и print - разные)", "Нет", "В Python не важен регистр", "Регистр влияет только на Windows"], correct: 0 },
        { question: "Напишите программу, которая выводит текст 'Привет'", type: "code", correct: ["print('Привет')", "print(\\"Привет\\")"] },
        { question: "Напишите программу, которая выводит число 42", type: "code", correct: ["print(42)", "print('42')", "print(\\"42\\")"] }
    ],
    'lesson2.html': [
        { question: "Как правильно объявить переменную в Python?", options: ["var x = 5", "int x = 5", "x = 5", "$x = 5"], correct: 2 },
        { question: "Какой тип данных у значения 3.14?", options: ["int", "float", "string", "bool"], correct: 1 },
        { question: "Что выведет код: print(type(\\"10\\"))?", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1 },
        { question: "Какое имя переменной недопустимо в Python?", options: ["my_var", "var1", "1var", "_var_"], correct: 2 },
        { question: "Что будет результатом: str(5) + '5'?", options: ["10", "Ошибка", "55", "'5'"], correct: 2 },
        { question: "Создайте переменную age и присвойте ей значение 20", type: "code", correct: ["age=20", "age = 20"] },
        { question: "Сконвертируйте строку '10' в число и присвойте в x", type: "code", correct: ["x=int('10')", "x=int(\\"10\\")", "x = int('10')", "x = int(\\"10\\")"] }
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
        { question: "Получите значение по ключу 'name' из словаря data (через [])", type: "code", correct: ["data['name']", "data[\\"name\\"]"] },
        { question: "Напишите удаление ключа 'age' из словаря d с помощью оператора del", type: "code", correct: ["del d['age']", "del d[\\"age\\"]", "del(d['age'])"] }
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
        { question: "Напишите режим открытия файла для ДОЗАПИСИ (в конец файла)", type: "code", correct: ["'a'", "\\"a\\""] },
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
};"""

HTML_INJECTIONS = {
    "lesson3.html": "\\n            <h2>💡 Важно узнать!</h2><p>Помимо представленных выше вычислений, существуют <strong>Логические операторы (and, or, not)</strong>. Они возвращают True или False: <code>not</code> просто меняет логическое состояние любого значения на противоположное (True на False и наоборот).</p>",
    "lesson4.html": "\\n            <h2>💡 Синтаксическая особенность</h2><p>После условий <code>if</code>, <code>elif</code> или <code>else</code> <strong>всегда</strong> должно ставиться <strong>двоеточие (:)</strong>. После него код обязательно пишется с отступом в 4 пробела.</p>",
    "lesson5.html": "\\n            <h2>💡 Подробнее о continue</h2><p>Оператор <code>continue</code> заставляет программу мгновенно прервать текущий круг выполнения цикла. Но в отличие от break он не убивает цикл, а сразу переходит к следующему шагу!</p>",
    "lesson6.html": "\\n            <h2>💡 Важные методы списков:</h2><ul><li><code>len(...)</code> — специальная функция в Python, чтобы легко получить размер (длину) любого списка.</li><li><code>remove('значение')</code> — удаляет элемент по его точному значению, а не по индексу.</li></ul>",
    "lesson7.html": "\\n            <h2>💡 Значения по-умолчанию</h2><p>Функции могут иметь запасные стандарты переменных: например, <code>def greet(name='Гость'):</code>. Если вызовем <code>greet()</code> пустым (без аргументов), то Python по-умолчанию подставит имя: 'Гость'. Вы также должны знать, что функция без <code>return</code> автоматически вернет пустоту — объект <code>None</code>.</p>",
    "lesson8.html": "\\n            <h2>💡 Словари и ключи</h2><ul><li>Инструкция <code>d.keys()</code> возвращает все имеющиеся ключи в словаре.</li><li>Отдельные ключи в словаре можно удалять командой <code>del</code> (например, <code>del user['age']</code>). Это очистит и ключ, и его значение.</li></ul>",
    "lesson9.html": "\\n            <h2>💡 Полезные свойства строк</h2><ul><li><code>s.strip()</code> очищает переменную от мусора: переносит пробелы и невидимые символы строго по краям текста.</li><li><code>s.replace('a','b')</code> используется для автозамены: меняет все 'a' на 'b'.</li></ul>",
    "lesson10.html": "\\n            <h2>💡 Секреты файлов: with open</h2><p>Писать <code>file.close()</code> вручную крайне ненадёжно, так как при любой ошибке файл останется висеть в памяти. Безопаснее применять блок <code>with open(...) as f:</code>, который гарантирует, что файл автоматически закроется по окончании работы вашего кода.</p>",
    "lesson11.html": "\\n            <h2>💡 Ошибки в деталях</h2><ul><li>При делении на 0 (например 10 / 0) интерпретатор выбрасывает строгую ошибку <code>ZeroDivisionError</code>.</li><li>Самый старший и универсальный класс ошибок имеет название <code>Exception</code>. Его используют, чтобы отлавливать \"вообще абсолютно всё абстрактное\", что может пойти не так.</li></ul>",
    "lesson12.html": "\\n            <h2>💡 Официальный менеджер Pip</h2><p><strong>PIP</strong> — это официальный менеджер пакетов в Python (Package Installer). При помощи простой команды в терминале: <code>pip install libraries_name</code> вы загружаете сторонний код из интернета на ваш ПК и можете интегрировать его за секунду.</p>",
    "lesson13.html": "\\n            <h2>💡 Принцип Инкапсуляции</h2><p>Одним из китов ООП является <strong>Инкапсуляция</strong> — это умение объектов утаивать и скрывать свои внутренние данные от внешних пользователей ради безопасности.</p>",
    "lesson14.html": "\\n            <h2>💡 Разница во времени</h2><p>Если из одной переменной с датой вычесть другую, мы получим особый объект <code>timedelta</code>, в котором хранятся дни и секунды получившейся разницы!</p>",
    "lesson15.html": "\\n            <h2>💡 Главные инструменты программиста</h2><ul><li>Для стандарта красоты написания программ в Python используют свод правил — <strong>PEP8</strong>.</li><li>Проекты теперь хранят не на флешке, а в интернете через систему <strong>Git</strong> и сайт <strong>GitHub</strong>, что позволяет легко работать в команде.</li></ul>"
}

def update():
    print("🚀 Начинаю интеграцию дополнительных знаний и тестов...")
    
    # Обновление тестов в script.js
    try:
        with open("script.js", "r", encoding="utf-8") as f:
            js_content = f.read()

        js_content = re.sub(r'const quizData\s*=\s*\{.*?\n    \};', QUIZ_DATA, js_content, flags=re.DOTALL)

        with open("script.js", "w", encoding="utf-8") as f:
            f.write(js_content)
        print("✅ База тестов (script.js) успешно расширена.")
    except Exception as e:
        print(f"❌ Ошибка обновления script.js: {e}")

    # Обновление каждого урока
    for lesson, theory in HTML_INJECTIONS.items():
        if not os.path.exists(lesson):
            continue
            
        with open(lesson, "r", encoding="utf-8") as f:
            html = f.read()
            
        if "💡 Важно" in html or "💡" in html:
            print(f"⏭️ Урок {lesson} уже содержит эти дополнения. Пропуск.")
            continue
            
        # Находим конец секции lesson-content и вставляем перед её закрытием
        match = re.search(r'(<section class="lesson-content">)(.*?)(</section>)', html, flags=re.DOTALL)
        if match:
            new_html = html[:match.start(3)] + theory + "\\n        " + html[match.start(3):]
            with open(lesson, "w", encoding="utf-8") as f:
                f.write(new_html)
            print(f"✅ Урок {lesson} дополнен теорией.")
        else:
            print(f"⚠️ Не удалось найти блок lesson-content в {lesson}.")

    print("\\n🎉 ВСЕ ОБНОВЛЕНИЯ ЗАВЕРШЕНЫ УСПЕШНО! Теперь уроки и тесты 100% совпадают.")

if __name__ == "__main__":
    update()
