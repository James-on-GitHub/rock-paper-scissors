// Computers choice: will randomly return one of the array items when called.
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Human choice: return user input.
function getHumanChoice() {
    let options = "Rock, Paper or Scissors."
    let choice = prompt("Type Rock, Paper or Scissors:");
    if (choice === "Rock") {
        return choice;
    } else if (choice === "Paper") {
        return choice;
    } else if (choice === "Scissors") {
        return choice;
    } else {
        alert(`Please enter ${options}`);
    }
}