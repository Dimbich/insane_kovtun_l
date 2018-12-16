function tab() {
  let tab = document.querySelectorAll('.module__info-show');

  tab.forEach(function(item) {
    let next = item.nextElementSibling,
        plus = item.querySelector('.plus');
    next.style.height = '0';

    plus.addEventListener('click', (e) => {
      if (next.classList.contains('open')) {
        next.style.height = '0';
        next.classList.remove('open');
      } else {
        next.style.height = next.scrollHeight + 'px';
        next.classList.add('open');
      }
    });
  });
  
}

module.exports = tab;