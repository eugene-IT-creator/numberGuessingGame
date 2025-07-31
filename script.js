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
    return secretNumber == playerGuess ? 'Correct! You win' : secretNumber > playerGuess ? 'Your guess is too low' : 'Your guess is too high';
}

const game = () => {
    let attempts = 0;
    let wonGame = false;
    let cancelledGame = false;
    const secretNumber = generateRandomNumber();
    //let guessedNumbers = [];

    alert("Welcome to the evil AI number guessing game. I hope you will lose this game and not defeat me. I have selected a number which I know you can never guess! haha!");

    do {
        attempts++;
        const guess = getPlayerGuess();
        guess == null && (cancelledGame = true);
        console.log(secretNumber);
        const result = checkGuess(secretNumber, guess);
        console.log(result);
        result == 'Correct! You win' && (wonGame = true);
        wonGame ? alert(`${result} with a score of ${10 - attempts + 1}`) : alert(`${result}, ${10 - attempts} attempts remaining`);

    } while (!wonGame && attempts < 10 && !cancelledGame);
}

