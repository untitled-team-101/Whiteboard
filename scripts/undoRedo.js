let undoBtn = document.getElementById('undo')
let redoBtn = document.getElementById('redo')
let canvasContainer = document.getElementById('canvas-container');
let save = {
    initial_state: canvas.toDataURL(),
    state_history: [],
    current_offset: 0,
    saveState() {
        let save_point = canvas.toDataURL()
        // No need to push the state if it hasn't changed
        if (this.getCurrentState() === save_point) return;

        this.current_offset += 1
        // We have to erase the redo history after, since it has become outdated
        this.state_history = this.state_history.slice(0, this.current_offset)
        this.state_history.push(save_point)
    },
    getCurrentState() {
        return this.state_history[this.current_offset];
    },
    clearStateHistory() {
        this.state_history = [this.initial_state]
    }
}
save.state_history.push(save.initial_state) //We want a blank board as initial undo

function undo() {
    if (save.current_offset <= 0)
        window.alert("NOTHING TO UNDO YOU FOOL")
    else {
        save.current_offset -= 1
        const restored_state = save.getCurrentState()
        const image = document.createElement('img')
        image.src = restored_state;
        image.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    }
}

function redo() {
    // if current_offset == state_history.length, we are already at the latest state
    if (save.current_offset >= (save.state_history.length - 1))
        window.alert("NOTHING TO REDO YOU FOOL")
    else {
        save.current_offset += 1
        const restored_state = save.getCurrentState()
        const image = document.createElement('img')
        image.src = restored_state;
        image.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    }
}

undoBtn.addEventListener('click', undo)
redoBtn.addEventListener('click', redo)

window.addEventListener("keydown", (event) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0

    if (isMac) {
        if (event.code == 'KeyZ'
            && (event.ctrlKey || event.metaKey)
            && event.shiftKey
        ) {
            redo()
        } else if (event.code == 'KeyZ' && event.metaKey) {
            undo()
        }
    } else {
        if (event.code == 'KeyY' && event.ctrlKey) {
            redo()
        } else if (event.code == 'KeyZ' && event.ctrlKey) {
            undo()
        }
    }
})