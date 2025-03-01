console.log("Welcome to the Tic-Tac-Toe Game by Shaurav !!");

//Initiate music and tunes
let bgMusic = new Audio("Bgm.mp3");
bgMusic.volume = 0.03;
bgMusic.loop = true;

let turnTune = new Audio("Ding.mp3");
turnTune.volume = 0.2;

let winTune = new Audio("gameover.wav");
winTune.volume = 0.05;

let tieTune = new Audio("tie.mp3");
tieTune.volume = 0.03;

//Function to play the Bg Music
document.querySelector(".unmute-png").addEventListener("click", () => {
  bgMusic.play();
  document.querySelector(".unmute-png").classList.add("hidden");
});

//Accumulate imp. Elements from DOM
let boxes = document.querySelectorAll('.box');
let turnMessage = document.querySelector('#turn-message');
let resultMessage = document.querySelector('#result-message');
let restartButton = document.querySelector('#restart-button');
let turn = "X";
let isGameEnd = false;

//function to change the turn
const changeTurn = function () {
  turn = (turn === "X") ? "0" : "X";  
  turnMessage.innerText = turn;
}

//function to check for a tie
let resetGame;
function checkTie() {
  let textbox = document.querySelectorAll(".boxtext");
  if([...textbox].every((box)=>{return box.innerText !== ""}) && !isGameEnd){
    isGameEnd = true;
    resultMessage.innerText = "It's a Tie !!";
    turnMessage.innerText = "";
    tieTune.play();
    resetGame = setTimeout(resetBoard,3000);
  }
};

//function to reset Game Board
function resetBoard(){
  clearTimeout(resetGame);
  let textbox = document.querySelectorAll(".boxtext");
  textbox.forEach((box)=>{
    box.innerText = "";
  })
  boxes.forEach((ele)=>{
    ele.classList.remove("winner");
  })
  isGameEnd = false;
  turn = "X";
  turnMessage.innerText = "X";
  resultMessage.innerText = "";
}
restartButton.addEventListener('click',resetBoard);

//function to check for a win
function checkWin(){
  let textbox = document.querySelectorAll('.boxtext');
  let winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  winCombo.forEach((comb)=>{
    if((textbox[comb[0]].innerText === textbox[comb[1]].innerText) && (textbox[comb[1]].innerText === textbox[comb[2]].innerText) &&
      (textbox[comb[0]].innerText !== "")
    ) {
      comb.forEach((index)=>{
        textbox[index].parentElement.classList.add('winner');
      })
      resultMessage.innerText = `${textbox[comb[0]].innerText} Wins !!`;
      turnMessage.innerText = "";
      isGameEnd = true;
      winTune.play(); 
    }
  })
}

//Game Logic
boxes.forEach((ele)=>{
  let textbox = ele.querySelector('.boxtext');
  ele.addEventListener('click',()=>{
    if(textbox.innerText === "" && !isGameEnd){
      textbox.innerText = `${turn}`;
      checkWin();
      checkTie();
    }
    if(!isGameEnd){
      changeTurn();
    }
  })
})
