let playerChoice;
let computerChoice;


function getPlayerChoice() {
    /* Prompts for player's choice and checks for a valid input */
    
    playerChoice = prompt("Choose your fighter! Rock, Paper or Scissors?").toUpperCase();

    if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
        alert("Invalid input");
        getPlayerChoice();
    }
}


function getComputerChoice() {
    /* Randomly selects the computer's choice from an array */
    
    let choices = ["ROCK", "PAPER", "SCISSORS"];
        
    computerChoice = choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    /* get choices*/

    getPlayerChoice();
    getComputerChoice();
    

    console.log(playerChoice)
    console.log(computerChoice)

    /* compare choices and return result (currently not returning the result after one or more ties) */

    if (playerChoice === computerChoice) {
        alert(`Both players chose ${playerChoice.toLowerCase()}! Try again.`);
        playRound();
    }
        else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER") {
            alert(`${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}! You win this round.`);
            return "PlayerWins";
        }
        else if (playerChoice === "SCISSORS" && computerChoice === "ROCK" || playerChoice === "ROCK" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "SCISSORS") {
            alert(`${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}! Better luck next time.`);
            return "ComputerWins";
        }
        else {
            return "Something broke in the playRound function."
        }

}


/*  */