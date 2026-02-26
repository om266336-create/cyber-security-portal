import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Lab 2
lab2_tasks = '''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Scan host (ping) to verify it is up</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Run an initial nmap port scan</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Identify the login form endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Perform SQL injection payload ' or 1=1 --</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Enumerate database columns (order by)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Enumerate database version (union select version())</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Extract tables (information_schema)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Dump configuration table for admin hash</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Bypass login and access dashboard</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Retrieve the database flag</span></label>
            </div>'''
content = content.replace(
'''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>10. Retrieve the database flag</span></label>
            </div>''', lab2_tasks)

# Lab 3
lab3_tasks = '''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Identify current user (id)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Check sudo privileges (sudo -l)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Enumerate SUID binaries (find -perm)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Analyze running processes</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Check file permissions (ls -la /etc/passwd)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Look for hardcoded passwords</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Spawn root shell via python3</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Read sensitive files (cat /etc/shadow)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Verify root access (whoami)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Read the /root/root.txt flag</span></label>
            </div>'''
content = content.replace(
'''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>10. Read the /root/root.txt flag</span></label>
            </div>''', lab3_tasks)

# Lab 4
lab4_tasks = '''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Scan target for open ports (nmap 22)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Identify SSH service banner</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Select wordlist (rockyou.txt)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Target the 'admin' user</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Launch Hydra SSH brute-force attack</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Monitor attack progress</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Extract cracked password</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Authenticate via SSH with valid credentials</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Search file system for flag</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Capture target credentials flag</span></label>
            </div>'''
content = content.replace(
'''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>10. Capture target credentials flag</span></label>
            </div>''', lab4_tasks)

# Lab 5
lab5_tasks = '''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Enable monitor mode (airmon-ng start)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Scan for nearby networks (airodump-ng)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Filter traffic for target BSSID</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Start packet capture on channel 6</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Send deauthentication packets (aireplay-ng)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Capture the 4-way WPA handshake</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Stop packet capture and monitor mode</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Convert capture format for Hashcat</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Run dictionary attack against handshake</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Recover WPA2 password flag</span></label>
            </div>'''
content = content.replace(
'''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>10. Recover WPA2 password flag</span></label>
            </div>''', lab5_tasks)

# Lab 6
lab6_tasks = '''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Analyze disk layout (mmls)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Recover deleted files (fls -r)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Extract browser history</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract image metadata (exiftool)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Find hidden archives (binwalk)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Carve files from unallocated space</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Calculate file hashes (sha256sum)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Match hashes against ThreatDB</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Reconstruct access timeline</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit timeline report flag</span></label>
            </div>'''
content = content.replace(
'''            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit timeline report flag</span></label>
            </div>''', lab6_tasks)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated data.js')
