let gameState = ['', '', '', '', '', '', '', '', '']

// let btn1 = document.getElementById('btn1')
// btn1.addEventListener('click', incFunc())
// let btn2 = document.getElementById('btn2')
// btn2.addEventListener('click', incFunc)
// let btn3 = document.getElementById('btn3')
// btn3.addEventListener('click', incFunc)
// let btn4 = document.getElementById('btn4')
// btn4.addEventListener('click', incFunc)
// let btn5 = document.getElementById('btn5')
// btn5.addEventListener('click', incFunc)
// let btn6 = document.getElementById('btn6')
// btn6.addEventListener('click', incFunc)
// let btn7 = document.getElementById('btn7')
// btn7.addEventListener('click', incFunc)
// let btn8 = document.getElementById('btn8')
// btn8.addEventListener('click', incFunc)
// let btn9 = document.getElementById('btn9')
// btn9.addEventListener('click', incFunc)

// function incFunc(e) {
//     if (e.target.btn1) {
//         console.log('HELLO WORLD')
//     }
// }

let player = 0
let playerLetter = 'X'
// let tileSpace = {
//     p : 0
// }
let p = 0

function click() {
    console.log('hello world')
    if (player === 0) {
        gameState.splice([p], 1, playerLetter)
        console.log(gameState)
        player++
    } else if (player === 1) {
        let playerLetter = 'O'
        gameState.splice([p], 1, playerLetter)
        console.log(gameState)
        player--
    }
}