document.addEventListener('DOMContentLoaded', () => {

    const lessonsList = [
        'lesson1.html', 'lesson2.html', 'lesson3.html', 'lesson4.html', 'lesson5.html',
        'lesson6.html', 'lesson7.html', 'lesson8.html', 'lesson9.html', 'lesson10.html',
        'lesson11.html', 'lesson12.html', 'lesson13.html', 'lesson14.html', 'lesson15.html'
    ];

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
            { question: "Какая команда используется для вывода текста на экран?", options: ["input()", "print()", "scan()", "output()"], correct: 1 },
            { question: "Какое расширение имеют файлы Python?", options: [".txt", ".exe", ".py", ".pyt"], correct: 2 },
            { question: "В каком году был выпущен первый релиз Python?", options: ["1991", "2000", "1985", "1995"], correct: 0 },
            { question: "Какую роль выполняет функция print()?", options: ["Считывает ввод с клавиатуры", "Выводит переданные данные в консоль", "Удаляет пробелы", "Объявляет функцию"], correct: 1 },
            { question: "Является ли Python регистрозависимым языком (print и Print - разные вещи)?", options: ["Да, регистр важен (print и Print - разные)", "Нет, регистр не имеет значения", "Только для переменных", "Только в Windows"], correct: 0 },
            { question: "Кто создал язык программирования Python?", options: ["Линус Торвальдс", "Гвидо ван Россум", "Деннис Ритчи", "Джеймс Гослинг"], correct: 1 },
            { question: "Напишите код, который выводит слово: Привет", type: "code", correct: ["print('Привет')", "print(\"Привет\")", "print('привет')", "print(\"привет\")"] },
            { question: "Напишите код, который выводит число 42", type: "code", correct: ["print(42)", "print('42')", "print(\"42\")"] }
        ],
        'lesson2.html': [
            { question: "Как правильно объявить переменную x = 5 в Python?", options: ["var x = 5", "int x = 5", "x = 5", "$x = 5"], correct: 2 },
            { question: "Какой тип данных у значения 3.14?", options: ["int", "float", "str", "bool"], correct: 1 },
            { question: "Что выведет print(type(\"10\"))?", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1 },
            { question: "Какое имя переменной НЕДОПУСТИМО в Python?", options: ["my_var", "var1", "1var", "_var_"], correct: 2 },
            { question: "Что будет результатом выражения: str(5) + '5'?", options: ["10", "Ошибка", "'55'", "55"], correct: 2 },
            { question: "Какая функция позволяет узнать тип переменной?", options: ["kind()", "type()", "typeof()", "datatype()"], correct: 1 },
            { question: "Какая функция считывает ввод пользователя и всегда возвращает строку?", options: ["read()", "scan()", "input()", "get()"], correct: 2 },
            { question: "Создайте переменную age и присвойте ей значение 20", type: "code", correct: ["age=20", "age = 20"] },
            { question: "Конвертируйте строку '10' в целое число и запишите в переменную x", type: "code", correct: ["x=int('10')", "x=int(\"10\")", "x = int('10')", "x = int(\"10\")", "x=int(10)", "x = int(10)"] }
        ],
        'lesson3.html': [
            { question: "Чему равен результат операции 10 // 3?", options: ["3.333", "3", "4", "3.0"], correct: 1 },
            { question: "Какой оператор используется для возведения в степень в Python?", options: ["^", "*", "**", "^^"], correct: 2 },
            { question: "Как проверить равенство двух переменных x и y?", options: ["x = y", "x == y", "x === y", "equals(x, y)"], correct: 1 },
            { question: "Что выведет код: print(True and False)?", options: ["True", "False", "Ошибка", "None"], correct: 1 },
            { question: "Какой логический оператор меняет значение на противоположное?", options: ["not", "!=!", "reverse", "invert"], correct: 0 },
            { question: "Что означает оператор % в Python?", options: ["Процент от числа", "Остаток от деления", "Умножение", "Степень"], correct: 1 },
            { question: "Что делает оператор x += 5?", options: ["Сравнивает x с 5", "Прибавляет 5 к x (аналог x = x + 5)", "Создаёт переменную x=5", "Вычитает 5 из x"], correct: 1 },
            { question: "Когда оператор 'or' возвращает True?", options: ["Только если оба условия истинны", "Если хотя бы одно условие истинно", "Только если оба условия ложны", "Никогда"], correct: 1 },
            { question: "Напишите выражение для вычисления остатка от деления 10 на 3", type: "code", correct: ["10%3", "10 % 3", "print(10%3)", "print(10 % 3)"] }
        ],
        'lesson4.html': [
            { question: "Как правильно записать условие 'если x больше 5'?", options: ["if x > 5 then:", "if (x > 5)", "if x > 5:", "if x > 5 ;"], correct: 2 },
            { question: "Какое ключевое слово выполняется, когда ВСЕ предыдущие условия if/elif оказались ложны?", options: ["elif", "else", "finally", "default"], correct: 1 },
            { question: "Что такое elif в Python?", options: ["Другое слово для else", "Сокращение от 'else if' - дополнительная проверка условия", "Ошибочное написание слова else", "Оператор выхода из условия"], correct: 1 },
            { question: "Что ОБЯЗАТЕЛЬНО ставить в конце строки с if, elif или else?", options: ["Точку с запятой (;)", "Двоеточие (:)", "Скобки ()", "Запятую (,)"], correct: 1 },
            { question: "Какого отступа требует Python внутри блока if?", options: ["2 пробела", "Отступ не важен", "1 табуляция или 2 пробела", "4 пробела"], correct: 3 },
            { question: "Что считается 'ложным' значением в условии Python?", options: ["Число 1", "Пустая строка (\"\"\", 0, [], None)", "Слово 'False'", "Любая переменная"], correct: 1 },
            { question: "В каком порядке Python проверяет ветки if-elif-else?", options: ["Случайном", "Снизу вверх", "Сверху вниз, останавливаясь на первой подошедшей", "Все проверяет одновременно"], correct: 2 },
            { question: "Напишите заголовок условия: если a меньше b", type: "code", correct: ["if a<b:", "if a < b:"] },
            { question: "Напишите ключевое слово Python для 'иначе если' (дополнительное условие после if):", type: "code", correct: ["elif"] }
        ],
        'lesson5.html': [
            { question: "Какой цикл выполняется, пока его условие истинно (True)?", options: ["while", "for", "do-while", "loop"], correct: 0 },
            { question: "Что генерирует функция range(5)?", options: ["Числа от 1 до 5", "Числа от 0 до 4", "Числа от 0 до 5", "Пять единиц"], correct: 1 },
            { question: "Как досрочно ПОЛНОСТЬЮ выйти из цикла?", options: ["stop", "exit", "break", "return"], correct: 2 },
            { question: "Как пропустить текущую итерацию и перейти к следующей?", options: ["skip", "pass", "continue", "next"], correct: 2 },
            { question: "Что произойдёт, если условие цикла while НИКОГДА не станет ложным?", options: ["Программа выдаст ошибку сразу", "Цикл выполнится ровно 100 раз", "Бесконечный цикл - программа зависнет", "Цикл автоматически остановится"], correct: 2 },
            { question: "Какие числа выведет диапазон range(1, 6)?", options: ["0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4"], correct: 1 },
            { question: "Напишите команду для досрочного прерывания (выхода из) цикла", type: "code", correct: ["break"] },
            { question: "Напишите заголовок цикла for по диапазону из 3 элементов (i от 0 до 2):", type: "code", correct: ["for i in range(3):", "for i in range(0,3):", "for i in range(0, 3):"] }
        ],
        'lesson6.html': [
            { question: "Как правильно создать список (list) в Python?", options: ["x = (1, 2)", "x = {1, 2}", "x = [1, 2]", "x = <1, 2>"], correct: 2 },
            { question: "С какого индекса начинается нумерация элементов в Python-списке?", options: ["1", "0", "-1", "Любого"], correct: 1 },
            { question: "Какой метод добавляет новый элемент В КОНЕЦ списка?", options: [".add()", ".insert()", ".append()", ".push()"], correct: 2 },
            { question: "Какая встроенная функция возвращает количество элементов в списке?", options: ["list.count()", "size(list)", "list.length", "len()"], correct: 3 },
            { question: "Чем кортеж (tuple) отличается от списка (list)?", options: ["Ничем, это одно и то же", "Кортеж нельзя изменить после создания", "Кортеж хранит только числа", "У кортежа нет индексов"], correct: 1 },
            { question: "Что означает fruits[-1] в Python?", options: ["Ошибку, отрицательных индексов нет", "Последний элемент списка", "Предпоследний элемент", "Первый элемент"], correct: 1 },
            { question: "Какой метод СОРТИРУЕТ список по возрастанию?", options: [".order()", ".arrange()", ".sort()", ".sorted()"], correct: 2 },
            { question: "Создайте пустой список с именем numbers", type: "code", correct: ["numbers=[]", "numbers = []", "numbers=list()", "numbers = list()"] },
            { question: "Напишите метод списка, который удаляет элемент по его ЗНАЧЕНИЮ:", type: "code", correct: ["remove", "remove()", ".remove()"] }
        ],
        'lesson7.html': [
            { question: "Какое ключевое слово Python используется для объявления функции?", options: ["function", "func", "def", "create"], correct: 2 },
            { question: "Как правильно ВЫЗВАТЬ функцию с именем my_func?", options: ["call my_func()", "my_func", "my_func()", "execute my_func"], correct: 2 },
            { question: "Что вернёт функция, в которой нет оператора return?", options: ["0", "False", "None", "Ошибка"], correct: 2 },
            { question: "Что такое параметр по умолчанию?", options: ["Параметр, который нельзя изменить", "Параметр со значением, используемым если аргумент не передан при вызове", "Обязательный первый параметр", "Такого нет в Python"], correct: 1 },
            { question: "Какой принцип программирования означает: 'не повторяй себя' (Don't Repeat Yourself)?", options: ["OOP", "DRY", "MVC", "SOLID"], correct: 1 },
            { question: "Функция может принимать сколько аргументов?", options: ["Только один", "Только два", "Не более пяти", "Любое количество"], correct: 3 },
            { question: "Напишите оператор для возврата значения переменной x из функции", type: "code", correct: ["return x", "return(x)"] },
            { question: "Напишите объявление функции greet без аргументов", type: "code", correct: ["def greet():", "def greet() :"] }
        ],
        'lesson8.html': [
            { question: "Что такое словарь (dict) в Python?", options: ["Список чисел", "Коллекция пар ключ-значение, например: {'a': 1}", "Список строк", "Кортеж из двух элементов"], correct: 1 },
            { question: "Главное отличие множества (set) от списка:", options: ["Оно упорядочено", "Элементы могут повторяться", "Все элементы уникальны, порядок не гарантирован", "Доступ только по индексу"], correct: 2 },
            { question: "Как создать ПУСТОЕ множество (set)? Внимание: {} создаёт словарь!", options: ["{}", "set()", "[]", "dict()"], correct: 1 },
            { question: "Какой метод возвращает все КЛЮЧИ словаря d?", options: ["d.keys()", "d.get()", "d.values()", "d.items()"], correct: 0 },
            { question: "Что вернёт метод get(), если ключа нет в словаре?", options: ["Ошибку KeyError", "None (или заданное значение по умолчанию)", "Пустую строку", "Ноль"], correct: 1 },
            { question: "Каким оператором удалить ключ из словаря?", options: ["remove", "del", "pop", "erase"], correct: 1 },
            { question: "Напишите обращение к значению ключа 'name' в словаре data", type: "code", correct: ["data['name']", "data[\"name\"]"] },
            { question: "Напишите команду удаления ключа 'age' из словаря d оператором del", type: "code", correct: ["del d['age']", "del d[\"age\"]", "del(d['age'])", "del(d[\"age\"])"] }
        ],
        'lesson9.html': [
            { question: "Как получить длину (количество символов) строки s?", options: ["s.length()", "len(s)", "s.size()", "count(s)"], correct: 1 },
            { question: "Какой метод строки преобразует все буквы в ВЕРХНИЙ регистр?", options: [".upper()", ".to_upper()", ".capitalize()", ".UPPER()"], correct: 0 },
            { question: "Какой метод строки преобразует все буквы в НИЖНИЙ регистр?", options: [".down()", ".small()", ".lower()", ".min()"], correct: 2 },
            { question: "Какой метод разбивает строку на список подстрок по разделителю?", options: [".divide()", ".split()", ".cut()", ".break()"], correct: 1 },
            { question: "Какой метод заменяет одну подстроку на другую в строке?", options: [".swap()", ".change()", ".replace()", ".switch()"], correct: 2 },
            { question: "Что делает метод s.strip()?", options: ["Очищает всю строку полностью", "Удаляет пробелы и спецсимволы по краям строки", "Переводит в нижний регистр", "Удаляет все цифры"], correct: 1 },
            { question: "Как называется современный способ вставки переменных в строку (буква перед кавычками)?", options: ["d-строки", "f-строки", "s-строки", "r-строки"], correct: 1 },
            { question: "len() - это функция или метод строки?", options: ["Метод строки, вызывается как s.len()", "Встроенная функция Python, вызывается как len(s)", "И то и другое", "Зависит от версии Python"], correct: 1 },
            { question: "Напишите вызов функции для получения длины строки t", type: "code", correct: ["len(t)", "print(len(t))"] }
        ],
        'lesson10.html': [
            { question: "Какая встроенная функция Python открывает файл?", options: ["file.open()", "read()", "open()", "start()"], correct: 2 },
            { question: "Какой режим открытия файла ПЕРЕЗАПИСЫВАЕТ его с нуля?", options: ["'r'", "'a'", "'w'", "'x'"], correct: 2 },
            { question: "Зачем используют конструкцию 'with open()' вместо обычного open()?", options: ["Она быстрее работает", "Файл закрывается автоматически, даже если возникла ошибка", "Позволяет читать бинарные файлы", "Открывает несколько файлов"], correct: 1 },
            { question: "Какой метод читает ВЕСЬ файл целиком в одну строку?", options: [".read()", ".get()", ".text()", ".lines()"], correct: 0 },
            { question: "Какую кодировку рекомендуется указывать при работе с файлами с русским текстом?", options: ["ascii", "utf-8", "windows-1251", "latin-1"], correct: 1 },
            { question: "Какой режим открытия файла добавляет данные В КОНЕЦ, не удаляя существующие?", options: ["'w'", "'r'", "'a'", "'x'"], correct: 2 },
            { question: "Какой метод читает все строки файла и возвращает их в виде СПИСКА?", options: [".readall()", ".readlines()", ".getlines()", ".lines()"], correct: 1 },
            { question: "Напишите режим открытия файла для ДОЗАПИСИ в конец (без удаления данных)", type: "code", correct: ["'a'", "\"a\"", "a"] },
            { question: "Напишите вызов метода для закрытия файла f", type: "code", correct: ["f.close()", "f.close"] }
        ],
        'lesson11.html': [
            { question: "Зачем нужен блок try-except?", options: ["Для создания циклов", "Для перехвата ошибок и предотвращения 'краша' программы", "Для ускорения кода", "Для работы с файлами"], correct: 1 },
            { question: "В каком блоке пишется код, обрабатывающий пойманную ошибку?", options: ["try", "except", "handle", "finally"], correct: 1 },
            { question: "Когда выполняется блок finally?", options: ["Только при ошибке", "Только при успехе", "Всегда - и при ошибке, и без неё", "Никогда автоматически"], correct: 2 },
            { question: "Какая ошибка возникает при делении числа на 0 в Python?", options: ["ValueError", "TypeError", "ZeroDivisionError", "SyntaxError"], correct: 2 },
            { question: "Как называется базовый класс всех ошибок, который перехватывает ЛЮБОЕ исключение?", options: ["Error", "BaseError", "Exception", "AnyError"], correct: 2 },
            { question: "Что произойдёт с программой при ошибке, если НЕТ блока try-except?", options: ["Python выдаст предупреждение и продолжит", "Программа аварийно завершится (упадёт)", "Ничего - ошибка проигнорируется", "Запустится блок finally"], correct: 1 },
            { question: "Напишите ключевое слово для принудительного вызова исключения", type: "code", correct: ["raise"] },
            { question: "Напишите имя базового класса для перехвата ЛЮБОЙ ошибки: except _______:", type: "code", correct: ["Exception"] }
        ],
        'lesson12.html': [
            { question: "Для чего служит ключевое слово import?", options: ["Экспортирует функции", "Подключает встроенные и сторонние модули/библиотеки", "Компилирует код", "Сжимает файл"], correct: 1 },
            { question: "Как импортировать ТОЛЬКО константу pi из модуля math?", options: ["import math.pi", "from math import pi", "get pi from math", "using math.pi"], correct: 1 },
            { question: "Что такое pip?", options: ["Игровая платформа", "Стандартный менеджер пакетов Python для установки библиотек", "Тип ошибки", "Модуль для изображений"], correct: 1 },
            { question: "Какой встроенный модуль Python используется для генерации случайных чисел?", options: ["math", "random", "shuffle", "chance"], correct: 1 },
            { question: "Как дать псевдоним модулю при импорте (например, math сократить до m)?", options: ["import math = m", "import math as m", "alias math m", "math aka m"], correct: 1 },
            { question: "Модуль - это:", options: ["Специальный тип данных Python", "Файл с готовым кодом Python, который можно подключить", "Встроенная функция", "Тип исключения"], correct: 1 },
            { question: "Что вернёт math.sqrt(25) из модуля math?", options: ["5", "5.0", "625", "Ошибку"], correct: 1 },
            { question: "Напишите команду терминала для установки библиотеки requests", type: "code", correct: ["pip install requests"] }
        ],
        'lesson13.html': [
            { question: "Что в ООП является 'чертежом' (шаблоном) для создания объектов?", options: ["Функция", "Класс", "Переменная", "Пакет"], correct: 1 },
            { question: "Как называется специальный метод-конструктор, вызываемый при создании объекта?", options: ["__start__", "__main__", "__init__", "__create__"], correct: 2 },
            { question: "Какой параметр ОБЯЗАН быть первым в каждом методе класса?", options: ["Имя класса", "self", "this", "cls"], correct: 1 },
            { question: "Инкапсуляция - это:", options: ["Скрытие внутренней реализации и данных объекта от внешнего кода", "Наследование атрибутов", "Перегрузка методов", "Копирование объекта"], correct: 0 },
            { question: "Что хранится в атрибутах объекта, заданных в __init__ через self?", options: ["Функции модуля", "Данные (свойства) конкретного объекта", "Общие методы класса", "Ошибки выполнения"], correct: 1 },
            { question: "Как в Python обозначают 'приватный' (скрытый) атрибут класса?", options: ["Знаком @ перед именем", "Двойным подчёркиванием __ перед именем", "Словом private перед именем", "Заглавными буквами"], correct: 1 },
            { question: "Создайте экземпляр класса Car и сохраните в переменную obj", type: "code", correct: ["obj=Car()", "obj = Car()"] }
        ],
        'lesson14.html': [
            { question: "Какая функция возвращает текущую дату и время?", options: ["time.now()", "calendar.today()", "datetime.now()", "datetime.today()"], correct: 2 },
            { question: "Какой объект хранит разницу между двумя датами?", options: ["difference", "timedelta", "timeshift", "dategap"], correct: 1 },
            { question: "Какой код символа strftime() соответствует 4-значному году?", options: ["%Y", "%y", "%G", "%YYYY"], correct: 0 },
            { question: "Из какого модуля импортируют класс datetime?", options: ["calendar", "time", "datetime", "clock"], correct: 2 },
            { question: "Что можно делать с помощью timedelta помимо вычисления разницы между датами?", options: ["Только смотреть разницу в днях", "Прибавлять или вычитать дни из даты", "Форматировать дату в строку", "Конвертировать строку в дату"], correct: 1 },
            { question: "Что означает %d в шаблоне strftime()?", options: ["Год (4 цифры)", "Месяц (01-12)", "День (01-31)", "Часы (00-23)"], correct: 2 },
            { question: "Напишите название метода, конвертирующего дату в строку по шаблону формата", type: "code", correct: ["strftime", "strftime()", ".strftime()"] },
            { question: "Напишите строку импорта класса datetime из модуля datetime", type: "code", correct: ["from datetime import datetime"] }
        ],
        'lesson15.html': [
            { question: "Какая библиотека встроена в Python 'из коробки' для создания настольных окон (GUI)?", options: ["Pandas", "Tkinter", "Requests", "PyQt"], correct: 1 },
            { question: "Как называется популярный всемирный стандарт оформления и чистоты кода в Python?", options: ["PEP8", "PY-STYLE", "CLEAN-CODE 2.0", "ISO-PY"], correct: 0 },
            { question: "Для хранения своего кода в облаке и создания портфолио программисты используют:", options: ["Facebook", "GitHub", "Google Drive", "VK"], correct: 1 },
            { question: "Что такое Git?", options: ["Язык программирования", "Система контроля версий кода", "Менеджер пакетов Python", "Редактор кода"], correct: 1 },
            { question: "Какой модуль используется в итоговом проекте для сохранения задач в файл?", options: ["csv", "pickle", "json", "xml"], correct: 2 },
            { question: "Какую конструкцию использует итоговый проект для бесконечного главного меню с выходом через break?", options: ["for i in range(999):", "while True: ... break", "repeat until False", "loop(): ... stop"], correct: 1 },
            { question: "Что делает функция enumerate() при переборе списка?", options: ["Возвращает только индексы", "Возвращает пары (индекс, элемент) одновременно", "Сортирует список", "Возвращает только элементы"], correct: 1 },
            { question: "Напишите сокращённое название системы контроля версий", type: "code", correct: ["Git", "git"] }
        ]
    };

    // --- 2. Locking System & Navigation ---
    function initLockSystem() {
        const progress = JSON.parse(localStorage.getItem('quiz_results')) || {};

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

        // FIX: Ensure button is visible when resetting (e.g. after 'Retake')
        startBtn.style.display = 'block';

        // Check if already passed
        const savedResults = JSON.parse(localStorage.getItem('quiz_results')) || {};
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
            title.textContent = '🚀 Проверочный тест';
            container.appendChild(title);

            questions.forEach((q, index) => {
                const qBlock = document.createElement('div');
                qBlock.className = 'quiz-question';

                const qText = document.createElement('p');
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

                    const checkBtn = document.createElement('button');
                    checkBtn.textContent = '✔️ Проверить';
                    checkBtn.className = 'btn-quiz-opt';

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';

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
                            // 3. Contains-match (ответ содержит правильную конструкцию)
                            if (userCode.includes(normAns)) return true;
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
                            // Показываем правильный ответ при ошибке
                            const exampleAns = q.correct[0];
                            feedback.innerHTML = `❌ Ошибка. Правильный ответ: <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;">${exampleAns}</code>`;
                            feedback.style.color = '#ef4444';
                            qBlock.classList.add('answered-wrong');
                        }

                        checkQuizCompletion(questions.length);
                    };

                    qBlock.appendChild(inputArea);
                    qBlock.appendChild(checkBtn);
                    qBlock.appendChild(feedback);

                } else {
                    const optionsDiv = document.createElement('div');

                    // SHUFFLE LOGIC - алгоритм Фишера-Йейтса для нейтрализации запоминания позиции
                    const indexedOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
                    const shuffled = shuffleArray(indexedOptions);

                    shuffled.forEach((optObj) => {
                        const btn = document.createElement('button');
                        btn.textContent = optObj.text;
                        btn.className = 'btn-quiz-opt';
                        btn.dataset.origIndex = optObj.originalIndex; // Сохраняем оригинальный индекс
                        // Сравниваем с оригинальным индексом правильного ответа
                        btn.onclick = () => checkAnswer(btn, optObj.originalIndex, q.correct, questions.length);
                        optionsDiv.appendChild(btn);
                    });
                    qBlock.appendChild(optionsDiv);

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';
                    qBlock.appendChild(feedback);
                }

                container.appendChild(qBlock);
            });
        } catch (e) {
            container.innerHTML = `<div style="padding: 20px; background: #fee2e2; color: #b91c1c; border-radius: 12px; border: 2px solid #ef4444;">
                <h3 style="margin-top:0;">ОШИБКА ОТРИСОВКИ ТЕСТА!</h3>
                <p><strong>Мы не смогли загрузить тест из-за сбоя:</strong></p>
                <div style="background: #fff; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 0.9em; overflow-x: auto;"><b>${e.name}</b>: ${e.message}<br><br>${e.stack}</div>
                <button class="btn-retake" onclick="window.location.reload()">Перезагрузить страницу</button>
            </div>`;
        }
    }

    function checkAnswer(btn, selected, correct, total) {
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

        checkQuizCompletion(total);
    }

    function checkQuizCompletion(total) {
        const container = document.getElementById('quiz-container');
        const correctCount = container.querySelectorAll('.answered-correct').length;
        const wrongCount = container.querySelectorAll('.answered-wrong').length;

        if (correctCount + wrongCount === total) {
            // Quiz Finished
            if (wrongCount === 0) {
                // SUCCESS
                const progress = JSON.parse(localStorage.getItem('quiz_results')) || {};
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
            motivText = 'Не расстраивайся - повтори теорию и попробуй снова!';
        } else if (percent < 50) {
            motivText = 'Хорошее начало! Повтори пропущенные темы и попробуй ещё раз.';
        } else {
            motivText = 'Совсем чуть-чуть не хватило! Ты почти у цели - ещё одна попытка!';
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
            // Игнорируем технические блоки из онлайн-редактора
            if (pre.closest('.CodeMirror') || pre.id === 'terminal-output') return;

            if (pre.querySelector('.btn-copy')) return; // Avoid duplicates

            pre.style.position = 'relative';
            const btn = document.createElement('button');
            btn.className = 'btn-copy';
            btn.textContent = '📋';
            btn.onclick = () => {
                const text = pre.innerText.replace('📋', '').replace('✅', ''); // Clean text
                navigator.clipboard.writeText(text);
                btn.textContent = '✅';
                setTimeout(() => btn.textContent = '📋', 2000);
            };
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

    // Run All
    initLockSystem();
    initCopyButtons();
    initQuiz();
    initTheme();
    initResetButton();
    initScrollAnimations();
});
