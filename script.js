// Rock paper scissors

const pagePlayerScore = document.querySelector('#player-score');
const pageComputerScore = document.querySelector('#computer-score');
const outcome = document.querySelector('#outcome');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// Generate a random number between 0 and choices.length and output corresponding choice
function getComputerChoice() {
    // Create array with choices
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

// Play a round
function playRound(playerSelection, computerSelection) {
    // Return values:
    // -1 means player has invalid choice, 0 means tie, 1 means player wins, 2 means computer wins
    if (playerSelection === computerSelection)
    {
        console.log('Tie');
        return 0;
    }
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'scissors':
                    console.log('Computer wins');
                    return 1;
                case 'paper':
                    console.log('Computer wins');
                    return 2;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'scissors':
                    console.log('You win');
                    return 1;
                case 'rock':
                    console.log('Computer wins');
                    return 2;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'paper':
                    console.log('You win');
                    return 1;
                case 'rock':
                    console.log('Computer wins');
                    return 2;
            }
            break;
    }
}

function updateScore(playerScore, computerScore) {
    pagePlayerScore.textContent = 'Your score: ' + playerScore;
    pageComputerScore.textContent = 'Computer score: ' + computerScore;
}

function game(player) {
    if (playerScore >= 5 || computerScore >= 5)
    {
        if (playerScore > computerScore) {
            outcome.textContent = "You win!";
        }
        else {
            outcome.textContent = "You lose!";
        }
    }
    else {
        let playerChoice = player;
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        switch (result) {
            case 1:
                playerScore++;
                outcome.textContent = 'You chose ' + playerChoice + ', computer chose ' + computerChoice + '.';
                updateScore(playerScore, computerScore);
                break;
            case 2:
                computerScore++;
                updateScore(playerScore, computerScore);
                break;
            case 0:
                outcome.textContent = 'You chose ' + playerChoice + ', computer chose ' + computerChoice + '.';
                break;
        }
        if (playerScore >= 5 || computerScore >= 5)
        {
            if (playerScore > computerScore) {
                outcome.textContent = "You win!";
            }
            else {
                outcome.textContent = "You lose!";
            }
        }
    }
}

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));
// Play game
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    // Play the game until someone reaches a score of 5
    while (playerScore != 5 || computerScore != 5) {
        let playerChoice = prompt('Rock, paper, or scissors?');
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        switch (result) {
            case -1:
                outcome.textContent = 'Invalid choice.';
                break;
            case 1:
                playerScore++;
                outcome.textContent = 'You chose ' + playerChoice + ', computer chose ' + computerChoice + '.';
                updateScore(playerScore, computerScore);
                break;
            case 2:
                computerScore++;
                updateScore(playerScore, computerScore);
                break;
            case 0:
                outcome.textContent = 'You chose ' + playerChoice + ', computer chose ' + computerChoice + '.';
                break;
        }
    }
    // Compare scores
    if (playerScore > computerScore) {
        alert('You win!');
    }
    else {
        alert('You lose!');
    }
}
*/
