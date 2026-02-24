import os
import glob
import re

html_files = glob.glob('*.html')

header_template = '''    <header>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <a href="index.html" style="display: flex; align-items: center; text-decoration: none; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <img src="logo.png" alt="Логотип" class="logo" style="height: 40px;">
                <span style="font-weight: 800; font-size: 1.4rem; margin-left: 12px; color: var(--text-color); font-family: 'Inter', sans-serif;">Python<span style="color: var(--accent-color);">Basic</span></span>
            </a>
            <nav>
                <ul style="display: flex; list-style: none; margin: 0; padding: 0; gap: 10px; align-items: center;">
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="python-basic.html">Курс</a></li>
                    <li><a href="libraries.html">Библиотеки</a></li>
                    <li><a href="python-online.html">Python Online</a></li>
                </ul>
            </nav>
        </div>
    </header>'''

for f_name in html_files:
    with open(f_name, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update <header>
    content = re.sub(r'<header>.*?</header>', header_template, content, flags=re.DOTALL)
    
    # Text/Grammar fixes
    content = content.replace('что бы вы', 'чтобы вы')
    content = content.replace('то есть', 'то есть,')
    
    # Fix Trinket iframe for speed
    if f_name == 'python-online.html':
        if 'loading="lazy"' not in content:
            content = content.replace('<iframe src=', '<iframe loading="lazy" src=')

    # Add a glowing text effect on index.html
    if f_name == 'index.html':
        content = content.replace('Освой язык программирования Python с нуля', 'Освой язык программирования <span style="color:#fbbf24; text-shadow: 0 0 10px rgba(251,191,36,0.3);">Python</span> с нуля')

    with open(f_name, 'w', encoding='utf-8') as f:
        f.write(content)
print("Finished rewriting HTMLs!")
