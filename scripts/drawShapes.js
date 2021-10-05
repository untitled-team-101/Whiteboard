"use strict"
let addShapeButtons = document.querySelectorAll(".shape")

let shapeDrawVars = {
    strokeColor: "green",
    strokeWidth: 3,
    startX: 0,
    startY: 0,
    prevCtx: null
}

function setLineStart(event) {
    painting = true
    shapeDrawVars.startX = event.clientX
    shapeDrawVars.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
    ctx.moveTo(event.clientX, event.clientY)
    ctx.lineTo(event.clientX, event.clientY)
    ctx.stroke()
}

function showCurrentLine(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = () => {
        // Ensure no extra drawing because of asynchronous onload
        if (!painting) return;
        drawLine(image, event)
    }
}

function drawLine(image, event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.moveTo(shapeDrawVars.startX, shapeDrawVars.startY)
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
}

function drawLineEnd(event) {
    if (!painting) return;
    // Make sure the final state is clean
    painting = false;
    const previous_state = save.getCurrentState()
    const image = document.createElement('img')
    image.src = previous_state;
    image.onload = () => {
        drawLine(image, event)
        save.saveState();
    }
}

function setRectStart(event) {
    painting = true
    shapeDrawVars.startX = event.clientX
    shapeDrawVars.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
    ctx.moveTo(event.clientX, event.clientY)
    ctx.rect(shapeDrawVars.startX, shapeDrawVars.startY, event.clientX - shapeDrawVars.startX, event.clientY - shapeDrawVars.startY)
    ctx.stroke()
}

function showCurrentRect(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = () => {
        // Ensure no extra drawing because of asynchronous onload
        if (!painting) return;
        drawRect(image, event)
    }
}

function drawRect(image, event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.moveTo(shapeDrawVars.startX, shapeDrawVars.startY)
    ctx.rect(shapeDrawVars.startX, shapeDrawVars.startY, event.clientX - shapeDrawVars.startX, event.clientY - shapeDrawVars.startY)
    ctx.stroke();
}

function drawRectEnd(event) {
    if (!painting) return;
    painting = false;
    // Make sure the final state is clean
    const previous_state = save.getCurrentState()
    const image = document.createElement('img')
    image.src = previous_state;
    image.onload = () => {
        drawRect(image, event);
        save.saveState();
    }
}

function setCircleStart(event) {
    painting = true
    shapeDrawVars.startX = event.clientX
    shapeDrawVars.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
    let radius = Math.sqrt(
        Math.pow(shapeDrawVars.startX - event.clientX, 2) +
        Math.pow(shapeDrawVars.startY - event.clientY, 2)
    )
    ctx.moveTo(length + shapeDrawVars.startX, shapeDrawVars.startY)
    ctx.arc(shapeDrawVars.startX, shapeDrawVars.startY, radius, 0, 2 * Math.PI)
    ctx.stroke()
}

function showCurrentCircle(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = () => {
        // Ensure no extra drawing because of asynchronous onload
        if (!painting) return;
        drawCircle(image, event)
    }
}

function drawCircle(image, event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    let radius = Math.sqrt(
        Math.pow(shapeDrawVars.startX - event.clientX, 2) +
        Math.pow(shapeDrawVars.startY - event.clientY, 2)
    )
    ctx.moveTo(radius + shapeDrawVars.startX, shapeDrawVars.startY)
    ctx.arc(shapeDrawVars.startX, shapeDrawVars.startY, radius, 0, 2 * Math.PI)
    ctx.stroke();
}


function drawCircleEnd(event) {
    if (!painting) return;
    painting = false;
    const previous_state = save.getCurrentState()
    const image = document.createElement('img')
    image.src = previous_state;
    image.onload = function() {
        drawCircle(image, event)
        save.saveState();
    }
}

function setTriangleStart(event) {
    painting = true
    shapeDrawVars.startX = event.clientX
    shapeDrawVars.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
}

function showCurrentTriangle(event) {
    if (!painting)
        return
    const image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = () => {
        // Ensure no extra drawing because of asynchronous onload
        if (!painting) return;
        drawTriangle(image, event)
    }
}

function drawTriangle(image, event){
    ctx.beginPath()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.moveTo((shapeDrawVars.startX + event.clientX) / 2, shapeDrawVars.startY)
    ctx.lineTo(event.clientX, event.clientY)
    ctx.lineTo(shapeDrawVars.startX, event.clientY)
    ctx.lineTo((shapeDrawVars.startX + event.clientX) / 2, shapeDrawVars.startY)
    ctx.stroke();
}

function drawTriangleEnd(event) {
    if (!painting) return;
    painting = false;
    const previous_state = save.getCurrentState()
    const image = document.createElement('img')
    image.src = previous_state;
    image.onload = () => {
        drawTriangle(image, event)
        save.saveState();
    }}

for (let addShapeButton of addShapeButtons) {
    addShapeButton.addEventListener("click", (event) => {
        removeEvents()
        if (addShapeButton.id === "shape-line") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setLineStart
            onMouseUpEvent = drawLineEnd
            onMouseMoveEvent = showCurrentLine
            onMouseLeaveEvent = drawLineEnd
        } else if (addShapeButton.id === "shape-rect") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setRectStart
            onMouseUpEvent = drawRectEnd
            onMouseMoveEvent = showCurrentRect
            onMouseLeaveEvent = drawRectEnd
        } else if (addShapeButton.id === "shape-circle") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setCircleStart
            onMouseUpEvent = drawCircleEnd
            onMouseMoveEvent = showCurrentCircle
            onMouseLeaveEvent = drawCircleEnd
        } else if (addShapeButton.id === "shape-triangle") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setTriangleStart
            onMouseUpEvent = drawTriangleEnd
            onMouseMoveEvent = showCurrentTriangle
            onMouseLeaveEvent = drawTriangleEnd
        }
        addAllEvents()
        selectedPen = 3;
        selectedColor = color3;
        colorPickerShape.value = selectedColor;
    })
}
