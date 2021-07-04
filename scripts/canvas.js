    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function startPosition() {
        painting = true;
        ctx.beginPath();
        save.saveUndoState();
        save.redoErase();
    }

    function finishedPosition() {
        painting = false;
    }

    function draw(event) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'blue';
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }

    function erase(event) {
        if (!painting) return;
        ctx.lineWidth = 30;
        ctx.strokeStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);