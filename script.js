const announce = document.querySelector('h2');
const score = document.querySelector('h5');
// Player choice
const playerChoice = Array.from(document.querySelectorAll('button'));
let computerScore = 0;
let playerScore = 0;

playerChoice.forEach(choice => {
    choice.onclick =  () => {
        let playerSelection =  playerChoice.indexOf(choice) + 1;
        console.log('playerSelection: ', playerSelection);

        const computerSelection = getComputerChoice();
        console.log("computerSelection: " , computerSelection);
        
        playRound(computerSelection, playerSelection);
            console.log(computerScore, playerScore);

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                announce.textContent = "Player: " + playerScore + ". Computer: " + computerScore + ". Player wins!";
            }
            else if (playerScore < computerScore) {
                announce.textContent = "Player:  " + playerScore + ". Computer: " + computerScore + " .Computer wins!";
            }
            else announce.textContent = "Player:  " + playerScore + ". Computer: " + computerScore +  ". It's a tie!";
            }
            console.log('computer : player  ', computerScore, playerScore);

    }
})

// Create random number (1,2 or 3) generator for computer
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice;
}

// Compare results
function playRound(computer, player) {
    if (computer === player) {
        announce.textContent = 'It\'s a tie!';
        playerScore ++;
        computerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return playerScore, computerScore;
    }
    else if (computer === 1 && player === 2) {
        announce.textContent = "You win! Paper beats Rock.";
        playerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return playerScore;
    }
    else if (computer === 2 && player === 3) {
        announce.textContent = "You win! Scissors beat Paper.";
        playerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return playerScore;
    }
    else if (computer === 3 && player === 1) {
        announce.textContent = "You win! Rock beats Scissors.";
        playerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return playerScore;
    }
    
    else if (computer === 2 && player === 1) {
        announce.textContent = "You lose! Paper beats Rock.";
        computerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return computerScore;
    }
    else if (computer === 3 && player === 2) {
        announce.textContent = "You lose! Scissors beat Paper.";
        computerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return computerScore;
    }
    else if (computer === 1 && player === 3) {
        announce.textContent = "You lose! Rock beats Scissors.";
        computerScore ++;
        score.textContent = computerScore + " : " + playerScore;
        return computerScore;
    }
}


