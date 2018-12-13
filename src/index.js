window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let fullPageSlider = require('./parts/fullpage-slider'),
      videoButton = require('./parts/video-btn'),
      modulesSlider = require('./parts/modules-slider');

  fullPageSlider();
  videoButton();
  modulesSlider();
});
