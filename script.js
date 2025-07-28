'use strict';

const minNumber = 1;
const maxNumber = 100;

let guess;
let attempts = 0;
let gameRunning = true;


function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    console.log(randomNumber);
}
generateRandomNumber();


function getPlayerGuess() {
    guess = window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
    guess = Number(guess);

    if (guess < minNumber || guess > maxNumber || isNaN(guess)) {
        window.alert('Please enter a valid number');
    } 
}
getPlayerGuess();


function checkGuess(guess, correctNumber) {

    attempts++;
    if (guess < correctNumber) {
        window.alert('The number is too low. Try again!');
        window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
    } else if (guess > correctNumber) {
        window.alert('The number is too high. Try again!');
        window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
    } else {
        window.alert(`Correct! The answer was ${correctNumber}. It took ${attempts} attempts`);
    }
}