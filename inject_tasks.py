import re

tasks_json = r"""        const tasks = [
            // ================= ЛЕГКИЙ УРОВЕНЬ (5 ЗАДАЧ) =================
            {
                id: "sum",
                title: "Сумма двух чисел",
                difficulty: "easy",
                desc: "<p>Напишите функцию <code>add(a, b)</code>, которая принимает два числа и возвращает их сумму.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>add(2, 3) -> 5</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>add(-1, 1) -> 0</code>",
                startCode: "def add(a, b):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
import sys
try:
    assert add(2, 3) == 5, "add(2, 3) должно вернуть 5"
    assert add(-1, 1) == 0, "add(-1, 1) должно вернуть 0"
    assert add(100, 200) == 300, "add(100, 200) должно вернуть 300"
    print("✅ Все скрытые тесты успешно пройдены!\nЛогика функции add работает абсолютно верно при любых числах.")
except NameError:
    print("❌ Ошибка: Функция add не найдена.\nВы точно назвали её add?")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Неизвестная ошибка: {e}")
                `
            },
            {
                id: "even",
                title: "Чётные числа",
                difficulty: "easy",
                desc: "<p>Напишите функцию <code>is_even(n)</code>. Она должна возвращать логическое <code>True</code>, если число <code>n</code> чётное, и <code>False</code>, если нечётное (остаток от деления <code>%</code>).</p>",
                startCode: "def is_even(n):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert is_even(4) == True, "Для чётного числа 4 должен быть ответ True"
    assert is_even(7) == False, "Для нечётного числа 7 должен быть ответ False"
    assert is_even(0) == True, "Ноль математически считается чётным числом (ожидается True)"
    assert is_even(-2) == True, "Отрицательные чётные числа тоже должны возвращать True"
    print("✅ Все тесты пройдены. Отличная работа!")
except NameError:
    print("❌ Ошибка: Функция is_even не найдена.")
except AssertionError as e:
    print(f"❌ Провален тест: {e}")
except Exception as e:
    print(f"❌ Возникла фатальная ошибка: {e}")
                `
            },
            {
                id: "max",
                title: "Поиск максимума без max()",
                difficulty: "easy",
                desc: "<p>Напишите функцию <code>find_max(a, b)</code>, которая принимает два числа и возвращает наибольшее из них. <strong>Внимание:</strong> Запрещено использовать встроенную функцию <code>max()</code>. Используйте условный оператор if - else.</p>",
                startCode: "def find_max(a, b):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
import sys
try:
    assert find_max(10, 5) == 10, "find_max(10, 5) должно вернуть 10"
    assert find_max(-5, -2) == -2, "find_max(-5, -2) должно вернуть -2"
    assert find_max(7, 7) == 7, "find_max(7, 7) должно вернуть 7"
    
    import inspect
    source = inspect.getsource(find_max)
    assert "max(" not in source, "Нарушено правило: нельзя использовать встроенную функцию max()!"
    
    print("✅ Все тесты пройдены! Отличная работа с условиями if-else.")
except NameError:
    print("❌ Ошибка: Функция find_max не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {e}")
                `
            },
            {
                id: "power",
                title: "Возведение в степень",
                difficulty: "easy",
                desc: "<p>Напишите функцию <code>fast_power(base, exp)</code>, которая возводит число <code>base</code> в степень <code>exp</code> без использования операторов цикла (используйте оператор **).</p>",
                startCode: "def fast_power(base, exp):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert fast_power(2, 3) == 8, "2 в степени 3 равно 8"
    assert fast_power(5, 2) == 25, "5 в квадрате равно 25"
    assert fast_power(10, 0) == 1, "Любое число в нулевой степени равно 1"
    print("✅ Отлично! Тесты пройдены.")
except NameError:
    print("❌ Ошибка: Функция fast_power не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {e}")
                `
            },
            {
                id: "greet",
                title: "Приветствие",
                difficulty: "easy",
                desc: "<p>Напишите функцию <code>greet(name)</code>, которая принимает одну строку (имя) и возвращает строку вида <code>\"Привет, ИМЯ!\"</code>. Например: <code>\"Привет, Иван!\"</code>. Не забывайте запятую и восклицательный знак.</p>",
                startCode: "def greet(name):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert greet("Иван") == "Привет, Иван!", "Для Иван должно быть 'Привет, Иван!'"
    assert greet("Python") == "Привет, Python!", "Должно быть 'Привет, Python!'"
    print("✅ Строка правильно склеена! Отличная работа.")
except NameError:
    print("❌ Ошибка: Функция greet не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {e}")
                `
            },

            // ================= СРЕДНИЙ УРОВЕНЬ (5 ЗАДАЧ) =================
            {
                id: "reverse",
                title: "Перевернуть текст",
                difficulty: "medium",
                desc: "<p>Напишите функцию <code>reverse_string(text)</code>, которая принимает строку и возвращает её задом наперёд.</p><strong>Примените срезы (slices) или цикл for:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>reverse_string('собака') -> 'акабос'</code>",
                startCode: "def reverse_string(text):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert reverse_string("кот") == "ток", "Слово 'кот' должно стать 'ток'"
    assert reverse_string("Python") == "nohtyP", "Строка 'Python' не перевернулась должным образом"
    assert reverse_string("") == "", "Пустая строка должна остаться пустой"
    print("✅ Великолепно! Строки переворачиваются корректно на 100%.")
except NameError:
    print("❌ Ошибка: Функция reverse_string не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка в результате: {e}")
except Exception as e:
    print(f"❌ Сбой выполнения: {e}")
                `
            },
            {
                id: "count_vowels",
                title: "Подсчет гласных",
                difficulty: "medium",
                desc: "<p>Напишите функцию <code>count_vowels(word)</code>, которая принимает строку и возвращает <strong>количество гласных</strong> букв в ней (а, е, ё, и, о, у, ы, э, ю, я - для русского алфавита). Регистр не имеет значения.</p>",
                startCode: "def count_vowels(word):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert count_vowels("Привет") == 2, "В 'Привет' две гласные (и, е)"
    assert count_vowels("Яблоко") == 3, "В 'Яблоко' три гласные (Я, о, о)"
    assert count_vowels("КРТК") == 0, "В 'КРТК' нет гласных"
    assert count_vowels("") == 0, "Пустая строка возвращает 0"
    print("✅ Циклы и условия работают правильно! Функция считает верно.")
except NameError:
    print("❌ Ошибка: Функция count_vowels не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка в результате: {e}")
except Exception as e:
    print(f"❌ Сбой выполнения: {e}")
                `
            },
            {
                id: "list_sum",
                title: "Сумма списка",
                difficulty: "medium",
                desc: "<p>Напишите функцию <code>sum_list(numbers)</code>, которая принимает список чисел и возвращает их сумму. <strong>Запрещено</strong> использовать встроенную функцию <code>sum()</code>. Используйте цикл <code>for</code>.</p>",
                startCode: "def sum_list(numbers):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert sum_list([1, 2, 3]) == 6, "Сумма 1+2+3 равна 6"
    assert sum_list([-5, 10, 5]) == 10, "Сумма -5+10+5 равна 10"
    assert sum_list([]) == 0, "Сумма пустого списка должна быть 0"
    
    import inspect
    source = inspect.getsource(sum_list)
    assert "sum(" not in source, "Нарушено правило: нельзя использовать встроенную функцию sum()!"
    
    print("✅ Правильно работают циклы и накопитель суммы!")
except NameError:
    print("❌ Ошибка: Функция sum_list не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {e}")
                `
            },
            {
                id: "palindrome",
                title: "Палиндром",
                difficulty: "medium",
                desc: "<p>Напишите функцию <code>is_palindrome(text)</code>, которая возвращает <code>True</code>, если текст читается одинаково туда и обратно (без учета пробелов и регистра!), иначе <code>False</code>. Пример: <code>\"Леша на полке клопа нашел\" -> True</code>.</p>",
                startCode: "def is_palindrome(text):\n    # Очистите текст от пробелов и приведите к одному регистру\n    pass\n",
                testCode: `
try:
    assert is_palindrome("казак") == True, "'казак' это палиндром"
    assert is_palindrome("собака") == False, "'собака' это не палиндром"
    assert is_palindrome("А роза упала на лапу Азора") == True, "Многословный палиндром не прошел тест"
    print("✅ Срезы, приведение типов и строки работают идеально!")
except NameError:
    print("❌ Ошибка: Функция is_palindrome не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка: {e}")
except Exception as e:
    print(f"❌ Сбой выполнения: {e}")
                `
            },
            {
                id: "unique_dict",
                title: "Словарь возрастов",
                difficulty: "medium",
                desc: "<p>Напишите функцию <code>get_oldest(people)</code>. На вход подается словарь, где ключ — имя, значение — возраст. <code>{'Иван': 20, 'Анна': 25}</code>. Верните ИМЯ самого старшего человека.</p>",
                startCode: "def get_oldest(people):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert get_oldest({'Иван': 20, 'Анна': 25}) == 'Анна', "Анна (25) старше Ивана (20)"
    assert get_oldest({'Борис': 50, 'Глеб': 15, 'Алла': 40}) == 'Борис', "Должен быть выбран Борис (50)"
    print("✅ Отличная работа со словарями и ключами/значениями!")
except NameError:
    print("❌ Ошибка: Функция get_oldest не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
                `
            },

            // ================= ТЯЖЕЛЫЙ УРОВЕНЬ (5 ЗАДАЧ) =================
            {
                id: "safe_divide",
                title: "Безопасное деление",
                difficulty: "hard",
                desc: "<p>Напишите функцию <code>safe_divide(a, b)</code>, которая делит <code>a</code> на <code>b</code>. Если возникает ошибка деления на ноль, используйте блок <code>try-except</code> и возвращайте строку <code>\"Ошибка\"</code>.</p>",
                startCode: "def safe_divide(a, b):\n    # Ваш код пишите здесь\n    pass\n",
                testCode: `
try:
    assert safe_divide(10, 2) == 5, "10 / 2 должно быть 5"
    assert safe_divide(10, 0) == "Ошибка", "На 0 делить нельзя, должна возвращаться строка 'Ошибка'"
    
    import inspect
    source = inspect.getsource(safe_divide)
    assert "except " in source or "except:" in source, "Нарушено условие: используйте try-except блок."
    
    print("✅ Вы отлично справились с обработкой исключений!")
except NameError:
    print("❌ Ошибка: Функция safe_divide не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
                `
            },
            {
                id: "count_words",
                title: "Частота слов",
                difficulty: "hard",
                desc: "<p>Напишите функцию <code>word_counts(text)</code>, которая принимает строку и возвращает <strong>словарь</strong>, где ключ — слово (в нижнем регистре), а значение — сколько раз оно встретилось. Знаков препинания в строке не будет.</p>",
                startCode: "def word_counts(text):\n    # Подсказка: .split() разбивает на слова\n    pass\n",
                testCode: `
try:
    d = word_counts("Кот ест кот спит")
    assert d == {'кот': 2, 'ест': 1, 'спит': 1}, f"Ожидалось {{'кот': 2, 'ест': 1, 'спит': 1}}, а получено {d}"
    
    d2 = word_counts("раз два РАЗ")
    assert d2 == {'раз': 2, 'два': 1}, f"Регистр важен: 'РАЗ' и 'раз' - одно слово! Получено: {d2}"
    print("✅ Словарь частот построен абсолютно правильно!")
except NameError:
    print("❌ Ошибка: Функция word_counts не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
                `
            },
            {
                id: "oop_rectangle",
                title: "Основы ООП (Прямоугольник)",
                difficulty: "hard",
                desc: "<p>Напишите класс <code>Rectangle</code>, у которого в конструкторе <code>__init__</code> задаются ширина и высота. Добавьте метод <code>get_area()</code>, который возвращает его площадь (ширина на высоту).</p>",
                startCode: "class Rectangle:\n    def __init__(self, w, h):\n        pass\n\n    def get_area(self):\n        pass\n",
                testCode: `
try:
    rect1 = Rectangle(10, 5)
    assert rect1.get_area() == 50, "Площадь 10x5 должна быть равна 50"
    
    rect2 = Rectangle(2, 3)
    assert rect2.get_area() == 6, "Площадь 2x3 должна быть 6"
    print("✅ ООП класс работает безупречно! Методы написаны верно.")
except NameError:
    print("❌ Ошибка: Класс Rectangle не найден.")
except AttributeError as e:
    print("❌ Объект не обладает нужным методом или атрибутом:", e)
except AssertionError as e:
    print(f"❌ Ошибка: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
                `
            },
            {
                id: "datetime_days",
                title: "Разница в днях (datetime)",
                difficulty: "hard",
                desc: "<p>Заимпортируйте модуль <code>datetime</code>. Напишите функцию <code>get_days_diff(date1_str, date2_str)</code>. Даты приходят в формате <code>YYYY-MM-DD</code>. Верните целое количество дней (разницу) между первой и второй датой.</p>",
                startCode: "from datetime import datetime\n\ndef get_days_diff(date1_str, date2_str):\n    # Вам поможет datetime.strptime()\n    pass\n",
                testCode: `
try:
    assert get_days_diff('2025-01-01', '2025-01-10') in [9, -9], "Разница между 1 и 10 января - 9 дней"
    assert abs(get_days_diff('2024-02-01', '2024-03-01')) == 29, "2024 високосный год, должно быть 29 дней!"
    print("✅ Вы отлично подружились с классом datetime!")
except NameError:
    print("❌ Ошибка: Функция get_days_diff не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка: {e}")
except Exception as e:
    print(f"❌ Выброшено исключение: {e}")
                `
            },
            {
                id: "fibonacci",
                title: "Числа Фибоначчи",
                difficulty: "hard",
                desc: "<p>Сложный алгоритм! Напишите функцию <code>fib(n)</code>. Она возвращает n-ое число Фибоначчи. Пример ряда: 0, 1, 1, 2, 3, 5, 8. Где fib(0)=0, fib(1)=1, fib(2)=1, fib(6)=8.</p>",
                startCode: "def fib(n):\n    # Ваш код\n    pass\n",
                testCode: `
try:
    assert fib(0) == 0, "fib(0) должно быть 0"
    assert fib(1) == 1, "fib(1) должно быть 1"
    assert fib(2) == 1, "fib(2) должно быть 1"
    assert fib(6) == 8, "fib(6) должно быть 8"
    assert fib(10) == 55, "fib(10) должно быть 55"
    print("✅ Браво! Математическая логика идеальна.")
except NameError:
    print("❌ Ошибка: Функция fib не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка результата: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
                `
            }
        ];"""

def fix():
    with open("tasks.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Replacements for nicer design:
    html = html.replace('.task-item {', '.task-item {\n            border-radius: 8px;\n            margin-bottom: 12px;\n            border: 1px solid rgba(0, 0, 0, 0.05);\n            box-shadow: 0 2px 4px rgba(0,0,0,0.02);\n            background: var(--card-bg);\n')
    
    html = html.replace('body.dark-mode .task-item {', 'body.dark-mode .task-item {\n            border: 1px solid rgba(255, 255, 255, 0.05);')
    html = html.replace('.task-item.active {', '.task-item.active {\n            border-color: var(--accent-color);\n            transform: translateX(4px);\n            box-shadow: 0 4px 8px rgba(0,0,0,0.06);\n')
    
    html = html.replace('const diffClass = task.difficulty === \'easy\' ? \'diff-easy\' : \'diff-medium\';', 'const diffClass = task.difficulty === \'easy\' ? \'diff-easy\' : (task.difficulty === \'medium\' ? \'diff-medium\' : \'diff-hard\');')
    html = html.replace('const diffLabel = task.difficulty === \'easy\' ? \'Обычная\' : \'Средняя\';', 'const diffLabel = task.difficulty === \'easy\' ? \'🟢 Обычная\' : (task.difficulty === \'medium\' ? \'🟡 Средняя\' : \'🔴 Сложная\');')
    
    html = html.replace('.diff-medium {', '.diff-hard {\n            background: rgba(239, 68, 68, 0.15);\n            color: #ef4444;\n        }\n\n        .diff-medium {')
    
    # regex sub tasks JSON array
    html = re.sub(r'const tasks = \[.*?\];', tasks_json, html, flags=re.DOTALL)

    with open("tasks.html", "w", encoding="utf-8") as f:
        f.write(html)

fix()
