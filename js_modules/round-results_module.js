import playerSelections from "../main.js";

const playerScores = {
  humanScore: 0,
  computerScore: 0,
};

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
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Rock" && computer === "Paper") {
    roundWinner.textContent = computerWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Rock" && computer === "Scissors") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Paper" && computer === "Rock") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Paper" && computer === "Scissors") {
    roundWinner.textContent = computerWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Scissors" && computer === "Rock") {
    roundWinner.textContent = computerWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  } else if (human === "Scissors" && computer === "Paper") {
    roundWinner.textContent = humanWins;
    optionsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
    getGameWinner(playerScores);
  }
}

function getPlayerScores({ humanScore, computerScore }) {
  const optionsContainer = document.querySelector("#options-container");
  const scores = document.createElement("div");
  scores.classList.add("scores");
  scores.textContent = `Your score is ${humanScore} and the computers score is ${computerScore}.`;
  optionsContainer.appendChild(scores);
}

function getGameWinner({ humanScore, computerScore }) {
  const optionsContainer = document.querySelector("#options-container");
  const gameWinner = document.createElement("div");
  const lineBreak = document.createElement("br");
  const human = `You win the game! With a high score of: ${humanScore}!`;
  const computer = `The computer wins the game! With a high score of: ${computerScore}!`;

  if (humanScore < computerScore) {
    gameWinner.classList.add("computer-wins-game");
    gameWinner.textContent = computer;
    optionsContainer.appendChild(gameWinner);
  } else if (humanScore > computerScore) {
    gameWinner.classList.add("human-wins-game");
    gameWinner.textContent = human;
    optionsContainer.appendChild(gameWinner);
  }

  optionsContainer.appendChild(lineBreak);
}
