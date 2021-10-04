let clear = document.getElementById("clear-canvasPenbar");
let cleardef = document.querySelector('#clear-canvasDefbar');

function clearCanvas(){
    // Nothing to do, we already have a blank canvas
    if (save.getCurrentState() === save.initial_state) return;
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    save.saveState();
    ctx.beginPath()
}

clear.addEventListener("click", clearCanvas)
cleardef.addEventListener("click", clearCanvas)
