let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let onMouseDownEvent = null;
let onMouseUpEvent = null;
let onMouseMoveEvent = null;
let onMouseLeaveEvent = null;
let painting = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function removeEvents(){
    canvas.removeEventListener('mousemove', onMouseMoveEvent);
    canvas.removeEventListener('mousedown', onMouseDownEvent);
    canvas.removeEventListener('mouseup', onMouseUpEvent);
    canvas.removeEventListener("mouseleave", onMouseLeaveEvent);
}

function addAllEvents(){
    canvas.addEventListener('mousemove', onMouseMoveEvent);
    canvas.addEventListener('mousedown', onMouseDownEvent);
    canvas.addEventListener('mouseup', onMouseUpEvent);
    canvas.addEventListener("mouseleave", onMouseLeaveEvent);
}
