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

    /* compare choices and return result */
}


/*  */