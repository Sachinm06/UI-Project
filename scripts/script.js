$(document).ready(function () {
    $('.slider-img').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        // fade:true,
        // fadeSpeed:1000
    })
})

// ------------search icon--------------

const imageElement = document.getElementById('toggleImage');
const inputBox = document.getElementById('inputBox');
const imageSrcArray = ["./image/search.png", "./image/search_close.jpg"];
let currentImageIndex = 0;

imageElement.addEventListener('click', () => {
    inputBox.classList.toggle('hidden');

    currentImageIndex = (currentImageIndex + 1) % imageSrcArray.length;
    imageElement.src = imageSrcArray[currentImageIndex];
});

// -------------voice search-------------

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    console.log(recognition);

    recognition.onresult = function (event) {
        speech = document.getElementById('speechToText').value = event.results[0][0].transcript;
        console.log(event.results);

    }
    recognition.start();
}