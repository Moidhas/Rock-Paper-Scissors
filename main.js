
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let retval; 
    if (random === 0) {
        retval = "Rock";
    } else if (random === 1) {
        retval = "Paper";
    } else {
        retval = "Scissors";
    }
    return retval; 
}

function computeWon(cs, scissors, paper, rock) {
    if (cs === "SCISSORS") {
        if (scissors === undefined) return "Tie";
        return scissors ? "You Won!" : "You Lose!";
    } else if (cs === "PAPER") {
        if (paper === undefined) return "Tie";
        return paper ? "You Won!" : "You Lose!";
    } else if (cs === "ROCK") {
        if (rock === undefined) return "Tie";
        return rock ? "You Won!" : "You Lose!";
    }
}


function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    let retval;

    if (ps === "ROCK") {
       retval = computeWon(cs, false, true, undefined);
    } else if (ps === "PAPER") {
        retval = computeWon(cs, false, undefined, true);
    } else if (ps === "SCISSORS") {
       retval = computeWon(cs, undefined, false, true);
    }

    if (retval === "You Lose!") {
        retval = retval + " " + computerSelection + " beats " + playerSelection;  
    } else if (retval === "You Won!") {
        retval = retval + " " + playerSelection + " beats " + computerSelection;  
    } else {
        retval = retval + " " + playerSelection + " === " + computerSelection;
    }

    return retval; 
}

function game() {
    const playerSelection = prompt("Input a choice: ");
    const computerSelection = getComputerChoice();
    for(let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
