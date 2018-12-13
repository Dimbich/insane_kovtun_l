function moveToModule() {

  let modules = document.querySelectorAll('.showup__content-slider .card');

  modules.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let href = item.getAttribute('href');
      window.location.href = 'modules.html' + href;
    });
  });
}

module.exports = moveToModule;