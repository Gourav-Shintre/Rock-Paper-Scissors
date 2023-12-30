let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
  const options=["rock","paper","scissors"];
  //rock,paper,scissors
  const randomIdx= Math.floor(Math.random()*3);
  return options[randomIdx];

};
const draw =()=>{
  console.log("game is draw");
  msg.innerText="Game is draw!... Play again";
  msg.style.backgroundColor = "blue";

};

const showWinner = (userWin,userchoice,compChoice) =>{
  if(userWin){
    // console.log("You Won!...");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Won!... Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Orchid";
  }else{
    // console.log("You Lose!...");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose!...${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userchoice) => {
  //Generate computer choice
  console.log("user choice = ",userchoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ",compChoice);
  if(userchoice===compChoice)
  {
    //draw
    draw();
  }
  else{
    let userWin=true;
    if(userchoice==="rock")
    {
      //computer can select sissor or paper
      userWin = compChoice ==="paper" ? false : true;
    }
    else if(userchoice==="paper")
    {
      //computer can select rock or sissor
      userWin=compChoice==="rock" ? true : false;
    }
    else if(userchoice==="scissors"){
      //computer can select rock or paper
      userWin=compChoice==="rock" ? false : true;
    }
    showWinner(userWin,userchoice,compChoice);
  }

  
};

choices.forEach((choice) =>
{
  //console.log(choice);
  choice.addEventListener("click", () => {
    
    const userchoice=choice.getAttribute("id");
    // console.log("choice was clicked",userchoice);
    playGame(userchoice);

  })

});
