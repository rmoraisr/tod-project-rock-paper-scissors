const rock = document.querySelector('#btn-r');
rock.addEventListener('click', () => playGame('rock'));

const paper = document.querySelector('#btn-p');
paper.addEventListener('click', () => playGame('paper'));

const scissors = document.querySelector('#btn-s');
scissors.addEventListener('click', () => playGame('scissors'));


function computerPlay() {
    const arrChoices = ['Paper', 'Rock', 'Scissors'];
    // get random index
    const randomIndex = Math.floor(Math.random() * arrChoices.length);

    // get random item form the array
    const item = arrChoices[randomIndex];
    return item;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelection = computerPlay()
    let looserMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}. 1 point added to your score!!`;
    let resultMessage;
    // 1 represents player wins, 0 computer wins
    let result;

    if (computerSelection === playerSelection) {
        resultMessage = `It\'s a tie!! Both choose ${computerSelection}`;
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        resultMessage = looserMessage;
        result = 0;
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        resultMessage = looserMessage;
        result = 0;
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        resultMessage = looserMessage;
        result = 0;
    }
    else {
        resultMessage = winnerMessage;
        result = 1;
    }
    return { resultMessage, result }
}

function playGame(playerSelection) {
    let computerScore = 0;
    let playerScore = 0;

    let { resultMessage, result } = playRound(playerSelection);
    console.log(resultMessage);
    if (result == 1) {
        playerScore += 1;
    }
    else if (result == 0) {
        computerScore += 1;
    }

    console.log(`Player has ${playerScore} point(s), Computer has ${computerScore} point(s).`)
    if (playerScore > computerScore) {
        console.log('Players wins the game!!')
    }
    else if (playerScore < computerScore) {
        console.log('Computer wins the game!!')
    }
    else {
        console.log('Tied!!')
    }
}