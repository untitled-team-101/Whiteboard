function insertImage(event){
    if(event.target.files) {
        let file = event.target.files[0];
        let reader  = new FileReader();
        event.target.value = ""
        reader.onloadend = function (e) {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function(event) {
                console.log("loading");
                let lastImage = document.createElement('img')
                lastImage.src = canvas.toDataURL()
                lastImage.onload = ()=>{
                    let insertStatus = 1
                    let insertLocation = [0,0]
                    let showImage = function(e) {
                        let [x, y] = getLocation(canvas, e);
                        ctx.beginPath()
                        ctx.clearRect(0,0, canvas.width, canvas.height)
                        ctx.drawImage(lastImage,0,0);
                        ctx.drawImage(image,x,y);
                    }
                    let resizeImage = function(e) {
                        let [x, y] = getLocation(canvas, e);
                        ctx.beginPath()
                        ctx.clearRect(0,0, canvas.width, canvas.height)
                        ctx.drawImage(lastImage,0,0);
                        ctx.drawImage(image,insertLocation[0], insertLocation[1],x - insertLocation[0], y - insertLocation[1]);
                    }
                    const changeStatus = (event)=>{
                        console.log("in")
                        if (insertStatus === 1){
                            insertLocation = getLocation(canvas, event);
                            canvas.removeEventListener('mousemove', showImage)
                            canvas.addEventListener('mousemove', resizeImage)
                            insertStatus = 2
                        }
                        else {
                            console.log("else")
                            canvas.removeEventListener('mousemove', resizeImage)
                            canvas.removeEventListener('click', changeStatus)
                            let [x, y] = getLocation(canvas, event);
                            ctx.beginPath()
                            ctx.clearRect(0,0, canvas.width, canvas.height)
                            ctx.drawImage(lastImage,0,0);
                            ctx.drawImage(image,insertLocation[0], insertLocation[1],x - insertLocation[0], y - insertLocation[1]);
                            ctx.beginPath()
                        }
                    }
                    canvas.addEventListener('mousemove', showImage)
                    canvas.addEventListener('click', changeStatus)
                }
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
    return coords;
}

let fileInput = document.querySelector('#fileinput');
fileInput.addEventListener('input', insertImage);
