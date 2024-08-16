import getRoundWinner from "./round-winner_module.js";

import playerSelections from "../main.js";

import getComputerChoice from "./computer-choice_module.js";

const chooseOption = "Rock, Paper or Scissors.";

export default function getHumanChoice() {
  let humanChoice = prompt(`Please type ${chooseOption}`);
  humanChoice
    ? makeTitleCase(humanChoice) + getRoundWinner()
    : alert(`Nothing was entered. Please enter ${chooseOption}`);
}

export function makeTitleCase(humanChoice) {
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
