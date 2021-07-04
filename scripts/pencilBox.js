"use strict"
let penBoxEle = document.querySelectorAll('.penBoxEle');

let pencilBoxVars = {
      backgroundColor : 'black'
    , paintingColorOne : 'red'
    , paintingColorTwo : 'blue'
    , highlighterColor : '#00FF0004'
    , painting : false
}



function addPenOneEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!pencilBoxVars.painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = pencilBoxVars.paintingColorOne;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        pencilBoxVars.painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
    }
    addAllEvents();
}
function addPenTwoEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!pencilBoxVars.painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = pencilBoxVars.paintingColorTwo;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        pencilBoxVars.painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
    }
    addAllEvents();
}

function addHighlighterEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!pencilBoxVars.painting) return;
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = "#ff0";
        ctx.fillRect(event.clientX-10, event.clientY-10, 20,20);
    }
    onMouseDownEvent = function (){
        pencilBoxVars.painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
    }
    addAllEvents();
}


function addEraserEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!pencilBoxVars.painting) return;
        ctx.lineWidth = 50;
        ctx.strokeStyle = pencilBoxVars.backgroundColor;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        pencilBoxVars.painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
    }
    addAllEvents();
}

for(let ele of penBoxEle) {
    ele.addEventListener('click', function () {
        console.log(ele.id)
        if(ele.id === 'penOne'){
            addPenOneEvents();
        }
        else if(ele.id === 'penTwo'){
            addPenTwoEvents();
        }
        else if(ele.id === 'eraser') {
            addEraserEvents();
        }
        else if(ele.id === 'highlighter'){
            addHighlighterEvents();
        }
    });
}
