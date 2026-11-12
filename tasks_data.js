// Задачи курса. lesson — номер урока (тема), hw — задача входит в домашнее задание урока.
// review: true — задача на повторение: тема урока вместе с прошлыми темами (всегда в домашке, hw: true).
// project, step, projectTitle — шаг мини-проекта модуля (проект 1 — после урока 6, 2 — после 11, 3 — после 16).
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
        id: "rv3_fruit",
        title: "Фрукты на развес",
        difficulty: "medium",
        lesson: 3,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> ввод данных, переменные и арифметика.</p><p>Программа получает три целых числа, каждое на своей строке: цену за килограмм, вес покупки в граммах и сколько денег дал покупатель. Стоимость считается в целых рублях, копейки отбрасываются: цена × граммы, нацело делённое на 1000. Выведите две строки: <code>Стоимость: C</code> и <code>Сдача: S</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">120\n1500\n500</code></div><div><span>Вывод</span><code class=\"io-box\">Стоимость: 180\nСдача: 320</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "120\n1500\n500", "out": "Стоимость: 180\nСдача: 320"}, {"in": "99\n250\n100", "out": "Стоимость: 24\nСдача: 76"}, {"in": "300\n1000\n300", "out": "Стоимость: 300\nСдача: 0"}, {"in": "80\n125\n50", "out": "Стоимость: 10\nСдача: 40"}]
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
        id: "rv4_discount",
        title: "Скидка в магазине",
        difficulty: "medium",
        lesson: 4,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> условия, арифметика и ввод.</p><p>Программа получает сумму покупки (целое число) и ответ <code>да</code> или <code>нет</code> — есть ли у покупателя карта магазина. Скидка: от 5000 — 10%, от 2000 — 5%, меньше — 0%. С картой к скидке добавляется ещё 3%.</p><p>Выведите две строки: <code>Скидка: P%</code> и <code>К оплате: X</code>, где X — сумма минус скидка. Скидку в рублях считайте нацело: <code>сумма * P // 100</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">6000\nнет</code></div><div><span>Вывод</span><code class=\"io-box\">Скидка: 10%\nК оплате: 5400</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "6000\nнет", "out": "Скидка: 10%\nК оплате: 5400"}, {"in": "6000\nда", "out": "Скидка: 13%\nК оплате: 5220"}, {"in": "2500\nда", "out": "Скидка: 8%\nК оплате: 2300"}, {"in": "999\nнет", "out": "Скидка: 0%\nК оплате: 999"}, {"in": "2000\nнет", "out": "Скидка: 5%\nК оплате: 1900"}, {"in": "1000\nда", "out": "Скидка: 3%\nК оплате: 970"}, {"in": "5000\nнет", "out": "Скидка: 10%\nК оплате: 4500"}]
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
        id: "rv5_multiples",
        title: "Кратные числа",
        difficulty: "medium",
        lesson: 5,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> циклы, условия и остаток от деления.</p><p>Программа получает два целых числа N и K. Выведите в одной строке через пробел все числа от 1 до N, которые делятся на K без остатка, а на следующей строке — <code>Всего: C</code>. Если таких чисел нет, вместо первой строки выведите <code>Нет</code>.</p><p>Подсказка: <code>print(i, end=\" \")</code> печатает без перехода на новую строку.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">20\n5</code></div><div><span>Вывод</span><code class=\"io-box\">5 10 15 20\nВсего: 4</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "20\n5", "out": "5 10 15 20\nВсего: 4"}, {"in": "10\n3", "out": "3 6 9\nВсего: 3"}, {"in": "4\n7", "out": "Нет\nВсего: 0"}, {"in": "1\n1", "out": "1\nВсего: 1"}, {"in": "12\n12", "out": "12\nВсего: 1"}]
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
        startCode: "n = int(input())\nnumbers = []\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "5\n1\n2\n3\n4\n5", "out": "4\n5"}, {"in": "3\n7\n7\n7", "out": "Нет"}, {"in": "4\n10\n1\n1\n1", "out": "10"}]
    },
    {
        id: "rv6_weather",
        title: "Погода за неделю",
        difficulty: "medium",
        lesson: 6,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> списки, циклы, условия и ввод.</p><p>Программа получает одной строкой температуры за несколько дней через пробел (целые числа). Выведите четыре строки:</p><ul><li><code>Мин: A</code> — самая низкая температура;</li><li><code>Макс: B</code> — самая высокая;</li><li><code>Морозных дней: C</code> — сколько дней было ниже нуля;</li><li><code>Средняя: X</code> — средняя температура, округлённая до 1 знака: <code>round(x, 1)</code>.</li></ul><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">3 -2 0 5 -1 4 2</code></div><div><span>Вывод</span><code class=\"io-box\">Мин: -2\nМакс: 5\nМорозных дней: 2\nСредняя: 1.6</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "3 -2 0 5 -1 4 2", "out": "Мин: -2\nМакс: 5\nМорозных дней: 2\nСредняя: 1.6"}, {"in": "-5 -3 -10", "out": "Мин: -10\nМакс: -3\nМорозных дней: 3\nСредняя: -6.0"}, {"in": "10", "out": "Мин: 10\nМакс: 10\nМорозных дней: 0\nСредняя: 10.0"}, {"in": "0 0 1", "out": "Мин: 0\nМакс: 1\nМорозных дней: 0\nСредняя: 0.3"}]
    },
    {
        id: "pr1_hint",
        title: "Угадай число: подсказка",
        difficulty: "easy",
        lesson: 6,
        hw: false,
        project: 1,
        step: 1,
        projectTitle: "Проект 1: Угадай число",
        desc: "<p>Соберём игру «Угадай число» за три шага. Шаг 1 — подсказка игроку.</p><p>Программа получает два целых числа, каждое на своей строке: загаданное число и попытку игрока. Выведите одно слово:</p><ul><li><code>больше</code> — если загаданное число больше попытки;</li><li><code>меньше</code> — если загаданное число меньше попытки;</li><li><code>Угадано!</code> — если числа совпали.</li></ul><p>В игре загадывают числа от 1 до 100. Если попытка меньше 1 или больше 100, вместо подсказки выведите <code>Число должно быть от 1 до 100</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">42\n50</code></div><div><span>Вывод</span><code class=\"io-box\">меньше</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "42\n50", "out": "меньше"}, {"in": "42\n10", "out": "больше"}, {"in": "42\n42", "out": "Угадано!"}, {"in": "7\n0", "out": "Число должно быть от 1 до 100"}, {"in": "7\n101", "out": "Число должно быть от 1 до 100"}, {"in": "100\n100", "out": "Угадано!"}, {"in": "1\n2", "out": "меньше"}]
    },
    {
        id: "pr1_game",
        title: "Угадай число: игра до победы",
        difficulty: "medium",
        lesson: 6,
        hw: false,
        project: 1,
        step: 2,
        projectTitle: "Проект 1: Угадай число",
        desc: "<p>Шаг 2 — игра продолжается, пока число не угадано, и считает попытки.</p><p>Первая строка — загаданное число. Дальше идут попытки игрока, по одной на строке. На каждую попытку выведите её номер и подсказку: <code>Попытка K: больше</code> или <code>Попытка K: меньше</code>. Когда число угадано, выведите <code>Попытка K: угадано!</code>, а последней строкой — <code>Победа! Попыток: K</code>.</p><p>Подсказка: используйте <code>while True</code>, счётчик попыток и <code>break</code>, когда число угадано.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">42\n50\n25\n42</code></div><div><span>Вывод</span><code class=\"io-box\">Попытка 1: меньше\nПопытка 2: больше\nПопытка 3: угадано!\nПобеда! Попыток: 3</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "42\n50\n25\n42", "out": "Попытка 1: меньше\nПопытка 2: больше\nПопытка 3: угадано!\nПобеда! Попыток: 3"}, {"in": "7\n7", "out": "Попытка 1: угадано!\nПобеда! Попыток: 1"}, {"in": "10\n1\n2\n20\n10", "out": "Попытка 1: больше\nПопытка 2: больше\nПопытка 3: меньше\nПопытка 4: угадано!\nПобеда! Попыток: 4"}, {"in": "100\n50\n75\n90\n99\n100", "out": "Попытка 1: больше\nПопытка 2: больше\nПопытка 3: больше\nПопытка 4: больше\nПопытка 5: угадано!\nПобеда! Попыток: 5"}]
    },
    {
        id: "pr1_limit",
        title: "Угадай число: лимит попыток",
        difficulty: "hard",
        lesson: 6,
        hw: false,
        project: 1,
        step: 3,
        projectTitle: "Проект 1: Угадай число",
        desc: "<p>Шаг 3 — у игрока ограниченное число попыток, а в конце игра показывает все его догадки.</p><p>Первая строка — загаданное число, вторая — сколько попыток разрешено (N). Дальше идут попытки игрока, по одной на строке. На каждую неверную попытку выведите <code>больше</code> или <code>меньше</code>. Игра заканчивается:</p><ul><li>победой — выведите <code>Угадано! Попыток: K</code>;</li><li>или когда N попыток закончились — выведите <code>Попытки кончились. Было загадано: X</code>.</li></ul><p>Последней строкой в любом случае выведите все догадки по порядку через запятую и пробел: <code>Ваши догадки: 50, 25, 42</code>.</p><p>Подсказка: складывайте догадки в список через <code>append()</code>. Число попыток — это длина списка.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">42\n5\n50\n25\n42</code></div><div><span>Вывод</span><code class=\"io-box\">меньше\nбольше\nУгадано! Попыток: 3\nВаши догадки: 50, 25, 42</code></div></div>",
        startCode: "# Напишите программу ниже\n",
        kind: "io",
        cases: [{"in": "42\n5\n50\n25\n42", "out": "меньше\nбольше\nУгадано! Попыток: 3\nВаши догадки: 50, 25, 42"}, {"in": "42\n3\n50\n25\n30", "out": "меньше\nбольше\nбольше\nПопытки кончились. Было загадано: 42\nВаши догадки: 50, 25, 30"}, {"in": "42\n3\n10\n90\n42", "out": "больше\nменьше\nУгадано! Попыток: 3\nВаши догадки: 10, 90, 42"}, {"in": "8\n4\n8", "out": "Угадано! Попыток: 1\nВаши догадки: 8"}, {"in": "5\n1\n6", "out": "меньше\nПопытки кончились. Было загадано: 5\nВаши догадки: 6"}, {"in": "60\n2\n60", "out": "Угадано! Попыток: 1\nВаши догадки: 60"}]
    },
    {
        id: "ex1_even_odd",
        title: "Чётные и нечётные",
        difficulty: "easy",
        lesson: 6,
        hw: false,
        exam: 1,
        desc: "<p>Программа получает число N, а потом N целых чисел — каждое на своей строке. Выведите три строки: <code>Чётных: A</code>, <code>Нечётных: B</code> и <code>Сумма чётных: S</code>. Ноль — чётное число.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5\n1\n2\n3\n4\n6</code></div><div><span>Вывод</span><code class=\"io-box\">Чётных: 3\nНечётных: 2\nСумма чётных: 12</code></div></div>",
        startCode: "n = int(input())\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "5\n1\n2\n3\n4\n6", "out": "Чётных: 3\nНечётных: 2\nСумма чётных: 12"}, {"in": "3\n7\n9\n11", "out": "Чётных: 0\nНечётных: 3\nСумма чётных: 0"}, {"in": "4\n0\n-2\n5\n10", "out": "Чётных: 3\nНечётных: 1\nСумма чётных: 8"}]
    },
    {
        id: "ex1_stairs",
        title: "Лесенка",
        difficulty: "easy",
        lesson: 6,
        hw: false,
        exam: 1,
        desc: "<p>Программа получает число N. Нарисуйте лесенку из N ступенек: в первой строке одна решётка <code>#</code>, во второй — две, и так далее до N.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">3</code></div><div><span>Вывод</span><code class=\"io-box\">#\n##\n###</code></div></div>",
        startCode: "n = int(input())\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "3", "out": "#\n##\n###"}, {"in": "1", "out": "#"}, {"in": "5", "out": "#\n##\n###\n####\n#####"}]
    },
    {
        id: "ex1_receipt",
        title: "Чек в магазине",
        difficulty: "medium",
        lesson: 6,
        hw: false,
        exam: 1,
        desc: "<p>Программа получает число N, а потом N строк вида <code>название цена количество</code> через пробел (название — одно слово, цена и количество — целые числа). Для каждой покупки выведите строку <code>название: сумма</code>, а в конце — <code>Итого: S</code>.</p><p>Подсказка: <code>input().split()</code> разрежет строку на три части.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">2\nхлеб 45 2\nмолоко 89 1</code></div><div><span>Вывод</span><code class=\"io-box\">хлеб: 90\nмолоко: 89\nИтого: 179</code></div></div>",
        startCode: "n = int(input())\ntotal = 0\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "2\nхлеб 45 2\nмолоко 89 1", "out": "хлеб: 90\nмолоко: 89\nИтого: 179"}, {"in": "1\nсыр 320 3", "out": "сыр: 960\nИтого: 960"}, {"in": "3\nчай 120 1\nсахар 80 2\nлимон 30 4", "out": "чай: 120\nсахар: 160\nлимон: 120\nИтого: 400"}]
    },
    {
        id: "ex1_grades",
        title: "Итоги четверти",
        difficulty: "medium",
        lesson: 6,
        hw: false,
        exam: 1,
        desc: "<p>Программа получает оценки одной строкой через пробел, например <code>5 4 4 3 5</code>. Выведите три строки:</p><ul><li><code>Средний балл: X</code> — среднее, округлённое до 2 знаков: <code>round(x, 2)</code>;</li><li><code>Пятёрок: N</code>;</li><li><code>Итог: Y</code> — оценка за четверть: средний балл от 4.5 — 5, от 3.5 — 4, от 2.5 — 3, ниже — 2.</li></ul><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">5 4 4 3 5</code></div><div><span>Вывод</span><code class=\"io-box\">Средний балл: 4.2\nПятёрок: 2\nИтог: 4</code></div></div>",
        startCode: "grades = input().split()\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "5 4 4 3 5", "out": "Средний балл: 4.2\nПятёрок: 2\nИтог: 4"}, {"in": "5 5 4", "out": "Средний балл: 4.67\nПятёрок: 2\nИтог: 5"}, {"in": "5 4", "out": "Средний балл: 4.5\nПятёрок: 1\nИтог: 5"}, {"in": "3 2 3", "out": "Средний балл: 2.67\nПятёрок: 0\nИтог: 3"}, {"in": "2 2 3 2", "out": "Средний балл: 2.25\nПятёрок: 0\nИтог: 2"}]
    },
    {
        id: "ex1_guess",
        title: "Журнал игры «Угадай число»",
        difficulty: "hard",
        lesson: 6,
        hw: false,
        exam: 1,
        desc: "<p>Первая строка — загаданное число. Дальше идут попытки игрока, по одной на строке, пока он не угадает. На каждую неверную попытку выведите <code>больше</code>, если загаданное число больше попытки, или <code>меньше</code>, если меньше. Когда число угадано, выведите <code>Угадано! Попыток: K</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">42\n50\n25\n42</code></div><div><span>Вывод</span><code class=\"io-box\">меньше\nбольше\nУгадано! Попыток: 3</code></div></div>",
        startCode: "secret = int(input())\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "42\n50\n25\n42", "out": "меньше\nбольше\nУгадано! Попыток: 3"}, {"in": "7\n7", "out": "Угадано! Попыток: 1"}, {"in": "10\n1\n2\n20\n10", "out": "больше\nбольше\nменьше\nУгадано! Попыток: 4"}]
    },
    {
        id: "square",
        title: "Квадрат числа",
        difficulty: "easy",
        lesson: 7,
        hw: true,
        desc: "<p>Напишите функцию <code>square(n)</code>, которая возвращает квадрат числа <code>n</code> — число, умноженное само на себя. Должно работать и с дробными числами.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">square(4)\nsquare(-3)\nsquare(1.5)</code></div><div><span>Результат</span><code class=\"io-box\">16\n9\n2.25</code></div></div>",
        startCode: "def square(n):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>to_fahrenheit(c)</code>, которая переводит температуру из градусов Цельсия в градусы Фаренгейта по формуле <code>F = C * 9 / 5 + 32</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">to_fahrenheit(0)\nto_fahrenheit(100)\nto_fahrenheit(-40)</code></div><div><span>Результат</span><code class=\"io-box\">32.0\n212.0\n-40.0</code></div></div>",
        startCode: "def to_fahrenheit(c):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>factorial(n)</code>, которая возвращает факториал числа — произведение всех чисел от 1 до <code>n</code>. Факториал нуля по определению равен 1.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">factorial(5)\nfactorial(1)\nfactorial(0)</code></div><div><span>Результат</span><code class=\"io-box\">120\n1\n1</code></div></div>",
        startCode: "def factorial(n):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>is_prime(n)</code>, которая возвращает <code>True</code>, если число простое (делится без остатка только на 1 и на само себя), и <code>False</code>, если нет. Числа меньше 2 простыми не считаются.</p><p>91 = 7 × 13, поэтому <code>is_prime(91)</code> — <code>False</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_prime(7)\nis_prime(91)\nis_prime(1)</code></div><div><span>Результат</span><code class=\"io-box\">True\nFalse\nFalse</code></div></div>",
        startCode: "def is_prime(n):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv7_filter_range",
        title: "Числа из диапазона",
        difficulty: "medium",
        lesson: 7,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> функции, списки, циклы и условия.</p><p>Напишите функцию <code>filter_range(nums, low, high)</code>. Она возвращает <strong>новый</strong> список из тех чисел <code>nums</code>, которые лежат от <code>low</code> до <code>high</code> включительно, отсортированный по возрастанию. Исходный список менять нельзя.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">filter_range([5, 1, 9, 3, 7], 3, 7)\nfilter_range([1, 2], 5, 10)</code></div><div><span>Результат</span><code class=\"io-box\">[3, 5, 7]\n[]</code></div></div>",
        startCode: "def filter_range(nums, low, high):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    nums = [5, 1, 9, 3, 7]
    assert filter_range(nums, 3, 7) == [3, 5, 7], f"filter_range([5, 1, 9, 3, 7], 3, 7) должна вернуть [3, 5, 7], а вернула {filter_range(nums, 3, 7)}"
    assert nums == [5, 1, 9, 3, 7], "Исходный список менять нельзя"
    assert filter_range([1, 2], 5, 10) == [], "Нет подходящих чисел — пустой список"
    assert filter_range([], 0, 100) == [], "Пустой список — пустой результат"
    assert filter_range([10, -5, 0, 5, -10], -5, 5) == [-5, 0, 5], "Границы входят в диапазон, отрицательные числа тоже"
    assert filter_range([4, 4, 2], 4, 4) == [4, 4], "Повторы сохраняются"
    __task_passed__ = True
    print("✅ Функция отбирает числа из диапазона!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция filter_range называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "sum",
        title: "Функция: сумма двух чисел",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>add(a, b)</code>, которая принимает два числа и возвращает их сумму.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">add(2, 3)\nadd(-1, 1)</code></div><div><span>Результат</span><code class=\"io-box\">5\n0</code></div></div>",
        startCode: "def add(a, b):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>is_even(n)</code>, которая возвращает <code>True</code>, если число чётное, и <code>False</code>, если нечётное. Ноль — чётное число.</p><p>Подсказка: чётность проверяют остатком от деления на 2 — <code>n % 2</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_even(4)\nis_even(7)\nis_even(0)</code></div><div><span>Результат</span><code class=\"io-box\">True\nFalse\nTrue</code></div></div>",
        startCode: "def is_even(n):\n    # напишите решение здесь\n    pass\n",
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
        title: "Большее из двух без max()",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>find_max(a, b)</code>, которая возвращает большее из двух чисел.</p><p>Встроенную функцию <code>max()</code> использовать нельзя — решите задачу условием <code>if</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">find_max(10, 5)\nfind_max(-5, -2)\nfind_max(7, 7)</code></div><div><span>Результат</span><code class=\"io-box\">10\n-2\n7</code></div></div>",
        startCode: "def find_max(a, b):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>fast_power(base, exp)</code>, которая возводит число <code>base</code> в степень <code>exp</code>.</p><p>Цикл не нужен: в Python есть оператор степени <code>**</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">fast_power(2, 3)\nfast_power(5, 2)\nfast_power(10, 0)</code></div><div><span>Результат</span><code class=\"io-box\">8\n25\n1</code></div></div>",
        startCode: "def fast_power(base, exp):\n    # напишите решение здесь\n    pass\n",
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
        title: "Функция: приветствие",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>greet(name)</code>, которая возвращает строку <code>Привет, ИМЯ!</code> — с запятой и восклицательным знаком.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">greet(&#x27;Иван&#x27;)\ngreet(&#x27;Python&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;Привет, Иван!&#x27;\n&#x27;Привет, Python!&#x27;</code></div></div>",
        startCode: "def greet(name):\n    # напишите решение здесь\n    pass\n",
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
        title: "Функция: последняя цифра",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>last_digit(n)</code>, которая возвращает последнюю цифру целого числа. У отрицательных чисел тоже: у <code>-57</code> последняя цифра <code>7</code>.</p><p>Подсказка: остаток от деления на 10 и функция <code>abs()</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">last_digit(1234)\nlast_digit(-57)\nlast_digit(0)</code></div><div><span>Результат</span><code class=\"io-box\">4\n7\n0</code></div></div>",
        startCode: "def last_digit(n):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>is_adult(age)</code>, которая возвращает <code>True</code>, если человеку 18 лет или больше, и <code>False</code> в остальных случаях.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_adult(20)\nis_adult(18)\nis_adult(17)</code></div><div><span>Результат</span><code class=\"io-box\">True\nTrue\nFalse</code></div></div>",
        startCode: "def is_adult(age):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>my_abs(x)</code>, которая возвращает модуль числа — число без знака минус.</p><p>Встроенную функцию <code>abs()</code> использовать нельзя — решите задачу условием <code>if</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">my_abs(-5)\nmy_abs(3)\nmy_abs(-2.5)</code></div><div><span>Результат</span><code class=\"io-box\">5\n3\n2.5</code></div></div>",
        startCode: "def my_abs(x):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>count_chars(text)</code>, которая возвращает количество символов в строке. Пробелы и знаки препинания тоже считаются.</p><p>Функцию <code>len()</code> использовать нельзя — посчитайте символы циклом <code>for</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">count_chars(&#x27;кот&#x27;)\ncount_chars(&#x27;Привет, мир!&#x27;)\ncount_chars(&#x27;&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">3\n12\n0</code></div></div>",
        startCode: "def count_chars(text):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>first_and_last(items)</code>, которая принимает непустой список и возвращает кортеж из первого и последнего элементов.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">first_and_last([1, 2, 3])\nfirst_and_last([&#x27;a&#x27;])</code></div><div><span>Результат</span><code class=\"io-box\">(1, 3)\n(&#x27;a&#x27;, &#x27;a&#x27;)</code></div></div>",
        startCode: "def first_and_last(items):\n    # напишите решение здесь\n    pass\n",
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
        title: "Функция: знак числа",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>sign(n)</code>, которая возвращает строку <code>положительное</code>, <code>отрицательное</code> или <code>ноль</code> в зависимости от числа.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">sign(5)\nsign(-3)\nsign(0)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;положительное&#x27;\n&#x27;отрицательное&#x27;\n&#x27;ноль&#x27;</code></div></div>",
        startCode: "def sign(n):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>repeat(word, n)</code>, которая возвращает слово, повторённое <code>n</code> раз через пробел. Если <code>n</code> равно 0, верните пустую строку. Лишнего пробела в конце быть не должно.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">repeat(&#x27;да&#x27;, 3)\nrepeat(&#x27;ок&#x27;, 1)\nrepeat(&#x27;эхо&#x27;, 0)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;да да да&#x27;\n&#x27;ок&#x27;\n&#x27;&#x27;</code></div></div>",
        startCode: "def repeat(word, n):\n    # напишите решение здесь\n    pass\n",
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
        title: "Наименьшее из трёх без min()",
        difficulty: "easy",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>min3(a, b, c)</code>, которая возвращает наименьшее из трёх чисел.</p><p>Функцию <code>min()</code> использовать нельзя — только сравнения.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">min3(5, 2, 8)\nmin3(-1, -7, 0)</code></div><div><span>Результат</span><code class=\"io-box\">2\n-7</code></div></div>",
        startCode: "def min3(a, b, c):\n    # напишите решение здесь\n    pass\n",
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
        title: "Сумма списка без sum()",
        difficulty: "medium",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>sum_list(numbers)</code>, которая возвращает сумму чисел из списка. Сумма пустого списка — 0.</p><p>Встроенную функцию <code>sum()</code> использовать нельзя — сложите числа циклом <code>for</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">sum_list([1, 2, 3])\nsum_list([-5, 10, 5])\nsum_list([])</code></div><div><span>Результат</span><code class=\"io-box\">6\n10\n0</code></div></div>",
        startCode: "def sum_list(numbers):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>count_even(numbers)</code>, которая возвращает, сколько в списке чётных чисел.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">count_even([1, 2, 3, 4])\ncount_even([0, -2, 7, 10])\ncount_even([])</code></div><div><span>Результат</span><code class=\"io-box\">2\n3\n0</code></div></div>",
        startCode: "def count_even(numbers):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>only_positive(numbers)</code>, которая возвращает <strong>новый</strong> список только из положительных чисел (больше нуля) в том же порядке. Исходный список менять нельзя.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">only_positive([3, -1, 0, 5])\nonly_positive([-5, -1])</code></div><div><span>Результат</span><code class=\"io-box\">[3, 5]\n[]</code></div></div>",
        startCode: "def only_positive(numbers):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>unique(items)</code>, которая возвращает новый список без повторов, сохраняя порядок, в котором элементы встретились впервые.</p><p><code>set()</code> убирает повторы, но не сохраняет порядок — подумайте, как обойтись без него.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">unique([3, 1, 3, 2, 1])\nunique([&#x27;б&#x27;, &#x27;а&#x27;, &#x27;б&#x27;])</code></div><div><span>Результат</span><code class=\"io-box\">[3, 1, 2]\n[&#x27;б&#x27;, &#x27;а&#x27;]</code></div></div>",
        startCode: "def unique(items):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>digit_sum(n)</code>, которая возвращает сумму цифр неотрицательного целого числа.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">digit_sum(1234)\ndigit_sum(9)\ndigit_sum(0)</code></div><div><span>Результат</span><code class=\"io-box\">10\n9\n0</code></div></div>",
        startCode: "def digit_sum(n):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>table_row(n)</code>, которая возвращает список из 10 чисел: <code>n * 1</code>, <code>n * 2</code>, …, <code>n * 10</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">table_row(3)</code></div><div><span>Результат</span><code class=\"io-box\">[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]</code></div></div>",
        startCode: "def table_row(n):\n    # напишите решение здесь\n    pass\n",
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
        title: "Функция: високосный год",
        difficulty: "medium",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>is_leap(year)</code>, которая возвращает <code>True</code>, если год високосный, и <code>False</code>, если нет.</p><p>Правило: год високосный, если делится на 4. Но годы, которые делятся на 100, високосные, только если делятся ещё и на 400.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_leap(2024)\nis_leap(1900)\nis_leap(2000)</code></div><div><span>Результат</span><code class=\"io-box\">True\nFalse\nTrue</code></div></div>",
        startCode: "def is_leap(year):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>fib(n)</code>, которая возвращает число Фибоначчи с номером <code>n</code>. В этом ряду каждое число равно сумме двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13… Нумерация с нуля: <code>fib(0)</code> — это 0.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">fib(0)\nfib(2)\nfib(6)\nfib(10)</code></div><div><span>Результат</span><code class=\"io-box\">0\n1\n8\n55</code></div></div>",
        startCode: "def fib(n):\n    # напишите решение здесь\n    pass\n",
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
        title: "Выпрямить вложенный список",
        difficulty: "hard",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>flatten(items)</code>, которая превращает вложенный список любой глубины в обычный «плоский» список.</p><p>Подсказка: проверка <code>isinstance(x, list)</code> и рекурсия — функция может вызывать саму себя.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">flatten([1, [2, [3, 4]], 5])\nflatten([[], [1], [2, []]])</code></div><div><span>Результат</span><code class=\"io-box\">[1, 2, 3, 4, 5]\n[1, 2]</code></div></div>",
        startCode: "def flatten(items):\n    # напишите решение здесь\n    pass\n",
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
        title: "Функция: цена билета",
        difficulty: "hard",
        lesson: 7,
        hw: false,
        desc: "<p>Напишите функцию <code>ticket_price(age, weekend)</code>, которая возвращает цену билета в рублях: до 7 лет — 0; от 7 до 17 лет включительно — 150; от 65 лет — 100; остальным — 300. Если <code>weekend</code> равно <code>True</code> (выходной), к платным билетам добавляется 50, а бесплатные остаются бесплатными.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">ticket_price(5, True)\nticket_price(12, False)\nticket_price(30, True)</code></div><div><span>Результат</span><code class=\"io-box\">0\n150\n350</code></div></div>",
        startCode: "def ticket_price(age, weekend):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "def price(menu, item):\n    # напишите решение здесь\n    pass\n",
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
        title: "Самый старший",
        difficulty: "medium",
        lesson: 8,
        hw: true,
        desc: "<p>Напишите функцию <code>get_oldest(people)</code>. Она получает словарь, где ключ — имя, а значение — возраст. Верните имя самого старшего человека.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">get_oldest({&#x27;Иван&#x27;: 20, &#x27;Анна&#x27;: 25})\nget_oldest({&#x27;Борис&#x27;: 50, &#x27;Глеб&#x27;: 15})</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;Анна&#x27;\n&#x27;Борис&#x27;</code></div></div>",
        startCode: "def get_oldest(people):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>invert(d)</code>, которая возвращает новый словарь, где ключи и значения поменялись местами. Все значения в исходном словаре разные.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">invert({&#x27;a&#x27;: 1, &#x27;b&#x27;: 2})\ninvert({&#x27;кот&#x27;: &#x27;cat&#x27;})</code></div><div><span>Результат</span><code class=\"io-box\">{1: &#x27;a&#x27;, 2: &#x27;b&#x27;}\n{&#x27;cat&#x27;: &#x27;кот&#x27;}</code></div></div>",
        startCode: "def invert(d):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>word_counts(text)</code>, которая возвращает словарь: ключ — слово в нижнем регистре, значение — сколько раз оно встретилось. Знаков препинания в тексте нет.</p><p>Подсказка: <code>split()</code> разрезает строку на слова, а <code>lower()</code> делает буквы маленькими.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">word_counts(&#x27;кот ест кот спит&#x27;)\nword_counts(&#x27;Раз раз два&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">{&#x27;кот&#x27;: 2, &#x27;ест&#x27;: 1, &#x27;спит&#x27;: 1}\n{&#x27;раз&#x27;: 2, &#x27;два&#x27;: 1}</code></div></div>",
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
        id: "rv8_cart",
        title: "Корзина по прайсу",
        difficulty: "medium",
        lesson: 8,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> словари и множества вместе со списками, циклами и функциями.</p><p>Напишите функцию <code>cart_total(prices, cart)</code>. <code>prices</code> — словарь «товар → цена», <code>cart</code> — список товаров в корзине (товар может повторяться). Верните кортеж из двух значений: сумму за товары, которые есть в прайсе, и отсортированный список товаров, которых в прайсе нет (каждый — один раз).</p><p>Подсказка: повторы удобно убирать множеством <code>set()</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">prices = {\"хлеб\": 45, \"молоко\": 89}\ncart_total(prices, [\"хлеб\", \"молоко\", \"хлеб\", \"икра\", \"икра\"])</code></div><div><span>Результат</span><code class=\"io-box\">(179, [\"икра\"])</code></div></div>",
        startCode: "def cart_total(prices, cart):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    prices = {"хлеб": 45, "молоко": 89, "сыр": 300}
    assert cart_total(prices, ["хлеб", "молоко", "хлеб", "икра", "икра"]) == (179, ["икра"]), f"Вернулось {cart_total(prices, ['хлеб', 'молоко', 'хлеб', 'икра', 'икра'])}, а нужно (179, ['икра'])"
    assert cart_total(prices, []) == (0, []), "Пустая корзина: (0, [])"
    assert cart_total(prices, ["сыр", "торт", "арбуз", "торт"]) == (300, ["арбуз", "торт"]), "Товары без цены — по алфавиту и без повторов"
    assert cart_total({}, ["хлеб"]) == (0, ["хлеб"]), "Пустой прайс: всё в списке отсутствующих"
    __task_passed__ = True
    print("✅ Корзина считается верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция cart_total называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "shout",
        title: "Громкий голос",
        difficulty: "easy",
        lesson: 9,
        hw: true,
        desc: "<p>Напишите функцию <code>shout(text)</code>, которая возвращает текст заглавными буквами с восклицательным знаком в конце.</p><p>Пример: <code>shout(\"привет\")</code> → <code>\"ПРИВЕТ!\"</code></p>",
        startCode: "def shout(text):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>reverse_string(text)</code>, которая возвращает строку задом наперёд.</p><p>Подсказка: подойдёт срез или цикл.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">reverse_string(&#x27;собака&#x27;)\nreverse_string(&#x27;Python&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;акабос&#x27;\n&#x27;nohtyP&#x27;</code></div></div>",
        startCode: "def reverse_string(text):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>is_palindrome(text)</code>, которая возвращает <code>True</code>, если текст читается одинаково слева направо и справа налево — без учёта пробелов и регистра, иначе <code>False</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_palindrome(&#x27;казак&#x27;)\nis_palindrome(&#x27;А роза упала на лапу Азора&#x27;)\nis_palindrome(&#x27;собака&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">True\nTrue\nFalse</code></div></div>",
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
        desc: "<p>Напишите функцию <code>caesar(text, shift)</code>, которая шифрует текст шифром Цезаря: каждая латинская буква сдвигается по алфавиту на <code>shift</code> позиций (после <code>z</code> снова идёт <code>a</code>). Заглавные буквы остаются заглавными, остальные символы не меняются. Отрицательный сдвиг расшифровывает текст.</p><p>Подсказка: функции <code>ord()</code> и <code>chr()</code> превращают букву в номер и обратно.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">caesar(&#x27;abc&#x27;, 1)\ncaesar(&#x27;xyz&#x27;, 3)\ncaesar(&#x27;Hello, World!&#x27;, 3)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;bcd&#x27;\n&#x27;abc&#x27;\n&#x27;Khoor, Zruog!&#x27;</code></div></div>",
        startCode: "def caesar(text, shift):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv9_initials",
        title: "Фамилия и инициалы",
        difficulty: "medium",
        lesson: 9,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> строки вместе со списками, циклами и функциями.</p><p>Напишите функцию <code>initials(full_name)</code>. Она получает фамилию, имя и, может быть, отчество — в любом регистре и с лишними пробелами. Верните фамилию с большой буквы и инициалы: <code>Иванов И. П.</code>. Если отчества нет — <code>Петрова А.</code>, если есть только фамилия — просто фамилию.</p><p>Подсказки: <code>split()</code> без аргументов сам убирает лишние пробелы, <code>capitalize()</code> делает первую букву большой, а остальные маленькими.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">initials(\"иванов иван петрович\")\ninitials(\"  ПЕТРОВА   анна \")\ninitials(\"пушкин\")</code></div><div><span>Результат</span><code class=\"io-box\">\"Иванов И. П.\"\n\"Петрова А.\"\n\"Пушкин\"</code></div></div>",
        startCode: "def initials(full_name):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert initials("иванов иван петрович") == "Иванов И. П.", f"initials(\\"иванов иван петрович\\") должна вернуть \\"Иванов И. П.\\", а вернула \\"{initials('иванов иван петрович')}\\""
    assert initials("  ПЕТРОВА   анна ") == "Петрова А.", "Лишние пробелы и большие буквы: должно быть \\"Петрова А.\\""
    assert initials("пушкин") == "Пушкин", "Только фамилия — вернуть фамилию"
    assert initials("Толстой Лев Николаевич") == "Толстой Л. Н.", "Должно быть \\"Толстой Л. Н.\\""
    __task_passed__ = True
    print("✅ Инициалы получаются правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция initials называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "count_vowels",
        title: "Сколько гласных",
        difficulty: "medium",
        lesson: 9,
        hw: false,
        desc: "<p>Напишите функцию <code>count_vowels(word)</code>, которая возвращает количество русских гласных в строке: а, е, ё, и, о, у, ы, э, ю, я. Регистр не важен.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">count_vowels(&#x27;Привет&#x27;)\ncount_vowels(&#x27;Яблоко&#x27;)\ncount_vowels(&#x27;КРТК&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">2\n3\n0</code></div></div>",
        startCode: "def count_vowels(word):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>title_case(text)</code>, которая делает первую букву каждого слова заглавной, а остальные — строчными. Слова разделены одним пробелом.</p><p>Подсказка: <code>split()</code>, <code>capitalize()</code> и <code>join()</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">title_case(&#x27;привет мир&#x27;)\ntitle_case(&#x27;pYTHON рулит&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;Привет Мир&#x27;\n&#x27;Python Рулит&#x27;</code></div></div>",
        startCode: "def title_case(text):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>longest_word(text)</code>, которая возвращает самое длинное слово в строке. Если таких слов несколько, верните первое из них.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">longest_word(&#x27;я люблю программировать&#x27;)\nlongest_word(&#x27;кот пёс мыш&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;программировать&#x27;\n&#x27;кот&#x27;</code></div></div>",
        startCode: "def longest_word(text):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>count_letter(text, letter)</code>, которая возвращает, сколько раз буква встречается в тексте, без учёта регистра.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">count_letter(&#x27;Абракадабра&#x27;, &#x27;а&#x27;)\ncount_letter(&#x27;python&#x27;, &#x27;P&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">5\n1</code></div></div>",
        startCode: "def count_letter(text, letter):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>is_anagram(a, b)</code>, которая возвращает <code>True</code>, если строки состоят из одних и тех же букв в том же количестве — без учёта регистра и пробелов, иначе <code>False</code>.</p><p>Подсказка: отсортированные буквы анаграмм совпадают.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">is_anagram(&#x27;Листок&#x27;, &#x27;стоклИ&#x27;)\nis_anagram(&#x27;кот&#x27;, &#x27;кит&#x27;)\nis_anagram(&#x27;аа&#x27;, &#x27;а&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">True\nFalse\nFalse</code></div></div>",
        startCode: "def is_anagram(a, b):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "def write_and_read(filename, text):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "def count_words_in_file(filename):\n    # напишите решение здесь\n    pass\n",
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
        title: "Записать строки и посчитать",
        difficulty: "hard",
        lesson: 10,
        hw: true,
        desc: "<p>Напишите функцию <code>save_and_count(filename, lines)</code>. Она записывает строки из списка <code>lines</code> в файл <code>filename</code> — каждую с новой строки, а если файл уже был, перезаписывает его. Затем открывает файл на чтение и возвращает, сколько в нём строк.</p><p>Используйте <code>with open(...)</code> и <code>encoding=&quot;utf-8&quot;</code>. Файл создаётся во временной памяти браузера.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">save_and_count(&#x27;notes.txt&#x27;, [&#x27;купить хлеб&#x27;, &#x27;позвонить маме&#x27;])</code></div><div><span>Результат</span><code class=\"io-box\">2</code></div></div>",
        startCode: "def save_and_count(filename, lines):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "def max_in_file(filename):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv10_copy_upper",
        title: "Копия файла большими буквами",
        difficulty: "medium",
        lesson: 10,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> файлы вместе со строками, циклами и функциями.</p><p>Напишите функцию <code>copy_upper(src, dst)</code>. Она читает файл <code>src</code> и записывает в файл <code>dst</code> его строки большими буквами, по одной на строке. Пробелы по краям строк уберите, пустые строки пропустите. Функция возвращает, сколько строк записано.</p><p>Файлы открывайте с <code>encoding=\"utf-8\"</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\"># в файле src.txt:  «привет», «», «  мир  »\ncopy_upper(\"src.txt\", \"dst.txt\")\n# в файле dst.txt:</code></div><div><span>Результат</span><code class=\"io-box\">\n2\nПРИВЕТ\nМИР</code></div></div>",
        startCode: "def copy_upper(src, dst):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    with open("rv10_src.txt", "w", encoding="utf-8") as f:
        f.write("привет\\n\\n   мир  \\nPython 3\\n")
    n = copy_upper("rv10_src.txt", "rv10_dst.txt")
    assert n == 3, f"Записано 3 непустые строки, а функция вернула {n}"
    with open("rv10_dst.txt", encoding="utf-8") as f:
        lines = f.read().split("\\n")
    lines = [x for x in lines if x != ""]
    assert lines == ["ПРИВЕТ", "МИР", "PYTHON 3"], f"В новом файле должны быть строки ['ПРИВЕТ', 'МИР', 'PYTHON 3'], а сейчас {lines}"
    with open("rv10_src.txt", "w", encoding="utf-8") as f:
        f.write("\\n\\n")
    assert copy_upper("rv10_src.txt", "rv10_dst.txt") == 0, "Файл из пустых строк — записано 0 строк"
    with open("rv10_dst.txt", encoding="utf-8") as f:
        assert f.read().strip() == "", "Старое содержимое нового файла нужно перезаписать (режим \\"w\\")"
    __task_passed__ = True
    print("✅ Файл копируется большими буквами!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция copy_upper называется именно так.")
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
        startCode: "def to_int(text, default):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "def check_age(age):\n    # напишите решение здесь\n    pass\n",
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
        desc: "<p>Напишите функцию <code>safe_divide(a, b)</code>, которая возвращает результат деления <code>a / b</code>. Если делить на ноль, функция должна вернуть строку <code>Ошибка</code>.</p><p>Обязательно используйте <code>try-except</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">safe_divide(10, 2)\nsafe_divide(10, 0)</code></div><div><span>Результат</span><code class=\"io-box\">5.0\n&#x27;Ошибка&#x27;</code></div></div>",
        startCode: "def safe_divide(a, b):\n    # напишите решение здесь\n    pass\n",
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
        title: "Числа из строк",
        difficulty: "hard",
        lesson: 11,
        hw: true,
        desc: "<p>Напишите функцию <code>parse_numbers(items)</code>. Она получает список строк и возвращает список целых чисел из тех строк, которые удалось превратить в число через <code>int()</code>. Остальные строки пропускаются.</p><p>Обязательно используйте <code>try-except</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">parse_numbers([&#x27;10&#x27;, &#x27;abc&#x27;, &#x27;-3&#x27;, &#x27;4.5&#x27;])\nparse_numbers([&#x27;один&#x27;, &#x27;два&#x27;])</code></div><div><span>Результат</span><code class=\"io-box\">[10, -3]\n[]</code></div></div>",
        startCode: "def parse_numbers(items):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv11_average_age",
        title: "Средний возраст из анкет",
        difficulty: "medium",
        lesson: 11,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> обработка ошибок вместе со строками, списками и функциями.</p><p>Напишите функцию <code>average_age(records)</code>. <code>records</code> — список строк вида <code>\"Имя,возраст\"</code>. Посчитайте средний возраст по правильным анкетам и верните его, округлив до 1 знака. Пропустите анкеты без запятой, с возрастом не числом и с отрицательным возрастом. Если правильных анкет нет — верните <code>None</code>.</p><p>Подсказка: <code>int(\"abc\")</code> выбрасывает <code>ValueError</code> — перехватите её через <code>try / except</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">average_age([\"Аня,20\", \"Боря,abc\", \"Вера,31\"])\naverage_age([\"Гена\"])</code></div><div><span>Результат</span><code class=\"io-box\">25.5\nNone</code></div></div>",
        startCode: "def average_age(records):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    r = average_age(["Аня,20", "Боря,30", "Вера,abc", "Гена", "Дима,-5", "Ева, 25 "])
    assert r == 25.0, f"Правильные анкеты: 20, 30 и 25 — средний возраст 25.0, а функция вернула {r}"
    assert average_age(["Аня,20", "Боря,abc", "Вера,31"]) == 25.5, "Должно получиться 25.5"
    assert average_age(["Гена"]) is None, "Нет правильных анкет — None"
    assert average_age([]) is None, "Пустой список — None"
    assert average_age(["Аня,10", "Боря,11", "Вера,11"]) == 10.7, "Округление до 1 знака: 10.7"
    __task_passed__ = True
    print("✅ Средний возраст считается, а плохие анкеты не мешают!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция average_age называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr2_add",
        title: "Телефонная книга: добавить и найти",
        difficulty: "medium",
        lesson: 11,
        hw: false,
        project: 2,
        step: 1,
        projectTitle: "Проект 2: Телефонная книга",
        desc: "<p>Соберём телефонную книгу за три шага. Книга — это словарь: ключ — имя, значение — номер. Шаг 1 — три функции:</p><ul><li><code>normalize_phone(text)</code> — оставляет в строке только цифры и приводит номер к виду <code>+7XXXXXXXXXX</code>. Подходят 11 цифр, начинающиеся с <code>7</code> или <code>8</code> (первую цифру заменяем на <code>+7</code>), и 10 цифр (добавляем <code>+7</code> впереди). В остальных случаях — <code>raise ValueError(\"Неверный номер\")</code>.</li><li><code>add_contact(book, name, phone)</code> — убирает пробелы вокруг имени и записывает в словарь <code>book</code> номер в виде <code>+7…</code>. Пустое имя — <code>ValueError(\"Пустое имя\")</code>. С плохим номером ошибка, и книга не меняется.</li><li><code>find_contact(book, name)</code> — ищет контакт без учёта регистра букв и возвращает номер, а если такого нет — <code>None</code>.</li></ul><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">normalize_phone(\"8 (912) 345-67-89\")\nnormalize_phone(\"912 345 67 89\")\nnormalize_phone(\"12345\")</code></div><div><span>Результат</span><code class=\"io-box\">\"+79123456789\"\n\"+79123456789\"\nValueError: Неверный номер</code></div></div>",
        startCode: "def normalize_phone(text):\n    # напишите решение здесь\n    pass\n\ndef add_contact(book, name, phone):\n    pass\n\ndef find_contact(book, name):\n    pass\n",
        testCode: `
try:
    assert normalize_phone("8 (912) 345-67-89") == "+79123456789", "normalize_phone(\\"8 (912) 345-67-89\\") должно вернуть \\"+79123456789\\""
    assert normalize_phone("+7 912 345 67 89") == "+79123456789", "Номер с +7 и пробелами: должно получиться \\"+79123456789\\""
    assert normalize_phone("912-345-67-89") == "+79123456789", "10 цифр — добавьте +7 впереди"
    for bad in ["12345", "5 912 345 67 89", "", "звонить вечером", "8 912 345 67 89 0"]:
        try:
            normalize_phone(bad)
            assert False, f"normalize_phone(\\"{bad}\\") должна выбросить ValueError"
        except ValueError:
            pass
    book = {}
    add_contact(book, "Аня", "8 912 345 67 89")
    assert book == {"Аня": "+79123456789"}, f"После add_contact(book, \\"Аня\\", \\"8 912 345 67 89\\") книга должна быть {{'Аня': '+79123456789'}}, а сейчас {book}"
    add_contact(book, "  Борис ", "+7(903)111-22-33")
    assert book.get("Борис") == "+79031112233", "Пробелы вокруг имени нужно убрать: ключ \\"Борис\\""
    try:
        add_contact(book, "Вера", "123")
        assert False, "add_contact с номером \\"123\\" должна выбросить ValueError"
    except ValueError:
        pass
    assert "Вера" not in book, "С неверным номером контакт не должен попасть в книгу"
    try:
        add_contact(book, "   ", "89123456789")
        assert False, "Пустое имя — должна быть ошибка ValueError"
    except ValueError:
        pass
    assert len(book) == 2, f"В книге должно быть 2 контакта, а их {len(book)}"
    assert find_contact(book, "аня") == "+79123456789", "find_contact(book, \\"аня\\") должна найти Аню без учёта регистра"
    assert find_contact(book, "БОРИС") == "+79031112233", "find_contact(book, \\"БОРИС\\") должна найти Бориса"
    assert find_contact(book, "Гена") is None, "Если контакта нет — верните None"
    __task_passed__ = True
    print("✅ Контакты добавляются, номера приводятся к виду +7… — книга заработала!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функции normalize_phone, add_contact и find_contact называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr2_search",
        title: "Телефонная книга: поиск и статистика",
        difficulty: "medium",
        lesson: 11,
        hw: false,
        project: 2,
        step: 2,
        projectTitle: "Проект 2: Телефонная книга",
        desc: "<p>Шаг 2 — поиск по части имени и статистика. Книга — словарь вида <code>{\"Аня\": \"+79123456789\", …}</code>, номера уже приведены к виду <code>+7…</code>. Напишите две функции:</p><ul><li><code>search(book, part)</code> — возвращает список имён, в которых есть <code>part</code> (без учёта регистра), отсортированный по алфавиту. Пустая <code>part</code> подходит ко всем именам.</li><li><code>stats(book)</code> — возвращает словарь <code>{\"total\": N, \"codes\": {…}}</code>: сколько всего контактов и сколько номеров с каждым кодом. Код — три цифры после <code>+7</code>: у <code>+79123456789</code> код <code>\"912\"</code>.</li></ul><p>Функции из шага 1 можно оставить в программе — они не помешают.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">book = {\"Аня\": \"+79123456789\", \"Таня\": \"+79031112233\"}\nsearch(book, \"ан\")\nstats(book)</code></div><div><span>Результат</span><code class=\"io-box\">[\"Аня\", \"Таня\"]\n{\"total\": 2, \"codes\": {\"912\": 1, \"903\": 1}}</code></div></div>",
        startCode: "def search(book, part):\n    # напишите решение здесь\n    pass\n\ndef stats(book):\n    pass\n",
        testCode: `
try:
    book = {"Аня": "+79123456789", "Анатолий": "+79031112233", "Борис": "+79125550000", "Таня": "+79991234567"}
    copy = dict(book)
    assert search(book, "ан") == ["Анатолий", "Аня", "Таня"], f"search(book, \\"ан\\") должна вернуть ['Анатолий', 'Аня', 'Таня'], а вернула {search(book, 'ан')}"
    assert search(book, "БОР") == ["Борис"], "Поиск без учёта регистра: search(book, \\"БОР\\") == ['Борис']"
    assert search(book, "zz") == [], "Если ничего не найдено — пустой список"
    assert search(book, "") == ["Анатолий", "Аня", "Борис", "Таня"], "Пустая строка поиска — все имена по алфавиту"
    assert stats(book) == {"total": 4, "codes": {"912": 2, "903": 1, "999": 1}}, f"stats(book) вернула {stats(book)}, а нужно {{'total': 4, 'codes': {{'912': 2, '903': 1, '999': 1}}}}"
    assert stats({}) == {"total": 0, "codes": {}}, "Для пустой книги: {'total': 0, 'codes': {}}"
    assert book == copy, "Функции не должны менять книгу"
    __task_passed__ = True
    print("✅ Поиск и статистика работают!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функции search и stats называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr2_file",
        title: "Телефонная книга: сохранить в файл",
        difficulty: "hard",
        lesson: 11,
        hw: false,
        project: 2,
        step: 3,
        projectTitle: "Проект 2: Телефонная книга",
        desc: "<p>Шаг 3 — книга сохраняется в файл и не пропадает между запусками. Напишите две функции:</p><ul><li><code>save_book(book, filename)</code> — записывает контакты в файл, по одному на строке, в виде <code>Имя;+79123456789</code>, по алфавиту имён.</li><li><code>load_book(filename)</code> — читает такой файл и возвращает словарь. Пробелы вокруг имени и номера уберите, номер приведите к виду <code>+7…</code>. Пустые строки, строки без <code>;</code> и строки с неверным номером пропустите. Если файла нет — верните пустой словарь (перехватите <code>FileNotFoundError</code>).</li></ul><p>Скопируйте в программу <code>normalize_phone</code> из шага 1: она приведёт номер к нужному виду, а на плохом номере выбросит <code>ValueError</code>, который нужно перехватить.</p><p>Файлы открывайте с <code>encoding=\"utf-8\"</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">save_book({\"Таня\": \"+79991234567\", \"Аня\": \"+79123456789\"}, \"book.txt\")\n# в файле book.txt:</code></div><div><span>Результат</span><code class=\"io-box\">Аня;+79123456789\nТаня;+79991234567</code></div></div>",
        startCode: "# Скопируйте сюда normalize_phone из шага 1 — она пригодится\n\ndef save_book(book, filename):\n    # напишите решение здесь\n    pass\n\ndef load_book(filename):\n    pass\n",
        testCode: `
try:
    book = {"Таня": "+79991234567", "Аня": "+79123456789", "Борис": "+79031112233"}
    save_book(book, "pr2_book.txt")
    with open("pr2_book.txt", encoding="utf-8") as f:
        lines = [line.strip() for line in f if line.strip()]
    assert lines == ["Аня;+79123456789", "Борис;+79031112233", "Таня;+79991234567"], f"В файле должно быть по строке «Имя;номер» по алфавиту, а сейчас: {lines}"
    assert load_book("pr2_book.txt") == book, "Сохранили и загрузили — книга должна совпасть"
    with open("pr2_messy.txt", "w", encoding="utf-8") as f:
        f.write("Вера;8 (912) 000-11-22\\nбез точки с запятой\\nГена;123\\n\\n  Дима ; +7 903 111 22 33 \\n")
    loaded = load_book("pr2_messy.txt")
    assert loaded == {"Вера": "+79120001122", "Дима": "+79031112233"}, f"Из файла с плохими строками должны загрузиться только Вера и Дима с номерами +7…, а загрузилось: {loaded}"
    assert load_book("pr2_no_such_book.txt") == {}, "Если файла нет — пустой словарь, а не ошибка"
    save_book({}, "pr2_empty.txt")
    assert load_book("pr2_empty.txt") == {}, "Пустая книга сохраняется и загружается как пустая"
    __task_passed__ = True
    print("✅ Телефонная книга сохраняется в файл и загружается обратно. Проект готов!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функции save_book и load_book (и normalize_phone) называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex2_word_lengths",
        title: "Длины слов",
        difficulty: "easy",
        lesson: 11,
        hw: false,
        exam: 2,
        desc: "<p>Напишите функцию <code>word_lengths(text)</code>, которая возвращает словарь: ключ — слово из текста, значение — длина этого слова. Слова разделены пробелами; если слово повторяется, в словаре оно одно.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">word_lengths(&quot;кот ест рыбу&quot;)\nword_lengths(&quot;да да нет&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">{&#x27;кот&#x27;: 3, &#x27;ест&#x27;: 3, &#x27;рыбу&#x27;: 4}\n{&#x27;да&#x27;: 2, &#x27;нет&#x27;: 3}</code></div></div>",
        startCode: "def word_lengths(text):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert word_lengths("кот ест рыбу") == {"кот": 3, "ест": 3, "рыбу": 4}, "Для «кот ест рыбу» ожидалось {'кот': 3, 'ест': 3, 'рыбу': 4}"
    assert word_lengths("") == {}, "Для пустой строки — пустой словарь"
    assert word_lengths("да да нет") == {"да": 2, "нет": 3}, "Повторяющееся слово встречается в словаре один раз"
    __task_passed__ = True
    print("✅ Словарь собран правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция word_lengths называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex2_best_students",
        title: "Отличники",
        difficulty: "medium",
        lesson: 11,
        hw: false,
        exam: 2,
        desc: "<p>Напишите функцию <code>best_students(grades)</code>. Она получает словарь «имя → список оценок» и возвращает список имён тех, у кого средний балл <strong>не ниже 4.5</strong>, по алфавиту. Ученики без оценок в список не попадают.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">best_students({&quot;Аня&quot;: [5, 5, 4], &quot;Борис&quot;: [4, 4, 3], &quot;Вика&quot;: [5, 4]})</code></div><div><span>Результат</span><code class=\"io-box\">[&#x27;Аня&#x27;, &#x27;Вика&#x27;]</code></div></div>",
        startCode: "def best_students(grades):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert best_students({"Аня": [5, 5, 4], "Борис": [4, 4, 3], "Вика": [5, 4]}) == ["Аня", "Вика"], "Ожидалось ['Аня', 'Вика']: у Вики ровно 4.5 — это тоже подходит"
    assert best_students({}) == [], "Для пустого словаря — пустой список"
    assert best_students({"Гоша": []}) == [], "Ученик без оценок в список не попадает"
    assert best_students({"Яна": [5], "Ада": [5, 5]}) == ["Ада", "Яна"], "Имена должны идти по алфавиту"
    __task_passed__ = True
    print("✅ Отличники найдены верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция best_students называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex2_parse_prices",
        title: "Прайс-лист",
        difficulty: "medium",
        lesson: 11,
        hw: false,
        exam: 2,
        desc: "<p>Напишите функцию <code>parse_prices(lines)</code>. Она получает список строк вида <code>товар: цена</code> и возвращает словарь «товар → цена» с ценой-целым числом. Пробелы по краям названия и цены убирайте. Строки без двоеточия и строки, где цена — не число, пропускайте. Если товар встретился дважды, остаётся последняя цена.</p><p>Подсказка: <code>split(&quot;:&quot;)</code>, <code>strip()</code> и <code>try-except</code> для неправильной цены.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">parse_prices([&quot;хлеб: 45&quot;, &quot; молоко :89&quot;, &quot;сыр 320&quot;, &quot;чай: дорого&quot;])</code></div><div><span>Результат</span><code class=\"io-box\">{&#x27;хлеб&#x27;: 45, &#x27;молоко&#x27;: 89}</code></div></div>",
        startCode: "def parse_prices(lines):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert parse_prices(["хлеб: 45", " молоко :89", "сыр 320", "чай: дорого"]) == {"хлеб": 45, "молоко": 89}, "Ожидалось {'хлеб': 45, 'молоко': 89}: строки без двоеточия и с ценой-словом пропускаются"
    assert parse_prices([]) == {}, "Для пустого списка — пустой словарь"
    assert parse_prices(["вода: 30", "вода: 35"]) == {"вода": 35}, "Если товар встретился дважды, остаётся последняя цена"
    __task_passed__ = True
    print("✅ Прайс-лист разобран без ошибок!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция parse_prices называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex2_save_scores",
        title: "Таблица рекордов в файл",
        difficulty: "hard",
        lesson: 11,
        hw: false,
        exam: 2,
        desc: "<p>Напишите функцию <code>save_scores(filename, scores)</code>. <code>scores</code> — словарь «игрок → очки». Запишите в файл <code>filename</code> строки <code>игрок: очки</code> — по убыванию очков, а при равных очках по алфавиту. Затем прочитайте файл и верните его содержимое одной строкой.</p><p>Подсказка: <code>sorted(scores.items(), key=lambda p: (-p[1], p[0]))</code> — сортировка сначала по очкам (минус — значит по убыванию), потом по имени.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">save_scores(&quot;top.txt&quot;, {&quot;Вика&quot;: 120, &quot;Борис&quot;: 340, &quot;Аня&quot;: 120})</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;Борис: 340\\nАня: 120\\nВика: 120\\n&#x27;</code></div></div>",
        startCode: "def save_scores(filename, scores):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert save_scores("s1.txt", {"Вика": 120, "Борис": 340, "Аня": 120}) == "Борис: 340\\nАня: 120\\nВика: 120\\n", "Ожидалось «Борис: 340», «Аня: 120», «Вика: 120» — каждая строка с переносом"
    with open("s1.txt", encoding="utf-8") as f:
        assert f.read() == "Борис: 340\\nАня: 120\\nВика: 120\\n", "В самом файле должны быть те же строки"
    assert save_scores("s2.txt", {}) == "", "Для пустого словаря файл пустой"
    assert save_scores("s1.txt", {"Ян": 5}) == "Ян: 5\\n", "Повторная запись в тот же файл должна заменить старое содержимое"
    __task_passed__ = True
    print("✅ Таблица рекордов сохранена правильно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция save_scores называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex2_phone",
        title: "Номер телефона",
        difficulty: "hard",
        lesson: 11,
        hw: false,
        exam: 2,
        desc: "<p>Напишите функцию <code>format_phone(text)</code>. Оставьте в строке только цифры. Если цифр ровно 11 и первая из них <code>7</code> или <code>8</code>, верните номер в виде <code>+7 (XXX) XXX-XX-XX</code>. В любом другом случае выбросите ошибку <code>ValueError(&quot;Неверный номер&quot;)</code>.</p><p>Подсказка: <code>ch.isdigit()</code> проверяет, цифра ли символ.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">format_phone(&quot;8 (912) 345-67-89&quot;)\nformat_phone(&quot;+7 912 345 67 89&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;+7 (912) 345-67-89&#x27;\n&#x27;+7 (912) 345-67-89&#x27;</code></div></div>",
        startCode: "def format_phone(text):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert format_phone("8 (912) 345-67-89") == "+7 (912) 345-67-89", "Номер с восьмёркой и скобками"
    assert format_phone("+7 912 345 67 89") == "+7 (912) 345-67-89", "Номер с +7 и пробелами"
    assert format_phone("79123456789") == "+7 (912) 345-67-89", "Номер одними цифрами"
    for bad in ["12345", "9123456789", "5 912 345 67 89"]:
        try:
            format_phone(bad)
        except ValueError as e:
            assert str(e) == "Неверный номер", "Текст ошибки должен быть «Неверный номер»"
        else:
            raise AssertionError(f"Для «{bad}» нужна ошибка ValueError")
    __task_passed__ = True
    print("✅ Номера приводятся к одному виду, а неверные — отсеиваются!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция format_phone называется именно так.")
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
        startCode: "import math\n\ndef circle_area(r):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "import math\n\ndef hypotenuse(a, b):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "import random\n\ndef roll_dice(n):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv12_path_length",
        title: "Длина маршрута",
        difficulty: "medium",
        lesson: 12,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> модуль <code>math</code> вместе с кортежами, циклами и функциями.</p><p>Напишите функцию <code>path_length(points)</code>. <code>points</code> — список точек маршрута, каждая точка — кортеж <code>(x, y)</code>. Верните длину маршрута — сумму расстояний между соседними точками, округлённую до 2 знаков. Если точек меньше двух, верните <code>0</code>.</p><p>Расстояние между точками: <code>math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">path_length([(0, 0), (3, 4), (3, 10)])\npath_length([(0, 0), (1, 1)])</code></div><div><span>Результат</span><code class=\"io-box\">11.0\n1.41</code></div></div>",
        startCode: "import math\n\ndef path_length(points):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert path_length([(0, 0), (3, 4), (3, 10)]) == 11.0, f"Маршрут (0,0) → (3,4) → (3,10): 5 + 6 = 11.0, а функция вернула {path_length([(0, 0), (3, 4), (3, 10)])}"
    assert path_length([(0, 0), (1, 1)]) == 1.41, "Диагональ квадрата 1×1 — 1.41"
    assert path_length([]) == 0, "Нет точек — длина 0"
    assert path_length([(5, 5)]) == 0, "Одна точка — длина 0"
    assert path_length([(0, 0), (0, 2), (0, 0)]) == 4.0, "Туда и обратно: 2 + 2 = 4.0"
    __task_passed__ = True
    print("✅ Длина маршрута считается верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция path_length называется именно так.")
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
        title: "Класс «Прямоугольник»",
        difficulty: "hard",
        lesson: 13,
        hw: true,
        desc: "<p>Напишите класс <code>Rectangle</code>. При создании он получает ширину и высоту: <code>Rectangle(10, 5)</code>. Метод <code>get_area()</code> возвращает площадь — ширину, умноженную на высоту.</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">r = Rectangle(10, 5)\nr.get_area()  # 50\nRectangle(2, 3).get_area()  # 6</code>",
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
        title: "Класс «Банковский счёт»",
        difficulty: "hard",
        lesson: 13,
        hw: true,
        desc: "<p>Напишите класс <code>BankAccount</code>: <code>BankAccount(balance)</code> создаёт счёт с начальным балансом, атрибут <code>balance</code> хранит текущий баланс, <code>deposit(amount)</code> пополняет счёт, <code>withdraw(amount)</code> снимает деньги и возвращает <code>True</code>. Если денег не хватает, баланс не меняется, а <code>withdraw</code> возвращает <code>False</code>.</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">acc = BankAccount(100)\nacc.deposit(50)\nacc.balance  # 150\nacc.withdraw(30)  # True\nacc.withdraw(500)  # False\nacc.balance  # 120</code>",
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
        title: "Класс «Стек»",
        difficulty: "hard",
        lesson: 13,
        hw: true,
        desc: "<p>Напишите класс <code>Stack</code> — «стопку», в которой последний положенный элемент забирается первым. Методы: <code>push(item)</code> — положить наверх; <code>pop()</code> — забрать и вернуть верхний элемент (<code>None</code>, если стек пуст); <code>peek()</code> — вернуть верхний элемент, не забирая (<code>None</code>, если пусто); <code>is_empty()</code> — пуст ли стек; <code>size()</code> — сколько элементов.</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">s = Stack()\ns.push(1)\ns.push(2)\ns.peek()  # 2\ns.pop()  # 2\ns.size()  # 1</code>",
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
        id: "rv13_cart_class",
        title: "Класс «Корзина»",
        difficulty: "hard",
        lesson: 13,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> классы вместе со словарями, циклами и ошибками.</p><p>Напишите класс <code>Cart</code> — корзину интернет-магазина:</p><ul><li><code>add(name, price, qty=1)</code> — добавить товар. Если товар уже есть, увеличить количество (цена остаётся прежней). Цена или количество меньше 1 — <code>ValueError</code>;</li><li><code>remove(name)</code> — убрать товар целиком. Если его нет — <code>ValueError(\"Нет такого товара\")</code>;</li><li><code>total()</code> — стоимость всей корзины (цена × количество);</li><li><code>count()</code> — сколько всего штук товаров.</li></ul><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">c = Cart()\nc.add(\"хлеб\", 45, 2)\nc.add(\"сыр\", 300)\nc.total()\nc.count()</code></div><div><span>Результат</span><code class=\"io-box\">\n\n\n390\n3</code></div></div>",
        startCode: "class Cart:\n    def __init__(self):\n        # напишите решение здесь\n        pass\n\n    def add(self, name, price, qty=1):\n        pass\n\n    def remove(self, name):\n        pass\n\n    def total(self):\n        pass\n\n    def count(self):\n        pass\n",
        testCode: `
try:
    c = Cart()
    assert c.total() == 0 and c.count() == 0, "Пустая корзина: total() == 0 и count() == 0"
    c.add("хлеб", 45, 2)
    c.add("сыр", 300)
    assert c.total() == 390, f"2 хлеба по 45 и сыр за 300 — 390, а total() вернул {c.total()}"
    assert c.count() == 3, f"В корзине 3 штуки товаров, а count() вернул {c.count()}"
    c.add("хлеб", 45)
    assert c.count() == 4 and c.total() == 435, "Повторный хлеб увеличивает количество: 4 штуки, 435 рублей"
    for args in [("молоко", 0), ("молоко", 89, 0), ("молоко", -5, 1)]:
        try:
            c.add(*args)
            assert False, f"add{args} должен выбросить ValueError"
        except ValueError:
            pass
    assert c.total() == 435, "Неверный товар не должен попасть в корзину"
    c.remove("сыр")
    assert c.total() == 135 and c.count() == 3, "После remove(\\"сыр\\") остаётся 3 хлеба на 135 рублей"
    try:
        c.remove("сыр")
        assert False, "Повторный remove(\\"сыр\\") должен выбросить ValueError"
    except ValueError:
        pass
    other = Cart()
    assert other.count() == 0, "У каждой корзины свои товары"
    __task_passed__ = True
    print("✅ Корзина работает!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Cart и его методы называются именно так.")
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
        startCode: "from datetime import datetime\n\ndef format_date(text):\n    # напишите решение здесь\n    pass\n",
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
        title: "Разница в днях",
        difficulty: "hard",
        lesson: 14,
        hw: true,
        desc: "<p>Напишите функцию <code>get_days_diff(date1_str, date2_str)</code>. Даты приходят строками в формате ГГГГ-ММ-ДД. Верните, сколько дней проходит от первой даты до второй.</p><p>Подсказка: <code>datetime.strptime()</code> превращает строку в дату, а у разности дат есть атрибут <code>.days</code>. В 2024 году в феврале 29 дней.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">get_days_diff(&#x27;2025-01-01&#x27;, &#x27;2025-01-10&#x27;)\nget_days_diff(&#x27;2024-02-01&#x27;, &#x27;2024-03-01&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">9\n29</code></div></div>",
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
        desc: "<p>Напишите функцию <code>weekday_name(date_str)</code>. Она получает дату строкой в формате ГГГГ-ММ-ДД и возвращает день недели по-русски маленькими буквами: <code>понедельник</code>, <code>вторник</code>, …, <code>воскресенье</code>.</p><p>Подсказка: метод <code>weekday()</code> возвращает 0 для понедельника и 6 для воскресенья.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">weekday_name(&#x27;2024-01-01&#x27;)\nweekday_name(&#x27;2000-01-01&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;понедельник&#x27;\n&#x27;суббота&#x27;</code></div></div>",
        startCode: "from datetime import datetime\n\ndef weekday_name(date_str):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "from datetime import datetime\n\ndef age_on(birth, day):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv14_weekends",
        title: "Сколько выходных",
        difficulty: "medium",
        lesson: 14,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> дата и время вместе с циклами, условиями и функциями.</p><p>Напишите функцию <code>weekend_days(start, end)</code>. Даты приходят строками вида <code>\"ДД.ММ.ГГГГ\"</code>. Верните, сколько суббот и воскресений в промежутке от <code>start</code> до <code>end</code> включительно. Если <code>end</code> раньше <code>start</code> — верните 0.</p><p>Подсказки: строку в дату — <code>datetime.strptime(s, \"%d.%m.%Y\")</code>, следующий день — <code>+ timedelta(days=1)</code>, у субботы <code>weekday()</code> равен 5, у воскресенья — 6.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">weekend_days(\"09.11.2026\", \"15.11.2026\")\nweekend_days(\"01.12.2026\", \"31.12.2026\")</code></div><div><span>Результат</span><code class=\"io-box\">2\n8</code></div></div>",
        startCode: "from datetime import datetime, timedelta\n\ndef weekend_days(start, end):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert weekend_days("09.11.2026", "15.11.2026") == 2, f"С понедельника 9 ноября по воскресенье 15 ноября 2026 — 2 выходных, а функция вернула {weekend_days('09.11.2026', '15.11.2026')}"
    assert weekend_days("01.12.2026", "31.12.2026") == 8, "В декабре 2026 года 8 выходных дней"
    assert weekend_days("14.11.2026", "14.11.2026") == 1, "Один день, и это суббота — 1"
    assert weekend_days("12.11.2026", "12.11.2026") == 0, "Один день, четверг — 0"
    assert weekend_days("15.11.2026", "09.11.2026") == 0, "Конец раньше начала — 0"
    assert weekend_days("26.12.2026", "03.01.2027") == 4, "Через Новый год: 26, 27 декабря и 2, 3 января — 4"
    __task_passed__ = True
    print("✅ Выходные считаются верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция weekend_days называется именно так.")
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
        desc: "<p>Напишите функцию <code>most_common_word(text)</code>, которая возвращает самое частое слово текста маленькими буквами. Регистр не важен, знаков препинания нет. Если таких слов несколько, верните то, что встретилось раньше.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">most_common_word(&#x27;Кот видит кота а кот спит&#x27;)\nmost_common_word(&#x27;яблоко груша&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;кот&#x27;\n&#x27;яблоко&#x27;</code></div></div>",
        startCode: "def most_common_word(text):\n    # напишите решение здесь\n    pass\n",
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
        id: "rv15_todo_report",
        title: "Отчёт по делам",
        difficulty: "medium",
        lesson: 15,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> список дел из словарей, циклы, условия и строки.</p><p>Напишите функцию <code>todo_report(todos)</code>. <code>todos</code> — список словарей вида <code>{\"title\": \"купить хлеб\", \"done\": True}</code>. Верните отчёт строкой: первая строка — <code>Сделано: X из Y</code>, а под ней — каждое несделанное дело в исходном порядке в виде <code>- название</code>. Строки соединяются через <code>\"\\n\"</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">todos = [{\"title\": \"купить хлеб\", \"done\": True},\n         {\"title\": \"сделать уроки\", \"done\": False}]\nprint(todo_report(todos))</code></div><div><span>Результат</span><code class=\"io-box\">\n\nСделано: 1 из 2\n- сделать уроки</code></div></div>",
        startCode: "def todo_report(todos):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    todos = [
        {"title": "купить хлеб", "done": True},
        {"title": "сделать уроки", "done": False},
        {"title": "позвонить бабушке", "done": False},
    ]
    r = todo_report(todos)
    assert r == "Сделано: 1 из 3\\n- сделать уроки\\n- позвонить бабушке", f"Неверный отчёт:\\n{r}"
    assert todo_report([]) == "Сделано: 0 из 0", "Пустой список: «Сделано: 0 из 0»"
    assert todo_report([{"title": "зарядка", "done": True}]) == "Сделано: 1 из 1", "Всё сделано — только первая строка"
    assert todo_report([{"title": "а", "done": False}]) == "Сделано: 0 из 1\\n- а", "Одно несделанное дело"
    __task_passed__ = True
    print("✅ Отчёт по делам собирается верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция todo_report называется именно так.")
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
        startCode: "def build_url(base, params):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "import json\n\ndef avg_temp(json_text):\n    # напишите решение здесь\n    pass\n",
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
        startCode: "import json\n\ndef top_player(json_text):\n    # напишите решение здесь\n    pass\n",
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
    },
    {
        id: "rv16_weather_json",
        title: "Сводка погоды из JSON",
        difficulty: "medium",
        lesson: 16,
        hw: true,
        review: true,
        desc: "<p><strong>Повторение:</strong> JSON вместе со словарями, списками, ошибками и функциями.</p><p>Сервис погоды присылает текст JSON вида <code>{\"city\": \"Москва\", \"days\": [{\"date\": \"10.11\", \"t\": 3}, …]}</code>. Напишите функцию <code>weather_summary(text)</code>, которая возвращает строку <code>Москва: от -2 до 5, в среднем 1.5</code> — самую низкую и самую высокую температуру и среднюю, округлённую до 1 знака.</p><p>Если дней в списке нет — верните <code>Москва: нет данных</code>. Если текст — не JSON, верните <code>Ошибка данных</code> (<code>json.loads</code> выбрасывает <code>ValueError</code>).</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">weather_summary('{\"city\": \"Сочи\", \"days\": [{\"date\": \"10.11\", \"t\": 12}, {\"date\": \"11.11\", \"t\": 15}]}')\nweather_summary(\"не json\")</code></div><div><span>Результат</span><code class=\"io-box\">\"Сочи: от 12 до 15, в среднем 13.5\"\n\"Ошибка данных\"</code></div></div>",
        startCode: "import json\n\ndef weather_summary(text):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    import json
    data = {"city": "Москва", "days": [{"date": "10.11", "t": 3}, {"date": "11.11", "t": -2}, {"date": "12.11", "t": 5}, {"date": "13.11", "t": 0}]}
    r = weather_summary(json.dumps(data, ensure_ascii=False))
    assert r == "Москва: от -2 до 5, в среднем 1.5", f"Должно быть «Москва: от -2 до 5, в среднем 1.5», а вернулось «{r}»"
    r = weather_summary('{"city": "Сочи", "days": [{"date": "10.11", "t": 12}, {"date": "11.11", "t": 15}]}')
    assert r == "Сочи: от 12 до 15, в среднем 13.5", f"Сочи: должно быть «Сочи: от 12 до 15, в среднем 13.5», а вернулось «{r}»"
    assert weather_summary('{"city": "Омск", "days": []}') == "Омск: нет данных", "Пустой список дней — «Омск: нет данных»"
    assert weather_summary("не json") == "Ошибка данных", "Не JSON — «Ошибка данных»"
    assert weather_summary('{"city": "Тула", "days": [{"date": "1.11", "t": 1}, {"date": "2.11", "t": 1}, {"date": "3.11", "t": 2}]}') == "Тула: от 1 до 2, в среднем 1.3", "Среднее округляется до 1 знака: 1.3"
    __task_passed__ = True
    print("✅ Сводка погоды собирается из JSON!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция weather_summary называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr3_habit",
        title: "Трекер привычек: класс Habit",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        project: 3,
        step: 1,
        projectTitle: "Проект 3: Трекер привычек",
        desc: "<p>Соберём трекер привычек за три шага. Шаг 1 — класс <code>Habit</code> (одна привычка):</p><ul><li><code>Habit(name)</code> — у объекта есть атрибут <code>name</code>, отметок пока нет;</li><li><code>mark(day)</code> — отметить, что в день <code>day</code> (объект <code>date</code>) привычка выполнена. Повторная отметка того же дня ничего не меняет;</li><li><code>is_done(day)</code> — <code>True</code>, если день отмечен;</li><li><code>total()</code> — сколько всего дней отмечено;</li><li><code>streak(today)</code> — серия: сколько дней подряд привычка выполнялась, считая назад от <code>today</code>. Если <code>today</code> ещё не отмечен, серия не прервана — считайте от вчерашнего дня.</li></ul><p>Подсказка: предыдущий день — <code>day - timedelta(days=1)</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">h = Habit(\"Зарядка\")\nh.mark(date(2026, 11, 9))\nh.mark(date(2026, 11, 10))\nh.streak(date(2026, 11, 10))\nh.streak(date(2026, 11, 11))\nh.streak(date(2026, 11, 12))</code></div><div><span>Результат</span><code class=\"io-box\">\n\n\n2\n2\n0</code></div></div>",
        startCode: "from datetime import date, timedelta\n\nclass Habit:\n    def __init__(self, name):\n        # напишите решение здесь\n        pass\n\n    def mark(self, day):\n        pass\n\n    def is_done(self, day):\n        pass\n\n    def total(self):\n        pass\n\n    def streak(self, today):\n        pass\n",
        testCode: `
try:
    from datetime import date
    h = Habit("Зарядка")
    assert h.name == "Зарядка", "У привычки должен быть атрибут name"
    assert h.total() == 0, "У новой привычки 0 отметок"
    assert h.streak(date(2026, 11, 10)) == 0, "У новой привычки серия 0"
    h.mark(date(2026, 11, 10))
    h.mark(date(2026, 11, 10))
    assert h.total() == 1, "Повторная отметка того же дня не считается"
    h.mark(date(2026, 11, 9))
    h.mark(date(2026, 11, 8))
    h.mark(date(2026, 11, 5))
    assert h.total() == 4, f"Отмечено 4 разных дня, а total() вернул {h.total()}"
    assert h.is_done(date(2026, 11, 9)) is True, "9 ноября отмечено — is_done должен вернуть True"
    assert h.is_done(date(2026, 11, 7)) is False, "7 ноября не отмечено — is_done должен вернуть False"
    assert h.streak(date(2026, 11, 10)) == 3, f"Отмечены 8, 9 и 10 ноября: серия на 10 ноября — 3, а не {h.streak(date(2026, 11, 10))}"
    assert h.streak(date(2026, 11, 11)) == 3, "11 ноября ещё не отмечено — серия считается от вчера и равна 3"
    assert h.streak(date(2026, 11, 12)) == 0, "11 ноября пропущено — на 12 ноября серия 0"
    assert h.streak(date(2026, 11, 6)) == 1, "На 6 ноября: вчера (5-е) отмечено, 4-е нет — серия 1"
    m = Habit("Чтение")
    m.mark(date(2026, 10, 31))
    m.mark(date(2026, 11, 1))
    assert m.streak(date(2026, 11, 1)) == 2, "Серия должна переходить через конец месяца: 31 октября и 1 ноября — это 2 дня подряд"
    assert Habit("Бег").name == "Бег" and Habit("Бег").total() == 0, "У каждой привычки свои отметки"
    __task_passed__ = True
    print("✅ Класс Habit готов: отметки и серии дней считаются!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Habit и его методы называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr3_tracker",
        title: "Трекер привычек: класс Tracker",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        project: 3,
        step: 2,
        projectTitle: "Проект 3: Трекер привычек",
        desc: "<p>Шаг 2 — класс <code>Tracker</code>, который хранит все привычки. Скопируйте в программу класс <code>Habit</code> из шага 1 и напишите:</p><ul><li><code>Tracker()</code> — у объекта есть словарь <code>habits</code>: имя → объект <code>Habit</code>;</li><li><code>add(name)</code> — создаёт привычку, кладёт в словарь и возвращает её. Если такая уже есть — <code>ValueError(\"Такая привычка уже есть\")</code>;</li><li><code>mark(name, day)</code> — отмечает день у привычки. Если привычки нет — <code>ValueError(\"Нет такой привычки\")</code>;</li><li><code>report(today)</code> — отчёт строкой: по строке на привычку, по алфавиту, в виде <code>Зарядка: серия 2, всего 3</code>. Строки соединяются через <code>\"\\n\"</code>. Если привычек нет — <code>Привычек пока нет</code>.</li></ul><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">t = Tracker()\nt.add(\"Чтение\")\nt.add(\"Зарядка\")\nt.mark(\"Зарядка\", date(2026, 11, 10))\nprint(t.report(date(2026, 11, 10)))</code></div><div><span>Результат</span><code class=\"io-box\">\n\n\n\nЗарядка: серия 1, всего 1\nЧтение: серия 0, всего 0</code></div></div>",
        startCode: "from datetime import date, timedelta\n\n# Скопируйте сюда класс Habit из шага 1\n\nclass Tracker:\n    def __init__(self):\n        # напишите решение здесь\n        pass\n\n    def add(self, name):\n        pass\n\n    def mark(self, name, day):\n        pass\n\n    def report(self, today):\n        pass\n",
        testCode: `
try:
    from datetime import date
    t = Tracker()
    assert t.report(date(2026, 11, 10)) == "Привычек пока нет", "Пустой трекер: отчёт «Привычек пока нет»"
    h = t.add("Чтение")
    assert isinstance(h, Habit) and h.name == "Чтение", "add должен вернуть новый объект Habit"
    t.add("Зарядка")
    assert sorted(t.habits) == ["Зарядка", "Чтение"], "В словаре habits должны лежать обе привычки"
    try:
        t.add("Зарядка")
        assert False, "Повторный add(\\"Зарядка\\") должен выбросить ValueError"
    except ValueError:
        pass
    for d in [8, 9, 10]:
        t.mark("Зарядка", date(2026, 11, d))
    t.mark("Чтение", date(2026, 11, 5))
    try:
        t.mark("Бег", date(2026, 11, 10))
        assert False, "mark для несуществующей привычки должен выбросить ValueError"
    except ValueError:
        pass
    r = t.report(date(2026, 11, 10))
    assert r == "Зарядка: серия 3, всего 3\\nЧтение: серия 0, всего 1", f"Неверный отчёт на 10 ноября:\\n{r}"
    r = t.report(date(2026, 11, 11))
    assert r == "Зарядка: серия 3, всего 3\\nЧтение: серия 0, всего 1", f"11 ноября ещё не отмечено — серия зарядки по-прежнему 3:\\n{r}"
    __task_passed__ = True
    print("✅ Трекер собирает привычки и строит отчёт!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что классы Habit и Tracker и их методы называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "pr3_json",
        title: "Трекер привычек: сохранить в JSON",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        project: 3,
        step: 3,
        projectTitle: "Проект 3: Трекер привычек",
        desc: "<p>Шаг 3 — трекер сохраняется в файл JSON и загружается обратно. Скопируйте классы <code>Habit</code> и <code>Tracker</code> из шага 2 и добавьте:</p><ul><li>метод <code>save(filename)</code> у класса <code>Tracker</code> — записывает в файл JSON-объект: имя привычки → список отмеченных дат строками <code>\"ГГГГ-ММ-ДД\"</code>, даты по возрастанию. Например: <code>{\"Зарядка\": [\"2026-11-09\", \"2026-11-10\"], \"Чтение\": []}</code>;</li><li>функцию <code>load_tracker(filename)</code> — читает такой файл и возвращает новый <code>Tracker</code> со всеми привычками и отметками. Если файла нет — пустой <code>Tracker</code>.</li></ul><p>Подсказки: дату в строку — <code>day.strftime(\"%Y-%m-%d\")</code>, строку в дату — <code>datetime.strptime(s, \"%Y-%m-%d\").date()</code>. Текст JSON — <code>json.dumps(data, ensure_ascii=False)</code> и <code>json.loads(text)</code>. Файлы открывайте с <code>encoding=\"utf-8\"</code>.</p>",
        startCode: "import json\nfrom datetime import date, datetime, timedelta\n\n# Скопируйте сюда классы Habit и Tracker из шага 2\n# и добавьте классу Tracker метод save(self, filename)\n\ndef load_tracker(filename):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    import json
    from datetime import date
    t = Tracker()
    t.add("Чтение")
    t.add("Зарядка")
    t.add("Бег")
    for d in [10, 8, 9]:
        t.mark("Зарядка", date(2026, 11, d))
    t.mark("Чтение", date(2026, 10, 31))
    t.save("pr3_habits.json")
    with open("pr3_habits.json", encoding="utf-8") as f:
        data = json.loads(f.read())
    expected = {"Чтение": ["2026-10-31"], "Зарядка": ["2026-11-08", "2026-11-09", "2026-11-10"], "Бег": []}
    assert data == expected, f"В файле должен быть JSON {expected}, а сейчас {data}"
    t2 = load_tracker("pr3_habits.json")
    assert isinstance(t2, Tracker), "load_tracker должна вернуть объект Tracker"
    assert sorted(t2.habits) == ["Бег", "Зарядка", "Чтение"], "После загрузки должны быть все три привычки"
    assert t2.habits["Зарядка"].is_done(date(2026, 11, 9)), "После загрузки отметки должны стать датами: is_done(date(2026, 11, 9)) — True"
    assert t2.report(date(2026, 11, 10)) == t.report(date(2026, 11, 10)), "Отчёт загруженного трекера должен совпадать с исходным"
    t2.mark("Бег", date(2026, 11, 10))
    assert t2.habits["Бег"].total() == 1, "В загруженный трекер можно добавлять отметки"
    empty = load_tracker("pr3_no_such_file.json")
    assert isinstance(empty, Tracker) and empty.report(date(2026, 11, 10)) == "Привычек пока нет", "Если файла нет — пустой Tracker"
    __task_passed__ = True
    print("✅ Трекер сохраняется в JSON и загружается обратно. Проект готов!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что классы Habit, Tracker, метод save и функция load_tracker называются именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex3_orders_total",
        title: "Сумма заказов из JSON",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 3,
        desc: "<p>Напишите функцию <code>orders_total(json_text)</code>. Она получает JSON-список заказов вида <code>[{&quot;item&quot;: &quot;чай&quot;, &quot;price&quot;: 120, &quot;qty&quot;: 2}, ...]</code> и возвращает общую сумму: цена × количество по всем заказам. Для пустого списка — 0.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">orders_total(&#x27;[{&quot;item&quot;: &quot;чай&quot;, &quot;price&quot;: 120, &quot;qty&quot;: 2}, {&quot;item&quot;: &quot;торт&quot;, &quot;price&quot;: 450, &quot;qty&quot;: 1}]&#x27;)</code></div><div><span>Результат</span><code class=\"io-box\">690</code></div></div>",
        startCode: "import json\n\ndef orders_total(json_text):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert orders_total('[{"item": "чай", "price": 120, "qty": 2}, {"item": "торт", "price": 450, "qty": 1}]') == 690, "120 × 2 + 450 × 1 = 690"
    assert orders_total("[]") == 0, "Для пустого списка — 0"
    assert orders_total('[{"item": "ручка", "price": 35, "qty": 10}]') == 350, "35 × 10 = 350"
    __task_passed__ = True
    print("✅ Сумма заказов посчитана верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция orders_total называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex3_library",
        title: "Класс «Библиотека»",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 3,
        desc: "<p>Напишите класс <code>Library</code>. Методы: <code>add_book(title)</code> — добавить экземпляр книги (одной книги может быть несколько экземпляров); <code>take(title)</code> — выдать книгу: вернуть <code>True</code>, если экземпляр есть, иначе <code>False</code>; <code>return_book(title)</code> — вернуть экземпляр; <code>available()</code> — список названий, которые сейчас есть, по алфавиту и без повторов.</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">lib = Library()\nlib.add_book(&quot;Незнайка&quot;)\nlib.add_book(&quot;Буратино&quot;)\nlib.take(&quot;Незнайка&quot;)  # True\nlib.take(&quot;Незнайка&quot;)  # False\nlib.available()  # [&#x27;Буратино&#x27;]</code>",
        startCode: "class Library:\n    def __init__(self):\n        pass\n\n    def add_book(self, title):\n        pass\n\n    def take(self, title):\n        pass\n\n    def return_book(self, title):\n        pass\n\n    def available(self):\n        pass\n",
        testCode: `
try:
    lib = Library()
    lib.add_book("Незнайка")
    lib.add_book("Незнайка")
    lib.add_book("Буратино")
    assert lib.available() == ["Буратино", "Незнайка"], "available() должен вернуть названия по алфавиту без повторов"
    assert lib.take("Незнайка") is True and lib.take("Незнайка") is True, "Два экземпляра «Незнайки» можно выдать дважды"
    assert lib.take("Незнайка") is False, "Третий раз выдать нельзя — экземпляры закончились"
    assert lib.available() == ["Буратино"], "Выданных книг нет в списке доступных"
    lib.return_book("Незнайка")
    assert lib.available() == ["Буратино", "Незнайка"], "Возвращённая книга снова доступна"
    assert lib.take("Карлсон") is False, "Книги, которой нет, выдать нельзя"
    assert Library().available() == [], "У новой библиотеки нет книг — у каждой библиотеки свои книги"
    __task_passed__ = True
    print("✅ Библиотека работает как настоящая!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Library называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex3_student",
        title: "Класс «Ученик»",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        exam: 3,
        desc: "<p>Напишите класс <code>Student</code>. При создании он получает имя: <code>Student(&quot;Аня&quot;)</code>. Методы: <code>add_grade(g)</code> — добавить оценку; если она не от 1 до 5, выбросить <code>ValueError(&quot;Оценка должна быть от 1 до 5&quot;)</code> и ничего не добавлять; <code>average()</code> — средний балл, округлённый до 2 знаков, или <code>0</code>, если оценок нет. А <code>print(student)</code> должен выводить <code>Аня: 4.67</code> — имя и средний балл.</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">s = Student(&quot;Аня&quot;)\ns.add_grade(5)\ns.add_grade(5)\ns.add_grade(4)\ns.average()  # 4.67\nstr(s)  # &#x27;Аня: 4.67&#x27;</code>",
        startCode: "class Student:\n    def __init__(self, name):\n        pass\n\n    def add_grade(self, g):\n        pass\n\n    def average(self):\n        pass\n\n    def __str__(self):\n        pass\n",
        testCode: `
try:
    s = Student("Аня")
    assert s.average() == 0, "Без оценок средний балл — 0"
    s.add_grade(5)
    s.add_grade(5)
    s.add_grade(4)
    assert s.average() == 4.67, "Средний балл 5, 5, 4 — это 4.67"
    assert str(s) == "Аня: 4.67", "print(s) должен выводить «Аня: 4.67»"
    for bad in [6, 0]:
        try:
            s.add_grade(bad)
        except ValueError as e:
            assert str(e) == "Оценка должна быть от 1 до 5", "Текст ошибки должен быть «Оценка должна быть от 1 до 5»"
        else:
            raise AssertionError(f"Для оценки {bad} нужна ошибка ValueError")
    assert s.average() == 4.67, "Неправильные оценки не должны добавляться"
    assert Student("Боря").average() == 0, "У каждого ученика свои оценки"
    __task_passed__ = True
    print("✅ Класс ученика работает безупречно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Student называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex3_birthday",
        title: "Дней до дня рождения",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        exam: 3,
        desc: "<p>Напишите функцию <code>days_to_birthday(today, birth)</code>. Обе даты приходят строками в формате ГГГГ-ММ-ДД: <code>today</code> — сегодняшний день, <code>birth</code> — дата рождения. Верните, сколько дней осталось до ближайшего дня рождения; если он сегодня — <code>0</code>. Дней рождения 29 февраля в проверке не будет.</p><p>Подсказка: превратите строки в даты — <code>datetime.strptime(birth, &quot;%Y-%m-%d&quot;).date()</code>, потом поставьте дате рождения текущий год: <code>b.replace(year=t.year)</code>. Если этот день уже прошёл, возьмите следующий год.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">days_to_birthday(&quot;2026-11-11&quot;, &quot;2012-11-20&quot;)\ndays_to_birthday(&quot;2026-12-31&quot;, &quot;2000-01-01&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">9\n1</code></div></div>",
        startCode: "from datetime import datetime\n\ndef days_to_birthday(today, birth):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert days_to_birthday("2026-11-11", "2012-11-20") == 9, "С 11 по 20 ноября — 9 дней"
    assert days_to_birthday("2026-11-11", "2012-11-11") == 0, "День рождения сегодня — 0"
    assert days_to_birthday("2026-11-11", "2010-05-17") == 187, "До 17 мая 2027 года — 187 дней"
    assert days_to_birthday("2026-12-31", "2000-01-01") == 1, "С 31 декабря до 1 января — 1 день"
    assert days_to_birthday("2027-03-01", "2001-02-28") == 364, "2028 год високосный: до 28 февраля 2028 — 364 дня"
    __task_passed__ = True
    print("✅ Счётчик дней до дня рождения работает!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция days_to_birthday называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "ex3_overdue",
        title: "Просроченные дела",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        exam: 3,
        desc: "<p>Напишите функцию <code>overdue(json_text, today)</code>. <code>json_text</code> — JSON-список дел вида <code>{&quot;title&quot;: &quot;...&quot;, &quot;due&quot;: &quot;2026-11-01&quot;, &quot;done&quot;: false}</code>, <code>today</code> — сегодняшняя дата строкой ГГГГ-ММ-ДД. Верните список названий невыполненных дел, срок которых раньше сегодняшнего дня, — сначала самые старые. Если срок одинаковый, сохраните порядок из списка.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">overdue(&#x27;[{&quot;title&quot;: &quot;Сдать проект&quot;, &quot;due&quot;: &quot;2026-11-05&quot;, &quot;done&quot;: false}, {&quot;title&quot;: &quot;Купить хлеб&quot;, &quot;due&quot;: &quot;2026-11-20&quot;, &quot;done&quot;: false}]&#x27;, &quot;2026-11-11&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">[&#x27;Сдать проект&#x27;]</code></div></div>",
        startCode: "import json\n\ndef overdue(json_text, today):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    data = '[{"title": "Сдать проект", "due": "2026-11-05", "done": false}, {"title": "Купить хлеб", "due": "2026-11-12", "done": false}, {"title": "Позвонить бабушке", "due": "2026-11-01", "done": false}, {"title": "Убрать комнату", "due": "2026-10-30", "done": true}, {"title": "Выучить стих", "due": "2026-11-05", "done": false}]'
    assert overdue(data, "2026-11-11") == ["Позвонить бабушке", "Сдать проект", "Выучить стих"], "Ожидалось ['Позвонить бабушке', 'Сдать проект', 'Выучить стих']: выполненные и будущие дела не просрочены"
    assert overdue(data, "2026-11-01") == [], "Срок «сегодня» — ещё не просрочено"
    assert overdue("[]", "2026-11-11") == [], "Для пустого списка — пустой список"
    __task_passed__ = True
    print("✅ Просроченные дела найдены и отсортированы!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция overdue называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fx_text_stats",
        title: "Статистика текста",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Программа получает одну строку текста. Слова разделены пробелами, на концах слов могут стоять знаки <code>. , ! ?</code> — их не учитывайте. Выведите три строки:</p><ul><li><code>Слов: N</code> — сколько всего слов;</li><li><code>Уникальных слов: K</code> — без учёта регистра: «Кот» и «кот» — одно слово;</li><li><code>Самое длинное: слово</code> — маленькими буквами; если таких несколько — то, что встретилось первым.</li></ul><p>Темы: строки (урок 9), множества (урок 8), циклы (урок 5).</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Ввод</span><code class=\"io-box\">Кот видит кота, а кот видит мышь!</code></div><div><span>Вывод</span><code class=\"io-box\">Слов: 7\nУникальных слов: 5\nСамое длинное: видит</code></div></div>",
        startCode: "text = input()\n\n# напишите решение здесь\n",
        kind: "io",
        cases: [{"in": "Кот видит кота, а кот видит мышь!", "out": "Слов: 7\nУникальных слов: 5\nСамое длинное: видит"}, {"in": "Учиться программировать интересно и полезно", "out": "Слов: 5\nУникальных слов: 5\nСамое длинное: программировать"}, {"in": "Да да ДА нет.", "out": "Слов: 4\nУникальных слов: 2\nСамое длинное: нет"}]
    },
    {
        id: "fx_report",
        title: "Ведомость успеваемости",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Напишите функцию <code>report(grades)</code>. Она получает словарь «имя → список оценок» и возвращает список строк <code>\"Имя: средний балл\"</code>. Средний балл округлите до одного знака: <code>round(x, 1)</code>.</p><ul><li>Сначала — ученики с самым высоким средним баллом; при равном балле — по алфавиту.</li><li>Ученики без оценок идут в конце, по алфавиту, в виде <code>\"Имя: нет оценок\"</code>.</li></ul><p>Темы: функции (урок 7), словари (урок 8), сортировка с <code>key</code>.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">report({&quot;Анна&quot;: [5, 4, 5], &quot;Борис&quot;: [3, 4], &quot;Вера&quot;: []})</code></div><div><span>Результат</span><code class=\"io-box\">[&#x27;Анна: 4.7&#x27;, &#x27;Борис: 3.5&#x27;, &#x27;Вера: нет оценок&#x27;]</code></div></div>",
        startCode: "def report(grades):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert report({"Анна": [5, 4, 5], "Борис": [3, 4], "Вера": [5, 5]}) == ["Вера: 5.0", "Анна: 4.7", "Борис: 3.5"], "Ожидалось ['Вера: 5.0', 'Анна: 4.7', 'Борис: 3.5']: от лучшего среднего к худшему"
    assert report({"Яна": [4], "Иван": [4]}) == ["Иван: 4.0", "Яна: 4.0"], "При одинаковом балле — по алфавиту: ['Иван: 4.0', 'Яна: 4.0']"
    assert report({"Олег": [], "Анна": [5]}) == ["Анна: 5.0", "Олег: нет оценок"], "Ученик без оценок — в конце: 'Олег: нет оценок'"
    assert report({}) == [], "Для пустого словаря — пустой список"
    __task_passed__ = True
    print("✅ Ведомость составлена верно!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция report называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fx_parse_numbers",
        title: "Числа из строки",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Напишите функцию <code>parse_numbers(text)</code>. Она получает строку с числами через запятую и возвращает пару <code>(числа, ошибки)</code>: список целых чисел, которые удалось прочитать, и сколько частей оказались не числами.</p><ul><li>Пробелы вокруг чисел не мешают: <code>\" 7 \"</code> — это 7.</li><li>Пустые части (две запятые подряд, пустая строка) пропускайте — это не ошибка.</li><li>Используйте <code>try-except</code>: пусть <code>int()</code> сам скажет, что строка — не целое число.</li></ul><p>Темы: строки (урок 9), обработка ошибок (урок 11).</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">parse_numbers(&quot;10, 20, abc, 30&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">([10, 20, 30], 1)</code></div></div>",
        startCode: "def parse_numbers(text):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert __uses_node__("Try"), "Используйте try-except: пусть int() сам скажет, что строка — не число"
    assert parse_numbers("10, 20, abc, 30") == ([10, 20, 30], 1), "Для '10, 20, abc, 30' ожидалось ([10, 20, 30], 1)"
    assert parse_numbers("1,2,,3") == ([1, 2, 3], 0), "Пустая часть между запятыми — не ошибка: ([1, 2, 3], 0)"
    assert parse_numbers("x, y") == ([], 2), "Для 'x, y' ожидалось ([], 2)"
    assert parse_numbers("") == ([], 0), "Для пустой строки ожидалось ([], 0)"
    assert parse_numbers(" -5 , 7.5, 8") == ([-5, 8], 1), "7.5 — не целое число: для ' -5 , 7.5, 8' ожидалось ([-5, 8], 1)"
    __task_passed__ = True
    print("✅ Все числа прочитаны, ошибки посчитаны!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция parse_numbers называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fx_account",
        title: "Банковский счёт",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Напишите класс <code>Account</code> — банковский счёт.</p><ul><li><code>Account(owner, balance=0)</code> — владелец и начальный баланс; в объекте есть атрибуты <code>owner</code>, <code>balance</code> и <code>history</code> — пустой список операций.</li><li><code>deposit(amount)</code> — пополнить: баланс растёт, в историю добавляется <code>(\"пополнение\", amount)</code>.</li><li><code>withdraw(amount)</code> — снять: баланс уменьшается, в историю — <code>(\"снятие\", amount)</code>.</li><li>Если сумма 0 или меньше, или денег на счёте не хватает — вызовите <code>raise ValueError(...)</code>; баланс и история при этом не меняются.</li></ul><p>Темы: классы (урок 13), обработка ошибок (урок 11), списки (урок 6).</p><p class=\"io-title\">Пример:</p><code class=\"io-box\">a = Account(&quot;Анна&quot;)\na.deposit(500)\na.withdraw(200)\na.balance  # 300\na.history  # [(&#x27;пополнение&#x27;, 500), (&#x27;снятие&#x27;, 200)]</code>",
        startCode: "class Account:\n    def __init__(self, owner, balance=0):\n        # напишите решение здесь\n        pass\n",
        testCode: `
try:
    a = Account("Анна")
    assert a.owner == "Анна" and a.balance == 0 and a.history == [], "Новый счёт: owner = 'Анна', balance = 0, history = []"
    a.deposit(500)
    a.withdraw(200)
    assert a.balance == 300, f"После +500 и −200 баланс должен быть 300, а получилось {a.balance}"
    assert a.history == [("пополнение", 500), ("снятие", 200)], f"history должен быть [('пополнение', 500), ('снятие', 200)], а получилось {a.history}"
    b = Account("Борис", 100)
    assert b.balance == 100, "Начальный баланс передаётся вторым аргументом: Account('Борис', 100)"
    ok = False
    try:
        b.withdraw(150)
    except ValueError:
        ok = True
    assert ok, "Снять больше, чем есть на счёте, нельзя: нужна ошибка ValueError"
    assert b.balance == 100 and b.history == [], "Неудачное снятие не должно менять баланс и историю"
    ok = False
    try:
        b.deposit(0)
    except ValueError:
        ok = True
    assert ok, "Пополнить на 0 (или меньше) нельзя: нужна ошибка ValueError"
    __task_passed__ = True
    print("✅ Счёт работает как в настоящем банке!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что класс Account называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fx_deadline",
        title: "Сколько до дедлайна",
        difficulty: "medium",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Напишите функцию <code>deadline_status(deadline, today)</code>. Обе даты — строки вида <code>\"ДД.ММ.ГГГГ\"</code>. Функция возвращает:</p><ul><li><code>\"сегодня\"</code> — если срок сегодня;</li><li><code>\"завтра\"</code> — если завтра;</li><li><code>\"через N дн.\"</code> — если до срока больше одного дня;</li><li><code>\"просрочено на N дн.\"</code> — если срок прошёл.</li></ul><p>Считайте дни через <code>datetime</code>: тогда переход через месяц и год посчитается сам.</p><p>Темы: дата и время (урок 14), условия (урок 4), f-строки.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">deadline_status(&quot;15.11.2026&quot;, &quot;11.11.2026&quot;)\ndeadline_status(&quot;09.11.2026&quot;, &quot;11.11.2026&quot;)</code></div><div><span>Результат</span><code class=\"io-box\">&#x27;через 4 дн.&#x27;\n&#x27;просрочено на 2 дн.&#x27;</code></div></div>",
        startCode: "from datetime import datetime\n\n\ndef deadline_status(deadline, today):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    assert deadline_status("15.11.2026", "11.11.2026") == "через 4 дн.", "До 15.11.2026 от 11.11.2026 — «через 4 дн.»"
    assert deadline_status("11.11.2026", "11.11.2026") == "сегодня", "Срок в тот же день — «сегодня»"
    assert deadline_status("12.11.2026", "11.11.2026") == "завтра", "Срок на следующий день — «завтра»"
    assert deadline_status("01.01.2027", "25.12.2026") == "через 7 дн.", "Через Новый год: от 25.12.2026 до 01.01.2027 — «через 7 дн.»"
    assert deadline_status("09.11.2026", "11.11.2026") == "просрочено на 2 дн.", "Срок 09.11.2026, сегодня 11.11.2026 — «просрочено на 2 дн.»"
    assert deadline_status("01.03.2028", "28.02.2028") == "через 2 дн.", "2028 — високосный год: от 28.02 до 01.03 — 2 дня"
    __task_passed__ = True
    print("✅ Дедлайны считаются без ошибок!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция deadline_status называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    },
    {
        id: "fx_top_customers",
        title: "Лучшие покупатели",
        difficulty: "hard",
        lesson: 16,
        hw: false,
        exam: 4,
        desc: "<p>Магазин хранит заказы в JSON: список объектов <code>{\"customer\": имя, \"items\": [{\"price\": цена, \"qty\": количество}, …]}</code>. Один покупатель может сделать несколько заказов.</p><p>Напишите функцию <code>top_customers(json_text, n)</code>. Она возвращает список из <code>n</code> покупателей, которые потратили больше всех, в виде пар <code>(имя, сумма)</code>: от большей суммы к меньшей, при равной сумме — по алфавиту. Если покупателей меньше <code>n</code> — верните всех.</p><p>Темы: JSON (урок 16), словари (урок 8), функции (урок 7), сортировка.</p><p class=\"io-title\">Пример:</p><div class=\"io-example\"><div><span>Вызов</span><code class=\"io-box\">top_customers(&#x27;[{&quot;customer&quot;: &quot;Анна&quot;, &quot;items&quot;: [{&quot;price&quot;: 100, &quot;qty&quot;: 2}]}, {&quot;customer&quot;: &quot;Борис&quot;, &quot;items&quot;: [{&quot;price&quot;: 50, &quot;qty&quot;: 3}]}]&#x27;, 1)</code></div><div><span>Результат</span><code class=\"io-box\">[(&#x27;Анна&#x27;, 200)]</code></div></div>",
        startCode: "import json\n\n\ndef top_customers(json_text, n):\n    # напишите решение здесь\n    pass\n",
        testCode: `
try:
    data = '[{"customer": "Анна", "items": [{"price": 100, "qty": 2}]}, {"customer": "Борис", "items": [{"price": 50, "qty": 1}, {"price": 30, "qty": 5}]}, {"customer": "Анна", "items": [{"price": 70, "qty": 1}]}, {"customer": "Вера", "items": []}]'
    assert top_customers(data, 2) == [("Анна", 270), ("Борис", 200)], "Ожидалось [('Анна', 270), ('Борис', 200)]: у Анны два заказа, их суммы складываются"
    assert top_customers(data, 5) == [("Анна", 270), ("Борис", 200), ("Вера", 0)], "Если покупателей меньше n — верните всех, Вера с суммой 0 тоже в списке"
    tie = '[{"customer": "Яна", "items": [{"price": 10, "qty": 1}]}, {"customer": "Иван", "items": [{"price": 5, "qty": 2}]}]'
    assert top_customers(tie, 2) == [("Иван", 10), ("Яна", 10)], "При равной сумме — по алфавиту: [('Иван', 10), ('Яна', 10)]"
    assert top_customers("[]", 3) == [], "Для пустого списка заказов — пустой список"
    __task_passed__ = True
    print("✅ Лучшие покупатели найдены!")
except NameError as e:
    print(f"❌ Ошибка: {e}.\\nПроверьте, что функция top_customers называется именно так.")
except AssertionError as e:
    print(f"❌ Провален скрытый тест: {e}")
except Exception as e:
    print(f"❌ Ошибка выполнения кода: {type(e).__name__}: {e}")
        `
    }
];
