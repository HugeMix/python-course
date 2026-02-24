def fix_html():
    with open("tasks.html", "r", encoding="utf-8") as f:
        html = f.read()
        
    with open("tasks_data.js", "r", encoding="utf-8") as f:
        tasks_js = f.read()
        
    # Find the start and end of the broken tasks array
    start_marker = "const tasks = ["
    end_marker = "];"
    
    start_idx = html.find(start_marker)
    # find the very last ]; before the rest of the script to be safe, or just find the one that matches our array end.
    # Looking at the file, after ]; there is "let currentTaskIndex = 0;"
    end_idx = html.find("let currentTaskIndex = 0;")
    
    if start_idx != -1 and end_idx != -1:
        # find the ]; right before let currentTaskIndex
        actual_end_idx = html.rfind("];", start_idx, end_idx) + 2
        
        new_html = html[:start_idx] + tasks_js + "\n\n        " + html[end_idx:]
        
        with open("tasks.html", "w", encoding="utf-8") as f:
            f.write(new_html)
        print("HTML successfully fixed without regex issues!")
    else:
        print("Markers not found!")

fix_html()
