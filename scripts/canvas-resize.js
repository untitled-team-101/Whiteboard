"use strict"

let lastWindowWidth = window.innerWidth
let lastWindowHeight = window.innerHeight

const resizeCanvas = () => {
    if (window.innerHeight < lastWindowHeight ||
        window.innerWidth < lastWindowWidth)
        return

    lastWindowWidth = window.innerWidth
    lastWindowHeight = window.innerHeight

    let image = document.createElement("img")
    image.src = canvas.toDataURL()
    image.onload = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, image.width, image.height)
        console.log("resized")
    }
}

window.addEventListener("resize", resizeCanvas)
