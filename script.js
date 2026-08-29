function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  function getHumanChoice() {
    const choice = prompt("Write rock, scissors or paper");
    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You win the game! ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! ${computerScore} to ${humanScore}`);
  } else {
    console.log(`It's a tie game! ${humanScore} to ${computerScore}`);
  }
}

playGame();