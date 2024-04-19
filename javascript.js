function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    let move;
    if (number === 1) {
       move = 'Rock';
    } else if (number === 2) {
       move = 'Scissors';
    } else {
       move = 'Paper'; 
    }
    return move;
}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.charAt(0).toUpperCase() +
     playerSelection.slice(1).toLowerCase();

    //if (playerMove == computerSelection) {
        //return (`It is a tie. Both players played ${computerSelection}`)
    //} else if (playerMove == "Rock" && computerSelection == "Paper") {
        //return (`You lose! ${playerMove} loses to ${computerSelection}`)
    //} else if (playerMove == "Scissors" && computerSelection == "Rock") {
        //return (`You lose! ${playerMove} loses to ${computerSelection}`)
    //} else if (playerMove == "Rock" && computerSelection == "Scissors") {
        //return (`You win! ${playerMove} beats ${computerSelection}`)
    //} else if (playerMove == "Scissors" && computerSelection == "Paper") {
        //return (`You win! ${playerMove} beats ${computerSelection}`)
    //} else if (playerMove == "Paper" && computerSelection == "Scissors") {
        //return (`You lose! ${playerMove} loses to ${computerSelection}`)
    //} else if (playerMove == "Paper" && computerSelection == "Rock") {
        //return (`You win! ${playerMove} beats ${computerSelection}`)
    //}

    if (playerMove == computerSelection) {
        return ('oops');
    } else if (playerMove == "Rock" && computerSelection == "Paper") {
        return ('comp');
    } else if (playerMove == "Scissors" && computerSelection == "Rock") {
        return ('comp');
    } else if (playerMove == "Rock" && computerSelection == "Scissors") {
        return ('you');
    } else if (playerMove == "Scissors" && computerSelection == "Paper") {
        return ('you');
    } else if (playerMove == "Paper" && computerSelection == "Scissors") {
        return ('comp');
    } else if (playerMove == "Paper" && computerSelection == "Rock") {
        return ('you');
    }
}

let wins = 0; 
let compWins = 0;

function playGame(button) {
    let playerTurn = button;
    let compTurn = getComputerChoice();
    let outcome = playRound(playerTurn, compTurn); 
    tie.textContent = "";
    if (outcome == 'you') { 
        wins += 1;
    } else if (outcome == 'comp') {
        compWins += 1;
    } else {
        tie.textContent = "It was a tie game.";
        playerOption.append(tie);
    }
    statement.textContent = `Current Score is Player: ${wins} Computer: ${compWins}`;
    playerOption.appendChild(statement);
};

const playerOption = document.querySelector(".playerOptions");
const statement = document.createElement("div");
const tie = document.createElement("div"); 
const winStatement = document.createElement("div");

// what happens when you click a move 
const buttons = document.querySelectorAll(".move"); 
buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        if (wins == 5 || compWins == 5) {
            let winner = 
            wins > compWins ? "you" : "computer";

            winStatement.textContent = `Game over, ${winner} has won 5 games.`;
            playerOption.appendChild(winStatement);
        } else {
            playGame(button.textContent);
        }
    });
});

const reset = document.querySelector(".reset");
reset.addEventListener ("click", () => {
    wins = 0;
    compWins= 0;
    statement.textContent = '';
    winStatement.textContent = '';
    tie.textContent = '';
});

