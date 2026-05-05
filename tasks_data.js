const tasks = [
    // ================= ЛЕГКИЙ УРОВЕНЬ (База) =================
    {
        id: "sum",
        title: "Сумма двух чисел",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>add(a, b)</code>, которая принимает два числа и возвращает их сумму.</p>",
        startCode: "def add(a, b):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n    print('✅ Тесты пройдены! Функция работает верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Функция вернула неверный результат.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "even",
        title: "Чётные числа",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>is_even(n)</code>. Она должна возвращать <code>True</code>, если число чётное, и <code>False</code>, если нечётное.</p>",
        startCode: "def is_even(n):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert is_even(4) == True\n    assert is_even(7) == False\n    assert is_even(0) == True\n    print('✅ Тесты пройдены! Функция работает верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Функция вернула неверный результат.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "greet",
        title: "Приветствие",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>greet(name)</code>, которая принимает имя и возвращает строку <code>\"Привет, [имя]!\"</code>.</p>",
        startCode: "def greet(name):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert greet('Иван') == 'Привет, Иван!'\n    assert greet('Python') == 'Привет, Python!'\n    print('✅ Тесты пройдены! Строка сформирована верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Строка приветствия не совпадает с ожидаемой.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },

    // ================= СРЕДНИЙ УРОВЕНЬ (Циклы и Списки) =================
    {
        id: "reverse",
        title: "Переворот строки",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>reverse_string(s)</code>, которая возвращает перевернутую строку.</p>",
        startCode: "def reverse_string(s):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert reverse_string('hello') == 'olleh'\n    assert reverse_string('python') == 'nohtyp'\n    print('✅ Тесты пройдены! Строка перевернута верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Строка перевернута неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "list_sum",
        title: "Сумма элементов списка",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>sum_list(numbers)</code>, которая возвращает сумму всех чисел в списке.</p>",
        startCode: "def sum_list(numbers):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert sum_list([1, 2, 3, 4]) == 10\n    assert sum_list([]) == 0\n    assert sum_list([-1, 1]) == 0\n    print('✅ Тесты пройдены! Сумма списка верна.')\nexcept AssertionError:\n    print('❌ Ошибка: Сумма посчитана неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "vowels",
        title: "Подсчет гласных",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>count_vowels(s)</code>, которая считает количество английских гласных (a, e, i, o, u) в строке.</p>",
        startCode: "def count_vowels(s):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert count_vowels('hello') == 2\n    assert count_vowels('python') == 1\n    assert count_vowels('apple') == 2\n    print('✅ Тесты пройдены! Гласные посчитаны верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Количество гласных неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },

    // ================= СЛОЖНЫЙ УРОВЕНЬ (Словари и Логика) =================
    {
        id: "word_freq",
        title: "Частота слов",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>word_frequency(text)</code>, которая принимает строку и возвращает словарь с частотой каждого слова.</p>",
        startCode: "def word_frequency(text):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    res = word_frequency('apple banana apple')\n    assert res == {'apple': 2, 'banana': 1}\n    print('✅ Тесты пройдены! Словарь частот верен.')\nexcept AssertionError:\n    print('❌ Ошибка: Словарь частот сформирован неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "palindrome",
        title: "Палиндром",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>is_palindrome(s)</code>, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны, игнорируя регистр).</p>",
        startCode: "def is_palindrome(s):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert is_palindrome('Level') == True\n    assert is_palindrome('Hello') == False\n    print('✅ Тесты пройдены! Проверка палиндрома верна.')\nexcept AssertionError:\n    print('❌ Ошибка: Проверка палиндрома неверна.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },

    // ================= ОЧЕНЬ СЛОЖНЫЙ (ООП и Алгоритмы) =================
    {
        id: "oop_bank",
        title: "Класс Банковский Счет",
        difficulty: "hard",
        desc: "<p>Создайте класс <code>BankAccount</code> с атрибутом <code>balance</code> и методами <code>deposit(amount)</code> и <code>withdraw(amount)</code>.</p>",
        startCode: "class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def deposit(self, amount):\n        pass\n\n    def withdraw(self, amount):\n        pass\n",
        testCode: "try:\n    acc = BankAccount(100)\n    acc.deposit(50)\n    assert acc.balance == 150\n    acc.withdraw(30)\n    assert acc.balance == 120\n    print('✅ Тесты пройдены! Класс работает корректно.')\nexcept AssertionError:\n    print('❌ Ошибка: Баланс считается неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "fibonacci",
        title: "Числа Фибоначчи",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>fib(n)</code>, которая возвращает n-ое число Фибоначчи (начиная с 0, 1, 1, 2, 3...).</p>",
        startCode: "def fib(n):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert fib(0) == 0\n    assert fib(1) == 1\n    assert fib(5) == 5\n    assert fib(10) == 55\n    print('✅ Тесты пройдены! Алгоритм Фибоначчи верен.')\nexcept AssertionError:\n    print('❌ Ошибка: Число Фибоначчи рассчитано неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    }
];
