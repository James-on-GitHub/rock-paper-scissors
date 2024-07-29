// Computers choice: will randomly return one of the array items when called.
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let compChoice = options[Math.floor(Math.random() * options.length)];
    console.log(`The computer chose ${compChoice}.`);
    return compChoice;
}

// Human choice: return users, case in-sensitive, input. User is only allowed to enter the available options.
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

// Score variables to keep track of players scores.
let humanScore = 0;
let computerScore = 0;

// Players choice variables.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const dualSelection = humanSelection && computerSelection;

// Play a round: returns both players choices, declares a winner or loser and shows the adjusted score.
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