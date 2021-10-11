let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let onMouseDownEvent = null;
let onMouseUpEvent = null;
let onMouseMoveEvent = null;
let onMouseLeaveEvent = null;
let onMouseEnterEvent = null;
let painting = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function removeEvents(){
    canvas.removeEventListener('mousemove', onMouseMoveEvent);
    canvas.removeEventListener('mousedown', onMouseDownEvent);
    canvas.removeEventListener('mouseup', onMouseUpEvent);
    canvas.removeEventListener("mouseleave", onMouseLeaveEvent);
    canvas.removeEventListener("mouseenter", onMouseEnterEvent);
    onMouseDownEvent = null;
    onMouseUpEvent = null;
    onMouseMoveEvent = null;
    onMouseLeaveEvent = null;
    onMouseEnterEvent = null;
}

function addAllEvents(){
    canvas.addEventListener('mousemove', onMouseMoveEvent);
    canvas.addEventListener('mousedown', onMouseDownEvent);
    canvas.addEventListener('mouseup', onMouseUpEvent);
    canvas.addEventListener("mouseleave", onMouseLeaveEvent);
    canvas.addEventListener("mouseenter", onMouseEnterEvent);
}
