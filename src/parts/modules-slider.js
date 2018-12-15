function modulesSlider() {

  let slides = document.querySelectorAll('.showup__content-slider .card'),
      prev = document.querySelector('.showup__content-slider .slick-prev'),
      next = document.querySelector('.showup__content-slider .slick-next'),
      slideIndex = 1; 

  let moveNext = () => {
    if (slideIndex == slides.length) return false;
    slides.forEach((item) => item.classList.remove('card-active'));

    for (let i = 0; i < slides.length; i++) {
      if (i < slideIndex) {
        slides[i].classList.add('hidden');
        setTimeout(() => slides[i].style.display = 'none', 600);
      } 

      if (i == slideIndex) slides[i].classList.add('card-active');
    }
    
    (slideIndex < slides.length - 1) ? slideIndex++ : slideIndex = slides.length;
  };

  let movePrev = () => {
    if (slideIndex - 1 < 1) return false;
    slides.forEach((item) => item.classList.remove('card-active'));

    for (let i = slides.length; i >= 0; i--) {
      if (i == slideIndex - 2) {
        slides[i].style.display = 'inline-block';
        slides[i].classList.remove('hidden');
        slides[i].classList.add('card-active');
      } 
    }
    
    (slideIndex > 1) ? slideIndex-- : slideIndex = 1;
  };

  if (prev && next) {
    next.addEventListener('click', (e) => {
      e.preventDefault();
      moveNext();
    });

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      movePrev();
    });
  }
}

module.exports = modulesSlider;