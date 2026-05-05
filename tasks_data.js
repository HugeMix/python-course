const tasks = [
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
        testCode: "try:\n    assert is_even(4) == True\n    assert is_even(7) == False\n    print('✅ Тесты пройдены! Функция работает верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Функция вернула неверный результат.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "max",
        title: "Поиск максимума",
        difficulty: "easy",
        desc: "<p>Напишите функцию <code>find_max(a, b)</code>, которая возвращает наибольшее из двух чисел. Не используйте встроенную функцию <code>max()</code>.</p>",
        startCode: "def find_max(a, b):\n    # Ваш код\n    pass\n",
        testCode: "try:\n    assert find_max(10, 5) == 10\n    assert find_max(-5, -2) == -2\n    print('✅ Тесты пройдены! Функция работает верно.')\nexcept AssertionError:\n    print('❌ Ошибка: Функция вернула неверный результат.')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    }
];
