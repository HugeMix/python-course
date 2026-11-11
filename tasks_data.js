// Задачи курса. lesson — номер урока (тема), hw — задача входит в домашнее задание урока.
// kind: "io" — задача «ввод → вывод»: программа читает input() и печатает ответ, проверка по cases.
const tasks = [
    {
        id: "io_hello",
        title: "Привет, мир!",
        difficulty: "easy",
        lesson: 1,
        hw: true,
        desc: "<p>Напишите программу, которая выводит на экран ровно одну строку: <strong>Привет, мир!</strong></p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">(ничего не вводится)</code></div><div><span>Вывод</span><code class=\"io-box\">Привет, мир!</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "", "out": "Привет, мир!"}]
    },
    {
        id: "io_card",
        title: "Визитка",
        difficulty: "easy",
        lesson: 1,
        hw: true,
        desc: "<p>Выведите визитку из трёх строк — точно как в примере: имя, язык и уровень.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">(ничего не вводится)</code></div><div><span>Вывод</span><code class=\"io-box\">Имя: Питон\nЯзык: Python\nУровень: новичок</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "", "out": "Имя: Питон\nЯзык: Python\nУровень: новичок"}]
    },
    {
        id: "io_tree",
        title: "Ёлочка",
        difficulty: "medium",
        lesson: 1,
        hw: true,
        desc: "<p>Нарисуйте ёлочку из звёздочек: в первой строке одна <code>*</code>, во второй — три, в третьей — пять, а в последней строке — ствол <code>|</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">(ничего не вводится)</code></div><div><span>Вывод</span><code class=\"io-box\">*\n***\n*****\n|</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "", "out": "*\n***\n*****\n|"}]
    },
    {
        id: "io_greet_name",
        title: "Приветствие по имени",
        difficulty: "easy",
        lesson: 2,
        hw: true,
        desc: "<p>Программа получает имя через <code>input()</code>. Выведите <strong>Привет, ИМЯ!</strong></p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">Аня</code></div><div><span>Вывод</span><code class=\"io-box\">Привет, Аня!</code></div></div>",
        startCode: "name = input()\n\n# выведите приветствие\n",
        kind: "io",
        cases: [{"in": "Аня", "out": "Привет, Аня!"}, {"in": "Python", "out": "Привет, Python!"}]
    },
    {
        id: "io_sum_two",
        title: "Сумма двух чисел",
        difficulty: "easy",
        lesson: 2,
        hw: true,
        desc: "<p>Программа получает два целых числа, каждое на своей строке. Выведите их сумму.</p><p>Не забудьте: <code>input()</code> возвращает текст, его нужно превратить в число через <code>int()</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">2\n3</code></div><div><span>Вывод</span><code class=\"io-box\">5</code></div></div>",
        startCode: "a = int(input())\nb = int(input())\n\n# выведите сумму\n",
        kind: "io",
        cases: [{"in": "2\n3", "out": "5"}, {"in": "-10\n4", "out": "-6"}, {"in": "100\n250", "out": "350"}]
    },
    {
        id: "io_age_future",
        title: "Возраст через 10 лет",
        difficulty: "easy",
        lesson: 2,
        hw: true,
        desc: "<p>Программа получает возраст человека. Выведите фразу <strong>Через 10 лет вам будет N</strong>, где N — возраст через 10 лет.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">15</code></div><div><span>Вывод</span><code class=\"io-box\">Через 10 лет вам будет 25</code></div></div>",
        startCode: "age = int(input())\n\n# выведите фразу\n",
        kind: "io",
        cases: [{"in": "15", "out": "Через 10 лет вам будет 25"}, {"in": "42", "out": "Через 10 лет вам будет 52"}]
    },
    {
        id: "io_profile",
        title: "Анкета",
        difficulty: "medium",
        lesson: 2,
        hw: true,
        desc: "<p>Программа получает три строки: имя, год рождения и год в будущем. Выведите: <strong>ИМЯ, в ГОД году вам исполнится N</strong>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">Аня\n2010\n2030</code></div><div><span>Вывод</span><code class=\"io-box\">Аня, в 2030 году вам исполнится 20</code></div></div>",
        startCode: "name = input()\nborn = int(input())\nyear = int(input())\n\n# выведите фразу\n",
        kind: "io",
        cases: [{"in": "Аня\n2010\n2030", "out": "Аня, в 2030 году вам исполнится 20"}, {"in": "Игорь\n1990\n2040", "out": "Игорь, в 2040 году вам исполнится 50"}]
    },
    {
        id: "io_candies",
        title: "Конфеты поровну",
        difficulty: "easy",
        lesson: 3,
        hw: true,
        desc: "<p>Программа получает два числа: сколько конфет и сколько детей. Конфеты делят поровну, целиком. Выведите <strong>Каждому: X, осталось: Y</strong>.</p><p>Подсказка: <code>//</code> — деление нацело, <code>%</code> — остаток.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">17\n5</code></div><div><span>Вывод</span><code class=\"io-box\">Каждому: 3, осталось: 2</code></div></div>",
        startCode: "candies = int(input())\nkids = int(input())\n\n# выведите результат\n",
        kind: "io",
        cases: [{"in": "17\n5", "out": "Каждому: 3, осталось: 2"}, {"in": "20\n4", "out": "Каждому: 5, осталось: 0"}, {"in": "3\n7", "out": "Каждому: 0, осталось: 3"}]
    },
    {
        id: "io_last_digit",
        title: "Последняя цифра числа",
        difficulty: "easy",
        lesson: 3,
        hw: true,
        desc: "<p>Программа получает целое неотрицательное число. Выведите его последнюю цифру.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">1234</code></div><div><span>Вывод</span><code class=\"io-box\">4</code></div></div>",
        startCode: "n = int(input())\n\n# выведите последнюю цифру\n",
        kind: "io",
        cases: [{"in": "1234", "out": "4"}, {"in": "7", "out": "7"}, {"in": "90", "out": "0"}]
    },
    {
        id: "io_minutes",
        title: "Часы и минуты",
        difficulty: "medium",
        lesson: 3,
        hw: true,
        desc: "<p>Программа получает количество минут. Переведите их в часы и минуты и выведите <strong>X ч Y мин</strong>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">125</code></div><div><span>Вывод</span><code class=\"io-box\">2 ч 5 мин</code></div></div>",
        startCode: "total = int(input())\n\n# выведите часы и минуты\n",
        kind: "io",
        cases: [{"in": "125", "out": "2 ч 5 мин"}, {"in": "60", "out": "1 ч 0 мин"}, {"in": "45", "out": "0 ч 45 мин"}, {"in": "1440", "out": "24 ч 0 мин"}]
    },
    {
        id: "io_coins",
        title: "Сдача монетами",
        difficulty: "hard",
        lesson: 3,
        hw: true,
        desc: "<p>Программа получает сумму в рублях. Выдайте её монетами 10, 5, 2 и 1 рубль так, чтобы монет было как можно меньше: сначала берите самые крупные. Выведите четыре строки: сколько монет каждого номинала.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">38</code></div><div><span>Вывод</span><code class=\"io-box\">10: 3\n5: 1\n2: 1\n1: 1</code></div></div>",
        startCode: "amount = int(input())\n\n# посчитайте монеты\n",
        kind: "io",
        cases: [{"in": "38", "out": "10: 3\n5: 1\n2: 1\n1: 1"}, {"in": "7", "out": "10: 0\n5: 1\n2: 1\n1: 0"}, {"in": "20", "out": "10: 2\n5: 0\n2: 0\n1: 0"}]
    },
    {
        id: "io_sign",
        title: "Знак числа",
        difficulty: "easy",
        lesson: 4,
        hw: true,
        desc: "<p>Программа получает целое число. Выведите <strong>положительное</strong>, <strong>отрицательное</strong> или <strong>ноль</strong>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5</code></div><div><span>Вывод</span><code class=\"io-box\">положительное</code></div></div>",
        startCode: "n = int(input())\n\n# напишите условие\n",
        kind: "io",
        cases: [{"in": "5", "out": "положительное"}, {"in": "-3", "out": "отрицательное"}, {"in": "0", "out": "ноль"}]
    },
    {
        id: "io_min3",
        title: "Наименьшее из трёх",
        difficulty: "easy",
        lesson: 4,
        hw: true,
        desc: "<p>Программа получает три целых числа, каждое на своей строке. Выведите наименьшее. Функцию <code>min()</code> не используйте — только условия.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5\n2\n8</code></div><div><span>Вывод</span><code class=\"io-box\">2</code></div></div>",
        startCode: "a = int(input())\nb = int(input())\nc = int(input())\n\n# найдите наименьшее\n",
        kind: "io",
        cases: [{"in": "5\n2\n8", "out": "2"}, {"in": "-1\n-7\n0", "out": "-7"}, {"in": "3\n3\n3", "out": "3"}, {"in": "9\n8\n1", "out": "1"}, {"in": "1\n8\n9", "out": "1"}]
    },
    {
        id: "io_leap",
        title: "Високосный год",
        difficulty: "medium",
        lesson: 4,
        hw: true,
        desc: "<p>Программа получает год. Выведите <strong>високосный</strong> или <strong>обычный</strong>.</p><p>Правило: год високосный, если делится на 4, но годы, которые делятся на 100, високосные только если делятся ещё и на 400.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">2024</code></div><div><span>Вывод</span><code class=\"io-box\">високосный</code></div></div>",
        startCode: "year = int(input())\n\n# напишите условие\n",
        kind: "io",
        cases: [{"in": "2024", "out": "високосный"}, {"in": "2023", "out": "обычный"}, {"in": "1900", "out": "обычный"}, {"in": "2000", "out": "високосный"}]
    },
    {
        id: "io_ticket",
        title: "Цена билета в кино",
        difficulty: "hard",
        lesson: 4,
        hw: true,
        desc: "<p>Программа получает возраст и ответ <code>да</code> или <code>нет</code> — выходной ли сегодня. Выведите цену билета:</p><ul><li>до 7 лет — 0;</li><li>от 7 до 17 лет включительно — 150;</li><li>от 65 лет — 100;</li><li>остальным — 300.</li></ul><p>В выходной к платным билетам добавляется 50. Бесплатные остаются бесплатными.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">30\nда</code></div><div><span>Вывод</span><code class=\"io-box\">350</code></div></div>",
        startCode: "age = int(input())\nweekend = input()\n\n# посчитайте цену\n",
        kind: "io",
        cases: [{"in": "30\nда", "out": "350"}, {"in": "5\nда", "out": "0"}, {"in": "12\nнет", "out": "150"}, {"in": "17\nда", "out": "200"}, {"in": "70\nнет", "out": "100"}, {"in": "18\nнет", "out": "300"}]
    },
    {
        id: "io_countdown",
        title: "Обратный отсчёт",
        difficulty: "easy",
        lesson: 5,
        hw: true,
        desc: "<p>Программа получает число N. Выведите числа от N до 1, каждое на своей строке, а затем слово <strong>Старт!</strong></p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">3</code></div><div><span>Вывод</span><code class=\"io-box\">3\n2\n1\nСтарт!</code></div></div>",
        startCode: "n = int(input())\n\n# напишите цикл\n",
        kind: "io",
        cases: [{"in": "3", "out": "3\n2\n1\nСтарт!"}, {"in": "1", "out": "1\nСтарт!"}, {"in": "5", "out": "5\n4\n3\n2\n1\nСтарт!"}]
    },
    {
        id: "io_sum_to_n",
        title: "Сумма от 1 до N",
        difficulty: "easy",
        lesson: 5,
        hw: true,
        desc: "<p>Программа получает число N. Сложите все числа от 1 до N включительно и выведите сумму. Используйте цикл.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5</code></div><div><span>Вывод</span><code class=\"io-box\">15</code></div></div>",
        startCode: "n = int(input())\ntotal = 0\n\n# напишите цикл\n",
        kind: "io",
        cases: [{"in": "5", "out": "15"}, {"in": "1", "out": "1"}, {"in": "100", "out": "5050"}]
    },
    {
        id: "io_mult_table",
        title: "Таблица умножения",
        difficulty: "medium",
        lesson: 5,
        hw: true,
        desc: "<p>Программа получает число N. Выведите таблицу умножения N на числа от 1 до 10 в формате <strong>N x i = результат</strong>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">7</code></div><div><span>Вывод</span><code class=\"io-box\">7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70</code></div></div>",
        startCode: "n = int(input())\n\n# напишите цикл\n",
        kind: "io",
        cases: [{"in": "7", "out": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"}, {"in": "2", "out": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20"}]
    },
    {
        id: "io_digits_count",
        title: "Сколько цифр в числе",
        difficulty: "hard",
        lesson: 5,
        hw: true,
        desc: "<p>Программа получает целое число (может быть отрицательным). Выведите, сколько в нём цифр. Решите задачу циклом <code>while</code>: отрезайте последнюю цифру через <code>// 10</code>, пока число не станет нулём.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">12345</code></div><div><span>Вывод</span><code class=\"io-box\">5</code></div></div>",
        startCode: "n = int(input())\n\n# посчитайте цифры циклом while\n",
        kind: "io",
        cases: [{"in": "12345", "out": "5"}, {"in": "7", "out": "1"}, {"in": "0", "out": "1"}, {"in": "-904", "out": "3"}, {"in": "1000000", "out": "7"}]
    },
    {
        id: "io_list_max",
        title: "Самое большое число",
        difficulty: "easy",
        lesson: 6,
        hw: true,
        desc: "<p>Программа получает число N, а потом N целых чисел — каждое на своей строке. Сложите их в список и выведите самое большое.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">4\n3\n9\n-2\n5</code></div><div><span>Вывод</span><code class=\"io-box\">9</code></div></div>",
        startCode: "n = int(input())\nnumbers = []\nfor i in range(n):\n    numbers.append(int(input()))\n\n# выведите самое большое\n",
        kind: "io",
        cases: [{"in": "4\n3\n9\n-2\n5", "out": "9"}, {"in": "1\n-5", "out": "-5"}, {"in": "3\n-7\n-1\n-3", "out": "-1"}]
    },
    {
        id: "io_average",
        title: "Средний балл",
        difficulty: "medium",
        lesson: 6,
        hw: true,
        desc: "<p>Программа получает число N, а потом N оценок. Выведите <strong>Средний балл: X</strong>, где X — среднее, округлённое до 1 знака после запятой: <code>round(x, 1)</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">3\n5\n4\n4</code></div><div><span>Вывод</span><code class=\"io-box\">Средний балл: 4.3</code></div></div>",
        startCode: "n = int(input())\ngrades = []\n\n# прочитайте оценки и посчитайте среднее\n",
        kind: "io",
        cases: [{"in": "3\n5\n4\n4", "out": "Средний балл: 4.3"}, {"in": "2\n5\n5", "out": "Средний балл: 5.0"}, {"in": "4\n3\n4\n5\n2", "out": "Средний балл: 3.5"}]
    },
    {
        id: "io_reverse_list",
        title: "Список задом наперёд",
        difficulty: "medium",
        lesson: 6,
        hw: true,
        desc: "<p>Программа получает число N, а потом N слов. Выведите слова в обратном порядке, каждое на своей строке.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">3\nраз\nдва\nтри</code></div><div><span>Вывод</span><code class=\"io-box\">три\nдва\nраз</code></div></div>",
        startCode: "n = int(input())\nwords = []\n\n# прочитайте слова и выведите их задом наперёд\n",
        kind: "io",
        cases: [{"in": "3\nраз\nдва\nтри", "out": "три\nдва\nраз"}, {"in": "1\nPython", "out": "Python"}]
    },
    {
        id: "io_above_avg",
        title: "Выше среднего",
        difficulty: "hard",
        lesson: 6,
        hw: true,
        desc: "<p>Программа получает число N, а потом N целых чисел. Выведите (каждое на своей строке, в исходном порядке) те числа, которые <strong>больше среднего</strong>. Если таких нет — выведите <strong>Нет</strong>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5\n1\n2\n3\n4\n5</code></div><div><span>Вывод</span><code class=\"io-box\">4\n5</code></div></div>",
        startCode: "n = int(input())\nnumbers = []\n\n# ваш код\n",
        kind: "io",
        cases: [{"in": "5\n1\n2\n3\n4\n5", "out": "4\n5"}, {"in": "3\n7\n7\n7", "out": "Нет"}, {"in": "4\n10\n1\n1\n1", "out": "10"}]
    },
    {
        id: "square",
        title: "Квадрат числа",
        difficulty: "easy",
        lesson: 7,
        hw: true,
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
        lesson: 7,
        hw: true,
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
        id: "factorial",
        title: "Факториал",
        difficulty: "medium",
        lesson: 7,
        hw: true,
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
        id: "is_prime",
        title: "Простое число",
        difficulty: "hard",
        lesson: 7,
        hw: true,
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
        id: "sum",
        title: "Сумма двух чисел",
        difficulty: "easy",
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        id: "last_digit",
        title: "Последняя цифра",
        difficulty: "easy",
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
    {
        id: "list_sum",
        title: "Сумма списка",
        difficulty: "medium",
        lesson: 7,
        hw: false,
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
        id: "count_even",
        title: "Сколько чётных",
        difficulty: "medium",
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        id: "unique",
        title: "Убрать повторы",
        difficulty: "medium",
        lesson: 7,
        hw: false,
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
        lesson: 7,
        hw: false,
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
        id: "table_row",
        title: "Строка таблицы умножения",
        difficulty: "medium",
        lesson: 7,
        hw: false,
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
        id: "is_leap",
        title: "Високосный год",
        difficulty: "medium",
        lesson: 7,
        hw: false,
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
    {
        id: "fibonacci",
        title: "Числа Фибоначчи",
        difficulty: "hard",
        lesson: 7,
        hw: false,
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
        id: "flatten",
        title: "Выпрямить список (рекурсия)",
        difficulty: "hard",
        lesson: 7,
        hw: false,
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
        id: "ticket_price",
        title: "Цена билета в кино",
        difficulty: "hard",
        lesson: 7,
        hw: false,
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
    },
    {
        id: "menu_price",
        title: "Цена по меню",
        difficulty: "easy",
        lesson: 8,
        hw: true,
        desc: "<p>Напишите функцию <code>price(menu, item)</code>. <code>menu</code> — словарь «блюдо → цена». Верните цену блюда <code>item</code>, а если такого блюда нет — <code>0</code>.</p><p>Подсказка: метод <code>get()</code> умеет возвращать значение по умолчанию.</p>",
        startCode: "def price(menu, item):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    menu = {"чай": 50, "кофе": 120}
    assert price(menu, "кофе") == 120, "Кофе стоит 120"
    assert price(menu, "пицца") == 0, "Если блюда нет в меню, нужно вернуть 0"
    assert price({}, "чай") == 0, "Пустое меню — 0"
    __task_passed__ = True
    print("✅ Метод get() — ваш друг!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция price называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "unique_dict",
        title: "Словарь возрастов",
        difficulty: "medium",
        lesson: 8,
        hw: true,
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
        id: "invert_dict",
        title: "Перевернуть словарь",
        difficulty: "medium",
        lesson: 8,
        hw: true,
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
        id: "count_words",
        title: "Частота слов",
        difficulty: "hard",
        lesson: 8,
        hw: true,
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
        id: "shout",
        title: "Громкий голос",
        difficulty: "easy",
        lesson: 9,
        hw: true,
        desc: "<p>Напишите функцию <code>shout(text)</code>, которая возвращает текст заглавными буквами с восклицательным знаком в конце.</p><p>Пример: <code>shout(\"привет\")</code> → <code>\"ПРИВЕТ!\"</code></p>",
        startCode: "def shout(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert shout("привет") == "ПРИВЕТ!", "shout('привет') должно вернуть 'ПРИВЕТ!'"
    assert shout("Python") == "PYTHON!", "Должно получиться PYTHON!"
    assert shout("") == "!", "Для пустой строки — просто !"
    __task_passed__ = True
    print("✅ Методы строк освоены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция shout называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "reverse",
        title: "Перевернуть текст",
        difficulty: "medium",
        lesson: 9,
        hw: true,
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
        id: "palindrome",
        title: "Палиндром",
        difficulty: "medium",
        lesson: 9,
        hw: true,
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
        id: "caesar",
        title: "Шифр Цезаря",
        difficulty: "hard",
        lesson: 9,
        hw: true,
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
        id: "count_vowels",
        title: "Подсчет гласных",
        difficulty: "medium",
        lesson: 9,
        hw: false,
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
        id: "title_case",
        title: "Каждое слово с заглавной",
        difficulty: "medium",
        lesson: 9,
        hw: false,
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
        id: "longest_word",
        title: "Самое длинное слово",
        difficulty: "medium",
        lesson: 9,
        hw: false,
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
        id: "count_letter",
        title: "Сколько раз буква",
        difficulty: "medium",
        lesson: 9,
        hw: false,
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
        id: "anagram",
        title: "Анаграммы",
        difficulty: "hard",
        lesson: 9,
        hw: false,
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
        id: "save_and_read",
        title: "Записать и прочитать",
        difficulty: "easy",
        lesson: 10,
        hw: true,
        desc: "<p>Напишите функцию <code>write_and_read(filename, text)</code>: запишите <code>text</code> в файл <code>filename</code>, затем прочитайте файл и верните его содержимое.</p><p>Используйте <code>with open(...)</code> и <code>encoding=\"utf-8\"</code>. Файл создаётся во временной памяти браузера.</p>",
        startCode: "def write_and_read(filename, text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert write_and_read("a.txt", "Привет, файл!") == "Привет, файл!", "Функция должна вернуть то, что записали"
    assert write_and_read("a.txt", "Второй раз") == "Второй раз", "При повторной записи файл перезаписывается (режим w)"
    __task_passed__ = True
    print("✅ Запись и чтение работают!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция write_and_read называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "file_word_count",
        title: "Слова в файле",
        difficulty: "medium",
        lesson: 10,
        hw: true,
        desc: "<p>Напишите функцию <code>count_words_in_file(filename)</code>, которая возвращает количество слов в текстовом файле. Слова разделены пробелами и переносами строк.</p>",
        startCode: "def count_words_in_file(filename):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    with open("w1.txt", "w", encoding="utf-8") as f:
        f.write("Мама мыла раму\\nи пела песню")
    assert count_words_in_file("w1.txt") == 6, "В файле 6 слов"
    with open("w2.txt", "w", encoding="utf-8") as f:
        f.write("")
    assert count_words_in_file("w2.txt") == 0, "В пустом файле 0 слов"
    with open("w3.txt", "w", encoding="utf-8") as f:
        f.write("  один   два  ")
    assert count_words_in_file("w3.txt") == 2, "Лишние пробелы не делают слов больше"
    __task_passed__ = True
    print("✅ Файл прочитан и посчитан верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция count_words_in_file называется именно так.")
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
        lesson: 10,
        hw: true,
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
        id: "file_max_number",
        title: "Максимум из файла",
        difficulty: "hard",
        lesson: 10,
        hw: true,
        desc: "<p>Напишите функцию <code>max_in_file(filename)</code>. В файле записаны целые числа — по одному на строке, но могут встречаться пустые строки. Верните самое большое число. Если чисел нет совсем — верните <code>None</code>.</p>",
        startCode: "def max_in_file(filename):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    with open("n1.txt", "w", encoding="utf-8") as f:
        f.write("3\\n17\\n\\n-5\\n9\\n")
    assert max_in_file("n1.txt") == 17, "Самое большое число — 17"
    with open("n2.txt", "w", encoding="utf-8") as f:
        f.write("-4\\n-2\\n-9")
    assert max_in_file("n2.txt") == -2, "Среди отрицательных самое большое — -2"
    with open("n3.txt", "w", encoding="utf-8") as f:
        f.write("\\n\\n")
    assert max_in_file("n3.txt") is None, "Если чисел нет, нужно вернуть None"
    __task_passed__ = True
    print("✅ Отличная работа с файлом!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция max_in_file называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "to_int",
        title: "Безопасное число",
        difficulty: "easy",
        lesson: 11,
        hw: true,
        desc: "<p>Напишите функцию <code>to_int(text, default)</code>: попробуйте превратить <code>text</code> в целое число через <code>int()</code>. Если не получилось — верните <code>default</code>. Обязательно используйте <code>try-except</code>.</p>",
        startCode: "def to_int(text, default):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert to_int("42", 0) == 42, "to_int('42', 0) должно вернуть 42"
    assert to_int("сорок", 0) == 0, "Если число не получилось — вернуть default"
    assert to_int("3.5", -1) == -1, "int() не умеет читать дробные строки — должно вернуться -1"
    assert to_int(" 7 ", None) == 7, "int() справляется с пробелами по краям"
    assert __uses_node__("Try"), "Используйте блок try-except"
    __task_passed__ = True
    print("✅ Ошибки перехвачены правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция to_int называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "validate_age",
        title: "Проверка возраста",
        difficulty: "medium",
        lesson: 11,
        hw: true,
        desc: "<p>Напишите функцию <code>check_age(age)</code>. Если возраст от 0 до 120 включительно — верните его. Иначе вызовите ошибку: <code>raise ValueError(\"Неверный возраст\")</code>.</p>",
        startCode: "def check_age(age):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert check_age(25) == 25, "check_age(25) должно вернуть 25"
    assert check_age(0) == 0 and check_age(120) == 120, "Границы 0 и 120 допустимы"
    try:
        check_age(-1)
        raise AssertionError("Для -1 нужно вызвать ValueError")
    except ValueError:
        pass
    try:
        check_age(200)
        raise AssertionError("Для 200 нужно вызвать ValueError")
    except ValueError:
        pass
    __task_passed__ = True
    print("✅ raise работает как надо!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция check_age называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "safe_divide",
        title: "Безопасное деление",
        difficulty: "hard",
        lesson: 11,
        hw: true,
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
        id: "parse_numbers",
        title: "Числа из строк (try-except)",
        difficulty: "hard",
        lesson: 11,
        hw: true,
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
        id: "circle_area",
        title: "Площадь круга",
        difficulty: "easy",
        lesson: 12,
        hw: true,
        desc: "<p>Напишите функцию <code>circle_area(r)</code>, которая возвращает площадь круга радиуса <code>r</code>, округлённую до 2 знаков: <code>round(x, 2)</code>. Число π возьмите из модуля <code>math</code>: <code>math.pi</code>.</p>",
        startCode: "import math\n\ndef circle_area(r):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert circle_area(1) == 3.14, "Площадь круга радиуса 1 — 3.14"
    assert circle_area(2) == 12.57, "Площадь круга радиуса 2 — 12.57"
    assert circle_area(0) == 0, "Радиус 0 — площадь 0"
    __task_passed__ = True
    print("✅ Модуль math подключён и работает!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция circle_area называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "hypotenuse",
        title: "Гипотенуза",
        difficulty: "easy",
        lesson: 12,
        hw: true,
        desc: "<p>Напишите функцию <code>hypotenuse(a, b)</code>, которая возвращает длину гипотенузы прямоугольного треугольника с катетами <code>a</code> и <code>b</code>, округлённую до 2 знаков. Формула: корень из <code>a² + b²</code>, корень — <code>math.sqrt()</code>.</p>",
        startCode: "import math\n\ndef hypotenuse(a, b):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert hypotenuse(3, 4) == 5, "Катеты 3 и 4 — гипотенуза 5"
    assert hypotenuse(1, 1) == 1.41, "Катеты 1 и 1 — гипотенуза 1.41"
    assert hypotenuse(6, 8) == 10, "Катеты 6 и 8 — гипотенуза 10"
    __task_passed__ = True
    print("✅ Теорема Пифагора в деле!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция hypotenuse называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "dice_roll",
        title: "Бросок кубиков",
        difficulty: "medium",
        lesson: 12,
        hw: true,
        desc: "<p>Напишите функцию <code>roll_dice(n)</code>, которая возвращает список из <code>n</code> случайных бросков игрального кубика — целых чисел от 1 до 6. Используйте модуль <code>random</code>.</p>",
        startCode: "import random\n\ndef roll_dice(n):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    rolls = roll_dice(600)
    assert isinstance(rolls, list) and len(rolls) == 600, "Нужно вернуть список из n бросков"
    assert all(1 <= x <= 6 for x in rolls), "Каждый бросок — число от 1 до 6"
    assert set(rolls) == {1, 2, 3, 4, 5, 6}, "За 600 бросков должны выпасть все грани от 1 до 6"
    assert roll_dice(0) == [], "roll_dice(0) — пустой список"
    __task_passed__ = True
    print("✅ Случайные числа — освоены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция roll_dice называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "dog_class",
        title: "Класс Собака",
        difficulty: "easy",
        lesson: 13,
        hw: true,
        desc: "<p>Напишите класс <code>Dog</code>. При создании он получает имя: <code>Dog(\"Шарик\")</code>. Имя хранится в атрибуте <code>name</code>. Метод <code>speak()</code> возвращает строку <strong>ИМЯ: Гав!</strong></p>",
        startCode: "class Dog:\n    def __init__(self, name):\n        pass\n\n    def speak(self):\n        pass\n",
        testCode: `
try:
    d = Dog("Шарик")
    assert d.name == "Шарик", "Имя должно храниться в атрибуте name"
    assert d.speak() == "Шарик: Гав!", "speak() должен вернуть «Шарик: Гав!»"
    assert Dog("Бобик").speak() == "Бобик: Гав!", "У каждой собаки своё имя"
    __task_passed__ = True
    print("✅ Первый класс готов!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Dog называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "oop_rectangle",
        title: "Основы ООП (Прямоугольник)",
        difficulty: "hard",
        lesson: 13,
        hw: true,
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
        id: "bank_account",
        title: "Банковский счёт (ООП)",
        difficulty: "hard",
        lesson: 13,
        hw: true,
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
        id: "stack",
        title: "Стек (ООП)",
        difficulty: "hard",
        lesson: 13,
        hw: true,
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
        id: "format_date",
        title: "Дата по-русски",
        difficulty: "medium",
        lesson: 14,
        hw: true,
        desc: "<p>Напишите функцию <code>format_date(text)</code>, которая получает дату в формате <code>ГГГГ-ММ-ДД</code> и возвращает её в привычном виде <code>ДД.ММ.ГГГГ</code>. Используйте <code>datetime.strptime()</code> и <code>strftime()</code>.</p>",
        startCode: "from datetime import datetime\n\ndef format_date(text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert format_date("2024-03-08") == "08.03.2024", "2024-03-08 → 08.03.2024"
    assert format_date("1999-12-31") == "31.12.1999", "1999-12-31 → 31.12.1999"
    assert format_date("2030-01-05") == "05.01.2030", "День и месяц — с ведущим нулём"
    __task_passed__ = True
    print("✅ strptime и strftime освоены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция format_date называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "datetime_days",
        title: "Разница в днях (datetime)",
        difficulty: "hard",
        lesson: 14,
        hw: true,
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
        id: "weekday_name",
        title: "День недели по дате",
        difficulty: "hard",
        lesson: 14,
        hw: true,
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
        id: "age_on",
        title: "Сколько полных лет",
        difficulty: "hard",
        lesson: 14,
        hw: true,
        desc: "<p>Напишите функцию <code>age_on(birth, day)</code>: обе даты приходят строками в формате <code>ГГГГ-ММ-ДД</code>. Верните, сколько <strong>полных</strong> лет исполнилось человеку на дату <code>day</code>. Если день рождения в этом году ещё не наступил — год не засчитывается.</p>",
        startCode: "from datetime import datetime\n\ndef age_on(birth, day):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert age_on("2010-05-20", "2026-05-20") == 16, "В день рождения исполняется 16"
    assert age_on("2010-05-20", "2026-05-19") == 15, "За день до дня рождения — ещё 15"
    assert age_on("2000-01-01", "2026-12-31") == 26, "К концу года — 26"
    assert age_on("2020-02-29", "2021-02-28") == 0, "Полный год ещё не прошёл"
    __task_passed__ = True
    print("✅ Возраст считается точно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция age_on называется именно так.")
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
        lesson: 15,
        hw: true,
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
        id: "todo_list",
        title: "Список дел (класс)",
        difficulty: "hard",
        lesson: 15,
        hw: true,
        desc: "<p>Напишите класс <code>TodoList</code> — список дел:</p><ul><li><code>add(title)</code> — добавить дело;</li><li><code>done(title)</code> — отметить дело выполненным и вернуть <code>True</code>; если такого дела нет — вернуть <code>False</code>;</li><li><code>pending()</code> — вернуть список невыполненных дел в порядке добавления.</li></ul>",
        startCode: "class TodoList:\n    def __init__(self):\n        pass\n\n    def add(self, title):\n        pass\n\n    def done(self, title):\n        pass\n\n    def pending(self):\n        pass\n",
        testCode: `
try:
    t = TodoList()
    assert t.pending() == [], "Новый список дел пуст"
    t.add("купить хлеб"); t.add("сделать уроки"); t.add("позвонить бабушке")
    assert t.pending() == ["купить хлеб", "сделать уроки", "позвонить бабушке"], "Дела должны идти в порядке добавления"
    assert t.done("сделать уроки") is True, "done() для существующего дела возвращает True"
    assert t.pending() == ["купить хлеб", "позвонить бабушке"], "Выполненное дело исчезает из pending()"
    assert t.done("полететь на Марс") is False, "Для несуществующего дела done() возвращает False"
    assert TodoList().pending() == [], "У каждого списка свои дела"
    __task_passed__ = True
    print("✅ Ядро итогового проекта готово!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс TodoList называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "todo_save_load",
        title: "Сохранить дела в файл",
        difficulty: "hard",
        lesson: 15,
        hw: true,
        desc: "<p>Напишите две функции:</p><ul><li><code>save_tasks(filename, tasks)</code> — записывает список строк <code>tasks</code> в файл, по одной на строке;</li><li><code>load_tasks(filename)</code> — читает файл и возвращает список дел. Если файла нет — возвращает пустой список (перехватите <code>FileNotFoundError</code>).</li></ul>",
        startCode: "def save_tasks(filename, tasks):\n    pass\n\ndef load_tasks(filename):\n    pass\n",
        testCode: `
try:
    save_tasks("todo.txt", ["купить хлеб", "сделать уроки"])
    assert load_tasks("todo.txt") == ["купить хлеб", "сделать уроки"], "Сохранили и прочитали — списки должны совпасть"
    save_tasks("todo.txt", [])
    assert load_tasks("todo.txt") == [], "Пустой список сохраняется и читается как пустой"
    assert load_tasks("нет_такого_файла.txt") == [], "Если файла нет — пустой список, а не ошибка"
    __task_passed__ = True
    print("✅ Дела сохраняются между запусками!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функции save_tasks и load_tasks называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "build_query",
        title: "Адрес запроса с параметрами",
        difficulty: "medium",
        lesson: 16,
        hw: true,
        desc: "<p>Напишите функцию <code>build_url(base, params)</code>. <code>params</code> — словарь параметров запроса. Верните адрес вида <code>base?ключ1=значение1&amp;ключ2=значение2</code> в порядке ключей словаря. Если параметров нет — верните <code>base</code> без знака вопроса.</p>",
        startCode: "def build_url(base, params):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert build_url("https://api.site/w", {"city": "Moscow", "days": 3}) == "https://api.site/w?city=Moscow&days=3", "Неверный адрес с двумя параметрами"
    assert build_url("https://api.site/w", {}) == "https://api.site/w", "Без параметров — адрес без знака ?"
    assert build_url("https://x.y", {"q": "python"}) == "https://x.y?q=python", "Один параметр — без &"
    __task_passed__ = True
    print("✅ Так requests собирает адрес запроса!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция build_url называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "json_avg_temp",
        title: "Средняя температура из JSON",
        difficulty: "medium",
        lesson: 16,
        hw: true,
        desc: "<p>Сервис погоды прислал ответ в формате JSON (строкой). Напишите функцию <code>avg_temp(json_text)</code>, которая возвращает среднюю температуру за все дни, округлённую до 1 знака. Используйте <code>json.loads()</code>.</p><p>Пример ответа: <code>{\"city\": \"Москва\", \"days\": [{\"temp\": 10}, {\"temp\": 14}]}</code></p>",
        startCode: "import json\n\ndef avg_temp(json_text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert avg_temp('{"city": "Москва", "days": [{"temp": 10}, {"temp": 14}]}') == 12, "Среднее 10 и 14 — 12"
    assert avg_temp('{"city": "Сочи", "days": [{"temp": 20}, {"temp": 21}, {"temp": 25}]}') == 22, "Среднее 20, 21, 25 — 22"
    assert avg_temp('{"city": "Мурманск", "days": [{"temp": -3}, {"temp": 0}]}') == -1.5, "Отрицательные температуры тоже считаются"
    __task_passed__ = True
    print("✅ Вы прочитали настоящий JSON!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция avg_temp называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "json_top_scorer",
        title: "Лучший игрок",
        difficulty: "hard",
        lesson: 16,
        hw: true,
        desc: "<p>API игры возвращает таблицу результатов — JSON-список вида <code>[{\"name\": \"Аня\", \"score\": 120}, ...]</code>. Напишите функцию <code>top_player(json_text)</code>, которая возвращает имя игрока с наибольшим счётом. Если список пуст — верните <code>None</code>. При равенстве — того, кто раньше в списке.</p>",
        startCode: "import json\n\ndef top_player(json_text):\n    # Ваш код пишите здесь\n    pass\n",
        testCode: `
try:
    assert top_player('[{"name": "Аня", "score": 120}, {"name": "Игорь", "score": 300}, {"name": "Оля", "score": 90}]') == "Игорь", "Больше всех очков у Игоря"
    assert top_player("[]") is None, "Пустой список — None"
    assert top_player('[{"name": "Петя", "score": 50}, {"name": "Вася", "score": 50}]') == "Петя", "При равенстве — тот, кто раньше"
    __task_passed__ = True
    print("✅ Разбор ответа API — на отлично!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция top_player называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    }
];
