let mode = "normal";
let gameNumber = null;

async function handleCommand(cmd) {
  cmd = cmd.toLowerCase();

  // GAME MODE HANDLING
  if (mode === "game-menu") return handleGameMenu(cmd);

if (mode === "guess") {
  const n = parseInt(cmd);
  if (n === gameNumber) {
    typePrint("🎉 Correct!");
    mode = "normal";
  } else {
    typePrint("❌ Wrong, try again.");
  }
  return;
}

if (mode === "typing") {
  const time = ((Date.now() - typingStart) / 1000).toFixed(2);
  if (cmd === testSentence) {
    typePrint(`✅ Done in ${time}s`);
  } else {
    typePrint("❌ Incorrect text");
  }
  mode = "normal";
  return;
}

  const commands = {
   help: () => {
  typePrint(
    "about, skills, projects, education, certifications, github, git status, resume, birthday, date, time, location, contact, play game, joke, clear"
  );
},



about: () => {
  typePrint(
    "Bismaya Dixit | BCA Student\n" +
    "Motivated BCA student with strong analytical thinking, problem-solving, and communication skills. " +
    "Passionate about technology, data, and modern computing concepts, with hands-on experience in academic and project work. " +
    "Skilled in understanding user needs, presenting technical solutions clearly, and adapting quickly to new tools and environments. " +
    "Seeking opportunities to apply technical knowledge, teamwork, and a strong learning mindset to contribute effectively to organizational growth."
  );
},

skills: () => {
  typePrint("🛠 SKILLS");
  typePrint("Programming Languages: C, C++, Java, Python");
  typePrint("Web Technologies: HTML, CSS, JavaScript");
  typePrint("Databases: MySQL");
  typePrint("Tools & Platforms: Git, GitHub, VS Code");
  typePrint("Operating Systems: Linux / Unix");
  typePrint("Other Tools: MS Office");
},


education: () => {
  typePrint("🎓 EDUCATION");
  typePrint("Bachelor of Computer Application (BCA)");
  typePrint("Yuvodaya College Of Advanced Technology, Balangir");
  typePrint("Duration: 2023 – 2026 | CGPA: 9.10 / 10");
  typePrint("");
  typePrint("Higher Secondary School");
  typePrint("Pragati Group Of Institution");
  typePrint("Duration: 2021 – 2023");
},

projects: () => {
  typePrint("📂 PROJECT EXPERIENCE");

  typePrint("1️⃣ Movie Revenue Prediction System (Machine Learning)");
  typePrint("Technologies: Python, Pandas, NumPy, Scikit-learn");
  typePrint("• Built an ML model to predict movie success (Hit/Flop)");
  typePrint("• Used budget, genre, popularity features");
  typePrint("• Implemented data preprocessing, feature encoding, training, and evaluation");
  typePrint("");

  typePrint("2️⃣ Product Price Prediction System");
  typePrint("Technologies: Python, Machine Learning, Data Preprocessing");
  typePrint("• Predictive system to estimate product prices");
  typePrint("• Used historical data and ML algorithms");
  typePrint("• Focused on accuracy optimization and model selection");
  typePrint("");

  typePrint("3️⃣ Gaming E-Commerce Website");
  typePrint("• Developed an e-commerce site for gaming products");
  typePrint("• Implemented product listings, cart system, and responsive UI");
  typePrint("");

  typePrint("4️⃣ Research Paper – Application of Digital Twin Technology in Cyclone-Prone Areas");
  typePrint("• Focused on disaster preparedness and simulation");
  typePrint("• Proposed tech-based early warning and resource planning systems");
  typePrint("");

  typePrint("5️⃣ Lost and Found Web Application");
  typePrint("• Web platform for reporting and searching lost/found items");
  typePrint("• Integrated input forms, image uploads, and categorization");
},

certifications: () => {
  typePrint("📜 CERTIFICATIONS");

  typePrint("• Google Data Analytics Certificate");
  typePrint("  - Data cleaning, visualization, spreadsheets, SQL, analytical decision-making");
  typePrint("");

  typePrint("• Machine Learning Certification – Coursera (Andrew Ng)");
  typePrint("  - Supervised & unsupervised learning, model training, real-world ML applications");
  typePrint("");

  typePrint("• Python for Everybody – University of Michigan");
  typePrint("  - Python programming, data structures, OOP basics");
  typePrint("");

  typePrint("• Web Development Basics – freeCodeCamp");
  typePrint("  - HTML structure, CSS styling, JavaScript basics & interactivity");
},


    birthday: () => print("🎂 31 August 2005"),

    date: () => print(new Date().toDateString()),

    time: () => print(new Date().toLocaleTimeString()),

    location: () => print("Balangir, Odisha, India"),

    contact: () =>
      print("Email: bismayadixshit885@gmail.com | Phone: 8984971764"),

    joke: () =>
      print("Why do programmers prefer dark mode? Because light attracts bugs 🐛"),

    clear: () => (output.innerHTML = ""),

    github: () =>
      window.open("https://github.com/bismayadixit", "_blank"),
    resume: () => {
  typePrint("📄 Opening resume of Bismaya Dixit...");
  typePrint("Opening PDF in a new tab...");

  setTimeout(() => {
    window.open(
      "/assets/resume/Bismaya_Dixit_Resume.pdf",
      "_blank"
    );
  }, 500);
},


    "git status": loadGitHub,

    "play game": startGame,
    game: startGame,
    games: startGame
  };

  if (commands[cmd]) {
    commands[cmd]();
  } else {
    print("command not found. Type 'help'");
  }
}
resume: () => {
  typePrint("📄 RESUME – Bismaya Dixit");
  typePrint("BCA Student | Balangir, Odisha, India");
  typePrint("");
  typePrint("EDUCATION:");
  typePrint("- BCA (2023–2026), Yuvodaya College, CGPA: 9.10");
  typePrint("- Higher Secondary (2021–2023), 88.89%");
  typePrint("");
  typePrint("SKILLS:");
  typePrint("C, C++, Java, Python, HTML, CSS, JavaScript, MySQL, PostgreSQL");
  typePrint("Git, Linux, VS Code, MS Office, Canva");
  typePrint("");
  typePrint("PROJECTS:");
  typePrint("- Lost & Found Web Application");
  typePrint("- Gaming E-Commerce Website");
  typePrint("- Digital Twin Research (Cyclone-Prone Areas)");
  typePrint("");
  typePrint("CERTIFICATIONS:");
  typePrint("- Google Data Analytics");
  typePrint("- Machine Learning – Andrew Ng");
  typePrint("- Python – University of Michigan");
}











