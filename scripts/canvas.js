const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let onMouseDownEvent = null;
let onMouseUpEvent = null;
let onMouseMoveEvent = null;
let painting = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function removeEvents(){
    canvas.removeEventListener('mousemove', onMouseMoveEvent);
    canvas.removeEventListener('mousedown', onMouseDownEvent);
    canvas.removeEventListener('mouseup', onMouseUpEvent);
}

function addAllEvents(){
    canvas.addEventListener('mousemove', onMouseMoveEvent);
    canvas.addEventListener('mousedown', onMouseDownEvent);
    canvas.addEventListener('mouseup', onMouseUpEvent);
}

canvas.addEventListener("mouseleave", ()=>{
    painting = false
})
