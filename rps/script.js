const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userBoard = document.getElementById('user')
const computerBoard = document.getElementById('computer')
const statsBoard = document.getElementById('stats')

var userPoints=0, computerPoints = 0

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if(randomNumber === 0) {
        computerChoice = 'rock'
    }
    else if(randomNumber === 1) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if(computerChoice === userChoice)
    {
        resultDisplay.innerHTML = "It's a Draw!!"
    }
    else
    {
        if(computerChoice === "paper")
        {
            if(userChoice === "scissors")
            {
                resultDisplay.innerHTML = "User Wins"
                userPoints++
            }
            else
            {
                resultDisplay.innerHTML = "Computer Wins"
                computerPoints++
            }
        }
        if(computerChoice === "rock")
        {
            if(userChoice === "paper")
            {
                resultDisplay.innerHTML = "User Wins"
                userPoints++
            }
            else
            {
                resultDisplay.innerHTML = "Computer Wins"
                computerPoints++
            }
        }
        if(computerChoice === "scissors")
        {
            if(userChoice === "rock")
            {
                resultDisplay.innerHTML = "User Wins"
                userPoints++
            }
            else
            {
                resultDisplay.innerHTML = "Computer Wins"
                computerPoints++
            }
        }
    }
}

const getLead = () => {
    if(userPoints === computerPoints && statsBoard.innerHTML != "Game Starts!!!") {
        userBoard.innerHTML = userPoints
        computerBoard.innerHTML = computerPoints
        statsBoard.innerHTML = "Both have equal advantage"
    }
    else if(userPoints  > computerPoints) {
        userBoard.innerHTML = userPoints
        computerBoard.innerHTML = computerPoints
        statsBoard.innerHTML = `User is leading the Computer by ${userPoints-computerPoints}!!!`
    }
    else {
        userBoard.innerHTML = userPoints
        computerBoard.innerHTML = computerPoints
        statsBoard.innerHTML = `Computer is leading the User by ${computerPoints - userPoints}!!!`
    }
}

possibleChoices.forEach(
    possibleChoice => possibleChoice.addEventListener('click', () => {
        userChoice = possibleChoice.id 
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
        getLead()
    })
)