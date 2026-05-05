import os
import re

def fix_html_files():
    for filename in os.listdir('.'):
        if filename.endswith('.html'):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 1. Fix literal \n inside HTML tags (content injection artifacts)
            # This looks for \n that is NOT inside a script or style tag
            # But simpler: replace literal \n with actual newline if it's surrounded by HTML-like content
            # We saw things like \n            <h2>
            new_content = content.replace('\\n', '\n')
            
            # 2. Fix specific bug in courses.html (extra </div>)
            if filename == 'courses.html':
                # Looking for the extra </div> before </section>
                new_content = new_content.replace('</div>\n        </section>', '\n        </section>')

            # 3. Fix missing 'Задачи' link in python-online.html nav
            if filename == 'python-online.html':
                if 'tasks.html' not in new_content:
                    new_content = new_content.replace('<li><a href="libraries.html">Библиотеки</a></li>', 
                                                    '<li><a href="libraries.html">Библиотеки</a></li>\n                    <li><a href="tasks.html">Задачи</a></li>')

            if new_content != content:
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed bugs in {filename}")

if __name__ == "__main__":
    fix_html_files()
