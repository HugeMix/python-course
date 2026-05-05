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
        id: "vowels",
        title: "Подсчет гласных",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>count_vowels(s)</code>, которая считает количество английских гласных (a, e, i, o, u) в строке.</p>",
        startCode: "def count_vowels(s):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert count_vowels('hello') == 2\n    assert count_vowels('python') == 1\n    assert count_vowels('apple') == 2\n    print('✅ Тесты пройдены! Гласные посчитаны верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Количество гласных неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },

    // ================= СЛОЖНЫЙ УРОВЕНЬ (Алгоритмы) =================
    {
        id: "palindrome",
        title: "Палиндром",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>is_palindrome(s)</code>, которая проверяет, является ли строка палиндромом (читается одинаково в обе стороны, игнорируя регистр).</p>",
        startCode: "def is_palindrome(s):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert is_palindrome('Level') == True\n    assert is_palindrome('Hello') == False\n    print('✅ Тесты пройдены! Проверка палиндрома верна.')\nexcept AssertionError:\n    print('❌ Ошибка: Проверка палиндрома неверна.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "fibonacci",
        title: "Числа Фибоначчи",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>fib(n)</code>, которая возвращает n-ое число Фибоначчи (начиная с 0, 1, 1, 2, 3...).</p>",
        startCode: "def fib(n):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert fib(0) == 0\n    assert fib(1) == 1\n    assert fib(5) == 5\n    assert fib(10) == 55\n    print('✅ Тесты пройдены! Алгоритм Фибоначчи верен.')\nexcept AssertionError:\n    print('❌ Ошибка: Число Фибоначчи рассчитано неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },

    // ================= ЭКСПЕРТНЫЙ УРОВЕНЬ (ООП и Структуры) =================
    {
        id: "expert_decorator",
        title: "Декоратор-счетчик",
        difficulty: "hard",
        desc: "<p>Напишите декоратор <code>count_calls</code>, который считает, сколько раз была вызвана функция. Количество вызовов должно храниться в атрибуте <code>calls</code> декорированной функции.</p>",
        startCode: "def count_calls(func):\n    def wrapper(*args, **kwargs):\n        wrapper.calls += 1\n        return func(*args, **kwargs)\n    wrapper.calls = 0\n    return wrapper\n",
        testCode: "try:\n    @count_calls\n    def test(): pass\n    test(); test(); test()\n    assert test.calls == 3\n    print('✅ Тесты пройдены! Декоратор работает верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Счетчик вызовов работает неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "expert_unique",
        title: "Уникальные элементы в порядке",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>unique_in_order(iterable)</code>, которая возвращает список элементов без идущих подряд дубликатов, сохраняя исходный порядок.</p>",
        startCode: "def unique_in_order(iterable):\n    # Пример: 'AAAABBBCCDAABBB' -> ['A', 'B', 'C', 'D', 'A', 'B']\n    pass\n",
        testCode: "try:\n    assert unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']\n    assert unique_in_order([1, 2, 2, 3, 3]) == [1, 2, 3]\n    print('✅ Тесты пройдены! Дубликаты удалены верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Результат не совпадает с ожидаемым.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "expert_flat",
        title: "Выравнивание списка",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>flatten(nested_list)</code>, которая принимает список со вложенными списками любой глубины и возвращает один плоский список.</p>",
        startCode: "def flatten(nested_list):\n    # Пример: [1, [2, [3, 4], 5]] -> [1, 2, 3, 4, 5]\n    pass\n",
        testCode: "try:\n    assert flatten([1, [2, [3, 4], 5]]) == [1, 2, 3, 4, 5]\n    assert flatten([[[]]]) == []\n    print('✅ Тесты пройдены! Список выровнен верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Алгоритм выравнивания работает неверно.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "expert_primes",
        title: "Решето Эратосфена",
        difficulty: "hard",
        desc: "<p>Напишите функцию <code>get_primes(n)</code>, которая возвращает список всех простых чисел до <code>n</code> включительно.</p>",
        startCode: "def get_primes(n):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert get_primes(10) == [2, 3, 5, 7]\n    assert get_primes(20) == [2, 3, 5, 7, 11, 13, 17, 19]\n    print('✅ Тесты пройдены! Простые числа найдены верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Список простых чисел неверен.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    }
];
