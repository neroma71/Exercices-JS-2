let raz = document.querySelector('button');
let inpt = document.querySelectorAll('input');

raz.addEventListener('click', ()=>{
    for(let nput of inpt){
        nput.value = "";
    }
});