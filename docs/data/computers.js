(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.computers = {
  id: 'computers',
  name: 'Computers & IT',
  color: '#e65c00',
  icon: '💻',
  chapters: [
    {
      id: 'computer-aptitude',
      name: 'Computer Aptitude',
      topics: [{
        id: 'computer-aptitude',
        title: 'Computer Aptitude — Basics',
        content: T('Computer Aptitude — Basics',
          'Everything you need to know about what a computer is and how it works at the most basic level.',
          H.h2('What is a Computer?') +
          H.p('A <strong>computer</strong> is an electronic machine that takes data (input), works on it (process), and gives a result (output). It follows instructions called <strong>programs</strong>.') +
          H.p('Example: When you type on a keyboard and see letters on the screen — that is a computer working!') +
          H.h2('Characteristics of a Computer') +
          tbl(['Characteristic', 'Meaning', 'Daily Example'],
            [
              ['Speed', 'Works in nanoseconds (very fast)', 'Calculates lakhs of sums in one second'],
              ['Accuracy', 'Gives correct results if input is correct', 'Bank balance never wrong due to math error'],
              ['Diligence', 'Never gets tired', 'Runs 24×7 at ATM machines'],
              ['Versatility', 'Can do many different tasks', 'Same PC for games, study, and video calls'],
              ['Storage', 'Can save huge amounts of data', 'Photos, files, movies on hard disk'],
              ['No IQ', 'Cannot think on its own — only follows commands', 'Needs human to tell it what to do']
            ]) +
          H.h2('IPO Cycle (Input → Process → Output)') +
          H.p('Every computer task follows three steps:') +
          H.ul([
            '<strong>Input</strong> — You give data (typing, clicking, scanning)',
            '<strong>Process</strong> — CPU (brain of computer) works on the data',
            '<strong>Output</strong> — You get the result (on screen, printed paper, sound)'
          ]) +
          H.p('Example: You type "5 + 3" (Input) → CPU calculates (Process) → Screen shows "8" (Output).') +
          H.h2('Types of Computers — By Size') +
          tbl(['Type', 'Size', 'Speed', 'Used For', 'Example'],
            [
              ['Supercomputer', 'Room-sized', 'Fastest in world', 'Weather, space research, nuclear science', 'PARAM Siddhi (India)'],
              ['Mainframe', 'Very large', 'Very fast', 'Big banks, railways, airlines', 'IBM zSeries'],
              ['Minicomputer', 'Medium', 'Fast', 'Medium offices, factories', 'Older server systems'],
              ['Microcomputer (PC)', 'Desktop size', 'Normal', 'Home, office, school', 'Desktop, Laptop'],
              ['Tablet', 'Handheld', 'Normal', 'Reading, browsing, apps', 'iPad, Android tablet']
            ]) +
          H.h2('Types of Computers — By Data Handling') +
          tbl(['Type', 'Works With', 'Example', 'Used In'],
            [
              ['Analog', 'Continuous signals (like speedometer needle)', 'Speedometer, thermometer', 'Science labs, old systems'],
              ['Digital', 'Numbers 0 and 1 (discrete data)', 'Your laptop, smartphone', 'Almost everything today'],
              ['Hybrid', 'Both analog and digital', 'Petrol pump meter, ECG machine', 'Special machines']
            ]) +
          H.h2('Uses of Computers in Daily Life') +
          tbl(['Field', 'How Computer Helps', 'Example'],
            [
              ['Banking', 'ATM, online transfer, UPI', 'Withdraw cash without visiting bank'],
              ['Hospitals', 'Patient records, X-ray, surgery planning', 'Doctor checks your old reports on screen'],
              ['Education', 'Online classes, e-books, tests', 'Studying on laptop at home'],
              ['Weather', 'Predicts rain, storms, cyclones', 'IMD uses supercomputers'],
              ['Entertainment', 'Games, movies, music streaming', 'Watching Netflix on phone'],
              ['Transport', 'Train booking, flight tickets', 'IRCTC website booking']
            ]),
          {
            simplyPut: 'Computer = Input → Process → Output machine. It is fast and accurate but cannot think without human instructions.',
            examTip: 'IPO cycle (Input-Process-Output) is asked almost every year. Supercomputer is fastest; Digital computers use 0 and 1.',
            memoryTrick: 'IPO = "I Pay Output" — you Input, computer Processes, you get Output!',
            quickRevision: [
              'Computer = electronic machine that processes data using programs',
              '6 characteristics: Speed, Accuracy, Diligence, Versatility, Storage, No IQ',
              'IPO Cycle: Input → Process → Output',
              'By size: Super > Mainframe > Mini > Micro (PC/Laptop)',
              'By data: Analog (continuous), Digital (0/1), Hybrid (both)',
              'Supercomputer = fastest; used for weather and research',
              'Digital computers are most common today'
            ],
            examAsk: 'What is IPO cycle? / Which computer type is fastest? / Difference between analog and digital computer?'
          })
      }]
    },
    {
      id: 'history-of-computers',
      name: 'History of Computers',
      topics: [{
        id: 'history-of-computers',
        title: 'History of Computers & Inventions',
        content: T('History of Computers & Inventions',
          'How computers evolved from huge room-sized machines to the smartphones in your pocket.',
          H.h2('Generations of Computers') +
          tbl(['Generation', 'Period', 'Technology', 'Example Machine', 'Key Feature'],
            [
              ['1st Generation', '1940–1956', 'Vacuum Tubes', 'ENIAC, UNIVAC', 'Very large, hot, consumed lots of electricity'],
              ['2nd Generation', '1956–1963', 'Transistors', 'IBM 1401', 'Smaller, faster, more reliable than vacuum tubes'],
              ['3rd Generation', '1964–1971', 'Integrated Circuits (IC)', 'IBM 360', 'Even smaller; operating systems introduced'],
              ['4th Generation', '1971–Present', 'Microprocessors (VLSI)', 'Intel 4004, Personal Computers', 'PCs became possible; very fast and cheap'],
              ['5th Generation', 'Present–Future', 'AI, Quantum Computing', 'AI systems, Quantum computers', 'Artificial Intelligence and machine learning']
            ]) +
          H.h2('Key Inventors & Contributors') +
          tbl(['Person', 'Contribution', 'Year', 'Why Important'],
            [
              ['Charles Babbage', 'Designed Analytical Engine (first concept of computer)', '1837', 'Called "Father of the Computer"'],
              ['Ada Lovelace', 'First computer programmer (wrote algorithm for Babbage machine)', '1843', 'Called "First Programmer"'],
              ['Alan Turing', 'Concept of Turing Machine; broke Enigma code in WWII', '1936', 'Father of modern computing theory'],
              ['John Von Neumann', 'Von Neumann architecture (stored program concept)', '1945', 'Modern computers still follow this design'],
              ['Jack Kilby', 'Invented Integrated Circuit (IC)', '1958', 'Made 3rd generation computers possible'],
              ['Tim Berners-Lee', 'Invented World Wide Web (WWW)', '1991', 'Made internet useful for everyone']
            ]) +
          H.h2('Important Computer Milestones') +
          tbl(['Year', 'Event', 'Significance'],
            [
              ['1945', 'ENIAC built (first electronic general-purpose computer)', 'First large-scale electronic computer'],
              ['1971', 'Intel 4004 — first microprocessor', 'Birth of personal computing'],
              ['1981', 'IBM PC launched', 'Personal computers became popular worldwide'],
              ['1985', 'Microsoft Windows 1.0 released', 'GUI (graphical interface) for masses'],
              ['1991', 'Linux created by Linus Torvalds; WWW invented', 'Free OS + internet revolution'],
              ['1998', 'Google founded', 'Search engine changed how we find information'],
              ['2004', 'Facebook launched', 'Social media era began'],
              ['2007', 'Apple iPhone launched', 'Smartphone revolution'],
              ['2022', 'ChatGPT launched (OpenAI)', 'AI chatbots became mainstream']
            ]),
          {
            simplyPut: 'Computers went from vacuum tubes (1st gen) → transistors → ICs → microprocessors → AI (5th gen). Babbage = Father of Computer.',
            dontConfuse: 'Charles Babbage designed the concept; ENIAC was the first working electronic computer (1945). Babbage did NOT build a working computer in his lifetime.',
            examTip: 'Generations table is a favourite question. Remember: 1st = Vacuum tubes, 2nd = Transistors, 3rd = IC, 4th = Microprocessor, 5th = AI.',
            memoryTrick: 'VT-T-IC-MP-AI → Vacuum Tubes, Transistors, Integrated Circuits, MicroProcessors, Artificial Intelligence (1st to 5th gen).',
            quickRevision: [
              '1st Gen: Vacuum tubes (ENIAC) — 1940-56',
              '2nd Gen: Transistors — 1956-63',
              '3rd Gen: Integrated Circuits — 1964-71',
              '4th Gen: Microprocessors — 1971 onwards',
              '5th Gen: AI and Quantum computing',
              'Charles Babbage = Father of Computer',
              'Ada Lovelace = First Programmer',
              'ENIAC 1945 = first electronic general-purpose computer'
            ],
            examAsk: 'Match generation with technology? / Who is father of computer? / What technology was used in 2nd generation?'
          })
      }]
    },
    {
      id: 'input-output-devices',
      name: 'Input & Output Devices',
      topics: [{
        id: 'input-output-devices',
        title: 'Input & Output Devices',
        content: T('Input & Output Devices',
          'Devices that send data INTO the computer (input) and show results FROM the computer (output).',
          H.h2('Input Devices') +
          H.p('Input devices help you <strong>send data</strong> to the computer.') +
          tbl(['Device', 'What It Does', 'Example of Use'],
            [
              ['Keyboard', 'Types letters and numbers', 'Writing an email'],
              ['Mouse', 'Points and clicks on screen', 'Opening a file by clicking'],
              ['Scanner', 'Converts paper document into digital image', 'Scanning your Aadhaar card'],
              ['Barcode Reader', 'Reads barcode lines on products', 'Billing at supermarket'],
              ['OCR', 'Reads printed text from image and converts to editable text', 'Scanning a book page into Word'],
              ['OMR', 'Reads marked circles/boxes on answer sheets', 'Scanning SSC exam answer sheet'],
              ['MICR', 'Reads special magnetic ink characters on cheques', 'Bank cheque processing'],
              ['Joystick', 'Controls movement in games/flight simulators', 'Playing flight simulator game'],
              ['Touchscreen', 'Input by touching the screen directly', 'Using smartphone, ATM screen'],
              ['Light Pen', 'Draws or selects on screen by pointing', 'Design work on special monitors'],
              ['Webcam', 'Captures video/image', 'Video call on Zoom/Google Meet'],
              ['Microphone', 'Records sound/voice', 'Voice typing, recording audio'],
              ['Biometric Reader', 'Reads fingerprint, iris, or face', 'Aadhaar fingerprint login, phone unlock']
            ]) +
          H.h2('Output Devices') +
          H.p('Output devices <strong>show or produce results</strong> from the computer.') +
          tbl(['Device', 'What It Does', 'Types / Example'],
            [
              ['Monitor (Display)', 'Shows visual output on screen', 'CRT (old, bulky), LCD, LED, OLED (modern, thin)'],
              ['Printer', 'Prints text/images on paper', 'Inkjet (home photos), Laser (office), Dot-matrix (bills), 3D (objects)'],
              ['Plotter', 'Prints large drawings, maps, blueprints', 'Architecture floor plans'],
              ['Speakers', 'Produces sound output', 'Music, video call audio'],
              ['Projector', 'Projects screen onto big wall/screen', 'Classroom presentations, cinema']
            ]) +
          H.h2('Monitor Types Comparison') +
          tbl(['Type', 'Full Form', 'Feature', 'Used In'],
            [
              ['CRT', 'Cathode Ray Tube', 'Bulky, heavy, old technology', 'Old TVs and monitors (rare now)'],
              ['LCD', 'Liquid Crystal Display', 'Thin, light, uses backlight', 'Laptops, monitors, TVs'],
              ['LED', 'Light Emitting Diode', 'Better brightness, energy saving', 'Modern TVs and monitors'],
              ['OLED', 'Organic Light Emitting Diode', 'Best colours, thinnest, most expensive', 'Premium phones and TVs']
            ]) +
          H.h2('Printer Types Comparison') +
          tbl(['Type', 'How It Works', 'Best For', 'Speed'],
            [
              ['Inkjet', 'Sprays tiny ink drops on paper', 'Photos, colour printing at home', 'Slow'],
              ['Laser', 'Uses toner powder and laser beam', 'Office documents, black & white bulk', 'Fast'],
              ['Dot-matrix', 'Hits ribbon with pins (like typewriter)', 'Bills, multi-copy forms (carbon copies)', 'Slow'],
              ['3D Printer', 'Builds object layer by layer', 'Prototypes, models, medical implants', 'Very slow']
            ]),
          {
            simplyPut: 'Input = data goes IN (keyboard, mouse). Output = result comes OUT (monitor, printer). OCR reads text; OMR reads marks; MICR reads cheques.',
            dontConfuse: 'OCR reads text from images. OMR reads filled circles/boxes. MICR reads magnetic ink on cheques — all three are different!',
            examTip: 'OCR vs OMR vs MICR is asked frequently. Remember: OMR = exam answer sheets, MICR = bank cheques, OCR = scanned text documents.',
            memoryTrick: 'I-P-O: Input Pen (keyboard), Process (CPU), Output Paper (printer)!',
            quickRevision: [
              'Input devices send data TO computer',
              'Output devices show results FROM computer',
              'OCR = Optical Character Recognition (text from image)',
              'OMR = Optical Mark Recognition (marked circles on sheets)',
              'MICR = Magnetic Ink Character Recognition (cheques)',
              'Monitor types: CRT → LCD → LED → OLED (oldest to newest)',
              'Printer types: Inkjet, Laser, Dot-matrix, 3D'
            ],
            examAsk: 'What is the difference between OCR and OMR? / Which device reads cheques? / Types of printers?'
          })
      }]
    },
    {
      id: 'storage-devices',
      name: 'Storage Devices',
      topics: [{
        id: 'storage-devices',
        title: 'Storage Devices & Memory',
        content: T('Storage Devices & Memory',
          'Where computers keep data — temporary memory (RAM) and permanent storage (hard disk, USB, cloud).',
          H.h2('Primary vs Secondary Storage') +
          tbl(['Feature', 'Primary Storage (Memory)', 'Secondary Storage'],
            [
              ['Examples', 'RAM, Cache', 'HDD, SSD, CD, DVD, USB, Cloud'],
              ['Speed', 'Very fast', 'Slower than RAM'],
              ['Volatility', 'RAM is volatile (data lost when power off)', 'Non-volatile (data stays after power off)'],
              ['Capacity', 'Smaller (4–32 GB typical)', 'Much larger (256 GB to several TB)'],
              ['Cost per GB', 'Expensive', 'Cheaper'],
              ['Directly used by CPU', 'Yes', 'No — data must be loaded into RAM first']
            ]) +
          H.h2('Storage Devices Comparison') +
          tbl(['Device', 'Type', 'Speed', 'Capacity Range', 'Special Feature'],
            [
              ['HDD', 'Magnetic disk (secondary)', 'Slow', '500 GB – 20 TB', 'Cheap, large capacity, has moving parts'],
              ['SSD', 'Flash memory (secondary)', 'Very fast', '128 GB – 8 TB', 'No moving parts, faster boot time'],
              ['CD', 'Optical disc', 'Slow', '700 MB', 'One-time write (CD-R) or rewritable (CD-RW)'],
              ['DVD', 'Optical disc', 'Slow', '4.7 GB (single layer)', 'Stores movies and software'],
              ['Blu-ray', 'Optical disc', 'Medium', '25–50 GB', 'HD movies, PlayStation games'],
              ['USB Drive (Pen Drive)', 'Flash memory', 'Fast', '8 GB – 1 TB', 'Portable, plug and play'],
              ['Memory Card (SD Card)', 'Flash memory', 'Fast', '2 GB – 1 TB', 'Used in cameras, phones'],
              ['Cloud Storage', 'Remote servers via internet', 'Depends on internet', 'Unlimited plans available', 'Google Drive, OneDrive — access anywhere']
            ]) +
          H.h2('Storage Units & Conversions') +
          tbl(['Unit', 'Full Name', 'Equivalent', 'Example'],
            [
              ['Bit (b)', 'Binary Digit', 'Smallest unit (0 or 1)', 'Basic data unit'],
              ['Nibble', 'Half Byte', '4 bits', 'Rarely used'],
              ['Byte (B)', '8 bits', '1 Byte = 8 bits', 'One English letter = 1 byte'],
              ['KB', 'Kilobyte', '1 KB = 1024 Bytes', 'Short text file'],
              ['MB', 'Megabyte', '1 MB = 1024 KB', 'One photo, one song'],
              ['GB', 'Gigabyte', '1 GB = 1024 MB', 'One movie, phone storage'],
              ['TB', 'Terabyte', '1 TB = 1024 GB', 'Large hard disk'],
              ['PB', 'Petabyte', '1 PB = 1024 TB', 'Big data centres'],
              ['EB', 'Exabyte', '1 EB = 1024 PB', 'Internet traffic per year'],
              ['ZB', 'Zettabyte', '1 ZB = 1024 EB', 'All digital data in world'],
              ['YB', 'Yottabyte', '1 YB = 1024 ZB', 'Theoretical largest unit']
            ]) +
          H.h2('RAM vs ROM') +
          tbl(['Feature', 'RAM', 'ROM'],
            [
              ['Full Form', 'Random Access Memory', 'Read Only Memory'],
              ['Volatility', 'Volatile — data lost on power off', 'Non-volatile — data permanent'],
              ['Read/Write', 'Can read AND write', 'Can only read (mostly)'],
              ['Used For', 'Running programs temporarily', 'Boot instructions (BIOS), firmware'],
              ['Speed', 'Very fast', 'Slower than RAM'],
              ['Types', 'DRAM, SRAM', 'PROM, EPROM, EEPROM, Flash ROM']
            ]) +
          H.h2('Types of RAM & ROM') +
          tbl(['Type', 'Full Form', 'Feature', 'Used In'],
            [
              ['DRAM', 'Dynamic RAM', 'Needs constant refresh, cheaper', 'Main memory in computers'],
              ['SRAM', 'Static RAM', 'Faster, no refresh needed, expensive', 'CPU cache memory'],
              ['PROM', 'Programmable ROM', 'Can be programmed once only', 'Special firmware'],
              ['EPROM', 'Erasable PROM', 'Can be erased using UV light', 'Old firmware chips'],
              ['EEPROM', 'Electrically Erasable PROM', 'Erased electronically, many times', 'BIOS updates'],
              ['Flash ROM', 'Flash Memory', 'Fast, rewritable, non-volatile', 'USB drives, SSDs, phone storage']
            ]),
          {
            simplyPut: 'RAM = temporary working memory (lost when power off). ROM = permanent instructions. HDD = cheap big storage. SSD = fast storage. 1 Byte = 8 bits.',
            dontConfuse: 'RAM is volatile (temporary). ROM is non-volatile (permanent). Both are PRIMARY storage. HDD/SSD are SECONDARY storage.',
            examTip: 'Storage unit conversions (Bit → Byte → KB → MB → GB) are frequently asked. Remember: 1 Byte = 8 bits, and each step is ×1024 (not 1000).',
            memoryTrick: 'Bit-Bite-Byte: Bit (smallest) → Nibble (4 bits) → Byte (8 bits). Then K-M-G-T-P-E-Z-Y (King Makes Great Tea, Please Enjoy Your Breakfast).',
            quickRevision: [
              'Primary storage = RAM (fast, volatile)',
              'Secondary storage = HDD, SSD, USB (permanent)',
              '1 Byte = 8 bits; 1 KB = 1024 Bytes',
              'RAM types: DRAM (main memory), SRAM (cache)',
              'ROM types: PROM, EPROM, EEPROM, Flash ROM',
              'SSD faster than HDD; HDD cheaper per GB',
              'Cloud storage = data on remote servers via internet'
            ],
            examAsk: 'Difference between RAM and ROM? / Convert KB to MB? / Which is faster — HDD or SSD? / What is volatile memory?'
          })
      }]
    },
    {
      id: 'microsoft-windows',
      name: 'Microsoft Windows',
      topics: [{
        id: 'microsoft-windows',
        title: 'Microsoft Windows',
        content: T('Microsoft Windows',
          'The most popular operating system (OS) for personal computers — what you see when you turn on a PC.',
          H.h2('What is an Operating System (OS)?') +
          H.p('An <strong>OS</strong> is software that manages all hardware and software of a computer. It is the link between you and the machine.') +
          H.p('5 main functions of an OS:') +
          H.ul([
            '<strong>Process Management</strong> — Runs multiple programs at once',
            '<strong>Memory Management</strong> — Allocates RAM to programs',
            '<strong>File Management</strong> — Organizes files and folders',
            '<strong>Device Management</strong> — Controls keyboard, mouse, printer etc.',
            '<strong>User Interface</strong> — Shows desktop, icons, menus for you to use'
          ]) +
          H.h2('Windows Versions Timeline') +
          tbl(['Version', 'Year', 'Key Feature'],
            [
              ['Windows 1.0', '1985', 'First Windows with GUI (graphical interface)'],
              ['Windows 3.1', '1992', 'Popular GUI, improved graphics'],
              ['Windows 95', '1995', 'Start Menu introduced, 32-bit OS'],
              ['Windows 98', '1998', 'USB support, Internet Explorer built-in'],
              ['Windows XP', '2001', 'Most popular and stable Windows ever'],
              ['Windows Vista', '2007', 'New look (Aero), but slow and unpopular'],
              ['Windows 7', '2009', 'Fast, stable, widely loved'],
              ['Windows 8', '2012', 'Touch-friendly tiles, removed Start Menu (unpopular)'],
              ['Windows 10', '2015', 'Start Menu back, free upgrade, last numbered version'],
              ['Windows 11', '2021', 'New design, centred taskbar, Android apps support']
            ]) +
          H.h2('Desktop Elements') +
          tbl(['Element', 'What It Is', 'Example Use'],
            [
              ['Desktop', 'Main screen you see after login', 'Background with icons'],
              ['Taskbar', 'Bar at bottom showing open programs', 'Click to switch between Word and Chrome'],
              ['Start Menu', 'Menu with all programs and settings', 'Click Start button (⊞) to open apps'],
              ['Icons', 'Small pictures representing files/programs', 'Double-click Word icon to open Word'],
              ['Folders', 'Containers to organize files', 'Create "Exam Notes" folder for study files'],
              ['Recycle Bin', 'Temporary trash — deleted files go here', 'Restore accidentally deleted file']
            ]) +
          H.h2('File Management Basics') +
          H.ul([
            '<strong>Create</strong> — Right-click → New → Folder/File',
            '<strong>Copy</strong> — Ctrl+C then Ctrl+V (original stays, copy made)',
            '<strong>Move</strong> — Cut (Ctrl+X) then Paste (Ctrl+V) (original removed)',
            '<strong>Delete</strong> — Delete key (goes to Recycle Bin) or Shift+Delete (permanent)',
            '<strong>File Explorer</strong> — Win+E opens it; browse all files and folders',
            '<strong>File Extensions</strong> — .txt (text), .jpg (image), .mp3 (audio), .exe (program)'
          ]) +
          H.h2('Booting Process') +
          tbl(['Term', 'Meaning', 'Example'],
            [
              ['Cold Boot', 'Starting computer from completely OFF state', 'Press power button in morning'],
              ['Warm Boot', 'Restarting without turning power off', 'Click Restart after Windows update'],
              ['BIOS', 'Basic Input Output System — firmware that starts first', 'Shows manufacturer logo on boot'],
              ['UEFI', 'Modern replacement for BIOS — faster, more secure', 'Used in new laptops since ~2010'],
              ['POST', 'Power-On Self Test — checks hardware before loading OS', 'Beeps if RAM is missing or faulty']
            ]) +
          H.h2('Useful Windows Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['Win + D', 'Show/hide desktop'],
              ['Win + E', 'Open File Explorer'],
              ['Win + L', 'Lock computer'],
              ['Win + R', 'Open Run dialog box'],
              ['Win + Tab', 'Switch between open windows'],
              ['Win + I', 'Open Settings'],
              ['Ctrl + Alt + Del', 'Open security screen (Task Manager, lock, sign out)'],
              ['Alt + F4', 'Close current window/program']
            ]),
          {
            simplyPut: 'Windows = OS that manages your PC. Desktop shows icons. Taskbar shows open apps. Recycle Bin holds deleted files. Cold boot = from off; Warm boot = restart.',
            examTip: 'Windows version timeline and booting terms (BIOS, UEFI, POST, Cold/Warm boot) are common exam topics. Windows XP was most popular; Windows 11 is latest.',
            memoryTrick: 'POST = "Power On, Self Test" — computer checks itself before starting Windows, like a doctor checkup before work!',
            quickRevision: [
              'OS manages hardware, software, files, and user interface',
              'Windows 95 introduced Start Menu; XP was most popular',
              'Desktop, Taskbar, Start Menu, Icons, Folders, Recycle Bin',
              'Cold boot = from off; Warm boot = restart',
              'BIOS/UEFI = firmware; POST = hardware self-test on startup',
              'Win+D = desktop, Win+E = explorer, Win+L = lock',
              'Shift+Delete = permanent delete (skips Recycle Bin)'
            ],
            examAsk: 'What is POST? / Difference between cold boot and warm boot? / Which Windows version introduced Start Menu? / Functions of an OS?'
          })
      }]
    },
    {
      id: 'microsoft-office',
      name: 'Microsoft Office',
      topics: [{
        id: 'microsoft-office',
        title: 'Microsoft Office Suite',
        content: T('Microsoft Office Suite',
          'A collection of programs by Microsoft for office work — Word, Excel, PowerPoint, Access, and Outlook.',
          H.h2('What is MS Office?') +
          H.p('<strong>Microsoft Office</strong> is a <strong>software suite</strong> (group of programs) used for office and personal work. All programs share a similar look (Ribbon interface).') +
          H.h2('MS Office Components') +
          tbl(['Application', 'Used For', 'Default File Extension'],
            [
              ['MS Word', 'Creating and editing documents (letters, reports)', '.docx'],
              ['MS Excel', 'Spreadsheets, calculations, data analysis', '.xlsx'],
              ['MS PowerPoint', 'Creating presentations and slideshows', '.pptx'],
              ['MS Access', 'Database management (storing structured data)', '.accdb'],
              ['MS Outlook', 'Email, calendar, contacts, tasks', '.pst (data file)'],
              ['MS OneNote', 'Digital note-taking', '.one'],
              ['MS Publisher', 'Desktop publishing (brochures, flyers)', '.pub']
            ]) +
          H.h2('Office Versions Timeline') +
          tbl(['Version', 'Year', 'Key Change'],
            [
              ['Office 97', '1997', 'Popular suite with Word, Excel, PowerPoint'],
              ['Office 2003', '2003', 'Last version with traditional menus and toolbars'],
              ['Office 2007', '2007', 'Ribbon interface introduced (tabs at top)'],
              ['Office 2010', '2010', 'Improved Ribbon, better graphics'],
              ['Office 2013', '2013', 'Cloud integration with OneDrive'],
              ['Office 2016', '2016', 'Real-time collaboration features'],
              ['Office 2019', '2019', 'One-time purchase (no subscription)'],
              ['Office 2021', '2021', 'Latest one-time purchase version'],
              ['Microsoft 365', '2017–ongoing', 'Subscription model — always latest version + cloud']
            ]) +
          H.h2('Ribbon Interface') +
          H.p('Since Office 2007, all apps use the <strong>Ribbon</strong> — a row of tabs at the top. Each tab has groups of related commands.') +
          tbl(['Tab (Common in All)', 'Contains'],
            [
              ['File', 'Open, Save, Print, Options, Exit'],
              ['Home', 'Most used commands — font, copy/paste, formatting'],
              ['Insert', 'Add tables, images, charts, shapes'],
              ['View', 'Change how you see the document (zoom, gridlines)']
            ]),
          {
            simplyPut: 'MS Office = bundle of Word (documents), Excel (calculations), PowerPoint (presentations), Access (database), Outlook (email).',
            examTip: 'File extensions (.docx, .xlsx, .pptx, .accdb) are asked every year. Office 2007 introduced the Ribbon interface.',
            memoryTrick: 'WEPAO = Word, Excel, PowerPoint, Access, Outlook — the 5 main Office apps for exams!',
            quickRevision: [
              'MS Office = suite of productivity programs',
              'Word = documents (.docx)',
              'Excel = spreadsheets (.xlsx)',
              'PowerPoint = presentations (.pptx)',
              'Access = database (.accdb)',
              'Outlook = email (.pst)',
              'Office 2007 introduced Ribbon interface',
              'Microsoft 365 = subscription; Office 2021 = one-time buy'
            ],
            examAsk: 'Match application with file extension? / Which Office version introduced Ribbon? / What is MS Access used for?'
          })
      }]
    },
    {
      id: 'ms-word',
      name: 'MS Word',
      topics: [{
        id: 'ms-word',
        title: 'MS Word',
        content: T('MS Word',
          'Microsoft Word is used for typing, formatting, and printing documents like letters, reports, and resumes.',
          H.h2('What is MS Word?') +
          H.p('MS Word is a <strong>word processor</strong> — software for creating and editing text documents. It is the most used Office program.') +
          H.h2('Key Features') +
          tbl(['Feature', 'What It Does', 'Example'],
            [
              ['Font & Size', 'Changes text style and size', 'Arial 12 for formal letter'],
              ['Bold/Italic/Underline', 'Emphasizes text (Ctrl+B, Ctrl+I, Ctrl+U)', 'Bold heading, italic book title'],
              ['Alignment', 'Left, Centre, Right, Justify', 'Centre the title of your document'],
              ['Line Spacing', 'Space between lines of text', 'Double spacing for assignments'],
              ['Page Margins', 'Blank space around page edges', '1 inch margin for printing'],
              ['Headers & Footers', 'Text repeated on every page top/bottom', 'Page number in footer'],
              ['Tables', 'Rows and columns for organized data', 'Timetable in a table'],
              ['Images', 'Insert pictures and shapes', 'Company logo in letterhead']
            ]) +
          H.h2('Ribbon Tabs in MS Word') +
          tbl(['Tab', 'Main Commands'],
            [
              ['Home', 'Font, size, bold, copy/paste, alignment, bullets, line spacing'],
              ['Insert', 'Table, picture, shape, page break, header/footer, page number'],
              ['Page Layout', 'Margins, orientation (portrait/landscape), columns, page size'],
              ['References', 'Table of contents, footnotes, citations, bibliography'],
              ['Review', 'Spelling & grammar check, word count, track changes, comments'],
              ['View', 'Print layout, web layout, zoom, ruler, navigation pane']
            ]) +
          H.h2('Mail Merge') +
          H.p('<strong>Mail Merge</strong> creates many personalized documents from one template + one data list.') +
          H.p('Example: One letter template + list of 100 names = 100 personalized letters automatically!') +
          H.ul([
            'Step 1: Write the letter template in Word',
            'Step 2: Connect a data source (Excel list with names, addresses)',
            'Step 3: Insert merge fields (<<Name>>, <<Address>>)',
            'Step 4: Finish merge → Word creates one letter per person'
          ]) +
          H.h2('MS Word Keyboard Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['Ctrl + B', 'Bold'],
              ['Ctrl + I', 'Italic'],
              ['Ctrl + U', 'Underline'],
              ['Ctrl + E', 'Centre align'],
              ['Ctrl + L', 'Left align'],
              ['Ctrl + R', 'Right align'],
              ['Ctrl + J', 'Justify align'],
              ['Ctrl + Z', 'Undo'],
              ['Ctrl + Y', 'Redo'],
              ['Ctrl + S', 'Save'],
              ['Ctrl + C', 'Copy'],
              ['Ctrl + V', 'Paste'],
              ['Ctrl + X', 'Cut'],
              ['Ctrl + A', 'Select all'],
              ['Ctrl + F', 'Find'],
              ['Ctrl + H', 'Find and Replace'],
              ['Ctrl + P', 'Print'],
              ['F7', 'Spelling & Grammar check'],
              ['F12', 'Save As'],
              ['Ctrl + Home', 'Go to beginning of document'],
              ['Ctrl + End', 'Go to end of document']
            ]),
          {
            simplyPut: 'Word = type and format documents. Mail Merge = one letter + name list = many personalized letters.',
            examTip: 'Word shortcuts (Ctrl+B/I/U, Ctrl+Z/Y, F7 for spell check) are frequently asked. Mail Merge uses a template + data source.',
            memoryTrick: 'Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline — BIU in order!',
            quickRevision: [
              'Word = word processor for documents (.docx)',
              'Home tab = font, formatting; Insert tab = tables, images',
              'Mail Merge = template + data list → many documents',
              'Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline',
              'Ctrl+Z = Undo, Ctrl+Y = Redo',
              'F7 = Spelling check, F12 = Save As',
              'Header/Footer = repeated text on every page'
            ],
            examAsk: 'What is Mail Merge? / Shortcut for bold and spell check? / Which tab has page margins?'
          })
      }]
    },
    {
      id: 'ms-powerpoint',
      name: 'MS PowerPoint',
      topics: [{
        id: 'ms-powerpoint',
        title: 'MS PowerPoint',
        content: T('MS PowerPoint',
          'Software for making slide presentations — used in schools, offices, and seminars.',
          H.h2('What is MS PowerPoint?') +
          H.p('MS PowerPoint creates <strong>slideshow presentations</strong> — a series of slides shown one after another on a screen.') +
          H.h2('Key Features') +
          tbl(['Feature', 'What It Does', 'Example'],
            [
              ['Slides', 'Individual pages of the presentation', 'Title slide, content slides'],
              ['Layouts', 'Pre-designed slide formats', 'Title and Content, Two Content, Blank'],
              ['Themes', 'Consistent colours, fonts, and design for all slides', 'Professional blue theme'],
              ['Transitions', 'Animation effect when moving BETWEEN slides', 'Fade, Dissolve, Wipe'],
              ['Animations', 'Movement effect ON elements within a slide', 'Text flies in, image zooms'],
              ['Slide Show Mode', 'Full-screen presentation view', 'Press F5 to start from beginning']
            ]) +
          H.h2('Ribbon Tabs in MS PowerPoint') +
          tbl(['Tab', 'Main Commands'],
            [
              ['Home', 'New slide, layout, font, copy/paste, formatting'],
              ['Insert', 'Picture, shape, chart, table, text box, video, audio'],
              ['Design', 'Themes, slide size, background styles'],
              ['Transitions', 'Effects between slides, timing, sound'],
              ['Animations', 'Entrance, emphasis, exit effects on slide objects'],
              ['Slide Show', 'Start slideshow, rehearse timings, record'],
              ['View', 'Normal, Slide Sorter, Notes Page, zoom']
            ]) +
          H.h2('How to Make a Basic Presentation') +
          H.ul([
            'Step 1: Open PowerPoint → choose a theme',
            'Step 2: Add title on Slide 1 (title slide)',
            'Step 3: Insert New Slide (Ctrl+M) for each topic',
            'Step 4: Add text, images, and bullet points on each slide',
            'Step 5: Apply transitions between slides',
            'Step 6: Press F5 to view slideshow'
          ]) +
          H.h2('MS PowerPoint Keyboard Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['F5', 'Start slideshow from beginning'],
              ['Shift + F5', 'Start slideshow from current slide'],
              ['Esc', 'End slideshow'],
              ['B', 'Black screen during slideshow'],
              ['W', 'White screen during slideshow'],
              ['Ctrl + M', 'Insert new slide'],
              ['Ctrl + D', 'Duplicate current slide'],
              ['Ctrl + Shift + >', 'Increase font size'],
              ['Ctrl + Shift + <', 'Decrease font size']
            ]),
          {
            simplyPut: 'PowerPoint = slides for presentations. Transitions = effect between slides. Animations = effect on objects within a slide. F5 = start show.',
            dontConfuse: 'Transition = effect when moving FROM one slide TO another. Animation = effect on text/image WITHIN a single slide.',
            examTip: 'F5 starts slideshow from beginning; Shift+F5 from current slide. Transition vs Animation difference is commonly asked.',
            memoryTrick: 'F5 = "Full screen Five-star presentation" — press F5 to start your show!',
            quickRevision: [
              'PowerPoint = presentations (.pptx)',
              'Slide = one page; Theme = consistent design',
              'Transition = between slides; Animation = within slide',
              'F5 = start from beginning; Shift+F5 = from current slide',
              'B = black screen; W = white screen during show',
              'Ctrl+M = new slide; Esc = end slideshow'
            ],
            examAsk: 'Difference between transition and animation? / Which key starts slideshow? / What is a theme in PowerPoint?'
          })
      }]
    },
    {
      id: 'ms-excel',
      name: 'MS Excel',
      topics: [{
        id: 'ms-excel',
        title: 'MS Excel',
        content: T('MS Excel',
          'Spreadsheet software for calculations, data tables, charts, and analysis — like a smart digital notebook with maths.',
          H.h2('What is MS Excel?') +
          H.p('MS Excel is a <strong>spreadsheet</strong> program. It organizes data in rows and columns and can do automatic calculations.') +
          H.h2('Key Concepts') +
          tbl(['Term', 'Meaning', 'Example'],
            [
              ['Cell', 'One box where row and column meet', 'Cell A1 = column A, row 1'],
              ['Row', 'Horizontal line of cells', 'Row 1, Row 2... (numbered 1, 2, 3...)'],
              ['Column', 'Vertical line of cells', 'Column A, B, C... (lettered A, B, C...)'],
              ['Worksheet', 'One sheet/tab of data', 'Sheet1, Sheet2 in one file'],
              ['Workbook', 'Entire Excel file with all worksheets', 'Sales2024.xlsx = one workbook'],
              ['Cell Address', 'Column letter + Row number', 'B5 = column B, row 5'],
              ['Range', 'Group of cells', 'A1:D10 = rectangle from A1 to D10'],
              ['Formula', 'Calculation starting with = sign', '=A1+B1 adds two cells']
            ]) +
          H.h2('Cell References') +
          tbl(['Type', 'Example', 'What Happens When Copied', 'When to Use'],
            [
              ['Relative', 'A1', 'Changes when copied (A1 becomes B1)', 'Most formulas'],
              ['Absolute', '$A$1', 'Stays fixed when copied', 'Fixed rate, tax percentage'],
              ['Mixed', '$A1 or A$1', 'One part fixed, one changes', 'Special calculations']
            ]) +
          H.p('Example: Tax rate 18% in cell $B$1 — use absolute reference so it never changes when formula is copied down.') +
          H.h2('Important Excel Functions') +
          tbl(['Function', 'Syntax', 'What It Does', 'Example'],
            [
              ['SUM', '=SUM(A1:A10)', 'Adds all numbers in range', '=SUM(B2:B20) → total sales'],
              ['AVERAGE', '=AVERAGE(A1:A10)', 'Calculates mean (average)', 'Average marks of students'],
              ['MIN', '=MIN(A1:A10)', 'Finds smallest value', 'Lowest temperature'],
              ['MAX', '=MAX(A1:A10)', 'Finds largest value', 'Highest score'],
              ['COUNT', '=COUNT(A1:A10)', 'Counts cells with numbers only', 'How many students scored'],
              ['COUNTA', '=COUNTA(A1:A10)', 'Counts all non-empty cells', 'Total entries including text'],
              ['IF', '=IF(condition, true, false)', 'Gives result based on condition', '=IF(A1>=40,"Pass","Fail")'],
              ['VLOOKUP', '=VLOOKUP(value, table, col, 0)', 'Finds value in table vertically', 'Look up price by product name'],
              ['HLOOKUP', '=HLOOKUP(value, table, row, 0)', 'Finds value in table horizontally', 'Look up data in row headers'],
              ['TODAY', '=TODAY()', 'Inserts today\'s date', 'Auto-updates every day'],
              ['NOW', '=NOW()', 'Inserts current date and time', 'Timestamp'],
              ['ROUND', '=ROUND(A1, 2)', 'Rounds number to decimal places', '=ROUND(3.456, 1) → 3.5'],
              ['COUNTIF', '=COUNTIF(range, criteria)', 'Counts cells matching condition', '=COUNTIF(A:A,"Pass")'],
              ['SUMIF', '=SUMIF(range, criteria, sum_range)', 'Sums cells matching condition', 'Total sales above ₹1000']
            ]) +
          H.h2('Chart Types') +
          tbl(['Chart Type', 'Looks Like', 'Best Used For'],
            [
              ['Column Chart', 'Vertical bars', 'Comparing values across categories'],
              ['Bar Chart', 'Horizontal bars', 'Comparing long category names'],
              ['Line Chart', 'Connected dots/lines', 'Showing trends over time'],
              ['Pie Chart', 'Circle divided into slices', 'Showing parts of a whole (percentages)'],
              ['Scatter Chart', 'Dots on X-Y axes', 'Showing relationship between two variables']
            ]) +
          H.h2('MS Excel Keyboard Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['Ctrl + ;', 'Insert today\'s date'],
              ['F2', 'Edit active cell'],
              ['Ctrl + Shift + L', 'Toggle AutoFilter'],
              ['Alt + =', 'AutoSum (quick SUM formula)'],
              ['Ctrl + T', 'Create table'],
              ['Ctrl + 1', 'Format Cells dialog box'],
              ['F4', 'Repeat last action / toggle absolute reference'],
              ['Ctrl + Arrow', 'Jump to edge of data region'],
              ['Ctrl + Home', 'Go to cell A1']
            ]),
          {
            simplyPut: 'Excel = rows + columns + formulas. Every formula starts with =. $A$1 = absolute (fixed). SUM adds, IF checks condition, VLOOKUP finds data.',
            dontConfuse: 'COUNT counts only numbers. COUNTA counts all non-empty cells (including text). VLOOKUP searches vertically; HLOOKUP searches horizontally.',
            examTip: 'Excel functions (SUM, AVERAGE, IF, VLOOKUP) and absolute reference ($A$1) are top exam topics. Formula always starts with = sign.',
            memoryTrick: 'SUM = Add, AVERAGE = Mean, MIN = Minimum, MAX = Maximum — remember SAMM for the big four!',
            quickRevision: [
              'Cell = row + column intersection (e.g., B5)',
              'Workbook = file; Worksheet = one tab/sheet',
              'Formula starts with = sign',
              '$A$1 = absolute reference (fixed when copied)',
              'SUM, AVERAGE, MIN, MAX, COUNT, IF, VLOOKUP — key functions',
              'Pie chart = parts of whole; Line chart = trends over time',
              'F2 = edit cell; Alt+= = AutoSum'
            ],
            examAsk: 'What is absolute cell reference? / Write formula for Pass/Fail using IF? / Difference between COUNT and COUNTA?'
          })
      }]
    },
    {
      id: 'ms-access',
      name: 'MS Access',
      topics: [{
        id: 'ms-access',
        title: 'MS Access',
        content: T('MS Access',
          'A database program that stores large amounts of structured data in tables — like a digital filing cabinet with search power.',
          H.h2('What is MS Access?') +
          H.p('MS Access is a <strong>Database Management System (DBMS)</strong>. It stores data in organized tables and lets you search, filter, and report on that data easily.') +
          H.h2('Key Concepts') +
          tbl(['Term', 'Meaning', 'Example'],
            [
              ['Table', 'Stores data in rows and columns', 'Student table with Name, Roll No, Marks'],
              ['Query', 'Question you ask the database to get specific data', 'Show all students with marks > 80'],
              ['Form', 'User-friendly screen to enter/view data', 'Student registration form'],
              ['Report', 'Formatted printout of data', 'Class marksheet report'],
              ['Primary Key', 'Unique identifier for each record (no duplicates)', 'Roll Number — each student has unique roll no'],
              ['Foreign Key', 'Links one table to another table\'s primary key', 'Department ID in Student table links to Department table'],
              ['Relationship', 'Connection between two tables', 'Student.DepartmentID → Department.ID']
            ]) +
          H.h2('Excel vs Access — Comparison') +
          tbl(['Feature', 'MS Excel', 'MS Access'],
            [
              ['Best For', 'Calculations, charts, small data lists', 'Large structured databases, many related tables'],
              ['Data Limit', 'About 1 million rows per sheet', 'Can handle much larger databases'],
              ['Multiple Tables', 'Limited — one sheet = one table', 'Many linked tables with relationships'],
              ['Data Validation', 'Basic', 'Strong — rules, primary keys, data types'],
              ['Queries', 'Filters and formulas only', 'Powerful SQL-like queries'],
              ['Forms & Reports', 'Not available', 'Built-in form and report designers'],
              ['Users', 'Single user mainly', 'Multiple users can share database']
            ]) +
          H.h2('Types of Queries') +
          tbl(['Query Type', 'What It Does', 'Example'],
            [
              ['Select Query', 'Retrieves and displays data based on conditions', 'Show all employees in Delhi office'],
              ['Insert Query', 'Adds new records to a table', 'Add 50 new student records at once'],
              ['Update Query', 'Changes existing records', 'Increase all salaries by 10%'],
              ['Delete Query', 'Removes records from a table', 'Delete students who left in 2020'],
              ['Make-Table Query', 'Creates a new table from query results', 'Copy top 10 students into new table']
            ]),
          {
            simplyPut: 'Access = database for big structured data. Table stores data, Query searches it, Form shows it nicely, Report prints it. Primary Key = unique ID.',
            dontConfuse: 'Excel is for calculations and small lists. Access is for large databases with many linked tables. Use Access when data is huge and related.',
            examTip: 'Primary Key vs Foreign Key and Excel vs Access comparison are frequently asked. Remember: Primary Key = unique; Foreign Key = link between tables.',
            memoryTrick: 'TQFR = Table, Query, Form, Report — the 4 main objects in MS Access!',
            quickRevision: [
              'Access = DBMS for structured data (.accdb)',
              'Table = stores data; Query = searches data',
              'Form = data entry screen; Report = formatted printout',
              'Primary Key = unique identifier for each record',
              'Foreign Key = links two tables together',
              'Select, Insert, Update, Delete, Make-Table = query types',
              'Access better than Excel for large multi-table databases'
            ],
            examAsk: 'What is primary key? / Difference between Excel and Access? / What is a query in MS Access?'
          })
      }]
    },
    {
      id: 'ms-outlook',
      name: 'MS Outlook',
      topics: [{
        id: 'ms-outlook',
        title: 'MS Outlook',
        content: T('MS Outlook',
          'Microsoft\'s email and personal organizer — send emails, manage calendar, contacts, and tasks in one place.',
          H.h2('What is MS Outlook?') +
          H.p('MS Outlook is an <strong>email client</strong> (program to send/receive email) plus a <strong>personal information manager</strong> (calendar, contacts, tasks).') +
          H.h2('Key Features') +
          tbl(['Feature', 'What It Does', 'Example'],
            [
              ['Email', 'Send and receive electronic mail', 'Send report to your boss'],
              ['Calendar', 'Schedule appointments and meetings', 'Set reminder for exam date'],
              ['Contacts', 'Store names, emails, phone numbers', 'Save colleague\'s details'],
              ['Tasks', 'To-do list with due dates', 'List of pending work items'],
              ['Notes', 'Quick sticky notes', 'Reminder note on desktop']
            ]) +
          H.h2('Email Concepts') +
          tbl(['Term', 'Meaning', 'Example'],
            [
              ['To', 'Main recipient of the email', 'Sending to one person directly'],
              ['CC (Carbon Copy)', 'Send copy to others (everyone can see all recipients)', 'Copy manager on team email'],
              ['BCC (Blind Carbon Copy)', 'Send copy secretly (other recipients cannot see BCC names)', 'Mass email without showing all addresses'],
              ['Reply', 'Reply only to the sender', 'Answer a question sent to you'],
              ['Reply All', 'Reply to sender AND all CC recipients', 'Respond to entire team email'],
              ['Forward', 'Send received email to someone else', 'Forward job posting to a friend'],
              ['Inbox', 'Folder where received emails arrive', 'Check Inbox every morning'],
              ['Sent Items', 'Folder with emails you have sent', 'Verify you sent the report'],
              ['Drafts', 'Unfinished emails saved for later', 'Half-written email saved automatically'],
              ['Junk/Spam', 'Unwanted or suspicious emails filtered here', 'Promotional emails you did not ask for'],
              ['Deleted Items', 'Trash folder for deleted emails', 'Recover accidentally deleted mail'],
              ['Email Signature', 'Automatic text at bottom of every email', 'Your name, designation, phone number']
            ]) +
          H.h2('Calendar Features') +
          tbl(['Feature', 'What It Does'],
            [
              ['Appointment', 'Personal event on your calendar (only you)'],
              ['Meeting', 'Event with other people invited (they get notification)'],
              ['Reminder', 'Alert before an event (popup or email)'],
              ['Recurring Event', 'Repeats automatically (daily, weekly, monthly)']
            ]),
          {
            simplyPut: 'Outlook = email + calendar + contacts + tasks. CC = visible copy to others. BCC = hidden copy. Reply = to sender only; Reply All = to everyone.',
            dontConfuse: 'CC = everyone sees who got the copy. BCC = recipients are hidden from each other. Use BCC for mass emails to protect privacy.',
            examTip: 'CC vs BCC difference is asked almost every year. BCC = Blind Carbon Copy — recipient list is hidden.',
            memoryTrick: 'CC = "Can See" (everyone visible). BCC = "Blind — Cannot See" (hidden recipients)!',
            quickRevision: [
              'Outlook = email + calendar + contacts + tasks',
              'CC = carbon copy (visible to all)',
              'BCC = blind carbon copy (hidden from others)',
              'Reply = to sender; Reply All = to sender + all CC',
              'Inbox = received; Sent = sent; Drafts = unfinished',
              'Appointment = solo event; Meeting = with invitees',
              'Recurring event = repeats automatically'
            ],
            examAsk: 'Difference between CC and BCC? / What is Reply All? / What folder stores sent emails?'
          })
      }]
    },
    {
      id: 'keyboard-shortcuts',
      name: 'Keyboard Shortcuts',
      topics: [{
        id: 'keyboard-shortcuts',
        title: 'Keyboard Shortcuts',
        content: T('Keyboard Shortcuts',
          'Key combinations that save time — work across Windows, Office, and web browsers.',
          H.h2('Universal Shortcuts (Work Almost Everywhere)') +
          tbl(['Shortcut', 'Action'],
            [
              ['Ctrl + C', 'Copy selected item'],
              ['Ctrl + V', 'Paste copied item'],
              ['Ctrl + X', 'Cut (copy and remove) selected item'],
              ['Ctrl + Z', 'Undo last action'],
              ['Ctrl + Y', 'Redo last undone action'],
              ['Ctrl + S', 'Save current file'],
              ['Ctrl + A', 'Select all content'],
              ['Ctrl + F', 'Find text'],
              ['Ctrl + P', 'Print'],
              ['Ctrl + N', 'New document/window'],
              ['Ctrl + O', 'Open existing file'],
              ['Ctrl + W', 'Close current window/tab'],
              ['Alt + F4', 'Close current program completely'],
              ['Alt + Tab', 'Switch between open programs'],
              ['Delete', 'Delete selected item (goes to Recycle Bin)'],
              ['Shift + Delete', 'Permanently delete (skip Recycle Bin)']
            ]) +
          H.h2('Windows Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['Win + D', 'Show/hide desktop'],
              ['Win + E', 'Open File Explorer'],
              ['Win + L', 'Lock computer screen'],
              ['Win + R', 'Open Run dialog box'],
              ['Win + Tab', 'Task View — see all open windows'],
              ['Win + I', 'Open Windows Settings'],
              ['Win + PrtSc', 'Screenshot saved to Pictures folder'],
              ['Ctrl + Alt + Del', 'Security screen (Task Manager, lock, sign out)'],
              ['PrtSc (Print Screen)', 'Copy screenshot to clipboard'],
              ['Alt + PrtSc', 'Screenshot of active window only']
            ]) +
          H.h2('Function Keys (F1–F12)') +
          tbl(['Key', 'General Use', 'In MS Word', 'In MS Excel'],
            [
              ['F1', 'Help', 'Help', 'Help'],
              ['F2', 'Rename file (in Explorer)', 'Edit active cell/text', 'Edit active cell'],
              ['F3', '—', '—', 'Paste name (defined names)'],
              ['F4', 'Repeat last action', 'Repeat last action', 'Toggle absolute reference ($)'],
              ['F5', 'Refresh (in browser)', 'Go To dialog', 'Go To dialog'],
              ['F6', 'Cycle through screen areas', 'Cycle panes', 'Cycle panes'],
              ['F7', '—', 'Spelling & Grammar check', '—'],
              ['F8', '—', 'Extend selection', 'Extend selection'],
              ['F9', '—', '—', 'Recalculate formulas'],
              ['F10', 'Activate menu bar', 'Activate menu bar', 'Activate menu bar'],
              ['F11', 'Full screen (browser)', 'Full screen', 'Create chart in new sheet'],
              ['F12', 'Save As (some apps)', 'Save As', 'Save As']
            ]) +
          H.h2('Browser Shortcuts') +
          tbl(['Shortcut', 'Action'],
            [
              ['Ctrl + T', 'Open new tab'],
              ['Ctrl + W', 'Close current tab'],
              ['Ctrl + Shift + T', 'Reopen last closed tab'],
              ['Ctrl + L', 'Highlight address bar (URL bar)'],
              ['F5 / Ctrl + R', 'Refresh/reload page'],
              ['Ctrl + D', 'Bookmark current page'],
              ['Ctrl + Tab', 'Switch to next tab'],
              ['Ctrl + Shift + Tab', 'Switch to previous tab'],
              ['Ctrl + H', 'Open browsing history'],
              ['Ctrl + J', 'Open downloads folder']
            ]),
          {
            simplyPut: 'Ctrl+C/V/X = copy/paste/cut. Ctrl+Z = undo. Win+D = desktop. Win+L = lock. F7 in Word = spell check. Ctrl+T in browser = new tab.',
            examTip: 'Universal shortcuts (Ctrl+C/V/Z) and Windows shortcuts (Win+D/E/L) are most asked. Also know F7 = spell check in Word, F5 = slideshow in PowerPoint.',
            memoryTrick: 'Ctrl+C = Copy, Ctrl+V = Paste (V looks like an arrow pointing down into document!). Ctrl+Z = "Zap" last action (Undo)!',
            quickRevision: [
              'Ctrl+C = Copy, Ctrl+V = Paste, Ctrl+X = Cut',
              'Ctrl+Z = Undo, Ctrl+Y = Redo, Ctrl+S = Save',
              'Win+D = desktop, Win+E = explorer, Win+L = lock',
              'Alt+Tab = switch programs; Alt+F4 = close program',
              'F7 in Word = spell check; F5 in PPT = start slideshow',
              'Ctrl+T = new browser tab; Ctrl+Shift+T = reopen closed tab',
              'Shift+Delete = permanent delete (no Recycle Bin)'
            ],
            examAsk: 'What does Ctrl+Z do? / Shortcut to lock Windows? / Which key starts PowerPoint slideshow? / Ctrl+Shift+T in browser?'
          })
      }]
    },
    {
      id: 'computer-abbreviations',
      name: 'Computer Abbreviations',
      topics: [{
        id: 'computer-abbreviations',
        title: 'Important Computer Abbreviations',
        content: T('Important Computer Abbreviations',
          'Full forms of computer terms — one of the highest-scoring topics in SSC, Railway, and Banking computer awareness sections.',
          H.h2('Complete Abbreviations Table (120+ Entries)') +
          H.p('Learn these by category. Exams often ask "What is the full form of ___?"') +
          tbl(['Abbreviation', 'Full Form', 'Category'],
            [
              ['CPU', 'Central Processing Unit', 'Hardware'],
              ['GPU', 'Graphics Processing Unit', 'Hardware'],
              ['ALU', 'Arithmetic Logic Unit', 'Hardware'],
              ['CU', 'Control Unit', 'Hardware'],
              ['RAM', 'Random Access Memory', 'Memory'],
              ['ROM', 'Read Only Memory', 'Memory'],
              ['PROM', 'Programmable Read Only Memory', 'Memory'],
              ['EPROM', 'Erasable Programmable Read Only Memory', 'Memory'],
              ['EEPROM', 'Electrically Erasable Programmable Read Only Memory', 'Memory'],
              ['HDD', 'Hard Disk Drive', 'Storage'],
              ['SSD', 'Solid State Drive', 'Storage'],
              ['CD', 'Compact Disc', 'Storage'],
              ['DVD', 'Digital Versatile Disc', 'Storage'],
              ['OS', 'Operating System', 'Software'],
              ['BIOS', 'Basic Input Output System', 'Firmware'],
              ['UEFI', 'Unified Extensible Firmware Interface', 'Firmware'],
              ['POST', 'Power On Self Test', 'Boot Process'],
              ['GUI', 'Graphical User Interface', 'Interface'],
              ['CLI', 'Command Line Interface', 'Interface'],
              ['API', 'Application Programming Interface', 'Programming'],
              ['SDK', 'Software Development Kit', 'Programming'],
              ['IDE', 'Integrated Development Environment', 'Programming'],
              ['JVM', 'Java Virtual Machine', 'Programming'],
              ['JDK', 'Java Development Kit', 'Programming'],
              ['JRE', 'Java Runtime Environment', 'Programming'],
              ['LAN', 'Local Area Network', 'Network'],
              ['WAN', 'Wide Area Network', 'Network'],
              ['MAN', 'Metropolitan Area Network', 'Network'],
              ['PAN', 'Personal Area Network', 'Network'],
              ['WLAN', 'Wireless Local Area Network', 'Network'],
              ['VLAN', 'Virtual Local Area Network', 'Network'],
              ['ISP', 'Internet Service Provider', 'Internet'],
              ['URL', 'Uniform Resource Locator', 'Web'],
              ['URI', 'Uniform Resource Identifier', 'Web'],
              ['HTTP', 'HyperText Transfer Protocol', 'Web'],
              ['HTTPS', 'HyperText Transfer Protocol Secure', 'Web'],
              ['FTP', 'File Transfer Protocol', 'Network'],
              ['SFTP', 'Secure File Transfer Protocol', 'Network'],
              ['SSH', 'Secure Shell', 'Network'],
              ['DNS', 'Domain Name System', 'Network'],
              ['DHCP', 'Dynamic Host Configuration Protocol', 'Network'],
              ['TCP', 'Transmission Control Protocol', 'Network'],
              ['UDP', 'User Datagram Protocol', 'Network'],
              ['IP', 'Internet Protocol', 'Network'],
              ['MAC', 'Media Access Control', 'Network'],
              ['VPN', 'Virtual Private Network', 'Security'],
              ['SSL', 'Secure Sockets Layer', 'Security'],
              ['TLS', 'Transport Layer Security', 'Security'],
              ['Wi-Fi', 'Wireless Fidelity', 'Wireless'],
              ['SSID', 'Service Set Identifier', 'Wireless'],
              ['NIC', 'Network Interface Card', 'Hardware'],
              ['OCR', 'Optical Character Recognition', 'Input Technology'],
              ['OMR', 'Optical Mark Recognition', 'Input Technology'],
              ['MICR', 'Magnetic Ink Character Recognition', 'Banking'],
              ['UPS', 'Uninterruptible Power Supply', 'Hardware'],
              ['SMPS', 'Switched Mode Power Supply', 'Hardware'],
              ['CRT', 'Cathode Ray Tube', 'Display'],
              ['LCD', 'Liquid Crystal Display', 'Display'],
              ['LED', 'Light Emitting Diode', 'Display'],
              ['OLED', 'Organic Light Emitting Diode', 'Display'],
              ['USB', 'Universal Serial Bus', 'Connection'],
              ['HDMI', 'High Definition Multimedia Interface', 'Connection'],
              ['VGA', 'Video Graphics Array', 'Connection'],
              ['DVI', 'Digital Visual Interface', 'Connection'],
              ['SATA', 'Serial Advanced Technology Attachment', 'Storage'],
              ['NVMe', 'Non-Volatile Memory Express', 'Storage'],
              ['SCSI', 'Small Computer System Interface', 'Storage'],
              ['RAID', 'Redundant Array of Independent Disks', 'Storage'],
              ['PDF', 'Portable Document Format', 'File Format'],
              ['JPEG', 'Joint Photographic Experts Group', 'Image Format'],
              ['PNG', 'Portable Network Graphics', 'Image Format'],
              ['GIF', 'Graphics Interchange Format', 'Image Format'],
              ['BMP', 'Bitmap', 'Image Format'],
              ['TIFF', 'Tagged Image File Format', 'Image Format'],
              ['MP3', 'MPEG Audio Layer 3', 'Audio Format'],
              ['MP4', 'MPEG-4', 'Video Format'],
              ['AVI', 'Audio Video Interleave', 'Video Format'],
              ['MOV', 'Movie (QuickTime format)', 'Video Format'],
              ['WAV', 'Waveform Audio Format', 'Audio Format'],
              ['HTML', 'HyperText Markup Language', 'Web'],
              ['CSS', 'Cascading Style Sheets', 'Web'],
              ['JS', 'JavaScript', 'Web'],
              ['PHP', 'Hypertext Preprocessor', 'Web'],
              ['SQL', 'Structured Query Language', 'Database'],
              ['XML', 'eXtensible Markup Language', 'Data Format'],
              ['JSON', 'JavaScript Object Notation', 'Data Format'],
              ['YAML', 'YAML Ain\'t Markup Language', 'Data Format'],
              ['AI', 'Artificial Intelligence', 'Technology'],
              ['ML', 'Machine Learning', 'Technology'],
              ['DL', 'Deep Learning', 'Technology'],
              ['NLP', 'Natural Language Processing', 'AI'],
              ['IoT', 'Internet of Things', 'Technology'],
              ['AR', 'Augmented Reality', 'Technology'],
              ['VR', 'Virtual Reality', 'Technology'],
              ['MR', 'Mixed Reality', 'Technology'],
              ['5G', 'Fifth Generation (mobile network)', 'Telecom'],
              ['LTE', 'Long Term Evolution', 'Telecom'],
              ['GSM', 'Global System for Mobile Communications', 'Telecom'],
              ['NFC', 'Near Field Communication', 'Wireless'],
              ['RFID', 'Radio Frequency Identification', 'Wireless'],
              ['GPS', 'Global Positioning System', 'Navigation'],
              ['OTP', 'One Time Password', 'Security'],
              ['2FA', 'Two Factor Authentication', 'Security'],
              ['DDoS', 'Distributed Denial of Service', 'Security'],
              ['CAPTCHA', 'Completely Automated Public Turing test to tell Computers and Humans Apart', 'Security'],
              ['ERP', 'Enterprise Resource Planning', 'Business Software'],
              ['CRM', 'Customer Relationship Management', 'Business Software'],
              ['CMS', 'Content Management System', 'Web'],
              ['MIS', 'Management Information System', 'Business'],
              ['SaaS', 'Software as a Service', 'Cloud Computing'],
              ['PaaS', 'Platform as a Service', 'Cloud Computing'],
              ['IaaS', 'Infrastructure as a Service', 'Cloud Computing'],
              ['WWW', 'World Wide Web', 'Internet'],
              ['SMTP', 'Simple Mail Transfer Protocol', 'Email'],
              ['POP3', 'Post Office Protocol version 3', 'Email'],
              ['IMAP', 'Internet Message Access Protocol', 'Email'],
              ['IRC', 'Internet Relay Chat', 'Communication'],
              ['VoIP', 'Voice over Internet Protocol', 'Communication'],
              ['P2P', 'Peer to Peer', 'Network'],
              ['QR', 'Quick Response (code)', 'Technology'],
              ['CCTV', 'Closed Circuit Television', 'Security'],
              ['ATM', 'Automated Teller Machine', 'Banking'],
              ['PIN', 'Personal Identification Number', 'Security'],
              ['IT', 'Information Technology', 'General'],
              ['ICT', 'Information and Communication Technology', 'General'],
              ['ASCII', 'American Standard Code for Information Interchange', 'Encoding'],
              ['ENIAC', 'Electronic Numerical Integrator and Computer', 'History'],
              ['RDBMS', 'Relational Database Management System', 'Database'],
              ['DBMS', 'Database Management System', 'Database'],
              ['REST', 'Representational State Transfer', 'Web API'],
              ['SEO', 'Search Engine Optimization', 'Web'],
              ['SIM', 'Subscriber Identity Module', 'Mobile'],
              ['WYSIWYG', 'What You See Is What You Get', 'Software'],
              ['Mbps', 'Megabits per second', 'Network Speed'],
              ['GHz', 'GigaHertz', 'Frequency'],
              ['DPI', 'Dots Per Inch', 'Printing'],
              ['PPI', 'Pixels Per Inch', 'Display'],
              ['FAQ', 'Frequently Asked Questions', 'Web'],
              ['GIS', 'Geographic Information System', 'Software'],
              ['IC', 'Integrated Circuit', 'Hardware'],
              ['VLSI', 'Very Large Scale Integration', 'Hardware'],
              ['PC', 'Personal Computer', 'Hardware'],
              ['PCB', 'Printed Circuit Board', 'Hardware'],
              ['MPEG', 'Moving Picture Experts Group', 'Video Standard'],
              ['NPCI', 'National Payments Corporation of India', 'India/Banking'],
              ['UPI', 'Unified Payments Interface', 'India/Banking'],
              ['UIDAI', 'Unique Identification Authority of India', 'India'],
              ['Aadhaar', 'Unique 12-digit identity number (UIDAI)', 'India'],
              ['CERT-In', 'Computer Emergency Response Team – India', 'India/Security'],
              ['C-DAC', 'Centre for Development of Advanced Computing', 'India/IT'],
              ['NASSCOM', 'National Association of Software and Service Companies', 'India/IT'],
              ['MeitY', 'Ministry of Electronics and Information Technology', 'India/Govt'],
              ['NCIIPC', 'National Critical Information Infrastructure Protection Centre', 'India/Security'],
              ['IRCTC', 'Indian Railway Catering and Tourism Corporation', 'India/Web'],
              ['BHIM', 'Bharat Interface for Money (UPI app by NPCI)', 'India/Banking'],
              ['IMPS', 'Immediate Payment Service', 'India/Banking'],
              ['NEFT', 'National Electronic Funds Transfer', 'India/Banking'],
              ['RTGS', 'Real Time Gross Settlement', 'India/Banking']
            ]),
          {
            simplyPut: 'Exams love full forms! CPU = brain, RAM = temporary memory, ROM = permanent, LAN = local network, WAN = wide network, HTTP = web protocol.',
            examTip: 'This is THE highest-yield computers topic. Revise daily. Most asked: CPU, RAM, ROM, LAN, WAN, HTTP, HTTPS, URL, PDF, USB, GUI, BIOS, SMTP, VPN, OCR, OMR, MICR, UPI, NPCI.',
            memoryTrick: 'Group by category: Memory (RAM/ROM/PROM), Network (LAN/WAN/MAN/PAN), Web (HTTP/HTTPS/URL/HTML), Security (VPN/SSL/OTP/2FA), India (NPCI/UPI/UIDAI/CERT-In).',
            quickRevision: [
              'CPU = Central Processing Unit (brain of computer)',
              'RAM = volatile; ROM = non-volatile',
              'LAN = local; WAN = wide area network',
              'HTTP = web protocol; HTTPS = secure version',
              'OCR = text from image; OMR = marked circles; MICR = cheques',
              'SMTP = send email; POP3/IMAP = receive email',
              'UPI = Unified Payments Interface (NPCI)',
              'CERT-In = India\'s cyber emergency response team'
            ],
            examAsk: 'Full form of CPU/RAM/ROM/LAN/WAN/HTTP/HTTPS/OCR/OMR/MICR/UPI/NPCI? — expect 3-5 such questions!'
          })
      }]
    },
    {
      id: 'computer-network-internet',
      name: 'Network & Internet',
      topics: [{
        id: 'computer-network-internet',
        title: 'Computer Network & Internet',
        content: T('Computer Network & Internet',
          'How computers connect to each other and to the internet — the foundation of online banking, UPI, and social media.',
          H.h2('What is a Computer Network?') +
          H.p('A <strong>network</strong> is two or more computers connected together to share data, files, and resources (like printers and internet).') +
          H.h2('Types of Networks by Size') +
          tbl(['Type', 'Full Form', 'Range', 'Example'],
            [
              ['PAN', 'Personal Area Network', 'Few metres', 'Phone connected to smartwatch via Bluetooth'],
              ['LAN', 'Local Area Network', 'One building/office', 'Computers in your school computer lab'],
              ['MAN', 'Metropolitan Area Network', 'One city', 'Cable network across a city'],
              ['WAN', 'Wide Area Network', 'Countries/continents', 'The Internet is the largest WAN']
            ]) +
          H.h2('Network Topologies') +
          tbl(['Topology', 'Shape', 'Advantage', 'Disadvantage'],
            [
              ['Bus', 'All devices on one cable line', 'Simple, cheap', 'If main cable breaks, whole network fails'],
              ['Star', 'All devices connected to central hub/switch', 'Easy to add/remove devices; one failure does not stop others', 'Central hub failure stops entire network'],
              ['Ring', 'Devices connected in a circle', 'Equal access for all devices', 'One break stops the ring'],
              ['Mesh', 'Every device connected to every other device', 'Most reliable; many backup paths', 'Expensive; complex to set up'],
              ['Tree', 'Hierarchical (like branches of a tree)', 'Good for large organizations', 'Root node failure affects branches'],
              ['Hybrid', 'Combination of two or more topologies', 'Flexible design', 'Complex to manage']
            ]) +
          H.h2('Network Devices') +
          tbl(['Device', 'Layer', 'What It Does', 'Simple Example'],
            [
              ['NIC', 'Hardware', 'Connects computer to network', 'Wi-Fi card in laptop'],
              ['Hub', 'Physical', 'Sends data to ALL connected devices (not smart)', 'Old office network device'],
              ['Switch', 'Data Link', 'Sends data only to intended device (smart)', 'Modern office network'],
              ['Router', 'Network', 'Connects different networks; directs internet traffic', 'Home Wi-Fi router'],
              ['Modem', 'Physical', 'Converts digital signals to analog (and back) for internet', 'BSNL/ACT broadband modem'],
              ['Bridge', 'Data Link', 'Connects two similar networks', 'Linking two LAN segments'],
              ['Gateway', 'All layers', 'Connects different types of networks', 'Connects LAN to internet'],
              ['Repeater', 'Physical', 'Boosts weak signal to travel farther', 'Wi-Fi range extender'],
              ['Access Point', 'Data Link', 'Allows wireless devices to connect to wired network', 'Office Wi-Fi hotspot']
            ]) +
          H.h2('Types of Internet Connection') +
          tbl(['Type', 'Speed', 'How It Works', 'Example Provider'],
            [
              ['Dial-up', 'Very slow (56 Kbps)', 'Uses telephone line; cannot use phone and internet together', 'Old BSNL dial-up'],
              ['DSL (Broadband)', 'Medium (1–100 Mbps)', 'Uses telephone line but faster; phone and internet work together', 'BSNL Broadband, Airtel DSL'],
              ['Cable', 'Fast (10–500 Mbps)', 'Uses cable TV line', 'Hathway, local cable operators'],
              ['Fiber (FTTH)', 'Very fast (100 Mbps – 1 Gbps+)', 'Uses optical fiber cables (light signals)', 'Jio Fiber, ACT Fibernet, Airtel Xstream'],
              ['4G/LTE', 'Fast mobile (10–100 Mbps)', 'Wireless via mobile towers', 'Jio 4G, Airtel 4G on phone'],
              ['5G', 'Ultra fast mobile (100 Mbps – 10 Gbps)', 'Next-gen wireless mobile network', 'Jio 5G, Airtel 5G'],
              ['Satellite', 'Medium (25–100 Mbps)', 'Signal from satellite in space', 'Starlink, HughesNet (rural areas)']
            ]) +
          H.h2('IP Address') +
          tbl(['Version', 'Bits', 'Example', 'Key Fact'],
            [
              ['IPv4', '32-bit', '192.168.1.1', 'About 4.3 billion addresses — running out'],
              ['IPv6', '128-bit', '2001:0db8:85a3::8a2e:0370:7334', 'Virtually unlimited addresses; future standard']
            ]) +
          H.h2('Domain Name Extensions') +
          tbl(['Extension', 'Used By', 'Example'],
            [
              ['.com', 'Commercial organizations (most common)', 'google.com'],
              ['.in', 'India', 'gov.in, nic.in'],
              ['.org', 'Non-profit organizations', 'wikipedia.org'],
              ['.gov', 'Government websites', 'india.gov.in'],
              ['.edu', 'Educational institutions', 'iitd.ac.in'],
              ['.net', 'Network infrastructure', 'speedtest.net'],
              ['.ac.in', 'Academic institutions in India', 'du.ac.in']
            ]) +
          H.h2('World Wide Web (WWW)') +
          H.p('Invented by <strong>Tim Berners-Lee</strong> in <strong>1991</strong> at CERN. The WWW is a system of linked documents (web pages) accessed via the internet using browsers.') +
          H.p('<strong>URL structure:</strong> https://www.example.com/page') +
          H.ul([
            '<strong>https://</strong> — protocol (secure HTTP)',
            '<strong>www.</strong> — subdomain',
            '<strong>example.com</strong> — domain name',
            '<strong>/page</strong> — specific page path'
          ]) +
          H.h2('Email Protocols') +
          tbl(['Protocol', 'Purpose', 'Port', 'Key Feature'],
            [
              ['SMTP', 'Sending email', '587/465', 'Simple Mail Transfer Protocol — pushes mail to server'],
              ['POP3', 'Receiving email (download and delete from server)', '995', 'Post Office Protocol — downloads to device'],
              ['IMAP', 'Receiving email (sync across devices)', '993', 'Internet Message Access Protocol — stays on server']
            ]) +
          H.h2('Wireless Technologies') +
          tbl(['Technology', 'Standard/Range', 'Speed', 'Common Use'],
            [
              ['Wi-Fi', '802.11 — up to 100 metres', 'Up to 1 Gbps+', 'Home/office internet wireless'],
              ['Bluetooth', 'Up to 10–100 metres', 'Up to 3 Mbps', 'Earphones, file transfer between phones'],
              ['NFC', 'Up to 4 cm only', 'Low speed', 'Contactless payment (Google Pay tap)'],
              ['GPS', 'Global coverage via satellites', 'N/A (location only)', 'Google Maps navigation'],
              ['RFID', 'Up to few metres', 'Low speed', 'Metro card, toll tags, inventory tags'],
              ['5G', 'Mobile network — city-wide', 'Up to 10 Gbps', 'Fast mobile internet, IoT']
            ]) +
          H.h2('OSI Model (7 Layers)') +
          tbl(['Layer', 'Number', 'Function', 'Protocols', 'Devices'],
            [
              ['Physical', '1', 'Transmits raw bits (0s and 1s)', 'Ethernet, USB', 'Hub, Repeater, Cables'],
              ['Data Link', '2', 'Error-free transfer between nodes', 'PPP, Ethernet', 'Switch, Bridge, NIC'],
              ['Network', '3', 'Routing and addressing (IP addresses)', 'IP, ICMP', 'Router'],
              ['Transport', '4', 'End-to-end delivery, error recovery', 'TCP, UDP', 'Firewall'],
              ['Session', '5', 'Manages sessions between applications', 'NetBIOS, RPC', 'Gateway'],
              ['Presentation', '6', 'Data format, encryption, compression', 'SSL/TLS, JPEG', '—'],
              ['Application', '7', 'User-facing services (email, web)', 'HTTP, FTP, SMTP, DNS', 'Browser, Email client']
            ]) +
          H.p('Memory trick for OSI layers (bottom to top): <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way = Physical, Data Link, Network, Transport, Session, Presentation, Application.') +
          H.h2('TCP/IP Model (4 Layers)') +
          tbl(['Layer', 'OSI Equivalent', 'Protocols', 'Function'],
            [
              ['Link (Network Access)', 'Physical + Data Link', 'Ethernet, Wi-Fi', 'Physical transmission'],
              ['Internet', 'Network', 'IP, ICMP', 'Routing and addressing'],
              ['Transport', 'Transport', 'TCP, UDP', 'Reliable/unreliable delivery'],
              ['Application', 'Session + Presentation + Application', 'HTTP, FTP, SMTP, DNS', 'User applications']
            ]) +
          H.h2('VPN & Firewall') +
          H.p('<strong>VPN (Virtual Private Network)</strong> creates a secure encrypted tunnel over the internet. Used for privacy, accessing blocked content, and secure remote work.') +
          H.p('<strong>Firewall</strong> acts as a security barrier — monitors and blocks unauthorized network traffic.') +
          tbl(['Firewall Type', 'Where', 'Example'],
            [
              ['Hardware Firewall', 'Built into router/network device', 'Home Wi-Fi router firewall'],
              ['Software Firewall', 'Installed on computer', 'Windows Firewall, antivirus firewall']
            ]),
          {
            simplyPut: 'LAN = local network (office). WAN = wide (internet). Router connects networks. Modem connects to ISP. DNS converts google.com to IP address. HTTPS is secure.',
            dontConfuse: 'Internet ≠ WWW. Internet = global network of networks. WWW = web pages on the internet. Hub sends to ALL; Switch sends to ONE specific device.',
            examTip: 'OSI 7 layers, network types (LAN/MAN/WAN), network devices (hub/switch/router/modem), and email protocols (SMTP/POP3/IMAP) are top exam topics.',
            memoryTrick: 'OSI: "Please Do Not Throw Sausage Pizza Away" (Physical to Application). SMTP = Send Mail; POP3/IMAP = Receive Mail.',
            quickRevision: [
              'PAN < LAN < MAN < WAN (increasing size)',
              'Star topology = most common; all connect to central hub',
              'Hub = broadcasts to all; Switch = sends to specific device',
              'Router = connects networks; Modem = connects to ISP',
              'IPv4 = 32-bit; IPv6 = 128-bit',
              'SMTP = send email; POP3/IMAP = receive email',
              'Tim Berners-Lee invented WWW in 1991',
              'OSI = 7 layers; TCP/IP = 4 layers',
              'VPN = secure encrypted connection; Firewall = blocks unauthorized access'
            ],
            examAsk: 'Difference between hub and switch? / Full form and use of LAN, WAN, MAN? / OSI model layers? / SMTP vs POP3? / Who invented WWW?'
          })
      }]
    },
    {
      id: 'computer-virus-cybersecurity',
      name: 'Virus & Cybersecurity',
      topics: [{
        id: 'computer-virus-cybersecurity',
        title: 'Computer Virus & Cybersecurity',
        content: T('Computer Virus & Cybersecurity',
          'How to protect your computer and data from viruses, hackers, and online fraud — very important for exams and real life.',
          H.h2('What is a Computer Virus?') +
          H.p('A <strong>virus</strong> is a harmful program that attaches itself to other programs/files and spreads when those files are opened or shared. It can delete data, slow down your PC, or steal information.') +
          H.h2('Virus vs Worm vs Trojan') +
          tbl(['Type', 'How It Spreads', 'Needs Host File?', 'Example'],
            [
              ['Virus', 'Attaches to files; spreads when file is opened', 'Yes — needs a host program', 'File infected .exe on USB drive'],
              ['Worm', 'Spreads automatically over network without user action', 'No — self-replicating', 'WannaCry ransomware worm 2017'],
              ['Trojan Horse', 'Disguised as useful software; user installs it willingly', 'Disguised as legitimate app', 'Fake antivirus download that steals passwords']
            ]) +
          H.h2('Types of Malware') +
          tbl(['Malware Type', 'What It Does', 'How It Spreads', 'Example'],
            [
              ['Virus', 'Damages files and programs', 'Infected files, USB drives', 'CIH virus'],
              ['Worm', 'Self-replicates across networks', 'Network vulnerabilities', 'ILOVEYOU worm'],
              ['Trojan Horse', 'Disguised as legitimate software', 'Fake downloads, email attachments', 'Zeus Trojan (banking theft)'],
              ['Spyware', 'Secretly monitors your activity', 'Bundled with free software', 'Keylogger recording passwords'],
              ['Adware', 'Shows unwanted advertisements', 'Free software bundles', 'Pop-up ads everywhere'],
              ['Ransomware', 'Locks files; demands money to unlock', 'Phishing emails, infected links', 'WannaCry, Locky'],
              ['Keylogger', 'Records every keystroke (passwords!)', 'Trojan installation', 'Steals banking passwords'],
              ['Rootkit', 'Hides deep in system; hard to detect', 'Exploiting admin privileges', 'Sony BMG rootkit scandal'],
              ['Botnet', 'Network of infected computers controlled remotely', 'Worm infection', 'Used for DDoS attacks']
            ]) +
          H.h2('Common Cyber Attacks') +
          tbl(['Attack', 'How It Works', 'Real Example', 'Prevention'],
            [
              ['Phishing', 'Fake email/website tricks you into giving passwords', 'Fake SBI login page email', 'Never click suspicious links; check URL'],
              ['Hacking', 'Unauthorized access to computer/system', 'Celebrity account breaches', 'Strong passwords, 2FA, updates'],
              ['DDoS', 'Floods website with traffic to crash it', 'Attack on government websites', 'Firewall, CDN protection'],
              ['SQL Injection', 'Inserts malicious code into website database', 'Website login bypass', 'Input validation by developers'],
              ['Man-in-the-Middle', 'Attacker secretly intercepts communication', 'Fake Wi-Fi hotspot at café', 'Use HTTPS, avoid public Wi-Fi for banking'],
              ['Social Engineering', 'Tricks people (not computers) into giving info', 'Phone call pretending to be bank officer', 'Never share OTP with anyone'],
              ['Brute Force', 'Tries all password combinations automatically', 'Cracking simple passwords like "123456"', 'Long complex passwords, account lockout']
            ]) +
          H.h2('Protection Methods') +
          tbl(['Method', 'How It Works', 'Example'],
            [
              ['Antivirus Software', 'Scans files; detects and removes viruses', 'Windows Defender, Kaspersky, Norton'],
              ['Firewall', 'Blocks unauthorized network access', 'Windows Firewall, router firewall'],
              ['Strong Password', 'Mix of upper/lower case, numbers, symbols; 12+ characters', 'K9#mP2$xLq7@ instead of password123'],
              ['2FA (Two Factor Authentication)', 'Password + OTP/biometric for extra security', 'Google account OTP, Aadhaar fingerprint'],
              ['Encryption', 'Converts data into unreadable code', 'WhatsApp end-to-end encryption'],
              ['SSL/TLS (HTTPS)', 'Encrypts data between browser and website', 'Padlock icon in browser address bar'],
              ['Digital Signature', 'Proves document/email is authentic and unaltered', 'eSign on government documents'],
              ['Regular Updates', 'Patches security holes in software', 'Windows Update, app updates']
            ]) +
          H.h2('Encryption Types') +
          tbl(['Type', 'How It Works', 'Key Used', 'Example Use'],
            [
              ['Symmetric', 'Same key to encrypt AND decrypt', 'One shared secret key', 'WhatsApp message encryption'],
              ['Asymmetric', 'Public key encrypts; private key decrypts', 'Two different keys (public + private)', 'SSL certificates, digital signatures']
            ]) +
          H.h2('Safe Internet Practices') +
          tbl(['Do ✅', 'Why It Matters'],
            [
              ['Use strong unique passwords', 'Prevents brute force and guessing attacks'],
              ['Enable 2FA on all important accounts', 'Even if password is stolen, account stays safe'],
              ['Keep software and OS updated', 'Updates fix security holes hackers exploit'],
              ['Use HTTPS websites for banking/shopping', 'Data is encrypted in transit'],
              ['Backup important data regularly', 'Recover data if ransomware strikes'],
              ['Verify sender before opening email attachments', 'Prevents virus and Trojan infection']
            ]) +
          tbl(['Don\'t ❌', 'Why It\'s Dangerous'],
            [
              ['Share OTP with anyone (even "bank officials")', 'OTP = your money; sharing it = instant fraud'],
              ['Click unknown links in SMS/WhatsApp', 'Leads to phishing sites that steal passwords'],
              ['Use public Wi-Fi for banking', 'Man-in-the-middle attack can steal data'],
              ['Download pirated software', 'Often contains Trojans and spyware'],
              ['Ignore antivirus warnings', 'Warning means real threat detected']
            ]) +
          H.h2('IT Act 2000 (India) — Important Sections') +
          tbl(['Section', 'Covers', 'Punishment'],
            [
              ['Section 43', 'Unauthorized access, damage to computer/data', 'Compensation up to ₹1 crore'],
              ['Section 66', 'Computer-related offences (hacking, virus spreading)', 'Up to 3 years imprisonment + fine'],
              ['Section 66B', 'Dishonestly receiving stolen computer resource', 'Up to 3 years + ₹1 lakh fine'],
              ['Section 66C', 'Identity theft (using someone else\'s password/e-signature)', 'Up to 3 years + ₹1 lakh fine'],
              ['Section 66D', 'Cheating by impersonation using computer', 'Up to 3 years + ₹1 lakh fine'],
              ['Section 66E', 'Violation of privacy (capturing/sharing private images)', 'Up to 3 years + ₹2 lakh fine'],
              ['Section 66F', 'Cyber terrorism', 'Up to life imprisonment'],
              ['Section 67', 'Publishing obscene content online', 'Up to 5 years + ₹10 lakh fine'],
              ['Section 69', 'Government power to intercept/monitor/decrypt data', 'For national security investigation'],
              ['Section 72', 'Breach of confidentiality and privacy', 'Up to 2 years + ₹1 lakh fine']
            ]) +
          H.h2('India\'s Cybersecurity Organizations') +
          tbl(['Organization', 'Full Form', 'Role', 'Managed By'],
            [
              ['CERT-In', 'Computer Emergency Response Team – India', 'National nodal agency for cyber security incidents', 'MeitY (Ministry of Electronics & IT)'],
              ['NCIIPC', 'National Critical Information Infrastructure Protection Centre', 'Protects critical infrastructure (power, banking, telecom)', 'NTRO / MeitY'],
              ['Cyber Swachhta Kendra', 'Botnet Cleaning and Malware Analysis Centre', 'Free bot removal tools for citizens', 'CERT-In / MeitY'],
              ['MeitY', 'Ministry of Electronics and Information Technology', 'Overall IT and cyber policy for India', 'Government of India'],
              ['UIDAI', 'Unique Identification Authority of India', 'Manages Aadhaar data security', 'Government of India']
            ]) +
          H.h2('Types of Cybercrime') +
          tbl(['Crime', 'Definition', 'Example'],
            [
              ['Identity Theft', 'Stealing someone\'s personal info to impersonate them', 'Using stolen Aadhaar/PAN for fake loan'],
              ['Cyberstalking', 'Repeatedly harassing someone online', 'Sending threatening messages on social media'],
              ['Online Fraud', 'Cheating people for money online', 'Fake online shopping site taking payment'],
              ['Phishing', 'Tricking users to reveal passwords/bank details', 'Fake email: "Your SBI account is blocked, click here"'],
              ['Morphing', 'Editing someone\'s photo/video for harassment', 'Face swapped into inappropriate image'],
              ['Cyberbullying', 'Bullying through digital platforms', 'Spreading rumours about someone on Instagram'],
              ['Cyber Terrorism', 'Using internet to threaten national security', 'Hacking power grid or defence systems']
            ]),
          {
            simplyPut: 'Virus needs host file; Worm spreads alone; Trojan looks safe but is dangerous. Use antivirus + strong password + 2FA. Never share OTP. CERT-In handles cyber emergencies in India.',
            dontConfuse: 'Virus attaches to files; Worm spreads automatically on network; Trojan disguises as useful software. All three are malware but spread differently!',
            examTip: 'IT Act sections (66, 66C, 66F), CERT-In full form, malware types, and phishing definition are heavily tested. Remember: CERT-In works under MeitY.',
            memoryTrick: 'VWT = Virus (needs host), Worm (self-spreads), Trojan (Trojan horse disguise). OTP = One Time Password — NEVER share!',
            quickRevision: [
              'Virus = needs host file; Worm = self-replicating; Trojan = disguised malware',
              'Ransomware = locks files, demands money',
              'Phishing = fake emails/sites to steal passwords',
              'Antivirus + Firewall + Strong password + 2FA = protection',
              'HTTPS (SSL/TLS) = encrypted safe browsing',
              'IT Act 2000; Section 66 = hacking; Section 66F = cyber terrorism',
              'CERT-In = Computer Emergency Response Team India (under MeitY)',
              'Never share OTP — banks never ask for it'
            ],
            examAsk: 'Difference between virus, worm, and Trojan? / Full form of CERT-In? / IT Act Section 66 covers what? / What is phishing? / What is 2FA?'
          })
      }]
    }
  ]
};
})();
