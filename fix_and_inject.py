import re

def fix_and_inject():
    with open("inject_tasks.py", "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace \\n with \n in the tasks_json string
    # We want actual newlines in the Python code that gets run by Pyodide
    new_content = content.replace('\\\\n', '\\n')
    
    with open("inject_tasks.py", "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print("Fixed inject_tasks.py")
    
    # Now run the injection script
    import subprocess
    subprocess.run(["python3", "inject_tasks.py"])
    print("Re-injected tasks into tasks.html")

if __name__ == "__main__":
    fix_and_inject()
