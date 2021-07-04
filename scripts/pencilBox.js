"use strict"
let penBoxEle = document.querySelectorAll('.penBoxEle');

let backgroundColor = 'black';
let paintingColorOne = 'red';
let paintingColorTwo = 'blue';
let highlighterColor = '#00FF0004';

function addPenOneEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = paintingColorOne;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        painting = false;
    }
    addAllEvents();
}
function addPenTwoEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = paintingColorTwo;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        painting = false;
    }
    addAllEvents();
}

function addHighlighterEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!painting) return;
        ctx.lineWidth = 20;
        ctx.strokeStyle = highlighterColor;
        ctx.lineCap = 'square';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        painting = false;
    }
    addAllEvents();
}


function addEraserEvents(){
    removeEvents();
    onMouseMoveEvent = function (event){
        if(!painting) return;
        ctx.lineWidth = 50;
        ctx.strokeStyle = backgroundColor;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function (){
        painting=true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        painting = false;
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
