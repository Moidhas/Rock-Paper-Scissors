
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
    let won = 0; 
    if (ps === "ROCK") {
       retval = computeWon(cs, true, false, undefined);
    } else if (ps === "PAPER") {
        retval = computeWon(cs, false, undefined, true);
    } else if (ps === "SCISSORS") {
       retval = computeWon(cs, undefined, true, false);
    }

    if (retval === "You Lose!") {
        retval = retval + " " + computerSelection + " beats " + playerSelection;
        won = -1;
    } else if (retval === "You Won!") {
        retval = retval + " " + playerSelection + " beats " + computerSelection;  
        won = 1;  
    } else {
        retval = retval + " " + playerSelection + " === " + computerSelection;
    }

    results.textContent = retval; 
    return won; 
}



let comp_won = 0; 
let player_won = 0; 
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', e => {
    let playerSelection = btn.getAttribute('class');
    let computerSelection = getComputerChoice();
    let won = playRound(playerSelection, computerSelection, results);
    if (won === -1) {
        comp_won += 1; 
    } else if (won === 1) {
        player_won += 1; 
    }
    const playAgainMsg = " Press to Play again";

    if (comp_won === 5) {
        results.textContent = "Computer Won?!?" + playAgainMsg;
        comp_won = 0;
        player_won = 0; 
    } else if (player_won === 5) {
        results.textContent = "Player Won!!!" + playAgainMsg;
        comp_won = 0;
        player_won = 0; 
    }
    
    score.textContent = `Score: ${player_won}`;
}));
