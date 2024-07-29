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
    let userInput = prompt("Type Rock, Paper or Scissors:");
    userInput = userInput.toLowerCase().split(" ").map(userInput => userInput[0].toUpperCase() + userInput.slice(1)).join(" ");
    if (userInput === "Rock") {
        console.log(`You chose ${userInput}.`);
    } 
    else if (userInput === "Paper") {
        console.log(`You chose ${userInput}.`);
    } 
    else if (userInput === "Scissors") {
        console.log(`You chose ${userInput}.`);
    } 
    else {
        alert(`Please enter ${options}`);
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const dualSelection = humanSelection && computerSelection;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! You both chose ${dualSelection}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    } 
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore = ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    } 
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore = ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore = ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore = ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore = ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore = ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`You're score is ${humanScore}.`);
        console.log(`The computers score is ${computerScore}.`);
    }
}

playRound(humanSelection, computerSelection);