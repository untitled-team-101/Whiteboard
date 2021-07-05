let colorPickerPenOne = document.querySelector('#PenOne-color-picker')
let colorPickerPenTwo = document.querySelector('#PenTwo-color-picker')
let colorPickerShape = document.querySelector('#shape-color-picker');
let colorPickerBackground = document.querySelector('#bg-color-picker');

let selectedColor = '';
let selectedPen = null;
let color1 = 'green';
let color2 = 'red';
let color3 = 'black';
let color4 = '#333333';

colorPickerPenOne.addEventListener("input", drawPen);
colorPickerPenTwo.addEventListener("input", drawPen);
colorPickerShape.addEventListener('input',drawPen);
colorPickerBackground.addEventListener('input', Input);
colorPickerBackground.addEventListener('focus', saveImg);

function loadImg(){
    let backgroudImg = document.createElement('img');
    backgroudImg.src = prevBackgroundState;
    ctx.drawImage(backgroudImg, 0, 0, canvas.width, canvas.height);
}

let prevBackgroundState = canvas.toDataURL(); 

function saveImg() {
    prevBackgroundState = canvas.toDataURL();
}

function Input(){
    pencilBoxVars.backgroundColor = colorPickerBackground.value;
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
    loadImg()
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
