const announce = document.querySelector('h2');
const score = document.querySelector('h5');
const result = document.querySelector('h3');
const restart = document.querySelector('#restart');

// Player choice
const playerChoice = Array.from(document.querySelectorAll('.button'));
let computerScore = 0;
let playerScore = 0;


playerChoice.forEach(choice => {
    choice.onclick =  () => {
        // Check if score less than 5
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection =  playerChoice.indexOf(choice) + 1;
    
            const computerSelection = getComputerChoice();
        
            playRound(computerSelection, playerSelection);

            if (playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                    announce.textContent = "Human:" + playerScore + ". Robot:" + computerScore + ". Human wins!";
                }
                else if (playerScore < computerScore) {
                    announce.textContent = "Human:" + playerScore + ". Robot:" + computerScore + ". Robot wins!";
                }
                else 
                    announce.textContent = "Human:" + playerScore + ". Robot:" + computerScore + ". It's a tie!";
                }
        }            
    }
})

// Button restart
restart.addEventListener('click', reset);


// Create random number (1,2 or 3) generator for computer
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice;
}

// Compare results
function playRound(computer, player) {
    if (computer === player) {
        result.textContent = 'It\'s a tie!';
        playerScore ++;
        computerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 1 && player === 2) {
        result.textContent = "You win! Paper beats Rock.";
        playerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 2 && player === 3) {
        result.textContent = "You win! Scissors beat Paper.";
        playerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 3 && player === 1) {
        result.textContent = "You win! Rock beats Scissors.";
        playerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 2 && player === 1) {
        result.textContent = "Robot wins! Paper beats Rock.";
        computerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 3 && player === 2) {
        result.textContent = "Robot wins! Scissors beat Paper.";
        computerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
    else if (computer === 1 && player === 3) {
        result.textContent = "Robot wins! Rock beats Scissors.";
        computerScore ++;
        score.textContent = playerScore + " : " + computerScore;
    }
}

// Restart game
function reset() {
    computerScore = 0;
    playerScore = 0;
    score.textContent = ' 0 : 0 ';
    announce.textContent = 'Make your choice!';
    result.textContent = 'Score';
}

