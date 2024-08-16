import playerSelections from "../main.js";

export default function getRoundWinner() {
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
