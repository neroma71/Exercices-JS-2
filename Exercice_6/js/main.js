let img = document.querySelectorAll('img');
let conatiner = document.querySelector('.container');

let sources = ['images/image1_2.jpg','images/image2_2.jpg','images/image3_2.jpg', 'images/image4_2.jpg', 'images/image5_2.jpg'];
let sources2 = ['images/image1.jpg','images/image2.jpg','images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

function chimg(){
    for(let i = 0; i < img.length; i++){
        img[i].setAttribute("src", sources[i]);
        console.log(img[i]);
    }  
}
function chimg2(){
    for(let i = 0; i < img.length; i++){
        img[i].setAttribute("src", sources2[i]);
        console.log(img[i]);
    }  
}

conatiner.addEventListener('mouseenter', chimg);
conatiner.addEventListener('mouseleave', chimg2);



