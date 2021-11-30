const playerAnswer = document.querySelector(".player-answer").innerHTML;
const computerAnswer = document.querySelector(".computer-answer").innerHTML;
console.log(playerAnswer);

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
