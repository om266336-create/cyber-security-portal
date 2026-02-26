document.addEventListener('DOMContentLoaded', () => {
    // Current Time Header
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        setInterval(() => {
            const now = new Date();
            timeElement.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        }, 1000);
    }

    // Scroll Effect on Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // --- Page Routing Logic (SPA) ---
    const pageSections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function navigateTo(targetId) {
        // Hide all sections
        pageSections.forEach(section => section.classList.remove('active'));

        // Find and show target section
        const targetSection = document.getElementById(targetId.replace('#', ''));
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo(0, 0); // Reset scroll position
        }

        // Update Nav Links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        history.pushState(null, null, targetId);
    }

    // Handle Nav Link Clicks
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            navigateTo(targetId);
        });
    });

    // Handle Hero Buttons for Navigation
    document.querySelectorAll('.hero-actions a').forEach(aTag => {
        aTag.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = aTag.getAttribute('href');
            navigateTo(targetId);
        });
    });

    // Handle Home Logo Click
    const homeLogo = document.getElementById('home-logo');
    if (homeLogo) {
        homeLogo.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#home');
        });
    }

    // Handle Browser Back/Forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash || '#home';
        navigateTo(hash);
    });

    // --- Interactive View Logic ---
    let featureCards = document.querySelectorAll('.feature-card[data-target]');
    const interactiveSection = document.getElementById('interactive-view');
    const viewTitle = document.getElementById('view-title');
    const terminalOutput = document.getElementById('terminal-output');
    const instructionsContent = document.getElementById('instructions-content');
    const panelTabs = document.querySelectorAll('.tab');

    // Terminal Commands Logic Map
    const terminalLogic = {
        'nmap': '<div class="term-line sys-msg">Starting Nmap 7.92... <br>Discovered open port 80/tcp on 192.168.1.100<br>Discovered open port 22/tcp on 192.168.1.100</div>',
        'gobuster': '<div class="term-line sys-msg">Starting gobuster...<br>/admin-panel (Status: 403)<br>/hidden-flag (Status: 200)</div>',
        'ping': '<div class="term-line sys-msg">64 bytes from target: icmp_seq=1 ttl=64 time=0.04 ms</div>',
        'curl': '<div class="term-line sys-msg">HTTP/1.1 200 OK<br>Content-Type: text/html<br>...</div>',
        'ls': '<div class="term-line sys-msg">Desktop&nbsp;&nbsp;Documents&nbsp;&nbsp;Downloads&nbsp;&nbsp;malicious.exe</div>',
        'help': '<div class="term-line sys-msg">Available commands: ping, nmap, gobuster, ssh, ftp, curl, hydra, ls, clear, help</div>',
        'clear': 'CLEAR_TERMINAL'
    };

    // solutionRegistry: Centralized logic for all 20 interactive problems
    const solutionRegistry = {
        'labs-view-1': [
            { match: ['ping', '10.10.1.10'], step: 1, resp: '<div class="term-line sys-msg">64 bytes from 10.10.1.10: icmp_seq=1 ttl=64 time=0.045 ms</div>' },
            { match: ['nmap'], step: 2, resp: '<div class="term-line sys-msg">Starting Nmap 7.92...<br>PORT&nbsp;&nbsp;&nbsp;STATE&nbsp;SERVICE<br>21/tcp&nbsp;open&nbsp;&nbsp;ftp<br>22/tcp&nbsp;open&nbsp;&nbsp;ssh<br>80/tcp&nbsp;open&nbsp;&nbsp;http</div>' },
            { match: ['nmap', '-sv'], step: 3, resp: '<div class="term-line sys-msg">PORT&nbsp;&nbsp;&nbsp;STATE&nbsp;SERVICE VERSION<br>21/tcp&nbsp;open&nbsp;&nbsp;ftp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vsFTPd 3.0.3<br>22/tcp&nbsp;open&nbsp;&nbsp;ssh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OpenSSH 8.2p1<br>80/tcp&nbsp;open&nbsp;&nbsp;http&nbsp;&nbsp;&nbsp;&nbsp;Apache httpd 2.4.41</div>' },
            { match: ['gobuster'], step: 4, resp: '<div class="term-line sys-msg">Found: /admin-panel (Status: 403)<br>Found: /hidden-flag (Status: 200)</div>' },
            { match: ['/hidden-flag'], step: 5, resp: '<div class="term-line sys-msg">HTTP/1.1 200 OK<br>Clue: Check SSH banner. Flag part 1: {RECON}</div>' },
            { match: ['ssh', '-v'], step: 6, resp: '<div class="term-line sys-msg">OpenSSH 8.2p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)</div>' },
            { match: ['ftp', '10.10.1.10'], step: 7, resp: '<div class="term-line sys-msg">Connected to 10.10.1.10. 220 (vsFTPd 3.0.3) Login: anonymous... OK</div>' },
            { match: ['curl', 'cat'], step: 8, resp: '<div class="term-line sys-msg">&lt;!-- Hint: hidden-flag folder --&gt;</div>' },
            { match: ['hydra'], step: 9, resp: '<div class="term-line sys-msg">Hydra v9.2 starting... [21][ftp] host: 10.10.1.10 login: admin password: monkey123</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Flag submitted: COMPROMISED</div>' }
        ],
        'labs-view-2': [
            { match: ['curl', '10.10.1.20'], step: 1, resp: '<div class="term-line sys-msg">HTTP/1.1 200 OK<br>Login Form Detected. Fields: user, pass</div>' },
            { match: ['nmap'], step: 2, resp: '<div class="term-line sys-msg">Port 80 (HTTP) open. Apache 2.4.41. PHP 7.4.3.</div>' },
            { match: ["' or 1=1 --"], step: 3, resp: '<div class="term-line sys-msg">Login Bypass Successful! Welcome Admin.</div>' },
            { match: ['order by'], step: 4, resp: '<div class="term-line sys-msg">Query successful. Columns: 3</div>' },
            { match: ['union select', 'version()'], step: 5, resp: '<div class="term-line sys-msg">Database Version: MySQL 8.0.23</div>' },
            { match: ['table_name', 'information_schema'], step: 6, resp: '<div class="term-line sys-msg">Tables found: users, config, flags</div>' },
            { match: ['from config'], step: 7, resp: '<div class="term-line sys-msg">Dumping config... site_admin_hash: 5f4dcc3b5aa765d61d8327deb882cf99</div>' },
            { match: ['admin'], step: 8, resp: '<div class="term-line sys-msg">Admin credentials verified.</div>' },
            { match: ['login', 'bypass'], step: 9, resp: '<div class="term-line sys-msg">Accessing protected admin dashboard...</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Flag submitted: SQL_MASTER_2024</div>' }
        ],
        'labs-view-3': [
            { match: ['id'], step: 1, resp: '<div class="term-line sys-msg">uid=1001(www-data) gid=1001(www-data) groups=1001(www-data)</div>' },
            { match: ['sudo -l'], step: 2, resp: '<div class="term-line sys-msg">User www-data may run the following commands: (ALL) NOPASSWD: /usr/bin/python3</div>' },
            { match: ['find', '-perm'], step: 3, resp: '<div class="term-line sys-msg">SUID binaries found: /usr/bin/passwd, /usr/lib/e2fsprogs/e2scrub_all</div>' },
            { match: ['ls -la /etc/passwd'], step: 5, resp: '<div class="term-line sys-msg">-rw-rw-rw- 1 root root 2341 Feb 22 10:00 /etc/passwd [WRITABLE]</div>' },
            { match: ['python3', 'import os'], step: 7, resp: '<div class="term-line sys-msg">Spawning root shell... #</div>' },
            { match: ['cat /etc/shadow'], step: 8, resp: '<div class="term-line sys-msg">root:$6$lD3f...:18654:0:99999:7:::</div>' },
            { match: ['whoami'], step: 9, resp: '<div class="term-line sys-msg">root</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Root verified: ESCALATED_PRO</div>' }
        ],
        'labs-view-4': [
            { match: ['nmap', '22'], step: 1, resp: '<div class="term-line sys-msg">Port 22/tcp open&nbsp;&nbsp;ssh&nbsp;&nbsp;OpenSSH 7.6p1</div>' },
            { match: ['ssh', '-v'], step: 2, resp: '<div class="term-line sys-msg">Banner: SSH-2.0-OpenSSH_7.6p1</div>' },
            { match: ['rockyou.txt'], step: 3, resp: '<div class="term-line sys-msg">Wordlist selected: /usr/share/wordlists/rockyou.txt</div>' },
            { match: ['-l admin'], step: 4, resp: '<div class="term-line sys-msg">Hydra: targeting user admin</div>' },
            { match: ['hydra', '-t'], step: 5, resp: '<div class="term-line sys-msg">Starting threads... attacking 172.16.1.15</div>' },
            { match: ['wait', 'retry'], step: 6, resp: '<div class="term-line sys-msg">Socket error... retrying in 5s...</div>' },
            { match: ['password', 'found'], step: 7, resp: '<div class="term-line sys-msg">[22][ssh] host: 172.16.1.15&nbsp;&nbsp;&nbsp;login: admin&nbsp;&nbsp;&nbsp;password: spring2023</div>' },
            { match: ['ssh', 'admin@'], step: 8, resp: '<div class="term-line sys-msg">Authenticated. Welcome to legacy-srv-01.</div>' },
            { match: ['cd', 'ls'], step: 9, resp: '<div class="term-line sys-msg">Desktop&nbsp;&nbsp;Documents&nbsp;&nbsp;flag.txt</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Creds verified: BRUTE_REVENGE</div>' }
        ],
        'labs-view-5': [
            { match: ['airmon-ng start'], step: 1, resp: '<div class="term-line sys-msg">Monitor mode enabled on wlan0mon.</div>' },
            { match: ['airodump-ng wlan0mon'], step: 2, resp: '<div class="term-line sys-msg">BSSID: 00:11:22:33:44:55&nbsp;&nbsp;CH: 6&nbsp;&nbsp;ESSID: CorpData_Secure</div>' },
            { match: ['-c 6', '--bssid'], step: 3, resp: '<div class="term-line sys-msg">Filtering traffic for BSSID 00:11:22:33:44:55</div>' },
            { match: ['aireplay-ng', '-0'], step: 5, resp: '<div class="term-line sys-msg">Sending Deauth to station 00:AA:BB:CC:DD:EE...</div>' },
            { match: ['handshake'], step: 6, resp: '<div class="term-line sys-msg">WPA handshake captured for 00:11:22:33:44:55</div>' },
            { match: ['hashcat', '-m 22000'], step: 9, resp: '<div class="term-line sys-msg">Recovered password: corp_wifi_secure_2023</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Handshake verified: WIFI_CRACKER</div>' }
        ],
        'labs-view-6': [
            { match: ['mmls'], step: 1, resp: '<div class="term-line sys-msg">Slot&nbsp;&nbsp;&nbsp;&nbsp;Start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description<br>002&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0000002048&nbsp;0000524287&nbsp;Win95 FAT32</div>' },
            { match: ['fls', '-r'], step: 2, resp: '<div class="term-line sys-msg">r/r 42:&nbsp;&nbsp;deleted_plan.pdf.txt</div>' },
            { match: ['History'], step: 3, resp: '<div class="term-line sys-msg">Visited: http://exfil-server.xyz/upload</div>' },
            { match: ['exiftool'], step: 4, resp: '<div class="term-line sys-msg">GPS: 34.0522 N, 118.2437 W (Los Angeles)</div>' },
            { match: ['binwalk'], step: 5, resp: '<div class="term-line sys-msg">RAR archive data found at offset 0x4000</div>' },
            { match: ['sha256sum'], step: 7, resp: '<div class="term-line sys-msg">Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Forensic report verified: DIGITAL_DUST</div>' }
        ],
        'labs-view-7': [
            { match: ['ss -tp'], step: 1, resp: '<div class="term-line sys-msg">ESTAB&nbsp;&nbsp;10.0.0.5:54321&nbsp;&nbsp;10.0.0.100:4444&nbsp;&nbsp;users:(("nc",pid=441,fd=3))</div>' },
            { match: ['tcpdump', 'port 4444'], step: 2, resp: '<div class="term-line sys-msg">Capturing packets on eth0... 10.0.0.5 -> 10.0.0.100 [PUSH, ACK]</div>' },
            { match: ['-w capture.pcap'], step: 3, resp: '<div class="term-line sys-msg">Packets saved to capture.pcap</div>' },
            { match: ['xxd', 'capture.pcap'], step: 4, resp: '<div class="term-line sys-msg">00000000: 4745 5420 2f68 6561 7274 6265 6174 2048  GET /heartbeat H</div>' },
            { match: ['stats', 'beaconing'], step: 5, resp: '<div class="term-line sys-msg">Frequency detected: Every 60 seconds (Jitter: 5%)</div>' },
            { match: ['iptables', '-A INPUT', '-j DROP'], step: 9, resp: '<div class="term-line sys-msg">C2 IP blocked in firewall. Connection reset.</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Traffic mitigated: PCAP_WIZARD</div>' }
        ],
        'labs-view-8': [
            { match: ['nmap', '--script ldap'], step: 2, resp: '<div class="term-line sys-msg">LDAP Enumeration: forestRoot: CORP.LOCAL, domainFunctionality: Windows 2016</div>' },
            { match: ['rpcclient', 'enumdomusers'], step: 3, resp: '<div class="term-line sys-msg">user:[Administrator] rid:[0x1f4]<br>user:[bkup_service] rid:[0x451]</div>' },
            { match: ['GetNPUsers.py'], step: 7, resp: '<div class="term-line sys-msg">Hash: $krb5asrep$23$bkup_service@CORP.LOCAL:...</div>' },
            { match: ['bloodhound'], step: 5, resp: '<div class="term-line sys-msg">Ingesting zip... Shortest path to DA: bkup_service -> Domain Admins</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] AD Controlled: PTH_MASTER</div>' }
        ],
        'labs-view-9': [
            { match: ['sha256sum'], step: 1, resp: '<div class="term-line sys-msg">Hash: aabbccddeeff00112233445566778899</div>' },
            { match: ['strings'], step: 2, resp: '<div class="term-line sys-msg">KERNEL32.dll&nbsp;&nbsp;InternetOpenA&nbsp;&nbsp;InternetConnectA&nbsp;&nbsp;http://evil.cc/payload.exe</div>' },
            { match: ['regshot'], step: 4, resp: '<div class="term-line sys-msg">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run -> malicious.exe</div>' },
            { match: ['get_process_tree'], step: 7, resp: '<div class="term-line sys-msg">malicious.exe (PID: 4011) parent: explorer.exe</div>' },
            { match: ['wireshark'], step: 8, resp: '<div class="term-line sys-msg">Packet calling out to 185.112.5.42:80... [REDACTED]</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Malware signature: Vbox_Bypass_01</div>' }
        ],
        'labs-view-10': [
            { match: ['aws iam list-users'], step: 1, resp: '<div class="term-line sys-msg">Users: admin, dev-user, infra-bot</div>' },
            { match: ['list-attached-user-policies'], step: 2, resp: '<div class="term-line sys-msg">infra-bot: AdministratorAccess [VULNERABLE]</div>' },
            { match: ['aws s3 ls'], step: 3, resp: '<div class="term-line sys-msg">Bucket: internal-docs-public [PUBLIC ACCESS]</div>' },
            { match: ['describe-security-groups'], step: 4, resp: '<div class="term-line sys-msg">SG sg-01: Rule 0.0.0.0/0 port 22 [OPEN]</div>' },
            { match: ['cloudtrail'], step: 6, resp: '<div class="term-line sys-msg">Anomalous CreateUser call from unauthorized IP: 185.x.x.x</div>' },
            { match: ['submit_flag'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Cloud Hardened: AWS_SHIELD</div>' }
        ]
    };

    // Add Threat Scenarios (1-10) to solutionRegistry dynamically
    for (let i = 1; i <= 10; i++) {
        solutionRegistry[`threats-view-${i}`] = [
            { match: ['siem', 'alert'], step: 1, resp: `<div class="term-line sys-msg">Alert ${i}00: Large volume exfiltration detected on 10.0.5.${i}</div>` },
            { match: ['isolate', `10.0.5.${i}`], step: 2, resp: `<div class="term-line sys-msg">Host 10.0.5.${i} isolated from the network.</div>` },
            { match: ['lateral', 'halt'], step: 3, resp: '<div class="term-line sys-msg">SMB traffic restricted on segment VLAN 1' + (i + 10) + '.</div>' },
            { match: ['get_process_tree'], step: 4, resp: '<div class="term-line sys-msg">Process Tree: svchost.exe -> powershell.exe -> nc.exe</div>' },
            { match: ['upload', 'hash'], step: 5, resp: '<div class="term-line sys-msg">Hash e3b0c... documented in ThreatDB. Matching actor: FIN7.</div>' },
            { match: ['logs', 'search'], step: 6, resp: '<div class="term-line sys-msg">No other compromised hosts found in Sector ' + i + '.</div>' },
            { match: ['phishing', 'email'], step: 7, resp: '<div class="term-line sys-msg">Vector identified: Invoice_Report.doc.xlsm sent to marketing.</div>' },
            { match: ['block_ip'], step: 8, resp: '<div class="term-line sys-msg">External C2 IP blocked at edge firewall.</div>' },
            { match: ['restore', 'backup'], step: 9, resp: '<div class="term-line sys-msg">Rolling back Sector ' + i + ' storage to snapshot: 20260225.0400</div>' },
            { match: ['traffic', 'verify'], step: 10, resp: '<div class="term-line sys-msg" style="color:var(--accent-green);">[SUCCESS] Threat Mitigated for Sector ' + i + '.</div>' }
        ];
    }

    function updateLabTask(step) {
        const taskItems = document.querySelectorAll('.task-item');
        if (taskItems[step - 1]) {
            const checkbox = taskItems[step - 1].querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = true;
                taskItems[step - 1].classList.add('completed');
            }
        }
    }

    function attachTerminalInput() {
        const inputField = document.querySelector('.terminal-input');
        if (!inputField) return;

        inputField.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const commandText = this.value.trim();
                const parts = commandText.split(' ');
                const baseCommand = parts[0].toLowerCase();
                const command = commandText.toLowerCase();
                const parentLine = this.parentElement;

                // Freeze current input line
                parentLine.innerHTML = `<span class="prompt">root@kali:~#</span> ${commandText}`;

                if (baseCommand === 'clear') {
                    terminalOutput.innerHTML = '';
                } else if (commandText) {
                    let response = terminalLogic[baseCommand] || `<div class="term-line sys-msg">bash: ${baseCommand}: command not found</div>`;
                    let matchedTask = false;

                    // solutionRegistry matching
                    const rules = solutionRegistry[currentViewType];
                    if (rules) {
                        for (let rule of rules) {
                            // Check if ALL match terms are present in the command
                            const isMatch = rule.match.every(term => command.includes(term.toLowerCase()));
                            if (isMatch) {
                                response = rule.resp;
                                updateLabTask(rule.step);
                                matchedTask = true;
                                break;
                            }
                        }
                    }

                    // Fallback to generic logic if no task match found
                    if (!matchedTask) {
                        if (commandText.startsWith('get_process_tree')) response = '<div class="term-line sys-msg">Process Tree: explorer.exe (1042) -> malicious.exe (4011) [WARNING]</div>';
                        if (commandText.startsWith('block_ip')) response = '<div class="term-line sys-msg">[OK] IP explicitly blocked at edge firewall.</div>';
                    }

                    terminalOutput.insertAdjacentHTML('beforeend', response);
                }

                // Append new input line
                terminalOutput.insertAdjacentHTML('beforeend', `
                    <div class="terminal-input-line">
                        <span class="prompt">root@kali:~#</span>
                        <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
                    </div>
                `);

                attachTerminalInput(); // Recursive attach to new input
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });

        // Ensure clicking terminal focuses input
        terminalOutput.addEventListener('click', () => {
            const currentInput = document.querySelector('.terminal-input');
            if (currentInput) currentInput.focus();
        });
    }

    // Extended View Data (10 tasks for labs/scenarios)
    const viewData = {
        'labs-view': {
            title: 'Interactive Lab: basic_recon',
            terminal: `
                <div class="term-line sys-msg">Initializing virtual environment... [OK]</div>
                <div class="term-line sys-msg">Establishing secure tunnel... [OK]</div>
                <div class="terminal-input-line">
                    <span class="prompt">root@kali:~#</span>
                    <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
                </div>
            `,
            instructions: `
                <h3>Lab Objective</h3>
                <p>Identify open ports, enumerate services, and find the flags hidden on the target (192.168.1.100).</p>
                <h4>Tasks (10 Steps):</h4>
                <div class="task-list">
                    <label class="task-item"><input type="checkbox" disabled> <span>1. Scan host to verify it is up</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>2. Run an initial nmap port scan</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>3. Identify the service on port 80</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>4. Run gobuster to find hidden directories</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>5. Find the /hidden-flag path</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>6. Enumerate SSH version on port 22</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>7. Check for anonymous FTP access</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>8. Analyze webpage source code for clues</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>9. Craft initial brute-force payload</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>10. Submit final root flag</span></label>
                </div>
                <h4 style="margin-top: 20px;">Walkthrough:</h4>
                <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>nmap</code> or <code>gobuster</code> in the terminal to simulate tool execution.</p>
                </div>
            `,
            network: `
                <h3>Network Topology</h3>
                <p><strong>Your IP:</strong> 10.10.0.5 (Kali Linux)</p>
                <p><strong>Target IP:</strong> 192.168.1.100 (Ubuntu Web Server)</p>
            `
        },
        'threats-view': {
            title: 'Threat Scenario: Ransomware Outbreak',
            terminal: `
                <div class="term-line sys-msg">[!] SIEM ALERT TRIGGERED</div>
                <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Mass file rename operations detected on FS-01.</div>
                <div class="terminal-input-line">
                    <span class="prompt">analyst@soc:~#</span>
                    <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
                </div>
            `,
            instructions: `
                <h3>Scenario Objective</h3>
                <p>Contain the outbreak, identify the entry vector, and restore operations safely.</p>
                <h4>Tasks (10 Steps):</h4>
                <div class="task-list">
                    <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate Marketing-PC-12 from the network</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>3. Halt SMB traffic to FS-01 globally</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector via email logs</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>9. Restore FS-01 from yesterday's backup</span></label>
                    <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable SMB traffic and verify</span></label>
                </div>
                <h4 style="margin-top: 20px;">Walkthrough:</h4>
                <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.42</code> to inspect the endpoint. Use <code>block_ip</code> to simulate mitigation.</p>
                </div>
            `,
            network: `
                <h3>Incident Details</h3>
                <p><strong>Affected Segment:</strong> VLAN 50 (Marketing)</p>
            `
        },
        'assessments-view': {
            title: 'Skills Assessment: Network Defense',
            terminal: `
                <div class="term-line sys-msg">=== ASSESSMENT TERMINAL ===</div>
                <div class="term-line sys-msg">Waiting for quiz submission...</div>
                <div id="terminal-score" class="term-line" style="color: var(--accent-green); font-size: 1.2rem; font-weight: bold; margin-top: 20px;"></div>
            `,
            instructions: `
                <h3>Comprehensive Module Quiz</h3>
                <p>Test your knowledge across core cybersecurity concepts.</p>
                <div id="quiz-container" style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-bottom: 15px; max-height: 450px; overflow-y: auto;">
                    
                    <div class="quiz-q" data-ans="3">
                        <p><strong>Q1:</strong> Which Snort rule option designates the action to take?</p>
                        <div class="options">
                            <label><input type="radio" name="q1" value="1"> msg</label>
                            <label><input type="radio" name="q1" value="2"> sid</label>
                            <label><input type="radio" name="q1" value="3"> action</label>
                            <label><input type="radio" name="q1" value="4"> flag</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q2:</strong> What is the primary purpose of a SIEM system?</p>
                        <div class="options">
                            <label><input type="radio" name="q2" value="1"> Encrypting traffic</label>
                            <label><input type="radio" name="q2" value="2"> Centralized log management</label>
                            <label><input type="radio" name="q2" value="3"> Pen testing</label>
                        </div>
                    </div>

                     <div class="quiz-q" data-ans="3">
                        <p><strong>Q3:</strong> Which port is used by HTTPS?</p>
                        <div class="options">
                            <label><input type="radio" name="q3" value="1"> 80</label>
                            <label><input type="radio" name="q3" value="2"> 21</label>
                            <label><input type="radio" name="q3" value="3"> 443</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q4:</strong> In the CIA triad, 'I' stands for?</p>
                        <div class="options">
                            <label><input type="radio" name="q4" value="1"> Information</label>
                            <label><input type="radio" name="q4" value="2"> Integrity</label>
                        </div>
                    </div>

                     <div class="quiz-q" data-ans="3">
                        <p><strong>Q5:</strong> Malware demanding payment?</p>
                        <div class="options">
                            <label><input type="radio" name="q5" value="1"> Spyware</label>
                            <label><input type="radio" name="q5" value="2"> Trojan</label>
                            <label><input type="radio" name="q5" value="3"> Ransomware</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="1">
                        <p><strong>Q6:</strong> IDS stands for?</p>
                        <div class="options">
                            <label><input type="radio" name="q6" value="1"> Intrusion Detection System</label>
                            <label><input type="radio" name="q6" value="2"> Internet Data Security</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q7:</strong> Safe remote management protocol?</p>
                        <div class="options">
                            <label><input type="radio" name="q7" value="1"> Telnet</label>
                            <label><input type="radio" name="q7" value="2"> SSH</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q8:</strong> What is a Zero-Day vulnerability?</p>
                        <div class="options">
                            <label><input type="radio" name="q8" value="1"> Patched securely</label>
                            <label><input type="radio" name="q8" value="2"> Unknown to vendor</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q9:</strong> Phishing is a form of?</p>
                        <div class="options">
                            <label><input type="radio" name="q9" value="1"> Brute Force</label>
                            <label><input type="radio" name="q9" value="2"> Social Engineering</label>
                        </div>
                    </div>

                     <div class="quiz-q" data-ans="2">
                        <p><strong>Q10:</strong> Symmetric encryption example?</p>
                        <div class="options">
                            <label><input type="radio" name="q10" value="1"> RSA</label>
                            <label><input type="radio" name="q10" value="2"> AES</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q11:</strong> Default port for SSH?</p>
                        <div class="options">
                            <label><input type="radio" name="q11" value="1"> 21</label>
                            <label><input type="radio" name="q11" value="2"> 22</label>
                            <label><input type="radio" name="q11" value="3"> 23</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q12:</strong> Tool used to discover hosts and services?</p>
                        <div class="options">
                            <label><input type="radio" name="q12" value="1"> Wireshark</label>
                            <label><input type="radio" name="q12" value="2"> Nmap</label>
                            <label><input type="radio" name="q12" value="3"> Burp Suite</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="1">
                        <p><strong>Q13:</strong> MFA stands for?</p>
                        <div class="options">
                            <label><input type="radio" name="q13" value="1"> Multi-Factor Authentication</label>
                            <label><input type="radio" name="q13" value="2"> Main Frame Access</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q14:</strong> Cross-Site Scripting (XSS) primarily targets?</p>
                        <div class="options">
                            <label><input type="radio" name="q14" value="1"> Databases</label>
                            <label><input type="radio" name="q14" value="2"> Web Browsers</label>
                            <label><input type="radio" name="q14" value="3"> Routers</label>
                        </div>
                    </div>

                    <div class="quiz-q" data-ans="2">
                        <p><strong>Q15:</strong> Firewalls operate primarily at which OSI layer?</p>
                        <div class="options">
                            <label><input type="radio" name="q15" value="1"> Layer 1 (Physical)</label>
                            <label><input type="radio" name="q15" value="2"> Layer 3/4 (Network/Transport)</label>
                            <label><input type="radio" name="q15" value="3"> Layer 2 (Data Link)</label>
                        </div>
                    </div>
                </div>
                <button id="submit-quiz" class="btn btn-primary btn-sm" style="padding: 10px 20px;">Submit Answers & View Score</button>
                <div id="quiz-result-msg" style="margin-top: 15px; font-weight: bold; color: var(--accent-green);"></div>
            `,
            network: `
                <h3>Assessment Logs</h3>
                <p>Metrics will appear here after submission.</p>
            `,
            initHook: () => {
                // Initialize Quiz Logic when view loads
                setTimeout(() => {
                    const submitBtn = document.getElementById('submit-quiz');
                    const resultMsg = document.getElementById('quiz-result-msg');
                    const terminalScoreDisplay = document.getElementById('terminal-score');

                    if (submitBtn) {
                        submitBtn.addEventListener('click', () => {
                            const questions = document.querySelectorAll('.quiz-q');
                            let score = 0;
                            let answered = 0;

                            questions.forEach(q => {
                                const correctAns = q.getAttribute('data-ans');
                                const selected = q.querySelector('input[type="radio"]:checked');
                                if (selected) {
                                    answered++;
                                    if (selected.value === correctAns) score++;
                                }
                            });

                            if (answered < 15) {
                                resultMsg.style.color = 'var(--accent-warning)';
                                resultMsg.textContent = `Please answer all questions. (Answered: ${answered}/15)`;
                                return;
                            }

                            const finalPercentage = Math.round((score / 15) * 100);
                            resultMsg.style.color = 'var(--accent-green)';
                            resultMsg.textContent = `Submitted successfully! Check Terminal for breakdown.`;

                            terminalScoreDisplay.innerHTML = `
                                <br>> Calculating results...
                                <br>> Answers received: ${answered}/15
                                <br>> Correct Answers: ${score}/15
                                <br>> Final Grade: ${finalPercentage}% 
                                <br><br>[${finalPercentage >= 80 ? 'PASSED' : 'NEEDS PRACTICE'}]
                            `;
                        });
                    }
                }, 100);
            }
        }
    };

    // Merge massive auto-generated arrays
    if (typeof APP_DATA !== 'undefined') {
        Object.assign(viewData, APP_DATA.labs);
        Object.assign(viewData, APP_DATA.scenarios);

        // Dynamically populate Labs Menu
        const labsGrid = document.getElementById('labs-grid');
        if (labsGrid) {
            for (let targetKey in APP_DATA.labs) {
                const lp = APP_DATA.labs[targetKey];
                const card = document.createElement('div');
                card.className = 'feature-card glass-panel';
                card.setAttribute('data-target', targetKey);
                card.innerHTML = `
                    <h3 style="margin-bottom:15px; color:var(--accent-blue);">${lp.title}</h3>
                    <p style="margin-bottom:20px; color:var(--text-secondary);">Simulated tactical environment. Follow the 10-step instructions carefully.</p>
                    <button class="btn btn-primary btn-sm">Launch Lab &rarr;</button>
                `;
                labsGrid.appendChild(card);
            }
        }

        // Dynamically populate Scenarios Menu
        const scGrid = document.getElementById('scenarios-grid');
        if (scGrid) {
            for (let targetKey in APP_DATA.scenarios) {
                const sp = APP_DATA.scenarios[targetKey];
                const card = document.createElement('div');
                card.className = 'feature-card glass-panel';
                card.setAttribute('data-target', targetKey);
                card.innerHTML = `
                    <h3 style="margin-bottom:15px; color:var(--accent-warning);">${sp.title}</h3>
                    <p style="margin-bottom:20px; color:var(--text-secondary);">Respond to active telemetry and mitigate anomalous behavior.</p>
                    <button class="btn btn-outline btn-sm">Analyze Incident &rarr;</button>
                `;
                scGrid.appendChild(card);
            }
        }
    }

    let currentViewType = 'labs-view';

    // Reconstruct valid feature cards array
    featureCards = document.querySelectorAll('.feature-card[data-target]');
    // Open Interactive View from Features
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            if (viewData[target]) {
                currentViewType = target;

                // Update content
                viewTitle.textContent = viewData[target].title;
                terminalOutput.innerHTML = viewData[target].terminal;

                // Reset tabs
                panelTabs.forEach(t => t.classList.remove('active'));
                panelTabs[0].classList.add('active');
                instructionsContent.innerHTML = viewData[target].instructions;

                // Navigate SPA to interactive view
                navigateTo('#interactive-view');

                // Run specific view hooks and attach terminal logic
                if (target !== 'assessments-view') {
                    attachTerminalInput();
                } else if (viewData['assessments-view'].initHook) {
                    viewData['assessments-view'].initHook();
                }
            }
        });
    });

    // Close Interactive View (Back button)
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (currentViewType.includes('threats')) navigateTo('#scenarios-menu');
            else if (currentViewType.includes('assessments')) navigateTo('#features');
            else navigateTo('#labs-menu');
        });
    }

    const dashBtns = document.querySelectorAll('.back-to-dash-btn');
    dashBtns.forEach(btn => btn.addEventListener('click', () => navigateTo('#features')));

    // Handle Tabs inside Interactive View
    panelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            panelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');
            if (viewData[currentViewType] && viewData[currentViewType][tabName]) {
                instructionsContent.innerHTML = viewData[currentViewType][tabName];
            }
        });
    });

    // Custom style fixes for quiz options wrapping
    const style = document.createElement('style');
    style.innerHTML = `
        .options { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; margin-left: 15px; font-size: 0.9rem;}
        .options label { cursor: pointer; display: flex; align-items: center; gap: 8px;}
        .options input { accent-color: var(--accent-blue); }
        .quiz-q { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); }
    `;
    document.head.appendChild(style);

    // Curriculum Notes Logic
    const notesData = {
        'networking': {
            title: '1. Fundamentals of Networking',
            content: `
                <h3 style="color: var(--accent-blue); margin-bottom: 15px;">OSI Model Overview</h3>
                <p>The Open Systems Interconnection (OSI) model defines a networking framework to implement protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, and proceeding to the bottom layer, over the channel to the next station and back up the hierarchy.</p>
                <ul style="margin-left: 20px; margin-bottom: 20px;">
                    <li><strong>Layer 7 (Application):</strong> Network process to application.</li>
                    <li><strong>Layer 4 (Transport):</strong> End-to-end connections and reliability.</li>
                    <li><strong>Layer 3 (Network):</strong> Path determination and logical addressing (IP).</li>
                </ul>
                <h3 style="color: var(--accent-blue); margin-bottom: 15px;">Common Protocols</h3>
                <p><strong>HTTP/HTTPS:</strong> Ports 80 and 443. Web traffic.<br>
                <strong>DNS:</strong> Port 53. Resolves domain names to IP addresses.<br>
                <strong>FTP/SSH:</strong> Ports 21 and 22. File transfer and secure shell access.</p>
            `
        },
        'malware': {
            title: '2. Malware & Attack Vectors',
            content: `
                <h3 style="color: var(--accent-blue); margin-bottom: 15px;">Types of Malware</h3>
                <p><strong>Ransomware:</strong> Encrypts user files or entire systems, demanding a ransom for the decryption key.</p>
                <p><strong>Trojans:</strong> Malicious code masquerading as a benign application or embedded within one.</p>
                <p><strong>Worms:</strong> Self-replicating malware that spreads across networks without human interaction.</p>
                <h3 style="color: var(--accent-blue); margin-top: 25px; margin-bottom: 15px;">Common Attack Vectors</h3>
                <ul style="margin-left: 20px;">
                    <li><strong>Phishing:</strong> Social engineering via email to steal credentials or drop malware.</li>
                    <li><strong>Exploiting Vulnerabilities:</strong> Leveraging unpatched software (Zero-Days or known CVEs).</li>
                    <li><strong>Brute Force:</strong> Repeatedly guessing passwords to gain unauthorized access.</li>
                </ul>
            `
        },
        'defense': {
            title: '3. Defense in Depth Strategy',
            content: `
                <h3 style="color: var(--accent-blue); margin-bottom: 15px;">What is Defense in Depth?</h3>
                <p>An information security approach in which a series of security mechanisms and controls are layered throughout a computer network to protect the confidentiality, integrity, and availability of the network and the data within.</p>
                <h3 style="color: var(--accent-blue); margin-top: 25px; margin-bottom: 15px;">Key Layers</h3>
                <ul style="margin-left: 20px;">
                    <li><strong>Perimeter Security:</strong> Firewalls, VPNs, and Edge IPS.</li>
                    <li><strong>Network Security:</strong> Network segmentation, internal IDS/IPS, and VLANs.</li>
                    <li><strong>Endpoint Security:</strong> EDR/XDR, Antivirus, and Host-based firewalls.</li>
                    <li><strong>Application Security:</strong> Web Application Firewalls (WAF), secure coding practices.</li>
                    <li><strong>Data Security:</strong> Encryption at rest and in transit, Access Controls (IAM).</li>
                </ul>
            `
        }
    };

    const notesKeys = ['networking', 'malware', 'defense'];
    const curriBtns = document.querySelectorAll('#curriculum .feature-card .btn-text');
    curriBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const key = notesKeys[index];
            if (notesData[key]) {
                document.getElementById('note-title').textContent = notesData[key].title;
                // Output massive data if it exists rather than minimal
                if (typeof APP_DATA !== 'undefined' && APP_DATA.notes[key]) {
                    document.getElementById('note-content').innerHTML = APP_DATA.notes[key];
                } else {
                    document.getElementById('note-content').innerHTML = notesData[key].content;
                }
                navigateTo('#notes-view');
            }
        });
    });

    const backToCurrBtn = document.querySelector('.back-to-curr-btn');
    if (backToCurrBtn) {
        backToCurrBtn.addEventListener('click', () => {
            navigateTo('#curriculum');
        });
    }

    // Default route on load
    const hash = window.location.hash || '#home';
    if (hash === '#interactive-view') navigateTo('#features'); // Prevent direct load to empty interactive view
    else navigateTo(hash);
});
