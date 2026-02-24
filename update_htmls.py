import os, glob

# 1. Update Navigation and add IDE Link in all HTML files
html_files = glob.glob('*.html')
nav_addition = '<li><a href="python-online.html">Python Online</a></li>'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already added to avoid duplicates
    if 'python-online.html' not in content:
        # We find the closing </ul> inside <nav>
        content = content.replace('</ul>', f'    {nav_addition}\n                    </ul>', 1)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

# 2. Add Missing content to lessons
missing_content = {
    'lesson1.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Кто создал Python?</strong> Язык Python был создан программистом по имени <strong>Гвидо ван Россум</strong>.</p>
            <p><strong>В каком году?</strong> Первый релиз языка состоялся в <strong>1991</strong> году.</p>
            <p><strong>Какое расширение файлов?</strong> Все файлы с кодом Python имеют расширение <strong>.py</strong>.</p>
''',
    'lesson2.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Тип данных у 3.14:</strong> Числа с точкой (например, 3.14) имеют тип данных <strong>float</strong>.</p>
            <p><strong>Что выведет print(type("10"))?</strong> Строки возвращают <strong>&lt;class 'str'&gt;</strong>.</p>
            <p><strong>Преобразование строки в число:</strong> Если в строке записано число "123", используем функцию <strong>int('123')</strong>.</p>
''',
    'lesson3.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Оператор возведения в степень:</strong> В Python это делается с помощью двух звездочек <strong>**</strong>.</p>
            <p><strong>Оператор 10 % 4:</strong> Возвращает остаток от деления, который равен <strong>2</strong>.</p>
            <p><strong>Проверка равенства:</strong> Используется двойное равно <strong>x == y</strong>.</p>
''',
    'lesson4.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Как написать условие 'если x больше 5'?</strong> Синтаксис: <strong>if x > 5:</strong></p>
            <p><strong>Оператор 'иначе если':</strong> Используется ключевое слово <strong>elif</strong>.</p>
            <p><strong>Не равно:</strong> Оператор <strong>!=</strong>.</p>
            <p><strong>if True or False: print('Yes'):</strong> Выражение <code>True or False</code> дает <code>True</code>, поэтому код выведет <strong>Yes</strong>.</p>
''',
    'lesson5.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Функция range(5):</strong> Она генерирует последовательность чисел от <strong>0 до 4</strong>.</p>
            <p><strong>Пропустить итерацию:</strong> Чтобы перейти к следующему шагу цикла без выполнения оставшегося кода, используется команда <strong>continue</strong>.</p>
''',
    'lesson6.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Что делает кортежи уникальными?</strong> Главное отличие кортежа (tuple) от списка состоит в том, что <strong>кортеж нельзя изменять</strong> после создания.</p>
''',
    'lesson7.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Что возвращает функция, если нет return?</strong> В таком случае функция неявно вернёт <strong>None</strong>.</p>
            <p><strong>Что такое аргументы?</strong> Это <strong>значения, передаваемые в функцию</strong> при её вызове.</p>
''',
    'lesson8.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Как получить список всех ключей?</strong> Используется метод <strong>d.keys()</strong>.</p>
            <p><strong>Как создать пустое множество?</strong> Пустое множество создается не фигурными скобками, а функцией <strong>set()</strong>.</p>
''',
    'lesson9.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Перевод в верхний регистр:</strong> Помогает метод <strong>upper()</strong>.</p>
            <p><strong>Что такое f-строка?</strong> Это <strong>форматированная строка</strong>, удобная для вставки переменных прямо внутрь текста.</p>
''',
    'lesson10.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Закрытие файла:</strong> Файл необходимо закрывать методом <strong>f.close()</strong>.</p>
            <p><strong>with open(...) as f:</strong> Этот синтаксис <strong>автоматически закрывает файл</strong>, даже если внутри произойдет ошибка.</p>
''',
    'lesson11.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Какой блок используется для кода с ошибкой?</strong> Блок называется <strong>try</strong>.</p>
            <p><strong>Когда выполняется блок finally?</strong> Код внутри finally выполняется <strong>Всегда</strong>.</p>
''',
    'lesson12.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Внешние библиотеки:</strong> Устанавливаются с помощью утилиты в командной строке: <strong>pip install имя</strong>.</p>
            <p><strong>Что такое __main__?</strong> Это <strong>Имя главного модуля</strong>, которое присваивается исполняемому файлу при запуском.</p>
''',
    'lesson13.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Что означает self?</strong> Это <strong>Ссылка на текущий экземпляр</strong> класса в любом из его методов.</p>
''',
    'lesson14.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Как получить текущую дату?</strong> Используется метод <strong>datetime.now()</strong>.</p>
            <p><strong>Разница дат:</strong> Для этого нужно <strong>Просто вычесть их (-)</strong>.</p>
''',
    'lesson15.html': '''
            <h3>Дополнительная теория:</h3>
            <p><strong>Файлы настроек:</strong> Очень удобным и популярным форматом является <strong>JSON</strong>.</p>
            <p><strong>Управление версиями:</strong> Инструмент, необходимый в каждой команде — <strong>GIT</strong>.</p>
'''
}

for l_file, text_to_add in missing_content.items():
    if os.path.exists(l_file):
        with open(l_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'Дополнительная теория:' not in content:
            # Insert right before </section> that has class "lesson-content"
            content = content.replace('</section>\n\n        <!-- Квиз -->', f'{text_to_add}\n        </section>\n\n        <!-- Квиз -->')
            with open(l_file, 'w', encoding='utf-8') as f:
                f.write(content)

print('Updated HTML files.')
