const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb') {
        console.log('Invalid input');
    } else {
        return userInput;
    }
}

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    if (userChoice === computerChoice) {
        return 'Tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'You won!'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    } else {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice('');

    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
