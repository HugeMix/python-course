import re

def update_script_js():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Expand the quiz data for a few lessons (as requested "нормальные со своими задачками")
    # For demonstration, I will expand lesson 1 and lesson 2 with more questions.
    # Note: we use naive replacement for demonstration.
    
    better_lesson1 = '''        'lesson1.html': [
            { question: "Какая команда используется для вывода текста на экран?", options: ["input()", "print()", "scan()", "output()"], correct: 1 },
            { question: "Какое расширение имеют файлы Python?", options: [".txt", ".exe", ".py", ".pyt"], correct: 2 },
            { question: "В каком году был выпущен Python?", options: ["1991", "2000", "1985", "1995"], correct: 0 },
            { question: "Какую роль выполняет функция print()?", options: ["Считывает ввод с клавиатуры", "Выводит переданные данные в консоль", "Удаляет пробелы", "Объявляет функцию"], correct: 1 },
            { question: "Она регистрозависима?", options: ["Да (PRiNT и print - разные)", "Нет", "Python не важен регистр", "Регистр влияет только на Windows"], correct: 0 },
            { question: "Напишите программу, которая выводит текст 'Привет'.", type: "code", correct: ["print('Привет')", 'print("Привет")'] },
            { question: "Напишите программу, которая выводит число 42.", type: "code", correct: ["print(42)", "print('42')", 'print("42")'] }
        ],'''
    content = re.sub(r"        'lesson1\.html': \[.*?\]\s*,\n", better_lesson1 + '\n', content, flags=re.DOTALL)

    better_lesson2 = '''        'lesson2.html': [
            { question: "Как правильно объявить переменную в Python?", options: ["var x = 5", "int x = 5", "x = 5", "$x = 5"], correct: 2 },
            { question: "Какой тип данных у значения 3.14?", options: ["int", "float", "string", "bool"], correct: 1 },
            { question: "Что выведет код: print(type(\"10\"))?", options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Ошибка"], correct: 1 },
            { question: "Какое имя переменной недопустимо в Python?", options: ["my_var", "var1", "1var", "_var_"], correct: 2 },
            { question: "Что будет результатом str(5) + '5'?", options: ["10", "Ошибка", "55", "'5'"], correct: 2 },
            { question: "Создайте переменную age и присвойте ей значение 20", type: "code", correct: ["age=20", "age = 20"] },
            { question: "Сконвертируйте строку '10' в число и присвойте в x", type: "code", correct: ["x=int('10')", 'x=int("10")', "x = int('10')", 'x = int("10")'] }
        ],'''
    content = re.sub(r"        'lesson2\.html': \[.*?\]\s*,\n", better_lesson2 + '\n', content, flags=re.DOTALL)

    # 2. Add try-catch and display to renderQuizContent
    try_catch_patch = '''    function renderQuizContent(container, alreadyPassed = false) {
        try {
            if (alreadyPassed) {
                renderQuizCompleted(container);
                return;
            }

            const questions = quizData[currentPath];
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
                    inputArea.placeholder = 'Напишите ваш код...';

                    const checkBtn = document.createElement('button');
                    checkBtn.textContent = '✔️ Проверить код';
                    checkBtn.className = 'btn-quiz-opt';

                    const feedback = document.createElement('p');
                    feedback.className = 'quiz-feedback';

                    checkBtn.onclick = () => {
                        const userCode = inputArea.value.trim().replace(/\s+/g, ' ');
                        const correctAnswers = q.correct.map(c => c.trim().replace(/\s+/g, ' '));

                        const isCorrect = correctAnswers.some(ans => userCode.includes(ans) || userCode.replace(/\s/g, '') === ans.replace(/\s/g, ''));

                        inputArea.disabled = true;
                        checkBtn.disabled = true;
                        checkBtn.style.opacity = '0.7';

                        if (isCorrect) {
                            feedback.textContent = '✅ Верно';
                            feedback.style.color = '#10b981';
                            qBlock.classList.add('answered-correct');
                        } else {
                            feedback.textContent = '❌ Ошибка';
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

                    // SHUFFLE LOGIC (save original index so checkAnswer gets correct reference!)
                    const indexedOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
                    indexedOptions.sort(() => Math.random() - 0.5);

                    indexedOptions.forEach((optObj) => {
                        const btn = document.createElement('button');
                        btn.textContent = optObj.text;
                        btn.className = 'btn-quiz-opt';
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
                <h3 style="margin-top:0;">ОШИБКА ДАБРОВКИ ТЕСТА!</h3>
                <p><strong>Пожалуйста, скопируйте эту ошибку и отправьте боту:</strong></p>
                <div style="background: #fff; padding: 10px; border-radius: 6px; font-family: monospace;"><b>${e.name}</b>: ${e.message}</b><br><br>${e.stack}</div>
                <button class="btn-retake" onclick="window.location.reload()">Вернуться назад</button>
            </div>`;
        }
    }'''
    
    content = re.sub(r'    function renderQuizContent.*?function checkAnswer', try_catch_patch + '\n\n    function checkAnswer', content, flags=re.DOTALL)

    # Add pyodide code tasks execution logic? No, just keep the regex verification for now, it's safer.
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("script.js updated.")

if __name__ == "__main__":
    update_script_js()
