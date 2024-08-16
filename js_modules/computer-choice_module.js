import playerSelections from "../main.js";

export default function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  displayComputerChoice(computerChoice);
  playerSelections.computer = computerChoice;
}

function displayComputerChoice(computerChoice) {
  console.log(`The computer chose ${computerChoice}.`);
}
