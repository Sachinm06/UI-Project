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

function toggleNavbarBackground() {
    // Your code to toggle the background goes here
    // For example:
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg-white');
}