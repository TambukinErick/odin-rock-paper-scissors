let computerScore = 0;
let humanScore = 0;
let gameOngoing = true;

const display = document.querySelector("#game_display");
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorBtn = document.querySelector("#btn-scissors");
let gameLog = ``;

rockBtn.addEventListener("click", () => {
  if (gameOngoing) {
    playRound("rock", getComputerChoice());
  }
});

paperBtn.addEventListener("click", () => {
  console.log("clicking paper");
  if (gameOngoing) {
    playRound("paper", getComputerChoice());
  }
});

scissorBtn.addEventListener("click", () => {
  if (gameOngoing) {
    playRound("scissors", getComputerChoice());
  }
});


function playRound(humanChoice, computerChoice) {
  const result = determineRoundWinner(humanChoice, computerChoice);
  updateScores(result);
  gameLog += generateRoundResultMessage(result, humanChoice, computerChoice);
  gameLog += checkForWinner();
  game_display.textContent = gameLog;
}

function getComputerChoice() {
  let choice;
  const val = Math.floor(Math.random() * 3);
  
  if(val == 1) choice = 'rock';
  if(val == 2) choice = 'paper';
  if(val == 0) choice = 'scissors';

  return choice;
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

function updateScores(result) {
  if (result == "win") {
    humanScore += 1;
  } else if (result == "lose") {
    computerScore += 1;
  }
}

function generateRoundResultMessage(result, humanChoice, computerChoice) {
  if (result == "tie") return `Its a tie, you both played ${humanChoice}\r\n`;
  if (result == "lose") return `You lose! ${computerChoice} beats ${humanChoice}\r\n`;
  if (result == "win") return `You win! ${humanChoice} beats ${computerChoice}\r\n`;

}

function checkForWinner() {
  if (computerScore == 5 || humanScore == 5) {
    gameOngoing = false;
    return getFinalWinner();
  }
  return "";
}
function getFinalWinner() {
  if (humanScore > computerScore) {
    return `You Win!\nFinal Scores\nHuman:${humanScore} Computer:${computerScore}\n`;
  } else if (humanScore < computerScore) {
    return `You Lose! Better Luck Next Time\nFinal Scores\nHuman:${humanScore} Computer:${computerScore}\n`;
  } else {
    return `Its A Tie\nFinal Scores\nHuman:${humanScore} Computer:${computerScore}\n` ;
  }
}



