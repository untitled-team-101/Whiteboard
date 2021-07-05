let eraser = document.querySelector('#eraser');
let eraserbar = document.querySelector('.eraserbar');
let goBackEraser = document.querySelector('#goBackEraser');

eraser.addEventListener('click',function (){
    if (!eraser.classList.contains("selectedTool")){
        eraser.classList.add("selectedTool")
        removeActiveStatus()
        activeElements.push(eraser)
        return
    }
    penbar.style.display = 'none';
    eraserbar.style.display = 'flex'
    goBackEraser.addEventListener('click',function (){
        eraserbar.style.display = 'none'
        penbar.style.display = 'flex';
    })
})