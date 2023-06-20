let foc = document.querySelector('#lastname');

foc.addEventListener('focusout', addOutFocus);

function addOutFocus(){
    alert('merci de votre participation');
}