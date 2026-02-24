import glob
import re

def update_nav():
    html_files = glob.glob("*.html")
    
    # We want to insert <li><a href="tasks.html">Задачи</a></li>
    # before <li><a href="python-online.html">Python Online</a></li>
    
    for file in html_files:
        if file == "tasks.html":
            continue
            
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if "tasks.html" in content and file != "tasks.html":
            # Already has it probably
            continue
            
        # Pattern to find the python-online link
        pattern = r'(<li><a href="python-online.html">Python Online</a></li>)'
        
        # Replacement
        replacement = r'<li><a href="tasks.html">Задачи</a></li>\n                    \1'
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Обновлена навигация в {file}")

if __name__ == "__main__":
    update_nav()
    print("Готово!")
