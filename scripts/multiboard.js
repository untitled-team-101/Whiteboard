let boardSection = document.getElementById('boards')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let add = document.getElementById('add')

let boardId = 0
    // setInterval(currentBoard, 10)

// function currentBoard() {
//     let curr = canvas.toDataURL()
//     let currImg = document.createElement('img')
//     currImg.src = curr
//     boardSection.appendChild()
// }

console.log(canvas);
let boardStore = []
let boardTemplate = function(boardNum, boardState, board, boardUndoList, boardRedoList) {
    let boardData = {
        boardNum,
        boardState,
        board,
        boardUndoList,
        boardRedoList
    }
    return boardData
}

function addBoard() {
    boardId += 1
    let board = canvas.toDataURL()
    let currentBoard = boardTemplate(boardId, false, board, save.undo_list, save.redo_list)
    save.undo_list = []
    save.redo_list = []
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let img = document.createElement('img')
    img.src = board;
    img.height = "100"
    img.width = "100"
    img.style.backgroundColor = "red"
    boardSection.appendChild(img)
    boardStore.push(currentBoard)
    console.log(boardStore)
}
add.addEventListener("click", addBoard)