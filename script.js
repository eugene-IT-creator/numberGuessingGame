(() => {
    alert("Welcome to the evil AI number guessing game!\nRules:\n1.) You will have 10 attempts to guess a secret number that the AI has picked at random\n2.) The AI will be nice and inform you if your guess is too low or too high\n3.) After 10 attempts when you have inevitably failed, the secret number will be revealed to you\nTo start:\n1.) Right click and select 'inspect' to open the web inspector\n2.) Go to the 'console' tab")
    console.log("Welcome to the evil AI number guessing game... you will surely never defeat me. BUT if you want to try you can type 'game()' to start the game now!");
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
        } else if (guess === "") {
            alert("Don't be shy. Give me something!");
        } else {
            alert("Invalid Input. What grade did you get in maths?? Do you know what an integer is or not?");
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
    do {
        attempts++;
        const guess = getPlayerGuess();
        if (guess == null) {
            cancelledGame = true;
            break;
        }
        console.log(`Attempt: ${attempts} (${10 - attempts} remaining)`);
        console.log(`You guessed: ${guess}`);
        const result = checkGuess(secretNumber, guess);
        if (result == "Correct! You win") {
            wonGame = true;
        }
        console.log(result);
    } while (!wonGame && attempts < 10);

    if (wonGame) {
        message = `NOOOO!! Impossible, you have won the game and guessed the correct number in ${attempts} attempts with a score of ${11 - attempts} --- If you want to play again type 'game()' in the console`;
    } else if (cancelledGame) {
        message = "You have cancelled the game, and given up against the Evil AI hahaha! Don't even try again --- If you want to play again type 'game()' in the console";
    } else {
        message = `You lose! Hahahaha, Evil AI rules the world of secret numbers! The correct number was ${secretNumber} --- If you want to play again type 'game()' in the console`;
    }

    return message;
}


