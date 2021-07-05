let shapebar = document.querySelector('.shapebar');
let shapes = document.querySelector('#shapes');
let goBackShape = document.querySelector('#goBackShapebar');
let clearShapebar = document.querySelector("#clear-canvasShapebar");


shapes.addEventListener('click', function (){
    defbar.style.display = 'none';
    shapebar.style.display = 'flex';
})

goBackShape.addEventListener('click', function (){
    defbar.style.display = 'flex';
    shapebar.style.display = 'none';
})
console.log(clearShapebar);

clearShapebar.addEventListener("click", function (){
    save.saveUndoState();
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
})
