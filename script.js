let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        alert('Invalid choice! Please choose rock, paper, or scissors.');
        return getHumanChoice();
    } else {
        return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return 'You win! Rock beats scissors.';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win! Scissors beats paper.';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return 'You win! Paper beats rock.';
    } else {
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice + '.';
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log('You: ' + humanScore + ' Computer: ' + computerScore);
}

function retrieveScore() {
    return 'You: ' + humanScore + ' Computer: ' + computerScore;
}

function retrievePlayerScore() {
    return humanScore;
}

function retrieveComputerScore() {
    return computerScore;
}