let clear = document.getElementById("clear-canvasPenbar");
let cleardef = document.querySelector('#clear-canvasDefbar');

function clearCanvas(){
    save.saveUndoState();
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath()
}

clear.addEventListener("click", clearCanvas)
cleardef.addEventListener("click", clearCanvas)
