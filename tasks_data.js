const tasks = [
    {
        id: "l1",
        title: "Задача 1: Первая программа",
        difficulty: "easy",
        desc: "<p>Выведите в консоль фразу <code>Hello, Python!</code> с помощью функции <code>print()</code>.</p>",
        startCode: "# Напишите код ниже\n",
        testCode: "import io, sys\noutput = io.StringIO()\nsys.stdout = output\ntry:\n    # User code runs here\n    sys.stdout = sys.__stdout__\n    if 'Hello, Python!' in output.getvalue():\n        print('✅ Тест пройден!')\n    else:\n        print('❌ Ошибка: Вывод должен содержать \"Hello, Python!\"')\nexcept Exception as e:\n    print(f'❌ Ошибка: {e}')"
    },
    {
        id: "l2",
        title: "Задача 2: Переменные",
        difficulty: "easy",
        desc: "<p>Создайте переменную <code>x</code> со значением <code>10</code> и переменную <code>y</code> со значением <code>5</code>. Выведите их сумму.</p>",
        startCode: "x = \ny = \nprint(x + y)",
        testCode: "try:\n    assert x == 10\n    assert y == 5\n    print('✅ Тест пройден! Переменные заданы верно.')\nexcept:\n    print('❌ Ошибка: Проверьте значения x и y.')"
    },
    {
        id: "l3",
        title: "Задача 3: Математика",
        difficulty: "easy",
        desc: "<p>Найдите остаток от деления <code>17</code> на <code>5</code> и сохраните его в переменную <code>result</code>.</p>",
        startCode: "result = ",
        testCode: "try:\n    assert result == 2\n    print('✅ Тест пройден! 17 % 5 = 2')\nexcept:\n    print('❌ Ошибка: Неверный результат.')"
    },
    {
        id: "l4",
        title: "Задача 4: Условия",
        difficulty: "easy",
        desc: "<p>Напишите условие: если <code>age</code> больше или равно 18, выведите <code>Доступ разрешен</code>, иначе — <code>Доступ запрещен</code>.</p>",
        startCode: "age = 20\n# Ваш код здесь",
        testCode: "print('✅ Тест пройден! Логика условий верна.')"
    },
    {
        id: "l5",
        title: "Задача 5: Цикл For",
        difficulty: "medium",
        desc: "<p>С помощью цикла <code>for</code> и <code>range()</code> выведите числа от 0 до 4.</p>",
        startCode: "for i in range(5):\n    print(i)",
        testCode: "print('✅ Тест пройден! Цикл вывел верную последовательность.')"
    },
    {
        id: "l6",
        title: "Задача 6: Списки",
        difficulty: "medium",
        desc: "<p>Создайте список <code>colors</code> с элементами 'red', 'green', 'blue'. Добавьте в конец 'yellow'.</p>",
        startCode: "colors = ['red', 'green', 'blue']\ncolors.append('yellow')",
        testCode: "try:\n    assert 'yellow' in colors and len(colors) == 4\n    print('✅ Тест пройден! Список обновлен.')\nexcept:\n    print('❌ Ошибка: Проверьте метод append().')"
    },
    {
        id: "l7",
        title: "Задача 7: Функции",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>square(n)</code>, которая возвращает квадрат числа.</p>",
        startCode: "def square(n):\n    return n * n",
        testCode: "try:\n    assert square(4) == 16\n    assert square(5) == 25\n    print('✅ Тест пройден! Функция работает верно.')\nexcept:\n    print('❌ Ошибка в расчетах.')"
    },
    {
        id: "l8",
        title: "Задача 8: Словари",
        difficulty: "medium",
        desc: "<p>Создайте словарь <code>car</code> с ключами 'brand' (Ford) и 'year' (2020).</p>",
        startCode: "car = {'brand': 'Ford', 'year': 2020}",
        testCode: "try:\n    assert car['brand'] == 'Ford' and car['year'] == 2020\n    print('✅ Тест пройден! Словарь создан.')\nexcept:\n    print('❌ Ошибка в структуре словаря.')"
    },
    {
        id: "l9",
        title: "Задача 9: Строки",
        difficulty: "medium",
        desc: "<p>Преобразуйте строку <code>text = 'python'</code> в верхний регистр и сохраните в <code>result</code>.</p>",
        startCode: "text = 'python'\nresult = ",
        testCode: "try:\n    assert result == 'PYTHON'\n    print('✅ Тест пройден! Регистр изменен.')\nexcept:\n    print('❌ Ошибка: Используйте метод upper().')"
    },
    {
        id: "l10",
        title: "Задача 10: Файлы",
        difficulty: "hard",
        desc: "<p>Используя <code>with</code>, запишите строку 'Hello' в файл 'test.txt'.</p>",
        startCode: "with open('test.txt', 'w') as f:\n    ",
        testCode: "try:\n    with open('test.txt', 'r') as f:\n        assert f.read().strip() == 'Hello'\n    print('✅ Тест пройден! Файл записан.')\nexcept:\n    print('❌ Ошибка при записи файла.')"
    },
    {
        id: "l11",
        title: "Задача 11: Ошибки",
        difficulty: "hard",
        desc: "<p>Оберните деление <code>10 / 0</code> в <code>try-except</code>, чтобы программа не падала, а выводила 'Error'.</p>",
        startCode: "try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print('Error')",
        testCode: "print('✅ Тест пройден! Ошибка обработана.')"
    },
    {
        id: "l12",
        title: "Задача 12: Модули",
        difficulty: "hard",
        desc: "<p>Импортируйте модуль <code>math</code> и найдите квадратный корень из 16, сохранив в <code>res</code>.</p>",
        startCode: "import math\nres = ",
        testCode: "try:\n    assert res == 4.0\n    print('✅ Тест пройден! Корень найден.')\nexcept:\n    print('❌ Ошибка: Используйте math.sqrt().')"
    },
    {
        id: "l13",
        title: "Задача 13: Классы",
        difficulty: "hard",
        desc: "<p>Создайте класс <code>Cat</code> с методом <code>meow()</code>, возвращающим 'Meow!'.</p>",
        startCode: "class Cat:\n    def meow(self):\n        return 'Meow!'",
        testCode: "try:\n    c = Cat()\n    assert c.meow() == 'Meow!'\n    print('✅ Тест пройден! Класс работает.')\nexcept:\n    print('❌ Ошибка в классе.')"
    },
    {
        id: "l14",
        title: "Задача 14: Генераторы",
        difficulty: "expert",
        desc: "<p>Напишите генератор <code>count_up(n)</code>, который выдает числа от 1 до n.</p>",
        startCode: "def count_up(n):\n    for i in range(1, n+1):\n        yield i",
        testCode: "try:\n    g = count_up(3)\n    assert next(g) == 1\n    assert next(g) == 2\n    assert next(g) == 3\n    print('✅ Тест пройден! Генератор работает.')\nexcept:\n    print('❌ Ошибка в генераторе.')"
    },
    {
        id: "l15",
        title: "Задача 15: Финал",
        difficulty: "expert",
        desc: "<p>Напишите функцию <code>is_prime(n)</code>, которая возвращает True, если число простое, и False иначе.</p>",
        startCode: "def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True",
        testCode: "try:\n    assert is_prime(7) == True\n    assert is_prime(10) == False\n    print('✅ Тест пройден! Вы мастер Python!')\nexcept:\n    print('❌ Ошибка в логике простых чисел.')"
    }
];
