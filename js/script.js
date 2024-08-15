const playerOptions = ["Rock", "Paper", "Scissors"];

const chooseOption = `${playerOptions[0]}, ${playerOptions[1]} or ${playerOptions[2]}`;

const playerSelections = {
  human: "",
  computer: "",
};

function getHumanChoice() {
  let humanChoice = prompt(`Please type ${chooseOption}`);
  humanChoice
    ? makeTitleCase(humanChoice) + getRoundWinner()
    : alert(`Nothing was entered. Please enter ${chooseOption}`);
}

function makeTitleCase(humanChoice) {
  let array = humanChoice.toLowerCase().split();
  let titleCase = array
    .map((array) => array[0].toUpperCase() + array.slice(1))
    .join();
  displayHumanChoice(titleCase);
  playerSelections.human = titleCase;
}

function displayHumanChoice(choice) {
  let humanChoice = `You chose ${choice}.`;
  if (choice === "Rock") {
    console.log(humanChoice) + getComputerChoice();
  } else if (choice === "Paper") {
    console.log(humanChoice) + getComputerChoice();
  } else if (choice === "Scissors") {
    console.log(humanChoice) + getComputerChoice();
  } else {
    alert(`Please enter ${chooseOption} only.`);
  }
}

function getComputerChoice() {
  let computerChoice =
    playerOptions[Math.floor(Math.random() * playerOptions.length)];
  displayComputerChoice(computerChoice);
  playerSelections.computer = computerChoice;
}

function displayComputerChoice(computerChoice) {
  console.log(`The computer chose ${computerChoice}.`);
}

function getRoundWinner() {
  let { human, computer } = playerSelections;
  let humanWins = `You win! ${human} beats ${computer}.`;
  let computerWins = `The computer wins! ${computer} beats ${human}.`;
  let draw = `It's a draw! You both chose ${human}.`;
  if (human === computer) {
    console.log(draw);
  } else if (human === "Rock" && computer === "Paper") {
    console.log(computerWins);
  } else if (human === "Rock" && computer === "Scissors") {
    console.log(humanWins);
  } else if (human === "Paper" && computer === "Rock") {
    console.log(humanWins);
  } else if (human === "Paper" && computer === "Scissors") {
    console.log(computerWins);
  } else if (human === "Scissors" && computer === "Rock") {
    console.log(computerWins);
  } else if (human === "Scissors" && computer === "Paper") {
    console.log(humanWins);
  }
}

function getPlayerScores() {}

getHumanChoice();

// Score variables to keep track of players scores.
let humanScore = 0;
let computerScore = 0;

// Play a round: returns both players choices, declares a winner or loser and shows the adjusted score.
/*function playRound(humanChoice, computerChoice) {
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
}*/

//playRound(humanSelection, computerSelection);
