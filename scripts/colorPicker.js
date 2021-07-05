let colorPickerPenOne = document.querySelector('#PenOne-color-picker')
let colorPickerPenTwo = document.querySelector('#PenTwo-color-picker')
let colorPickerShape = document.querySelector('#shape-color-picker');
let colorPickerBackground = document.querySelector('#bg-color-picker');

let selectedColor = '';
let selectedPen = null;
let color1 = 'blue';
let color2 = 'red';
let color3 = 'black';
let color4 = '#333333';

colorPickerPenOne.addEventListener("input", drawPen);
colorPickerPenTwo.addEventListener("input", drawPen);
colorPickerShape.addEventListener('input',drawPen);
colorPickerBackground.addEventListener('input', Input);

function Input(){
    pencilBoxVars.backgroundColor = colorPickerBackground.value;
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

function drawPen() {
    if(selectedPen === 1){
        color1 = colorPickerPenOne.value;
        selectedColor = color1;
        pencilBoxVars.paintingColorOne = selectedColor;
    }
    else if(selectedPen === 2) {
        color2 = colorPickerPenTwo.value;
        selectedColor = color2;
        pencilBoxVars.paintingColorTwo = selectedColor;
    }
    else if(selectedPen === 3) {
        color3 = colorPickerShape.value;
        selectedColor = color3;
        shapeDrawVars.strokeColor = selectedColor;
    }
}