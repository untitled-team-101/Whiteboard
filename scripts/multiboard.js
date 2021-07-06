"use strict"
let boardSection = document.querySelector('.multipage-thumbnails')
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

