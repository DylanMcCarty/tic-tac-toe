let gameState = ['', '', '', '', '', '', '', '', '']

let indexNum = [{
    p : 0,
    playerLetter : null,
    player : 0,
    playerTurn : 0
}]


function click() {
    // indexNum[0].playerTurn++
    if (indexNum[0].player === 0) {
        indexNum[0].playerLetter = 'X'
        gameState.splice([indexNum[0].p], 1, indexNum[0].playerLetter)
        console.log(gameState)
        // checkWin()
        if (!checkWin()) {
            indexNum[0].player++
        }
    } else if (indexNum[0].player === 1) {
        indexNum[0].playerLetter = 'O'
        gameState.splice([indexNum[0].p], 1, indexNum[0].playerLetter)
        console.log(gameState)
        // checkWin()
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