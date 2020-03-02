let playerScores = 0;
let compScores = 0;

alert( `Welcome to rock-paper-scissor minigame!`);


function computerPlay( value ) {
    let cpuPlay = Math.floor( Math.random() * Math.floor( value ));

    if ( cpuPlay == 0 ) {
        return cpuPlay = `Rock`;
    } else if ( cpuPlay == 1 ) {
        return cpuPlay = `Paper`;
    } else if ( cpuPlay == 2 ) {
        return cpuPlay =`Scissor`;
    }
}

function playRound( playerSelection, computerSelection ) {
    if ( playerSelection == `rock` && computerSelection == `Paper`) {
        compScores++;
        return `You lost! Paper beats rock!`
    } else if ( playerSelection == `paper` && computerSelection == `Rock` ) {
        playerScores++;
        return `You won! Paper beats rock!`;
    } else if ( playerSelection == `rock` && computerSelection == `Scissor` ) {
        playerScores++;
        return `You won! Rock beats scissor!`;
    } else if ( playerSelection == `paper` && computerSelection == `Scissor` ) {
        compScores++;
        return `You lost! Scissor beats paper!`;
    } else if ( playerSelection == `scissor` && computerSelection == `Paper` ) {
        playerScores++;
        return `You won! Scissor beats paper!`;
    } else if ( playerSelection == `scissor` && computerSelection == `Rock` ) {
        compScores++;
        return `You lost! Rock beats scissor!`;
    } else if ( playerSelection == `rock` && computerSelection == `Rock` ) {
        return `It's a draw! Rock equals rock!`;
    } else if ( playerSelection == `paper` && computerSelection == `Paper` ) {
        return `It's a draw! Paper equals paper!`;
    } else if ( playerSelection == `scissor` && computerSelection == `Scissor` ){
        return `It's a draw! Scissor equals scissor`;
    } else {
        return `Invalid command.`;

    }
}

function game( userChoice, compChoice ) { 
    userChoice = prompt( ' Choose your weapon: rock, paper, scissor ').toLowerCase();
    compChoice = computerPlay( 3 );
    alert( playRound( userChoice, compChoice ) );
}

console.log( game() );
console.log( game() );
console.log( game() );
console.log( game() );
console.log( game() );

if ( playerScores > compScores ) {
    alert( ` Your scores: ${playerScores}, Computer scores: ${compScores}.`)
    alert( ` Congratulations! You won against the computer! `);
} else if ( playerScores < compScores )  {
    alert( ` Your scores: ${playerScores}, Computer scores: ${compScores}.`)
    alert( ` Oh no! You have lost against the computer! `);
} else {
    alert( ` Your scores: ${playerScores}, Computer scores: ${compScores}.`)
    alert( `It's a draw battle! No one won or lost!`);
}