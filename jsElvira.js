// generates random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// takes user input
function getUserGuess() {
    return prompt("Enter your number")
}

// compares user input and computer guess, returns 0 if match, -1 if not
function checkGuess(randomNum, userNum) {
    let checkGuessNum = randomNum - userNum;

    if (checkGuessNum == 0) {
        alert("User won");
        return true;
    }
    else {
        if (checkGuessNum > 0) {
            console.log("The number you entered is lower than the secret number.");
        }
        else {
            console.log("The number you entered is higher than the secret number.");
        }
        return false;
    }
}

// main gameplay
function game() {
    const randomGuess = generateRandomNumber();
    // console.log(randomGuess);
    const attempts = 10;

    for (var attempt = attempts; attempt >= 1; attempt--) {
        let userGuess = getUserGuess();
        if (userGuess.trim().toUpperCase() == "Q") {
            break;
        }
        if (checkGuess(randomGuess, userGuess))
            break;
        else
            console.log("You have " + attempt + " left.");
        continue;
    }

}

alert("Help AI learn to guess numbers!\nIn this little game, there is a secret number that the computer calculated.\nYour task is to guess the secret number.\nComputer will give you hints on how to guess it.\nWith your help AI will learn how to guess the number with hints.\n");
alert("If you get tired in the middle of a game, you can type 'Q' or 'q' to exit the game");

var userAnswer;

while (userAnswer != "Y" || userAnswer != "N") {
    if (userAnswer == undefined) {
        userAnswer = prompt("Would you like to start a game? (Y - yes, N - no)");
    }

    if (userAnswer.trim().toUpperCase() == "Y") {
        game();
        break;
    }
    else if (userAnswer.trim().toUpperCase() == "N") {
        alert("If you change your mind, you can refresh the page to start again.");
        break;
    }
    else {
        userAnswer = prompt("Your answer was unclear.\n\nWould you like to start a game? (Y - yes, N - no)")
    }
}

