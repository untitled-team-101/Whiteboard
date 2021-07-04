let boardSection = document.getElementById('boards')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let add = document.getElementById('add')

let currentIndex = 0;

let boardStore = []
let boardTemplate = function(boardState, board, boardUndoList, boardRedoList) {
    let boardData = {
        boardState,
        board,
        boardUndoList,
        boardRedoList
    }
    return boardData
}

let last = 0;

function addBoard() {

    currentIndex += 1;
    let board = canvas.toDataURL()
    let currentBoard = boardTemplate(false, board, save.undo_list, save.redo_list)
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
    console.log(currentIndex, boardStore.length);
    showPreview();
}

function prevBoard() {
    if (currentIndex === 0) {
        window.alert("ANDHE PEECHE KOI BOARD NAHI HAI !!")
    } else {
        if (currentIndex === boardStore.length) {
            addBoard()
            currentIndex -= 1
        } else {
            boardStore[currentIndex].board = canvas.toDataURL()
        }
        currentIndex -= 1
        let previousState = boardStore[currentIndex].board
        let currImg = document.createElement('img')
        currImg.src = previousState
        currImg.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(currImg, 0, 0)
        }
    }
    console.log(currentIndex, boardStore.length)
    showPreview();
}

function nextBoard() {
    if (currentIndex >= boardStore.length - 1) {
        window.alert("ANDHE AAGE KOI BOARD NAHI HAI !!")
    } else {
        currentIndex += 1;
        boardStore[currentIndex - 1].board = canvas.toDataURL()
        let nextState = boardStore[currentIndex].board
        let currImg = document.createElement('img')
        currImg.src = nextState
        currImg.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(currImg, 0, 0)
        }
    }
    console.log(currentIndex, boardStore.length)
    showPreview();
}

function showPreview() {
    boardSection.innerHTML = "";
    for (let boardPreview of boardStore) {
        let previewImg = document.createElement('img');
        previewImg.src = boardPreview.board;
        previewImg.height = "100";
        previewImg.width = "100";
        previewImg.style.backgroundColor = "yellow";
        boardSection.appendChild(previewImg);
    }
}

add.addEventListener("click", addBoard)
prev.addEventListener("click", prevBoard)
next.addEventListener("click", nextBoard)