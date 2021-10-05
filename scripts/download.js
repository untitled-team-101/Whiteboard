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
  const link = document.createElement("a");
  link.download = `${inputField.value}.png`;
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
  showSaveFilePopup(false);
});

downloadButton.addEventListener("click", () => {
  showSaveFilePopup(true);
});