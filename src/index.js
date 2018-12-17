window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let fullPageSlider = require('./parts/fullpage-slider'),
      videoButton = require('./parts/video-btn'),
      showDifference = require('./parts/difference'),
      autoplaySlider = require('./parts/slider'),
      form = require('./parts/form'),
      modulesVideo = require('./parts/modules-video'),
      tab = require('./parts/tab'),
      downloadBtn = require('./parts/download');

  fullPageSlider();
  videoButton();
  showDifference();
  autoplaySlider();
  form();
  modulesVideo();
  tab();
  downloadBtn();
});
