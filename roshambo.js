// Roshambo a rock, paper, scissors game.

let userPick;
let result;
let computerScore = 0;
let userScore = 0;
let updatedScore;
let winner = "";

// Selectors
const buttons = document.querySelectorAll('button');
const container2 = document.querySelector('#container2');
const container = document.querySelector('#container');

// User scoreboard box
const userScoreContainer = document.querySelector('#userScoreContainer');
userScoreContainer.style.cssText = 'border: solid black';

// User scoreboard header
const playerScoreHeader = document.createElement('h3');
playerScoreHeader.classList.add('playerScoreHeader');
playerScoreHeader.textContent = "Player Score";
userScoreContainer.appendChild(playerScoreHeader);

// User score
let pScoreUser = document.createElement('p');
pScoreUser.classList.add('pScoreUser');
pScoreUser.textContent = userScore;
userScoreContainer.appendChild(pScoreUser);
container2.appendChild(userScoreContainer);

// User scoreboard box
const computerScoreContainer = document.querySelector('#computerScoreContainer');
computerScoreContainer.style.cssText = 'border: solid black';

// Computer scoreboard header
const computerScoreHeader = document.createElement('h3');
computerScoreHeader.classList.add('computerScoreHeader');
computerScoreHeader.textContent = "Computer Score";
computerScoreContainer.appendChild(computerScoreHeader);

// Computer score
let pScoreComputer = document.createElement('p');
pScoreComputer.classList.add('pScoreComputer');
pScoreComputer.textContent = computerScore
computerScoreContainer.appendChild(pScoreComputer);
container2.appendChild(computerScoreContainer);


// Run the game
function runGame () {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userPick = button.id;
            let computerPick = getRandomGuess();

            getWinner(userPick, computerPick);
            printWinner();
            
            // Keep Score

            // User Score
            pScoreUser.textContent = userScore;
            userScoreContainer.appendChild(pScoreUser);
            container2.appendChild(userScoreContainer);

            // Computer Score
            pScoreComputer.textContent = computerScore;
            computerScoreContainer.appendChild(pScoreComputer);
            container2.style.cssText = "display: flex; gap: 16px; align-text: center; margin-top: 16px; align-self: center; font-size: 26px;";
            container2.appendChild(computerScoreContainer);

            if (userScore == 5) {
                winner = "You won 5 times, you win!"
                userScore = 0;
                computerScore = 0;
            } else if (computerScore == 5) {
                winner = "The computer won 5 times, you lose!"
                userScore = 0;
                computerScore = 0;
            }
        })
    });
}

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

// Compare results and pick the winner
function getWinner(userPick, computerPick) {
     // Compare the user's guess vs the computers
     if (userPick == "rock" && computerPick == "scissors") {
        result = "ROCK beats SCISSORS! You Win!!"
        userScore += 1;
    } else if (userPick == "rock" && computerPick == "paper") {
        result = "PAPER beats ROCK! You Lose!"
        computerScore += 1;
    } else if (userPick == "paper" && computerPick == "scissors") {
        result = "SCISSORS beats PAPER! You Lose!"
        computerScore += 1;
    } else if (userPick == "paper" && computerPick == "rock") {
        result = "PAPER beats ROCK! You Win!!"
        userScore += 1;
    } else if (userPick == "scissors" && computerPick == "rock") {
        result = "ROCK beats SCISSORS! You Lose!"
        computerScore += 1;
    } else if (userPick == "scissors" && computerPick == "paper") {
        result = "SCISSORS beats PAPER! You Win!"
        userScore += 1;
    } else if (userPick == computerPick) {
        result = `You both picked ${userPick.toUpperCase()}. It's a Tie!`
    }
}

// Print the results 
function printWinner() {
    const printedResults = document.createElement('div');
    printedResults.classList.add('printedResults');
    
    // Check to see if user or computer won 5 times and let user know who won.
    if (userScore == 5) {
        winner = "You won 5 times, you win!"
        userScore = 0;
        computerScore = 0;
        container.textContent = `${result} ${winner} `;
    } else if (computerScore == 5) {
        winner = "The computer won 5 times, you lose!"
        userScore = 0;
        computerScore = 0;
        container.textContent = `${result} ${winner} `;
    } else {
        container.textContent = result;
    }
    
    container.style.cssText = "display: flex; margin-top: 16px; align-self: center; align-items: center; font-size: 26px;";

    container.appendChild(printedResults);
}

runGame();