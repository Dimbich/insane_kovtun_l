function fullPageSlider() {
  let screen = document.querySelectorAll('.screen'),
      next = document.querySelectorAll('a[class^="next"]'),
      prev = document.querySelectorAll('a[class^="prev"]'),
      toFirst = document.querySelectorAll('.to-first'),
      screenIndex = 1;

  let showScreen = (n) => {
    if (n > screen.length) screenIndex = 1;
    if (n < 1) screenIndex = screen.length;
    screen.forEach((item) => item.style.display = 'none');
    screen[screenIndex - 1].style.display = 'block';
    if (screen[screenIndex - 1].hasAttribute('id')) location.hash = screen[screenIndex - 1].getAttribute('id');
  };

  if (document.querySelector('.moduleapp') && window.location.hash) {
    screenIndex = +window.location.hash.slice(1);
  }

  showScreen(screenIndex);

  let nextScreen = (n) => showScreen(screenIndex += n);
  let currentScreen = (n) => showScreen(screenIndex = n);

  toFirst.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      currentScreen(1);
    });
  });

  next.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      nextScreen(1);
    });
  });

  prev.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      nextScreen(-1);
    });
  });
}

module.exports = fullPageSlider;