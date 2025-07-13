const words = ["apple", "banana", "cherry", "date", "elderberry"];
let currentWord = "";
let currentDuelWord = "";

document.getElementById("submit-word").addEventListener("click", checkWord);
document.getElementById("start-duel").addEventListener("click", startDuel);
document.getElementById("submit-duel").addEventListener("click", checkDuel);

function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word-puzzle").innerText = `Guess the word: ${"_".repeat(currentWord.length)}`;
    document.getElementById("message").innerText = "";
    document.getElementById("spelling-duel").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function checkWord() {
    const userInput = document.getElementById("word-input").value.toLowerCase();
    if (userInput === currentWord) {
        document.getElementById("message").innerText = "Correct! You found the word!";
        document.getElementById("start-duel").style.display = "block";
        document.getElementById("game").style.display = "none";
    } else {
        document.getElementById("message").innerText = "Try again!";
    }
}

function startDuel() {
    currentDuelWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("duel-word").innerText = `Spell the word: ${currentDuelWord}`;
    document.getElementById("duel-message").innerText = "";
    document.getElementById("spelling-duel").style.display = "block";
}

function checkDuel() {
    const userInput = document.getElementById("duel-input").value.toLowerCase();
    if (userInput === currentDuelWord) {
        document.getElementById("duel-message").innerText = "Correct! You spelled the word!";
    } else {
        document.getElementById("duel -message").innerText = "Incorrect! Try again!";
    }
}
