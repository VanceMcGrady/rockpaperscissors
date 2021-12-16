let playerAnswer = document.querySelector(".player-answer");
let computerAnswer = document.querySelector(".computer-answer");
let outcome = document.querySelector(".outcome");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

let compScore = 0;
let playScore = 0;

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
    compScore += 0;
    playScore += 0;
  } else if (playerMove == "scissors" && compMove == "rock") {
    compScore += 1;
    playScore += 0;
    outcome.innerHTML = "Rock Beats Scissors!";
  } else if (playerMove == "scissors" && compMove == "paper") {
    playScore += 1;
    compScore += 0;
    outcome.innerHTML = "Scissors Beats Paper!";
  } else if (playerMove == "paper" && compMove == "scissors") {
    compScore += 1;
    playScore += 0;
    outcome.innerHTML = "Scissors Beats Paper!";
  } else if (playerMove == "paper" && compMove == "rock") {
    playScore += 1;
    compScore += 0;
    outcome.innerHTML = "Paper Beats Rock!";
  } else if (playerMove == "rock" && compMove == "paper") {
    compScore += 1;
    playScore += 0;
    outcome.innerHTML = "Paper Beats Rock!";
  } else if (playerMove == "rock" && compMove == "scissors") {
    playScore += 1;
    compScore += 0;
    outcome.innerHTML = "Rock Beats Scissors!";
  } else {
    compScore += 0;
    g;
    playScore += 0;
    outcome.innerHTML = "Tie";
  }

  if (playScore == 5) {
    outcome.innerHTML = "You Win";
    playScore = 0;
    compScore = 0;
  } else if (compScore == 5) {
    outcome.innerHTML = "You Lose!";
    compScore = 0;
    playScore = 0;
  } else {
    null;
  }

  playerScore.innerHTML = playScore;
  computerScore.innerHTML = compScore;
  setTimeout(function () {
    playerAnswer.innerHTML = "";
    computerAnswer.innerHTML = "";
    outcome.innerHTML = "";
  }, 1200);
}

playBtn.addEventListener("click", gameLogic);
