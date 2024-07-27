// Computers choice: will randomly return one of the array items when called.
function getComputerChoice() {
    let option = ["Rock", "Paper", "Scissors"];
    let choice = option[Math.floor(Math.random() * option.length)];
    return choice;
}