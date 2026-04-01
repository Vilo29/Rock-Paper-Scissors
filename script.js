// It is a rock paper scissors game, we need a answer from the player, and also get a random answer from the computer, and then compare these 2 answers and see who wins, lose, or if it is a tie. And will be a BO5 game.

// Get a random choice for the computer
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    switch(randomNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}