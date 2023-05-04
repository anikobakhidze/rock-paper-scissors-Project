// #
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const buttonsArray = [rock,paper,scissors];
const chosenMove = document.querySelector('.chosen-move');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
let randomNumbers;
// generate random numbers 
const generateRandomNumbers=()=>{
  randomNumbers = Math.floor(Math.random()*3);
  return randomNumbers;
}
//Chosen moves function
const funcOfThings=(id) => {
  generateRandomNumbers();
  const computerMoveImg = buttonsArray[randomNumbers].innerHTML;
  const computerMoveValue = buttonsArray[randomNumbers].value;
  if(id === computerMoveValue){
   result.innerText = 'Tie';
  } else if((id === 'paper' && computerMoveValue === 'rock')|| (id === 'rock' && computerMoveValue === 'scissors')){
    result.innerText = 'You Won';      
  } else if((id === 'paper' && computerMoveValue ==='scissors') || (id === 'rock' && computerMoveValue === 'paper')){
    result.innerText = 'You lose'; 
  }
  chosenMove.innerHTML =  `You: <img src="images/${id}-emoji.png" alt='img'"/> Computer: ${computerMoveImg}` ;
}
