function insertImage(event){
    if(event.target.files) {
        let file = event.target.files[0];
        let reader  = new FileReader();
        reader.onloadend = function (e) {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function(event) {
                console.log("loading");
                let imgDrawListener = function(e) {
                    let [x, y] = getLocation(canvas, e);
                    ctx.drawImage(image,x,y);
                    canvas.removeEventListener('click', imgDrawListener);
                }
                canvas.addEventListener('click', imgDrawListener)
            }
        }
        reader.readAsDataURL(file);
        save.saveUndoState();
    }
}

function getLocation(canvas, event){
    const first = canvas.getBoundingClientRect();
    let coords = [0, 0];
    coords[0] = event.clientX - first.left;
    coords[1] = event.clientY - first.top;
    console.log(coords);
    return coords;
}

let fileInput = document.querySelector('#fileinput');
fileInput.addEventListener('change', insertImage);
