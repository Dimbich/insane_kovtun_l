window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let fullPageSlider = require('./parts/fullpage-slider'),
      videoButton = require('./parts/video-btn'),
      // modulesSlider = require('./parts/modules-slider'),
      // moveToModule = require('./parts/move-to-module'),
      showDifference = require('./parts/difference'),
      autoplaySlider = require('./parts/slider'),
      form = require('./parts/form');

  fullPageSlider();
  videoButton();
  // modulesSlider();
  // moveToModule();
  showDifference();
  autoplaySlider();
  form();
});
