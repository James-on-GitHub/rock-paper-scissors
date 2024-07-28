// Computers choice: will randomly return one of the array items when called.
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(`The computer chose ${choice}.`);
    return choice;
}

// Human choice: return user input.
function getHumanChoice() {
    let options = "Rock, Paper or Scissors."
    let choice = prompt("Type Rock, Paper or Scissors:");
    if (choice === "Rock") {
        console.log(`You chose ${choice}.`);
    } else if (choice === "Paper") {
        console.log(`You chose ${choice}.`);
    } else if (choice === "Scissors") {
        console.log(`You chose ${choice}.`);
    } else {
        alert(`Please enter ${options}`);
    }
    return choice;
}

let humanScore = 0;
let computerSore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const dualSelection = humanSelection && computerSelection;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! You both chose ${dualSelection}.`);
    } 
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } 
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
}

playRound(humanSelection, computerSelection);