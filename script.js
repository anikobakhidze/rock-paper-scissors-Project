const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttonsArray = [rock, paper, scissors];
const chosenMove = document.querySelector(".chosen-move");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
let randomNumbers;
let countWins = 0;
let countLosses = 0;
let countTie = 0;
// generate random numbers
const generateRandomNumbers = () => {
  randomNumbers = Math.floor(Math.random() * 3);
  return randomNumbers;
};
//Chosen moves function
const funcOfThings = (id) => {
  generateRandomNumbers();
  const computerMoveImg = buttonsArray[randomNumbers].innerHTML;
  const computerMoveValue = buttonsArray[randomNumbers].value;
  if (id === computerMoveValue) {
    result.innerText = "Tie";
    countTie++;
  } else if (
    (id === "paper" && computerMoveValue === "rock") ||
    (id === "rock" && computerMoveValue === "scissors")
  ) {
    result.innerText = "You Won";
    countWins++;
  } else if (
    (id === "paper" && computerMoveValue === "scissors") ||
    (id === "rock" && computerMoveValue === "paper")
  ) {
    result.innerText = "You lose";
    countLosses++;
  }
  chosenMove.innerHTML = `You <img src="images/${id}-emoji.png" alt='img'"/> ${computerMoveImg} Computer `;
  score.innerHTML = `Wins: ${countWins}, Losses: ${countLosses}, Tie: ${countTie}`;
};
// reset button
const resetBtn = () => {
  console.log("anna");
  score.innerHTML = `Wins: 0, Losses: 0, Tie: 0 `;
};
