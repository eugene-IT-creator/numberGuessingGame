(() => {
    console.log("Welcome to the evil AI number guessing game... you will surely never defeat me. BUT if you want to try you can type 'game()' to start the game now!")
})();

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const getPlayerGuess = () => {
    let guess;
    let isValidInput = false;

    while (!isValidInput) {
        guess = prompt("Please enter a number between 1 and 100:");
        if (guess == null) {
            return null;
        }else if (!isNaN(guess) && !(guess > 100) && !(guess < 1)) {
            isValidInput = true;
            break;
        } else {
            alert("Invalid Input");
        }
    }

    return parseInt(guess);
}

const checkGuess = (secretNumber, playerGuess) => {
    return secretNumber == playerGuess ? "Correct! You win" : secretNumber > playerGuess ? "Your guess is too low" : "Your guess is too high";
}

const game = () => {
    let attempts = 0;
    let wonGame = false;
    let cancelledGame = false;
    let message;
    const secretNumber = generateRandomNumber();
    
    alert("Welcome to the evil AI number guessing game. I have selected a number which I know you can never guess! haha!");

    do {
        attempts++;
        const guess = getPlayerGuess();
        if (guess == null) {
            cancelledGame = true;
            break;
        }
        console.log(`Attempt: ${attempts} (${10 - attempts} remaining)`);
        const result = checkGuess(secretNumber, guess);
        if (result == "Correct! You win") {
            wonGame = true;
        }
        console.log(result);
        wonGame ? alert(`${result} with a score of ${11 - attempts}`) : alert(`${result}, ${10 - attempts} attempts remaining`);
    } while (!wonGame && attempts < 10);

    if (wonGame) {
        message = `NOOOO!! Impossible, you have won the game and guessed the correct number in ${attempts} attempts`;
    } else if (cancelledGame) {
        message = "You have cancelled the game, and given up against the Evil AI hahaha! Don't even try again"
    } else {
        message = `You lose! Hahahaha, Evil AI rules the world of secret numbers! The correct number was ${secretNumber}`;
    }

    return message;
}


