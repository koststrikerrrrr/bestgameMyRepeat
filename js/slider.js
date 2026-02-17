const wrapper = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__slide');
const prevBtn = document.querySelector('.slider__prev');
const nextBtn = document.querySelector('.slider__next');

let currentIndex = 0;
const slideCount = slides.length;

function updateSlider() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slideCount) {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slideCount - 1;
    }
    updateSlider();
});
