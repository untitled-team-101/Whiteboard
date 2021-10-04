"use strict"
let penBoxEle = document.querySelectorAll('.penbarEle');

let pencilBoxVars = {
    backgroundColor: '#333333',
    paintingColorOne: 'red',
    paintingColorTwo: 'blue',
    highlighterColor: '#00FF0004',
    painting: false,
    penWidth1: 10,
    penWidth2: 10,
    eraserWidth: 50
};
addPenOneEvents()
function addPenOneEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!pencilBoxVars.painting) return;
        ctx.lineWidth = pencilBoxVars.penWidth1;
        ctx.strokeStyle = pencilBoxVars.paintingColorOne;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        if (pencilBoxVars.painting) return;
        pencilBoxVars.painting = true;
        ctx.beginPath();
    }
    onMouseUpEvent = function() {
        if (!pencilBoxVars.painting) return;
        pencilBoxVars.painting = false;
        save.saveState();
    }
    addAllEvents();
}

function addPenTwoEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!pencilBoxVars.painting) return;
        ctx.lineWidth = pencilBoxVars.penWidth2;
        ctx.strokeStyle = pencilBoxVars.paintingColorTwo;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        pencilBoxVars.painting = true;
        ctx.beginPath();
    }
    onMouseUpEvent = function() {
        pencilBoxVars.painting = false;
        save.saveState();
    }
    addAllEvents();
}

function addHighlighterEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!pencilBoxVars.painting) return;
        ctx.lineWidth = 30;
        ctx.strokeStyle = 'greenyellow';
        ctx.lineCap = 'square';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        pencilBoxVars.painting = true;
        ctx.beginPath();
    }
    onMouseUpEvent = function() {
        pencilBoxVars.painting = false;
        save.saveState();
    }
    addAllEvents();
}


function addEraserEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!pencilBoxVars.painting) return;
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        pencilBoxVars.painting = true;
        ctx.beginPath();
        ctx.lineWidth = pencilBoxVars.eraserWidth;
        ctx.lineCap = 'round';
        ctx.globalCompositeOperation="destination-out";
    }
    onMouseUpEvent = function() {
        ctx.globalCompositeOperation="source-over";
        pencilBoxVars.painting = false;
        save.saveState();
    }
    addAllEvents();
}

for (let ele of penBoxEle) {
    ele.addEventListener('click', function() {
        if (ele.id === 'penOne') {
            addPenOneEvents();
        } else if (ele.id === 'penTwo') {
            addPenTwoEvents();
        } else if (ele.id === 'eraser') {
            addEraserEvents();
        } else if (ele.id === 'highlighter') {
            setActiveStatus(ele)
            addHighlighterEvents();
        }
    });
}
