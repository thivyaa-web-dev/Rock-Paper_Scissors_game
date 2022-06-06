const botChoiceView = document.getElementById("bot_choice");
const playerChoiceView = document.getElementById("player_choice");
const resultView = document.getElementById("Result");

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoices =>possibleChoices.addEventListener('click',(e) =>{
    userChoice = e.target.id;
    playerChoiceView.innerHTML =userChoice;
    botChoiceGenerator();
    Result();

}))

function botChoiceGenerator(){
    const randNumber = Math.floor(Math.random()*3)+1;
    if(randNumber === 1) //exactly matches ??
    {
        botChoosen ="Rock";

    }
    if(randNumber === 2) //exactly matches ??
    {
        botChoosen ="Paper";
        
    }
    if(randNumber === 3) //exactly matches ??
    {
        botChoosen ="Scissors";
        
    }
    botChoiceView.innerHTML = botChoosen;
    console.log(randNumber);
}

function results(){
    if(botChoosen === userChoice){
        Result = "hey, it's a draw, try again!";
    }

    if(botChoosen === "rock" && userChoice ==="paper"){
        Result = "ussser wins!";
    }

    if(botChoosen === "paper" && userChoice ==="scissors"){
        Result = "ussser wins!";
    }
    if(botChoosen === "scissors" && userChoice ==="rock"){
        Result = "ussser wins!";
    }


    

    if(botChoosen === "paper" && userChoice ==="paper"){
        Result = "bot wins!";
    }

    if(botChoosen === "scissors" && userChoice ==="paper"){
        Result = "bot wins!";
    }
    if(botChoosen === "rock" && userChoice ==="scissors"){
        Result = "bot wins!";
    }

    resultView.innerHTML = result;
}