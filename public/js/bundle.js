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
      modulesSlider = __webpack_require__(/*! ./parts/modules-slider */ "./parts/modules-slider.js"),
      moveToModule = __webpack_require__(/*! ./parts/move-to-module */ "./parts/move-to-module.js"),
      showDifference = __webpack_require__(/*! ./parts/difference */ "./parts/difference.js");

  fullPageSlider();
  videoButton();
  modulesSlider();
  moveToModule();
  showDifference();
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

/***/ "./parts/modules-slider.js":
/*!*********************************!*\
  !*** ./parts/modules-slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modulesSlider() {
  var slides = document.querySelectorAll('.showup__content-slider .card'),
      prev = document.querySelector('.showup__content-slider .slick-prev'),
      next = document.querySelector('.showup__content-slider .slick-next'),
      slideIndex = 1;

  var moveNext = function moveNext() {
    if (slideIndex == slides.length) return false;
    slides.forEach(function (item) {
      return item.classList.remove('card-active');
    });

    var _loop = function _loop(i) {
      if (i < slideIndex) {
        slides[i].classList.add('hidden');
        setTimeout(function () {
          return slides[i].style.display = 'none';
        }, 600);
      }

      if (i == slideIndex) slides[i].classList.add('card-active');
    };

    for (var i = 0; i < slides.length; i++) {
      _loop(i);
    }

    slideIndex < slides.length - 1 ? slideIndex++ : slideIndex = slides.length;
  };

  var movePrev = function movePrev() {
    if (slideIndex - 1 < 1) return false;
    slides.forEach(function (item) {
      return item.classList.remove('card-active');
    });

    for (var i = slides.length; i >= 0; i--) {
      if (i == slideIndex - 2) {
        slides[i].style.display = 'inline-block';
        slides[i].classList.remove('hidden');
        slides[i].classList.add('card-active');
      }
    }

    slideIndex > 1 ? slideIndex-- : slideIndex = 1;
  };

  if (prev && next) {
    next.addEventListener('click', function (e) {
      e.preventDefault();
      moveNext();
    });
    prev.addEventListener('click', function (e) {
      e.preventDefault();
      movePrev();
    });
  }
}

module.exports = modulesSlider;

/***/ }),

/***/ "./parts/move-to-module.js":
/*!*********************************!*\
  !*** ./parts/move-to-module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function moveToModule() {
  var modules = document.querySelectorAll('.showup__content-slider .card');
  modules.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var href = item.getAttribute('href');
      window.location.href = 'modules.html' + href;
    });
  });
}

module.exports = moveToModule;

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