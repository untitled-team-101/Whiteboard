const savePopup = document.getElementById("saveFilePopup");
const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");
const inputField = document.getElementById("fileName");
const downloadButton = document.getElementById("download");

function showSaveFilePopup(state) {
  if (state) {
    inputField.value = "my_board";
    savePopup.style.display = "flex";
  } else {
    savePopup.style.display = "none";
  }
}

cancelButton.addEventListener("click", () => {
  showSaveFilePopup(false);
});

saveButton.addEventListener("click", () => {
  // https://stackoverflow.com/a/50126796
  canvas = document.getElementById("canvas")
  const context = canvas.getContext('2d');
  context.save();
  context.globalCompositeOperation = 'destination-over';
  context.fillStyle = "#333333";
  context.fillRect(0, 0, canvas.width, canvas.height);


  const link = document.createElement("a");
  link.download = `${inputField.value}.png`;
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
  showSaveFilePopup(false);
  context.restore();

});

downloadButton.addEventListener("click", () => {
  showSaveFilePopup(true);
});