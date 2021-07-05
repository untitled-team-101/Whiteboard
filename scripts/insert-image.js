window.addEventListener('load', ()=> {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting =false;
    function startPosition(){
        painting=true;
        ctx.beginPath();
    }
    function finishedPosition(){
        painting=false;
    }
    function draw(event){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'blue';
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    function erase(event){
        if(!painting) return;
        ctx.lineWidth = 30;
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }

    function insertImage(event){
        
        if(event.target.files) {
            let file = event.target.files[0];
            let reader  = new FileReader();
            reader.onloadend = function (e) {
                let image = new Image();
                image.src = e.target.result;
                image.onload = function(event) {
                    console.log("loading");
                    let canvas = document.getElementById('canvas');
                    let ctx = canvas.getContext('2d');
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

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
})
