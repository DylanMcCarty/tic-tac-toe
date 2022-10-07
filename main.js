let gameState = ['', '', '', '', '', '', '', '', '']

let indexNum = [{
    p : 0,
    playerLetter : null,
    player : 0,
    playerTurn : 0
}]

function checkWin() {
    indexNum[0].playerTurn++
    for (let i of winConditions) {
        if (gameState[i[0]] === 'X' && gameState[i[1]] === 'X' && gameState[i[2]] === 'X') {
            clearBoard()
            winGame()
        } 
        if (gameState[i[0]] === 'O' && gameState[i[1]] === 'O' && gameState[i[2]] === 'O') {
            clearBoard()
            winGame() 
        } 
    }
    if (indexNum[0].playerTurn === 9) {
        clearBoard()
        failGame()
    }   
}

function click() {
    if (indexNum[0].player === 0) {
        indexNum[0].playerLetter = 'X'
        gameState.splice([indexNum[0].p], 1, indexNum[0].playerLetter)
        if (!checkWin()) {
            indexNum[0].player++
        }
    } else if (indexNum[0].player === 1) {
        indexNum[0].playerLetter = 'O'
        gameState.splice([indexNum[0].p], 1, indexNum[0].playerLetter)
        console.log(gameState)
        if (!checkWin()) {
            indexNum[0].player-- 
        }
    }
}

function createGame() {
    let containerDiv = document.createElement('div')
    document.body.appendChild(containerDiv)
    containerDiv.classList.add('container')
    containerDiv.id = 'contDiv'
    let rowDiv = document.createElement('div')
    containerDiv.appendChild(rowDiv)
    rowDiv.classList.add('row', 'vh-100', 'position-relative')
    rowDiv.id = 'rowDiv'
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div')
        rowDiv.appendChild(div)
        div.id = `div${i}`
        div.classList.add('col-4', 'border', 'border-dark')
    }
    divEventListeners()
}
createGame()

function divEventListeners() {
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById(`div${i}`)
        div.addEventListener('click', gameTurn)
    }
}

let winConditions = [
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6]
]

function clearBoard() {
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById(`div${i}`) 
        div.remove()           
    }
}