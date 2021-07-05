let clear = document.getElementById("clear-canvasPenbar");
let cleardef = document.querySelector('#clear-canvasDefbar');

clear.addEventListener("click", () => {
    save.saveUndoState();
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
})
cleardef.addEventListener("click", () => {
    save.saveUndoState();
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
})
