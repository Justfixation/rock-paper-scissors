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
            console.log("Oops, something went wrong!");
    }    
}

selectionMessage = 'Pick "Rock", "Paper", or "Scissors".'

function getPlayerChoice(){
    playerChoice = prompt(selectionMessage);
    switch(playerChoice.toUpperCase()){
        case "ROCK":
            console.log(`playerChoice = Rock`);
            return "Rock";
            break;

        case "PAPER":
            console.log(`playerChoice = Paper`);
            return "Paper";
            break;

        case "SCISSORS":
            console.log(`playerChoice = Scissors`);
            return "Scissors";
            break;

        default:
            selectionMessage = 'Sorry, you need to pick "Rock", "Paper", or "Scissors"!\nMake sure your spelling is correct.'
            getPlayerChoice();
    }
    
}

let roundCounter = 1;
const totalResults = [];

function playGame(computerChoice, playerChoice){
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
             console.log(`Round ${roundCounter} result = tie`);
             totalResults[roundCounter - 1] = "Tie";
            alert(`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = win`);
            totalResults[roundCounter - 1] = "Win";
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = loss`);
            totalResults[roundCounter - 1] = "Loss";
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            console.log(`Round ${roundCounter} result = loss`);
            totalResults[roundCounter - 1] = "Loss";
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = tie`);
            totalResults[roundCounter - 1] = "Tie";
            alert(`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = win`);
            totalResults[roundCounter - 1] = "Win";
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            console.log(`Round ${roundCounter} result = win`);
            totalResults[roundCounter - 1] = "Win";
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = loss`);
            totalResults[roundCounter - 1] = "Loss";
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = tie`);
            totalResults[roundCounter - 1] = "Tie";
            alert(`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else {
        console.log("Oops, something went wrong with computerChoice!");
        console.log(computerChoice);
        throw new Error("");
    }
    roundCounter += 1;
    if(roundCounter > 5) {
        console.log(totalResults);
        alert(`Your final Results:\n${totalResults}`);
    }
    /* roundCounter being 6 indicates that we've just finished the 5th round.*/
    while (roundCounter <= 5) {
        playGame(getComputerChoice(), getPlayerChoice());
    }
}

playGame(getComputerChoice(), getPlayerChoice());
/* Including getComputerChoice() and getPlayerChoice() as parameters for playGame()
allows for both functions to be called only at the time of playGame(), instead of calling
all three separately.*/

