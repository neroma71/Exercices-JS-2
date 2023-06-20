let img = document.querySelector('img');

img.addEventListener('mouseenter', ()=>{
    img.setAttribute("src", "images/image1_2.jpg");
})
img.addEventListener('mouseleave', ()=>{
    img.setAttribute("src", "images/image1.jpg");
})