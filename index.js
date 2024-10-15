const slides = document.querySelectorAll('.display img');
let currentSlide = 0;
let playing = true;

// Add event listeners for controls
document.querySelector('.pause').addEventListener('click', () => {
  playing = false;
});

document.querySelector('.play').addEventListener('click', () => {
  playing = true;
  autoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  updateSlides();
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlides();
});

function autoSlide() {
  if (playing) {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    const translateX = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${translateX}%)`;
    setTimeout(autoSlide, 3000);
  }
}

autoSlide();
