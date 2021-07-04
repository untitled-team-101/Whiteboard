"use strict"

let penBoxEle = document.querySelectorAll('.penBoxEle');
let onMouseDownEvent = null;
let onMouseUpEvent = null;
let onMouseMoveEvent = null;
let backgroundColor = 'black';
let paintingColorOne = 'red';
let paintingColorTwo = 'blue';
let highlighterColor = '#00FF0004';
let painting = false;


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
