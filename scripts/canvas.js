const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

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


function selectPen(){
    for(let ele of penBoxEle) {
        ele.addEventListener('click', function () {
            console.log(ele.id)
            if(ele.id === 'penOne'){
                addPenOneEvents();
            }
            else if(ele.id === 'penTwo'){
                addPenTwoEvents();
            }
            else if(ele.id === 'eraser') {
                addEraserEvents();
            }
            else if(ele.id === 'highlighter'){
                addHighlighterEvents();
            }
        });
    }
}

selectPen();