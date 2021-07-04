"use strict"
let addShapeButtons = document.querySelectorAll(".shape")

let shapeDrawVars = {
    strokeColor: "red",
    strokeWidth: 10,
    line: {},
    rectangle: {},
    circle: {},
    prevCtx: null
}

function setLineStart(event){
    painting = true
    shapeDrawVars.line.startX = event.clientX
    shapeDrawVars.line.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
    ctx.moveTo(event.clientX, event.clientY)
    ctx.lineTo(event.clientX, event.clientY)
    ctx.stroke()
}

function showCurrentLine(event){
    if(!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = function(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
        ctx.moveTo(shapeDrawVars.line.startX, shapeDrawVars.line.startY)
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
}

function drawLine(event){
    if(!painting)
        return
    console.log("up")
    ctx.restore()
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    painting = false;
}

for(let addShapeButton of addShapeButtons){
    addShapeButton.addEventListener("click", (event)=>{
        console.log(addShapeButton.id)
        removeEvents()
        if(addShapeButton.id === "shape-line"){
            onMouseDownEvent = setLineStart
            onMouseUpEvent = drawLine
            onMouseMoveEvent =  showCurrentLine
            onMouseLeaveEvent = drawLine
        }
        else if(addShapeButton.id === "shape-line"){

        }
        addAllEvents()
    })
}
