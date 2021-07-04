let colorPickerPenOne = document.querySelector('#PenOne-color-picker')
let colorPickerPenTwo = document.querySelector('#PenTwo-color-picker')

let selectedColor = '';
let selectedPen = null;
let color1 = '#000';
let color2 = '#fff';

colorPickerPenOne.addEventListener("input", drawPen);
colorPickerPenTwo.addEventListener("input", drawPen);

function drawPen() {
    if(selectedPen === 1){
        color1 = colorPickerPenOne.value;
        selectedColor = color1;
        pencilBoxVars.paintingColorOne = selectedColor;
    }
    else {
        color2 = colorPickerPenTwo.value;
        selectedColor = color2;
        pencilBoxVars.paintingColorTwo = selectedColor;
    }
}