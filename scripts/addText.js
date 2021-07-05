"use strict"
let addTextToolButton = document.querySelector("#text")
let addTextField = document.querySelector("#addTextField")
let addTextButton = document.querySelector("#addTextButton")
let addTextPopUP = document.querySelector(".add-text-popup")

addTextButton.addEventListener("click", addTextToCanvas)
addTextToolButton.addEventListener("click", ()=>{
    addTextPopUP.style.display = "flex"
    addTextField.value = ""
})

let addTextVars = {
    textSize: 18,
    textColor: "#ffffff"
}

document.getElementById("text-color-picker")
    .addEventListener("input", (event)=>{
        console.log("input2")
        addTextVars.textColor = event.target.value
        addTextField.style.color = event.target.value
    })

document.getElementById("text-stroke-width")
    .addEventListener("input", (event)=>{
        console.log("input")
        addTextVars.textSize = event.target.value
        addTextField.style.fontSize = event.target.value + 'px'
    })

function addTextToCanvas(){
    let text = addTextField.value
    function addText(event) {
        save.saveUndoState();
        ctx.font = `${addTextVars.textSize}px 'serif'`;
        ctx.fillStyle = addTextVars.textColor
        ctx.fillText(text, event.clientX, event.clientY)
        canvas.removeEventListener("click", addText)
    }
    canvas.addEventListener("click", addText)
    addTextPopUP.style.display = "none"
}
