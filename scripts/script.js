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
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg-white');
}