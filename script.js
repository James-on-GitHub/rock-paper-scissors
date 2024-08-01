const game = { options: ["Rock", "Paper", "Scissors"] };

const playerOptions = `${game.options[0]}, ${game.options[1]} or ${game.options[2]}`;

const playerSelections = {
  human: "",
  computer: "",
};

function getComputerChoice() {
  let computerChoice =
    game.options[Math.floor(Math.random() * game.options.length)];
  displayComputerChoice(computerChoice);
  playerSelections.computer = computerChoice;
}

function displayComputerChoice(computerChoice) {
  console.log(`The computer chose ${computerChoice}.`);
}

function getHumanChoice() {
  let humanChoice = prompt(`Please type ${playerOptions}`);
  humanChoice
    ? makeTitleCase(humanChoice)
    : alert(`Nothing was entered. Please enter ${playerOptions}`);
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
    alert(`Please enter ${playerOptions} only.`);
  }
}

function getRoundResults() {
  let humanWins = `You win! ${playerSelections.human} beats ${playerSelections.computer}.`;
  let computerWins = `You lose! ${playerSelections.computer} beats ${playerSelections.human}.`;
  let draw = `It's a draw! You both chose ${playerSelections.human}.`;
  if (playerSelections.human === playerSelections.computer) {
    console.log(draw);
  } else if (
    playerSelections.human === "Rock" &&
    playerSelections.computer === "Paper"
  ) {
    console.log(computerWins);
  } else if (
    playerSelections.human === "Rock" &&
    playerSelections.computer === "Scissors"
  ) {
    console.log(humanWins);
  } else if (
    playerSelections.human === "Paper" &&
    playerSelections.computer === "Rock"
  ) {
    console.log(humanWins);
  } else if (
    playerSelections.human === "Paper" &&
    playerSelections.computer === "Scissors"
  ) {
    console.log(computerWins);
  } else if (
    playerSelections.human === "Scissors" &&
    playerSelections.computer === "Rock"
  ) {
    console.log(computerWins);
  } else if (
    playerSelections.human === "Scissors" &&
    playerSelections.computer === "Paper"
  ) {
    console.log(humanWins);
  }
}

getHumanChoice();
getRoundResults();

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
