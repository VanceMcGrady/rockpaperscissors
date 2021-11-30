let playerAnswer = document.querySelector(".player-answer");
let computerAnswer = document.querySelector(".computer-answer");
let outcome = document.querySelector(".outcome");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

console.log(playerScore);

const playBtn = document.querySelector(".play-btn");

function computerPlay() {
  let randNum = Math.floor(Math.random() * 3);
  let compMove = "";

  switch (randNum) {
    case 0:
      compMove = "rock";
      break;
    case 1:
      compMove = "paper";
      break;
    case 2:
      compMove = "scissors";
      break;
    default:
      null;
  }
  computerAnswer.innerHTML = compMove;
  return compMove;
}

function playerPlay() {}
rockBtn.addEventListener("click", () => (playerAnswer.innerHTML = "rock"));
paperBtn.addEventListener("click", () => (playerAnswer.innerHTML = "paper"));
scissorsBtn.addEventListener(
  "click",
  () => (playerAnswer.innerHTML = "scissors")
);

function gameLogic() {
  compMove = computerPlay();
  playerMove = playerAnswer.innerHTML;

  if (!playerMove) {
    outcome.innerHTML = "You Must Enter A Move To Play";
    computerAnswer.innerHTML = "";
  } else if (playerMove == "scissors" && compMove == "rock") {
    outcome.innerHTML = "You Lose!";
  } else if (playerMove == "scissors" && compMove == "paper") {
    outcome.innerHTML = "You Win!";
  } else if (playerMove == "paper" && compMove == "scissors") {
    outcome.innerHTML = "You Lose!";
  } else if (playerMove == "paper" && compMove == "rock") {
    outcome.innerHTML = "You Win!";
  } else if (playerMove == "rock" && compMove == "paper") {
    outcome.innerHTML = "You Lose!";
  } else if (playerMove == "rock" && compMove == "scissors") {
    outcome.innerHTML = "You Win!";
  } else {
    outcome.innerHTML = "Tie";
  }
}

playBtn.addEventListener("click", gameLogic);
