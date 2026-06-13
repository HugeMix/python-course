document.addEventListener('DOMContentLoaded', () => {

    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html',
        'lesson16.html'
    ];

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
        } else if (isLesson && href === 'courses.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- 1. Quiz Data (15 Lessons) ---
    // Для каждого вопроса с вариантами ответов: correct - оригинальный индекс правильного ответа в массиве options
    const quizData = {
        'lesson1.html': [
            { question: "Какая команда используется для вывода текста на экран?", options: ["input()", "print()", "scan()", "output()"], correct: 1, explanation: "print() — встроенная функция вывода. Именно она 'печатает' результат в консоль." },
            { question: "Какое расширение имеют файлы Python?", options: [".txt", ".exe", ".py", ".pyt"], correct: 2, explanation: ".py — обязательное расширение для Python-файлов. Без него интерпретатор не запустит код." },
            { question: "В каком году был выпущен первый релиз Python?", options: ["1991", "2000", "1985", "1995"], correct: 0, explanation: "Гвидо ван Россум начал разработку Python в 1989 году, первый релиз вышел в 1991-м." },
            { question: "Какую роль выполняет функция print()?", options: ["Считывает ввод с клавиатуры", "Выводит переданные данные в консоль", "Удаляет пробелы", "Объявляет функцию"], correct: 1, explanation: "print() от английского 'print' (печатать). Единственная задача — вывести данные на экран." },
            { question: "Является ли Python регистрозависимым языком (print и Print - разные вещи)?", options: ["Да, регистр важен (print и Print - разные)", "Нет, регистр не имеет значения", "Только для переменных", "Только в Windows"], correct: 0, explanation: "Python чувствителен к регистру: print(), Print() и PRINT() — совершенно разные идентификаторы." },
            { question: "Кто создал язык программирования Python?", options: ["Линус Торвальдс", "Гвидо ван Россум", "Деннис Ритчи", "Джеймс Гослинг"], correct: 1, explanation: "Guido van Rossum — создатель Python. Начал работу в декабре 1989 года в Нидерландах." },
            { question: "Напишите код, который выводит слово: Привет", type: "code", correct: ["print('Привет')", "print(\"Привет\")", "print('привет')", "print(\"привет\")"] },
            { question: "Напишите код, который выводит число 42", type: "code", correct: ["print(42)", "print('42')", "print(\"42\")"] }
        ],
        'lesson2.html': [
            { question: "Как правильно объявить переменную x = 5 в Python?", options: ["var x = 5", "int x = 5", "x = 5", "$x = 5"], correct: 2, explanation: "В Python переменные создаются простым присваиванием без ключевых слов var, int или let." },
            { question: "Какой тип данных у значения 3.14?", options: ["int", "float", "str", "bool"], correct: 1, explanation: "3.14 содержит дробную часть — это тип float. Целые числа (1, 2, 3) — тип int." },
            { question: "Что выведет print(type(\"10\"))?", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1, explanation: "'10' взято в кавычки, значит это строка (str), а не число (int). Кавычки определяют тип." },
            { question: "Какое имя переменной НЕДОПУСТИМО в Python?", options: ["my_var", "var1", "1var", "_var_"], correct: 2, explanation: "Имена переменных не могут начинаться с цифры — SyntaxError. Начинай с буквы или _." },
            { question: "Что будет результатом выражения: str(5) + '5'?", options: ["10", "Ошибка", "'55'", "55"], correct: 2, explanation: "str(5) → '5', затем '5' + '5' = '55'. Оператор + для строк делает конкатенацию, не сложение." },
            { question: "Какая функция позволяет узнать тип переменной?", options: ["kind()", "type()", "typeof()", "datatype()"], correct: 1, explanation: "type() — встроенная функция для определения типа данных. Пример: type(3.14) → <class 'float'>." },
            { question: "Какая функция считывает ввод пользователя и всегда возвращает строку?", options: ["read()", "scan()", "input()", "get()"], correct: 2, explanation: "input() всегда возвращает строку str! Даже если пользователь введёт 42, это будет '42'." },
            { question: "Создайте переменную age и присвойте ей значение 20", type: "code", correct: ["age=20", "age = 20"] },
            { question: "Конвертируйте строку '10' в целое число и запишите в переменную x", type: "code", correct: ["x=int('10')", "x=int(\"10\")", "x = int('10')", "x = int(\"10\")"] }
        ],
        'lesson3.html': [
            { question: "Чему равен результат операции 10 // 3?", options: ["3.333", "3", "4", "3.0"], correct: 1, explanation: "// — целочисленное деление, результат округляется вниз. 10 // 3 = 3 (остаток 1 отбрасывается)." },
            { question: "Какой оператор используется для возведения в степень в Python?", options: ["^", "*", "**", "^^"], correct: 2, explanation: "В Python степень — это **. Знак ^ — это побитовое XOR, совсем другая операция!" },
            { question: "Как проверить равенство двух переменных x и y?", options: ["x = y", "x == y", "x === y", "equals(x, y)"], correct: 1, explanation: "= это присваивание, == — сравнение. Путаница между ними — одна из самых частых ошибок новичков." },
            { question: "Что выведет код: print(True and False)?", options: ["True", "False", "Ошибка", "None"], correct: 1, explanation: "and требует чтобы ОБА условия были True. True and False = False — одно ложное, всё ложное." },
            { question: "Какой логический оператор меняет значение на противоположное?", options: ["not", "!=!", "reverse", "invert"], correct: 0, explanation: "not инвертирует: not True = False, not False = True. Это логическое отрицание." },
            { question: "Что означает оператор % в Python?", options: ["Процент от числа", "Остаток от деления", "Умножение", "Степень"], correct: 1, explanation: "% возвращает остаток: 10 % 3 = 1 (потому что 10 = 3×3 + 1). Часто используется для проверки чётности." },
            { question: "Что делает оператор x += 5?", options: ["Сравнивает x с 5", "Прибавляет 5 к x (аналог x = x + 5)", "Создаёт переменную x=5", "Вычитает 5 из x"], correct: 1, explanation: "x += 5 — сокращённая запись x = x + 5. Аналогично: -= вычитает, *= умножает, /= делит." },
            { question: "Когда оператор 'or' возвращает True?", options: ["Только если оба условия истинны", "Если хотя бы одно условие истинно", "Только если оба условия ложны", "Никогда"], correct: 1, explanation: "or возвращает True если ХОТЯ БЫ одно условие True. Оба ложных = False." },
            { question: "Напишите выражение для вычисления остатка от деления 10 на 3", type: "code", correct: ["10%3", "10 % 3", "print(10%3)", "print(10 % 3)"] }
        ],
        'lesson4.html': [
            { question: "Как правильно записать условие 'если x больше 5'?", options: ["if x > 5 then:", "if (x > 5)", "if x > 5:", "if x > 5 ;"], correct: 2, explanation: "В Python условие пишется без скобок и обязательно с двоеточием в конце строки." },
            { question: "Какое ключевое слово выполняется, когда ВСЕ предыдущие условия if/elif оказались ложны?", options: ["elif", "else", "finally", "default"], correct: 1, explanation: "else выполняется только если все предшествующие if/elif оказались ложными. Это 'иначе'." },
            { question: "Что такое elif в Python?", options: ["Другое слово для else", "Сокращение от 'else if' - дополнительная проверка условия", "Ошибочное написание слова else", "Оператор выхода из условия"], correct: 1, explanation: "elif = 'else if'. Позволяет проверить дополнительное условие, не вкладывая if в else." },
            { question: "Что ОБЯЗАТЕЛЬНО ставить в конце строки с if, elif или else?", options: ["Точку с запятой (;)", "Двоеточие (:)", "Скобки ()", "Запятую (,)"], correct: 1, explanation: "Двоеточие обязательно! Оно сигнализирует Python о начале блока кода (отступ после двоеточия)." },
            { question: "Какой отступ рекомендует стандарт PEP 8 внутри блока if?", options: ["2 пробела", "Отступ не важен", "1 табуляция или 2 пробела", "4 пробела (рекомендация PEP 8)"], correct: 3, explanation: "PEP 8 — официальный стандарт Python — рекомендует ровно 4 пробела для отступов." },
            { question: "Что считается 'ложным' значением в условии Python?", options: ["Число 1", "Пустая строка (\"\"\", 0, [], None)", "Слово 'False'", "Любая переменная"], correct: 1, explanation: "В Python 'ложные' значения: 0, 0.0, None, False, '', [], {}, set(). Всё остальное — истинное." },
            { question: "В каком порядке Python проверяет ветки if-elif-else?", options: ["Случайном", "Снизу вверх", "Сверху вниз, останавливаясь на первой подошедшей", "Все проверяет одновременно"], correct: 2, explanation: "Python проверяет условия последовательно и останавливается на первом подходящем. Порядок важен!" },
            { question: "Напишите заголовок условия: если a меньше b", type: "code", correct: ["if a<b:", "if a < b:"] },
            { question: "Напишите ключевое слово Python для 'иначе если' (дополнительное условие после if):", type: "code", correct: ["elif"] }
        ],
        'lesson5.html': [
            { question: "Какой цикл выполняется, пока его условие истинно (True)?", options: ["while", "for", "do-while", "loop"], correct: 0, explanation: "while работает пока условие = True. for перебирает элементы. Это разные инструменты." },
            { question: "Что генерирует функция range(5)?", options: ["Числа от 1 до 5", "Числа от 0 до 4", "Числа от 0 до 5", "Пять единиц"], correct: 1, explanation: "range(5) генерирует 0, 1, 2, 3, 4. Отсчёт всегда с нуля, число 5 не включается." },
            { question: "Как досрочно ПОЛНОСТЬЮ выйти из цикла?", options: ["stop", "exit", "break", "return"], correct: 2, explanation: "break немедленно прерывает цикл. Программа продолжается после тела цикла." },
            { question: "Как пропустить текущую итерацию и перейти к следующей?", options: ["skip", "pass", "continue", "next"], correct: 2, explanation: "continue пропускает остаток текущей итерации и переходит к следующей." },
            { question: "Что произойдёт, если условие цикла while НИКОГДА не станет ложным?", options: ["Программа выдаст ошибку сразу", "Цикл выполнится ровно 100 раз", "Бесконечный цикл - программа зависнет", "Цикл автоматически остановится"], correct: 2, explanation: "while True без break — бесконечный цикл. Программа зависнет. Всегда предусматривай выход." },
            { question: "Какие числа выведет диапазон range(1, 6)?", options: ["0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4"], correct: 1, explanation: "range(1, 6) начинается с 1, конец (6) не включается. Формула: range(start, stop) → [start, stop)." },
            { question: "Напишите команду для досрочного прерывания (выхода из) цикла", type: "code", correct: ["break"] },
            { question: "Напишите заголовок цикла for по диапазону из 3 элементов (i от 0 до 2):", type: "code", correct: ["for i in range(3):", "for i in range(0,3):", "for i in range(0, 3):"] }
        ],
        'lesson6.html': [
            { question: "Как правильно создать список (list) в Python?", options: ["x = (1, 2)", "x = {1, 2}", "x = [1, 2]", "x = <1, 2>"], correct: 2, explanation: "Список создаётся квадратными скобками []. Скобки () — кортеж, {} — словарь/множество." },
            { question: "С какого индекса начинается нумерация элементов в Python-списке?", options: ["1", "0", "-1", "Любого"], correct: 1, explanation: "Индексация в Python всегда с нуля. list[0] — первый, list[1] — второй элемент." },
            { question: "Какой метод добавляет новый элемент В КОНЕЦ списка?", options: [".add()", ".insert()", ".append()", ".push()"], correct: 2, explanation: ".append() добавляет элемент в КОНЕЦ списка. .insert(i, x) добавляет на конкретную позицию." },
            { question: "Какая встроенная функция возвращает количество элементов в списке?", options: ["list.count()", "size(list)", "list.length", "len()"], correct: 3, explanation: "len() — встроенная функция Python. Работает для строк, списков, кортежей, словарей." },
            { question: "Чем кортеж (tuple) отличается от списка (list)?", options: ["Ничем, это одно и то же", "Кортеж нельзя изменить после создания", "Кортеж хранит только числа", "У кортежа нет индексов"], correct: 1, explanation: "Кортеж (tuple) — неизменяемая последовательность. После создания нельзя добавить или удалить элементы." },
            { question: "Что означает fruits[-1] в Python?", options: ["Ошибку, отрицательных индексов нет", "Последний элемент списка", "Предпоследний элемент", "Первый элемент"], correct: 1, explanation: "Отрицательные индексы считают с конца: [-1] — последний, [-2] — предпоследний и т.д." },
            { question: "Какой метод СОРТИРУЕТ список по возрастанию?", options: [".order()", ".arrange()", ".sort()", ".sorted()"], correct: 2, explanation: ".sort() сортирует список на месте (изменяет сам список). sorted() возвращает новый." },
            { question: "Создайте пустой список с именем numbers", type: "code", correct: ["numbers=[]", "numbers = []", "numbers=list()", "numbers = list()"] },
            { question: "Напишите метод списка, который удаляет элемент по его ЗНАЧЕНИЮ:", type: "code", correct: ["remove", "remove()", ".remove()"] }
        ],
        'lesson7.html': [
            { question: "Какое ключевое слово Python используется для объявления функции?", options: ["function", "func", "def", "create"], correct: 2, explanation: "Функции объявляются ключевым словом def (от 'define' — определить). Без def Python не знает, что это функция." },
            { question: "Как правильно ВЫЗВАТЬ функцию с именем my_func?", options: ["call my_func()", "my_func", "my_func()", "execute my_func"], correct: 2, explanation: "Для вызова функции пишем имя со скобками: my_func(). Без скобок — это просто ссылка на объект функции." },
            { question: "Что вернёт функция, в которой нет оператора return?", options: ["0", "False", "None", "Ошибка"], correct: 2, explanation: "Функция без return возвращает None — специальное значение 'ничего'. None ≠ 0 ≠ False." },
            { question: "Что такое параметр по умолчанию?", options: ["Параметр, который нельзя изменить", "Параметр со значением, используемым если аргумент не передан при вызове", "Обязательный первый параметр", "Такого нет в Python"], correct: 1, explanation: "Параметр по умолчанию: def f(x=10). Если x не передан при вызове, используется 10." },
            { question: "Какой принцип программирования означает: 'не повторяй себя' (Don't Repeat Yourself)?", options: ["OOP", "DRY", "MVC", "SOLID"], correct: 1, explanation: "DRY = Don't Repeat Yourself. Выноси повторяющийся код в функции — так код чище и легче менять." },
            { question: "Функция может принимать сколько аргументов?", options: ["Только один", "Только два", "Не более пяти", "Любое количество"], correct: 3, explanation: "Функция принимает любое число аргументов. Можно использовать *args для произвольного количества." },
            { question: "Напишите оператор для возврата значения переменной x из функции", type: "code", correct: ["return x", "return(x)"] },
            { question: "Напишите объявление функции greet без аргументов", type: "code", correct: ["def greet():", "def greet() :"] }
        ],
        'lesson8.html': [
            { question: "Что такое словарь (dict) в Python?", options: ["Список чисел", "Коллекция пар ключ-значение, например: {'a': 1}", "Список строк", "Кортеж из двух элементов"], correct: 1, explanation: "Словарь (dict) хранит пары 'ключ: значение'. Доступ по ключу, не по порядковому индексу." },
            { question: "Главное отличие множества (set) от списка:", options: ["Оно упорядочено", "Элементы могут повторяться", "Все элементы уникальны, порядок не гарантирован", "Доступ только по индексу"], correct: 2, explanation: "Множество (set) хранит только уникальные значения. Дубликаты автоматически удаляются." },
            { question: "Как создать ПУСТОЕ множество (set)? Внимание: {} создаёт словарь!", options: ["{}", "set()", "[]", "dict()"], correct: 1, explanation: "{} создаёт пустой СЛОВАРЬ, а не множество! Для пустого множества используй set()." },
            { question: "Какой метод возвращает все КЛЮЧИ словаря d?", options: ["d.keys()", "d.get()", "d.values()", "d.items()"], correct: 0, explanation: ".keys() — ключи, .values() — значения, .items() — пары (ключ, значение) для перебора." },
            { question: "Что вернёт метод get(), если ключа нет в словаре?", options: ["Ошибку KeyError", "None (или заданное значение по умолчанию)", "Пустую строку", "Ноль"], correct: 1, explanation: ".get(ключ) безопасен: возвращает None (или указанное значение) если ключа нет, без ошибки KeyError." },
            { question: "Каким оператором удалить ключ из словаря?", options: ["remove", "del", "pop", "erase"], correct: 1, explanation: "del d[ключ] удаляет пару ключ-значение из словаря. Оператор del, не метод." },
            { question: "Напишите обращение к значению ключа 'name' в словаре data", type: "code", correct: ["data['name']", "data[\"name\"]"] },
            { question: "Напишите команду удаления ключа 'age' из словаря d оператором del", type: "code", correct: ["del d['age']", "del d[\"age\"]", "del(d['age'])", "del(d[\"age\"])"] }
        ],
        'lesson9.html': [
            { question: "Как получить длину (количество символов) строки s?", options: ["s.length()", "len(s)", "s.size()", "count(s)"], correct: 1, explanation: "len() — встроенная функция Python. Вызывается как len(s), а не s.len(). Работает для всех последовательностей." },
            { question: "Какой метод строки преобразует все буквы в ВЕРХНИЙ регистр?", options: [".upper()", ".to_upper()", ".capitalize()", ".UPPER()"], correct: 0, explanation: ".upper() возвращает НОВУЮ строку с заглавными буквами. Исходная строка не меняется (строки неизменяемы)." },
            { question: "Какой метод строки преобразует все буквы в НИЖНИЙ регистр?", options: [".down()", ".small()", ".lower()", ".min()"], correct: 2, explanation: ".lower() приводит к нижнему регистру. Удобно для сравнения без учёта регистра: s.lower() == 'python'." },
            { question: "Какой метод разбивает строку на список подстрок по разделителю?", options: [".divide()", ".split()", ".cut()", ".break()"], correct: 1, explanation: ".split(',') разбивает строку по запятой в список. Без аргумента разбивает по пробелу." },
            { question: "Какой метод заменяет одну подстроку на другую в строке?", options: [".swap()", ".change()", ".replace()", ".switch()"], correct: 2, explanation: ".replace(старое, новое) заменяет все вхождения. Возвращает новую строку, оригинал не меняется." },
            { question: "Что делает метод s.strip()?", options: ["Очищает всю строку полностью", "Удаляет пробелы и спецсимволы по краям строки", "Переводит в нижний регистр", "Удаляет все цифры"], correct: 1, explanation: ".strip() убирает пробелы и переносы строк с обеих сторон. .lstrip() — слева, .rstrip() — справа." },
            { question: "Как называется современный способ вставки переменных в строку (буква перед кавычками)?", options: ["d-строки", "f-строки", "s-строки", "r-строки"], correct: 1, explanation: "f-строки: f'Привет, {name}!' — самый удобный способ вставки переменных. Буква f перед кавычками обязательна." },
            { question: "len() - это функция или метод строки?", options: ["Метод строки, вызывается как s.len()", "Встроенная функция Python, вызывается как len(s)", "И то и другое", "Зависит от версии Python"], correct: 1, explanation: "len() — глобальная функция. Метод строки вызывается через точку: s.upper(). len() вызывается иначе: len(s)." },
            { question: "Напишите вызов функции для получения длины строки t", type: "code", correct: ["len(t)", "print(len(t))"] }
        ],
        'lesson10.html': [
            { question: "Какая встроенная функция Python открывает файл?", options: ["file.open()", "read()", "open()", "start()"], correct: 2, explanation: "open(путь, режим) — встроенная функция Python для работы с файлами." },
            { question: "Какой режим открытия файла ПЕРЕЗАПИСЫВАЕТ его с нуля?", options: ["'r'", "'a'", "'w'", "'x'"], correct: 2, explanation: "Режим 'w' (write) — перезаписывает файл с нуля. Осторожно: старые данные удаляются безвозвратно!" },
            { question: "Зачем используют конструкцию 'with open()' вместо обычного open()?", options: ["Она быстрее работает", "Файл закрывается автоматически, даже если возникла ошибка", "Позволяет читать бинарные файлы", "Открывает несколько файлов"], correct: 1, explanation: "with open() автоматически вызывает f.close() при выходе из блока — даже если произошла ошибка." },
            { question: "Какой метод читает ВЕСЬ файл целиком в одну строку?", options: [".read()", ".get()", ".text()", ".lines()"], correct: 0, explanation: ".read() читает весь файл в одну строку. .readline() — одну строку, .readlines() — список всех строк." },
            { question: "Какую кодировку рекомендуется указывать при работе с файлами с русским текстом?", options: ["ascii", "utf-8", "windows-1251", "latin-1"], correct: 1, explanation: "UTF-8 — универсальная кодировка, поддерживает все языки. Для русского текста особенно важно указывать encoding='utf-8'." },
            { question: "Какой режим открытия файла добавляет данные В КОНЕЦ, не удаляя существующие?", options: ["'w'", "'r'", "'a'", "'x'"], correct: 2, explanation: "Режим 'a' (append) добавляет данные в конец файла. Существующие данные не удаляются." },
            { question: "Какой метод читает все строки файла и возвращает их в виде СПИСКА?", options: [".readall()", ".readlines()", ".getlines()", ".lines()"], correct: 1, explanation: ".readlines() возвращает список строк файла. Каждая строка включает символ переноса \\n в конце." },
            { question: "Напишите режим открытия файла для ДОЗАПИСИ в конец (без удаления данных)", type: "code", correct: ["'a'", "\"a\"", "a"] },
            { question: "Напишите вызов метода для закрытия файла f", type: "code", correct: ["f.close()", "f.close"] }
        ],
        'lesson11.html': [
            { question: "Зачем нужен блок try-except?", options: ["Для создания циклов", "Для перехвата ошибок и предотвращения 'краша' программы", "Для ускорения кода", "Для работы с файлами"], correct: 1, explanation: "try-except перехватывает исключения и не даёт программе 'упасть'. Это обязательный паттерн в реальном коде." },
            { question: "В каком блоке пишется код, обрабатывающий пойманную ошибку?", options: ["try", "except", "handle", "finally"], correct: 1, explanation: "Код в блоке except выполняется только при ошибке в блоке try. При успехе except пропускается." },
            { question: "Когда выполняется блок finally?", options: ["Только при ошибке", "Только при успехе", "Всегда - и при ошибке, и без неё", "Никогда автоматически"], correct: 2, explanation: "finally выполняется ВСЕГДА: и при успехе, и при ошибке. Используется для очистки ресурсов." },
            { question: "Какая ошибка возникает при делении числа на 0 в Python?", options: ["ValueError", "TypeError", "ZeroDivisionError", "SyntaxError"], correct: 2, explanation: "Python поднимает ZeroDivisionError при делении на ноль. Имена исключений всегда с большой буквы." },
            { question: "Как называется базовый класс всех ошибок, который перехватывает ЛЮБОЕ исключение?", options: ["Error", "BaseError", "Exception", "AnyError"], correct: 2, explanation: "Exception — базовый класс большинства ошибок. except Exception поймает почти любую ошибку." },
            { question: "Что произойдёт с программой при ошибке, если НЕТ блока try-except?", options: ["Python выдаст предупреждение и продолжит", "Программа аварийно завершится (упадёт)", "Ничего - ошибка проигнорируется", "Запустится блок finally"], correct: 1, explanation: "Без try-except необработанное исключение останавливает программу и выводит трейсбэк в консоль." },
            { question: "Напишите ключевое слово для принудительного вызова исключения", type: "code", correct: ["raise"] },
            { question: "Напишите имя базового класса для перехвата ЛЮБОЙ ошибки: except _______:", type: "code", correct: ["Exception"] }
        ],
        'lesson12.html': [
            { question: "Для чего служит ключевое слово import?", options: ["Экспортирует функции", "Подключает встроенные и сторонние модули/библиотеки", "Компилирует код", "Сжимает файл"], correct: 1, explanation: "import подключает модули (файлы с кодом). Без import модуль недоступен." },
            { question: "Как импортировать ТОЛЬКО константу pi из модуля math?", options: ["import math.pi", "from math import pi", "get pi from math", "using math.pi"], correct: 1, explanation: "from X import Y позволяет использовать Y напрямую без префикса. Иначе нужно писать math.pi." },
            { question: "Что такое pip?", options: ["Игровая платформа", "Стандартный менеджер пакетов Python для установки библиотек", "Тип ошибки", "Модуль для изображений"], correct: 1, explanation: "pip (Pip Installs Packages) — стандартный менеджер пакетов Python. Команда: pip install название." },
            { question: "Какой встроенный модуль Python используется для генерации случайных чисел?", options: ["math", "random", "shuffle", "chance"], correct: 1, explanation: "Модуль random — для псевдослучайных чисел. random.randint(1, 10) — случайное число от 1 до 10." },
            { question: "Как дать псевдоним модулю при импорте (например, math сократить до m)?", options: ["import math = m", "import math as m", "alias math m", "math aka m"], correct: 1, explanation: "as создаёт псевдоним. Классика: import numpy as np, import pandas as pd." },
            { question: "Модуль - это:", options: ["Специальный тип данных Python", "Файл с готовым кодом Python, который можно подключить", "Встроенная функция", "Тип исключения"], correct: 1, explanation: "Любой .py файл — это модуль. Можно импортировать свои файлы так же, как встроенные модули." },
            { question: "Что вернёт math.sqrt(25) из модуля math?", options: ["5", "5.0", "625", "Ошибку"], correct: 1, explanation: "math.sqrt() всегда возвращает float. sqrt(25) = 5.0, не 5. Для int используй int(math.sqrt(25))." },
            { question: "Напишите команду терминала для установки библиотеки requests", type: "code", correct: ["pip install requests"] }
        ],
        'lesson13.html': [
            { question: "Что в ООП является 'чертежом' (шаблоном) для создания объектов?", options: ["Функция", "Класс", "Переменная", "Пакет"], correct: 1, explanation: "Класс (class) — это шаблон для создания объектов. Объект (instance) — конкретный экземпляр класса." },
            { question: "Как называется специальный метод-конструктор, вызываемый при создании объекта?", options: ["__start__", "__main__", "__init__", "__create__"], correct: 2, explanation: "__init__ вызывается автоматически при создании объекта. Это конструктор — место для инициализации атрибутов." },
            { question: "Какой параметр ОБЯЗАН быть первым в каждом методе класса?", options: ["Имя класса", "self", "this", "cls"], correct: 1, explanation: "self — ссылка на сам объект. Через self.атрибут хранятся данные каждого конкретного экземпляра." },
            { question: "Инкапсуляция - это:", options: ["Скрытие внутренней реализации и данных объекта от внешнего кода", "Наследование атрибутов", "Перегрузка методов", "Копирование объекта"], correct: 0, explanation: "Инкапсуляция скрывает внутренние данные объекта. Пользователь работает через публичные методы." },
            { question: "Что хранится в атрибутах объекта, заданных в __init__ через self?", options: ["Функции модуля", "Данные (свойства) конкретного объекта", "Общие методы класса", "Ошибки выполнения"], correct: 1, explanation: "self.имя = значение создаёт атрибут объекта. У каждого экземпляра класса свои значения атрибутов." },
            { question: "Как в Python обозначают 'приватный' (скрытый) атрибут класса?", options: ["Знаком @ перед именем", "Двойным подчёркиванием __ перед именем", "Словом private перед именем", "Заглавными буквами"], correct: 1, explanation: "__ (двойной underscore) перед именем делает атрибут 'приватным' — защищает от случайного обращения снаружи." },
            { question: "Создайте экземпляр класса Car и сохраните в переменную obj", type: "code", correct: ["obj=Car()", "obj = Car()"] }
        ],
        'lesson14.html': [
            { question: "Какая функция возвращает текущую дату и время?", options: ["time.now()", "calendar.today()", "datetime.now()", "datetime.today()"], correct: 2, explanation: "datetime.now() возвращает текущие дату и время. datetime.today() делает то же самое." },
            { question: "Какой объект хранит разницу между двумя датами?", options: ["difference", "timedelta", "timeshift", "dategap"], correct: 1, explanation: "timedelta — объект разности времён. Позволяет складывать и вычитать периоды: дата + timedelta(days=7)." },
            { question: "Какой код символа strftime() соответствует 4-значному году?", options: ["%Y", "%y", "%G", "%YYYY"], correct: 0, explanation: "%Y — год из 4 цифр (2024). %y — только 2 последние цифры (24). Разница важна при форматировании." },
            { question: "Из какого модуля импортируют класс datetime?", options: ["calendar", "time", "datetime", "clock"], correct: 2, explanation: "Модуль называется datetime И класс в нём называется datetime. from datetime import datetime." },
            { question: "Что можно делать с помощью timedelta помимо вычисления разницы между датами?", options: ["Только смотреть разницу в днях", "Прибавлять или вычитать дни из даты", "Форматировать дату в строку", "Конвертировать строку в дату"], correct: 1, explanation: "timedelta(days=7) можно прибавлять к дате: deadline = today + timedelta(days=7)." },
            { question: "Что означает %d в шаблоне strftime()?", options: ["Год (4 цифры)", "Месяц (01-12)", "День (01-31)", "Часы (00-23)"], correct: 2, explanation: "%d — день (01-31), %m — месяц (01-12), %Y — год (2024), %H:%M — часы:минуты." },
            { question: "Напишите название метода, конвертирующего дату в строку по шаблону формата", type: "code", correct: ["strftime", "strftime()", ".strftime()"] },
            { question: "Напишите строку импорта класса datetime из модуля datetime", type: "code", correct: ["from datetime import datetime"] }
        ],
        'lesson16.html': [
            { question: "Какая библиотека Python используется для выполнения HTTP-запросов?", options: ["urllib2", "requests", "httplib", "fetch"], correct: 1, explanation: "requests — самая популярная библиотека для HTTP. Не входит в стандартную библиотеку, нужно: pip install requests." },
            { question: "Какой метод библиотеки requests используется для GET-запроса?", options: ["requests.fetch()", "requests.load()", "requests.get()", "requests.read()"], correct: 2, explanation: "GET-запрос запрашивает данные с сервера. Это самый распространённый тип HTTP-запроса." },
            { question: "Что означает код ответа HTTP 200?", options: ["Ошибка сервера", "Страница не найдена", "Успешный запрос", "Нет прав доступа"], correct: 2, explanation: "HTTP 200 OK — успешный ответ. 404 — не найдено, 403 — нет прав, 500 — ошибка сервера." },
            { question: "Как получить JSON-данные из объекта ответа requests?", options: ["response.text()", "response.data", "json.loads(response)", "response.json()"], correct: 3, explanation: ".json() парсит JSON из ответа в Python-словарь. Это удобнее, чем json.loads(response.text)." },
            { question: "Что такое API?", options: ["Язык программирования", "База данных", "Интерфейс взаимодействия программ между собой", "Протокол интернета"], correct: 2, explanation: "API (Application Programming Interface) — 'розетка' для соединения программ. Через API берём данные погоды, курсы валют и т.д." },
            { question: "Зачем указывать параметр timeout в requests.get()?", options: ["Чтобы ускорить запрос", "Чтобы установить приоритет запроса", "Чтобы программа не зависла при недоступном сервере", "Это обязательный параметр"], correct: 2, explanation: "timeout=5 означает: ждать не более 5 секунд. Без timeout программа может зависнуть навсегда." },
            { question: "Какой метод вызывает исключение если код ответа >= 400?", options: ["response.check()", "response.raise_for_status()", "response.assert_ok()", "response.validate()"], correct: 1, explanation: ".raise_for_status() автоматически поднимает исключение при ошибочных кодах (4xx, 5xx). Удобно для проверки." },
            { question: "Напишите команду для установки библиотеки requests", type: "code", correct: ["pip install requests"] },
            { question: "Напишите GET-запрос к переменной url используя библиотеку requests", type: "code", correct: ["requests.get(url)", "response = requests.get(url)", "r = requests.get(url)"] }
        ],
        'lesson15.html': [
            { question: "Какая библиотека встроена в Python 'из коробки' для создания настольных окон (GUI)?", options: ["Pandas", "Tkinter", "Requests", "PyQt"], correct: 1, explanation: "tkinter входит в стандартную библиотеку Python — устанавливать не нужно. import tkinter as tk." },
            { question: "Как называется популярный всемирный стандарт оформления и чистоты кода в Python?", options: ["PEP8", "PY-STYLE", "CLEAN-CODE 2.0", "ISO-PY"], correct: 0, explanation: "PEP 8 (Python Enhancement Proposal #8) — официальный стандарт оформления кода Python." },
            { question: "Для хранения своего кода в облаке и создания портфолио программисты используют:", options: ["Facebook", "GitHub", "Google Drive", "VK"], correct: 1, explanation: "GitHub — крупнейший хостинг Git-репозиториев. Здесь хранят код и ведут портфолио разработчика." },
            { question: "Что такое Git?", options: ["Язык программирования", "Система контроля версий кода", "Менеджер пакетов Python", "Редактор кода"], correct: 1, explanation: "Git отслеживает изменения в коде, позволяет откатиться к прошлой версии и работать в команде." },
            { question: "Какой модуль используется в итоговом проекте для сохранения задач в файл?", options: ["csv", "pickle", "json", "xml"], correct: 2, explanation: "Модуль json — стандартная библиотека Python. json.dump() сохраняет, json.load() читает." },
            { question: "Какую конструкцию использует итоговый проект для бесконечного главного меню с выходом через break?", options: ["for i in range(999):", "while True: ... break", "repeat until False", "loop(): ... stop"], correct: 1, explanation: "while True создаёт бесконечный цикл меню. break выходит из него при выборе нужного пункта." },
            { question: "Что делает функция enumerate() при переборе списка?", options: ["Возвращает только индексы", "Возвращает пары (индекс, элемент) одновременно", "Сортирует список", "Возвращает только элементы"], correct: 1, explanation: "enumerate(['a','b','c']) → (0,'a'), (1,'b'), (2,'c'). Удобно когда нужен и индекс и значение." },
            { question: "Напишите сокращённое название системы контроля версий", type: "code", correct: ["Git", "git"] }
        ]
    };

    // --- 2. Locking System & Navigation ---
    function initLockSystem() {
        const progress = safeGetProgress();

        // A. Handle 'python-basic.html' (Course List)
        if (currentPath === 'python-basic.html') {
            const cards = document.querySelectorAll('.lesson-card');
            let passedCount = 0;

            cards.forEach((card, index) => {
                const lessonFileName = `lesson${index + 1}.html`;
                const isPassed = progress[lessonFileName];

                // Add Checkmark
                if (isPassed) {
                    passedCount++;
                    card.classList.add('completed');
                    // Prevent double checkmarks
                    if (!card.querySelector('.check-mark')) {
                        card.style.position = 'relative'; // Ensure relative for absolute checkmark
                        card.innerHTML += `<div class="check-mark">✅ Пройдено</div>`;
                    }
                }

                // Lock Logic: Lesson 1 is always open. Others need prev one passed.
                if (index > 0) {
                    const prevLesson = `lesson${index}.html`; // e.g. lesson1.html for lesson2
                    if (!progress[prevLesson]) {
                        // Locked!
                        card.classList.add('locked');
                        const link = card.querySelector('a.btn');
                        if (link) {
                            link.href = '#';
                            link.textContent = '🔒 Закрыто';
                            link.style.background = '#6c757d';
                            link.style.color = 'white';
                            link.onclick = (e) => {
                                e.preventDefault();
                                showToast('❌ Доступ закрыт! Сначала пройдите предыдущий урок.', 'error');
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

        // B. Handle Individual Lesson Pages (Redirect if locked)
        const lessonIndex = lessonsList.indexOf(currentPath);
        if (lessonIndex > 0) { // If not lesson1
            const prevLesson = lessonsList[lessonIndex - 1];

            if (!progress[prevLesson]) {
                // If previous not done, REDIRECT
                document.body.innerHTML = `
                    <div style="text-align:center; padding-top: 100px; color: #dc3545;">
                        <h1>🚫 Доступ закрыт!</h1>
                        <p>Сначала пройдите предыдущий урок.</p>
                        <p>Перенаправление...</p>
                    </div>
                `;
                setTimeout(() => {
                    window.location.href = 'python-basic.html';
                }, 2000);
                return; // Stop execution
            }
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
                prevBtn.textContent = '⬅ Назад';
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

    // --- 3. Quiz Logic ---
    function initQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer || !quizData[currentPath]) return;

        // Ensure clean state
        quizContainer.innerHTML = '';
        quizContainer.style.display = 'none';

        // Add "Start Quiz" Button BEFORE container
        // Check if button already exists to avoid duplicates
        let startBtn = document.getElementById('btn-start-quiz');
        if (!startBtn) {
            startBtn = document.createElement('button');
            startBtn.id = 'btn-start-quiz';
            startBtn.textContent = '🧠 Теория изучена - начать тест!';
            startBtn.className = 'btn-complete';
            startBtn.onclick = () => {
                startBtn.style.display = 'none'; // Hide self
                quizContainer.style.display = 'block'; // Show quiz
                toggleLessonVisibility(false); // Hide lesson text!
                renderQuizContent(quizContainer);
                quizContainer.scrollIntoView({ behavior: 'smooth' });
            };
            quizContainer.parentNode.insertBefore(startBtn, quizContainer);
        }

        startBtn.style.display = 'block';

        // Check if already passed
        const savedResults = safeGetProgress();
        if (savedResults[currentPath]) {
            startBtn.style.display = 'none';
            quizContainer.style.display = 'block';
            renderQuizContent(quizContainer, true); // True = render passed state
            showNextLessonButton(); // Show navigation since passed
        }
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

    function renderQuizContent(container, alreadyPassed = false) {
        try {
            if (alreadyPassed) {
                renderQuizCompleted(container);
                return;
            }

            const questions = quizData[currentPath];
            if (!questions || questions.length === 0) {
                container.innerHTML = `<h3 style="color:var(--error-color)">Вопросов пока нет</h3>`;
                return;
            }
            container.innerHTML = ''; // Clear

            const title = document.createElement('h2');
            title.id = 'quiz-title';
            title.textContent = '🚀 Проверочный тест';
            container.setAttribute('role', 'region');
            container.setAttribute('aria-labelledby', 'quiz-title');
            container.appendChild(title);

            questions.forEach((q, index) => {
                const qId = `quiz-q-${index}`;
                const qBlock = document.createElement('div');
                qBlock.className = 'quiz-question';
                qBlock.setAttribute('role', 'group');
                qBlock.setAttribute('aria-labelledby', qId);

                const qText = document.createElement('p');
                qText.id = qId;
                qText.textContent = `${index + 1}. ${q.question}`;
                qBlock.appendChild(qText);

                if (q.type === 'code') {
                    const inputArea = document.createElement('textarea');
                    inputArea.className = 'code-input';
                    inputArea.style.width = '100%';
                    inputArea.style.border = '1px solid #ccc';
                    inputArea.style.borderRadius = '5px';
                    inputArea.style.padding = '10px';
                    inputArea.style.margin = '10px 0';
                    inputArea.style.resize = 'vertical';
                    inputArea.rows = 2;
                    inputArea.placeholder = 'Напишите ваш ответ...';
                    inputArea.setAttribute('aria-label', 'Поле для ввода кода');
                    inputArea.setAttribute('aria-describedby', qId);

                    const checkBtn = document.createElement('button');
                    checkBtn.textContent = '✔️ Проверить';
                    checkBtn.className = 'btn-quiz-opt';
                    checkBtn.setAttribute('aria-label', 'Проверить ответ');

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';
                    feedback.setAttribute('aria-live', 'polite');

                    checkBtn.onclick = () => {
                        // Нормализация: убираем лишние пробелы, приводим кавычки к одному виду
                        const norm = (s) => s.trim().replace(/\s+/g, ' ').replace(/"/g, "'");
                        const normStrict = (s) => norm(s).replace(/\s/g, '');

                        const userCode = norm(inputArea.value);
                        const userStrict = normStrict(inputArea.value);

                        const isCorrect = q.correct.some(ans => {
                            const normAns = norm(ans);
                            const normAnsStrict = normStrict(ans);
                            // 1. Точное совпадение после нормализации пробелов и кавычек
                            if (userCode === normAns) return true;
                            // 2. Без пробелов (любое форматирование)
                            if (userStrict === normAnsStrict) return true;
                            // 3. Contains-match только для длинных ответов (исключает ложные срабатывания)
                            if (normAns.length > 5 && userCode.includes(normAns)) return true;
                            // 4. Без учёта регистра
                            if (userCode.toLowerCase() === normAns.toLowerCase()) return true;
                            if (userStrict.toLowerCase() === normAnsStrict.toLowerCase()) return true;
                            return false;
                        });

                        inputArea.disabled = true;
                        checkBtn.disabled = true;
                        checkBtn.style.opacity = '0.7';

                        if (isCorrect) {
                            feedback.textContent = '✅ Верно!';
                            feedback.style.color = '#10b981';
                            qBlock.classList.add('answered-correct');
                        } else {
                            const exampleAns = q.correct[0];
                            feedback.textContent = '❌ Ошибка. Правильный ответ: ';
                            const codeEl = document.createElement('code');
                            codeEl.style.cssText = 'background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;';
                            codeEl.textContent = exampleAns;
                            feedback.appendChild(codeEl);
                            feedback.style.color = '#ef4444';
                            qBlock.classList.add('answered-wrong');
                        }

                        // Show explanation
                        if (q.explanation && !qBlock.querySelector('.quiz-explanation')) {
                            const expEl = document.createElement('p');
                            expEl.className = 'quiz-explanation';
                            expEl.textContent = '💡 ' + q.explanation;
                            qBlock.appendChild(expEl);
                        }

                        checkQuizCompletion(questions.length);
                    };

                    qBlock.appendChild(inputArea);
                    qBlock.appendChild(checkBtn);
                    qBlock.appendChild(feedback);

                } else {
                    const optionsDiv = document.createElement('div');
                    optionsDiv.setAttribute('role', 'group');
                    optionsDiv.setAttribute('aria-label', 'Варианты ответа');

                    const indexedOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
                    const shuffled = shuffleArray(indexedOptions);

                    shuffled.forEach((optObj) => {
                        const btn = document.createElement('button');
                        btn.textContent = optObj.text;
                        btn.className = 'btn-quiz-opt';
                        btn.dataset.origIndex = optObj.originalIndex;
                        btn.setAttribute('aria-label', optObj.text);
                        btn.onclick = () => checkAnswer(btn, optObj.originalIndex, q.correct, questions.length, q.explanation);
                        optionsDiv.appendChild(btn);
                    });
                    qBlock.appendChild(optionsDiv);

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';
                    feedback.setAttribute('aria-live', 'polite');
                    qBlock.appendChild(feedback);
                }

                container.appendChild(qBlock);
            });
        } catch (e) {
            const errWrap = document.createElement('div');
            errWrap.style.cssText = 'padding:20px;background:#fee2e2;color:#b91c1c;border-radius:12px;border:2px solid #ef4444;';
            const errTitle = document.createElement('h3');
            errTitle.style.marginTop = '0';
            errTitle.textContent = 'ОШИБКА ОТРИСОВКИ ТЕСТА!';
            const errDesc = document.createElement('p');
            errDesc.innerHTML = '<strong>Мы не смогли загрузить тест из-за сбоя:</strong>';
            const errDetails = document.createElement('div');
            errDetails.style.cssText = 'background:#fff;padding:10px;border-radius:6px;font-family:monospace;font-size:0.9em;overflow-x:auto;';
            errDetails.textContent = `${e.name}: ${e.message}\n\n${e.stack}`;
            const reloadBtn = document.createElement('button');
            reloadBtn.className = 'btn-retake';
            reloadBtn.textContent = 'Перезагрузить страницу';
            reloadBtn.onclick = () => window.location.reload();
            errWrap.appendChild(errTitle);
            errWrap.appendChild(errDesc);
            errWrap.appendChild(errDetails);
            errWrap.appendChild(reloadBtn);
            container.innerHTML = '';
            container.appendChild(errWrap);
        }
    }

    function checkAnswer(btn, selected, correct, total, explanation) {
        const optionsDiv = btn.parentElement;
        const qBlock = optionsDiv.parentElement;
        const feedback = qBlock.querySelector('.quiz-feedback');

        // Блокируем все кнопки в этом вопросе
        optionsDiv.querySelectorAll('.btn-quiz-opt').forEach(b => b.disabled = true);

        if (selected === correct) {
            btn.classList.add('correct');
            feedback.textContent = '✅ Верно!';
            feedback.style.color = '#28a745';
            qBlock.classList.add('answered-correct');
        } else {
            btn.classList.add('incorrect');
            // Подсвечиваем правильный вариант зелёным
            optionsDiv.querySelectorAll('.btn-quiz-opt').forEach(b => {
                if (parseInt(b.dataset.origIndex) === correct) {
                    b.classList.add('correct');
                }
            });
            feedback.textContent = '❌ Ошибка';
            feedback.style.color = '#dc3545';
            qBlock.classList.add('answered-wrong');
        }

        // Show explanation
        if (explanation && !qBlock.querySelector('.quiz-explanation')) {
            const expEl = document.createElement('p');
            expEl.className = 'quiz-explanation';
            expEl.textContent = '💡 ' + explanation;
            feedback.after(expEl);
        }

        checkQuizCompletion(total);
    }

    function checkQuizCompletion(total) {
        const container = document.getElementById('quiz-container');
        const correctCount = container.querySelectorAll('.answered-correct').length;
        const wrongCount = container.querySelectorAll('.answered-wrong').length;

        if (correctCount + wrongCount === total) {
            // Quiz Finished
            if (correctCount / total >= 0.7) {
                // SUCCESS (70% threshold)
                const progress = safeGetProgress();
                progress[currentPath] = true;
                localStorage.setItem('quiz_results', JSON.stringify(progress));

                setTimeout(() => {
                    renderQuizCompleted(container);
                    showNextLessonButton();
                }, 800);
            } else {
                // FAIL
                setTimeout(() => {
                    renderQuizFailed(container, correctCount, total);
                }, 800);
            }
        }
    }

    function renderQuizFailed(container, score, total) {
        const percent = Math.round((score / total) * 100);
        const wrong = total - score;
        let motivText = '';
        if (percent === 0) {
            motivText = 'Не расстраивайся — повтори теорию и попробуй снова! Для прохождения нужно 70%.';
        } else if (percent < 50) {
            motivText = 'Хорошее начало! Повтори пропущенные темы. Для прохождения нужно набрать 70%.';
        } else {
            motivText = 'Совсем чуть-чуть не хватило! Нужно 70% — ещё одна попытка и урок твой!';
        }

        container.innerHTML = `
            <div class="quiz-failed-wrapper">
                <div class="quiz-failed-icon">💥</div>
                <h3 class="quiz-failed-title">Тест не пройден</h3>
                <p class="quiz-failed-subtitle">${motivText}</p>
                <div class="quiz-failed-score-box">
                    <div class="quiz-score-stat quiz-score-correct">
                        <span class="score-num">${score}</span>
                        <span class="score-label">верных</span>
                    </div>
                    <div class="quiz-score-divider">из ${total}</div>
                    <div class="quiz-score-stat quiz-score-wrong">
                        <span class="score-num">${wrong}</span>
                        <span class="score-label">ошибок</span>
                    </div>
                </div>
                <div class="quiz-failed-bar-wrap">
                    <div class="quiz-failed-bar-track">
                        <div class="quiz-failed-bar-fill" style="width:0%" data-target="${percent}"></div>
                    </div>
                    <span class="quiz-failed-percent">${percent}%</span>
                </div>
                <div class="quiz-failed-actions">
                    <button class="quiz-action-btn quiz-btn-retry" id="btn-restart-quiz">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
                        Пересдать тест
                    </button>
                    <button class="quiz-action-btn quiz-btn-review" id="btn-read-lesson">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        Повторить урок
                    </button>
                </div>
            </div>
        `;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const bar = container.querySelector('.quiz-failed-bar-fill');
                if (bar) bar.style.width = bar.dataset.target + '%';
            });
        });

        document.getElementById('btn-restart-quiz').onclick = () => {
            renderQuizContent(container);
            container.scrollIntoView({ behavior: 'smooth' });
        };
        document.getElementById('btn-read-lesson').onclick = () => {
            toggleLessonVisibility(true);
            container.style.display = 'none';
            container.innerHTML = '';
            document.getElementById('btn-start-quiz').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    function renderQuizCompleted(container) {
        toggleLessonVisibility(true); // Always show lesson again after passing

        container.innerHTML = `
            <div class="quiz-passed-container">
                <h3>🎉 Урок пройден!</h3>
                <p>Доступ к следующему уроку открыт.</p>
                <button class="btn-retake" id="btn-retake-finished">Пройти заново для закрепления</button>
            </div>
        `;
        const retakeBtn = document.getElementById('btn-retake-finished');
        if (retakeBtn) {
            retakeBtn.onclick = () => {
                toggleLessonVisibility(false);
                renderQuizContent(container, false); // Start quiz normally
                container.scrollIntoView({ behavior: 'smooth' });
            };
        }
    }

    function showNextLessonButton() {
        const lessonIndex = lessonsList.indexOf(currentPath);
        const navContainer = document.querySelector('.lesson-navigation');
        if (!navContainer) return;

        // Avoid dupes
        if (navContainer.querySelector('.next') || navContainer.querySelector('.finish')) return;

        if (lessonIndex >= 0 && lessonIndex < lessonsList.length - 1) {
            const nextLink = lessonsList[lessonIndex + 1];
            const nextBtn = document.createElement('a');
            nextBtn.href = nextLink;
            nextBtn.className = 'btn-nav next';
            nextBtn.textContent = 'Следующий урок ➡';
            navContainer.appendChild(nextBtn);

            // Auto scroll to nav
            navContainer.scrollIntoView({ behavior: 'smooth' });

        } else if (lessonIndex === lessonsList.length - 1) {
            const finishDiv = document.createElement('div');
            finishDiv.className = 'btn-nav finish';
            finishDiv.textContent = '🏆 Курс завершён!';
            navContainer.appendChild(finishDiv);
        }
    }

    // --- 4. Utilities ---
    function initCopyButtons() {
        document.querySelectorAll('pre').forEach(pre => {
            if (pre.closest('.CodeMirror') || pre.id === 'terminal-output') return;
            if (pre.querySelector('.btn-copy')) return;

            pre.style.position = 'relative';
            const codeEl = pre.querySelector('code');
            const btn = document.createElement('button');
            btn.className = 'btn-copy';
            btn.textContent = 'Копировать';
            btn.setAttribute('aria-label', 'Копировать код');

            btn.addEventListener('click', () => {
                const text = codeEl ? codeEl.textContent : pre.textContent;
                const copy = () => {
                    btn.textContent = '✓ Скопировано';
                    setTimeout(() => { btn.textContent = 'Копировать'; }, 2000);
                };
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(copy).catch(() => {
                        document.execCommand('copy');
                        copy();
                    });
                } else {
                    const ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.cssText = 'position:fixed;opacity:0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    ta.remove();
                    copy();
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
            if (confirm('⚠️ Вы уверены, что хотите сбросить весь прогресс обучения? Все пройденные уроки будут снова заблокированы.')) {
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
                URL.revokeObjectURL(url);
                showToast('✅ Прогресс сохранён в файл!', 'success');
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
                        if (typeof data !== 'object') throw new Error('invalid');
                        localStorage.setItem('quiz_results', JSON.stringify(data));
                        showToast('✅ Прогресс загружен!', 'success');
                        setTimeout(() => location.reload(), 1000);
                    } catch {
                        showToast('❌ Неверный формат файла', 'error');
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
        const animatedElements = document.querySelectorAll('.card, .lesson-card, .lesson-content, .lesson-goal, .lesson-homework, #quiz-container, .tasks-sidebar, .task-description, .editor-container');

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

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
        document.head.appendChild(link);

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

    // Run All
    initReadingProgressBar();
    initMobileMenu();
    initLockSystem();
    initCopyButtons();
    initSyntaxHighlighting();
    initQuiz();
    initTheme();
    initResetButton();
    initProgressExportImport();
    initCourseCompletionBanner();
    initScrollAnimations();
    document.querySelectorAll('footer p').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + new Date().getFullYear());
    });
});
