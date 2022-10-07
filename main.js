

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