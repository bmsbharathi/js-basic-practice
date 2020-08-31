let attempts = 10;
let numberInMind = Math.floor(Math.random() * 100);
let guessButton = document.querySelector('#game');
let guessedNumber = document.querySelector('#guess');

//Result area elements
let remainingGuess = document.querySelector("#remainingGuess");
let previousGuesses = document.querySelector("#previousGuesses");
let result = document.querySelector("#result");
let guessesMade = [];


guessButton.addEventListener('click', makeGuess);

function makeGuess() {


    attempts--;
    remainingGuess.textContent = "You have " + attempts + " guesses remaining!";

    if (attempts == 0) {
        result.textContent = "Game Over!"
        guessButton.hidden = true;
        guessedNumber.value = null;
    } else {

        guessesMade.push(guessedNumber.value);
        previousGuesses.textContent = "Your Previous guesses: " + guessesMade;



        if (guessedNumber.value == numberInMind) {

            result.textContent = "You Won!";
            result.style.color = "green";
            previousGuesses.textContent = "";
            guessButton.hidden = true;
        } else if (guessedNumber.value > numberInMind) {

            result.textContent = "HIGH!";
            result.style.color = "red";
        } else {

            result.textContent = "LOW!";
            result.style.color = "red";
        }
    }
    guessedNumber.value = null;
    guessedNumber.focus();
}

function reset() {

    attempts = 10;
    guessesMade = [];
    previousGuesses.textContent = "";
    result.textContent = "";
    remainingGuess.textContent = "You have " + attempts + " guesses remaining!";
    guessedNumber.value = '';
    guessedNumber.focus();
    guessButton.hidden = false;
    numberInMind = Math.floor(Math.random() * 100);
}
