import getRoundWinner from "./round-results_module.js";

import playerSelections from "../main.js";

import getComputerChoice from "./computer-choice_module.js";

const rock = document.querySelector(".rock");

const paper = document.querySelector(".paper");

const scissors = document.querySelector(".scissors");

export default function getHumanChoice() {
  rock.addEventListener("click", () => {
    displayHumanChoice("Rock") + getRoundWinner();
  });
  paper.addEventListener("click", () => {
    displayHumanChoice("Paper") + getRoundWinner();
  });
  scissors.addEventListener("click", () => {
    displayHumanChoice("Scissors") + getRoundWinner();
  });
}

function displayHumanChoice(choice) {
  const resultsContainer = document.querySelector("#results-container");
  const humanChoice = document.createElement("div");
  humanChoice.classList.add("human-choice");
  humanChoice.textContent = `You chose ${choice}.`;
  resultsContainer.appendChild(humanChoice) + getComputerChoice();
  playerSelections.human = choice;
}
