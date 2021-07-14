"use strict"
let penBoxEle = document.querySelectorAll('.penbarEle');

let pencilBoxVars = {
    backgroundColor: '#333333',
    paintingColorOne: 'red',
    paintingColorTwo: 'blue',
    highlighterColor: 'yellow',
    penWidth1: 10,
    penWidth2: 10,
    eraserWidth: 50
};

addPenOneEvents()
function addPenOneEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!painting) return;
        ctx.lineWidth = pencilBoxVars.penWidth1;
        ctx.strokeStyle = pencilBoxVars.paintingColorOne;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        painting = true;
        ctx.beginPath();
        save.saveUndoState();
    }
    onMouseUpEvent = function() {
        painting = false;
    }
    onMouseLeaveEvent = onMouseUpEvent
    addAllEvents();
}

function addPenTwoEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!painting) return;
        ctx.lineWidth = pencilBoxVars.penWidth2;
        ctx.strokeStyle = pencilBoxVars.paintingColorTwo;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        painting = true;
        ctx.beginPath();
        save.saveUndoState();
    }
    onMouseUpEvent = function() {
        painting = false;
    }
    onMouseLeaveEvent = onMouseUpEvent
    addAllEvents();
}

function addHighlighterEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!painting) return;
        ctx.lineWidth = 30;
        ctx.strokeStyle = pencilBoxVars.highlighterColor;
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        painting = true;
        ctx.beginPath();
        save.saveUndoState();
        ctx.globalCompositeOperation="multiply";
    }
    onMouseUpEvent = function() {
        painting = false;
        ctx.globalCompositeOperation="source-over";
    }
    onMouseLeaveEvent = onMouseUpEvent
    addAllEvents();
}

function addEraserEvents() {
    removeEvents();
    onMouseMoveEvent = function(event) {
        if (!painting) return;
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function() {
        painting = true;
        save.saveUndoState();
        ctx.beginPath();
        ctx.lineWidth = pencilBoxVars.eraserWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalCompositeOperation="destination-out";
    }
    onMouseUpEvent = function() {
        ctx.globalCompositeOperation="source-over";
        painting = false;
    }
    onMouseLeaveEvent = onMouseUpEvent
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
