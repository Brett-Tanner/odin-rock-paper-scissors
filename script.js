// score variables
let playerScore = 0;
let computerScore = 0;

// select choice buttons
const playButtons = document.querySelectorAll(".play");
// return the id of the clicked button for use in playRound()
for (i = 0; i < 3; i++) {
    playButtons[i].addEventListener("click", function(e) {
        playRound(e);
    });
};

//select show action log button
const collapsible = document.querySelector(".collapsible");
// make it collapse or expand when clicked
collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
});

const body = document.querySelector("body");
const resultDisplay = document.querySelector("#resultDisplay");
const runningScore = document.querySelector("#runningScore");
const actionLog = document.querySelector("#actionLog");
const resetButton = document.querySelector("#resetButton");

// Run resetGame when reset button is clicked
resetButton.addEventListener("click", function(e) {
    resetGame();
});

// wake up and choose violence
const violence = document.querySelector("#GUN");

function onKonamiCode(cb) {
    var input = '';
    var key = 'violence';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.key);
      if (input === key) {
        cb();
        violence.removeAttribute("class");
        return;
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.key);
    });
  }
  
  onKonamiCode(function () {alert("Cheats active")});


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
        resultDisplay.textContent = `Congratulations, robot uprising averted! You win ${playerScore} to ${computerScore}`;
        // show option to play again
        resetButton.removeAttribute("class");
        return;
    }
    else if (computerScore >= 5) {
        // show defeat screen
        resultDisplay.setAttribute("class", "defeat");
        resultDisplay.textContent = `The machine uprising begins... You lose ${computerScore} to ${playerScore}`;
        body.style.color = "red";
        runningScore.style.borderColor = "red";
        for (i = 0; i < 3; i++) {
        playButtons[i].setAttribute("class", "red play");
        };
        collapsible.style.color = "red";
        collapsible.style.borderColor = "red";
        // show option to play again
        resetButton.removeAttribute("class");
        return;
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "";
    resultDisplay.removeAttribute("class");
    runningScore.style.borderColor = "limegreen";
    body.style.color = "limegreen";
    for (i = 0; i < 3; i++) {
    playButtons[i].setAttribute("class", "play");
    };
    collapsible.style.color = "limegreen";
    collapsible.style.borderColor = "limegreen";
    actionLog.textContent = "";
    runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    violence.setAttribute("class", "hidden");
    // re-hide reset button
    resetButton.setAttribute("class", "hidden");
}