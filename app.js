const playerAnswer = document.querySelector(".player-answer").innerHTML;
const computerAnswer = document.querySelector(".computer-answer").innerHTML;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

function computerPlay() {
  let move = "";
  let randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      null;
  }
}
