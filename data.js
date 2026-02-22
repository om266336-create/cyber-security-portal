
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
    labs: {"labs-view-1": {"title": "Interactive Lab 1: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 1... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 1</h3>\n            <p>Perform a thorough security assessment of Target 1 (10.10.1.10).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 1</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 1</h3><p>IP: 10.10.1.10</p>"}, "labs-view-2": {"title": "Interactive Lab 2: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 2... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 2</h3>\n            <p>Perform a thorough security assessment of Target 2 (10.10.1.20).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 2</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 2</h3><p>IP: 10.10.1.20</p>"}, "labs-view-3": {"title": "Interactive Lab 3: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 3... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 3</h3>\n            <p>Perform a thorough security assessment of Target 3 (10.10.1.30).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 3</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 3</h3><p>IP: 10.10.1.30</p>"}, "labs-view-4": {"title": "Interactive Lab 4: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 4... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 4</h3>\n            <p>Perform a thorough security assessment of Target 4 (10.10.1.40).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 4</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 4</h3><p>IP: 10.10.1.40</p>"}, "labs-view-5": {"title": "Interactive Lab 5: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 5... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 5</h3>\n            <p>Perform a thorough security assessment of Target 5 (10.10.1.50).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 5</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 5</h3><p>IP: 10.10.1.50</p>"}, "labs-view-6": {"title": "Interactive Lab 6: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 6... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 6</h3>\n            <p>Perform a thorough security assessment of Target 6 (10.10.1.60).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 6</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 6</h3><p>IP: 10.10.1.60</p>"}, "labs-view-7": {"title": "Interactive Lab 7: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 7... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 7</h3>\n            <p>Perform a thorough security assessment of Target 7 (10.10.1.70).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 7</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 7</h3><p>IP: 10.10.1.70</p>"}, "labs-view-8": {"title": "Interactive Lab 8: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 8... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 8</h3>\n            <p>Perform a thorough security assessment of Target 8 (10.10.1.80).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 8</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 8</h3><p>IP: 10.10.1.80</p>"}, "labs-view-9": {"title": "Interactive Lab 9: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 9... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 9</h3>\n            <p>Perform a thorough security assessment of Target 9 (10.10.1.90).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 9</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 9</h3><p>IP: 10.10.1.90</p>"}, "labs-view-10": {"title": "Interactive Lab 10: Tactical Recon & Exploitation", "terminal": "\n            <div class=\"term-line sys-msg\">Initializing Lab Env 10... [OK]</div>\n            <div class=\"term-line sys-msg\">Establishing secure tunnel... [OK]</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">root@kali:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Lab Objective 10</h3>\n            <p>Perform a thorough security assessment of Target 10 (10.10.1.100).</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Scan host to verify it is up</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Run an initial nmap port scan</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Identify the service on port 80</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Run gobuster to find hidden directories</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Find the /hidden-flag path</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Enumerate SSH version on port 22</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Check for anonymous FTP access</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Analyze webpage source code for clues</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Craft initial brute-force payload</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Submit final root flag for target 10</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>nmap</code> or <code>gobuster</code> in the terminal.</p>\n            </div>\n        ", "network": "<h3>Target Subnet 10</h3><p>IP: 10.10.1.100</p>"}},
    scenarios: {"threats-view-1": {"title": "Threat Scenario 1: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 100 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 1.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 1</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 1.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.1</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 1</h3><p>VLAN 11</p>"}, "threats-view-2": {"title": "Threat Scenario 2: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 200 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 2.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 2</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 2.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.2</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 2</h3><p>VLAN 12</p>"}, "threats-view-3": {"title": "Threat Scenario 3: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 300 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 3.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 3</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 3.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.3</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 3</h3><p>VLAN 13</p>"}, "threats-view-4": {"title": "Threat Scenario 4: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 400 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 4.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 4</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 4.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.4</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 4</h3><p>VLAN 14</p>"}, "threats-view-5": {"title": "Threat Scenario 5: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 500 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 5.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 5</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 5.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.5</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 5</h3><p>VLAN 15</p>"}, "threats-view-6": {"title": "Threat Scenario 6: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 600 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 6.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 6</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 6.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.6</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 6</h3><p>VLAN 16</p>"}, "threats-view-7": {"title": "Threat Scenario 7: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 700 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 7.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 7</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 7.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.7</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 7</h3><p>VLAN 17</p>"}, "threats-view-8": {"title": "Threat Scenario 8: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 800 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 8.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 8</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 8.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.8</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 8</h3><p>VLAN 18</p>"}, "threats-view-9": {"title": "Threat Scenario 9: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 900 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 9.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 9</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 9.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.9</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 9</h3><p>VLAN 19</p>"}, "threats-view-10": {"title": "Threat Scenario 10: Advanced Persistent Threat Analysis", "terminal": "\n            <div class=\"term-line sys-msg\">[!] SIEM ALERT 1000 TRIGGRED</div>\n            <div class=\"term-line error-msg\" style=\"color: #ff3366;\">[CRITICAL] Anomalous activity detected in Sector 10.</div>\n            <div class=\"terminal-input-line\">\n                <span class=\"prompt\">analyst@soc:~#</span>\n                <input type=\"text\" class=\"terminal-input\" autofocus autocomplete=\"off\" spellcheck=\"false\">\n            </div>\n        ", "instructions": "\n            <h3>Scenario Objective 10</h3>\n            <p>Contain the outbreak, identify the entry vector, and restore operations safely for Sector 10.</p>\n            <h4>Tasks (10 Steps):</h4>\n            <div class=\"task-list\">\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>1. Review SIEM alerts for endpoint</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>2. Isolate infected host from the network</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>3. Halt lateral movement protocols</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>4. Extract malicious executable hash (get_process_tree)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>5. Upload hash to Threat Intel database</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>6. Search logs for other compromised hosts</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>7. Identify initial phishing vector</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>8. Block malicious sender domain (block_ip)</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>9. Restore from immutable backups</span></label>\n                <label class=\"task-item\"><input type=\"checkbox\" disabled> <span>10. Re-enable traffic and verify</span></label>\n            </div>\n            <h4 style=\"margin-top: 20px;\">Walkthrough:</h4>\n            <div style=\"background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 10px;\">\n                <p style=\"color: var(--text-secondary); font-size: 0.9rem;\">Type <code>get_process_tree -ip 10.0.5.10</code> to inspect. Use <code>block_ip</code> to mitigate.</p>\n            </div>\n        ", "network": "<h3>Incident Sector 10</h3><p>VLAN 20</p>"}}
};
