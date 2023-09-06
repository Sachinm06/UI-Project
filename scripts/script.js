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

  // -----------nav closing button

  var button = document.getElementById("toggleButton");
  var openIcon = button.querySelector(".open-icon");
  var closeIcon = button.querySelector(".close-icon");

  document.querySelector(".navbar-toggler").addEventListener("click", function () {
      if (closeIcon.style.display === "none") {
          openIcon.style.display = "none";
          closeIcon.style.display = "inline";
      } else {
          openIcon.style.display = "inline";
          closeIcon.style.display = "none";
      }
  });