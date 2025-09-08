let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

let playGame = (userChoice) => {
    // for computer choice
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper")
        {
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true)
        {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "white";
        msg.style.background = "Green";
    }
    else
        {
            compScore++
            compScorePara.innerText = compScore;
            msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
            msg.style.color = "white";
            msg.style.background = "red";
        } 
    }
    
    let gameDraw = () => {
        msg.innerText = "Game Was Draw. Play Again.";
        msg.style.color = "black";
        msg.style.background = "yellow";
}

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]
}