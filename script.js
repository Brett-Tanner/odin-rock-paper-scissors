// score variables
let playerScore = 0;
let computerScore = 0;

// select elements
const playButtons = document.querySelectorAll(".play");
// return the id of the clicked button for use in playRound()
for (i = 0; i < 3; i++) {
    playButtons[i].addEventListener("click", function(e) {
        playRound(e);
    });
};

const body = document.querySelector("body");
const resultDisplay = document.querySelector("#resultDisplay");
const runningScore = document.querySelector("#runningScore");
const actionLog = document.querySelector("#actionLog");
const resetButton = document.querySelector("#resetButton");


// Run resetGame when reset button is clicked
resetButton.addEventListener("click", function(e) {
    resetGame();
});


function getComputerChoice() {
    // Randomly selects the computer's choice from an array
    
    const choices = ["ROCK", "PAPER", "SCISSORS"];
        
    computerChoice = choices[Math.floor(Math.random() * 3)];
}


function playRound(e) {
    // Get choices

    playerChoice = e.target.id;
    getComputerChoice();
    

    // exit if game is already over
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }

  
    // check for tie
    if (playerChoice === computerChoice) {
        const result = (`Both players chose ${playerChoice.toLowerCase()}! Try again.`);

        // remove text of result box and add text for this round
        resultDisplay.textContent = result;

        // add it to the activity log
        actionLog.textContent = `${actionLog.textContent}
        ${result}`;

        // start a rematch
        return playRound();
    }
        // check if player wins
        else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            const result = (`${playerChoice.charAt(0)}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice.toLowerCase()}! You win this round.`);
            
            // remove text of result box and add text for this round
            resultDisplay.textContent = result;

            // add it to the activity log
            actionLog.textContent = `${actionLog.textContent}
            ${result}`;
            
            // update the running total
            playerScore++;
            runningScore.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
        }

        // check if computer wins
        else if (playerChoice === "SCISSORS" && computerChoice === "ROCK" || playerChoice === "ROCK" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "SCISSORS") {
            const result = (`${computerChoice.charAt(0)}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice.toLowerCase()}! Better luck next time.`);
            
            // remove text of result box and add text for this round
            resultDisplay.textContent = result;

            // add it to the activity log
            actionLog.textContent = `${actionLog.textContent}
            ${result}`;
            
            // update the running total
            computerScore++;
            runningScore.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
        }

    // check if the game is over
    if (playerScore >= 5) {
        // show victory screen
        resultDisplay.setAttribute("class", "victory");
        resultDisplay.textContent = `Congratulations, robot uprising averted! You win ${playerScore} to ${computerScore}`;
        // show option to play again
        resetButton.removeAttribute("class");
        return;
    }
    else if (computerScore >= 5) {
        // show defeat screen
        resultDisplay.setAttribute("class", "defeat");
        body.style.color = "red";
        playButtons[0].setAttribute("class", "red play");
        playButtons[1].setAttribute("class", "red play");
        playButtons[2].setAttribute("class", "red play");
        resultDisplay.textContent = `The machine uprising begins... You lose ${computerScore} to ${playerScore}`;
        // show option to play again
        resetButton.setAttribute("class", "red");
        return;
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "";
    resultDisplay.removeAttribute("class");
    body.style.color = "limegreen";
    playButtons[0].setAttribute("class", "play");
    playButtons[1].setAttribute("class", "play");
    playButtons[2].setAttribute("class", "play");
    actionLog.textContent = "";
    runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    resetButton.setAttribute("class", "hidden");
}