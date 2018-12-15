/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var fullPageSlider = __webpack_require__(/*! ./parts/fullpage-slider */ "./parts/fullpage-slider.js"),
      videoButton = __webpack_require__(/*! ./parts/video-btn */ "./parts/video-btn.js"),
      // modulesSlider = require('./parts/modules-slider'),
  // moveToModule = require('./parts/move-to-module'),
  showDifference = __webpack_require__(/*! ./parts/difference */ "./parts/difference.js"),
      autoplaySlider = __webpack_require__(/*! ./parts/slider */ "./parts/slider.js");

  fullPageSlider();
  videoButton(); // modulesSlider();
  // moveToModule();

  showDifference();
  autoplaySlider();
});

/***/ }),

/***/ "./parts/difference.js":
/*!*****************************!*\
  !*** ./parts/difference.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showDifference() {
  var differenceCard = document.querySelectorAll('.difference__info-cards .officer');
  differenceCard.forEach(function (item) {
    var plusWrap = item.querySelector('.officer__card-item--show'),
        plus = plusWrap.querySelector('.plus'),
        step = item.querySelectorAll('.officer__card-item'),
        stepIndex = 0;
    step.forEach(function (item) {
      return item.style.display = 'none';
    });
    plusWrap.style.display = 'flex';
    plus.addEventListener('click', function (e) {
      e.preventDefault();

      for (var i = 0; i < step.length; i++) {
        if (i == stepIndex) {
          step[i].style.display = 'flex';
          step[i].style.height = '83px';
          step[i].classList.add('show');
        }
      }

      stepIndex++;

      if (stepIndex + 1 == step.length) {
        plusWrap.classList.add('fadeOut');
        setTimeout(function () {
          return plusWrap.style.display = 'none';
        }, 600);
      }
    });
  });
}

module.exports = showDifference;

/***/ }),

/***/ "./parts/fullpage-slider.js":
/*!**********************************!*\
  !*** ./parts/fullpage-slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function fullPageSlider() {
  var screen = document.querySelectorAll('.screen'),
      next = document.querySelectorAll('a[class^="next"]'),
      prev = document.querySelectorAll('a[class^="prev"]'),
      toFirst = document.querySelectorAll('.to-first'),
      screenIndex = 1;

  var showScreen = function showScreen(n) {
    if (n > screen.length) screenIndex = 1;
    if (n < 1) screenIndex = screen.length;
    screen.forEach(function (item) {
      return item.style.display = 'none';
    });
    screen[screenIndex - 1].style.display = 'block';
    if (screen[screenIndex - 1].hasAttribute('id')) location.hash = screen[screenIndex - 1].getAttribute('id');
  };

  if (document.querySelector('.moduleapp') && window.location.hash) {
    screenIndex = +window.location.hash.slice(1);
  }

  showScreen(screenIndex);

  var nextScreen = function nextScreen(n) {
    return showScreen(screenIndex += n);
  };

  var currentScreen = function currentScreen(n) {
    return showScreen(screenIndex = n);
  };

  toFirst.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      currentScreen(1);
    });
  });
  next.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      nextScreen(1);
    });
  });
  prev.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      nextScreen(-1);
    });
  });
}

module.exports = fullPageSlider;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function autoplaySlider() {
  var slideWrap = document.querySelectorAll('.sliderWrap');
  slideWrap.forEach(function (item) {
    var sliderContainer = item.querySelector('.sliderContainer'),
        slides = item.querySelectorAll('.slideItem'),
        prev = item.querySelector('.slick-prev'),
        next = item.querySelector('.slick-next'),
        visible = +sliderContainer.dataset.count,
        slideIndex = [];

    for (var i = 0; i < visible; i++) {
      slideIndex.push(i);
    }

    sliderContainer.style.position = 'relative';
    slides.forEach(function (item) {
      item.style.display = 'none';
      item.style.position = 'absolute';
    });

    function toggleClass(object, animation) {
      var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      object.classList.add(animation);
      setTimeout(function () {
        if (display !== null) object.style.display = display;
        object.classList.remove(animation);
      }, 400);
    }

    function showSlides(n) {
      // clear card-active
      slides.forEach(function (item) {
        return item.classList.remove('active');
      }); // hide with animation

      if (slides[n[0] - 1] === undefined) {
        toggleClass(slides[slides.length - 1], 'fadeOutLeft', 'none');
      } else {
        toggleClass(slides[n[0] - 1], 'fadeOutLeft', 'none');
      }

      if (slides[n[n.length - 1] + 1] === undefined) {
        toggleClass(slides[0], 'fadeOutRight', 'none');
      } else {
        toggleClass(slides[n[n.length - 1] + 1], 'fadeOutRight', 'none');
      } // show 


      slides[n[0]].classList.add('active');
      var left = 0;

      for (var _i = 0; _i < n.length; _i++) {
        var width = +getComputedStyle(slides[n[_i]]).width.slice(0, -2),
            marginRight = +slides[n[_i]].dataset.mr;
        slides[n[_i]].style.display = 'block';
        slides[n[_i]].style.left = left + 'px';
        left += Math.floor(width + marginRight);
      }
    } // end showSlides
    // showAll


    showSlides(slideIndex); // infinite

    if (sliderContainer.hasAttribute('data-loop')) {
      var timerId = setTimeout(function run() {
        nextSlide(1);
        setTimeout(run, 4000);
      }, 4000);
    } // next-prev


    function nextSlide(n) {
      slideIndex = slideIndex.map(function (item) {
        return item + n;
      }); // loop

      var a = 0,
          b = slides.length - 1;

      for (var _i2 = 0; _i2 < slideIndex.length; _i2++) {
        if (slideIndex[_i2] > slides.length - 1) {
          slideIndex[_i2] = a;
          a++;
        }

        if (slideIndex[_i2] < 0) {
          slideIndex[_i2] = b;
          b--;
        }
      } // animation


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

/***/ }),

/***/ "./parts/video-btn.js":
/*!****************************!*\
  !*** ./parts/video-btn.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function videoButton() {
  var play = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay'),
      videoWrap = overlay.querySelector('.video'),
      video = overlay.querySelector('iframe'),
      close = overlay.querySelector('.close');
  play.forEach(function (item) {
    var videoUrl = item.dataset.url;
    item.addEventListener('click', function (e) {
      e.preventDefault();
      video.src = videoUrl;
      overlay.style.display = 'flex';
      videoWrap.style.display = 'block';
    });
  });
  close.addEventListener('click', function (e) {
    e.preventDefault();

    var delay = function delay(ms) {
      return new Promise(function (resolve, reject) {
        return setTimeout(resolve, ms);
      });
    };

    delay(0).then(function () {
      videoWrap.classList.add('hide');
      return delay(0);
    }).then(function () {
      overlay.classList.add('hide');
      return delay(800);
    }).then(function () {
      videoWrap.style.display = 'none';
      overlay.style.display = 'none';
      videoWrap.classList.remove('hide');
      overlay.classList.remove('hide');
      video.src = 'none';
    });
  });
}

module.exports = videoButton;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map