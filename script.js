let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");


const userCount = document.querySelector("#user-score");
const computerCount = document.querySelector("#comp-score");


const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx =  Math.floor(Math.random () * 3);
    return options [randIdx];
};

const drowGame = () => {
    console.log("Game was drow. Play Again!");
    msg.innerText = "Game was drow. Play Again!";
    msg.style.backgroundColor = "black";


};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userCount.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";

    }else{
        compScore++;
        computerCount.innerText = compScore;
        console.log("you Lose");
        msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }

}

const playGame = (userChoice) => {
   console.log("user Choice = ",userChoice);
   //Genarate compuer choice -> modular
   const computerChoice  =  genCompchoice();
   console.log("computerChoice = ",computerChoice);
   
   if(userChoice === computerChoice){
    //Drow Game
    drowGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissors , paper
       userWin = computerChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        // rock , scissors
        userWin = computerChoice === "scissors" ? false : true;
    }else{
        // rock , paper
        userWin = computerChoice === "rock" ? false : true ;
    }
    showWinner(userWin, userChoice, computerChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
})