// Create random number (1,2 or 3) generator for computer
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice;
}

// Compare results
function playRound(computer, player) {

    if (computer === player) {
        alert('It\'s a tie!');
        playerScore ++;
        computerScore ++;
        return playerScore, computerScore;
    }
    else if (computer === 1 && player === 2) {
        alert("You win! Paper beats Rock")
        playerScore ++;
        return playerScore;
    }
    else if (computer === 2 && player === 3) {
        alert("You win! Scissors beat Paper")
        playerScore ++;
        return playerScore;
    }
    else if (computer === 3 && player === 1) {
        alert("You win! Rock beats Scissors")
        playerScore ++;
        return playerScore;
    }
    
    else if (computer === 2 && player === 1) {
        alert("You lose! Paper beats Rock")
        computerScore ++;
        return computerScore;
    }
    else if (computer === 3 && player === 2) {
        alert("You lose! Scissors beat Paper")
        computerScore ++;
        return computerScore;
    }
    else if (computer === 1 && player === 3) {
        alert("You lose! Rock beats Scissors")
        computerScore ++;
        return computerScore;
    }
    
    else alert("You messed up. You lose!");
        computerScore ++;
        return computerScore;
    }

// Player choice

let playerSelection = 0;
let computerScore = 0;

const playerChoice = Array.from(document.querySelectorAll('button'));
console.log(playerChoice);
playerChoice.forEach(function(choice) {
    choice.onclick =  function() {
        playerSelection =  playerChoice.indexOf(choice) + 1;
        console.log(playerSelection);
    }
})

let computerSelection = getComputerChoice();
console.log("computerSelection: " , computerSelection);


playRound(computerSelection, playerSelection);
//console.log(playerSelection, computerScore);



        // OLD CODE

// // Let player choose rock, paper or scissors.
// for (let i = 0; i < 5; i++) {
//     let playerChoice = prompt("Rock, paper, scissors? ");
//     playerChoice = playerChoice.toLowerCase();
//     console.log("player Choice : ", playerChoice);

//     // Computer choice

//     let computerSelection = getComputerChoice();
//     console.log("computerSelection: " , computerSelection);


//     // Convert selection to number.

//     let playerSelection;

//     if (playerChoice === 'rock') {
//         playerSelection = 1;
//     }
//     else if (playerChoice === 'paper') {
//         playerSelection = 2;
//     }
//     else if (playerChoice ==='scissors') {
//         playerSelection = 3;
//     }
//     //else alert('Incorrect selection');

//     console.log("player Selection: ", playerSelection);


    // Compare and choose who won.
    //  console.log("computerSelection extra: " , computerSelection);


//         playRound(computerSelection, playerSelection);
//         //computerSelection = computerSelection;
//         //playerSelection = playerSelection;
//         console.log(playerScore, computerScore);
// }


// if (playerScore > computerScore) {
//     alert("Player: " + playerScore + ". Computer: " + computerScore + ". Player win!");
// }
// else if (playerScore < computerScore) {
//     alert("Player:  " + playerScore + ". Computer: " + computerScore + " .Computer wins!");
// }
// else alert("Player:  " + playerScore + ". Computer: " + computerScore +  ". It's a tie!");


