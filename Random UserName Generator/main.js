const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");

let adjectives = [
  "cool",
  "fast",
  "silent",
  "crazy",
  "happy",
  "dark",
  "shiny",
  "smart",
  "brave",
  "lazy",
];

let nouns = [
  "tiger",
  "dragon",
  "wizard",
  "coder",
  "gamer",
  "ninja",
  "robot",
  "ghost",
  "king",
  "fox",
];

let adjWord = "";
let nounWord = "";
let num = "";
let finalUser = "";

const randomNum = () => {
  num = Math.floor(Math.random() * 1000)
}

const randAdj = () => {
  let adj = Math.floor(Math.random() * adjectives.length)
  adjWord = adjectives[adj]
}

const randNoun = () => {
  let noun = Math.floor(Math.random() * nouns.length)
  nounWord = nouns[noun]
}

const finalUsername = () => {
  finalUser = adjWord + nounWord + num;
}

const generateUN = () => {
  randAdj();
  randNoun();
  randomNum();
  finalUsername();
  msg.textContent = finalUser;
}

const copyUN = () => {
  if (msg.textContent !== "Your Username Will be generated here") {
    navigator.clipboard.writeText(finalUser);
    copyBtn.textContent = "Copied";
    setInterval(() => {
      copyBtn.textContent = "Copy UserName"
    }, 1500);
  } else {
    copyBtn.textContent = "Generate UserName first"
     setInterval(() => {
      copyBtn.textContent = "Copy UserName"
    }, 1500);
  }
}

btn.addEventListener("click", generateUN)
copyBtn.addEventListener("click", copyUN)