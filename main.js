import getHumanChoice from "./js_modules/human-choice_module.js";

const playerSelections = {
  human: "",
  computer: "",
};

export default playerSelections;

getHumanChoice();

function getPlayerScores() {}

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
