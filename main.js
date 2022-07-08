const tieMessage = 'Arr! No one won this round';
const winMessage = 'I won this round, You lost!';
const defeatMessage = 'You win this round!';
let endMessage = '';
let roundResult = '';
let computerScore = 0;
let playerScore = 0;

/**
 * The computerPlay function returns a random choice from the computerChoices array.
 * @returns The computer's choice of rock, paper, or scissors.
 */
function computerPlay() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

/**
 * It takes two arguments, a string for the player's selection and a string for the computer's
 * selection, and returns a string that says whether the player won, lost, or tied
 * @param playerSelection - The player's choice of rock, paper, or scissors.
 * @param computerSelection - a string that is either 'rock', 'paper', or 'scissors'
 * @returns The result of the round.
 */
function playRound(playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return roundResult = tieMessage;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        roundResult = winMessage + ` ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
    } else {
        roundResult = defeatMessage + ` ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    }

    if (computerScore === 5) {
        disableButton();
        endMessage = 'I won the Game! Hahahahahah!!!';
    };
    if (playerScore === 5) {
        disableButton()
        endMessage = 'You won the Game!';
    };

    // Rendering
    renderValues(roundResult, computerScore, playerScore);
    renderEndMessage(endMessage);
};

/**
 * DOM MANIPULATION
 * All code from now is related to DOM methods
 */
function renderValues(roundResult, computerScore, playerScore) {
    const resultPar = document.querySelector('.result');
    resultPar.innerHTML = `<p>${roundResult}</p>`;

    const computerScorePar = document.querySelector('#computerScore');
    computerScorePar.textContent = `Computer score: ${computerScore}`;

    const playerScorePar = document.querySelector('#playerScore');
    playerScorePar.textContent = `Player score: ${playerScore}`;
}

function renderEndMessage(endMessage) {
    const winner = document.querySelector('.winner');
    winner.innerHTML = `<h1>${endMessage}</h1>`;
}

const buttons = document.querySelectorAll('#btn');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value)
    );
});

function disableButton() {
    buttons.forEach(e => { e.disabled = true });
};

function enableButton() {
    buttons.forEach(e => { e.disabled = false });
};

function resetScore() {
    computerScore = 0;
    playerScore = 0;
    renderValues(roundResult = '', computerScore, playerScore);
    renderEndMessage(endMessage = '');
    return
}

const resetButton = document.querySelector('#btn-reset');
resetButton.addEventListener('click', () => { resetScore(), enableButton() });




