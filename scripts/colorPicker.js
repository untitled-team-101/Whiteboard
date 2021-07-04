let colorPicker = document.querySelector('#background-color-picker')

colorPicker.addEventListener("input", color)
let drawColor = colorPicker.value;

function color() {
    pencilBoxVars.paintingColorOne = colorPicker.value;
}