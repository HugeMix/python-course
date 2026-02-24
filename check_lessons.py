import os, re, json

def strip_tags(html):
    return re.sub(r'<[^>]*>', ' ', html).lower()

with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract quizData object using regex
quiz_data_match = re.search(r'const quizData = (.*?);\s*// --- 2\. Locking', js_content, re.DOTALL)
if quiz_data_match:
    quiz_data_str = quiz_data_match.group(1)
    # Dirty evaluate the object string but in python
    # the dict has keys 'lesson1.html' etc, and comments inside.
    # We can try to clean it and parse it simply.
    quiz_data_str = re.sub(r'//.*', '', quiz_data_str)
    # Convert 'lesson1.html' to "lesson1.html", etc.
    quiz_data_str = re.sub(r"'([^']*)':", r'"\1":', quiz_data_str)
    # The structure:
    # "lesson1.html": [ { question: "...", options: ["..."], correct: 1 }, ... ]
    # Also needs question:, options:, correct: in quotes
    quiz_data_str = re.sub(r'(\s*)(question|options|correct)\s*:', r'\1"\2":', quiz_data_str)
    
    # Still there are Single quotes around strings
    quiz_data_str = quiz_data_str.replace("'", '"')
    
    # Some strings inside have quotes already... well let's just use Python's eval after replacing `true`/`false`
    quiz_data_str = quiz_data_str.replace("true", "True").replace("false", "False")
    
    # Try eval
    err = False
    try:
        # Instead of generic eval, we can use ast.literal_eval if we fix all quotes, but wait, Javascript strings inside might be tricky like '"10"' -> ""10"". Let's just use ast.literal_eval? No, it's safer to just do a python script that runs inside a js environment (Node.js) to output a JSON!
        pass
    except Exception as e:
        print(f"Eval error: {e}")
        err = True

