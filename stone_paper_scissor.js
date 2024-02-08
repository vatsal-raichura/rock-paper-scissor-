let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
  console.log("game was draw");
  msg.innerText = "Game was Draw. play Again!!";
  msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
      userScore++ ;
      userScorePara.innerText = userScore;
      msg.innerText = `You Win!!  Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";

    }else{
      compScore++ ;
      compScorePara.innerText = compScore;
      msg.innerText = `You Lose!! ${compChoice} beats  Your ${userChoice}` ;
      
      msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
  console.log("user choice =",userChoice);
  // Generate Computer choice
  const compChoice=genCompChoice();
  console.log("comp choice =",compChoice)

  if(userChoice === compChoice ){
    // game was draw
    drawGame();
}else{
  let userWin = true;
  if(userChoice=== "rock"){
    // scissors, paper
    userWin = compChoice === "paper" ? false : true ;
  }else if(userChoice === "paper"){
    // scissors,rock
    userWin = compChoice === "scissors" ? false : true ;
  }else{
    // rock,paper
    userWin = compChoice === "rock" ? false : true ;
  }
  showWinner(userWin , userChoice , compChoice);
}

}



choices.forEach((choice)=>{
  
  choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id")
   
    playGame(userChoice)
  })
})
