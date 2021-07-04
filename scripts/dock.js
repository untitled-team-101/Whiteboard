let toolbar=document.querySelector(".toolbar");
defbar();
let pen=document.querySelector(".pen");
let text=document.querySelector(".text");
let image=document.querySelector(".image");
let shapes=document.querySelector(".shapes");

function defbar() {
    toolbar.innerHTML="<div class=\"tool pen\">\n" +
        "            <i class=\"fas fa-pen\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool text\">\n" +
        "            <i class=\"fas fa-font\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool image\">\n" +
        "            <i class=\"fas fa-image\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool shapes\">\n" +
        "            <i class=\"far fa-shapes\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool undo\">\n" +
        "            <i class=\"fas fa-undo\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool redo\">\n" +
        "            <i class=\"fas fa-redo\"></i>\n" +
        "        </div>";
}
function penbar() {
    toolbar.innerHTML="<div class=\"tool pens\" id=\"pen1\">\n" +
        "            <i class=\"fas fa-pen\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool pens\" id=\"pen2\">\n" +
        "            <i class=\"fas fa-pen\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool highlighter\">\n" +
        "            <i class=\"fad fa-highlighter\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool eraser\">\n" +
        "            <i class=\"fas fa-eraser\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool undo\">\n" +
        "            <i class=\"fas fa-undo\"></i>\n" +
        "        </div>\n" +
        "        <div class=\"tool redo\">\n" +
        "            <i class=\"fas fa-redo\"></i>\n" +
        "        </div>";
}

console.log(pen);


pen.addEventListener("click",function () {

    penbar();
})