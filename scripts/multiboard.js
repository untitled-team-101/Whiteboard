let boardSection = document.getElementById('boards')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let add = document.getElementById('add')

let currentIndex = 0;

let boardStore = []
let boardTemplate = function(board, boardUndoList, boardRedoList) {
    let boardData = {
        board,
        boardUndoList,
        boardRedoList
    }
    return boardData
}

function loadHistory() {
    save.undo_list = boardStore[currentIndex].boardUndoList
    save.redo_list = boardStore[currentIndex].boardRedoList
}

function saveHistory() {
    boardStore[currentIndex].boardUndoList = save.undo_list
    boardStore[currentIndex].boardRedoList = save.redo_list
}

function addBoard() {
    if (currentIndex + 1 >= boardStore.length) {
        currentIndex += 1;
        let board = canvas.toDataURL()
        let currentBoard = boardTemplate(board, save.undo_list, save.redo_list)
        boardStore.push(currentBoard)
        save.undo_list = []
        save.redo_list = []
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        let img = document.createElement('img')
        img.src = board;
        img.height = "100"
        img.width = "100"
        img.style.backgroundColor = "red"
        boardSection.appendChild(img)
    } else {
        saveHistory();
        boardStore[currentIndex].board = canvas.toDataURL();
        currentIndex = boardStore.length
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        board = canvas.toDataURL()
        let currentBoard = boardTemplate(false, board, save.undo_list, save.redo_list)
        save.undo_list = []
        save.redo_list = []
        let img = document.createElement('img')
        img.src = board;
        img.height = "100"
        img.width = "100"
        img.style.backgroundColor = "red"
        boardSection.appendChild(img)
        boardStore.push(currentBoard)
    }
    showPreview()
}

function prevBoard() {
    if (currentIndex === 0) {
        window.alert("ANDHE PEECHE KOI BOARD NAHI HAI !!")
    } else {
        if (currentIndex === boardStore.length) {
            let temp = [save.undo_list, save.redo_list];
            addBoard()
            save.undo_list = temp[0]
            save.redo_list = temp[1]
            currentIndex -= 1
        } else {
            boardStore[currentIndex].board = canvas.toDataURL()
        }
        saveHistory();
        currentIndex -= 1
        let previousState = boardStore[currentIndex].board
        let currImg = document.createElement('img')
        currImg.src = previousState
        currImg.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(currImg, 0, 0)
        }
        loadHistory();
    }
    showPreview();
}

function nextBoard() {
    if (currentIndex >= boardStore.length - 1) {
        window.alert("ANDHE AAGE KOI BOARD NAHI HAI !!")
    } else {
        saveHistory();
        currentIndex += 1;
        boardStore[currentIndex - 1].board = canvas.toDataURL()
        let nextState = boardStore[currentIndex].board
        let currImg = document.createElement('img')
        currImg.src = nextState
        currImg.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(currImg, 0, 0)
        }
        loadHistory();
    }
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