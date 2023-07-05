// Create random number (1,2 or 3) generator for computer
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice;
    
}

// Let player choose rock, paper or scissors.
let playerSelection = 0;
playerSelection = prompt("Rock, paper, scissors? ");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

// Computer choice
let computerSelection = 0;
computerSelection = getComputerChoice();
console.log(getComputerChoice(computerSelection));


// Convert selection to number.


if (playerSelection === 'rock') {
    playerSelection = 1;
}
else if (playerSelection === 'paper') {
    playerSelection = 2;
}
else if (playerSelection ==='scissors') {
    playerSelection = 3;
}
else alert('Incorrect selection');

console.log(playerSelection);


// Compare and choose who won.
if (computerSelection === playerSelection) {
    alert('It\'s a tie!');
}
else if (computerSelection === 1 && playerSelection === 2) {
    alert("You win! Paper beats Rock")
}
else if (computerSelection === 2 && playerSelection === 3) {
    alert("You win! Scissors beat Paper")
}
else if (computerSelection === 3 && playerSelection === 1) {
    alert("You win! Rock beats Scissors")
}

else if (computerSelection === 2 && playerSelection === 1) {
    alert("You lose! Paper beats Rock")
}
else if (computerSelection === 3 && playerSelection === 2) {
    alert("You lose! Scissors beat Paper")
}
else if (computerSelection === 1 && playerSelection === 3) {
    alert("You lose! Rock beats Scissors")
}

else alert("Something went wrong!");

// Generate random number for computer
// If number 