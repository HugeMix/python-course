import os
import glob
from bs4 import BeautifulSoup
import re

def check_site():
    print("Начинаю полную проверку сайта...\n" + "="*40)
    
    html_files = glob.glob("*.html")
    errors = []
    warnings = []
    
    # Check 1: All files have style.css and script.js (if applicable)
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            soup = BeautifulSoup(content, 'html.parser')
            
            # Check CSS
            has_css = False
            for link in soup.find_all('link'):
                if link.get('rel') == ['stylesheet'] and link.get('href') == 'style.css':
                    has_css = True
            if not has_css:
                errors.append(f"[{file}] Отсутствует подключение style.css")
                
            # Check JS
            # All pages should have script.js EXCEPT maybe some specific ones if you want, but by default all.
            has_js = False
            for script in soup.find_all('script'):
                if script.get('src') == 'script.js':
                    has_js = True
            if not has_js:
                errors.append(f"[{file}] Отсутствует подключение script.js")

            # Check Headers
            header = soup.find('header')
            if not header:
                errors.append(f"[{file}] Отсутствует тег <header>")
                
            # Check meta charset
            meta_cs = soup.find('meta', charset='UTF-8')
            if not meta_cs:
                warnings.append(f"[{file}] Нет <meta charset=\"UTF-8\">")
                
            # Typography / Grammar checks
            # Look for common mistakes
            if "что бы " in content.lower():
                warnings.append(f"[{file}] Возможно орфографическая ошибка: 'что бы' вместо 'чтобы'")
            if "то есть " in content.lower() and "то есть," not in content.lower() and "то-есть" in content.lower():
                 warnings.append(f"[{file}] Проверить правописание 'то есть'")

    # Check 2: script.js Integrity
    if os.path.exists("script.js"):
        with open("script.js", "r", encoding="utf-8") as f:
            js = f.read()
            # Ensure try/catch exists
            if "try {" not in js or "catch" not in js:
                warnings.append("[script.js] Нет блоков try/catch, возможны падения скрипта.")
            # Verify quiz data length matches lessons
            for i in range(1, 16):
                if f"'lesson{i}.html'" not in js:
                    errors.append(f"[script.js] Отсутствует викторина для lesson{i}.html")
    else:
        errors.append("Файл script.js не найден!")

    # Check 3: style.css Integrity
    if os.path.exists("style.css"):
        with open("style.css", "r", encoding="utf-8") as f:
            css = f.read()
            if ".card:hover" not in css or "z-index" not in css:
                warnings.append("[style.css] Возможно, не применен фикс с z-index для .card:hover")
    else:
        errors.append("Файл style.css не найден!")


    if len(errors) == 0 and len(warnings) == 0:
        print("✅ Идеально! Ошибок и предупреждений не найдено.")
    else:
        if errors:
            print("❌ КРИТИЧЕСКИЕ ОШИБКИ:")
            for e in errors: print(" -", e)
        if warnings:
            print("\n⚠️ ПРЕДУПРЕЖДЕНИЯ (стоит проверить):")
            for w in warnings: print(" -", w)

if __name__ == "__main__":
    check_site()
