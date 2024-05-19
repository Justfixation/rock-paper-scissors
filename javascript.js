const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResults = document.querySelector("#roundResults");
const tally = document.querySelector("#scoreTally");
const finalScore = document.querySelector("#finalScore");
const resetBtn = document.querySelector(".resetBtn");
let computerChoice;
let playerChoice;

resetBtn.addEventListener("click", () => resetGame());

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
            console.log(`computerChoice = Rock`);
            computerChoice = "Rock";
            return "Rock";
            break;
        
        case 2:
            console.log(`computerChoice = Paper`);
            computerChoice = "Paper";
            return "Paper";
            break;
        
        case 3:
            console.log(`computerChoice = Scissors`);
            computerChoice = "Scissors";
            return "Scissors";
            break;

        default:
            alert("Oops, something went wrong with computerChoice!");
            throw new Error("");
    }    
}

function playerChoiceRock() {
    playerChoice = "Rock";
}

function playerChoicePaper() {
    playerChoice = "Paper";
}

function playerChoiceScissors() {
    playerChoice = "Scissors";
}

let roundCounter = 1;
let computerScore = 0;
let playerScore = 0;
let ties = 0;

function updateTally() {
    tally.textContent = (`Running tally:\nPlayer wins: ${playerScore} | Computer wins: ${computerScore} | Ties: ${ties}`);
}
/*Changes the UI message so the player can see who won that round*/

function roundWin() {
    roundResults.textContent = (`Congratulations, you won Round ${roundCounter}! The computer picked ${computerChoice}.\n\n`);
    playerScore += 1;
    updateTally();
    roundCounter += 1;
    checkForWinner();
}

function roundLoss() {
    roundResults.textContent = (`You lost Round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.\n\n`);
    computerScore += 1;
    updateTally();
    roundCounter += 1;
    checkForWinner();
}

function roundTie() {
    roundResults.textContent = (`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.\n\n`);
    ties += 1;
    updateTally();
    roundCounter += 1;
    checkForWinner();
}

function playGame(){
    computerChoice = getComputerChoice();
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
            roundTie();
        } else if(playerChoice == "Paper") {
            roundWin();
        } else if(playerChoice == "Scissors") {
            roundLoss();
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            roundLoss();
        } else if(playerChoice == "Paper") {
            roundTie();
        } else if(playerChoice == "Scissors") {
            roundWin();
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            roundWin();
        } else if(playerChoice == "Paper") {
            roundLoss();
        } else if(playerChoice == "Scissors") {
            roundTie();
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
                finalScore.textContent = (`That's round 5! The overall winner is....\nYou! Congratulations!\n\nHit "Reset Game" to play again.`)
                conclusion();
                break;
            
            case "Computer":
                finalScore.textContent = (`That's round 5! The overall winner is....\nThe computer! Unfortunate, but you'll get it next time!\n\nHit "Reset Game" to play again.`)
                conclusion();
                break;

            case "Tie":
                finalScore.textContent = (`That's round 5! The overall winner is....\nA draw?!? What a match!\n\nHit "Reset Game" to play again.`)
                conclusion();
                break;

            default:
                alert("Oops, something went wrong with the final results!");
                throw new Error("");
        }
    };
}

function conclusion() {
    rock.removeEventListener("click", playGame);
    paper.removeEventListener("click", playGame);
    scissors.removeEventListener("click", playGame);
    rock.style.backgroundColor = "#B3AAAA";
    paper.style.backgroundColor = "#B3AAAA";
    scissors.style.backgroundColor = "#B3AAAA";
}
/*Disables all buttons aside from resetBtn, since the game is over */ 

function resetGame(){
    roundCounter = 1;
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    roundResults.textContent = ("5 rounds, winner takes all!");
    finalScore.textContent = "";
    updateTally();
    rock.addEventListener("click", playGame);
    paper.addEventListener("click", playGame);
    scissors.addEventListener("click", playGame);
    rock.style.backgroundColor = "revert";
    paper.style.backgroundColor = "revert";
    scissors.style.backgroundColor = "revert";
   /* Restores variables and buttons to their original state for a new game **/  
}

rock.addEventListener("click", playerChoiceRock);
paper.addEventListener("click", playerChoicePaper);
scissors.addEventListener("click", playerChoiceScissors);
resetGame();
