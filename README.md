# odin-rock-paper-scissors

Enter player choice
    function getPlayerChoice = () {
         player choice = prompt(Choose your fighter!, user input).toUpperCase
    }
    Test for valid input


Select CPU choice
    function getCPUChoice = () {
        let choices = [ROCK, PAPER, SCISSORS]
        CPU choice = choices[(Math.floor(Math.random * 3))]
    }


Compare choices

Passes the get functions as callback functions

    function playRound = (callback getCPUchoice,    callback getPlayerChoice) 

    {   
        let playerChoice;
        let cpuChoice;

        getPlayerChoice()
        getCPUChoice()
        
        compares results after getting the choices

            if (playerChoice = cpuChoice) {
                alert (`You chose ${playerChoice} and the computer chose ${cpuChoice}. It's a tie, try again!`)
                function playRound
            }
            else if (cases where player wins) {
                return "Player Wins"
            }
            else if (cases where CPU wins) {
                return "Computer Wins"
            }
            else {
                return "Something broke in the playRound function"
                break;
            }
    }

Loop a best of 5
    function Bo5 = () {
        let gameResult = playRound()
        let playerScore;
        let cpuScore;

        Iterates through 5 games 

            for (let i = 0; i < 5; i++) {
                if (gameResult = "playerWins") {
                    ++playerScore
                    alert(`you win this time puny human! and show score`)
                }
                else if (gameResult = "Computer Wins") {
                    cpuScore++
                    alert(`I win, mwahahahaha! and show score`)
                }
                else if (gameResult = "Something broke in the playRound function") {
                    console.log("Something broke in the playRound function")
                    break;
                }
                else {
                    console.log("Something broke in the iterator")
                    break;
                }
            }
        
        Declares winner of Bo5

        if cpu > player alert CPU: score, Human: score. The machine uprising begins

        if player > cpu alert cpu: score, Human: score. Machine uprising delayed.
    }
