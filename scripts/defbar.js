let pen = document.querySelector('#pen');
let defbar = document.querySelector('#defbar');
let goBackDef = document.querySelector('#goBackPenbar');

goBackDef.addEventListener('click',function (){
    penbar.style.display = 'none';
    defbar.style.display = 'flex';
})


pen.addEventListener('click',function (){
    penbar.style.display = 'flex';
    defbar.style.display = 'none';
})