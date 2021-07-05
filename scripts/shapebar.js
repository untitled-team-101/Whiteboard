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

clearShapebar.addEventListener("click", clearCanvas)
