// select elements
const playButtons = document.querySelectorAll(".play");
// return the id of the clicked button for use in playRound()
for (i = 0; i < 3; i++) {
    playButtons[i].addEventListener('click', function(e) {
        playRound(e);
    });
}

const resultDisplay = document.querySelector("#resultDisplay");
const runningScore = document.querySelector("#runningScore");
const actionLog = document.querySelector("#actionLog");

// keep score
let playerScore = 0;
let computerScore = 0;

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

  
    /* compare choices and return result (remember it's important to return the result of recursive functions) */

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
        else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            const result = (`${playerChoice.charAt(0)}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice.toLowerCase()}! You win this round.`);
            
            // remove text of result box and add text for this round
            resultDisplay.textContent = result;

            // add it to the activity log
            actionLog.textContent = `${actionLog.textContent}
            ${result}`;
            
            // update the running total
            playerScore++;
            runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        }
        else if (playerChoice === "SCISSORS" && computerChoice === "ROCK" || playerChoice === "ROCK" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "SCISSORS") {
            const result = (`${computerChoice.charAt(0)}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice.toLowerCase()}! Better luck next time.`);
            
            // remove text of result box and add text for this round
            resultDisplay.textContent = result;

            // add it to the activity log
            actionLog.textContent = `${actionLog.textContent}
            ${result}`;
            
            // update the running total
            computerScore++;
            runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        }

    // check if the game is over
    if (playerScore >= 5) {
        resultDisplay.setAttribute("class", "victory");
        resultDisplay.textContent = `Congratulations, robot uprising averted! You win ${playerScore} to ${computerScore}`;
        return;
    }
    else if (computerScore >= 5) {
        resultDisplay.setAttribute("class", "defeat");
        resultDisplay.textContent = `The machine uprising begins... You lose ${computerScore} to ${playerScore}`;
        return;
    }

}




/* 
function Bo5() {
    // Score trackers (here so they reset to 0 after each game)
    
    let playerScore = 0;
    let computerScore = 0;

    // Store player and computer choices

    let playerChoice;
    let computerChoice;
    
    // Iterates through 5 rounds
    
    for (i = 0; i < 5; i++) {
        // Stop the game early if one player reaches 3 points, otherwise play another round

        if (playerScore === 3 || computerScore === 3) {
            break;
        }
        
        const gameResult = playRound();
        
        // Checks result of each round then displays a message & updated score

        if (gameResult === "ComputerWins" && computerScore === 0) {
            computerScore++;
            console.log(`My first victory of many, mwhahahahahaha! Computer: ${computerScore} - Human: ${playerScore}.`)
            }
            else if (gameResult === "ComputerWins" && computerScore > 0) {
                computerScore++;
                console.log(`Another win for my superior intelligence! Computer: ${computerScore} - Human: ${playerScore}.`)
            }
            else if (gameResult === "PlayerWins") {
                playerScore++;
                console.log(`You win this time puny human! Computer: ${computerScore} - Human: ${playerScore}.`)
               }
        }
    
    // Declare winner of the best-of-5

    if (playerScore > computerScore) {
        alert(`Computer: ${computerScore} - Human: ${playerScore}. Robot uprising delayed.`)
    }
        else if (computerScore > playerScore) {
            alert(`Computer: ${computerScore} - Human: ${playerScore}. The robot uprising approaches....`)
        }
}
*/