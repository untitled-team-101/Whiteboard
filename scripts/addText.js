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

function addTextToCanvas(){
    let text = addTextField.value
    function addText(event) {
        ctx.font = "40px 'Montserrat'";
        ctx.fillText(text, event.clientX, event.clientY)
        canvas.removeEventListener("click", addText)
    }
    canvas.addEventListener("click", addText)
    addTextPopUP.style.display = "none"
}
