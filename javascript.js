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
/* Including getComputerChoice() and getPlayerChoice() as parameters for playGame()
allows for both functions to be called only at the time of playGame(), instead of calling
all three separately.*/
function playGame(computerChoice, playerChoice){
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
            console.log("result = tie");
            alert(`It's a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Paper") {
            console.log("result = win");
            alert(`Congratulations, you won! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log("result = loss");
            alert(`You lost, how unfortunate! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
        }

    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            console.log("result = loss");
            alert(`You lost, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log("result = tie");
            alert(`It's a tie! The computer picked ${computerChoice}.`);
        } else if(playerChoice == "Scissors") {
            console.log("result = win");
            alert(`Congratulations, you won! The computer picked ${computerChoice}.`)
        } else {
            alert("Oops, something went wrong with playerChoice!");
        }

    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            console.log("result = win");
            alert(`Congratulations, you won! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Paper") {
            console.log("result = loss");
            alert(`You lost, how unfortunate! The computer picked ${computerChoice}.`)
        } else if(playerChoice == "Scissors") {
            console.log("result = tie");
            alert(`It's a tie! The computer picked ${computerChoice}.`);
        } else {
            alert("Oops, something went wrong with playerChoice!");
        }

    } else {
        console.log("Oops, something went wrong with computerChoice!");
        console.log(computerChoice);
    }
}

playGame(getComputerChoice(), getPlayerChoice());