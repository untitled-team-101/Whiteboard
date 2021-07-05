let image = document.querySelector('#image');

image.addEventListener('click', function (){
    let fileInput = document.querySelector('#fileinput');
    fileInput.click();
})

let activeElements = []

function removeActiveStatus(){
    for(let activeElement of activeElements){
        activeElement.classList.remove("selectedTool")
    }
    activeElements = []
}
