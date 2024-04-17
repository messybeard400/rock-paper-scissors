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
    let playerMove = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

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

function playGame() {
    let wins = 0; 
    let compWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerTurn = prompt("Rock, Paper, or Scissors?", "rock");
        let compTurn = getComputerChoice();

        let outcome = playRound(playerTurn, compTurn); 
        if (outcome == 'you') { 
            wins += 1;
        } else if (outcome == 'comp') {
            compWins += 1;
        } else {
            console.log('It was a tie game')
        }
        console.log(`Current Score is Player: ${wins} Computer: ${compWins}`)
    }    
    alert(`Final Score is Player: ${wins} Computer: ${compWins}`)
}