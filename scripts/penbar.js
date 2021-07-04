let penOne = document.querySelector('#penOne');
let penTwo = document.querySelector('#penTwo');
let highlighter = document.querySelector('#highlighter');

let penbar = document.querySelector('.penbar');
let strokebar = document.querySelector('.strokebar')
let goBackStroke = document.querySelector('#goBackStroke');


function letsGoBack(ele1,ele2) {
    goBackStroke.addEventListener('click', function (){
        ele1.style.display = 'flex';
        ele2.style.display = 'none';
    })
}

penOne.addEventListener('click', function (){
    penbar.style.display = 'none';
    strokebar.style.display = 'flex';
    letsGoBack(penbar,strokebar);
})

