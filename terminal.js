const input = document.getElementById("commandInput");
const output = document.getElementById("output");

let history = [];
let historyIndex = -1;

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    if (!cmd) return;

    output.innerHTML += `<div class="line">$ ${cmd}</div>`;
    history.push(cmd);
    historyIndex = history.length;

    await handleCommand(cmd);

    input.value = "";
    scrollBottom();
  }

  // ↑ command history
  if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  }

  // ↓ command history
  if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      input.value = "";
    }
  }
});

function print(text) {
  output.innerHTML += `<div class="line">${text}</div>`;
}

function scrollBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
function typePrint(text, speed = 20) {
  let i = 0;
  const line = document.createElement("div");
  line.className = "line";
  output.appendChild(line);

  const interval = setInterval(() => {
    line.textContent += text.charAt(i);
    i++;
    scrollBottom();
    if (i >= text.length) clearInterval(interval);
  }, speed);
}
const availableCommands = [
  "help","about","skills","projects","education","certifications",
  "github","git status","birthday","date","time","location","contact",
  "resume","play game","game","games","joke","clear","exit"
];


input.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const match = availableCommands.find(c => c.startsWith(input.value));
    if (match) input.value = match;
  }
});
let soundEnabled = true;
const beep = document.getElementById("beep");

function playSound() {
  if (soundEnabled) {
    beep.currentTime = 0;
    beep.play();
  }
}

