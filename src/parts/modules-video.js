function modulesVideo() {

  let videoArr = document.querySelectorAll('.module__video');

  videoArr.forEach(function(item) {
    let video = item.querySelectorAll('.module__video-item'),
        active = video[0],
        activeBtn = active.querySelector('.play').innerHTML;

    let a = 0;
    for (let i = 0; i < video.length; i++) {
      if (a == i) {
        video[i].querySelector('.play').addEventListener('click', () => {
          if (video[i + 1] !== undefined) {
            video[i + 1].classList.add('active');
            setTimeout(() => video[i + 1].querySelector('.play').innerHTML = activeBtn, 1000);
          }
        });
        a++;
      }
    }
  });
}

module.exports = modulesVideo;