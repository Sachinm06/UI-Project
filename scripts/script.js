$(document).ready(function(){
    $('.slider-img').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1500,
        // fade:true,
        // fadeSpeed:1000
    })
})

// function toggleNavbarBackground() {
//     var navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('bg-white');
// }

// ------------search icon--------------

const imageElement = document.getElementById('toggleImage');
const inputBox = document.getElementById('inputBox');
const imageSrcArray = ["./image/search.png", "./image/search_close.jpg"]; // Add more image URLs if needed
let currentImageIndex = 0;

imageElement.addEventListener('click', () => {
    inputBox.classList.toggle('hidden');

    currentImageIndex = (currentImageIndex + 1) % imageSrcArray.length;
    imageElement.src = imageSrcArray[currentImageIndex];
});