let prev = document.getElementById('prev')
let next = document.getElementById('next')
let canvasContainer = document.getElementById('canvas-container');
let save = {
    redo_list: [],
    undo_list: [],
    saveState: function(){
        let save_point = canvas.toDataURL()
        this.undo_list.push(save_point)
    }
}
function undo(){

}
function redo(){

}
prev.addEventListener('click', function(){
    let restored_state = save.undo_list.pop()
    let image = document.createElement('img')
    image.src = restored_state;
    console.log(restored_state)
    image.onload = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(image,0,0,canvas.width,canvas.height)}
})
