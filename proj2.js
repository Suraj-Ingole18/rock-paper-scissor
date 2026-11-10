let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#computer-score")

const genComputerchoice=()=>{
    const options=["rock","paper","scissor"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("The Game Was Draw");
    msg.innerText="The Game Was Draw, Play Again!"
    msg.style.backgroundColor="#081b31";
}

const playGame =(userchoice)=>{
    console.log("User Choice Is",userchoice)
    const compChoice=genComputerchoice();
    console.log("Computer Choice Is",compChoice);
    if(userchoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(userchoice==="paper"){
            userWin=compChoice==="rock" ? true:false;
        }else{
            userWin=compChoice==="paper" ? true:false;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        if(computerscore>0){
        computerscore--;
        }
        userScorePara.innerText=userscore;
        compScorePara.innerText=computerscore;
        console.log("Congratulation's You win, Computer Lose")
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        computerscore++;
        if(userscore>0){
        userscore--;
        }
        compScorePara.innerText=computerscore;
        userScorePara.innerText=userscore;
        console.log("You Lose, Computer Win")
        msg.innerText=`You Lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
})