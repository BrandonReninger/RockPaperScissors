let choices = ["rock", "paper", "scissors"];
let images = ['paper.png', 'rock.png', 'scissors.png'];
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = choices[randomNum];
console.log(computerChoice);

function checkWinner(userChoice, computerChoice) {
    let outComeElem = document.getElementById("game-outcome")
    outComeElem.innerText = choices[""];

    if (userChoice === computerChoice) {
        return "Tie";
    } else if (userChoice === choices[0] && computerChoice === choices[2]) {
        return "You won!"
    } else if (userChoice === choices[0] && computerChoice === choices[1]) {
        return "You lost!"
    } else if (userChoice === choices[1] && computerChoice === choices[0]) {
        return "You won!"
    } else if (userChoice === choices[1] && computerChoice === choices[2]) {
        return "You lost!"
    } else if (userChoice === choices[2] && computerChoice === choices[0]) {
        return "You lost!"
    } else if (userChoice === choices[2] && computerChoice === choices[1]) {
        return "You won!"
    }



    function drawImage() {
        let imageElem = document.getElementById("weapon")
        imageElem.innerHTML = images[''];
    }