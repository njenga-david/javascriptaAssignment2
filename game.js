let humanScore = 0;
let computerScore = 0;

function play(PersonPlay, cheatMode = false) {
    const getComputerPlay = function() {
        if (cheatMode) {
            return 'rock'; 
        }
        const random = Math.random();
        if (random < 0.25) return 'rock';
        if (random < 0.75) return 'paper';
        return 'scissors';
    };

    const displayResult = (outcome) => {
        console.log(`You ${outcome === 'win' ? 'win' : outcome === 'tie' ? 'tied' : 'lose'}.`);
    };

    const computerPlay = getComputerPlay();

    console.log(`You played ${PersonPlay}. The bot played ${computerPlay}.`);

    const outcome = PersonPlay === computerPlay ? 'tie' :
                    (PersonPlay === 'rock' && computerPlay === 'scissors') ||
                    (PersonPlay === 'paper' && computerPlay === 'rock') ||
                    (PersonPlay === 'scissors' && computerPlay === 'paper') ? 'win' : 'lose';

    outcome === 'win' ? humanScore++ :
    outcome === 'lose' ? computerScore++ : null;

    displayResult(outcome);

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

function getUserInput() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`Enter your move (rock, paper, or scissors): `, (move) => {
        play(move.toLowerCase()); 
        readline.close();
    });
}


getUserInput();
