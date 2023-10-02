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
            /* If this line is reached, an error will occur with playerChoice even after entering a valid choice*/
    }
    
}

let roundCounter = 1;

function playGame(computerChoice, playerChoice){
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
             console.log(`Round ${roundCounter} result = tie`);
             finalResults += `\nRound ${roundCounter}: Tie`;
            alert(`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = win`);
            finalResults += `\nRound ${roundCounter}: Win`;
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = loss`);
            finalResults += `\nRound ${roundCounter}: Loss`;
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            console.log(`Round ${roundCounter} result = loss`);
            finalResults += `\nRound ${roundCounter}: Loss`;
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = Tie`);
            finalResults += `\nRound ${roundCounter}: tie`;
            alert(`Round ${roundCounter} is a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = Win`);
            finalResults += `\nRound ${roundCounter}: Win`;
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            console.log(`Round ${roundCounter} result = win`);
            finalResults += `\nRound ${roundCounter}: Win`;
            alert(`Congratulations, you won round ${roundCounter}! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log(`Round ${roundCounter} result = loss`);
            finalResults += `\nRound ${roundCounter}: Loss`;
            alert(`You lost round ${roundCounter}, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${roundCounter} result = tie`);
            finalResults += `\nRound ${roundCounter}: tie`;
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
        console.log(`Final Results:\n${finalResults}`);
        alert(`Your final Results:\n${finalResults}`);
    }
    /* roundCounter being 6 indicates that we've just finished the 5th round.*/
    
    while (roundCounter <= 5) {
        playGame(getComputerChoice(), getPlayerChoice());
    }
}

let finalResults = "";
playGame(getComputerChoice(), getPlayerChoice());