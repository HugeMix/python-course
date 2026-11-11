document.addEventListener('DOMContentLoaded', () => {

    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html',
        'lesson16.html'
    ];

    // Уроки, которые преподаватель открыл по ссылке-заданию (страница «Моё задание»)
    function getUnlockedLessons() {
        try { return JSON.parse(localStorage.getItem('unlocked_lessons')) || []; }
        catch (e) { return []; }
    }

    // Урок доступен: первый урок, или пройден предыдущий, или его открыл преподаватель
    function isLessonOpen(lessonFile, progress) {
        const i = lessonsList.indexOf(lessonFile);
        if (i <= 0) return true;
        return !!progress[lessonsList[i - 1]] || getUnlockedLessons().includes(lessonFile);
    }

    function safeGetProgress() {
        try { return JSON.parse(localStorage.getItem('quiz_results')) || {}; }
        catch (e) { localStorage.removeItem('quiz_results'); return {}; }
    }

    // --- Navigation & Active Link Logic ---
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isLesson = currentPath.startsWith('lesson');

        if (href === currentPath) {
            link.classList.add('active');
        } else if (isLesson && href === 'python-basic.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- 1. Quiz Data (15 Lessons) ---
    // Для каждого вопроса с вариантами ответов: correct - оригинальный индекс правильного ответа в массиве options
    const quizData = {
        'lesson1.html': [
            { question: "Какая команда выводит текст на экран?", options: ["input()", "print()", "show()", "write()"], correct: 1, explanation: "print() — команда «напечатай»: она выводит на экран то, что написано в скобках." },
            { question: "Что выведет программа?", code: "print(2 + 3)", options: ["5", "2 + 3", "\"2 + 3\"", "Ошибка"], correct: 0, explanation: "Числа без кавычек Python считает: 2 + 3 = 5." },
            { question: "Что выведет программа?", code: "print(\"2 + 3\")", options: ["5", "2 + 3", "23", "Ошибка"], correct: 1, explanation: "В кавычках — это текст. Python выводит текст как есть, ничего не считая." },
            { question: "Что выведет программа?", code: "print(\"Мне\", 12, \"лет\")", options: ["Мне12лет", "Мне 12 лет", "Мне, 12, лет", "Ошибка"], correct: 1, explanation: "Значения, перечисленные через запятую, print выводит через пробел." },
            { question: "Найдите ошибку в программе", code: "Print(\"Привет\")", options: ["Print написан с большой буквы", "Текст нужно писать без кавычек", "Не хватает точки в конце", "Ошибки нет"], correct: 0, explanation: "Python различает регистр: правильно print, а Print он не знает и выдаст NameError." },
            { question: "Найдите ошибку в программе", code: "print(Привет)", options: ["Нет кавычек вокруг текста", "Нужны квадратные скобки", "Слово Привет нельзя выводить", "Ошибки нет"], correct: 0, explanation: "Текст всегда пишется в кавычках: print(\"Привет\"). Без кавычек Python ищет переменную с именем Привет." },
            { question: "В каком порядке Python выполняет строки программы?", options: ["Снизу вверх", "Сверху вниз, по очереди", "В случайном порядке", "Все одновременно"], correct: 1, explanation: "Команды выполняются по очереди, начиная с первой строки." },
            { question: "Что выведет программа?", code: "print(\"А\")\nprint(\"Б\")", options: ["А Б", "Б\nА", "А\nБ", "АБ"], correct: 2, explanation: "Каждый print выводит новую строку, а строки выполняются сверху вниз: сначала А, потом Б." },
            { question: "Что делает знак # в коде?", options: ["Выводит текст", "Начинает комментарий — Python пропускает текст после него", "Умножает числа", "Завершает программу"], correct: 1, explanation: "Всё после # — комментарий для людей. Python его не выполняет." },
            { question: "Что выведет программа?", code: "print(\"Один\")\n# print(\"Два\")", options: ["Один\nДва", "Два", "Один", "Ничего"], correct: 2, explanation: "Вторая строка начинается с # — это комментарий, она не выполняется." },
            { question: "Какое расширение у файлов с программами на Python?", options: [".txt", ".py", ".exe", ".python"], correct: 1, explanation: "Файлы Python называют, например, hello.py — расширение .py." },
            { question: "Что выведет программа?", code: "print(60 * 60)", options: ["3600", "60 * 60", "Ошибка", "120"], correct: 0, explanation: "Звёздочка * — это умножение: 60 * 60 = 3600." },
            { question: "Какие кавычки можно использовать для текста?", options: ["Только двойные \"…\"", "Только одинарные '…'", "Любые, но одинаковые с двух сторон", "Кавычки не нужны"], correct: 2, explanation: "Python понимает и \"…\", и '…'. Главное — чтобы текст начинался и заканчивался одинаковой кавычкой." },
            { question: "Напишите команду, которая выводит слово Python", type: "code", correct: ["print('Python')", "print(\"Python\")"], explanation: "Текст в кавычках внутри print: print(\"Python\")." },
            { question: "Напишите команду, которая выводит число 42", type: "code", correct: ["print(42)", "print('42')", "print(\"42\")"], explanation: "Числа можно писать без кавычек: print(42)." }
        ],
        'lesson2.html': [
            { question: "Что выведет программа?", code: "x = 5\nprint(x)", options: ["x", "5", "x = 5", "Ошибка"], correct: 1, explanation: "В print(x) нет кавычек, поэтому выводится значение переменной x, то есть 5." },
            { question: "Что выведет программа?", code: "a = 10\na = a + 5\nprint(a)", options: ["10", "15", "5", "Ошибка"], correct: 1, explanation: "Сначала в a лежит 10. Строка a = a + 5 берёт 10, прибавляет 5 и кладёт 15 обратно в a." },
            { question: "Какое имя переменной НЕЛЬЗЯ использовать?", options: ["player1", "first_name", "2nd_place", "_score"], correct: 2, explanation: "Имя не может начинаться с цифры." },
            { question: "Какой тип у значения 3.14?", options: ["int", "float", "str", "bool"], correct: 1, explanation: "Число с дробной частью — это float. Целые числа — int." },
            { question: "Что выведет программа?", code: "print(type(\"10\"))", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1, explanation: "Значение в кавычках — это строка (str), даже если внутри цифры." },
            { question: "Что всегда возвращает input()?", options: ["Число", "Строку", "True или False", "Зависит от того, что ввели"], correct: 1, explanation: "input() всегда возвращает строку. Для числа нужно int(input())." },
            { question: "Что выведет программа?", code: "a = \"5\"\nb = \"5\"\nprint(a + b)", options: ["10", "55", "Ошибка", "5 5"], correct: 1, explanation: "\"5\" — это строки. Знак + склеивает строки: \"5\" + \"5\" = \"55\"." },
            { question: "Что выведет программа?", code: "a = int(\"5\")\nb = int(\"5\")\nprint(a + b)", options: ["10", "55", "Ошибка", "5 5"], correct: 0, explanation: "int() превращает строки в числа, и + их складывает: 5 + 5 = 10." },
            { question: "Найдите ошибку в программе", code: "age = 14\nprint(\"Мне \" + age + \" лет\")", options: ["Нельзя склеить строку с числом через +", "Переменную age нельзя выводить", "Нужны одинарные кавычки", "Ошибки нет"], correct: 0, explanation: "Знак + склеивает только строки. Нужно str(age) или f-строка: f\"Мне {age} лет\"." },
            { question: "Что выведет программа?", code: "name = \"Оля\"\nprint(f\"Привет, {name}!\")", options: ["Привет, {name}!", "Привет, Оля!", "Привет, name!", "Ошибка"], correct: 1, explanation: "Буква f перед кавычкой включает подстановку: вместо {name} появляется значение переменной." },
            { question: "Что выведет программа?", code: "name = \"Оля\"\nprint(\"Привет, {name}!\")", options: ["Привет, {name}!", "Привет, Оля!", "Привет, name!", "Ошибка"], correct: 0, explanation: "Без буквы f перед кавычкой это обычная строка — фигурные скобки выводятся как есть." },
            { question: "Что выведет программа?", code: "x, y = 3, 8\nx, y = y, x\nprint(x, y)", options: ["3 8", "8 3", "3 3", "8 8"], correct: 1, explanation: "Запись x, y = y, x меняет значения местами." },
            { question: "Что значит знак = в строке score = 0?", options: ["Проверить, равен ли score нулю", "Положить 0 в переменную score", "Вывести 0 на экран", "Удалить score"], correct: 1, explanation: "Одно = — это присваивание: значение справа кладётся в переменную слева." },
            { question: "Чем отличаются переменные name и Name?", options: ["Ничем, это одна переменная", "Это две разные переменные", "Name писать нельзя", "name писать нельзя"], correct: 1, explanation: "Python различает регистр букв, поэтому это две разные переменные." },
            { question: "Создайте переменную city и положите в неё строку Москва", type: "code", correct: ["city = 'Москва'", "city = \"Москва\""], explanation: "Имя, знак = и строка в кавычках: city = \"Москва\"." },
            { question: "Напишите, как получить целое число от пользователя и положить его в переменную n", type: "code", correct: ["n = int(input())"], explanation: "input() даёт строку, int() превращает её в число: n = int(input())." }
        ],
        'lesson3.html': [
            { question: "Что выведет программа?", code: "print(10 // 3)", options: ["3.333", "3", "4", "3.0"], correct: 1, explanation: "// — деление нацело: от 10 / 3 = 3.33… остаётся только целая часть 3." },
            { question: "Что выведет программа?", code: "print(10 % 3)", options: ["3", "1", "0", "3.33"], correct: 1, explanation: "% — остаток: 10 = 3 * 3 + 1, остаток 1." },
            { question: "Что выведет программа?", code: "print(10 / 2)", options: ["5", "5.0", "2", "Ошибка"], correct: 1, explanation: "Обычное деление / всегда даёт дробное число, даже если делится нацело." },
            { question: "Что выведет программа?", code: "print(2 + 3 * 4)", options: ["20", "14", "24", "10"], correct: 1, explanation: "Сначала умножение: 3 * 4 = 12, потом сложение: 2 + 12 = 14." },
            { question: "Что выведет программа?", code: "print((2 + 3) * 4)", options: ["20", "14", "24", "10"], correct: 0, explanation: "Скобки выполняются первыми: (2 + 3) = 5, потом 5 * 4 = 20." },
            { question: "Какой оператор возводит в степень?", options: ["^", "**", "pow", "*^"], correct: 1, explanation: "В Python степень — это **. Например, 2 ** 3 = 8." },
            { question: "Что выведет программа?", code: "n = 357\nprint(n % 10)", options: ["5", "7", "57", "Ошибка"], correct: 1, explanation: "n % 10 — последняя цифра числа." },
            { question: "Что выведет программа?", code: "x = 10\nx += 5\nprint(x)", options: ["13", "15", "10", "5"], correct: 1, explanation: "x += 5 — то же, что x = x + 5: 10 + 5 = 15." },
            { question: "Что выведет программа?", code: "print(round(3.14159, 2))", options: ["3.14", "3.1", "3", "3.15"], correct: 0, explanation: "round(x, 2) оставляет 2 знака после точки." },
            { question: "Что выведет программа?", code: "a = \"5\"\nb = \"3\"\nprint(a + b)", options: ["8", "53", "2", "Ошибка"], correct: 1, explanation: "Это строки из input(): знак + их склеивает, получается «53». Чтобы сложить числа, нужен int()." },
            { question: "Найдите ошибку в программе", code: "total = 100\npeople = 0\nprint(total / people)", options: ["Деление на ноль", "Нельзя делить переменные", "Нужно //, а не /", "Ошибки нет"], correct: 0, explanation: "people равно 0, а на ноль делить нельзя: ZeroDivisionError." },
            { question: "Что выведет программа?", code: "print(7 % 2 == 1)", options: ["True", "False", "1", "0"], correct: 0, explanation: "7 % 2 равно 1, а 1 == 1 — это правда." },
            { question: "Как правильно записать дробное число два с половиной?", options: ["2,5", "2.5", "2 1/2", "2:5"], correct: 1, explanation: "Дробная часть отделяется точкой: 2.5. Запятая в Python разделяет разные значения." },
            { question: "Чем отличаются 7 / 2 и 7 // 2?", options: ["Ничем", "7 / 2 = 3.5, а 7 // 2 = 3", "7 / 2 = 3, а 7 // 2 = 3.5", "7 // 2 — это ошибка"], correct: 1, explanation: "/ — обычное деление, // — только целая часть результата." },
            { question: "Напишите выражение: остаток от деления 25 на 7", type: "code", correct: ["25 % 7", "print(25 % 7)"], explanation: "Остаток даёт оператор %: 25 % 7 (получится 4)." },
            { question: "Напишите короткую запись: уменьшить переменную lives на 1", type: "code", correct: ["lives -= 1"], explanation: "lives -= 1 — то же самое, что lives = lives - 1." }
        ],
        'lesson4.html': [
            { question: "Что выведет программа?", code: "x = 7\nif x > 5:\n    print(\"A\")\nelse:\n    print(\"B\")", options: ["A", "B", "A и B", "Ничего"], correct: 0, explanation: "7 больше 5, условие верно — выполняется ветка if, а else пропускается." },
            { question: "Что выведет программа?", code: "score = 50\nif score >= 90:\n    print(\"5\")\nelif score >= 50:\n    print(\"3\")\nelif score >= 30:\n    print(\"2\")", options: ["3", "2", "3 и 2", "Ничего"], correct: 0, explanation: "Python проверяет условия сверху вниз и выполняет только первое верное: score >= 50. До score >= 30 дело не доходит." },
            { question: "Какой символ обязательно ставится в конце строки с if?", options: [";", ":", ".", ","], correct: 1, explanation: "После условия в if, elif и else всегда ставится двоеточие — без него будет SyntaxError: expected ':'." },
            { question: "Чем отличаются = и ==?", options: ["= сравнивает, а == присваивает", "= присваивает значение, а == сравнивает", "Ничем, это одно и то же", "== используется только для строк"], correct: 1, explanation: "age = 18 кладёт 18 в переменную, а age == 18 спрашивает: «age равно 18?» и отвечает True или False." },
            { question: "Найдите ошибку в программе", code: "age = 20\nif age > 18\n    print(\"Взрослый\")", options: ["Нет двоеточия после условия", "If нужно писать с большой буквы", "print нельзя писать внутри if", "Ошибки нет"], correct: 0, explanation: "В конце строки с if не хватает двоеточия: if age > 18:" },
            { question: "Что выведет программа?", code: "a = 3\nb = 10\nif a > 5 and b > 5:\n    print(\"оба\")\nelif a > 5 or b > 5:\n    print(\"хотя бы одно\")\nelse:\n    print(\"ни одного\")", options: ["оба", "хотя бы одно", "ни одного", "Ошибка"], correct: 1, explanation: "a > 5 — ложь, поэтому and даёт False. Во втором условии b > 5 — правда, а or достаточно одного верного." },
            { question: "Сколько веток elif можно написать после if?", options: ["Только одну", "Не больше трёх", "Сколько угодно", "Ни одной: elif пишут только после else"], correct: 2, explanation: "Веток elif может быть сколько угодно. Они идут после if и перед else (если он есть)." },
            { question: "Что выведет print(not True)?", options: ["True", "False", "not True", "Ошибка"], correct: 1, explanation: "not переворачивает значение: not True — это False." },
            { question: "Что выведет программа?", code: "name = \"Анна\"\nif name == \"анна\":\n    print(\"Привет, Анна\")\nelse:\n    print(\"Кто вы?\")", options: ["Привет, Анна", "Кто вы?", "Ошибка", "Ничего"], correct: 1, explanation: "Для Python «Анна» и «анна» — разные строки: заглавная и строчная буквы различаются." },
            { question: "Что выведет программа?", code: "t = 15\nif t > 20:\n    print(\"жарко\")\nprint(\"конец\")", options: ["жарко, а потом конец", "конец", "жарко", "Ничего"], correct: 1, explanation: "Условие ложно, поэтому «жарко» не выводится. print(\"конец\") написан без отступа — он не относится к if и выполняется всегда." },
            { question: "Почему эта программа выдаёт ошибку TypeError?", code: "age = input()\nif age > 13:\n    print(\"ok\")", options: ["input() возвращает текст, а текст нельзя сравнить с числом", "С числом 13 сравнивать нельзя", "Не хватает else", "age — запрещённое имя переменной"], correct: 0, explanation: "input() всегда возвращает строку. Нужно превратить её в число: age = int(input())." },
            { question: "Если условие в if ложно, а else нет — что выполнится?", options: ["Строки внутри if", "Строки после условия, написанные без отступа", "Ничего, программа остановится", "Программа выдаст ошибку"], correct: 1, explanation: "Код внутри if пропускается, и программа просто продолжает работу со следующей строки без отступа." },
            { question: "Что выведет программа?", code: "x = 50\nif x > 100:\n    print(\"отлично\")\nelif x > 10:\n    print(\"хорошо\")\nelse:\n    print(\"плохо\")", options: ["отлично", "хорошо", "отлично и хорошо", "Ничего"], correct: 1, explanation: "Первое условие (x > 100) ложно, второе (x > 10) верно — выводится «хорошо». До else дело не доходит." },
            { question: "Напишите заголовок условия: если x не равно 0", type: "code", correct: ["if x != 0:", "if not x == 0:", "if 0 != x:"], explanation: "«Не равно» записывается как !=, а в конце строки нужно двоеточие: if x != 0:" },
            { question: "Напишите ключевое слово для ветки «иначе если»", type: "code", correct: ["elif"], explanation: "elif — сокращение от else if. Ключевые слова пишутся строчными буквами." }
        ],
        'lesson5.html': [
            { question: "Сколько раз выведется «Привет»?", code: "for i in range(5):\n    print(\"Привет\")", options: ["4", "5", "6", "0"], correct: 1, explanation: "range(5) даёт пять чисел: 0, 1, 2, 3, 4." },
            { question: "Что выведет программа?", code: "for i in range(3):\n    print(i)", options: ["0\n1\n2", "1\n2\n3", "0\n1\n2\n3", "1\n2"], correct: 0, explanation: "range(3) — это 0, 1, 2: начинается с нуля и не включает 3." },
            { question: "Что выведет программа?", code: "for i in range(1, 6):\n    print(i)", options: ["1\n2\n3\n4\n5", "2\n3\n4\n5", "1\n2\n3\n4", "2\n3\n4"], correct: 0, explanation: "range(1, 6) — от 1 до 6, не включая 6." },
            { question: "Что выведет программа?", code: "for i in range(0, 10, 2):\n    print(i)", options: ["0\n2\n4\n6\n8", "0\n2\n4\n6\n8\n10", "2\n4\n6\n8\n10", "0\n1\n2\n3\n4"], correct: 0, explanation: "Третье число в range — шаг. От 0 до 10 (не включая) с шагом 2." },
            { question: "Что выведет программа?", code: "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)", options: ["10", "15", "5", "0"], correct: 1, explanation: "Копилка total собирает сумму: 1 + 2 + 3 + 4 + 5 = 15." },
            { question: "Что выведет программа?", code: "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1", options: ["3\n2\n1", "1\n2\n3", "3\n2\n1\n0", "Ничего"], correct: 0, explanation: "Пока n > 0, выводим n и уменьшаем на 1. Когда n станет 0, условие ложно и цикл заканчивается." },
            { question: "Что выведет программа?", code: "for i in range(1, 6):\n    if i == 3:\n        break\n    print(i)", options: ["1\n2", "1\n2\n3", "1\n2\n4", "3"], correct: 0, explanation: "Когда i становится 3, break сразу завершает цикл — 3 уже не выводится." },
            { question: "Что выведет программа?", code: "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)", options: ["1\n2\n4\n5", "1\n2", "3", "1\n2\n3\n4\n5"], correct: 0, explanation: "continue пропускает остаток повтора: число 3 не выводится, но цикл продолжается." },
            { question: "Что выведет программа?", code: "for ch in \"кот\":\n    print(ch)", options: ["к\nо\nт", "кот", "3", "Ошибка"], correct: 0, explanation: "Цикл for перебирает строку по буквам — каждая выводится на своей строке." },
            { question: "Чем опасна эта программа?", code: "x = 0\nwhile x < 10:\n    print(x)", options: ["Цикл никогда не закончится: x не меняется", "Нельзя сравнивать x с 10", "Она выведет 10 раз ноль и закончится", "Ничем"], correct: 0, explanation: "x всегда равен 0, условие x < 10 всегда верно — получится бесконечный цикл. Внутри нужно увеличивать x." },
            { question: "Найдите ошибку в программе", code: "for i in range(3)\n    print(i)", options: ["Нет двоеточия после range(3)", "Нужно писать range[3]", "Переменная i не создана", "Ошибки нет"], correct: 0, explanation: "После строки с for нужно двоеточие: for i in range(3):" },
            { question: "Какой цикл лучше подходит, если неизвестно, сколько будет повторов (например, «пока не введут верный пароль»)?", options: ["for", "while", "Никакой", "Любой, разницы нет"], correct: 1, explanation: "while повторяет, пока условие верно, — количество повторов заранее знать не нужно." },
            { question: "Что делает break?", options: ["Пропускает один повтор", "Немедленно завершает цикл", "Останавливает всю программу с ошибкой", "Начинает цикл сначала"], correct: 1, explanation: "break выходит из цикла, и программа продолжается со строки после него." },
            { question: "Сколько звёздочек выведет программа?", code: "for a in range(2):\n    for b in range(3):\n        print(\"*\")", options: ["5", "6", "8", "15"], correct: 1, explanation: "Внешний цикл повторяется 2 раза, внутренний — 3 раза на каждом: 2 × 3 = 6." },
            { question: "Напишите заголовок цикла, который повторится 10 раз (переменная i)", type: "code", correct: ["for i in range(10):", "for i in range(0, 10):"], explanation: "range(10) даёт ровно 10 чисел: for i in range(10):" },
            { question: "Напишите заголовок цикла «пока x меньше 100»", type: "code", correct: ["while x < 100:", "while 100 > x:"], explanation: "while, условие и двоеточие: while x < 100:" }
        ],
        'lesson6.html': [
            { question: "Что выведет программа?", code: "nums = [10, 20, 30]\nprint(nums[1])", options: ["10", "20", "30", "Ошибка"], correct: 1, explanation: "Индексы начинаются с нуля: [0] — 10, [1] — 20." },
            { question: "Что выведет программа?", code: "letters = [\"a\", \"b\", \"c\"]\nprint(letters[-1])", options: ["a", "c", "b", "Ошибка"], correct: 1, explanation: "Индекс -1 — последний элемент списка." },
            { question: "Что выведет программа?", code: "items = [1, 2, 3]\nitems.append(4)\nprint(len(items))", options: ["3", "4", "2", "Ошибка"], correct: 1, explanation: "len() возвращает количество элементов: после append их стало 4." },
            { question: "Что выведет программа?", code: "nums = [10, 20, 30, 40]\nprint(nums[1:3])", options: ["[20, 30]", "[20, 30, 40]", "[10, 20, 30]", "[30, 40]"], correct: 0, explanation: "Срез [1:3] берёт элементы с индексами 1 и 2 — конец не включается." },
            { question: "Что выведет программа?", code: "nums = [3, 1, 2]\nnums.sort()\nprint(nums)", options: ["[1, 2, 3]", "[3, 1, 2]", "[3, 2, 1]", "[1, 3, 2]"], correct: 0, explanation: "sort() сортирует список по возрастанию." },
            { question: "Найдите ошибку в программе", code: "colors = [\"red\", \"green\", \"blue\"]\nprint(colors[3])", options: ["В списке нет элемента с индексом 3", "Нельзя выводить элементы списка", "Нужны круглые скобки", "Ошибки нет"], correct: 0, explanation: "В списке из трёх элементов индексы 0, 1, 2 — будет IndexError." },
            { question: "Что выведет программа?", code: "print(sum([3, 4, 5]))", options: ["12", "4", "3", "[3, 4, 5]"], correct: 0, explanation: "sum() складывает все элементы: 3 + 4 + 5 = 12." },
            { question: "Что выведет программа?", code: "cart = [\"хлеб\", \"сыр\"]\nprint(\"сыр\" in cart)", options: ["True", "False", "1", "Ошибка"], correct: 0, explanation: "in проверяет, есть ли значение в списке." },
            { question: "Чем кортеж отличается от списка?", options: ["Кортеж нельзя изменить после создания", "В кортеже могут быть только числа", "Кортеж нельзя перебрать циклом", "Ничем"], correct: 0, explanation: "Кортеж неизменяемый: в него нельзя добавить, удалить или заменить элемент." },
            { question: "Найдите ошибку в программе", code: "point = (3, 7)\npoint[0] = 5", options: ["Кортеж нельзя изменить", "Индекс 0 не существует", "Нужно писать point(0)", "Ошибки нет"], correct: 0, explanation: "point — кортеж, его элементы менять нельзя: TypeError." },
            { question: "Что выведет программа?", code: "print([x ** 2 for x in [1, 2, 3]])", options: ["[1, 4, 9]", "[2, 4, 6]", "[1, 2, 3]", "14"], correct: 0, explanation: "Генератор списка возводит каждое число в квадрат." },
            { question: "Что выведет программа?", code: "print([1, 2, 3][::-1])", options: ["[3, 2, 1]", "[1, 2, 3]", "[1]", "Ошибка"], correct: 0, explanation: "Срез [::-1] переворачивает список." },
            { question: "Что выведет программа?", code: "lst = [\"a\", \"b\", \"c\"]\nlst.pop()\nprint(lst)", options: ["['a', 'b']", "['b', 'c']", "['a', 'c']", "['a', 'b', 'c']"], correct: 0, explanation: "pop() убирает последний элемент." },
            { question: "Какой метод добавляет элемент в конец списка?", options: ["add()", "append()", "push()", "insert()"], correct: 1, explanation: "append(x) добавляет x в конец списка." },
            { question: "Создайте список colors из трёх строк: red, green, blue", type: "code", correct: ["colors = [\"red\", \"green\", \"blue\"]", "colors = ['red', 'green', 'blue']"], explanation: "Список — в квадратных скобках через запятую: colors = [\"red\", \"green\", \"blue\"]." },
            { question: "Напишите, как добавить число 7 в конец списка nums", type: "code", correct: ["nums.append(7)"], explanation: "nums.append(7) добавляет 7 в конец." }
        ],
        'lesson7.html': [
            { question: "Каким словом создаётся функция?", options: ["func", "def", "function", "create"], correct: 1, explanation: "def — от английского define, «определить»." },
            { question: "Что выведет программа?", code: "def hello():\n    print(\"Привет\")", options: ["Привет", "Привет Привет", "Ничего", "Ошибка"], correct: 2, explanation: "Функция только описана, но ни разу не вызвана — поэтому ничего не выводится." },
            { question: "Что выведет программа?", code: "def square(n):\n    return n * n\n\nprint(square(5))", options: ["10", "25", "5", "None"], correct: 1, explanation: "Функция возвращает n * n, то есть 5 * 5 = 25." },
            { question: "Что выведет программа?", code: "def add(a, b):\n    result = a + b\n\nprint(add(2, 3))", options: ["5", "None", "0", "Ошибка"], correct: 1, explanation: "В функции нет return, поэтому она возвращает None. Внутри ничего не печатается." },
            { question: "Что выведет программа?", code: "def f():\n    return 1\n    return 2\n\nprint(f())", options: ["1", "1 2", "2", "Ничего"], correct: 0, explanation: "return сразу завершает функцию: до второго return дело не доходит." },
            { question: "Что выведет программа?", code: "def power(base, exp=2):\n    return base ** exp\n\nprint(power(5))", options: ["25", "125", "15", "Ошибка"], correct: 0, explanation: "exp не передан, поэтому используется значение по умолчанию 2: 5 ** 2 = 25." },
            { question: "Что выведет программа?", code: "def minus(a, b):\n    return b - a\n\nprint(minus(7, 10))", options: ["7", "3", "10", "Ошибка"], correct: 1, explanation: "Первый аргумент попадает в a, второй — в b: 10 - 7 = 3." },
            { question: "Найдите ошибку в программе", code: "def greet(name):\n    return \"Привет, \" + name\n\nprint(greet())", options: ["Функцию вызвали без аргумента", "Нельзя писать return в функции", "Нужны квадратные скобки", "Ошибки нет"], correct: 0, explanation: "greet ждёт один аргумент name, а вызвана с пустыми скобками — TypeError." },
            { question: "Найдите ошибку в программе", code: "def f():\n    x = 10\n\nf()\nprint(x)", options: ["Переменная x существует только внутри функции", "Нельзя называть переменную x", "Функция должна называться иначе", "Ошибки нет"], correct: 0, explanation: "x — локальная переменная функции. Снаружи её нет — NameError." },
            { question: "Чем return отличается от print?", options: ["Ничем", "print показывает значение на экране, return отдаёт его программе", "return печатает красивее", "print работает только в функциях"], correct: 1, explanation: "Результат return можно сохранить в переменную и использовать дальше, а print только выводит." },
            { question: "Что выведет программа?", code: "def mm(a):\n    return min(a), max(a)\n\nlo, hi = mm([5, 2, 8])\nprint(lo, hi)", options: ["2 8", "8 2", "(2, 8)", "Ошибка"], correct: 0, explanation: "Функция возвращает два значения, их раскладывают по переменным lo и hi." },
            { question: "Что выведет программа?", code: "def total(*nums):\n    return sum(nums)\n\nprint(total(1, 2, 3))", options: ["6", "3", "(1, 2, 3)", "Ошибка"], correct: 0, explanation: "*nums собирает все аргументы в кортеж (1, 2, 3), sum складывает их." },
            { question: "Что выведет программа?", code: "x = 5\n\ndef change():\n    x = 10\n\nchange()\nprint(x)", options: ["5", "10", "Ошибка", "None"], correct: 0, explanation: "Внутри функции своя локальная переменная x. Внешняя x осталась равна 5." },
            { question: "Что такое рекурсия?", options: ["Функция, которая вызывает саму себя", "Функция без параметров", "Функция, которая ничего не возвращает", "Ошибка в функции"], correct: 0, explanation: "Рекурсивная функция вызывает саму себя, и у неё обязательно должно быть условие остановки." },
            { question: "Напишите первую строку функции double с параметром x", type: "code", correct: ["def double(x):"], explanation: "def, имя, параметр в скобках и двоеточие: def double(x):" },
            { question: "Напишите строку, которая возвращает из функции значение x * 2", type: "code", correct: ["return x * 2", "return 2 * x", "return x*2", "return x + x"], explanation: "return и выражение: return x * 2" }
        ],
        'lesson8.html': [
            { question: "Что выведет программа?", code: "menu = {\"чай\": 50, \"кофе\": 120}\nprint(menu[\"кофе\"])", options: ["50", "120", "кофе", "Ошибка"], correct: 1, explanation: "По ключу \"кофе\" лежит значение 120." },
            { question: "Что выведет программа?", code: "d = {\"a\": 1, \"b\": 2}\nd[\"c\"] = 3\nprint(len(d))", options: ["2", "3", "6", "Ошибка"], correct: 1, explanation: "После добавления ключа \"c\" в словаре три пары." },
            { question: "Что выведет программа?", code: "d = {\"a\": 1}\nd[\"a\"] = 5\nprint(d[\"a\"])", options: ["1", "5", "{'a': 5}", "Ошибка"], correct: 1, explanation: "Ключ \"a\" уже был, поэтому значение заменилось на 5." },
            { question: "Найдите ошибку в программе", code: "ages = {\"Аня\": 14}\nprint(ages[\"Петя\"])", options: ["Ключа «Петя» нет в словаре", "Нельзя использовать кириллицу", "Нужны круглые скобки", "Ошибки нет"], correct: 0, explanation: "Обращение к несуществующему ключу вызывает KeyError. Используйте get или in." },
            { question: "Что выведет программа?", code: "menu = {\"чай\": 50}\nprint(menu.get(\"сок\", 0))", options: ["None", "0", "Ошибка", "сок"], correct: 1, explanation: "get возвращает второй аргумент, если ключа нет." },
            { question: "Что выведет программа?", code: "menu = {\"чай\": 50}\nprint(\"чай\" in menu)", options: ["True", "False", "50", "Ошибка"], correct: 0, explanation: "in проверяет наличие ключа в словаре." },
            { question: "Что выведет программа?", code: "print(len(set([1, 2, 2, 3, 3, 3])))", options: ["3", "4", "5", "2"], correct: 0, explanation: "Множество хранит каждое значение один раз: 1, 2, 3." },
            { question: "Как создать пустое множество?", options: ["{}", "set()", "[]", "()"], correct: 1, explanation: "{} создаёт пустой словарь. Пустое множество — только set()." },
            { question: "Что выведет программа?", code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a & b))", options: ["[2, 3]", "[1, 2, 3, 4]", "[1]", "[4]"], correct: 0, explanation: "& — пересечение: элементы, которые есть в обоих множествах." },
            { question: "Что выведет программа?", code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a - b))", options: ["[1]", "[4]", "[1, 4]", "[2, 3]"], correct: 0, explanation: "a - b — элементы, которые есть в a, но нет в b." },
            { question: "Что выведет программа?", code: "d = {\"a\": 1, \"b\": 2}\nfor k, v in d.items():\n    print(k, v)", options: ["a 1\nb 2", "a b", "1 2", "('a', 1) ('b', 2)"], correct: 0, explanation: "items() даёт пары ключ-значение, их раскладывают по переменным k и v." },
            { question: "Что выведет программа?", code: "counts = {}\nfor ch in \"xyx\":\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts)", options: ["{'x': 2, 'y': 1}", "{'x': 1, 'y': 1}", "{'x': 2}", "Ошибка"], correct: 0, explanation: "Словарь-счётчик: x встретился дважды, y — один раз." },
            { question: "Найдите ошибку в программе", code: "s = {}\ns.add(\"python\")", options: ["{} — пустой словарь, у него нет add", "Нельзя добавлять строки", "Нужно писать append", "Ошибки нет"], correct: 0, explanation: "{} создаёт словарь. Для множества нужно s = set()." },
            { question: "Какой тип НЕ может быть ключом словаря?", options: ["Строка", "Число", "Кортеж", "Список"], correct: 3, explanation: "Ключ должен быть неизменяемым, а список можно менять." },
            { question: "Создайте словарь prices, где ключу \"хлеб\" соответствует 40", type: "code", correct: ["prices = {\"хлеб\": 40}", "prices = {'хлеб': 40}"], explanation: "Фигурные скобки, ключ, двоеточие, значение: prices = {\"хлеб\": 40}." },
            { question: "Напишите, как добавить в словарь d ключ \"x\" со значением 10", type: "code", correct: ["d[\"x\"] = 10", "d['x'] = 10"], explanation: "Квадратные скобки с ключом и присваивание: d[\"x\"] = 10." }
        ],
        'lesson9.html': [
            { question: "Что выведет программа?", code: "s = \"Питон\"\nprint(s[0])", options: ["П", "n", "Python", "Ошибка"], correct: 0, explanation: "Индекс 0 — первый символ строки." },
            { question: "Что выведет программа?", code: "print(len(\"Python\"))", options: ["5", "6", "4", "Ошибка"], correct: 1, explanation: "len считает все символы: в слове «Python» их 6." },
            { question: "Что выведет программа?", code: "print(\"Привет\".upper())", options: ["ПРИВЕТ", "привет", "Привет", "Ошибка"], correct: 0, explanation: "upper() возвращает строку заглавными буквами." },
            { question: "Что выведет программа?", code: "s = \"привет\"\ns.upper()\nprint(s)", options: ["привет", "ПРИВЕТ", "Привет", "None"], correct: 0, explanation: "upper() вернул новую строку, но её никуда не сохранили. Сама s не изменилась." },
            { question: "Что выведет программа?", code: "print(\"привет\"[::-1])", options: ["тевирп", "привет", "т", "Ошибка"], correct: 0, explanation: "Срез [::-1] переворачивает строку." },
            { question: "Что выведет программа?", code: "print(\"a b c\".split())", options: ["['a', 'b', 'c']", "abc", "a b c", "['a b c']"], correct: 0, explanation: "split() разрезает строку по пробелам и возвращает список." },
            { question: "Что выведет программа?", code: "print(\"-\".join([\"a\", \"b\", \"c\"]))", options: ["a-b-c", "abc", "-a-b-c-", "['a', 'b', 'c']"], correct: 0, explanation: "join склеивает список, вставляя разделитель между элементами." },
            { question: "Что выведет программа?", code: "print(\"[\" + \"  Аня  \".strip() + \"]\")", options: ["[Аня]", "[ Аня ]", "[  Аня  ]", "Аня"], correct: 0, explanation: "strip() убирает пробелы в начале и в конце." },
            { question: "Что выведет программа?", code: "print(\"банана\".count(\"а\"))", options: ["2", "3", "1", "0"], correct: 1, explanation: "В слове «банана» три буквы «а»." },
            { question: "Что выведет программа?", code: "x = 3.14159\nprint(f\"{x:.2f}\")", options: ["3.14", "3.1416", "3", "3.141"], correct: 0, explanation: ":.2f — два знака после точки." },
            { question: "Найдите ошибку в программе", code: "s = \"кот\"\ns[0] = \"К\"", options: ["Строку нельзя изменить по индексу", "Индекс 0 не существует", "Нужны одинарные кавычки", "Ошибки нет"], correct: 0, explanation: "Строки неизменяемы — будет TypeError. Нужно собрать новую строку: \"К\" + s[1:]." },
            { question: "Что выведет программа?", code: "print(\"12a\".isdigit())", options: ["True", "False", "Ошибка", "12a"], correct: 1, explanation: "isdigit() — True, только если все символы цифры. Буква «a» мешает." },
            { question: "Что выведет программа?", code: "print(\"кот\".find(\"я\"))", options: ["-1", "0", "None", "Ошибка"], correct: 0, explanation: "find возвращает -1, если подстрока не найдена." },
            { question: "Что делает \\n внутри строки?", options: ["Выводит букву n", "Переносит текст на новую строку", "Удаляет строку", "Ничего"], correct: 1, explanation: "\\n — специальный символ переноса строки." },
            { question: "Напишите выражение, которое делает строку s маленькими буквами", type: "code", correct: ["s.lower()"], explanation: "Метод lower() возвращает строку строчными буквами: s.lower()" },
            { question: "Напишите выражение, которое заменяет в строке s все пробелы на _", type: "code", correct: ["s.replace(\" \", \"_\")", "s.replace(' ', '_')"], explanation: "replace(что, на что): s.replace(\" \", \"_\")" }
        ],
        'lesson10.html': [
            { question: "Какой режим открытия стирает старое содержимое файла?", options: ["\"r\"", "\"w\"", "\"a\"", "Никакой"], correct: 1, explanation: "\"w\" открывает файл для записи заново — всё старое удаляется." },
            { question: "Какой режим добавляет текст в конец файла, сохраняя старое?", options: ["\"r\"", "\"w\"", "\"a\"", "\"+\""], correct: 2, explanation: "\"a\" — append, дозапись в конец." },
            { question: "Зачем писать encoding=\"utf-8\"?", options: ["Чтобы файл открывался быстрее", "Чтобы русские буквы сохранялись и читались правильно", "Чтобы файл нельзя было удалить", "Это обязательное слово для with"], correct: 1, explanation: "Кодировка определяет, как буквы хранятся в файле. utf-8 правильно работает с русским текстом на любом компьютере." },
            { question: "Что выведет программа?", code: "with open(\"t.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"a\")\n    f.write(\"b\")\nwith open(\"t.txt\", encoding=\"utf-8\") as f:\n    print(f.read())", options: ["ab", "a\nb", "b", "a"], correct: 0, explanation: "write не добавляет перенос строки сам — две записи склеились в одну строку." },
            { question: "Что выведет программа?", code: "with open(\"t.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"старое\")\nwith open(\"t.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"новое\")\nwith open(\"t.txt\", encoding=\"utf-8\") as f:\n    print(f.read())", options: ["2", "1", "старое", "новое"], correct: 3, explanation: "Режим \"w\" стёр старое содержимое — осталось только «новое»." },
            { question: "Что выведет программа?", code: "with open(\"t.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"раз\\n\")\nwith open(\"t.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"два\\n\")\nwith open(\"t.txt\", encoding=\"utf-8\") as f:\n    print(len(f.readlines()))", options: ["2", "1", "0", "3"], correct: 0, explanation: "Режим \"a\" дописал вторую строку к первой — в файле 2 строки." },
            { question: "Найдите ошибку в программе", code: "with open(\"score.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(100)", options: ["В файл можно записать только строку", "Нельзя называть файл score.txt", "Нужен режим \"r\"", "Ошибки нет"], correct: 0, explanation: "write принимает только строки — будет TypeError. Нужно f.write(str(100))." },
            { question: "Что произойдёт, если открыть на чтение файл, которого нет?", options: ["Создастся пустой файл", "Ошибка FileNotFoundError", "Python вернёт пустую строку", "Ничего"], correct: 1, explanation: "В режиме чтения отсутствующий файл — это ошибка FileNotFoundError." },
            { question: "Что делает конструкция with open(...) as f:?", options: ["Открывает файл и сама закрывает его после блока", "Удаляет файл после чтения", "Открывает файл только для чтения", "Создаёт копию файла"], correct: 0, explanation: "with гарантирует, что файл закроется, даже если внутри блока случится ошибка." },
            { question: "Что выведет программа?", code: "with open(\"n.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"5\\n10\\n\")\ntotal = 0\nwith open(\"n.txt\", encoding=\"utf-8\") as f:\n    for line in f:\n        total += int(line)\nprint(total)", options: ["15", "510", "['5', '10']", "Ошибка"], correct: 0, explanation: "Строки из файла превращены в числа через int(), поэтому они складываются: 5 + 10 = 15." },
            { question: "Зачем при чтении по строкам вызывают line.strip()?", options: ["Чтобы убрать перенос строки \\n в конце", "Чтобы сделать буквы заглавными", "Чтобы удалить строку из файла", "Чтобы превратить строку в число"], correct: 0, explanation: "Каждая строка файла заканчивается символом \\n. strip() его убирает." },
            { question: "Что выведет программа?", code: "line = \"Аня,5\\n\"\nname, grade = line.strip().split(\",\")\nprint(name, grade)", options: ["Аня 5", "Аня,5", "['Аня', '5']", "Ошибка"], correct: 0, explanation: "split(\",\") разрезал строку по запятой, значения разложены по переменным." },
            { question: "Найдите ошибку в программе", code: "with open(\"a.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"x\")\nwith open(\"a.txt\", encoding=\"utf-8\") as f:\n    pass\nprint(f.read())", options: ["Чтение после закрытия файла", "Файл не существует", "Нужно писать read без скобок", "Ошибки нет"], correct: 0, explanation: "print(f.read()) стоит без отступа, то есть после блока with — файл уже закрыт." },
            { question: "Что такое CSV?", options: ["Таблица в текстовом файле: значения разделены запятыми", "Картинка", "Программа на Python", "Архив"], correct: 0, explanation: "CSV (comma-separated values) — простой текстовый формат таблиц." },
            { question: "Напишите первую строку блока: открыть файл data.txt для чтения в кодировке utf-8 как f", type: "code", correct: ["with open(\"data.txt\", encoding=\"utf-8\") as f:", "with open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:", "with open('data.txt', encoding='utf-8') as f:", "with open('data.txt', 'r', encoding='utf-8') as f:"], explanation: "with open(\"data.txt\", \"r\", encoding=\"utf-8\") as f: — режим \"r\" можно не писать, он по умолчанию." },
            { question: "Напишите строку, которая записывает в открытый файл f текст «Привет» и перенос строки", type: "code", correct: ["f.write(\"Привет\\n\")", "f.write('Привет\\n')"], explanation: "f.write(\"Привет\\n\") — перенос строки нужно добавить самому." }
        ],
        'lesson11.html': [
            { question: "Что выведет программа?", code: "try:\n    int(\"abc\")\nexcept ValueError:\n    print(\"Ошибка\")\nprint(\"Готово\")", options: ["Ошибка", "Готово", "Ошибка\nГотово", "Программа упадёт"], correct: 2, explanation: "int(\"abc\") вызывает ValueError, срабатывает except, а потом программа продолжает работу." },
            { question: "Что выведет программа?", code: "try:\n    print(int(\"5\"))\nexcept ValueError:\n    print(\"Ошибка\")", options: ["5", "Ошибка", "5\nОшибка", "Ничего"], correct: 0, explanation: "Ошибки нет, поэтому блок except пропускается." },
            { question: "Какая ошибка возникнет при int(\"привет\")?", options: ["TypeError", "ValueError", "NameError", "KeyError"], correct: 1, explanation: "Строку нельзя превратить в число — это ValueError (неподходящее значение)." },
            { question: "Какая ошибка возникнет при 10 / 0?", options: ["ValueError", "ZeroDivisionError", "TypeError", "Никакой"], correct: 1, explanation: "Деление на ноль — ZeroDivisionError." },
            { question: "Что выведет программа?", code: "try:\n    x = 1 / 0\nexcept ValueError:\n    print(\"A\")\nexcept ZeroDivisionError:\n    print(\"B\")", options: ["A", "B", "A\nB", "Программа упадёт"], correct: 1, explanation: "Ошибка ZeroDivisionError, сработал второй except." },
            { question: "Найдите ошибку в программе", code: "try:\n    n = int(\"abc\")\nexcept ZeroDivisionError:\n    print(\"Ошибка\")", options: ["except ловит не тот тип ошибки", "Нельзя писать int внутри try", "Нужно писать Except с большой буквы", "Ошибки нет"], correct: 0, explanation: "int(\"abc\") даёт ValueError, а ловят ZeroDivisionError — программа всё равно упадёт." },
            { question: "Когда выполняется блок finally?", options: ["Только если была ошибка", "Только если ошибки не было", "Всегда", "Никогда"], correct: 2, explanation: "finally выполняется в любом случае." },
            { question: "Когда выполняется блок else после try?", options: ["Если ошибки не было", "Если была ошибка", "Всегда", "Только вместе с raise"], correct: 0, explanation: "else у try срабатывает, если в try не произошло ошибок." },
            { question: "Что выведет программа?", code: "try:\n    n = int(\"7\")\nexcept ValueError:\n    print(\"ошибка\")\nelse:\n    print(\"ok\")\nfinally:\n    print(\"конец\")", options: ["ok\nконец", "ошибка\nконец", "ok", "конец"], correct: 0, explanation: "Ошибки нет: выполнились else и finally." },
            { question: "Что делает raise?", options: ["Перехватывает ошибку", "Вызывает (выбрасывает) ошибку", "Завершает цикл", "Скрывает ошибку"], correct: 1, explanation: "raise выбрасывает исключение — например, когда данные неправильные." },
            { question: "Что выведет программа?", code: "try:\n    raise ValueError(\"мало\")\nexcept ValueError as e:\n    print(\"Плохо:\", e)", options: ["Плохо: мало", "мало", "ValueError", "Ничего"], correct: 0, explanation: "raise выбросил ValueError с текстом «мало», а except as e получил его описание." },
            { question: "Почему не стоит писать просто except: без типа ошибки?", options: ["Так нельзя — будет SyntaxError", "Он поймает вообще все ошибки, даже опечатки в коде, и их будет трудно найти", "Он работает медленнее", "Он ловит только ValueError"], correct: 1, explanation: "Пустой except молча глотает любые ошибки. Лучше ловить конкретный тип." },
            { question: "Что выведет программа?", code: "items = [1]\ntry:\n    print(items[0])\n    print(items[5])\nexcept IndexError:\n    print(\"Ошибка\")", options: ["1\n2", "Ошибка", "1\nОшибка", "2"], correct: 2, explanation: "Первый элемент выводится. Индекса 5 нет — IndexError, срабатывает except." },
            { question: "Найдите ошибку в программе", code: "try:\n    n = int(\"5\")\nprint(n)", options: ["После try нет блока except или finally", "Нельзя выводить n", "int нельзя использовать в try", "Ошибки нет"], correct: 0, explanation: "После try обязательно нужен except или finally — SyntaxError." },
            { question: "Напишите строку, которая начинает блок перехвата ошибки ValueError", type: "code", correct: ["except ValueError:"], explanation: "except, тип ошибки и двоеточие: except ValueError:" },
            { question: "Напишите строку, которая вызывает ошибку ValueError с текстом Плохо", type: "code", correct: ["raise ValueError(\"Плохо\")", "raise ValueError('Плохо')"], explanation: "raise и исключение с текстом: raise ValueError(\"Плохо\")" }
        ],
        'lesson12.html': [
            { question: "Что выведет программа?", code: "import math\nprint(math.sqrt(16))", options: ["4.0", "4", "16", "Ошибка"], correct: 0, explanation: "math.sqrt возвращает дробное число: корень из 16 — это 4.0." },
            { question: "Что выведет программа?", code: "import math\nprint(math.ceil(4.1))", options: ["5", "4", "4.1", "Ошибка"], correct: 0, explanation: "ceil округляет вверх." },
            { question: "Что выведет программа?", code: "import math\nprint(math.floor(4.9))", options: ["5", "4", "4.9", "Ошибка"], correct: 1, explanation: "floor округляет вниз." },
            { question: "Найдите ошибку в программе", code: "print(math.sqrt(9))", options: ["Модуль math не подключён", "sqrt нельзя писать с точкой", "Корень из 9 не существует", "Ошибки нет"], correct: 0, explanation: "Перед использованием нужно написать import math — иначе NameError." },
            { question: "Что выведет программа?", code: "from math import sqrt\nprint(sqrt(100))", options: ["10.0", "Ошибка", "math.sqrt(100)", "10"], correct: 0, explanation: "from math import sqrt позволяет вызывать sqrt без имени модуля." },
            { question: "Какие числа может вернуть random.randint(1, 3)?", options: ["1 и 2", "1, 2 и 3", "0, 1, 2", "Любые дробные от 1 до 3"], correct: 1, explanation: "randint включает оба конца диапазона." },
            { question: "Что делает random.choice([\"а\", \"б\", \"в\"])?", options: ["Возвращает случайный элемент списка", "Перемешивает список", "Сортирует список", "Удаляет случайный элемент"], correct: 0, explanation: "choice выбирает один случайный элемент." },
            { question: "Где пишут команду pip install requests?", options: ["В программе на Python", "В терминале (командной строке)", "В браузере", "В файле requirements.py"], correct: 1, explanation: "pip — отдельная программа, её запускают в терминале." },
            { question: "Что делает import statistics as st?", options: ["Подключает модуль под коротким именем st", "Создаёт новый модуль st", "Удаляет модуль", "Копирует модуль в файл st.py"], correct: 0, explanation: "as задаёт псевдоним: дальше пишут st.mean(...)." },
            { question: "Что выведет программа?", code: "import statistics\nprint(statistics.mode([4, 5, 4, 3]))", options: ["3", "2", "[4, 4, 5]", "4"], correct: 3, explanation: "statistics.mode возвращает самое частое значение: 4 встречается дважды." },
            { question: "Найдите ошибку в программе", code: "import maths", options: ["Модуля maths не существует — правильно math", "import нужно писать в конце", "Нельзя подключать модули", "Ошибки нет"], correct: 0, explanation: "Опечатка в названии — ModuleNotFoundError." },
            { question: "Почему нельзя называть свой файл random.py?", options: ["Python не запустит такой файл", "import random подключит ваш файл вместо настоящего модуля", "Это имя занято Windows", "Можно, ничего не случится"], correct: 1, explanation: "Python сначала ищет модуль в папке программы — и найдёт ваш файл." },
            { question: "Что выведет программа?", code: "from collections import Counter\nprint(Counter(\"abaa\").most_common(1))", options: ["[('a', 3)]", "a", "3", "{'a': 3, 'b': 1}"], correct: 0, explanation: "most_common(1) возвращает список с одной самой частой парой (элемент, количество)." },
            { question: "Как называется каталог бесплатных библиотек для Python?", options: ["PyPI", "GitHub", "Google Play", "App Store"], correct: 0, explanation: "PyPI (pypi.org) — Python Package Index, оттуда pip скачивает библиотеки." },
            { question: "Напишите строку, которая подключает модуль random", type: "code", correct: ["import random"], explanation: "import и имя модуля: import random" },
            { question: "Напишите строку, которая подключает из модуля math только функцию sqrt", type: "code", correct: ["from math import sqrt"], explanation: "from модуль import функция: from math import sqrt" }
        ],
        'lesson13.html': [
            { question: "Что такое класс?", options: ["Шаблон (чертёж), по которому создаются объекты", "Готовый объект", "Модуль Python", "Тип ошибки"], correct: 0, explanation: "Класс описывает, какие у объектов данные и что они умеют." },
            { question: "Когда вызывается метод __init__?", options: ["При создании объекта", "При удалении объекта", "При вызове print", "Никогда, его нужно вызывать вручную"], correct: 0, explanation: "Python сам вызывает __init__, когда вы пишете Dog(...)." },
            { question: "Что выведет программа?", code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog(\"Рекс\")\nprint(d.name)", options: ["Рекс", "name", "self.name", "Ошибка"], correct: 0, explanation: "При создании объекта кличка сохранилась в атрибут name." },
            { question: "Что выведет программа?", code: "class Cat:\n    def __init__(self, name):\n        self.name = name\n\n    def say(self):\n        print(f\"{self.name}: Мяу\")\n\nCat(\"Мурка\").say()", options: ["Мяу", "Мурка: Мяу", "Ошибка", "Ничего"], correct: 1, explanation: "Метод say печатает атрибут name и звук." },
            { question: "Что выведет программа?", code: "class Acc:\n    def __init__(self, b):\n        self.balance = b\n\n    def deposit(self, x):\n        self.balance += x\n\na = Acc(100)\na.deposit(50)\nprint(a.balance)", options: ["150", "100", "50", "Ошибка"], correct: 0, explanation: "deposit увеличил баланс объекта: 100 + 50 = 150." },
            { question: "Что означает self в методе?", options: ["Сам объект, для которого вызван метод", "Название класса", "Первый аргумент, переданный пользователем", "Ключевое слово для создания класса"], correct: 0, explanation: "Python передаёт в self объект, у которого вызвали метод." },
            { question: "Найдите ошибку в программе", code: "class Dog:\n    def bark():\n        print(\"Гав\")\n\nDog().bark()", options: ["У метода bark нет параметра self", "Класс нельзя называть Dog", "Нельзя вызывать методы", "Ошибки нет"], correct: 0, explanation: "Python передаёт в метод объект, а принять его некуда — TypeError." },
            { question: "Что выведет программа?", code: "class C:\n    def __init__(self):\n        self.count = 0\n\n    def inc(self):\n        self.count += 1\n\na = C()\nb = C()\na.inc()\na.inc()\nb.inc()\nprint(a.count)", options: ["2", "1", "0", "Ошибка"], correct: 0, explanation: "Объекты независимы: у каждого свой атрибут count. Мы дважды увеличили счётчик у a." },
            { question: "Что выведет программа?", code: "class Book:\n    def __init__(self, t):\n        self.t = t\n\n    def __str__(self):\n        return \"Книга: \" + self.t\n\nprint(Book(\"Азбука\"))", options: ["Книга: Азбука", "<__main__.Book object>", "Азбука", "Ошибка"], correct: 0, explanation: "print вызывает метод __str__ и выводит его результат." },
            { question: "Что выведет программа?", code: "class Animal:\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Гав!\"\n\nprint(Dog().speak())", options: ["Гав!", "...", "Ошибка", "Ничего"], correct: 0, explanation: "Dog переопределил метод speak родителя." },
            { question: "Что выведет программа?", code: "class Animal:\n    def speak(self):\n        return \"...\"\n\nclass Fish(Animal):\n    pass\n\nprint(Fish().speak())", options: ["...", "Гав!", "Ошибка", "Ничего"], correct: 0, explanation: "У Fish нет своего speak, поэтому используется метод родителя Animal." },
            { question: "Что значит запись class Dog(Animal):?", options: ["Dog наследует всё от Animal", "Animal наследует всё от Dog", "Dog и Animal — один класс", "Dog вызывает Animal как функцию"], correct: 0, explanation: "В скобках указывают родительский класс." },
            { question: "Найдите ошибку в программе", code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def hi(self):\n        print(name)\n\nDog(\"Рекс\").hi()", options: ["Внутри метода нужно писать self.name", "Метод нельзя называть hi", "Нужно два __init__", "Ошибки нет"], correct: 0, explanation: "name внутри метода — обычная переменная, её нет. Атрибут — self.name." },
            { question: "Зачем нужен super().__init__(...) в дочернем классе?", options: ["Чтобы выполнить __init__ родителя и не повторять его код", "Чтобы удалить родителя", "Чтобы создать второй объект", "Он ничего не делает"], correct: 0, explanation: "super() обращается к родительскому классу, его __init__ заполнит общие атрибуты." },
            { question: "Напишите первую строку класса Car", type: "code", correct: ["class Car:"], explanation: "class, имя с большой буквы и двоеточие: class Car:" },
            { question: "Напишите первую строку метода __init__ с параметром color", type: "code", correct: ["def __init__(self, color):"], explanation: "Первый параметр — self, потом color: def __init__(self, color):" }
        ],
        'lesson14.html': [
            { question: "Что выведет программа?", code: "from datetime import date\nprint(date(2026, 11, 11))", options: ["2026-11-11", "11.11.2026", "11/11/2026", "Ошибка"], correct: 0, explanation: "По умолчанию дата выводится в формате ГГГГ-ММ-ДД." },
            { question: "Что выведет программа?", code: "from datetime import date\nprint(date(2026, 9, 5).strftime(\"%d.%m.%Y\"))", options: ["05.09.2026", "2026-09-05", "5.9.2026", "09.05.2026"], correct: 0, explanation: "%d — день, %m — месяц, %Y — год." },
            { question: "Что выведет программа?", code: "from datetime import date, timedelta\nprint(date(2026, 1, 1) + timedelta(days=7))", options: ["2026-01-08", "2026-01-02", "2026-02-01", "Ошибка"], correct: 0, explanation: "timedelta(days=7) прибавляет неделю." },
            { question: "Что выведет программа?", code: "from datetime import date, timedelta\nprint(date(2026, 2, 28) + timedelta(days=1))", options: ["2026-03-01", "2026-02-29", "2026-02-30", "Ошибка"], correct: 0, explanation: "2026 год не високосный: после 28 февраля сразу идёт 1 марта." },
            { question: "Что выведет программа?", code: "from datetime import date\nprint((date(2026, 2, 1) - date(2026, 1, 1)).days)", options: ["31", "30", "1", "Ошибка"], correct: 0, explanation: "Разность дат — промежуток, .days — количество дней в нём." },
            { question: "Что возвращает weekday() для понедельника?", options: ["0", "1", "7", "\"пн\""], correct: 0, explanation: "Дни недели нумеруются с нуля: 0 — понедельник, 6 — воскресенье." },
            { question: "Что выведет программа?", code: "from datetime import datetime\nd = datetime.strptime(\"17.11.2026\", \"%d.%m.%Y\")\nprint(d.year)", options: ["2026", "11", "17", "Ошибка"], correct: 0, explanation: "strptime разобрал строку по шаблону, .year — год." },
            { question: "Найдите ошибку в программе", code: "from datetime import datetime\ndatetime.strptime(\"11.11.2026\", \"%Y-%m-%d\")", options: ["Шаблон не совпадает с форматом строки", "strptime не существует", "Год должен быть первым", "Ошибки нет"], correct: 0, explanation: "Строка с точками, а шаблон с дефисами — ValueError." },
            { question: "Найдите ошибку в программе", code: "from datetime import date\nd = date(2026, 2, 30)", options: ["30 февраля не существует", "Нельзя создавать даты в будущем", "Месяц пишется словом", "Ошибки нет"], correct: 0, explanation: "Python проверяет календарь — ValueError: day is out of range for month." },
            { question: "Как прибавить к дате d три дня?", options: ["d + 3", "d + timedelta(days=3)", "d.add(3)", "d.day + 3"], correct: 1, explanation: "К дате прибавляют промежуток timedelta. Просто число прибавить нельзя." },
            { question: "Что выведет программа?", code: "from datetime import date\nprint(date(2027, 1, 1) > date(2026, 12, 31))", options: ["True", "False", "Ошибка", "1"], correct: 0, explanation: "Даты можно сравнивать: более поздняя дата «больше»." },
            { question: "Что выведет программа?", code: "from datetime import date\nb = date(2012, 5, 17)\nt = date(2026, 5, 16)\ny = t.year - b.year\nif (t.month, t.day) < (b.month, b.day):\n    y -= 1\nprint(y)", options: ["13", "14", "12", "Ошибка"], correct: 0, explanation: "В 2026 году день рождения (17 мая) ещё не наступил к 16 мая — год не засчитывается: 14 - 1 = 13." },
            { question: "Чем отличается strftime от strptime?", options: ["strftime — дата в строку, strptime — строка в дату", "Ничем", "strftime — только для времени", "strptime выводит дату на экран"], correct: 0, explanation: "f — format (оформить в строку), p — parse (разобрать строку)." },
            { question: "Что делает time.sleep(2)?", options: ["Ставит программу на паузу на 2 секунды", "Возвращает текущее время", "Завершает программу через 2 секунды", "Ускоряет программу в 2 раза"], correct: 0, explanation: "sleep — «спать»: программа ждёт указанное число секунд." },
            { question: "Напишите строку, которая подключает из модуля datetime классы date и timedelta", type: "code", correct: ["from datetime import date, timedelta", "from datetime import timedelta, date"], explanation: "from datetime import date, timedelta" },
            { question: "Напишите выражение: дата d в формате ДД.ММ.ГГГГ", type: "code", correct: ["d.strftime(\"%d.%m.%Y\")", "d.strftime('%d.%m.%Y')"], explanation: "strftime с шаблоном: d.strftime(\"%d.%m.%Y\")" }
        ],
        'lesson15.html': [
            { question: "Что выведет программа?", code: "for i, item in enumerate([\"хлеб\", \"молоко\"], start=1):\n    print(i, item)", options: ["1 хлеб\n2 молоко", "0 хлеб\n1 молоко", "хлеб\nмолоко", "Ошибка"], correct: 0, explanation: "enumerate с start=1 нумерует элементы с единицы." },
            { question: "Что выведет программа?", code: "for i, x in enumerate([\"a\", \"b\"]):\n    print(i, x)", options: ["0 a\n1 b", "1 a\n2 b", "a\nb", "Ошибка"], correct: 0, explanation: "Без start нумерация в enumerate начинается с нуля." },
            { question: "Что выведет программа?", code: "tasks = [{\"title\": \"Купить хлеб\", \"done\": False}]\nprint(tasks[0][\"title\"])", options: ["Купить хлеб", "False", "title", "Ошибка"], correct: 0, explanation: "tasks[0] — первый словарь, [\"title\"] — его название." },
            { question: "Что выведет программа?", code: "done = True\nmark = \"✓\" if done else \" \"\nprint(mark)", options: ["✓", "пусто", "True", "Ошибка"], correct: 0, explanation: "Условие в одну строку: если done истинно — галочка, иначе пробел." },
            { question: "Зачем в mark_done пишут tasks[number - 1]?", options: ["Пользователь считает дела с 1, а индексы списка начинаются с 0", "Чтобы отметить предыдущее дело", "Так быстрее работает", "Это ошибка, нужно tasks[number]"], correct: 0, explanation: "Первое дело для человека — номер 1, а в списке у него индекс 0." },
            { question: "Какой приём делает меню, которое работает, пока пользователь не выберет выход?", options: ["while True и break", "for i in range(10)", "if и else", "try и except"], correct: 0, explanation: "Бесконечный цикл while True заканчивается, когда срабатывает break." },
            { question: "Что выведет программа?", code: "print(\"1|Купить хлеб|срочно\".split(\"|\", 1))", options: ["['1', 'Купить хлеб|срочно']", "['1', 'Купить хлеб', 'срочно']", "1", "Ошибка"], correct: 0, explanation: "split(\"|\", 1) режет строку только по первой черте." },
            { question: "Найдите ошибку в программе", code: "task = {\"title\": \"Купить хлеб\"}\nprint(task[\"titel\"])", options: ["В словаре нет ключа «titel» — опечатка", "Словарь нельзя выводить", "Нужны круглые скобки", "Ошибки нет"], correct: 0, explanation: "Ключ называется title — будет KeyError." },
            { question: "Найдите ошибку в программе", code: "tasks = [\"a\", \"b\"]\nnumber = 3\nprint(tasks[number - 1])", options: ["В списке нет третьего элемента", "number нельзя вычитать", "Список нужно создавать через ()", "Ошибки нет"], correct: 0, explanation: "В списке два дела, индекс 2 не существует — IndexError. Номер нужно проверять." },
            { question: "Зачем при загрузке ловить FileNotFoundError?", options: ["При первом запуске файла с делами ещё нет", "Чтобы файл не удалился", "Чтобы ускорить чтение", "Это не нужно"], correct: 0, explanation: "Если файла нет, программа должна начать с пустого списка, а не упасть." },
            { question: "Что значит строка if __name__ == \"__main__\":?", options: ["Код ниже выполнится, только если файл запустили как программу", "Проверка имени пользователя", "Начало класса", "Подключение модуля main"], correct: 0, explanation: "При import этого файла как модуля такой код не запустится." },
            { question: "Какое имя функции соответствует правилам PEP 8?", options: ["show_tasks", "ShowTasks", "showtasks()", "Show-Tasks"], correct: 0, explanation: "Функции и переменные — маленькими буквами через подчёркивание." },
            { question: "Для чего нужен Git?", options: ["Сохранять историю версий проекта и возвращаться к ним", "Запускать программы на Python", "Устанавливать библиотеки", "Проверять орфографию"], correct: 0, explanation: "Git хранит «снимки» проекта, к любому можно вернуться." },
            { question: "Что выведет программа?", code: "tasks = [{\"done\": True}, {\"done\": False}, {\"done\": False}]\ndone = sum(1 for t in tasks if t[\"done\"])\nprint(f\"Выполнено: {done} из {len(tasks)}\")", options: ["Выполнено: 1 из 3", "Выполнено: 2 из 3", "1", "Ошибка"], correct: 0, explanation: "sum с условием считает дела, у которых done == True." },
            { question: "Напишите строку, которая добавляет в список tasks словарь с ключами title (значение title) и done (значение False)", type: "code", correct: ["tasks.append({\"title\": title, \"done\": False})", "tasks.append({'title': title, 'done': False})"], explanation: "append добавляет словарь в конец списка: tasks.append({\"title\": title, \"done\": False})" },
            { question: "Напишите заголовок цикла, который перебирает список tasks с номерами i, начиная с 1 (элемент — t)", type: "code", correct: ["for i, t in enumerate(tasks, start=1):", "for i, t in enumerate(tasks, 1):"], explanation: "enumerate со start=1: for i, t in enumerate(tasks, start=1):" }
        ],
        'lesson16.html': [
            { question: "Что такое API?", options: ["Способ, которым программы обмениваются данными", "Язык программирования", "База данных", "Браузер"], correct: 0, explanation: "API — интерфейс для общения программ: одна отправляет запрос, другая присылает ответ." },
            { question: "Что означает код ответа 200?", options: ["Успех, данные получены", "Страница не найдена", "Ошибка сервера", "Нет доступа"], correct: 0, explanation: "Коды на 2 — успех. 200 — самый частый: всё хорошо." },
            { question: "Что означает код ответа 404?", options: ["Не найдено", "Успех", "Ошибка сервера", "Слишком много запросов"], correct: 0, explanation: "404 — по такому адресу ничего нет." },
            { question: "Что выведет программа?", code: "import json\ndata = json.loads('{\"city\": \"Москва\"}')\nprint(data[\"city\"])", options: ["Москва", "city", "{'city': 'Москва'}", "Ошибка"], correct: 0, explanation: "json.loads превратил текст в словарь, по ключу \"city\" лежит «Москва»." },
            { question: "Что выведет программа?", code: "import json\nprint(type(json.loads('{\"a\": 1}')))", options: ["<class 'dict'>", "<class 'str'>", "<class 'list'>", "Ошибка"], correct: 0, explanation: "После json.loads JSON-объект становится словарём." },
            { question: "Что выведет программа?", code: "import json\nprint(len(json.loads(\"[1, 2, 3]\")))", options: ["3", "1", "[1, 2, 3]", "Ошибка"], correct: 0, explanation: "JSON-список стал списком Python, len — его длина." },
            { question: "Что выведет программа?", code: "import json\nprint(json.loads('{\"ok\": false}')[\"ok\"])", options: ["False", "false", "0", "Ошибка"], correct: 0, explanation: "false в JSON превращается в False в Python." },
            { question: "Найдите ошибку в программе", code: "import json\njson.loads(\"{'a': 1}\")", options: ["В JSON нужны двойные кавычки", "Модуль json не существует", "loads нужно писать load", "Ошибки нет"], correct: 0, explanation: "Одинарные кавычки — синтаксис Python, а не JSON. Будет JSONDecodeError." },
            { question: "Найдите ошибку в программе", code: "text = '{\"temp\": 5}'\nprint(text[\"temp\"])", options: ["Строку забыли разобрать через json.loads", "Ключ temp не существует", "Нужны одинарные кавычки", "Ошибки нет"], correct: 0, explanation: "text — это строка, у неё нет ключей. Сначала нужно json.loads(text)." },
            { question: "Зачем указывать timeout в requests.get?", options: ["Чтобы программа не зависла, если сервер не отвечает", "Чтобы запрос шёл быстрее", "Чтобы повторить запрос", "Это обязательный ключ API"], correct: 0, explanation: "timeout ограничивает время ожидания ответа." },
            { question: "Какой метод отправляет данные на сервер (например, новую запись)?", options: ["GET", "POST", "JSON", "STATUS"], correct: 1, explanation: "GET — получить данные, POST — отправить." },
            { question: "Что выведет программа?", code: "from urllib.parse import urlencode\nprint(urlencode({\"q\": \"cat\", \"page\": 2}))", options: ["q=cat&page=2", "q:cat,page:2", "{'q': 'cat', 'page': 2}", "Ошибка"], correct: 0, explanation: "urlencode собирает параметры в строку: ключ=значение через &." },
            { question: "Что делает response.raise_for_status()?", options: ["Выбрасывает ошибку, если код ответа 4xx или 5xx", "Повышает скорость запроса", "Печатает код статуса", "Повторяет запрос"], correct: 0, explanation: "Так удобно сразу превратить неудачный ответ в исключение и обработать его в except." },
            { question: "Где правильно хранить ключ API?", options: ["Отдельно от кода, например в переменной окружения", "Прямо в коде на GitHub", "В названии файла", "В комментарии к коду"], correct: 0, explanation: "Ключ — как пароль: его нельзя публиковать." },
            { question: "Напишите строку, которая превращает JSON-текст из переменной text в словарь data (модуль json подключён)", type: "code", correct: ["data = json.loads(text)"], explanation: "json.loads(text) разбирает текст JSON: data = json.loads(text)" },
            { question: "Напишите строку, которая делает GET-запрос по адресу из переменной url и сохраняет ответ в response", type: "code", correct: ["response = requests.get(url)", "response = requests.get(url, timeout=10)"], explanation: "response = requests.get(url) — а в реальной программе ещё timeout=10." }
        ]
    };

    // --- 2. Locking System & Navigation ---
    let lessonLocked = false;

    function initLockSystem() {
        const progress = safeGetProgress();

        // A. Handle 'python-basic.html' (Course List)
        if (currentPath === 'python-basic.html') {
            const cards = document.querySelectorAll('.lesson-card');
            let passedCount = 0;

            cards.forEach((card) => {
                const cardLink = card.querySelector('a.btn');
                const lessonFileName = cardLink ? cardLink.getAttribute('href') : '';
                const index = lessonsList.indexOf(lessonFileName);
                if (index < 0) return;
                const isPassed = progress[lessonFileName];

                // Add Checkmark
                if (isPassed) {
                    passedCount++;
                    card.classList.add('completed');
                    // Prevent double checkmarks
                    if (!card.querySelector('.check-mark')) {
                        card.style.position = 'relative'; // Ensure relative for absolute checkmark
                        const mark = document.createElement('div');
                        mark.className = 'check-mark';
                        mark.textContent = '✓ Пройдено';
                        card.appendChild(mark);
                    }
                }

                // Lock Logic: Lesson 1 is always open. Others need prev one passed.
                if (index > 0) {
                    if (!isLessonOpen(lessonFileName, progress)) {
                        // Locked!
                        card.classList.add('locked');
                        const link = cardLink;
                        if (link) {
                            link.href = '#';
                            link.textContent = '🔒 Откроется после урока ' + index;
                            link.classList.add('btn-locked');
                            link.setAttribute('aria-disabled', 'true');
                            link.onclick = (e) => {
                                e.preventDefault();
                                showToast('Доступ закрыт: сначала пройдите предыдущий урок.', 'error');
                            };
                        }
                    } else {
                        // Unlocked - Ensure proper state if previously locked
                        card.classList.remove('locked');
                    }
                }
            });

            // Update Progress Bar
            const totalLessons = cards.length;
            const progressContainer = document.getElementById('course-progress-container');
            const progressText = document.getElementById('progress-text');
            const progressPercentage = document.getElementById('progress-percentage');
            const progressBarFill = document.getElementById('progress-bar-fill');

            if (progressContainer && totalLessons > 0) {
                progressContainer.style.display = 'block';
                const percentage = Math.round((passedCount / totalLessons) * 100);
                progressText.textContent = `Пройдено ${passedCount} из ${totalLessons} уроков`;
                progressPercentage.textContent = `${percentage}%`;

                // Small delay to allow CSS transition to play on load
                setTimeout(() => {
                    progressBarFill.style.width = `${percentage}%`;
                }, 100);
            }

            return;
        }

        // B. Урок закрыт, если не пройден предыдущий.
        //    Текст урока остаётся доступен (его могут прочитать и ученик, и поисковик),
        //    а тест и переход дальше откроются только после прохождения предыдущего урока.
        const lessonIndex = lessonsList.indexOf(currentPath);
        if (lessonIndex > 0 && !isLessonOpen(currentPath, progress)) {
            lessonLocked = true;
            const prevLesson = lessonsList[lessonIndex - 1];
            const banner = document.createElement('div');
            banner.className = 'lesson-locked-banner';
            banner.setAttribute('role', 'note');
            banner.innerHTML = `🔒 <strong>Урок пока закрыт.</strong> Читать теорию можно, но тест откроется после
                прохождения <a href="${prevLesson}">урока ${lessonIndex}</a>.`;
            const main = document.querySelector('main');
            if (main) main.insertBefore(banner, main.firstChild);
        }

        // C. Generate Nav Buttons (Prev/Next)
        const navContainer = document.querySelector('.lesson-navigation');
        if (navContainer) {
            navContainer.innerHTML = ''; // Clear default hardcoded nav

            // Prev Button
            if (lessonIndex > 0) {
                const prevBtn = document.createElement('a');
                prevBtn.href = lessonsList[lessonIndex - 1];
                prevBtn.className = 'btn-nav prev';
                prevBtn.textContent = '← Предыдущий урок';
                navContainer.appendChild(prevBtn);
            }

            // Next Button is handled by showNextLessonButton after quiz
        }
    }

    function toggleLessonVisibility(show) {
        document.querySelectorAll('.lesson-title, .lesson-goal, .lesson-content, .lesson-homework').forEach(el => {
            // Check if quiz container or start btn is inside this element
            const hasQuizInfo = el.querySelector('#quiz-container') || el.querySelector('#btn-start-quiz');
            if (hasQuizInfo) {
                // hide children instead of el
                Array.from(el.children).forEach(child => {
                    const childHasQuiz = child.id === 'quiz-container' || child.id === 'btn-start-quiz' || child.querySelector('#quiz-container') || child.querySelector('#btn-start-quiz');
                    if (!childHasQuiz) {
                        child.style.display = show ? '' : 'none';
                    }
                });
            } else {
                el.style.display = show ? '' : 'none';
            }
        });
    }

    // --- 3. Тест урока ---
    // Один вопрос на экране: ответили — видно, верно ли и почему, потом «Следующий вопрос».
    // В конце — результат, разбор ошибок и кнопки «дальше / ещё раз».
    const QUIZ_SIZE = 10;      // сколько вопросов в одной попытке (если в уроке больше — выбираются случайно)
    const QUIZ_PASS = 0.7;     // доля верных ответов, чтобы тест засчитался
    const OPTION_LETTERS = 'АБВГДЕЖ';

    function qel(tag, cls, text) {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text !== undefined && text !== null) node.textContent = text;
        return node;
    }

    function qbtn(text, cls, onClick) {
        const b = qel('button', 'qz-btn ' + (cls || ''), text);
        b.type = 'button';
        if (onClick) b.addEventListener('click', onClick);
        return b;
    }

    function stateIcon(kind) {
        const span = qel('span', 'qz-state-icon qz-state-icon-' + kind);
        span.setAttribute('aria-hidden', 'true');
        span.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
            (kind === 'ok' ? '<polyline points="5 12.5 10 17.5 19 7.5"/>' : '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>') + '</svg>';
        return span;
    }

    function readQuizScore() {
        try { return (JSON.parse(localStorage.getItem('quiz_scores')) || {})[currentPath] || null; } catch (e) { return null; }
    }

    function quizCodeBlock(code) {
        const pre = qel('pre', 'quiz-code');
        const codeEl = qel('code', 'language-python', code);
        pre.appendChild(codeEl);
        if (window.hljs) window.hljs.highlightElement(codeEl);
        return pre;
    }

    function scrollToQuiz(box) {
        const top = box.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }

    function nextLessonFile() {
        const i = lessonsList.indexOf(currentPath);
        return i >= 0 && i < lessonsList.length - 1 ? lessonsList[i + 1] : null;
    }

    // Ссылка-кнопка «Следующий урок» (или сертификат после последнего урока)
    function nextLessonLink(primary) {
        const next = nextLessonFile();
        const a = qel('a', 'qz-btn ' + (primary ? 'qz-btn-primary' : ''), next ? `Перейти к уроку ${lessonsList.indexOf(next) + 1} →` : 'Получить сертификат →');
        a.href = next || 'certificate.html';
        return a;
    }

    function initQuiz() {
        const box = document.getElementById('quiz-container');
        if (!box || !quizData[currentPath]) return;
        box.classList.add('qz');
        box.setAttribute('role', 'region');
        box.setAttribute('aria-label', 'Тест по уроку');
        if (lessonLocked) { renderQuizLocked(box); return; }
        if (safeGetProgress()[currentPath]) {
            renderQuizDone(box);
            showNextLessonButton();
        } else {
            renderQuizIntro(box);
        }
    }

    function renderQuizLocked(box) {
        const i = lessonsList.indexOf(currentPath);
        box.textContent = '';
        const card = qel('div', 'qz-card qz-state');
        card.append(stateIcon('lock'));
        const body = qel('div', 'qz-state-body');
        body.append(qel('h2', 'qz-title', 'Тест пока закрыт'));
        const p = qel('p', 'qz-lead', 'Он откроется, когда вы пройдёте тест ');
        const a = qel('a', '', `урока ${i}`);
        a.href = lessonsList[i - 1];
        p.append(a, '. Теорию этого урока можно читать уже сейчас.');
        body.append(p);
        card.append(body);
        box.append(card);
    }

    // Карточка перед началом теста
    function renderQuizIntro(box) {
        const all = quizData[currentPath] || [];
        const total = Math.min(QUIZ_SIZE, all.length);
        const need = Math.ceil(total * QUIZ_PASS);
        const score = readQuizScore();
        box.textContent = '';
        const card = qel('div', 'qz-card qz-intro');
        card.append(qel('span', 'qz-eyebrow', 'Тест по уроку'), qel('h2', 'qz-title', 'Проверьте себя'));
        card.append(qel('p', 'qz-lead', `Ответьте на ${total} вопросов по теме урока. Если верных ответов будет ${need} или больше, тест засчитается и откроется следующий урок.`));
        const facts = qel('ul', 'qz-facts');
        [[String(total), 'вопросов'], [`${need} из ${total}`, 'чтобы пройти'], [`≈ ${Math.max(3, Math.round(total / 2))} мин`, 'на весь тест']].forEach(([big, small]) => {
            const li = qel('li');
            li.append(qel('strong', '', big), qel('span', '', small));
            facts.append(li);
        });
        card.append(facts);
        if (score) card.append(qel('p', 'qz-muted', `Ваш лучший результат: ${score.best}% · попыток: ${score.attempts}`));
        const actions = qel('div', 'qz-actions');
        const start = qbtn('Начать тест', 'qz-btn-primary', () => startQuiz(box));
        start.id = 'btn-start-quiz';
        actions.append(start);
        if (all.length > QUIZ_SIZE) actions.append(qel('span', 'qz-muted', 'Вопросы каждый раз выбираются заново, поэтому пересдавать можно сколько угодно.'));
        card.append(actions);
        box.append(card);
    }

    // Тест уже пройден (повторное открытие урока)
    function renderQuizDone(box) {
        const score = readQuizScore();
        box.textContent = '';
        const card = qel('div', 'qz-card qz-state');
        card.append(stateIcon('ok'));
        const body = qel('div', 'qz-state-body');
        body.append(qel('h2', 'qz-title', 'Тест пройден'));
        body.append(qel('p', 'qz-lead', score ? `Лучший результат: ${score.best}% · попыток: ${score.attempts}. Можно пройти ещё раз, чтобы закрепить тему.` : 'Можно пройти ещё раз, чтобы закрепить тему.'));
        const actions = qel('div', 'qz-actions');
        actions.append(nextLessonLink(true));
        const again = qbtn('Пройти ещё раз', 'qz-btn-ghost', () => startQuiz(box));
        again.id = 'btn-start-quiz';
        actions.append(again);
        body.append(actions);
        card.append(body);
        box.append(card);
    }

    function startQuiz(box) {
        const all = quizData[currentPath] || [];
        const questions = all.length > QUIZ_SIZE ? shuffleArray(all).slice(0, QUIZ_SIZE) : all.slice();
        if (!questions.length) return;
        const state = { questions, index: 0, answers: [] };
        box._quiz = state;
        toggleLessonVisibility(false);
        renderQuestion(box, state);
        scrollToQuiz(box);
    }

    function leaveQuiz(box) {
        box._quiz = null;
        toggleLessonVisibility(true);
        if (safeGetProgress()[currentPath]) renderQuizDone(box); else renderQuizIntro(box);
        scrollToQuiz(box);
    }

    // Ответ кодом: пробелы вокруг знаков не важны, кавычки любые (но парные), регистр важен
    function codeAnswerOk(q, value) {
        const norm = (str) => String(str).trim().replace(/\s+/g, ' ').replace(/\s*([()\[\]{}=<>!+\-*/%,:.])\s*/g, '$1');
        const swapQuotes = (str) => str.replace(/['"]/g, c => (c === '"' ? "'" : '"'));
        const user = norm(value);
        return q.correct.some(ans => user === norm(ans) || user === swapQuotes(norm(ans)));
    }

    function renderQuestion(box, st) {
        const q = st.questions[st.index];
        const n = st.questions.length;
        box.textContent = '';
        const card = qel('div', 'qz-card qz-run');

        const head = qel('div', 'qz-head');
        head.append(qel('span', 'qz-step', `Вопрос ${st.index + 1} из ${n}`));
        head.append(qbtn('Выйти из теста', 'qz-link', () => {
            if (st.answers.length && !confirm('Выйти из теста? Эта попытка не сохранится.')) return;
            leaveQuiz(box);
        }));
        card.append(head);

        const bar = qel('div', 'qz-progress');
        bar.setAttribute('role', 'progressbar');
        bar.setAttribute('aria-valuemin', '0');
        bar.setAttribute('aria-valuemax', String(n));
        bar.setAttribute('aria-valuenow', String(st.answers.length));
        st.questions.forEach((_, i) => {
            const a = st.answers[i];
            bar.append(qel('span', 'qz-seg' + (a ? (a.correct ? ' is-ok' : ' is-bad') : i === st.index ? ' is-current' : '')));
        });
        card.append(bar);

        const title = qel('h3', 'qz-question', q.question);
        title.id = 'qz-question';
        card.append(title);
        if (q.code) card.append(quizCodeBlock(q.code));

        if (q.type === 'code') {
            const form = qel('form', 'qz-answer');
            const input = qel('input', 'qz-input');
            input.type = 'text';
            input.autocomplete = 'off';
            input.spellcheck = false;
            input.setAttribute('autocapitalize', 'off');
            input.placeholder = 'Напишите ответ кодом';
            input.setAttribute('aria-labelledby', 'qz-question');
            const check = qel('button', 'qz-btn qz-btn-primary', 'Проверить');
            check.type = 'submit';
            form.append(input, check);
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (form.dataset.done) return;
                if (!input.value.trim()) { input.focus(); return; }
                form.dataset.done = '1';
                const ok = codeAnswerOk(q, input.value);
                input.readOnly = true;
                check.disabled = true;
                form.classList.add(ok ? 'is-ok' : 'is-bad');
                answerGiven(box, st, card, ok, input.value.trim(), q.correct[0]);
            });
            card.append(form);
            card.append(qel('p', 'qz-muted qz-tip', 'Пробелы вокруг знаков не важны, кавычки можно писать любые.'));
            setTimeout(() => input.focus({ preventScroll: true }), 60);
        } else {
            const list = qel('div', 'qz-options');
            list.setAttribute('role', 'group');
            list.setAttribute('aria-labelledby', 'qz-question');
            // Варианты-«вывод программы» показываем моноширинным шрифтом, как в консоли
            const mono = !!q.code && /выведет/i.test(q.question);
            shuffleArray(q.options.map((text, i) => ({ text, i }))).forEach((o, k) => {
                const b = qel('button', 'qz-option' + (mono ? ' is-mono' : ''));
                b.type = 'button';
                b.dataset.origIndex = String(o.i);
                b.append(qel('span', 'qz-letter', OPTION_LETTERS[k]), qel('span', 'qz-option-text', o.text), qel('span', 'qz-mark'));
                b.addEventListener('click', () => {
                    if (list.dataset.done) return;
                    list.dataset.done = '1';
                    const ok = o.i === q.correct;
                    list.querySelectorAll('.qz-option').forEach(x => {
                        x.disabled = true;
                        if (Number(x.dataset.origIndex) === q.correct) x.classList.add('is-correct');
                    });
                    b.classList.add('is-picked');
                    if (!ok) b.classList.add('is-wrong');
                    answerGiven(box, st, card, ok, o.text, q.options[q.correct]);
                });
                list.append(b);
            });
            card.append(list);
            card.append(qel('p', 'qz-muted qz-tip', 'Выберите один ответ. Можно нажать цифру на клавиатуре: 1, 2, 3…'));
        }
        box.append(card);
    }

    function answerGiven(box, st, card, ok, given, right) {
        const q = st.questions[st.index];
        st.answers.push({ correct: ok, given, right });
        const seg = card.querySelectorAll('.qz-seg')[st.index];
        if (seg) seg.className = 'qz-seg ' + (ok ? 'is-ok' : 'is-bad');
        const bar = card.querySelector('.qz-progress');
        if (bar) bar.setAttribute('aria-valuenow', String(st.answers.length));
        const tip = card.querySelector('.qz-tip');
        if (tip) tip.remove();

        const fb = qel('div', 'qz-feedback ' + (ok ? 'is-ok' : 'is-bad'));
        fb.setAttribute('role', 'status');
        fb.append(qel('strong', 'qz-feedback-title', ok ? 'Верно' : 'Неверно'));
        if (!ok && q.type === 'code') {
            const p = qel('p', 'qz-feedback-right', 'Правильный ответ: ');
            p.append(qel('code', '', right));
            fb.append(p);
        }
        if (q.explanation) fb.append(qel('p', 'qz-feedback-text', q.explanation));

        const last = st.index === st.questions.length - 1;
        const next = qbtn(last ? 'Показать результат' : 'Следующий вопрос →', 'qz-btn-primary qz-next', () => {
            if (last) finishQuiz(box, st);
            else { st.index++; renderQuestion(box, st); scrollToQuiz(box); }
        });
        const actions = qel('div', 'qz-actions');
        actions.append(next);
        card.append(fb, actions);
        next.focus({ preventScroll: true });
        const r = actions.getBoundingClientRect();
        if (r.bottom > window.innerHeight) window.scrollBy({ top: r.bottom - window.innerHeight + 24, behavior: 'smooth' });
    }

    function finishQuiz(box, st) {
        const total = st.questions.length;
        const correct = st.answers.filter(a => a.correct).length;
        saveQuizScore(correct, total);
        const passed = correct / total >= QUIZ_PASS;
        if (passed) {
            const progress = safeGetProgress();
            progress[currentPath] = true;
            try {
                localStorage.setItem('quiz_results', JSON.stringify(progress));
                if (lessonsList.every(l => progress[l]) && !localStorage.getItem('course_completed_at')) {
                    localStorage.setItem('course_completed_at', new Date().toISOString());
                }
            } catch (e) { /* хранилище недоступно */ }
            showNextLessonButton();
        }
        box._quiz = null;
        renderQuizResult(box, st, correct, total, passed);
        scrollToQuiz(box);
    }

    function scoreRing(percent, passed) {
        const r = 52, c = 2 * Math.PI * r;
        const wrap = qel('div', 'qz-ring' + (passed ? ' is-ok' : ' is-bad'));
        wrap.innerHTML = `<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="qz-ring-track" cx="60" cy="60" r="${r}"/>` +
            `<circle class="qz-ring-value" cx="60" cy="60" r="${r}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - percent / 100)).toFixed(1)}"/></svg>`;
        const label = qel('div', 'qz-ring-label');
        label.append(qel('strong', '', percent + '%'), qel('span', '', 'верно'));
        wrap.append(label);
        return wrap;
    }

    function renderQuizResult(box, st, correct, total, passed) {
        const percent = Math.round(correct / total * 100);
        const need = Math.ceil(total * QUIZ_PASS);
        box.textContent = '';
        const card = qel('div', 'qz-card qz-result');

        const top = qel('div', 'qz-result-top');
        top.append(scoreRing(percent, passed));
        const text = qel('div', 'qz-result-text');
        text.append(qel('span', 'qz-eyebrow' + (passed ? ' is-ok' : ' is-bad'), passed ? 'Тест пройден' : 'Тест не пройден'));
        text.append(qel('h2', 'qz-title', passed ? (correct === total ? 'Отлично, без единой ошибки!' : 'Хороший результат!') : 'Пока не получилось'));
        text.append(qel('p', 'qz-lead', passed
            ? `Верных ответов: ${correct} из ${total}. ${nextLessonFile() ? 'Следующий урок открыт.' : 'Это был последний урок курса.'}`
            : `Верных ответов: ${correct} из ${total}, а нужно хотя бы ${need}. Посмотрите разбор ниже, повторите урок и попробуйте снова.`));
        top.append(text);
        card.append(top);

        const actions = qel('div', 'qz-actions');
        if (passed) {
            actions.append(nextLessonLink(true));
            actions.append(qbtn('Пройти ещё раз', 'qz-btn-ghost', () => startQuiz(box)));
            actions.append(qbtn('Вернуться к уроку', 'qz-link', () => leaveQuiz(box)));
        } else {
            actions.append(qbtn('Пройти ещё раз', 'qz-btn-primary', () => startQuiz(box)));
            actions.append(qbtn('Повторить урок', 'qz-btn-ghost', () => { leaveQuiz(box); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
        }
        card.append(actions);

        const wrong = st.answers.map((a, i) => ({ a, q: st.questions[i], n: i + 1 })).filter(x => !x.a.correct);
        const review = qel('div', 'qz-review');
        if (!wrong.length) {
            review.append(qel('p', 'qz-muted', 'Все ответы верные — разбирать нечего.'));
        } else {
            review.append(qel('h3', 'qz-review-title', wrong.length === 1 ? 'Разбор ошибки' : `Разбор ошибок (${wrong.length})`));
            wrong.forEach(({ a, q, n }) => {
                const item = qel('div', 'qz-review-item');
                item.append(qel('p', 'qz-review-q', `${n}. ${q.question}`));
                if (q.code) item.append(quizCodeBlock(q.code));
                const mono = q.type === 'code' || (!!q.code && /выведет/i.test(q.question));
                const line = (label, value, cls) => {
                    const p = qel('p', 'qz-review-line ' + cls);
                    p.append(qel('span', 'qz-review-label', label));
                    p.append(qel('span', 'qz-review-value' + (mono ? ' is-mono' : ''), value));
                    return p;
                };
                item.append(line('Ваш ответ', a.given, 'is-bad'), line('Правильный ответ', a.right, 'is-ok'));
                if (q.explanation) item.append(qel('p', 'qz-review-why', q.explanation));
                review.append(item);
            });
        }
        card.append(review);
        box.append(card);
    }

    // Клавиатура во время теста: 1–9 — выбрать вариант, Enter — следующий вопрос
    document.addEventListener('keydown', (e) => {
        const box = document.getElementById('quiz-container');
        if (!box || !box._quiz || e.ctrlKey || e.metaKey || e.altKey) return;
        const tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (/^[1-9]$/.test(e.key)) {
            const opt = box.querySelectorAll('.qz-option:not(:disabled)')[Number(e.key) - 1];
            if (opt) { e.preventDefault(); opt.click(); }
        }
    });

    function saveQuizScore(correct, total) {
        let scores = {};
        try { scores = JSON.parse(localStorage.getItem('quiz_scores')) || {}; } catch (e) { scores = {}; }
        const percent = Math.round(correct / total * 100);
        const prev = scores[currentPath] || { best: 0, attempts: 0 };
        scores[currentPath] = {
            last: percent,
            best: Math.max(prev.best || 0, percent),
            attempts: (prev.attempts || 0) + 1,
            correct, total,
            at: new Date().toISOString()
        };
        try { localStorage.setItem('quiz_scores', JSON.stringify(scores)); } catch (e) { /* не страшно */ }
    }

    // Кнопка «Следующий урок» внизу страницы — появляется, когда тест пройден
    function showNextLessonButton() {
        const navContainer = document.querySelector('.lesson-navigation');
        if (!navContainer || navContainer.querySelector('.next, .finish')) return;
        const next = nextLessonFile();
        const a = document.createElement('a');
        a.className = next ? 'btn-nav next' : 'btn-nav next finish';
        a.href = next || 'certificate.html';
        a.textContent = next ? 'Следующий урок →' : 'Получить сертификат →';
        navContainer.appendChild(a);
    }

    // Алгоритм Фишера-Йейтса для надёжного перемешивания
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // --- 4. Utilities ---
    function initCopyButtons() {
        document.querySelectorAll('pre').forEach(pre => {
            if (pre.closest('.CodeMirror') || pre.closest('.mistake') || pre.id === 'terminal-output' || pre.classList.contains('code-window-body')) return;
            if (pre.querySelector('.btn-copy')) return;

            pre.style.position = 'relative';
            const codeEl = pre.querySelector('code');
            const btn = document.createElement('button');
            btn.className = 'btn-copy';
            btn.textContent = 'Копировать';
            btn.setAttribute('aria-label', 'Копировать код');

            btn.addEventListener('click', () => {
                const text = (codeEl ? codeEl.textContent : pre.textContent).replace(/Копировать$|✓ Скопировано$/, '');
                const done = (ok) => {
                    btn.textContent = ok ? '✓ Скопировано' : 'Не удалось';
                    setTimeout(() => { btn.textContent = 'Копировать'; }, 2000);
                };
                const fallbackCopy = () => {
                    const ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.cssText = 'position:fixed;opacity:0';
                    document.body.appendChild(ta);
                    ta.select();
                    let ok = false;
                    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
                    ta.remove();
                    done(ok);
                };
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => done(true)).catch(fallbackCopy);
                } else {
                    fallbackCopy();
                }
            });
            pre.appendChild(btn);
        });
    }

    function initTheme() {
        const headerContainer = document.querySelector('header .container');
        if (!headerContainer) return;

        if (document.querySelector('.theme-toggle-btn')) return; // Avoid dupes

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle-btn';
        const updateIcon = (isDark) => toggleBtn.textContent = isDark ? '☀️' : '🌙';

        const savedTheme = localStorage.getItem('theme');
        let isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDarkMode) document.body.classList.add('dark-mode');
        updateIcon(isDarkMode);

        toggleBtn.onclick = () => {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            updateIcon(isDarkMode);
        };

        const nav = headerContainer.querySelector('nav');
        if (nav && nav.querySelector('ul')) {
            const li = document.createElement('li');
            li.appendChild(toggleBtn);
            nav.querySelector('ul').appendChild(li);
        }
    }

    function initResetButton() {
        const resetBtn = document.getElementById('btn-reset-progress');
        if (!resetBtn) return;

        resetBtn.onclick = () => {
            if (confirm('Вы уверены, что хотите сбросить весь прогресс обучения? Все пройденные уроки будут снова заблокированы.')) {
                localStorage.removeItem('quiz_results');
                location.reload();
            }
        };
    }

    function initProgressExportImport() {
        const exportBtn = document.getElementById('btn-export-progress');
        const importBtn = document.getElementById('btn-import-progress');
        const importFile = document.getElementById('input-import-file');

        if (exportBtn) {
            exportBtn.onclick = () => {
                const progress = safeGetProgress();
                const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'pythonbasic-progress.json';
                a.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
                showToast('Прогресс сохранён в файл', 'success');
            };
        }

        if (importBtn && importFile) {
            importBtn.onclick = () => importFile.click();
            importFile.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    try {
                        const data = JSON.parse(ev.target.result);
                        if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('invalid');
                        const clean = {};
                        lessonsList.forEach(l => { if (data[l] === true) clean[l] = true; });
                        if (Object.keys(clean).length === 0) throw new Error('invalid');
                        localStorage.setItem('quiz_results', JSON.stringify(clean));
                        showToast('Прогресс загружен', 'success');
                        setTimeout(() => location.reload(), 1000);
                    } catch {
                        showToast('Неверный формат файла', 'error');
                    }
                };
                reader.readAsText(file);
            };
        }
    }

    function initCourseCompletionBanner() {
        if (currentPath !== 'python-basic.html') return;
        const progress = safeGetProgress();
        const allDone = lessonsList.every(l => progress[l]);
        if (!allDone) return;

        const banner = document.getElementById('course-completion-banner');
        if (banner) banner.style.display = 'block';
    }

    // --- Scroll Animations ---
    function initScrollAnimations() {
        // Анимация только для небольших карточек: большие блоки (урок, редактор) не «выезжают»
        if (!('IntersectionObserver' in window)) return;
        const animatedElements = document.querySelectorAll('.card, .lesson-card, .landing-card, .program-module, .plan-card, .path-card');

        // Helper to add base class explicitly
        animatedElements.forEach(el => {
            el.classList.add('fade-in-up');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once animated so it doesn't replay when scrolling back up
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // --- Toast Notification ---
    function showToast(message, type = 'info') {
        // Добавляем стили если ещё нет
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                .toast-msg {
                    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px);
                    background: #1e293b; color: white; padding: 14px 28px; border-radius: 12px;
                    font-size: 0.98rem; font-weight: 500; z-index: 9999; opacity: 0;
                    transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); min-width: 260px; text-align: center;
                    border-left: 4px solid #6366f1;
                }
                .toast-msg.toast-error { border-left-color: #ef4444; }
                .toast-msg.toast-success { border-left-color: #10b981; }
                .toast-msg.is-shown { opacity: 1; transform: translateX(-50%) translateY(0); }
            `;
            document.head.appendChild(style);
        }
        const toast = document.createElement('div');
        toast.className = `toast-msg toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => toast.classList.add('is-shown'));
        });
        setTimeout(() => {
            toast.classList.remove('is-shown');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    function initMobileMenu() {
        const headerContainer = document.querySelector('header .container');
        if (!headerContainer) return;
        const nav = headerContainer.querySelector('nav');
        if (!nav) return;
        const ul = nav.querySelector('ul');
        if (!ul) return;

        // Remove inline styles so CSS media queries can control display
        ul.removeAttribute('style');

        // Create hamburger button
        const btn = document.createElement('button');
        btn.className = 'nav-hamburger';
        btn.setAttribute('aria-label', 'Открыть меню');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span></span><span></span><span></span>';
        headerContainer.insertBefore(btn, nav);

        const toggle = (open) => {
            ul.classList.toggle('is-open', open);
            btn.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', String(open));
        };

        btn.addEventListener('click', e => {
            e.stopPropagation();
            toggle(!ul.classList.contains('is-open'));
        });
        document.addEventListener('click', () => toggle(false));
        nav.addEventListener('click', e => e.stopPropagation());
        ul.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
    }

    function initReadingProgressBar() {
        const bar = document.createElement('div');
        bar.id = 'reading-progress';
        document.body.insertBefore(bar, document.body.firstChild);

        const update = () => {
            const h = document.documentElement;
            const total = h.scrollHeight - h.clientHeight;
            bar.style.width = total > 0 ? Math.min((h.scrollTop / total) * 100, 100) + '%' : '0%';
        };
        window.addEventListener('scroll', update, { passive: true });
        update();
    }

    function initSyntaxHighlighting() {
        if (!document.querySelector('pre code')) return;

        // Цвета подсветки заданы в style.css (те же, что в редакторе кода), отдельная тема не нужна
        const overrideSt = document.createElement('style');
        overrideSt.textContent = '.hljs{background:transparent!important;padding:0!important;font-size:inherit!important;line-height:inherit!important;}';
        document.head.appendChild(overrideSt);

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
        script.onload = () => {
            document.querySelectorAll('pre code').forEach(block => {
                if (!block.className) block.classList.add('language-python');
                window.hljs.highlightElement(block);
            });
        };
        document.head.appendChild(script);
    }

    // --- Ссылка lessonN.html#quiz сразу открывает тест урока ---
    function initDirectQuizLink() {
        if (location.hash !== '#quiz') return;
        const container = document.getElementById('quiz-container');
        const startBtn = container && container.querySelector('.qz-intro #btn-start-quiz');
        if (startBtn) startBtn.click();
        else if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Для преподавателя (только в браузере, где выполнен вход в кабинет) ---
    function isTeacherBrowser() {
        try { return !!localStorage.getItem('pb_teacher_pin'); } catch (e) { return false; }
    }

    function initTeacherExtras() {
        if (!isTeacherBrowser()) return;
        // Ссылка на кабинет в подвале — её видит только преподаватель
        const footerCol = document.querySelector('.site-footer .footer-col ul');
        if (footerCol && !footerCol.querySelector('a[href="teacher.html"]')) {
            const li = document.createElement('li');
            li.innerHTML = '<a href="teacher.html">Кабинет преподавателя</a>';
            footerCol.appendChild(li);
        }
        // На уроке — быстрые ссылки для отправки ученику
        if (!lessonsList.includes(currentPath)) return;
        const titleBox = document.querySelector('.lesson-title .container');
        if (!titleBox) return;
        const base = location.href.split('#')[0].split('?')[0];
        const bar = document.createElement('div');
        bar.className = 'teacher-bar';
        bar.innerHTML = '<span>Для преподавателя:</span>';
        [['Ссылка на урок', base], ['Ссылка на тест', base + '#quiz'], ['Ссылка на слайды', base + '#present']].forEach(([label, url]) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.textContent = label;
            b.onclick = () => {
                const done = () => showToast('Ссылка скопирована — отправьте её ученику', 'success');
                if (navigator.clipboard) navigator.clipboard.writeText(url).then(done).catch(() => prompt('Скопируйте ссылку:', url));
                else prompt('Скопируйте ссылку:', url);
            };
            bar.appendChild(b);
        });
        titleBox.appendChild(bar);
    }

    // --- Режим «Урок по созвону» ---
    // Урок открывается на весь экран слайдами крупным шрифтом:
    // преподаватель показывает экран на созвоне и листает разделы урока.
    function initPresentationMode() {
        if (!lessonsList.includes(currentPath)) return;
        const titleBox = document.querySelector('.lesson-title .container');
        if (!titleBox) return;

        // Подпись «Урок N из 16» над названием
        const kicker = document.createElement('span');
        kicker.className = 'lesson-kicker';
        kicker.textContent = `Урок ${lessonsList.indexOf(currentPath) + 1} из ${lessonsList.length}`;
        titleBox.insertBefore(kicker, titleBox.firstChild);

        // Ссылка вида lesson3.html#present сразу открывает урок слайдами — у всех
        if (location.hash === '#present') openPresentation();

        // Кнопку видит только преподаватель — ученикам режим слайдов не нужен
        if (!isTeacherBrowser()) return;
        const openBtn = document.createElement('button');
        openBtn.type = 'button';
        openBtn.className = 'btn-present';
        openBtn.textContent = 'Провести урок по созвону';
        openBtn.title = 'Урок слайдами крупным шрифтом — удобно показывать экран на созвоне';
        titleBox.appendChild(openBtn);
        openBtn.addEventListener('click', () => openPresentation());
    }

    function readStore(key, fallback) {
        try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch (e) { return fallback; }
    }
    function writeStore(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* хранилище недоступно — не страшно */ }
    }

    function buildPresentationSlides() {
        const slides = [];
        const newSlide = (extraClass) => {
            const el = document.createElement('div');
            el.className = 'present-slide' + (extraClass ? ' ' + extraClass : '');
            slides.push(el);
            return el;
        };
        const cleanClone = (node) => {
            const c = node.cloneNode(true);
            c.style.display = '';
            c.querySelectorAll('.btn-copy, #quiz-container, #btn-start-quiz, .lesson-locked-banner, .run-bar, .run-output, .try-bar, .try-output, .try-hint, .try-cases').forEach(x => x.remove());
            c.querySelectorAll('[contenteditable]').forEach(x => x.removeAttribute('contenteditable'));
            c.querySelectorAll('textarea').forEach(x => { x.readOnly = true; x.tabIndex = -1; });
            c.querySelectorAll('[id]').forEach(x => x.removeAttribute('id'));
            return c;
        };

        // Титульный слайд
        const h1 = document.querySelector('.lesson-title h1');
        const sub = document.querySelector('.lesson-title p');
        const first = newSlide('present-slide-title');
        const kicker = document.createElement('span');
        kicker.className = 'present-kicker';
        kicker.textContent = 'PythonBasic';
        first.appendChild(kicker);
        if (h1) first.appendChild(cleanClone(h1));
        if (sub) first.appendChild(cleanClone(sub));

        // Каждый раздел урока (начинается с <h2>) — отдельный слайд
        document.querySelectorAll('main section.lesson-goal, main section.lesson-content, main section.lesson-homework').forEach(section => {
            let current = null;
            Array.from(section.children).forEach(child => {
                if (child.matches('#quiz-container, #btn-start-quiz, .lesson-locked-banner')) return;
                if (child.tagName === 'H2' || !current) current = newSlide();
                current.appendChild(cleanClone(child));
            });
        });

        // Финальный слайд — переход к практике
        const last = newSlide('present-slide-title');
        last.innerHTML = `
            <span class="present-kicker">Урок разобран</span>
            <h2>Теперь — практика</h2>
            <p>Пройдите тест по уроку и решите задачи — так материал закрепится лучше всего.</p>
            <div class="present-final-actions">
                <button type="button" class="present-final-btn" data-present="quiz">Перейти к тесту</button>
                <a class="present-final-btn present-final-btn-ghost" href="tasks.html">Решать задачи</a>
            </div>`;
        return slides;
    }

    function openPresentation() {
        if (document.querySelector('.present')) return;
        const slides = buildPresentationSlides();
        const storeKey = 'present_slide_' + currentPath;
        // Продолжаем с того слайда, где остановились; если урок досмотрен до конца — начинаем сначала
        let index = parseInt(readStore(storeKey, '0'), 10) || 0;
        if (index >= slides.length - 1) index = 0;
        let scale = parseFloat(readStore('present_scale', '1')) || 1;
        const lastFocus = document.activeElement;

        const lessonTitle = (document.querySelector('.lesson-title h1') || {}).textContent || '';
        const root = document.createElement('div');
        root.className = 'present';
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-modal', 'true');
        root.setAttribute('aria-label', 'Урок по созвону');
        root.innerHTML = `
            <div class="present-top">
                <span class="present-lesson"></span>
                <div class="present-tools">
                    <button type="button" data-present="smaller" title="Уменьшить шрифт">A−</button>
                    <button type="button" data-present="bigger" title="Увеличить шрифт">A+</button>
                    <button type="button" data-present="fullscreen" title="Во весь экран (F)">Во весь экран</button>
                    <button type="button" data-present="close" title="Выйти (Esc)">Выйти</button>
                </div>
            </div>
            <div class="present-stage" tabindex="-1"></div>
            <div class="present-bottom">
                <button type="button" class="present-arrow" data-present="prev" aria-label="Предыдущий слайд">←</button>
                <div class="present-progress"><div class="present-progress-fill"></div></div>
                <span class="present-counter" aria-live="polite"></span>
                <button type="button" class="present-arrow" data-present="next" aria-label="Следующий слайд">→</button>
            </div>`;
        root.querySelector('.present-lesson').textContent = lessonTitle;
        const stage = root.querySelector('.present-stage');
        slides.forEach(sl => stage.appendChild(sl));
        document.body.appendChild(root);
        document.body.classList.add('present-open');

        const counter = root.querySelector('.present-counter');
        const fill = root.querySelector('.present-progress-fill');
        const prevBtn = root.querySelector('[data-present="prev"]');
        const nextBtn = root.querySelector('[data-present="next"]');

        const applyScale = () => root.style.setProperty('--present-scale', String(scale));
        const show = (i) => {
            index = Math.max(0, Math.min(slides.length - 1, i));
            slides.forEach((sl, n) => sl.classList.toggle('is-active', n === index));
            stage.scrollTop = 0;
            counter.textContent = `${index + 1} / ${slides.length}`;
            fill.style.width = ((index + 1) / slides.length * 100) + '%';
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === slides.length - 1;
            writeStore(storeKey, String(index));
        };

        const close = (goToQuiz) => {
            document.removeEventListener('keydown', onKey);
            if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
            root.remove();
            document.body.classList.remove('present-open');
            if (location.hash === '#present') history.replaceState(null, '', location.pathname + location.search);
            if (goToQuiz) {
                const target = document.getElementById('btn-start-quiz') || document.getElementById('quiz-container');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (lastFocus && lastFocus.focus) {
                lastFocus.focus();
            }
        };

        const toggleFullscreen = () => {
            if (!document.fullscreenEnabled) return;
            if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
            else root.requestFullscreen().catch(() => {});
        };

        root.addEventListener('click', (e) => {
            const act = e.target.closest('[data-present]');
            if (!act) return;
            const a = act.dataset.present;
            if (a === 'prev') show(index - 1);
            else if (a === 'next') show(index + 1);
            else if (a === 'close') close(false);
            else if (a === 'quiz') close(true);
            else if (a === 'fullscreen') toggleFullscreen();
            else if (a === 'bigger') { scale = Math.min(1.6, +(scale + 0.1).toFixed(2)); applyScale(); writeStore('present_scale', String(scale)); }
            else if (a === 'smaller') { scale = Math.max(0.7, +(scale - 0.1).toFixed(2)); applyScale(); writeStore('present_scale', String(scale)); }
        });

        const onKey = (e) => {
            if (e.target.closest && e.target.closest('input, textarea')) return;
            if (['ArrowRight', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey)) { e.preventDefault(); show(index + 1); }
            else if (['ArrowLeft', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey)) { e.preventDefault(); show(index - 1); }
            else if (e.key === 'Home') { e.preventDefault(); show(0); }
            else if (e.key === 'End') { e.preventDefault(); show(slides.length - 1); }
            else if (e.key === 'Escape' && !document.fullscreenElement) close(false);
            else if (e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') toggleFullscreen();
        };
        document.addEventListener('keydown', onKey);

        // Свайп влево/вправо на телефоне и планшете
        let touchX = null, touchY = null;
        stage.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; }, { passive: true });
        stage.addEventListener('touchend', (e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            const dy = e.changedTouches[0].clientY - touchY;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1));
            touchX = touchY = null;
        });

        applyScale();
        show(index);
        stage.focus();
    }

    // --- Живые уроки: запуск примеров, «Попробуйте сами», домашка ---
    // Python (Pyodide) загружается только при первом нажатии «Запустить» или «Проверить».
    let lessonRunnerPromise = null;

    function getLessonRunner() {
        if (!lessonRunnerPromise) {
            lessonRunnerPromise = new Promise((resolve, reject) => {
                const create = () => {
                    try {
                        const runner = new PyRunner({
                            timeoutMs: 10000,
                            onReady: () => resolve(runner),
                            onLoadError: (msg) => reject(new Error(msg || 'Python не загрузился'))
                        });
                    } catch (e) { reject(e); }
                };
                if (typeof PyRunner !== 'undefined') return create();
                const s = document.createElement('script');
                s.src = 'py-runner.js';
                s.onload = create;
                s.onerror = () => reject(new Error('Не удалось загрузить py-runner.js'));
                document.head.appendChild(s);
            });
            lessonRunnerPromise.catch(() => { lessonRunnerPromise = null; });
        }
        return lessonRunnerPromise;
    }

    // После остановки зависшего кода Python перезапускается — ждём готовности
    async function readyRunner() {
        const runner = await getLessonRunner();
        const started = Date.now();
        while (!runner.ready) {
            if (Date.now() - started > 60000) throw new Error('Python слишком долго перезапускается');
            await new Promise(r => setTimeout(r, 200));
        }
        return runner;
    }

    function consoleLine(box, text, kind) {
        const span = document.createElement('span');
        if (kind) span.className = 'line-' + kind;
        span.textContent = text;
        box.appendChild(span);
    }

    function friendlyLoadError(box) {
        box.textContent = '';
        consoleLine(box, 'Не удалось загрузить Python. Проверьте интернет и обновите страницу.\n', 'err');
    }

    // Tab ставит 4 пробела, Enter в редактируемом блоке — перенос строки без лишней разметки
    function editorKeys(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            document.execCommand('insertText', false, '    ');
        } else if (e.key === 'Enter' && e.target.isContentEditable && e.target.contentEditable !== 'plaintext-only') {
            e.preventDefault();
            document.execCommand('insertText', false, '\n');
        }
    }

    function initRunnableCode() {
        document.querySelectorAll('pre[data-run]').forEach(pre => {
            const code = pre.querySelector('code');
            if (!code || pre.closest('.run-block')) return;
            const original = code.textContent;

            code.contentEditable = 'plaintext-only';
            if (code.contentEditable !== 'plaintext-only') code.contentEditable = 'true';
            code.spellcheck = false;
            code.setAttribute('aria-label', 'Пример кода — его можно изменить и запустить');
            code.addEventListener('keydown', editorKeys);

            const block = document.createElement('div');
            block.className = 'run-block';
            pre.parentNode.insertBefore(block, pre);
            block.appendChild(pre);

            const bar = document.createElement('div');
            bar.className = 'run-bar';
            const runBtn = document.createElement('button');
            runBtn.type = 'button';
            runBtn.className = 'run-btn';
            runBtn.innerHTML = '<span class="ide-play" aria-hidden="true"></span> Запустить';
            const resetBtn = document.createElement('button');
            resetBtn.type = 'button';
            resetBtn.className = 'run-reset';
            resetBtn.textContent = 'Вернуть как было';
            resetBtn.hidden = true;
            const hint = document.createElement('span');
            hint.className = 'run-hint';
            hint.textContent = pre.dataset.stdin
                ? 'Ввод для input(): ' + pre.dataset.stdin.split('\n').join(', ')
                : 'Код можно изменить и запустить снова';
            bar.append(runBtn, resetBtn, hint);

            const out = document.createElement('div');
            out.className = 'run-output';
            out.setAttribute('aria-live', 'polite');
            out.hidden = true;
            block.append(bar, out);

            code.addEventListener('input', () => { resetBtn.hidden = code.textContent === original; });
            resetBtn.addEventListener('click', () => {
                code.textContent = original;
                if (window.hljs) { delete code.dataset.highlighted; window.hljs.highlightElement(code); }
                resetBtn.hidden = true;
            });

            runBtn.addEventListener('click', async () => {
                out.hidden = false;
                out.textContent = '';
                runBtn.disabled = true;
                consoleLine(out, lessonRunnerPromise ? 'Выполняем…\n' : 'Загружаем Python — первый запуск займёт несколько секунд…\n', 'muted');
                let runner;
                try { runner = await readyRunner(); } catch (e) { friendlyLoadError(out); runBtn.disabled = false; return; }
                out.textContent = '';
                let printed = false;
                const result = await runner.run({
                    code: code.textContent,
                    stdin: pre.dataset.stdin || '',
                    echoInput: true,
                    onOutput: (t) => { printed = true; consoleLine(out, t); }
                });
                if (result.timedOut) consoleLine(out, '\nКод работал дольше 10 секунд и был остановлен — похоже на бесконечный цикл.\n', 'warn');
                else if (result.error) consoleLine(out, (printed ? '\n' : '') + result.error + '\n', 'err');
                else if (!printed) consoleLine(out, 'Программа ничего не вывела на экран.\n', 'muted');
                runBtn.disabled = false;
            });
        });
    }

    function normalizeOutput(s) {
        // Сравниваем без учёта регистра, лишних пробелов, буквы «ё» и точки/восклицательного знака в конце
        return String(s).replace(/\r/g, '').split('\n').map(l => l.trim().replace(/\s+/g, ' ')).join('\n')
            .trim().toLowerCase().replace(/ё/g, 'е').replace(/[.!]+$/g, '');
    }

    function initTryIt() {
        let done = {};
        try { done = JSON.parse(localStorage.getItem('try_done')) || {}; } catch (e) { done = {}; }

        document.querySelectorAll('.try-it').forEach(box => {
            const id = box.dataset.id;
            const area = box.querySelector('.try-code');
            const casesEl = box.querySelector('.try-cases');
            if (!id || !area || !casesEl) return;
            let cases = [];
            try { cases = JSON.parse(casesEl.textContent); } catch (e) { return; }
            const start = area.value;
            try { const saved = localStorage.getItem('try_code_' + id); if (saved) area.value = saved; } catch (e) { /* нет */ }
            area.spellcheck = false;
            area.rows = Math.max(4, area.value.split('\n').length + 1);
            area.addEventListener('keydown', editorKeys);
            area.addEventListener('input', () => { try { localStorage.setItem('try_code_' + id, area.value); } catch (e) { /* нет */ } });

            const badge = box.querySelector('.try-badge');
            const markDone = () => { box.classList.add('is-done'); if (badge) badge.textContent = 'Решено ✓'; };
            if (done[id]) markDone();

            const bar = document.createElement('div');
            bar.className = 'try-bar';
            const check = document.createElement('button');
            check.type = 'button';
            check.className = 'hub-btn hub-btn-primary';
            check.textContent = 'Проверить';
            const reset = document.createElement('button');
            reset.type = 'button';
            reset.className = 'hub-btn hub-btn-ghost';
            reset.textContent = 'Начать заново';
            bar.append(check, reset);
            const out = document.createElement('div');
            out.className = 'run-output try-output';
            out.setAttribute('aria-live', 'polite');
            out.hidden = true;
            area.after(bar, out);

            reset.addEventListener('click', () => {
                if (area.value !== start && !confirm('Вернуть исходный код? Ваш код будет удалён.')) return;
                area.value = start;
                try { localStorage.removeItem('try_code_' + id); } catch (e) { /* нет */ }
            });

            check.addEventListener('click', async () => {
                out.hidden = false;
                out.textContent = '';
                check.disabled = true;
                consoleLine(out, lessonRunnerPromise ? 'Проверяем…\n' : 'Загружаем Python — первый раз это займёт несколько секунд…\n', 'muted');
                let runner;
                try { runner = await readyRunner(); } catch (e) { friendlyLoadError(out); check.disabled = false; return; }
                out.textContent = '';
                let passed = 0;
                // Многострочные данные показываем столбиком, как в настоящей программе
                const block = (label, text) => {
                    consoleLine(out, label + '\n', 'muted');
                    consoleLine(out, (String(text).replace(/\s+$/, '') || '(ничего)') + '\n');
                };
                for (const [i, c] of cases.entries()) {
                    let printed = '';
                    const r = await runner.run({ code: area.value, stdin: c.in || '', quietInput: true, onOutput: (t) => { printed += t; } });
                    const num = cases.length > 1 ? ` ${i + 1}` : '';
                    if (r.timedOut) { consoleLine(out, '⏱ Код работал слишком долго и был остановлен — похоже на бесконечный цикл.\n', 'warn'); break; }
                    if (r.error) {
                        consoleLine(out, `❌ Проверка${num}: ошибка в коде\n`, 'err');
                        if (c.in) block('Ввод:', c.in);
                        consoleLine(out, r.error + '\n', 'err');
                        break;
                    }
                    if (normalizeOutput(printed) === normalizeOutput(c.out)) {
                        passed++;
                        const shortIn = c.in ? 'ввод ' + c.in.split('\n').join(', ') + ' → ' : '';
                        const shortOut = printed.trim().includes('\n') ? 'верно' : printed.trim();
                        consoleLine(out, `✅ Проверка${num}: ${shortIn}${shortOut}\n`, 'ok');
                    } else {
                        consoleLine(out, `❌ Проверка${num} не пройдена\n`, 'err');
                        if (c.in) block('Ввод:', c.in);
                        block('Ожидалось:', c.out);
                        block('Ваша программа вывела:', printed);
                        break;
                    }
                }
                if (passed === cases.length) {
                    consoleLine(out, '\nОтлично, всё верно!\n', 'ok');
                    done[id] = true;
                    try { localStorage.setItem('try_done', JSON.stringify(done)); } catch (e) { /* нет */ }
                    markDone();
                }
                check.disabled = false;
            });
        });
    }

    // Домашнее задание: отмечаем решённые задачи галочкой
    function initHomeworkStatus() {
        const items = document.querySelectorAll('.hw-tasks li[data-task]');
        if (!items.length) return;
        let solved = {};
        try { solved = JSON.parse(localStorage.getItem('solved_tasks')) || {}; } catch (e) { solved = {}; }
        let count = 0;
        items.forEach(li => {
            const isDone = !!solved[li.dataset.task];
            if (isDone) count++;
            li.classList.toggle('is-done', isDone);
            const st = li.querySelector('.hw-status');
            if (st) st.textContent = isDone ? 'Решена' : 'Не решена';
        });
        const counter = document.querySelector('.hw-counter');
        if (counter) counter.textContent = `Решено ${count} из ${items.length}`;
    }

    function initLessonInteractive() {
        if (!document.querySelector('pre[data-run], .try-it, .hw-tasks')) return;
        initRunnableCode();
        initTryIt();
        initHomeworkStatus();
        window.addEventListener('focus', initHomeworkStatus);
    }

    // Run All
    initReadingProgressBar();
    initMobileMenu();
    initLockSystem();
    initCopyButtons();
    initSyntaxHighlighting();
    initLessonInteractive();
    initQuiz();
    initPresentationMode();
    initDirectQuizLink();
    initTeacherExtras();
    initTheme();
    initResetButton();
    initProgressExportImport();
    initCourseCompletionBanner();
    initScrollAnimations();
    document.querySelectorAll('.footer-year, #footer-year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});
