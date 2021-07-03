window.addEventListener('load', ()=> {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    let start_background_color = "white";
    ctx.fillStyle = start_background_color;

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

    let clear = document.getElementById("clear-canvas")
    clear.addEventListener("click", () => {
        ctx.fillStyle = start_background_color;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillRect(0,0, canvas.width, canvas.height);

    })

    // function canvas_clear() {
    //     ctx.fillStyle = start_background_color;
    //     ctx.clearRect(0,0, canvas.width, canvas.height);
    //     ctx.fillRect(0,0, canvas.width, canvas.height);


    // }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
})