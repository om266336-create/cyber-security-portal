
const APP_DATA = {
        notes: {
                networking: `
<h3 style='color:var(--accent-blue);margin-bottom:15px;'>1. FUNDAMENTALS OF NETWORKING</h3>

Introduction to Networking

Networking is the process of connecting computers, devices, and systems together to share resources, data, and services. A computer network enables communication between devices using wired or wireless technologies. Networks are the backbone of modern communication, enabling the internet, cloud computing, online banking, social media, and business operations.

A network can be as small as two computers connected together or as large as the global Internet.

Types of Networks
1. LAN (Local Area Network)

A LAN connects devices within a small geographical area such as a home, school, or office. It provides high-speed connectivity and is usually privately owned.

Features:

High speed

Low latency

Limited geographical coverage

2. MAN (Metropolitan Area Network)

A MAN covers a larger area such as a city. It connects multiple LANs within a metropolitan region.

3. WAN (Wide Area Network)

A WAN covers a large geographical area such as countries or continents. The best example of a WAN is the Internet.

4. PAN (Personal Area Network)

A small network used for personal devices like Bluetooth connections between phone and laptop.

Network Topologies

Topology refers to the physical or logical layout of a network.

1. Bus Topology

All devices share a single communication line.

Simple and low cost

If main cable fails, entire network fails

2. Star Topology

All devices connect to a central hub or switch.

Easy to manage

If central device fails, network stops

3. Ring Topology

Devices connected in circular form.

Data travels in one direction

Failure in one device can affect entire network

4. Mesh Topology

Each device connects to multiple devices.

High reliability

Expensive and complex

5. Hybrid Topology

Combination of two or more topologies.

Networking Devices
1. Hub

A basic device that connects multiple devices in a LAN and broadcasts data to all connected devices.

2. Switch

More intelligent than hub. It forwards data only to the intended device using MAC addresses.

3. Router

Connects different networks and routes data using IP addresses.

4. Modem

Converts digital signals to analog and vice versa.

5. Access Point

Provides wireless connectivity in a network.

6. Firewall

A security device that monitors and filters network traffic.

OSI Model

The OSI (Open Systems Interconnection) model is a 7-layer framework that explains how data travels in a network.

1. Physical Layer

Handles physical transmission of data (cables, voltage signals).

2. Data Link Layer

Responsible for MAC addressing and error detection.

3. Network Layer

Handles logical addressing and routing (IP).

4. Transport Layer

Provides reliable data transfer (TCP/UDP).

5. Session Layer

Manages sessions between applications.

6. Presentation Layer

Handles encryption and data formatting.

7. Application Layer

Provides services to end users (HTTP, FTP, SMTP).

TCP/IP Model

The TCP/IP model is widely used in real-world networking.

Layers:

Network Access

Internet

Transport

Application

TCP/IP is simpler than OSI and forms the basis of the Internet.

IP Addressing

An IP address uniquely identifies a device on a network.

Types of IP Addresses:

IPv4 (32-bit)

IPv6 (128-bit)

Private IP Ranges:

10.0.0.0 – 10.255.255.255

172.16.0.0 – 172.31.255.255

192.168.0.0 – 192.168.255.255

Subnetting

Subnetting divides a network into smaller networks to improve performance and security.

Benefits:

Efficient IP usage

Reduced network congestion

Better management

DNS (Domain Name System)

DNS translates domain names into IP addresses.
Example:
www.google.com
 → IP address

Network Protocols
HTTP / HTTPS

Used for web communication.

FTP

Used for file transfer.

SMTP

Used for sending emails.

POP3 / IMAP

Used for receiving emails.

TCP

Reliable, connection-oriented.

UDP

Faster, connectionless.

Network Security Basics

Networking also includes protecting data from unauthorized access.

Key concepts:

Confidentiality

Integrity

Availability (CIA triad)

Bandwidth and Latency

Bandwidth: Maximum data transfer capacity.
Latency: Delay in data transmission.

Wireless Networking

Technologies include:

Wi-Fi

Bluetooth

Cellular networks

Wireless networks are convenient but more vulnerable to attacks.

Cloud Networking

Cloud providers like:

Amazon Web Services (AWS)

Microsoft Azure

Google Cloud Platform

Provide virtual networking solutions.

Conclusion

Networking fundamentals form the foundation of cybersecurity, cloud computing, IoT, and modern IT systems. Understanding network types, devices, protocols, and models helps in designing efficient and secure communication systems.
`,
                malware: `
<h3 style='color:var(--accent-purple);margin-bottom:15px;'>2. MALWARE AND ATTACK VECTORS</h3>

Introduction

Malware stands for malicious software. It is designed to damage, disrupt, steal data, or gain unauthorized access to systems.

Cyber attackers use various attack vectors (methods) to deliver malware into systems.

Types of Malware
1. Virus

Attaches itself to a legitimate file and spreads when the file is executed.

2. Worm

Self-replicating malware that spreads without user interaction.

3. Trojan Horse

Disguised as legitimate software but performs malicious actions.

4. Ransomware

Encrypts files and demands payment for decryption.

5. Spyware

Secretly monitors user activities.

6. Adware

Displays unwanted advertisements.

7. Rootkit

Hides malicious activity and gains administrator access.

8. Keylogger

Records keystrokes to steal passwords.

Attack Vectors
1. Phishing

Fraudulent emails to trick users into revealing sensitive data.

2. Spear Phishing

Targeted phishing attack.

3. Malicious Attachments

Infected documents sent via email.

4. Drive-by Download

Malware downloaded automatically when visiting a compromised website.

5. USB Devices

Infected USB drives spreading malware.

6. Exploiting Vulnerabilities

Attackers exploit software bugs.

7. Social Engineering

Manipulating people to give confidential information.

Ransomware Attacks

Process:

Infection

Encryption

Ransom demand

Payment request (usually cryptocurrency)

Impact:

Financial loss

Data loss

Business downtime

Botnets

A network of infected computers controlled by attacker.

Used for:

DDoS attacks

Spam campaigns

Data theft

Zero-Day Attacks

Exploits vulnerabilities before developers release patches.

Advanced Persistent Threat (APT)

Long-term targeted attacks usually by skilled attackers.

Indicators of Malware Infection

Slow system

Unknown programs

High network usage

Pop-ups

Disabled antivirus

Prevention Techniques

Antivirus software

Firewalls

Regular updates

Strong passwords

Multi-factor authentication

Malware Lifecycle

Delivery

Exploitation

Installation

Command & Control

Execution

Impact of Malware

Financial loss

Identity theft

Data breach

Reputation damage

Conclusion

Malware continues to evolve. Understanding types of malware and attack vectors helps organizations and individuals protect themselves effectively.
`,
                defense: `
<h3 style='color:var(--accent-green);margin-bottom:15px;'>3. DEFENCE IN DEPTH STRATEGY</h3>

Introduction

Defence in Depth is a cybersecurity strategy that uses multiple layers of security controls to protect systems. If one layer fails, other layers continue to provide protection.

Concept of Layered Security

Instead of relying on a single security mechanism, multiple controls are placed at different levels:

Physical

Network

Host

Application

Data

User

Layers of Defence
1. Physical Security

CCTV

Biometric access

Locked server rooms

2. Perimeter Security

Firewalls

Intrusion Detection Systems (IDS)

Intrusion Prevention Systems (IPS)

3. Network Security

VLANs

Network segmentation

VPN

4. Endpoint Security

Antivirus

Patch management

Device encryption

5. Application Security

Secure coding

Web Application Firewalls

6. Data Security

Encryption

Backup

Data loss prevention

7. Identity and Access Management

Strong authentication

Role-based access control

Multi-factor authentication

Security Policies

Organizations must implement:

Password policy

Incident response policy

Backup policy

Monitoring and Logging

Continuous monitoring helps detect attacks early.

Tools:

SIEM systems

Log analyzers

Incident Response

Steps:

Identification

Containment

Eradication

Recovery

Lessons learned

Zero Trust Model

Trust no user or device automatically. Always verify.

Benefits of Defence in Depth

Reduces risk

Minimizes damage

Improves resilience

Challenges

Cost

Complexity

Requires skilled professionals

Real-World Example

If a hacker bypasses firewall:

IDS detects intrusion

Endpoint antivirus blocks malware

Access control prevents data access

Backup restores lost data

Conclusion

Defence in Depth ensures strong security by implementing multiple layers of protection. It is essential in today’s complex cyber threat landscape.
`
        },
        labs: {
                "labs-view-1": {
                        "title": "Interactive Lab 1: Tactical Recon & Exploitation",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 1... [OK]</div>
            <div class="term-line sys-msg">Establishing secure tunnel... [OK]</div>
            <div class="terminal-input-line">
                <span class="prompt">root@kali:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 1</h3>
            <p>Perform a thorough security assessment of Target 1 (10.10.1.10).</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Scan host (ping) to verify it is up</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Run an initial nmap port scan</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Identify services (-sV) on open ports</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Run gobuster to find hidden directories</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Find the /hidden-flag path</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Enumerate SSH version on port 22 (-v)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Check for anonymous FTP access</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Analyze page source (curl) for clues</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Craft brute-force payload (hydra)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit final flag (submit_flag [flag])</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Start with <code>ping 10.10.1.10</code>. Use <code>submit_flag COMPROMISED</code> at the end.</p>
            </div>
        `,
                        "network": "<h3>Target Subnet 1</h3><p>IP: 10.10.1.10</p>"
                },
                "labs-view-2": {
                        "title": "Interactive Lab 2: Web Application SQLi",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 2 (Web Security)... [OK]</div>
            <div class="terminal-input-line">
                <span class="prompt">root@kali:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 2</h3>
            <p>Exploit a vulnerable login form using SQL Injection on 10.10.1.20.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
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
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Start: <code>curl http://10.10.1.20</code>. Use <code>' or 1=1 --</code> in login. Query: <code>union select version()</code>. End: <code>submit_flag SQL_MASTER_2024</code>.</p>
            </div>
        `,
                        "network": "<h3>Target Subnet 2</h3><p>IP: 10.10.1.20</p>"
                },
                "labs-view-3": {
                        "title": "Interactive Lab 3: Privilege Escalation",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 3 (Privesc)... [OK]</div>
            <div class="term-line sys-msg">Logged in as: www-data@prod-web</div>
            <div class="terminal-input-line">
                <span class="prompt">www-data@prod-web:~$</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 3</h3>
            <p>Escalate privileges from low-privilege user to root.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
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
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Check <code>id</code> and <code>sudo -l</code>. Find SUID: <code>find -perm -u=s</code>. Escalate: <code>python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'</code>. End: <code>submit_flag ESCALATED_PRO</code>.</p>
            </div>
        `,
                        "network": "<h3>Target Subnet 3</h3><p>IP: 10.10.2.50</p>"
                },
                "labs-view-4": {
                        "title": "Interactive Lab 4: Brute-Force Auditing",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 4 (SSH Brute)... [OK]</div>
            <div class="terminal-input-line">
                <span class="prompt">root@kali:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 4</h3>
            <p>Audit weak SSH credentials on a legacy server.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
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
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Scan port 22: <code>nmap -p 22 172.16.1.15</code>. Run <code>hydra -l admin -P rockyou.txt 172.16.1.15 ssh</code>. End: <code>submit_flag BRUTE_REVENGE</code>.</p>
            </div>
        `,
                        "network": "<h3>Target Subnet 4</h3><p>IP: 172.16.1.15</p>"
                },
                "labs-view-5": {
                        "title": "Interactive Lab 5: Wi-Fi WPA2 Analysis",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 5 (Wireless)... [OK]</div>
            <div class="terminal-input-line">
                <span class="prompt">root@kali:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 5</h3>
            <p>Simulate a WPA2 handshake capture and cracking attempt.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
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
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Start: <code>airmon-ng start wlan0</code>. Scan: <code>airodump-ng wlan0mon</code>. Deauth: <code>aireplay-ng -0 5 -a 00:11:22:33:44:55 wlan0mon</code>. Crack: <code>hashcat -m 22000 handshake.hc22000 rockyou.txt</code>.</p>
            </div>
        `,
                        "network": "<h3>SSID: CorpData_Secure</h3><p>Channel 6 | BSSID: 00:11:22:33:44:55</p>"
                },
                "labs-view-6": {
                        "title": "Interactive Lab 6: Digital Forensics",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 6 (Forensics)... [OK]</div>
            <div class="term-line sys-msg">Mounting disk image: forensic_dump.img</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@lab:~$</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 6</h3>
            <p>Analyze a disk image to find traces of data exfiltration.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
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
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Analyze: <code>mmls forensic_dump.img</code>. Recover: <code>fls -r forensic_dump.img</code>. History: <code>grep History browser_logs</code>. Metadata: <code>exiftool image.jpg</code>. End: <code>submit_flag DIGITAL_DUST</code>.</p>
            </div>
        `,
                        "network": "<h3>Evidence Drive</h3><p>Forensic Dump: forensic_dump.img</p>"
                },
                "labs-view-7": {
                        "title": "Interactive Lab 7: Traffic Analysis",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 7 (Traffic)... [OK]</div>
            <div class="term-line sys-msg">Live monitoring on interface eth0...</div>
            <div class="terminal-input-line">
                <span class="prompt">root@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 7</h3>
            <p>Identify an active C2 (Command & Control) heartbeat in real-time traffic.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. List active connections (ss -tp)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Filter traffic for port 4444</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Capture packets to .pcap</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract hex from TCP stream</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Identify beaconing frequency</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Trace IP to Geolocation</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Detect anomalous DNS requests</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Analyze HTTP User-Agent strings</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Block C2 IP in iptables</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit traffic mitigation flag</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Analyze: <code>ss -tp</code>. Capture: <code>tcpdump -i eth0 port 4444 -w cap.pcap</code>. Block: <code>iptables -A INPUT -s 10.0.0.100 -j DROP</code>. End: <code>submit_flag PCAP_WIZARD</code>.</p>
            </div>
        `,
                        "network": "<h3>Internal LAN</h3><p>Kali (10.0.0.5) <-> Target (10.0.0.100)</p>"
                },
                "labs-view-8": {
                        "title": "Interactive Lab 8: Active Directory Recon",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 8 (AD Enum)... [OK]</div>
            <div class="terminal-input-line">
                <span class="prompt">kali@linux:~$</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 8</h3>
            <p>Perform information gathering on a domain controller.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Discover Domain Controller (DC)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Enumerate LDAP services</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. List AD users (rpcclient)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract domain policy (password)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Run Bloodhound ingestor</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Analyze shortest path to DA</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Check for AS-REP Roasting</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Identify GPO misconfigurations</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Capture NetNTLMv2 hashes</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit domain takeover flag</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Enum: <code>nmap --script ldap 10.10.10.5</code>. Users: <code>rpcclient -U "" 10.10.10.5</code>. ASREPRoast: <code>GetNPUsers.py CORP.LOCAL/</code>. Graph: <code>bloodhound-python</code>. End: <code>submit_flag PTH_MASTER</code>.</p>
            </div>
        `,
                        "network": "<h3>Windows Domain</h3><p>DC-01 (192.168.10.2) | Domain: CORP.LOCAL</p>"
                },
                "labs-view-9": {
                        "title": "Interactive Lab 9: Malware Sandbox",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 9 (Malware)... [OK]</div>
            <div class="term-line sys-msg">Isolated Environment: air-gapped</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@sandbox:~$</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 9</h3>
            <p>Analyze the behavior of an unknown PE executable.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Calculate file hash (sha256sum)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Check strings for API calls</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Perform static import analysis</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Trace registry modifications</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Monitor file system changes</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Identify obfuscation (UPX etc)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Run process tree analysis</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Intercept network callout</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Extract embedded C2 URL</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit malware signature flag</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Static: <code>sha256sum sample.exe</code> &amp; <code>strings sample.exe</code>. Dynamic: <code>get_process_tree</code>. Network: <code>wireshark</code>. End: <code>submit_flag Vbox_Bypass_01</code>.</p>
            </div>
        `,
                        "network": "<h3>Malware Lab</h3><p>Sample: malicious_01.exe</p>"
                },
                "labs-view-10": {
                        "title": "Interactive Lab 10: Cloud Audit (AWS)",
                        "terminal": `
            <div class="term-line sys-msg">Initializing Lab Env 10 (Cloud)... [OK]</div>
            <div class="term-line sys-msg">Connected to: aws-cli-shell --profile audit</div>
            <div class="terminal-input-line">
                <span class="prompt">auditor@cloud:~$</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Lab Objective 10</h3>
            <p>Identify misconfigured cloud resources in a production AWS account.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. List IAM users and roles</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Identify overly permissive policies</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Check for public S3 buckets</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Audit security group rules (SSH/RDP)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Scan for exposed access keys</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Inspect CloudTrail logs</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Verify RDS encryption status</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Check MFA status for root login</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Detect shadow infrastructure</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Submit cloud hardening flag</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">IAM: <code>aws iam list-users</code>. Policies: <code>aws iam list-attached-user-policies</code>. S3: <code>aws s3 ls</code>. Logs: <code>aws cloudtrail lookup-events</code>. End: <code>submit_flag AWS_SHIELD</code>.</p>
            </div>
        `,
                        "network": "<h3>AWS Account</h3><p>Region: us-east-1 | VPC: prod-vpc</p>"
                }
        },
        scenarios: {
                "threats-view-1": {
                        "title": "Threat Scenario 1: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 100 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 1.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 1</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 1.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.1</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 1</h3><p>VLAN 11</p>"
                },
                "threats-view-2": {
                        "title": "Threat Scenario 2: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 200 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 2.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 2</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 2.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.2</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 2</h3><p>VLAN 12</p>"
                },
                "threats-view-3": {
                        "title": "Threat Scenario 3: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 300 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 3.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 3</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 3.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.3</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 3</h3><p>VLAN 13</p>"
                },
                "threats-view-4": {
                        "title": "Threat Scenario 4: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 400 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 4.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 4</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 4.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.4</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 4</h3><p>VLAN 14</p>"
                },
                "threats-view-5": {
                        "title": "Threat Scenario 5: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 500 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 5.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 5</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 5.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.5</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 5</h3><p>VLAN 15</p>"
                },
                "threats-view-6": {
                        "title": "Threat Scenario 6: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 600 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 6.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 6</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 6.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.6</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 6</h3><p>VLAN 16</p>"
                },
                "threats-view-7": {
                        "title": "Threat Scenario 7: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 700 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 7.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 7</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 7.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.7</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 7</h3><p>VLAN 17</p>"
                },
                "threats-view-8": {
                        "title": "Threat Scenario 8: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 800 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 8.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 8</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 8.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.8</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 8</h3><p>VLAN 18</p>"
                },
                "threats-view-9": {
                        "title": "Threat Scenario 9: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 900 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 9.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 9</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 9.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.9</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 9</h3><p>VLAN 19</p>"
                },
                "threats-view-10": {
                        "title": "Threat Scenario 10: Advanced Persistent Threat Analysis",
                        "terminal": `
            <div class="term-line sys-msg">[!] SIEM ALERT 1000 TRIGGRED</div>
            <div class="term-line error-msg" style="color: #ff3366;">[CRITICAL] Anomalous activity detected in Sector 10.</div>
            <div class="terminal-input-line">
                <span class="prompt">analyst@soc:~#</span>
                <input type="text" class="terminal-input" autofocus autocomplete="off" spellcheck="false">
            </div>
        `,
                        "instructions": `
            <h3>Scenario Objective 10</h3>
            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 10.</p>
            <h4>Tasks (10 Steps):</h4>
            <div class="task-list">
                <label class="task-item"><input type="checkbox" disabled> <span>1. Review SIEM alerts for endpoint</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>2. Isolate infected host from the network</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>3. Halt lateral movement protocols</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>5. Upload hash to Threat Intel database</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>6. Search logs for other compromised hosts</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>7. Identify initial phishing vector</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>9. Restore from immutable backups</span></label>
                <label class="task-item"><input type="checkbox" disabled> <span>10. Re-enable traffic and verify</span></label>
            </div>
            <h4 style="margin-top: 20px;">Walkthrough:</h4>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;">
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Type <code>get_process_tree -ip 10.0.5.10</code> to inspect. Use <code>block_ip</code> to mitigate.</p>
            </div>
        `,
                        "network": "<h3>Incident Sector 10</h3><p>VLAN 20</p>"
                }
        }
};
