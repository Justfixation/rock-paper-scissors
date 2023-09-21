function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    console.log(computerSelection);
    switch(computerSelection) {
        case 1:
            computerSelection = ("Rock");
            console.log(computerSelection);
            break;
        
        case 2:
            computerSelection = ("Paper");
            console.log(computerSelection);
            break;
        
        case 3:
            computerSelection = ("Scissors");
            console.log(computerSelection);
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
            console.log(playerSelection);
            /* playGame(); */
            break;

        case "PAPER":
            playerSelection = "Paper";
            console.log(playerSelection);
            /* playGame(); */
            break;

        case "SCISSORS":
            playerSelection = "Scissors";
            console.log(playerSelection);
            /* playGame(); */
            break;

        default:
            selectionMessage = 'Sorry, you need to pick "Rock", "Paper", or "Scissors"!\nMake sure your spelling is correct.'
            getPlayerChoice();
    }
    
}
/*Simplify rock paper scissors so I don't write out 9 if statements - how?*/
function playGame(playerSelection, computerSelection){
    
}


getComputerChoice();
getPlayerChoice();