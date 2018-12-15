function autoplaySlider() {

  let slideWrap = document.querySelectorAll('.sliderWrap');

  slideWrap.forEach(function(item) {
    let sliderContainer = item.querySelector('.sliderContainer'),
        slides = item.querySelectorAll('.slideItem'),
        prev = item.querySelector('.slick-prev'),
        next = item.querySelector('.slick-next'),
        visible = +sliderContainer.dataset.count,
        slideIndex = [];

    for (let i = 0; i < visible; i++) {
      slideIndex.push(i);
    }

    sliderContainer.style.position = 'relative';
    slides.forEach((item) => {
      item.style.display = 'none';
      item.style.position = 'absolute';
    });

    function toggleClass(object, animation, display = null) {
      object.classList.add(animation);
      setTimeout(() => {
        if (display !== null) object.style.display = display;
        object.classList.remove(animation);
      }, 400);
    }
    

    function showSlides(n) {
      // clear card-active
      slides.forEach((item) => item.classList.remove('active'));
     
      // hide with animation
      if (slides[n[0] - 1] === undefined) {
        toggleClass(slides[slides.length - 1], 'fadeOutLeft', 'none');
      } else {
        toggleClass(slides[n[0] - 1], 'fadeOutLeft', 'none');
      }

      if (slides[n[n.length - 1] + 1] === undefined) {
        toggleClass(slides[0], 'fadeOutRight', 'none');
      } else {
        toggleClass(slides[n[n.length - 1] + 1], 'fadeOutRight', 'none');
      }

      // show 
      slides[n[0]].classList.add('active');
      let left = 0;
      for (let i = 0; i < n.length; i++) {
        let width = +getComputedStyle(slides[n[i]]).width.slice(0, -2),
            marginRight = +slides[n[i]].dataset.mr;

        slides[n[i]].style.display = 'block';
        slides[n[i]].style.left = left + 'px';
        left += Math.floor(width + marginRight);
      }  
    } // end showSlides

    // showAll
    showSlides(slideIndex);

    // infinite
    if (sliderContainer.hasAttribute('data-loop')) {
      let timerId = setTimeout(function run() {
        nextSlide(1);
        setTimeout(run, 4000);
      }, 4000);
    }

    // next-prev
    function nextSlide(n) {
      slideIndex = slideIndex.map((item) => item + n);

      // loop
      let a = 0, b = slides.length - 1;
      for (let i = 0; i < slideIndex.length; i++) {
        if (slideIndex[i] > slides.length - 1) {
          slideIndex[i] = a;
          a++;
        }

        if (slideIndex[i] < 0) {
          slideIndex[i] = b;
          b--;
        }
      }
      
      // animation
      if (n < 0) {
        toggleClass(slides[slideIndex[0]], 'fadeInLeft', 'block');
      } else {
        toggleClass(slides[slideIndex[slideIndex.length - 1]], 'fadeIn', 'block');
      }

      showSlides(slideIndex);
    } // end nextSlide

    next.addEventListener('click', function (e) {
      e.preventDefault();
      nextSlide(1);
    });

    prev.addEventListener('click', function (e) {
      e.preventDefault();
      nextSlide(-1);
    });
  });
}

module.exports = autoplaySlider;