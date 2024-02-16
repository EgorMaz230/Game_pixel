window.onload = function () {
  window.scrollTo(0, 0);
};

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function showSlide(index) {
const newPosition = -index * 100 + '%';
slider.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
currentIndex = (currentIndex + 1) % sliderItems.length;
showSlide(currentIndex);
}

function prevSlide() {
currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
showSlide(currentIndex);
}