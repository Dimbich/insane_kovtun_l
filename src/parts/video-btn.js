function videoButton() {
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let videoId = 'ZpCluchEflg';

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      width: '100%',
      height: '100%',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {}

  function onPlayerStateChange(event) {}


  let play = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay'),
      videoWrap = overlay.querySelector('.video'),
      close = overlay.querySelector('.close'),
      videoArr = document.querySelectorAll('.module__video'),
      activeVideo;

  play.forEach((item) => {
    let videoUrl = item.dataset.url;  

      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (!item.querySelector('.closed') || !item.querySelector('.attention')) {
          overlay.style.display = 'flex';
          videoWrap.style.display = 'block';
          player.cueVideoByUrl({mediaContentUrl:videoUrl});
          player.playVideo();
          activeVideo = item;
        }
      });
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    player.stopVideo();

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
      });
  });


  if (document.querySelector('.moduleapp')) {
    videoArr.forEach(function(item) {
      let video = item.querySelectorAll('.module__video-item'),
          active = video[0],
          activeBtn = active.querySelector('.play').innerHTML;

      let a = 0;
      for (let i = 0; i < video.length; i++) {
        if (a == i) {
          close.addEventListener('click', () => {
            if (video[i].querySelector('.play') == activeVideo && player.getPlayerState() === 0) {
              if (video[i + 1] !== undefined) {
                video[i + 1].classList.add('active');
                video[i + 1].querySelector('.play').innerHTML = activeBtn;
              }
            }
          }); // close
          a++;
        }
      } //end for

    }); // end ForEach
  }
  

  
}

module.exports = videoButton;