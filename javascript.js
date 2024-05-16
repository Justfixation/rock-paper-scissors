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

function getPlayerChoice(choice){
    playerChoice = choice;
    resetGame();
}

const finalResults = [];

function playGame(computerChoice, playerChoice){
    if(computerChoice == "Rock") {
        if(playerChoice == "Rock") {
            console.log(`Round ${finalResults.length + 1} result = tie`);
            alert(`Round ${finalResults.length + 1} is a tie! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Tie`;
        } else if(playerChoice == "Paper") {
            console.log(`Round ${finalResults.length + 1} result = win`);
            alert(`Congratulations, you won Round ${finalResults.length + 1}! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Win`;
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${finalResults.length + 1} result = loss`);
            alert(`You lost Round ${finalResults.length + 1}, how unfortunate! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Loss`;
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Paper") {
        if(playerChoice == "Rock") {
            console.log(`Round ${finalResults.length + 1} result = loss`);
            alert(`You lost Round ${finalResults.length + 1}, how unfortunate! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Loss`;
        } else if(playerChoice == "Paper") {
            console.log(`Round ${finalResults.length + 1} result = Tie`);
            alert(`Round ${finalResults.length + 1} is a tie! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: tie`;
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${finalResults.length + 1} result = Win`);
            alert(`Congratulations, you won Round ${finalResults.length + 1}! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Win`;
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else if (computerChoice == "Scissors") {
        if(playerChoice == "Rock") {
            console.log(`Round ${finalResults.length + 1} result = win`);
            alert(`Congratulations, you won Round ${finalResults.length + 1}! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Win`;
        } else if(playerChoice == "Paper") {
            console.log(`Round ${finalResults.length + 1} result = loss`);
            alert(`You lost Round ${finalResults.length + 1}, how unfortunate! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: Loss`;
        } else if(playerChoice == "Scissors") {
            console.log(`Round ${finalResults.length + 1} result = tie`);
            alert(`Round ${finalResults.length + 1} is a tie! The computer picked ${computerChoice}.`);
            finalResults[finalResults.length] = `Round ${finalResults.length + 1}: tie`;
        } else {
            alert("Oops, something went wrong with playerChoice!");
            throw new Error("");
        }
    } else {
        console.log("Oops, something went wrong with computerChoice!");
        console.log(computerChoice);
        throw new Error("");
    }    
}

 function resetGame(){
    while (finalResults.length > 0) {
        finalResults.pop();
    }
    /* Removes each item of finalResults, emptying it for the next game */
    
    playGame(getComputerChoice(), playerChoice);
 }
 /* After resetting variables, runs game again. Acts as the initial start button too*/
 
 const rock = document.querySelector(".rock");
 const paper = document.querySelector(".paper");
 const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => console.log("rock button is working"));
paper.addEventListener("click", () => console.log("paper button is working"));
scissors.addEventListener("click", () => console.log("scissors button is working"));