const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const getPlayerGuess = () => {
    let guess;
    let isValidInput = false;

    while (!isValidInput) {
        guess = Number(prompt("Please enter a number between 1 and 100:"));
        if (guess == null) {
            return null;
        }
        if (!isNaN(guess) && !(guess > 100) && !(guess < 1)) {
            isValidInput = true;
            break;
        } else {
            alert("Invalid Input");
        }
    }

    return guess;
}

const checkGuess = (secretNumber, playerGuess) => {
    return secretNumber = playerGuess ? 'Correct! You win' : secretNumber > playerGuess ? 'Your guess is too low' : 'Your guess is too high';
}

