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

function determineRoundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie"  }
  if ((humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    return "lose"  
  }
    return "win"
}

function generateRoundResultMessage(result, humanChoice, computerChoice) {
  if (result == "tie") return `Its a tie, you both played ${humanChoice}`;
  if (result == "lose") return `You lose! ${computerChoice} beats ${humanChoice}`;
  if (result == "win") return `You win! ${humanChoice} beats ${computerChoice}`;

}

function updateScores(result) {
  if (result == "win") {
    humanScore += 1;
  } else if (result == "lose") {
    computerScore += 1;
  }
}

function playRound(humanChoice, computerChoice) {
  const result = determineRoundWinner(humanChoice, computerChoice);
  updateScores(result);

  return generateRoundResultMessage(result, humanChoice, computerChoice);
}

function getFinalWinner() {
  if (humanScore > computerScore) {
    return `You Win!\nFinal Scores\nHuman:${humanScore} Computer:${computerScore} `;
  } else if (humanScore < computerScore) {
    return `You Lose! Better Luck Next Time\nFinal Scores\nHuman:${humanScore} Computer:${computerScore}`;
  } else {
    return `Its A Tie\nFinal Scores\nHuman:${humanScore} Computer:${computerScore}` ;
  }
}

function startGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`round #${i+1}`)
    console.log(playRound(humanSelection, computerSelection));
  }
}

startGame();
console.log(getFinalWinner());
