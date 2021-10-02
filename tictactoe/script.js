const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById("restartButton")
const startGameButton = document.getElementById("startGameButton")
const startGameShow = document.getElementById('startGame')
const xWins = document.querySelector('[data-x]')
const oWins = document.querySelector('[data-o]')
const howToPlayButton = document.getElementById('howToPlayButton')
const closeButton = document.getElementById('closeButton')
const youtubeEmbed = document.getElementById('youtubeEmbed')
const wins = document.getElementById('wins')
const menuButton = document.getElementById('returnMenuButton')
const menu = document.getElementById('returnMenu')
const restartWins = document.getElementById("restartWinsButton")

let circleTurn

closeButton.addEventListener ('click', returnToMenu)

howToPlayButton.addEventListener('click', howToPlay)

startGameButton.addEventListener('click', startGameButtonCommands)

menuButton.addEventListener ('click', backToMenu)

restartWins.addEventListener ('click', resetWins)

function backToMenu(){
    menu.classList.remove('show')
    board.classList.remove('show')
    startGameShow.classList.add('show')
    wins.classList.remove ('show')

}

function resetWins(){
    numberXwins = 0
    numberOwins = 0
    oWins.innerText = 'O Wins: ' + numberOwins
    xWins.innerText = 'X Wins: ' + numberXwins
}

function startGameButtonCommands(){
    startGameShow.classList.remove('show')
    board.classList.add('show')
    startGame()
    wins.classList.add('show')
    menu.classList.add('show')
}

function howToPlay(){
    startGameShow.classList.remove('show')
    youtubeEmbed.classList.add('show')
    wins.classList.remove ('show')

}

function returnToMenu(){
    youtubeEmbed.classList.remove('show')
    startGameShow.classList.add('show')
}

restartButton.addEventListener ('click', startGame)

function startGame(){
cellElements.forEach(cell=>{
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {once:true})
})
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
    swapTurns()
    setBoardHoverClass()
    }
}
var numberOwins = 0
var numberXwins = 0
function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = 'Draw!'
        winningMessageElement.classList.add('show')
    }else{
        winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
        winningMessageElement.classList.add('show')
        if (circleTurn){
            numberOwins += 1;
            oWins.innerText = 'O Wins: ' + numberOwins
            swapTurns()
        }else{
            numberXwins += 1;
            xWins.innerText = 'X Wins: ' + numberXwins
            swapTurns()
        }
        
    }
    
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function isDraw(){
    return [...cellElements].every( cell =>{
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
    })
}
function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}
function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination =>{
        return combination.every(index=> {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}