const title = document.querySelector("#title");
const subtitle = document.querySelector(".subtitle");
const gameImage = document.querySelector(".img");
const userGuess = document.querySelector("#user-guess");
const userHint = document.querySelector(".result");
const result = document.querySelector(".result");
const gameInfo = document.querySelector(".game-info");
const startButton = document.querySelector(".start-button");
const remainingGuess = document.querySelector("#remaining-guess");
const previousGuess = document.querySelector("#previous-guess");
const guessForm = document.querySelector("form");

let randomNumber;
let attempt;
let previousGuessArr;
let gameActive = false; 

function startGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1; 

  attempt = 3; // 3 Attempts
  previousGuessArr = [];
  gameActive = true; 

  // 🏆 Reset UI
  title.innerText = "Guess The Number:";
  gameImage.setAttribute(
    "src",
    "https://imgs.search.brave.com/STbF7zfP49dDlmkDEO-A_KCHc4uySQtRdYOy23A9_a0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5Lzg0LzQy/LzM2MF9GXzEwOTg0/NDIxMl9ObkxHVXJu/M1JnTUhRSXVxU2lM/R2xjOWQ0MTllSzJk/WC5qcGc"
  );
  gameInfo.classList.remove("hidden");
  subtitle.classList.add("hidden");
  startButton.classList.add("hidden");
  userHint.innerText = ""; // Clear previous hints
  result.innerText = ""; // Clear win/loss message
  userGuess.value = ""; // Reset input
  userGuess.disabled = false; // Enable input
  updateValues();
}

function checkGuess(e) {
  e.preventDefault(); 

  if (!gameActive) return;

  let guess = parseInt(userGuess.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    userHint.innerText = "⚠️ Enter a valid number (1-10)";
    return;
  }

  previousGuessArr.push(guess);
  attempt--;

  if (guess === randomNumber) {
    gameOver(true); 
    return;
  }

  if (attempt === 0) {
    gameOver(false);
  } else {
    result.classList.remove("hidden");
    userHint.innerText =
      guess > randomNumber
        ? `🔽 The number is smaller than ${guess}`
        : `🔼 The number is greater than ${guess}`;
    updateValues();
  }
}

function updateValues() {
  remainingGuess.innerText = `${attempt}`;
  previousGuess.innerText =
    previousGuessArr.length > 0 ? previousGuessArr.join(", ") : "None";
}

function gameOver(win) {
  gameActive = false; 

  if (win) {
    result.innerText = "🎉 You Won !!"; 
    result.classList.remove("hidden");
  } else {
    result.innerText = `❌ You Lose! The number was ${randomNumber}`;
    result.classList.remove("hidden");
  }

  userGuess.disabled = true;
  startButton.innerText = "Play Again";
  startButton.classList.remove("hidden");
}

startButton.addEventListener("click", startGame);
guessForm.addEventListener("submit", checkGuess);
