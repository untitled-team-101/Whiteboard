"use strict"
let penBoxEle = document.querySelectorAll('.penbarEle');
const cursor = document.querySelector("#pen-cursor");

let pencilBoxVars = {
    backgroundColor: '#333333',
    paintingColorOne: 'red',
    paintingColorTwo: 'blue',
    highlighterColor: '#00FF0004',
    painting: false,
    penWidth1: 10,
    penWidth2: 10,
    highlighterWidth: 30,
    eraserWidth: 50
};
addPenOneEvents()
function addPenOneEvents() {
    removeEvents();
    onMouseMoveEvent = function (event) {
        updatePenCursorPosition(event);
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
    onclick = function (event) {
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, pencilBoxVars.penWidth1 / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = pencilBoxVars.paintingColorOne;
        ctx.fill();
    }
    onMouseLeaveEvent = function () {
        hidePenCursor();
    }
    onMouseEnterEvent = function (event) {
        setColorPenCursor(colorPickerPenOne.value);
        showPenCursor('painting');
    }
    addAllEvents();
}

function addPenTwoEvents() {
    removeEvents();
    onMouseMoveEvent = function (event) {
        updatePenCursorPosition(event);
        if (!pencilBoxVars.painting) return;
        ctx.lineWidth = pencilBoxVars.penWidth2;
        ctx.strokeStyle = pencilBoxVars.paintingColorTwo;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function () {
        pencilBoxVars.painting = true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
        save.saveState();
    }
    onclick = function (event) {
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, pencilBoxVars.penWidth2 / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = pencilBoxVars.paintingColorTwo;
        ctx.fill();
    }
    onMouseLeaveEvent = function () {
        hidePenCursor();
    }
    onMouseEnterEvent = function () {
        setColorPenCursor(colorPickerPenTwo.value);
        showPenCursor('painting');
    }
    addAllEvents();
}

function addHighlighterEvents() {
    removeEvents();
    onMouseMoveEvent = function (event) {
        updatePenCursorPosition(event);
        if (!pencilBoxVars.painting) return;
        ctx.lineWidth = pencilBoxVars.highlighterWidth;
        ctx.strokeStyle = 'greenyellow';
        ctx.lineCap = 'square';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function () {
        pencilBoxVars.painting = true;
        ctx.beginPath();
    }
    onMouseUpEvent = function () {
        pencilBoxVars.painting = false;
        save.saveState();
    }
    onclick = function (event) {
        ctx.beginPath();
        ctx.fillStyle = 'greenyellow';
        ctx.fillRect(event.clientX - pencilBoxVars.highlighterWidth / 2, event.clientY - pencilBoxVars.highlighterWidth / 2, pencilBoxVars.highlighterWidth, pencilBoxVars.highlighterWidth);
        ctx.fill();
    }
    onMouseLeaveEvent = function () {
        hidePenCursor();
    }
    onMouseEnterEvent = function () {
        setColorPenCursor('greenyellow');
        showPenCursor('painting');
    }
    addAllEvents();
}


function addEraserEvents() {
    removeEvents();
    onMouseMoveEvent = function (event) {
        updatePenCursorPosition(event);
        if (!pencilBoxVars.painting) return;
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    onMouseDownEvent = function () {
        pencilBoxVars.painting = true;
        ctx.beginPath();
        ctx.lineWidth = pencilBoxVars.eraserWidth;
        ctx.lineCap = 'round';
        ctx.globalCompositeOperation = "destination-out";
    }
    onMouseUpEvent = function () {
        ctx.globalCompositeOperation = "source-over";
        pencilBoxVars.painting = false;
        save.saveState();
    }
    onclick = function () {
        ctx.beginPath();
        ctx.lineWidth = pencilBoxVars.eraserWidth;
        ctx.lineCap = 'round';
    }
    onMouseLeaveEvent = function () {
        hidePenCursor();
    }
    onMouseEnterEvent = function () {
        setColorPenCursor();
        showPenCursor('eraser');
    }
    addAllEvents();
}

for (let ele of penBoxEle) {
    ele.addEventListener('click', function () {
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

function updatePenCursorPosition(event) {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
}

function showPenCursor(type) {
    cursor.classList.add('active', type);
    cursor.style.display = 'block';
    document.body.classList.toggle('pen-cursor');
}

function hidePenCursor() {
    cursor.classList.forEach(value => cursor.classList.remove(value));
    cursor.style.display = 'none';
    document.body.classList.toggle('pen-cursor');
}

function setColorPenCursor(color) {
    cursor.style.backgroundColor = color === undefined ? '#393e41' : color;
}