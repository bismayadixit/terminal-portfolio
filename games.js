function startGame() {
  mode = "game-menu";
  typePrint("🎮 Games Menu:");
  typePrint("1️⃣ Guess the Number");
  typePrint("2️⃣ Typing Speed Test");
  typePrint("Type 1 or 2, or 'exit'");
}

function handleGameMenu(cmd) {
  if (cmd === "1") startGuessGame();
  else if (cmd === "2") startTypingTest();
  else if (cmd === "exit") {
    mode = "normal";
    typePrint("Exited games menu.");
  } else {
    typePrint("Invalid option.");
  }
}

function startGuessGame() {
  mode = "guess";
  gameNumber = Math.floor(Math.random() * 10);
  typePrint("Guess a number between 0–9");
}

function startTypingTest() {
  mode = "typing";
  typingStart = Date.now();
  testSentence = "linux terminal portfolio";
  typePrint(`Type this: ${testSentence}`);
}
