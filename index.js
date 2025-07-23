require('dotenv').config();
const fs = require("fs");

const adminUIDs = [process.env.ADMIN_UID1, process.env.ADMIN_UID2];
const botName = process.env.BOTNAME || "Bot";

const readline = require("readline");

const replies = [
  "Ki bolish re vai 🤣",
  "Tui je ekta legendary clown 😂",
  "Eto funny tor matha naki Google server? 🤯",
  "Bot er mathay jhamela 🤖",
  "Eita shune amar circuit fried 🧠🔥"
];

function getRandomReply() {
  return replies[Math.floor(Math.random() * replies.length)];
}

console.log(`🤖 ${botName} is running...`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("👤 You: ");
rl.prompt();

rl.on("line", (msg) => {
  const uid = "6155600411186"; // pretend incoming user
  if (adminUIDs.includes(uid)) {
    const reply = getRandomReply();
    console.log(`🤖 ${botName}: ${reply}`);
  } else {
    console.log("🤖 Access denied.");
  }
  rl.prompt();
});
