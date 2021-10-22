let colorPickerPenOne = document.querySelector('#PenOne-color-picker')
let colorPickerPenTwo = document.querySelector('#PenTwo-color-picker')
let colorPickerShape = document.querySelector('#shape-color-picker');
let colorPickerBackground = document.querySelector('#bg-color-picker');

let selectedPen = null;
let color1 = '#00FF00';
let color2 = '#ff0000';
let color3 = '#000000';
let color4 = '#33ff00';
let selectedColor = color3;


colorPickerPenOne.addEventListener("input", drawPen);
colorPickerPenTwo.addEventListener("input", drawPen);
colorPickerShape.addEventListener('input',drawPen);
colorPickerBackground.addEventListener('input', setBackgroundColor);

function setBackgroundColor(){
    document.body.style.backgroundColor = colorPickerBackground.value
    const boards = document.querySelectorAll('.thumb-img')
    boards.forEach(function (board) {
        board.style.backgroundColor = colorPickerBackground.value
    });
}

function drawPen() {
    if(selectedPen === 1){
        color1 = colorPickerPenOne.value;
        selectedColor = color1;
        pencilBoxVars.paintingColorOne = selectedColor;
        for(let svgElement of document.querySelectorAll(".pen-svg-1-col")){
            svgElement.style.fill = selectedColor
        }
    }
    else if(selectedPen === 2) {
        color2 = colorPickerPenTwo.value;
        selectedColor = color2;
        pencilBoxVars.paintingColorTwo = selectedColor;
        for(let svgElement of document.querySelectorAll(".pen-svg-2-col")){
            svgElement.style.fill = selectedColor
        }
    }
    else if(selectedPen === 3) {
        color3 = colorPickerShape.value;
        selectedColor = color3;
        shapeDrawVars.strokeColor = selectedColor;
    }
}
