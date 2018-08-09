window.addEventListener("load", init);

// Üldised

// Tasemed
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// vaheta levelit
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Sõnad
const words = [
  "andres",
  "martin",
  "margus",
  "jaan",
  "jüri",
  "lembit",
  "aleksandr",
  "ants",
  "vladimir",
  "sergei",
  "toomas",
  "aivar",
  "meelis",
  "rein",
  "tarmo",
  "vello",
  "urmas",
  "andrus",
  "aare",
  "priit",
  "peeter",
  "endel",
  "mihkel",
  "paul",
  "nikolai",
  "marko",
  "heino",
  "kalev",
  "raivo",
  "mati",
  "madis",
  "katrin",
  "tiina",
  "anu",
  "tiiu",
  "anne",
  "milvi",
  "svetlana",
  "sirje",
  "valentina",
  "reet",
  "jelena",
  "olga",
  "maie",
  "galina",
  "tatjana",
  "ülle",
  "vaike",
  "aino",
  "marika",
  "irina",
  "linda",
  "ene",
  "sirje",
  "mare",
  "aime",
  "eha",
  "urve",
  "laine",
  "riina",
  "maria",
  "külli",
  "silvi",
  "anna",
  "aino ",
  "hilda",
  "heli",
  "anne"
];

// Init mäng
function init() {
  // näita sekundeid UI
  seconds.innerHTML = currentLevel;
  // lae sõna arrayst
  showWord(words);
  // Alusta sõnade matchimist
  wordInput.addEventListener("input", startMatch);
  // Call countdown iga sekund
  setInterval(countdown, 1000);
  // Kontrolli mängu staatust
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // kui skoor -1
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Õige !!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Vali & Näita suvalist sõna
function showWord(words) {
  // genereeri suvaline array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Väljasta suvaline sõna
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Kontrolli, et aeg poleks otsas
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Mäng läbi
    isPlaying = false;
  }
  // Näita aega
  timeDisplay.innerHTML = time;
}

// Kontrolli mängu staatust
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Mäng Läbi !!!";
    score = -1;
  }
}
