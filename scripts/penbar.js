let penOne = document.querySelector('#penOne');
let penTwo = document.querySelector('#penTwo');
let highlighter = document.querySelector('#highlighter');

let penbar = document.querySelector('.penbar');
let strokebarPenOne = document.querySelector('.strokebarPenOne');
let strokebarPenTwo = document.querySelector('.strokebarPenTwo');

let goBackStrokeOne = document.querySelector('#goBackStrokePenOnebar');
let goBackStrokeTwo = document.querySelector('#goBackStrokePenTwobar');

function letsGoBack(gobackk,ele1,ele2) {
    gobackk.addEventListener('click', function (){
        ele1.style.display = 'flex';
        ele2.style.display = 'none';
    })
}

penOne.addEventListener('click', function (){
    if (!penOne.classList.contains("selectedTool")){
        penOne.classList.add("selectedTool")
        removeActiveStatus();
        activeElements.push(penOne)
        return
    }
    selectedPen = 1
    selectedColor = color1;
    // colorPickerPenOne.value = selectedColor;
    penbar.style.display = 'none';
    strokebarPenOne.style.display = 'flex';
    letsGoBack(goBackStrokeOne,penbar,strokebarPenOne);
})

penTwo.addEventListener('click', function (){
    if (!penTwo.classList.contains("selectedTool")){
        penTwo.classList.add("selectedTool")
        removeActiveStatus()
        activeElements.push(penTwo)
        return
    }
    selectedPen = 2;
    selectedColor = color2;
    // colorPickerPenTwo.value = selectedColor;
    penbar.style.display = 'none';
    strokebarPenTwo.style.display = 'flex';
    letsGoBack(goBackStrokeTwo,penbar,strokebarPenTwo);
})
