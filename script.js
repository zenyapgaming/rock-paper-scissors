let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 0.34) {
    return "rock";
  } else if (randomNum < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let resultText;

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  const roundResult = document.createElement("p");
  roundResult.textContent = resultText;
  resultsDiv.appendChild(roundResult);

  updateScore();
  checkForWinner();
}

function updateScore() {
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winnerText = document.createElement("h2");
    if (humanScore === 5) {
      winnerText.textContent = "You win the game!";
    } else {
      winnerText.textContent = "Computer wins the game!";
    }
    resultsDiv.appendChild(winnerText);
    disableButtons();
  }
}

function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

function handleClick(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

document.querySelector("#rock").addEventListener("click", handleClick);
document.querySelector("#paper").addEventListener("click", handleClick);
document.querySelector("#scissors").addEventListener("click", handleClick);