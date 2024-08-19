import playerSelections from "../main.js";

export default function getRoundWinner() {
  const { human, computer } = playerSelections;

  const humanWins = `You win! ${human} beats ${computer}.`;
  const computerWins = ` The computer wins! ${computer} beats ${human}.`;
  const draw = `It's a draw! You both chose ${human}.`;

  const optionsContainer = document.querySelector("#options-container");
  const roundWinner = document.createElement("div");
  roundWinner.classList.add("round-winner");

  if (human === computer) {
    roundWinner.textContent = draw;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Rock" && computer === "Paper") {
    roundWinner.textContent = computerWins;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Rock" && computer === "Scissors") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Paper" && computer === "Rock") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Paper" && computer === "Scissors") {
    roundWinner.textContent = computerWins;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Scissors" && computer === "Rock") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
  } else if (human === "Scissors" && computer === "Paper") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
  }
}
