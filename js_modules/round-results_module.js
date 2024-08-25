import playerSelections from "../main.js";

const playerScores = {
  humanScore: 0,
  computerScore: 0,
};

const printScoresCounter = {
  printed: 0,
};

export default function getRoundWinner() {
  const { human, computer } = playerSelections;
  const humanWins = `You win! ${human} beats ${computer}.`;
  const computerWins = ` The computer wins! ${computer} beats ${human}.`;
  const draw = `It's a draw! You both chose ${human}.`;

  const resultsContainer = document.querySelector("#results-container");
  const roundWinner = document.createElement("div");
  roundWinner.classList.add("round-winner");

  if (human === computer) {
    roundWinner.textContent = draw;
    resultsContainer.appendChild(roundWinner);
    getPlayerScores(playerScores);
  } else if (human === "Rock" && computer === "Paper") {
    roundWinner.textContent = computerWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
  } else if (human === "Rock" && computer === "Scissors") {
    roundWinner.textContent = humanWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
  } else if (human === "Paper" && computer === "Rock") {
    roundWinner.textContent = humanWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
  } else if (human === "Paper" && computer === "Scissors") {
    roundWinner.textContent = computerWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
  } else if (human === "Scissors" && computer === "Rock") {
    roundWinner.textContent = computerWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.computerScore++;
    getPlayerScores(playerScores);
  } else if (human === "Scissors" && computer === "Paper") {
    roundWinner.textContent = humanWins;
    resultsContainer.appendChild(roundWinner);
    playerScores.humanScore++;
    getPlayerScores(playerScores);
  }
}

function getPlayerScores({ humanScore, computerScore }) {
  const resultsContainer = document.querySelector("#results-container");
  const scores = document.createElement("div");
  const lineBreak = document.createElement("br");
  scores.classList.add("scores");
  scores.textContent = `Your score is ${humanScore} and the computers score is ${computerScore}.`;
  resultsContainer.appendChild(scores);
  resultsContainer.appendChild(lineBreak);
  printScoresCounter.printed++;
  if (printScoresCounter.printed === 5) {
    getGameWinner(playerScores);
  }
}

function getGameWinner({ humanScore, computerScore }) {
  const resultsContainer = document.querySelector("#results-container");
  const gameWinner = document.createElement("div");

  const human = `You win the game! With a high score of: ${humanScore}!`;
  const computer = `The computer wins the game! With a high score of: ${computerScore}!`;
  const gameDraw = `Game is a draw!`;

  if (humanScore < computerScore) {
    gameWinner.classList.add("computer-wins-game");
    gameWinner.textContent = computer;
    resultsContainer.appendChild(gameWinner);
  } else if (humanScore > computerScore) {
    gameWinner.classList.add("human-wins-game");
    gameWinner.textContent = human;
    resultsContainer.appendChild(gameWinner);
  } else {
    gameWinner.classList.add("game-is-draw");
    gameWinner.textContent = gameDraw;
    resultsContainer.appendChild(gameWinner);
  }
}
