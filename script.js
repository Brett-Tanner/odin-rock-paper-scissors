function getPlayerChoice() {
    // Prompts for player's choice and checks for a valid input
    
    playerChoice = prompt("Choose your fighter! Rock, Paper or Scissors?").toUpperCase();

    if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
        alert("Invalid input");
        getPlayerChoice();
    }
}


function getComputerChoice() {
    // Randomly selects the computer's choice from an array
    
    const choices = ["ROCK", "PAPER", "SCISSORS"];
        
    computerChoice = choices[Math.floor(Math.random() * 3)];
}


function playRound() {
    // Get choices

    getPlayerChoice();
    getComputerChoice();
    

    console.log(playerChoice)
    console.log(computerChoice)

    /* compare choices and return result (remember it's important to return the result of recursive functions) */

    if (playerChoice === computerChoice) {
        alert(`Both players chose ${playerChoice.toLowerCase()}! Try again.`);
        return playRound();
    }
        else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            console.log(`${playerChoice.charAt(0)}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice.toLowerCase()}! You win this round.`);
            return "PlayerWins";
        }
        else if (playerChoice === "SCISSORS" && computerChoice === "ROCK" || playerChoice === "ROCK" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "SCISSORS") {
            console.log(`${computerChoice.charAt(0)}${computerChoice.slice(1).toLowerCase()} beats ${playerChoice.toLowerCase()}! Better luck next time.`);
            return "ComputerWins";
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