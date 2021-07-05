let stroke1 = document.querySelector('#stroke1');
let stroke2 = document.querySelector('#stroke2');
let stroke3 = document.querySelector('#stroke3');

function increasePen1Width()
{
    pencilBoxVars.penWidth1 = stroke1.value;
}
function increasePen2Width()
{
    pencilBoxVars.penWidth2 = stroke2.value;
}
function increaseEraserWidth()
{
    pencilBoxVars.eraserWidth = stroke3.value;
}
stroke1.addEventListener("input", increasePen1Width);
stroke2.addEventListener("input", increasePen2Width);
stroke3.addEventListener("input",increaseEraserWidth)