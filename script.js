// Create random number (1,2 or 3) generator for computer
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    return choice;
    
}

// Let player choose rock, paper or scissors.
//let playerChoice = 0;
let playerChoice = prompt("Rock, paper, scissors? ");
playerChoice = playerChoice.toLowerCase();
console.log("player Choice : ", playerChoice);

// Computer choice
//let computerSelection = 0;
const computerSelection = getComputerChoice();
console.log("computerSelection: " , computerSelection);


// Convert selection to number.

let playerSelection;

if (playerChoice === 'rock') {
    playerSelection = 1;
}
else if (playerChoice === 'paper') {
    playerSelection = 2;
}
else if (playerChoice ==='scissors') {
    playerSelection = 3;
}
else alert('Incorrect selection');

console.log("player Selection: ", playerSelection);


// Compare and choose who won.
console.log("computerSelection extra: " , computerSelection);

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