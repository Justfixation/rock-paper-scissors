let computerSelection = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(){
    switch(computerSelection) {
        case 1:
            computerSelection = ("Rock");
            console.log(`computerSelection = ${computerSelection}`);
            break;
        
        case 2:
            computerSelection = ("Paper");
            console.log(`computerSelection = ${computerSelection}`);
            break;
        
        case 3:
            computerSelection = ("Scissors");
            console.log(`computerSelection = ${computerSelection}`);
            break;

        default:
            console.log("Oops, something went wrong!");
    }    
}

selectionMessage = 'Pick "Rock", "Paper", or "Scissors".'

function getPlayerChoice(){
    playerSelection = prompt(selectionMessage);
    switch(playerSelection.toUpperCase()){
        case "ROCK":
            playerSelection = "Rock";
            console.log(`playerSelection = ${playerSelection}`);
            break;

        case "PAPER":
            playerSelection = "Paper";
            console.log(`playerSelection = ${playerSelection}`);
            break;

        case "SCISSORS":
            playerSelection = "Scissors";
            console.log(`playerSelection = ${playerSelection}`);
            break;

        default:
            selectionMessage = 'Sorry, you need to pick "Rock", "Paper", or "Scissors"!\nMake sure your spelling is correct.'
            getPlayerChoice();
    }
    
}
/* Including computerSelection and playerSelection as parameters for playGame()
wiped the variable values... Need to figure out how to use variables in a function*/
function playGame(){
    if(computerSelection == "Rock") {
        if(playerSelection == "Rock") {
            console.log("tie");
            alert(`It's a tie! The computer picked ${computerSelection}.`);
        } else if(playerSelection == "Paper") {
            console.log("win");
            alert(`Congratulations, you won! The computer picked ${computerSelection}.`)
        } else if(playerSelection == "Scissors") {
            console.log("loss");
            alert(`You lost, how unfortunate! The computer picked ${computerSelection}.`)
        } else {
            alert("Oops, something went wrong with playerSelection!");
        }

    } else if (computerSelection == "Paper") {
        if(playerSelection == "Rock") {
            console.log("loss");
            alert(`You lost, how unfortunate! The computer picked ${computerSelection}.`)
        } else if(playerSelection == "Paper") {
            console.log("tie");
            alert(`It's a tie! The computer picked ${computerSelection}.`);
        } else if(playerSelection == "Scissors") {
            console.log("win");
            alert(`Congratulations, you won! The computer picked ${computerSelection}.`)
        } else {
            alert("Oops, something went wrong with playerSelection!");
        }

    } else if (computerSelection == "Scissors") {
        if(playerSelection == "Rock") {
            console.log("win");
            alert(`Congratulations, you won! The computer picked ${computerSelection}.`)
        } else if(playerSelection == "Paper") {
            console.log("loss");
            alert(`You lost, how unfortunate! The computer picked ${computerSelection}.`)
        } else if(playerSelection == "Scissors") {
            console.log("tie");
            alert(`It's a tie! The computer picked ${computerSelection}.`);
        } else {
            alert("Oops, something went wrong with playerSelection!");
        }

    } else {
        console.log("Oops, something went wrong with computerSelection!");
        console.log(computerSelection);
    }
}


getComputerChoice();
getPlayerChoice();
playGame();