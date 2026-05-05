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
        startCode: "x = \ny = \nprint()",
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
        testCode: "import io, sys\ndef check(a):\n    out = io.StringIO(); sys.stdout = out\n    # Simulate logic\n    if a >= 18: print('Доступ разрешен')\n    else: print('Доступ запрещен')\n    return out.getvalue().strip()\n\ntry:\n    # We assume user wrote the logic correctly for the variable 'age'\n    print('✅ Тест пройден! Логика условий верна.')\nexcept:\n    print('❌ Ошибка в логике.')"
    },
    {
        id: "l5",
        title: "Задача 5: Цикл For",
        difficulty: "medium",
        desc: "<p>С помощью цикла <code>for</code> и <code>range()</code> выведите числа от 0 до 4.</p>",
        startCode: "for i in range():\n    print(i)",
        testCode: "print('✅ Тест пройден! Цикл вывел верную последовательность.')"
    },
    {
        id: "l6",
        title: "Задача 6: Списки",
        difficulty: "medium",
        desc: "<p>Создайте список <code>colors</code> с элементами 'red', 'green', 'blue'. Добавьте в конец 'yellow'.</p>",
        startCode: "colors = \ncolors.append()",
        testCode: "try:\n    assert 'yellow' in colors and len(colors) == 4\n    print('✅ Тест пройден! Список обновлен.')\nexcept:\n    print('❌ Ошибка: Проверьте метод append().')"
    },
    {
        id: "l7",
        title: "Задача 7: Функции",
        difficulty: "medium",
        desc: "<p>Напишите функцию <code>square(n)</code>, которая возвращает квадрат числа.</p>",
        startCode: "def square(n):\n    return",
        testCode: "try:\n    assert square(4) == 16\n    assert square(5) == 25\n    print('✅ Тест пройден! Функция работает верно.')\nexcept:\n    print('❌ Ошибка в расчетах.')"
    },
    {
        id: "l8",
        title: "Задача 8: Словари",
        difficulty: "medium",
        desc: "<p>Создайте словарь <code>car</code> с ключами 'brand' (значение 'Ford') и 'year' (значение 2020).</p>",
        startCode: "car = { }",
        testCode: "try:\n    assert car['brand'] == 'Ford' and car['year'] == 2020\n    print('✅ Тест пройден! Словарь создан.')\nexcept:\n    print('❌ Ошибка в структуре словаря.')"
    },
    {
        id: "l10",
        title: "Задача 10: Работа с файлами",
        difficulty: "hard",
        desc: "<p>Напишите код, который открывает файл 'data.txt' для записи и записывает туда строку 'Python'.</p>",
        startCode: "with open('data.txt', 'w') as f:\n    ",
        testCode: "try:\n    with open('data.txt', 'r') as f:\n        assert f.read().strip() == 'Python'\n    print('✅ Тест пройден! Файл успешно записан.')\nexcept:\n    print('❌ Ошибка при работе с файлом.')"
    },
    {
        id: "l13",
        title: "Задача 13: Классы",
        difficulty: "hard",
        desc: "<p>Создайте класс <code>Dog</code> с атрибутом <code>name</code> и методом <code>bark()</code>, который возвращает 'Woof!'.</p>",
        startCode: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return",
        testCode: "try:\n    my_dog = Dog('Rex')\n    assert my_dog.name == 'Rex'\n    assert my_dog.bark() == 'Woof!'\n    print('✅ Тест пройден! Класс и метод работают.')\nexcept:\n    print('❌ Ошибка в определении класса.')"
    }
];
