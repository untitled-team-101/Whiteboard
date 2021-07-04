let prev = document.getElementById('prev')
let next = document.getElementById('next')
let canvasContainer = document.getElementById('canvas-container');
let save = {
    redo_list: [],
    undo_list: [],
    saveUndoState: function() {
        let save_point = canvas.toDataURL()
        this.undo_list.push(save_point)
    },
    saveRedoState: function() {
        let save_point = canvas.toDataURL()
        this.redo_list.push(save_point)
    },
    redoErase: function() {
        this.redo_list = []
    }
}

function undo() {
    if (save.undo_list.length === 0)
        window.alert("NOTHING TO UNDO YOU FOOL")
    else {
        save.saveRedoState();
        let restored_state = save.undo_list.pop()
        let image = document.createElement('img')
        image.src = restored_state;
        image.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    }
}

function redo() {
    if (save.redo_list.length === 0)
        window.alert("NOTHING TO REDO YOU FOOL")
    else {
        save.saveUndoState();
        let restored_state = save.redo_list.pop();
        let image = document.createElement('img')
        image.src = restored_state;
        image.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    }
}
prev.addEventListener('click', undo)
next.addEventListener('click', redo)