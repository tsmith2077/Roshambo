// Roshambo a rock, paper, scissors game.

// Radomly generate a guess for the computer
function getRandomGuess () {
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) {
        return "rock";
    } else if (guess == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerPick = getRandomGuess();
// Prompt the user for a guess
let userPick = prompt(`Pick "Rock", "Paper", or "Scissors".`).toLowerCase();

// Compare the user's guess vs the computers
if (userPick == "rock" && computerPick == "scissors") {
    result = "Rock beats Scissors! You Win!!"
} else if (userPick == "rock" && computerPick == "paper") {
    result = "Paper beats Rock! You Lose!"
} else if (userPick == "paper" && computerPick == "scissors") {
    result = "Scissors beats Paper! You Lose!"
} else if (userPick == "paper" && computerPick == "rock") {
    result = "Paper beats Rock! You Win!!"
} else if (userPick == "scissors" && computerPick == "rock") {
    result = "Rock beats Scissors! You Win!"
} else if (userPick == "scissors" && computerPick == "paper") {
    result = "Scissors beats Paper! You Win!"
} else if (userPick == computerPick) {
    result = `You both picked ${userPick.toUpperCase()}. It's a Tie!`
}


// Score for a loss/win/tie for the user.
console.log(result)

