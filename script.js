(() => {
    const minNumber = 1;
    const maxNumber = 100;

    let guess;
    let attempts = 0;
    let runningGame = true;

    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    // function generateRandomNumber() {
    //     let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    // }

    function getPlayerGuess() {
        while (runningGame) {
            guess = window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
            guess = Number(guess);

            if (guess < minNumber || guess > maxNumber || isNaN(guess)) {
                window.alert('Please enter a valid number');
            } else {
                checkGuess();
            }
        }
    }

    function checkGuess() {
        attempts++;
        if (guess < randomNumber) {
            window.alert('The number is too low. Try again!');
            // window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
        } else if (guess > randomNumber) {
            window.alert('The number is too high. Try again!');
            // window.prompt(`Enter a number between ${minNumber} & ${maxNumber}`);
        } else {
            window.alert(`Correct! The answer was ${randomNumber}. It took ${attempts} attempts`);
            runningGame = false;
        }
    }

    function game() {
        getPlayerGuess();
    }

    game();
})();