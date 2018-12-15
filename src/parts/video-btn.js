function videoButton() {
  let play = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay'),
      videoWrap = overlay.querySelector('.video'),
      video = overlay.querySelector('iframe'),
      close = overlay.querySelector('.close');

  play.forEach((item) => {
    let videoUrl = item.dataset.url;
    
    
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (!item.querySelector('.closed') || !item.querySelector('.attention')) {
          video.src = videoUrl;
          overlay.style.display = 'flex';
          videoWrap.style.display = 'block';
        }
      });
  });


  close.addEventListener('click', (e) => {
    e.preventDefault();

    let delay = (ms) => {
      return new Promise ((resolve, reject) => setTimeout(resolve, ms));
    };
    
    delay(0)
      .then(() => {
        videoWrap.classList.add('hide');
        return delay(0);
      })
      .then(() => {
        overlay.classList.add('hide');
        return delay(800);
      })
      .then(() => {
        videoWrap.style.display = 'none';
        overlay.style.display = 'none';
        videoWrap.classList.remove('hide');
        overlay.classList.remove('hide');
        video.src = 'none';
      });
  });
}

module.exports = videoButton;