function computerPlay(){
    let computerMove = Math.floor(Math.random() *3);
    if (computerMove == 2){
        computerMove = 'Rock';
    } else if (computerMove == 1){
        computerMove = 'Paper';
    } else if (computerMove == 0){
        computerMove = 'Scissors';
    }
    return computerMove;
    console.log(computerMove);
}
function playRound(playerSelection, computerSelection){
    //var playerSelection = 'Paper';
    //var computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return 'The game is draw!';
    } else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        return 'You won! Paper beats rock!';
    } else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You lost! Scissors beats paper!';
    } else if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You lost! Paper beats rock!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return 'You won! Rock beats scissors!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return 'You won! Scissors beats rock!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        return 'You lost! Rock beats scissors!';
    }
}
const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
