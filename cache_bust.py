import os
import time

# Add a timestamp comment to the end of each file to force a change
timestamp = str(int(time.time()))

files_to_update = [
    'script.js', 'style.css', 'tasks_data.js', 'python-basic.html'
] + [f'lesson{i}.html' for i in range(1, 16)]

for filename in files_to_update:
    if os.path.exists(filename):
        with open(filename, 'a', encoding='utf-8') as f:
            f.write(f"\n<!-- Cache bust: {timestamp} -->\n" if filename.endswith('.html') else f"\n// Cache bust: {timestamp}\n")

print(f"Added cache-busting timestamps to {len(files_to_update)} files.")
