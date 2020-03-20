let rock = {
    img: ("rock.png"),
    type: "rock"
}

let paper = {
    img: ("rock.png"),
    type: "paper"
}

let scissors = {
    img: ("scissors.png"),
    type: "scissors"
}


let randomNum = Math.random();

function computerChoice() {
    play()
    if (randomNum < 0.34) {
        return rock;
    } else if (randomNum <= 0.67) {
        return paper;
    } else {
        return scissors;
    }
}



//FIXME make computer choice work correctly
function play(userChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (userChoice === rock && computerChoice === scissors.type)
}
//FIXME