"use strict"
let addShapeButtons = document.querySelectorAll(".shape")

let shapeDrawVars = {
    strokeColor: "green",
    strokeWidth: 3,
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
    save.saveUndoState();
}

function showCurrentLine(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        ctx.moveTo(shapeDrawVars.startX, shapeDrawVars.startY)
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
}

function drawLine(event) {
    painting = false;
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
    save.saveUndoState();
}

function showCurrentRect(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        ctx.moveTo(shapeDrawVars.startX, shapeDrawVars.startY)
        ctx.rect(shapeDrawVars.startX, shapeDrawVars.startY, event.clientX - shapeDrawVars.startX, event.clientY - shapeDrawVars.startY)
        ctx.stroke();
    }
}

function drawRect(event) {
    painting = false;
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
    save.saveUndoState();
}

function showCurrentCircle(event) {
    if (!painting)
        return
    ctx.beginPath()
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = function() {
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
}

function drawCircle(event) {
    painting = false;
}

function setTriangleStart(event) {
    painting = true
    shapeDrawVars.startX = event.clientX
    shapeDrawVars.startY = event.clientY
    shapeDrawVars.prevCtx = canvas.toDataURL()
    ctx.beginPath()
    ctx.lineWidth = shapeDrawVars.strokeWidth
    ctx.strokeStyle = shapeDrawVars.strokeColor
    save.saveUndoState();
}

function showCurrentTriangle(event) {
    if (!painting)
        return
    let image = document.createElement('img')
    image.src = shapeDrawVars.prevCtx;
    image.onload = function() {
        ctx.beginPath()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        let radius = Math.sqrt(
            Math.pow(shapeDrawVars.startX - event.clientX, 2) +
            Math.pow(shapeDrawVars.startY - event.clientY, 2)
        )
        ctx.moveTo((shapeDrawVars.startX + event.clientX) / 2, shapeDrawVars.startY)
        ctx.lineTo(event.clientX, event.clientY)
        ctx.lineTo(shapeDrawVars.startX, event.clientY)
        ctx.lineTo((shapeDrawVars.startX + event.clientX) / 2, shapeDrawVars.startY)
        ctx.stroke();
    }
}

function drawTriangle(event) {
    painting = false;
}

for (let addShapeButton of addShapeButtons) {
    addShapeButton.addEventListener("click", (event) => {
        removeEvents()
        if (addShapeButton.id === "shape-line") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setLineStart
            onMouseUpEvent = drawLine
            onMouseMoveEvent = showCurrentLine
            onMouseLeaveEvent = drawLine
        } else if (addShapeButton.id === "shape-rect") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setRectStart
            onMouseUpEvent = drawRect
            onMouseMoveEvent = showCurrentRect
            onMouseLeaveEvent = drawRect
        } else if (addShapeButton.id === "shape-circle") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setCircleStart
            onMouseUpEvent = drawCircle
            onMouseMoveEvent = showCurrentCircle
            onMouseLeaveEvent = drawCircle
        } else if (addShapeButton.id === "shape-triangle") {
            setActiveStatus(addShapeButton)
            onMouseDownEvent = setTriangleStart
            onMouseUpEvent = drawTriangle
            onMouseMoveEvent = showCurrentTriangle
            onMouseLeaveEvent = drawTriangle
        }
        addAllEvents()
        selectedPen = 3;
        selectedColor = color3;
        colorPickerShape.value = selectedColor;
    })
}
