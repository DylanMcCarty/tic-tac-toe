let gameState = ['', '', '', '', '', '', '', '', '']

let indexNum = [{
    p : 0,
    playerLetter : null,
    player : 0,
    playerTurn : 0
}]

function startButton() {
    let btn = document.createElement('button')
    document.body.appendChild(btn)
    btn.textContent = 'Start Game'
    btn.id = 'startButton'
    btn.addEventListener('click', createGame)
}
startButton()

function checkWin() {
    indexNum[0].playerTurn++
    for (let i of winConditions) {
        if (gameState[i[0]] === 'X' && gameState[i[1]] === 'X' && gameState[i[2]] === 'X') {
            winGame()
            clearBoard()
        } 
        if (gameState[i[0]] === 'O' && gameState[i[1]] === 'O' && gameState[i[2]] === 'O') {
            winGame() 
            clearBoard()
        } 
    }
    if (indexNum[0].playerTurn === 9) {
        clearBoard()
        failGame()
    }   
}

function click() {
    let aud = new Audio('../click.mp3')
    aud.play()
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
    let btn = document.getElementById('startButton')
    if (btn) {btn.remove()}
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

function divEventListeners() {
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById(`div${i}`)
        div.addEventListener('click', gameTurn, {once : true})
    }
    resetGameBtn()
}

function gameTurn(e) {
    for (let i = 0; i < 9; i++) {
        if (e.target.id == `div${i}`) {
            indexNum[0].p = i
            let div = document.getElementById(`div${i}`)
            click()
            div.textContent = indexNum[0].playerLetter            
        }    
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
        if (div) {div.remove()}          
    }
}

function winGame() {
    let div = document.createElement('div')
    let hardtoname = document.getElementById('rowDiv')
    hardtoname.appendChild(div)
    div.id = 'winDiv'
    if (indexNum[0].player === 0) {
        div.textContent = 'Player X Won!!!'
    }
    if (indexNum[0].player === 1) {
        div.textContent = 'Player O Won!!!'
    }
}

function failGame() {
    let div2 = document.createElement('div')
    let hardtoname = document.getElementById('rowDiv')
    hardtoname.appendChild(div2)
    div2.id = 'loseDiv'
    div2.textContent = 'Game Over, Its a Tie!'
}

// function resetGameBtn() {
//     let resetbtn = document.createElement('button') 
//     resetbtn.id = 'resetbtn' 
//     resetbtn.textContent = 'Reset Game'
//     resetbtn.addEventListener('click', () => {
//         clearBoard()
//         createGame()
//     })
//     document.body.appendChild(resetbtn)
// }
