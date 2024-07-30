const playerOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return playerOptions[Math.floor(Math.random() * playerOptions.length)];
}

function displayComputerChoice() {
  console.log(`The computer chose ${getComputerChoice()}.`);
}

function getHumanChoice() {
  let humanInput = prompt(
    `Please type ${playerOptions[0]}, ${playerOptions[1]} or ${playerOptions[2]}.`
  );
  makeTitleCase(humanInput);
}

function makeTitleCase(humanChoice) {
  let array = humanChoice.toLowerCase().split();
  let titleCase = array
    .map((array) => array[0].toUpperCase() + array.slice(1))
    .join();
  displayHumanChoice(titleCase);
}

function displayHumanChoice(humanChoice) {
  if (humanChoice === "Rock") {
    console.log(`You chose ${humanChoice}.`);
  } else if (humanChoice === "Paper") {
    console.log(`You chose ${humanChoice}.`);
  } else if (humanChoice === "Scissors") {
    console.log(`You chose ${humanChoice}.`);
  } else {
    alert(
      `Please enter ${playerOptions[0]}, ${playerOptions[1]} or ${playerOptions[2]}.`
    );
  }
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
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore = ++computerScore;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore = ++humanScore;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore = ++humanScore;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore = ++computerScore;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore = ++computerScore;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore = ++humanScore;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    console.log(`You're score is ${humanScore}.`);
    console.log(`The computers score is ${computerScore}.`);
  }
}

playRound(humanSelection, computerSelection);
