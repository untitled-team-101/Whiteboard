let colorPicker = document.querySelector('#background-color-picker')
let canvas = document.querySelector('#canvas')

colorPicker.addEventListener("input", color)
canvas.style.backgroundColor = colorPicker.value
let drawColor = colorPicker.value;

function color() {
    canvas.style.backgroundColor = colorPicker.value
    drawColor = colorPicker.value;
}