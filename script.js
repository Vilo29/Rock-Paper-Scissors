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

// Get a choice from the player
function getPlayerChoice() {
    let selection = Number(prompt("Choose!\n\n1. Rock 🪨\n2. Paper 📄\n3. Scissors ✂️"))
    switch(selection) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

// Decide who win or lost the round, or if there was a tie
function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"
    ) {
        playerScore++;
        alert(`You win!\n\nYour Choice: ${playerChoice}\nComputer choice: ${computerChoice}`)
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
    }
    else if (playerChoice === computerChoice) {
        alert(`It's a tie!\n\nYour Choice: ${playerChoice}\nComputer choice: ${computerChoice}`)
        console.log("It's a tie!")
    }
    else {
        computerScore++;
        alert(`You lost!\n\nYour Choice: ${playerChoice}\nComputer choice: ${computerChoice}`)
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`)
    }
}

// The Game start (BO5)
function playGame() {
    for (let i = 0; i < 5; i++) {
        if (playerScore === 3 || computerScore === 3) { // Stop the game when someone has already won 3 rounds
            break;
        }

        const playerSelection = getPlayerChoice();  
        const computerSelection = getComputerChoice();

        console.clear(); // Clear console before show the next round result
        console.log("Your choice: " + playerSelection);
        console.log("Computer choice: " + computerSelection);

        playRound(playerSelection, computerSelection)
    }
    // Decide who have won this BO5 game of Rock Paper Scissors
    console.clear();
    if (playerScore > computerScore) {
        alert(`You have won this BO5 game of Rock Paper Scissors!\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`)
        console.log("You have won this BO5 game of Rock Paper Scissors!")
    }
    else if (playerScore === computerScore) {
        alert(`This BO5 game of Rock Paper Scissors has ended in a tie!\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`)
        console.log("This BO5 game of Rock Paper Scissors has ended in a tie!")
    }
    else {
        alert(`We can not win every time... you lost!\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`)
        console.log("We can not win every time... you lost!")
    }
}

let computerScore = 0;
let playerScore = 0;

playGame();