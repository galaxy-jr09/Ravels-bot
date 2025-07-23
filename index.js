// Revels Bot - Messenger-style Fun Chatbot with c3c/appstate login // Author: ChatGPT (Customized for user)

const express = require("express"); const bodyParser = require("body-parser"); const fs = require("fs"); const app = express();

app.use(bodyParser.json());

// Load admin config const config = { ADMIN: ["6155600411186", "SECOND_ADMIN_UID"], BOTNAME: "Revels Bot", PREFIX: "" };

// Sample fun responses for known commands const commands = { "hi": "Ki re pagol? 😜", "hello": "Oi pagla! Kemon asis? 😆", "ami ki pagol": "Toke niye Google-o confused! 🫠", "koi tui": "Bondhu tui ki jail e geli? 😂", "valo asi": "Toke bhalo dekhlei din bhalo lage ❤️", "bye": "Ja pagla, abar ayish 😢", "bot": "Ami hochi Revels Bot, tomar bondhu! 🤖", "joke": "Teacher: Fail korli keno? Student: Question-e emotion chhilo na sir 😎", "help": "Commands: hi, hello, ami ki pagol, koi tui, bot, bye, joke...", "revels": "E bot tomar dost der maje hungama korte ashche! Revels Bot reporting in! 🎉" };

// Random funny fallback replies const fallbackReplies = [ "Tor mathay thik ache to? 🙄", "Pagol pagol lage tui! 😂", "Tui ki amar sathe moja korchis? 😜", "Ami hoilam bot, prem korta pari na 😍", "Kisu bujhlam na, abar bol! 🤯", "Kichu akta bolli... jeta universe bojhe na 😱", "Tui kotha bollei moja lage! 😊" ];

// Endpoint to simulate message receiving app.post("/chat", (req, res) => { const message = req.body.message.toLowerCase();

// Find matching command let response = null; for (const key in commands) { if (message.includes(key)) { response = commands[key]; break; } }

// Fallback random reply if (!response) { response = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]; }

res.json({ reply: response }); });

// Start server const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(${config.BOTNAME} is running on port ${PORT}); });

