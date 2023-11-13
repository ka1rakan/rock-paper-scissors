//Set a function that will get the random computer choice
function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if(random==0){
        return "rock";
    }else if(random==1){
        return "paper";
    }else if(random==2){
        return "scissors";
    }
}


let userWins = 0;
let computerWins = 0;
//Set a function that takes two variables and plays a round based on the values
function playRound(playerSelection, computerSelection){
    //PLAYER SELECTS ROCK
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return "Tie!"
        }else if(computerSelection=="paper"){
            computerWins++
            return "You Lose! Paper beats Rock"
        }else if(computerSelection="scissors"){
            userWins++
            return "You Win! Rock beats Scissors"
        }
    }
    //PLAYER SELECTS PAPER
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            userWins++
            return "You Win! Paper beats Rock"
        }else if(computerSelection=="paper"){
            return "Tie!"
        }else if(computerSelection=="scissors"){
            computerWins++
            return "You Lose! Scissors beat Paper"
        }
    }
    //PLAYER SELECTS SCISSORS
    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerWins++
            return "You Lose! Rock beats scissors"
        }else if(computerSelection=="paper"){
            userWins++
            return "You Win! Scissors beat Paper"
        }else if(computerSelection=="scissors"){
            return "Tie!"
        }
    }else{
        return "Please enter a valid option!"
    }
}

const resultText = document.querySelector("#results > p");


//Declare variables which call the buttons 
const buttons = document.querySelectorAll("button");
//Add event listeners to each button
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        resultText.textContent = playRound(playerSelection, computerSelection);
        console.log(userWins, computerWins)
        if(userWins==5){
            console.log("Game Over! You Win!")
            userWins = 0;
            computerWins = 0
        }else if(computerWins==5){
            console.log("Game Over! Computer Wins!")
            userWins = 0;
            computerWins = 0;
        }
    })
})