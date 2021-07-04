let shapeLine = document.querySelector('#shape-line');
let shapeRect = document.querySelector('#shape-rect');
let shapeCircle = document.querySelector('#shape-circle');
let shapebar = document.querySelector('.shapebar');
let shapes = document.querySelector('#shapes');
let goBackShape = document.querySelector('#goBackShape');

shapes.addEventListener('click', function (){
    defbar.style.display = 'none';
    shapebar.style.display = 'flex';
})

goBackShape.addEventListener('click', function (){
    defbar.style.display = 'flex';
    shapebar.style.display = 'none';
})

