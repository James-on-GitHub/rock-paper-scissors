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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw. No one wins.`)
    }
}

playRound(humanSelection, computerSelection);