let boardSection = document.querySelector(".multipage-thumbnails");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let add = document.getElementById("add");
let closeBtn = document.querySelector(".close-multipage");
let multipageBar = document.querySelector(".multipage-bar");

closeBtn.addEventListener("click", function () {
  multipageBar.classList.toggle("closed");
});

let currentBoardIndex = 0;
let boardStore = [];
let boardTemplate = function (board, boardUndoList, boardRedoList) {
  return {
    board,
    boardUndoList,
    boardRedoList,
  };
};

function initMultiBoardDrawer() {
  boardStore.push(boardTemplate(canvas.toDataURL(), [], []));
  createNewBoardAtTheEnd();
}

function loadCurrentBoardHistory() {
  save.undo_list = boardStore[currentBoardIndex].boardUndoList;
  save.redo_list = boardStore[currentBoardIndex].boardRedoList;
}

function saveCurrentBoard() {
  boardStore[currentBoardIndex].board = canvas.toDataURL();
  boardStore[currentBoardIndex].boardUndoList = save.undo_list;
  boardStore[currentBoardIndex].boardRedoList = save.redo_list;

  const selectedBoard = document.querySelector("div.thumbnail.selected");
  selectedBoard.children[0].src = boardStore[currentBoardIndex].board;
}

function addBoard() {
  saveCurrentBoard();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let newBoard = boardTemplate(canvas.toDataURL(), [], []);
  boardStore.push(newBoard);

  currentBoardIndex = boardStore.length - 1;

  createNewBoardAtTheEnd();

  loadCurrentBoardHistory();
}

function toggleSelectedBoard() {
  const selectedBoard = document.querySelector("div.thumbnail.selected");
  selectedBoard.classList.remove("selected");

  const newlySelectedBoard = document.querySelector(
    `div.multipage-thumbnails > div:nth-child(${currentBoardIndex + 1})`
  );
  newlySelectedBoard.children[1].classList.add("selected");
}

function selectBoard(boardIndex) {
  saveCurrentBoard();

  currentBoardIndex = boardIndex;

  toggleSelectedBoard();

  let boardContent = document.createElement("img");
  boardContent.src = boardStore[currentBoardIndex].board;

  boardContent.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(boardContent, 0, 0);
  };

  loadCurrentBoardHistory();
}

function createNewBoardAtTheEnd() {
 const selectedBoard = document.querySelector("div.thumbnail.selected");

  if (selectedBoard !== null) 
    selectedBoard.classList.remove("selected");
  
  const boardIndex = boardStore.length - 1;
  let boardPreview = boardStore[boardIndex];

  let thumbnail_group = document.createElement("div");
  let number = document.createElement("div");
  let thumbnail = document.createElement("div");
  let previewImg = document.createElement("img");

  thumbnail_group.classList.add("thumbnail-group");
  number.classList.add("number");
  thumbnail.classList.add("thumbnail");
  thumbnail.classList.add("selected");
  previewImg.classList.add("thumb-img");

  number.innerHTML = boardIndex + 1;

  previewImg.src = boardPreview.board;
  previewImg.style.backgroundColor = colorPickerBackground.value

  thumbnail.thumbIndex = boardIndex;

  thumbnail.onclick = function () {
    selectBoard(thumbnail.thumbIndex);
  };

  thumbnail_group.appendChild(number);
  thumbnail_group.appendChild(thumbnail);
  thumbnail.appendChild(previewImg);
  boardSection.appendChild(thumbnail_group);
}

add.addEventListener("click", addBoard);
initMultiBoardDrawer();