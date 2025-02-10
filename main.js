let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let choice;
  const val = Math.floor(Math.random() * 3);
  
  console.log(val);

  if(val == 1) choice = 'rock';
  if(val == 2) choice = 'paper';
  if(val == 0) choice = 'scissors';

  return choice;
}


function getHumanChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let validInputStatus = false;
  let result;

  while (validInputStatus == false){
    let humanChoiceInput = prompt("Please type one of the following: rock, paper, or scissors");
    result = humanChoiceInput.toLowerCase();
    if (choices.includes(result)) { break; }
  }

  return result;
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Its a tie, you both played ${humanChoice}`;
  }
  if ((humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
    return `You win! ${humanChoice} beats ${computerChoice}`;
}

function playRound(humanChoice, computerChoice) {
  const result = determineWinner(humanChoice, computerChoice);
  console.log(result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(humanSelection, computerSelection);
