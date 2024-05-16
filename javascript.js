const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResults = document.querySelector("#results");
const tally = document.querySelector("#tally");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
            console.log(`computerChoice = Rock`);
            return "Rock";
            break;
        
        case 2:
            console.log(`computerChoice = Paper`);
            return "Paper";
            break;
        
        case 3:
            console.log(`computerChoice = Scissors`);
            return "Scissors";
            break;

        default:
            alert("Oops, something went wrong with computerChoice!");
            throw new Error("");
    }    
}

let roundCounter = 1;
let computerScore = 0;
let playerScore = 0;
let ties = 0;

function playGame(computerChoice, playerChoice){
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
            roundResults.textContent = (`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
            ties += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Paper") {
            roundResults.textContent = (`Congratulations, you won Round ${roundCounter}! The computer picked ${computerChoice}.`);
            playerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Scissors") {
            roundResults.textContent = (`You lost Round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`);
            computerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            roundResults.textContent = (`You lost Round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`);
            computerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Paper") {
            roundResults.textContent = (`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
            ties += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Scissors") {
            roundResults.textContent = (`Congratulations, you won Round ${roundCounter}! The computer picked ${computerChoice}.`);
            playerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            roundResults.textContent = (`Congratulations, you won Round ${roundCounter}! The computer picked ${computerChoice}.`);
            playerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Paper") {
            roundResults.textContent = (`You lost Round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`);
            computerScore += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else if(playerChoice == "Scissors") {
            roundResults.textContent = (`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
            ties += 1;
            tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`)
            roundCounter += 1;
            checkForWinner();
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else {
        alert("Oops, something went wrong with computerChoice!");
        console.log(computerChoice);
        throw new Error("");
    }    
}

function checkForWinner() {
    if(roundCounter > 5) {
        let winner;
        if (playerScore > computerScore) {
            winner = "Player";
        } else if (computerScore > playerScore) {
            winner = "Computer";
        } else if (playerScore == computerScore) {
            winner = "Tie";
        };
        /* determines winner, only if roundCounter has reached 5*/
        
        switch(winner) {
            case "Player":
                alert("That's round 5! The overall winner is....\nYou! Congratulations!\n\nHit OK to reset the game.")
                resetGame();
                break;
            
            case "Computer":
                alert("That's round 5! The overall winner is....\nThe computer! Unfortunate, but you'll get it next time!\n\nHit OK to reset the game.")
                resetGame();
                break;

            case "Tie":
                alert("That's round 5! The overall winner is....\nA draw?!? What a match!\n\nHit OK to reset the game.")
                resetGame();
                break;

            default:
                alert("Oops, something went wrong with the final results!");
                throw new Error("");
        }
    };
}

 function resetGame(){
    roundCounter = 1;
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    roundResults.textContent = ("5 rounds, winner takes all!");
    tally.textContent = ("Running Tally:\nPlayer wins: 0 | Computer wins: 0 | Ties: 0");
    /* Restores variables to the original values for a next game */  
 }

 rock.addEventListener("click", () => playGame(getComputerChoice(), "Rock"));
 paper.addEventListener("click", () => playGame(getComputerChoice(), "Paper"));
 scissors.addEventListener("click", () => playGame(getComputerChoice(), "Scissors"));
 tally.textContent = ("Running Tally:\nPlayer wins: 0 | Computer wins: 0 | Ties: 0");