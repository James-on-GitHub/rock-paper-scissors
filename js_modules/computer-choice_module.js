import playerSelections from "../main.js";

export default function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  displayComputerChoice(computerChoice);
  //playerSelections.computer = computerChoice;
}

function displayComputerChoice(choice) {
  const optionsContainer = document.querySelector("#options-container");
  const computerChoice = document.createElement("div");
  computerChoice.classList.add("computer-choice");
  computerChoice.textContent = `The computer choose ${choice}`;
  optionsContainer.appendChild(computerChoice);
}
