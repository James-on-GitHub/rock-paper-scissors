// Computers choice: will randomly return one of the array items when called.
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(`The computer chose ${choice}.`);
}

// Human choice: return user input.
function getHumanChoice() {
    let options = "Rock, Paper or Scissors."
    let choice = prompt("Type Rock, Paper or Scissors:");
    if (choice === "Rock") {
        console.log(`You chose ${choice}.`);
    } else if (choice === "Paper") {
        console.log(`You chose ${choice}.`);
    } else if (choice === "Scissors") {
        console.log(`You chose ${choice}.`);
    } else {
        alert(`Please enter ${options}`);
    }
}
getHumanChoice();
let humanScore = 0;
let computerSore = 0;