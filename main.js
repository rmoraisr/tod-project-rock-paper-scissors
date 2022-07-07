const tieMessage = 'Arr! No one won this round';
const winMessage = 'I won this round, You lost!';
const defeatMessage = 'You win this; round!';
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
function playRound(playerSelection, computerSelection) {
    playerSelection = 'Paper'; // ! remove code

    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return roundResult = tieMessage;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        return roundResult = winMessage;
    } else {
        return roundResult = defeatMessage;
    }
}

// Call playRound(), keeps score and return the winner after a defined number of rounds
// function playGame() {
//     if (roundResult === 'I won this round, You lost!') {
//         computerScore += 1;
//     }
//     else if (roundResult === )

// }


(playRound());
console.log(roundResult);
