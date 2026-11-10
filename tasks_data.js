const tasks = [
    // ================= ЛЁГКИЙ УРОВЕНЬ (15 ЗАДАЧ) =================
    {
        id: "sum",
        title: "Сумма двух чисел",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>add(a, b)</code>, которая принимает два числа и возвращает их сумму.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>add(2, 3) -> 5</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>add(-1, 1) -> 0</code>",
        startCode: "def add(a, b):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert add(2, 3) == 5, "add(2, 3) должно вернуть 5"
    assert add(-1, 1) == 0, "add(-1, 1) должно вернуть 0"
    assert add(100, 200) == 300, "add(100, 200) должно вернуть 300"
    __task_passed__ = True
    print("✅ Все скрытые тесты успешно пройдены!\\nЛогика функции add работает абсолютно верно при любых числах.")
except NameError:
    print("❌ Ошибка: Функция add не найдена.\\nВы точно назвали её add?")
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
    __task_passed__ = True
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
try:
    assert find_max(10, 5) == 10, "find_max(10, 5) должно вернуть 10"
    assert find_max(-5, -2) == -2, "find_max(-5, -2) должно вернуть -2"
    assert find_max(7, 7) == 7, "find_max(7, 7) должно вернуть 7"
    
    assert not __uses_call__("max"), "Нарушено правило: нельзя использовать встроенную функцию max()!"
    
    __task_passed__ = True
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
    __task_passed__ = True
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
    __task_passed__ = True
    print("✅ Строка правильно склеена! Отличная работа.")
except NameError:
    print("❌ Ошибка: Функция greet не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {e}")
        `
    },

    {
        id: "square",
        title: "Квадрат числа",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>square(n)</code>, которая возвращает квадрат числа <code>n</code> (число, умноженное само на себя).</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>square(4) -> 16</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>square(-3) -> 9</code>",
        startCode: "def square(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert square(4) == 16, "square(4) должно вернуть 16"
    assert square(-3) == 9, "Квадрат отрицательного числа положительный: square(-3) == 9"
    assert square(0) == 0, "square(0) должно вернуть 0"
    assert square(1.5) == 2.25, "Функция должна работать и с дробными числами: square(1.5) == 2.25"
    __task_passed__ = True
    print("✅ Отлично! Возведение в квадрат работает.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция square называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fahrenheit",
        title: "Градусы Фаренгейта",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>to_fahrenheit(c)</code>, которая переводит температуру из градусов Цельсия в градусы Фаренгейта по формуле <code>F = C * 9 / 5 + 32</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>to_fahrenheit(0) -> 32.0</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>to_fahrenheit(100) -> 212.0</code>",
        startCode: "def to_fahrenheit(c):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert to_fahrenheit(0) == 32, "0 °C = 32 °F"
    assert to_fahrenheit(100) == 212, "100 °C = 212 °F"
    assert to_fahrenheit(-40) == -40, "-40 °C = -40 °F (единственная температура, где шкалы совпадают)"
    assert abs(to_fahrenheit(36.6) - 97.88) < 0.001, "36.6 °C ≈ 97.88 °F"
    __task_passed__ = True
    print("✅ Формула перевода работает верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция to_fahrenheit называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "last_digit",
        title: "Последняя цифра",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>last_digit(n)</code>, которая возвращает последнюю цифру целого числа. Для отрицательных чисел тоже: у <code>-57</code> последняя цифра <code>7</code>.</p><p>Подсказка: остаток от деления на 10 и функция <code>abs()</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>last_digit(1234) -> 4</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>last_digit(-57) -> 7</code>",
        startCode: "def last_digit(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert last_digit(1234) == 4, "last_digit(1234) должно вернуть 4"
    assert last_digit(7) == 7, "last_digit(7) должно вернуть 7"
    assert last_digit(0) == 0, "last_digit(0) должно вернуть 0"
    assert last_digit(-57) == 7, "Для отрицательного числа: last_digit(-57) должно вернуть 7"
    __task_passed__ = True
    print("✅ Верно! Остаток от деления — мощный инструмент.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция last_digit называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "is_adult",
        title: "Совершеннолетие",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>is_adult(age)</code>, которая возвращает <code>True</code>, если человеку 18 лет или больше, и <code>False</code> в остальных случаях.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_adult(20) -> True</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_adult(17) -> False</code>",
        startCode: "def is_adult(age):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert is_adult(20) is True, "is_adult(20) должно вернуть True"
    assert is_adult(17) is False, "is_adult(17) должно вернуть False"
    assert is_adult(18) is True, "Ровно 18 лет — уже совершеннолетие: is_adult(18) должно вернуть True"
    assert is_adult(0) is False, "is_adult(0) должно вернуть False"
    __task_passed__ = True
    print("✅ Условие работает правильно, включая границу в 18 лет!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция is_adult называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "my_abs",
        title: "Модуль числа без abs()",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>my_abs(x)</code>, которая возвращает модуль числа (число без знака минус). <strong>Внимание:</strong> встроенную функцию <code>abs()</code> использовать нельзя — используйте условие <code>if</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>my_abs(-5) -> 5</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>my_abs(3) -> 3</code>",
        startCode: "def my_abs(x):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert my_abs(-5) == 5, "my_abs(-5) должно вернуть 5"
    assert my_abs(3) == 3, "my_abs(3) должно вернуть 3"
    assert my_abs(0) == 0, "my_abs(0) должно вернуть 0"
    assert my_abs(-2.5) == 2.5, "my_abs(-2.5) должно вернуть 2.5"
    assert not __uses_call__("abs"), "Нарушено правило: нельзя использовать встроенную функцию abs()!"
    __task_passed__ = True
    print("✅ Отлично! Вы сами реализовали модуль числа.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция my_abs называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "count_chars",
        title: "Длина строки без len()",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>count_chars(text)</code>, которая возвращает количество символов в строке. <strong>Внимание:</strong> функцию <code>len()</code> использовать нельзя — посчитайте символы циклом <code>for</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>count_chars('кот') -> 3</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>count_chars('') -> 0</code>",
        startCode: "def count_chars(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert count_chars("кот") == 3, "В слове кот 3 символа"
    assert count_chars("") == 0, "У пустой строки 0 символов"
    assert count_chars("Привет, мир!") == 12, "Пробелы и знаки препинания тоже считаются: в «Привет, мир!» 12 символов"
    assert not __uses_call__("len"), "Нарушено правило: нельзя использовать функцию len()!"
    __task_passed__ = True
    print("✅ Цикл-счётчик работает отлично!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция count_chars называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "first_last",
        title: "Первый и последний",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>first_and_last(items)</code>, которая принимает непустой список и возвращает <strong>кортеж</strong> из его первого и последнего элементов.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>first_and_last([1, 2, 3]) -> (1, 3)</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>first_and_last(['a']) -> ('a', 'a')</code>",
        startCode: "def first_and_last(items):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert first_and_last([1, 2, 3]) == (1, 3), "first_and_last([1, 2, 3]) должно вернуть (1, 3)"
    assert first_and_last(["a"]) == ("a", "a"), "Если элемент один, он и первый, и последний"
    assert first_and_last([5, 0, 0, 9]) == (5, 9), "first_and_last([5, 0, 0, 9]) должно вернуть (5, 9)"
    assert isinstance(first_and_last([1, 2]), tuple), "Нужно вернуть именно кортеж: (первый, последний)"
    __task_passed__ = True
    print("✅ Индексы 0 и -1 освоены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция first_and_last называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "sign",
        title: "Знак числа",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>sign(n)</code>, которая возвращает строку <code>\"положительное\"</code>, <code>\"отрицательное\"</code> или <code>\"ноль\"</code> в зависимости от числа.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>sign(5) -> 'положительное'</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>sign(0) -> 'ноль'</code>",
        startCode: "def sign(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert sign(5) == "положительное", "sign(5) должно вернуть «положительное»"
    assert sign(-3) == "отрицательное", "sign(-3) должно вернуть «отрицательное»"
    assert sign(0) == "ноль", "sign(0) должно вернуть «ноль»"
    assert sign(0.1) == "положительное", "sign(0.1) должно вернуть «положительное»"
    __task_passed__ = True
    print("✅ if / elif / else работают как надо!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция sign называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "repeat_word",
        title: "Повтор слова",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>repeat(word, n)</code>, которая возвращает слово, повторённое <code>n</code> раз через пробел. Если <code>n</code> равно 0, верните пустую строку.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>repeat('да', 3) -> 'да да да'</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>repeat('ок', 1) -> 'ок'</code>",
        startCode: "def repeat(word, n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert repeat("да", 3) == "да да да", "repeat('да', 3) должно вернуть 'да да да'"
    assert repeat("ок", 1) == "ок", "Одно слово — без лишних пробелов"
    assert repeat("эхо", 0) == "", "При n = 0 должна получиться пустая строка"
    assert not repeat("а", 4).endswith(" "), "В конце строки не должно быть лишнего пробела"
    __task_passed__ = True
    print("✅ Строка собрана идеально!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция repeat называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "min_of_three",
        title: "Минимум из трёх без min()",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>min3(a, b, c)</code>, которая возвращает наименьшее из трёх чисел. <strong>Внимание:</strong> функцию <code>min()</code> использовать нельзя.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>min3(5, 2, 8) -> 2</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>min3(-1, -7, 0) -> -7</code>",
        startCode: "def min3(a, b, c):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert min3(5, 2, 8) == 2, "min3(5, 2, 8) должно вернуть 2"
    assert min3(-1, -7, 0) == -7, "min3(-1, -7, 0) должно вернуть -7"
    assert min3(3, 3, 3) == 3, "Если все числа равны, вернуть это число"
    assert min3(9, 8, 1) == 1, "min3(9, 8, 1) должно вернуть 1"
    assert min3(1, 8, 9) == 1, "min3(1, 8, 9) должно вернуть 1"
    assert not __uses_call__("min"), "Нарушено правило: нельзя использовать встроенную функцию min()!"
    __task_passed__ = True
    print("✅ Сравнения работают верно во всех случаях!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция min3 называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },

    // ================= СРЕДНИЙ УРОВЕНЬ (16 ЗАДАЧ) =================
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
    __task_passed__ = True
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
    __task_passed__ = True
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
    
    assert not __uses_call__("sum"), "Нарушено правило: нельзя использовать встроенную функцию sum()!"
    
    __task_passed__ = True
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
    __task_passed__ = True
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
        desc: "<p>Напишите функцию <code>get_oldest(people)</code>. На вход подается словарь, где ключ - имя, значение - возраст. <code>{'Иван': 20, 'Анна': 25}</code>. Верните ИМЯ самого старшего человека.</p>",
        startCode: "def get_oldest(people):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert get_oldest({'Иван': 20, 'Анна': 25}) == 'Анна', "Анна (25) старше Ивана (20)"
    assert get_oldest({'Борис': 50, 'Глеб': 15, 'Алла': 40}) == 'Борис', "Должен быть выбран Борис (50)"
    __task_passed__ = True
    print("✅ Отличная работа со словарями и ключами/значениями!")
except NameError:
    print("❌ Ошибка: Функция get_oldest не найдена.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
        `
    },

    {
        id: "count_even",
        title: "Сколько чётных",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>count_even(numbers)</code>, которая возвращает, сколько <strong>чётных</strong> чисел в списке.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>count_even([1, 2, 3, 4]) -> 2</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>count_even([]) -> 0</code>",
        startCode: "def count_even(numbers):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert count_even([1, 2, 3, 4]) == 2, "В [1, 2, 3, 4] два чётных числа"
    assert count_even([]) == 0, "В пустом списке 0 чётных"
    assert count_even([1, 3, 5]) == 0, "В [1, 3, 5] нет чётных"
    assert count_even([0, -2, 7, 10]) == 3, "0 и отрицательные чётные тоже считаются: в [0, -2, 7, 10] три чётных"
    __task_passed__ = True
    print("✅ Цикл и условие в связке — отлично!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция count_even называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "only_positive",
        title: "Только положительные",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>only_positive(numbers)</code>, которая возвращает <strong>новый список</strong> только из положительных чисел (больше нуля), сохраняя их порядок.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>only_positive([3, -1, 0, 5]) -> [3, 5]</code>",
        startCode: "def only_positive(numbers):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    data = [3, -1, 0, 5]
    assert only_positive(data) == [3, 5], "only_positive([3, -1, 0, 5]) должно вернуть [3, 5]"
    assert data == [3, -1, 0, 5], "Исходный список нельзя изменять — нужно вернуть новый"
    assert only_positive([-5, -1]) == [], "Если положительных нет, вернуть пустой список"
    assert only_positive([1, 2, 3]) == [1, 2, 3], "Порядок элементов должен сохраниться"
    __task_passed__ = True
    print("✅ Фильтрация списка освоена!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция only_positive называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "title_case",
        title: "Каждое слово с заглавной",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>title_case(text)</code>, которая делает первую букву каждого слова заглавной, а остальные — строчными. Слова разделены одним пробелом.</p><p>Подсказка: <code>split()</code>, <code>capitalize()</code> и <code>join()</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>title_case('привет мир') -> 'Привет Мир'</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>title_case('pYTHON рулит') -> 'Python Рулит'</code>",
        startCode: "def title_case(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert title_case("привет мир") == "Привет Мир", "title_case('привет мир') должно вернуть 'Привет Мир'"
    assert title_case("pYTHON рулит") == "Python Рулит", "Остальные буквы слова должны стать строчными"
    assert title_case("я") == "Я", "Одно слово из одной буквы"
    assert title_case("") == "", "Пустая строка остаётся пустой"
    __task_passed__ = True
    print("✅ Работа со строками на высоте!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция title_case называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "factorial",
        title: "Факториал",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>factorial(n)</code>, которая возвращает факториал числа: произведение всех чисел от 1 до <code>n</code>. По определению <code>factorial(0) = 1</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>factorial(5) -> 120</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>factorial(0) -> 1</code>",
        startCode: "def factorial(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert factorial(5) == 120, "5! = 1 * 2 * 3 * 4 * 5 = 120"
    assert factorial(0) == 1, "По определению 0! = 1"
    assert factorial(1) == 1, "1! = 1"
    assert factorial(10) == 3628800, "10! = 3628800"
    __task_passed__ = True
    print("✅ Факториал считается верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция factorial называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "unique",
        title: "Убрать повторы",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>unique(items)</code>, которая возвращает новый список без повторяющихся элементов, <strong>сохраняя порядок</strong> их первого появления.</p><p>Внимание: <code>set()</code> порядок не сохраняет — подумайте, как его сохранить.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>unique([3, 1, 3, 2, 1]) -> [3, 1, 2]</code>",
        startCode: "def unique(items):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert unique([3, 1, 3, 2, 1]) == [3, 1, 2], "unique([3, 1, 3, 2, 1]) должно вернуть [3, 1, 2] — порядок первого появления"
    assert unique([]) == [], "Для пустого списка — пустой список"
    assert unique(["б", "а", "б"]) == ["б", "а"], "Работает и со строками"
    assert unique([5, 4, 3, 2, 1]) == [5, 4, 3, 2, 1], "Если повторов нет, список не меняется"
    __task_passed__ = True
    print("✅ Повторы убраны, порядок сохранён!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция unique называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "digit_sum",
        title: "Сумма цифр",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>digit_sum(n)</code>, которая возвращает сумму цифр неотрицательного целого числа.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>digit_sum(1234) -> 10</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>digit_sum(0) -> 0</code>",
        startCode: "def digit_sum(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert digit_sum(1234) == 10, "1 + 2 + 3 + 4 = 10"
    assert digit_sum(0) == 0, "digit_sum(0) должно вернуть 0"
    assert digit_sum(9) == 9, "digit_sum(9) должно вернуть 9"
    assert digit_sum(1000001) == 2, "digit_sum(1000001) должно вернуть 2"
    __task_passed__ = True
    print("✅ Цифры сложены правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция digit_sum называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "longest_word",
        title: "Самое длинное слово",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>longest_word(text)</code>, которая возвращает самое длинное слово в строке. Если таких слов несколько, верните <strong>первое</strong> из них.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>longest_word('я люблю программировать') -> 'программировать'</code>",
        startCode: "def longest_word(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert longest_word("я люблю программировать") == "программировать", "Ожидалось слово «программировать»"
    assert longest_word("кот пёс мыш") == "кот", "При одинаковой длине нужно вернуть первое слово"
    assert longest_word("Python") == "Python", "Если слово одно, вернуть его"
    __task_passed__ = True
    print("✅ Поиск максимума по длине работает!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция longest_word называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "table_row",
        title: "Строка таблицы умножения",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>table_row(n)</code>, которая возвращает список из 10 чисел: <code>n * 1</code>, <code>n * 2</code>, …, <code>n * 10</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>table_row(3) -> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]</code>",
        startCode: "def table_row(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert table_row(3) == [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], "Неверная строка для 3"
    assert table_row(1) == list(range(1, 11)), "Для 1 — числа от 1 до 10"
    assert len(table_row(7)) == 10, "В списке должно быть ровно 10 чисел"
    assert table_row(0) == [0] * 10, "Для 0 — десять нулей"
    __task_passed__ = True
    print("✅ range() и списки освоены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция table_row называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "count_letter",
        title: "Сколько раз буква",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>count_letter(text, letter)</code>, которая возвращает, сколько раз буква встречается в тексте <strong>без учёта регистра</strong>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>count_letter('Абракадабра', 'а') -> 5</code>",
        startCode: "def count_letter(text, letter):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert count_letter("Абракадабра", "а") == 5, "В «Абракадабра» пять букв «а» (с учётом заглавной)"
    assert count_letter("Python", "P") == 1, "count_letter('Python', 'P') должно вернуть 1"
    assert count_letter("python", "P") == 1, "Регистр не важен: count_letter('python', 'P') == 1"
    assert count_letter("", "а") == 0, "В пустой строке 0 букв"
    __task_passed__ = True
    print("✅ Методы lower() и count() — ваши друзья!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция count_letter называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "invert_dict",
        title: "Перевернуть словарь",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>invert(d)</code>, которая возвращает новый словарь, где ключи и значения поменялись местами. Все значения в исходном словаре разные.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>invert({'a': 1, 'b': 2}) -> {1: 'a', 2: 'b'}</code>",
        startCode: "def invert(d):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert invert({"a": 1, "b": 2}) == {1: "a", 2: "b"}, "invert({'a': 1, 'b': 2}) должно вернуть {1: 'a', 2: 'b'}"
    assert invert({}) == {}, "Пустой словарь остаётся пустым"
    assert invert({"кот": "cat", "пёс": "dog"}) == {"cat": "кот", "dog": "пёс"}, "Работает и со строками"
    __task_passed__ = True
    print("✅ Перебор словаря через items() освоен!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция invert называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },

    {
        id: "is_leap",
        title: "Високосный год",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>is_leap(year)</code>, которая возвращает <code>True</code>, если год високосный, и <code>False</code>, если нет.</p><p>Правило: год високосный, если делится на 4, <strong>но</strong> годы, которые делятся на 100, високосные только если делятся ещё и на 400.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_leap(2024) -> True</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_leap(1900) -> False</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_leap(2000) -> True</code>",
        startCode: "def is_leap(year):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert is_leap(2024) is True, "2024 делится на 4 — високосный"
    assert is_leap(2023) is False, "2023 не делится на 4 — не високосный"
    assert is_leap(1900) is False, "1900 делится на 100, но не на 400 — не високосный"
    assert is_leap(2000) is True, "2000 делится на 400 — високосный"
    assert is_leap(2100) is False, "2100 делится на 100, но не на 400 — не високосный"
    __task_passed__ = True
    print("✅ Отлично! Вы учли все три правила високосного года.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция is_leap называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },

    // ================= СЛОЖНЫЙ УРОВЕНЬ (16 ЗАДАЧ) =================
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
    
    assert __uses_node__("Try"), "Нарушено условие: используйте try-except блок."
    
    __task_passed__ = True
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
        desc: "<p>Напишите функцию <code>word_counts(text)</code>, которая принимает строку и возвращает <strong>словарь</strong>, где ключ - слово (в нижнем регистре), а значение - сколько раз оно встретилось. Знаков препинания в строке не будет.</p>",
        startCode: "def word_counts(text):\n    # Подсказка: .split() разбивает на слова\n    pass\n",
        testCode: `
try:
    d = word_counts("Кот ест кот спит")
    assert d == {'кот': 2, 'ест': 1, 'спит': 1}, f"Ожидалось {{'кот': 2, 'ест': 1, 'спит': 1}}, а получено {d}"
    
    d2 = word_counts("раз два РАЗ")
    assert d2 == {'раз': 2, 'два': 1}, f"Регистр важен: 'РАЗ' и 'раз' - одно слово! Получено: {d2}"
    __task_passed__ = True
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
    __task_passed__ = True
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
    __task_passed__ = True
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
    __task_passed__ = True
    print("✅ Браво! Математическая логика идеальна.")
except NameError:
    print("❌ Ошибка: Функция fib не найдена.")
except AssertionError as e:
    print(f"❌ Ошибка результата: {e}")
except Exception as e:
    print(f"❌ Ошибка: {e}")
        `
    },
    {
        id: "is_prime",
        title: "Простое число",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>is_prime(n)</code>, которая возвращает <code>True</code>, если число простое (делится без остатка только на 1 и на само себя), иначе <code>False</code>. Числа меньше 2 простыми не считаются.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_prime(7) -> True</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_prime(91) -> False  # 91 = 7 * 13</code>",
        startCode: "def is_prime(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert is_prime(2) is True, "2 — самое маленькое простое число"
    assert is_prime(97) is True, "97 — простое число"
    assert is_prime(1) is False, "1 не считается простым"
    assert is_prime(0) is False and is_prime(-7) is False, "0 и отрицательные числа не простые"
    assert is_prime(91) is False, "91 = 7 * 13 — не простое"
    assert is_prime(49) is False, "49 = 7 * 7 — не простое"
    assert [n for n in range(30) if is_prime(n)] == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29], "Неверный список простых чисел до 30"
    __task_passed__ = True
    print("✅ Проверка на простоту работает безупречно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция is_prime называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "bank_account",
        title: "Банковский счёт (ООП)",
        difficulty: "hard",
        desc: "<p>Напишите класс <code>BankAccount</code>:</p><ul><li><code>BankAccount(balance)</code> — создаёт счёт с начальным балансом;</li><li><code>deposit(amount)</code> — пополняет счёт;</li><li><code>withdraw(amount)</code> — снимает деньги и возвращает <code>True</code>. Если денег не хватает, баланс не меняется, а метод возвращает <code>False</code>;</li><li>атрибут <code>balance</code> хранит текущий баланс.</li></ul>",
        startCode: "class BankAccount:\n    def __init__(self, balance):\n        pass\n\n    def deposit(self, amount):\n        pass\n\n    def withdraw(self, amount):\n        pass\n",
        testCode: `
try:
    acc = BankAccount(100)
    assert acc.balance == 100, "Начальный баланс должен быть 100"
    acc.deposit(50)
    assert acc.balance == 150, "После пополнения на 50 баланс должен стать 150"
    assert acc.withdraw(30) is True, "Снятие 30 при балансе 150 должно вернуть True"
    assert acc.balance == 120, "После снятия 30 баланс должен стать 120"
    assert acc.withdraw(500) is False, "Снять 500 при балансе 120 нельзя — должно вернуться False"
    assert acc.balance == 120, "При неудачном снятии баланс не должен меняться"
    other = BankAccount(0)
    assert other.balance == 0 and acc.balance == 120, "У каждого счёта свой баланс"
    __task_passed__ = True
    print("✅ Класс работает как настоящий банковский счёт!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс BankAccount называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "caesar",
        title: "Шифр Цезаря",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>caesar(text, shift)</code>, которая шифрует текст шифром Цезаря: каждая <strong>латинская</strong> буква сдвигается по алфавиту на <code>shift</code> позиций (после <code>z</code> снова идёт <code>a</code>). Заглавные буквы остаются заглавными, все остальные символы не меняются.</p><p>Подсказка: функции <code>ord()</code> и <code>chr()</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>caesar('abc', 1) -> 'bcd'</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>caesar('Hello, World!', 3) -> 'Khoor, Zruog!'</code>",
        startCode: "def caesar(text, shift):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert caesar("abc", 1) == "bcd", "caesar('abc', 1) должно вернуть 'bcd'"
    assert caesar("xyz", 3) == "abc", "После z алфавит начинается заново: caesar('xyz', 3) == 'abc'"
    assert caesar("Hello, World!", 3) == "Khoor, Zruog!", "Заглавные буквы и знаки препинания должны обрабатываться правильно"
    assert caesar("Khoor", -3) == "Hello", "Отрицательный сдвиг расшифровывает текст"
    assert caesar("abc", 26) == "abc", "Сдвиг на 26 возвращает исходный текст"
    __task_passed__ = True
    print("✅ Шифр работает! Вы настоящий криптограф.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция caesar называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "anagram",
        title: "Анаграммы",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>is_anagram(a, b)</code>, которая возвращает <code>True</code>, если строки состоят из одних и тех же букв (<strong>без учёта регистра и пробелов</strong>), иначе <code>False</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_anagram('Листок', 'стоклИ') -> True</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>is_anagram('кот', 'кит') -> False</code>",
        startCode: "def is_anagram(a, b):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert is_anagram("Листок", "стоклИ") is True, "«Листок» и «стоклИ» — анаграммы"
    assert is_anagram("кот", "кит") is False, "«кот» и «кит» — не анаграммы"
    assert is_anagram("апельсин", "спаниель") is True, "«апельсин» и «спаниель» — анаграммы"
    assert is_anagram("Ток", "кот ") is True, "Пробелы не учитываются"
    assert is_anagram("аа", "а") is False, "Важно и количество букв: «аа» и «а» — не анаграммы"
    __task_passed__ = True
    print("✅ Сортировка и сравнение строк — отлично!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция is_anagram называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "flatten",
        title: "Выпрямить список (рекурсия)",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>flatten(items)</code>, которая превращает вложенный список любой глубины в обычный «плоский» список.</p><p>Подсказка: проверка <code>isinstance(x, list)</code> и рекурсия — функция может вызывать саму себя.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>flatten([1, [2, [3, 4]], 5]) -> [1, 2, 3, 4, 5]</code>",
        startCode: "def flatten(items):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert flatten([1, [2, [3, 4]], 5]) == [1, 2, 3, 4, 5], "flatten([1, [2, [3, 4]], 5]) должно вернуть [1, 2, 3, 4, 5]"
    assert flatten([]) == [], "Пустой список остаётся пустым"
    assert flatten([[[[7]]]]) == [7], "Глубокая вложенность: flatten([[[[7]]]]) == [7]"
    assert flatten([1, 2, 3]) == [1, 2, 3], "Плоский список не меняется"
    assert flatten([[], [1], [], [2, []]]) == [1, 2], "Пустые вложенные списки просто исчезают"
    __task_passed__ = True
    print("✅ Рекурсия покорена!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция flatten называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "parse_numbers",
        title: "Числа из строк (try-except)",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>parse_numbers(items)</code>. Она получает список строк и возвращает список целых чисел из тех строк, которые удалось превратить в число через <code>int()</code>. Строки, которые числом не являются, пропускаются. Обязательно используйте <code>try-except</code>.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>parse_numbers(['10', 'abc', '-3', '4.5']) -> [10, -3]</code>",
        startCode: "def parse_numbers(items):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert parse_numbers(["10", "abc", "-3", "4.5"]) == [10, -3], "Ожидалось [10, -3]: «abc» и «4.5» нельзя превратить в int"
    assert parse_numbers([]) == [], "Для пустого списка — пустой список"
    assert parse_numbers(["один", "два"]) == [], "Если чисел нет, вернуть пустой список"
    assert parse_numbers([" 7 ", "007"]) == [7, 7], "int() справляется с пробелами по краям и ведущими нулями"
    assert __uses_node__("Try"), "Нарушено условие: используйте блок try-except"
    __task_passed__ = True
    print("✅ Обработка ошибок работает надёжно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция parse_numbers называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "most_common_word",
        title: "Самое частое слово",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>most_common_word(text)</code>, которая возвращает слово, встречающееся в тексте чаще всего, <strong>в нижнем регистре</strong>. Знаков препинания в тексте нет. Если таких слов несколько, верните то, что встретилось в тексте раньше.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>most_common_word('Кот видит кота а кот спит') -> 'кот'</code>",
        startCode: "def most_common_word(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert most_common_word("Кот видит кота а кот спит") == "кот", "Слово «кот» встречается 2 раза"
    assert most_common_word("раз два Два три") == "два", "Регистр не важен: «два» и «Два» — одно слово"
    assert most_common_word("яблоко груша") == "яблоко", "При равной частоте вернуть слово, встретившееся раньше"
    assert most_common_word("б а а б") == "б", "При равной частоте вернуть слово, встретившееся раньше"
    __task_passed__ = True
    print("✅ Словарь частот и поиск максимума — отлично!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция most_common_word называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "file_lines",
        title: "Запись и чтение файла",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>save_and_count(filename, lines)</code>. Она записывает строки из списка <code>lines</code> в файл <code>filename</code> — каждую с новой строки, — затем открывает этот файл на чтение и возвращает, сколько в нём строк.</p><p>Используйте <code>with open(...)</code>. Файл создаётся во временной памяти браузера, ваш компьютер он не затронет.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>save_and_count('notes.txt', ['купить хлеб', 'позвонить маме']) -> 2</code>",
        startCode: "def save_and_count(filename, lines):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert save_and_count("t1.txt", ["купить хлеб", "позвонить маме"]) == 2, "В файле должно получиться 2 строки"
    with open("t1.txt", encoding="utf-8") as f:
        content = f.read()
    assert "купить хлеб" in content and "позвонить маме" in content, "В файле должен оказаться текст строк"
    assert save_and_count("t2.txt", ["одна"]) == 1, "Для одной строки — 1"
    assert save_and_count("t1.txt", ["a", "b", "c"]) == 3, "Повторная запись в тот же файл должна его перезаписать (режим w)"
    __task_passed__ = True
    print("✅ Работа с файлами освоена!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция save_and_count называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "weekday_name",
        title: "День недели по дате",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>weekday_name(date_str)</code>. Она получает дату в формате <code>YYYY-MM-DD</code> и возвращает название дня недели по-русски строчными буквами: <code>\"понедельник\"</code>, <code>\"вторник\"</code>, …, <code>\"воскресенье\"</code>.</p><p>Подсказка: <code>datetime.strptime()</code> и метод <code>weekday()</code>, который возвращает 0 для понедельника.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>weekday_name('2024-01-01') -> 'понедельник'</code>",
        startCode: "from datetime import datetime\n\ndef weekday_name(date_str):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert weekday_name("2024-01-01") == "понедельник", "1 января 2024 года — понедельник"
    assert weekday_name("2000-01-01") == "суббота", "1 января 2000 года — суббота"
    assert weekday_name("2024-02-29") == "четверг", "29 февраля 2024 года — четверг"
    assert weekday_name("2023-12-31") == "воскресенье", "31 декабря 2023 года — воскресенье"
    __task_passed__ = True
    print("✅ Модуль datetime у вас в руках!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция weekday_name называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "stack",
        title: "Стек (ООП)",
        difficulty: "hard",
        desc: "<p>Напишите класс <code>Stack</code> — «стопку», в которой последний положенный элемент забирается первым:</p><ul><li><code>push(item)</code> — положить элемент наверх;</li><li><code>pop()</code> — забрать и вернуть верхний элемент, а если стек пуст — вернуть <code>None</code>;</li><li><code>peek()</code> — вернуть верхний элемент, не забирая его (<code>None</code>, если пусто);</li><li><code>is_empty()</code> — <code>True</code>, если стек пуст;</li><li><code>size()</code> — количество элементов.</li></ul>",
        startCode: "class Stack:\n    def __init__(self):\n        pass\n\n    def push(self, item):\n        pass\n\n    def pop(self):\n        pass\n\n    def peek(self):\n        pass\n\n    def is_empty(self):\n        pass\n\n    def size(self):\n        pass\n",
        testCode: `
try:
    s = Stack()
    assert s.is_empty() is True and s.size() == 0, "Новый стек должен быть пустым"
    assert s.pop() is None and s.peek() is None, "pop() и peek() у пустого стека должны вернуть None"
    s.push(1); s.push(2); s.push(3)
    assert s.size() == 3 and s.is_empty() is False, "После трёх push() размер должен быть 3"
    assert s.peek() == 3 and s.size() == 3, "peek() возвращает верхний элемент и не удаляет его"
    assert s.pop() == 3 and s.pop() == 2, "pop() забирает элементы в обратном порядке: сначала 3, потом 2"
    assert s.size() == 1, "После двух pop() остался один элемент"
    other = Stack()
    assert other.size() == 0, "У каждого стека свои элементы"
    __task_passed__ = True
    print("✅ Стек реализован правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Stack называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ticket_price",
        title: "Цена билета в кино",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>ticket_price(age, weekend)</code>, которая возвращает цену билета в рублях:</p><ul><li>детям до 7 лет — бесплатно (<code>0</code>);</li><li>от 7 до 17 лет включительно — <code>150</code>;</li><li>от 65 лет — <code>100</code>;</li><li>всем остальным — <code>300</code>.</li></ul><p>Если <code>weekend</code> равно <code>True</code> (выходной), к платным билетам добавляется <code>50</code> рублей. Бесплатные остаются бесплатными.</p><strong>Пример:</strong><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>ticket_price(5, True) -> 0</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>ticket_price(12, False) -> 150</code><br><code style='background:rgba(0,0,0,0.05); padding:2px 5px; border-radius:4px;'>ticket_price(30, True) -> 350</code>",
        startCode: "def ticket_price(age, weekend):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert ticket_price(5, False) == 0, "Ребёнку 5 лет — бесплатно"
    assert ticket_price(5, True) == 0, "В выходной бесплатный билет остаётся бесплатным"
    assert ticket_price(7, False) == 150, "В 7 лет билет уже стоит 150"
    assert ticket_price(17, False) == 150, "В 17 лет — ещё детский билет, 150"
    assert ticket_price(18, False) == 300, "С 18 лет — взрослый билет, 300"
    assert ticket_price(64, False) == 300, "В 64 года — взрослый билет, 300"
    assert ticket_price(65, False) == 100, "С 65 лет — льготный билет, 100"
    assert ticket_price(30, True) == 350, "Взрослый в выходной: 300 + 50 = 350"
    assert ticket_price(12, True) == 200, "Школьник в выходной: 150 + 50 = 200"
    assert ticket_price(70, True) == 150, "Пенсионер в выходной: 100 + 50 = 150"
    __task_passed__ = True
    print("✅ Блестяще! Все тарифы и надбавка за выходной посчитаны верно.")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция ticket_price называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    }
];
