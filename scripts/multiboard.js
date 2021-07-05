let boardSection = document.querySelector('.multipage-thumbnails')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let add = document.getElementById('add')
let closeBtn = document.querySelector('.close-multipage')
let multipageBar = document.querySelector('.multipage-bar')

closeBtn.addEventListener("click", function() {
    multipageBar.classList.toggle('closed');
})

let currentIndex = 0;
let i = 0;
let boardStore = []
let boardTemplate = function(board, boardUndoList, boardRedoList) {
    return {
        board,
        boardUndoList,
        boardRedoList
    }
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
    } else {
        saveHistory();
        boardStore[currentIndex].board = canvas.toDataURL();
        currentIndex = boardStore.length
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        board = canvas.toDataURL()
        let currentBoard = boardTemplate(board, save.undo_list, save.redo_list)
        save.undo_list = []
        save.redo_list = []
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
            checkBoardRequest()
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
            checkBoardRequest()
        }
        loadHistory();
    }
    showPreview();
}

let requestedBoard = 0
let requestingBoard = false
function checkBoardRequest(){
    if (!requestingBoard)
        return
    if (currentIndex < requestedBoard)
        nextBoard()
    else if (currentIndex > requestedBoard)
        prevBoard()
    else
        requestingBoard = false
}

function showPreview() {
    let num = 0;
    boardSection.innerHTML = "";
    let prewiewIndex = 0
    for (let boardPreview of boardStore) {
        let thumbnail_group = document.createElement('div')
        let number = document.createElement('div')
        let thumbnail = document.createElement('div')
        let previewImg = document.createElement('img')

        thumbnail_group.classList.add('thumbnail-group')
        number.classList.add('number')
        thumbnail.classList.add('thumbnail')
        previewImg.classList.add('thumb-img')

        num += 1
        number.innerHTML = num

        previewImg.src = boardPreview.board;
        previewImg.style.backgroundColor = pencilBoxVars.backgroundColor;

        thumbnail.thumbIndex = prewiewIndex
        thumbnail.onclick = function (){
            requestingBoard = true
            requestedBoard = thumbnail.thumbIndex
            checkBoardRequest()
        }
        if(currentIndex === prewiewIndex){
            thumbnail.classList.add("selected")
        }

        thumbnail_group.appendChild(number)
        thumbnail_group.appendChild(thumbnail)
        thumbnail.appendChild(previewImg)
        boardSection.appendChild(thumbnail_group);
        prewiewIndex++
    }
}
add.addEventListener("click", addBoard)
prev.addEventListener("click", prevBoard)
next.addEventListener("click", nextBoard)
