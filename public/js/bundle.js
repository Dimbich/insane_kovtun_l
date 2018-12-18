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
      showDifference = __webpack_require__(/*! ./parts/difference */ "./parts/difference.js"),
      autoplaySlider = __webpack_require__(/*! ./parts/slider */ "./parts/slider.js"),
      form = __webpack_require__(/*! ./parts/form */ "./parts/form.js"),
      // modulesVideo = require('./parts/modules-video'),
  tab = __webpack_require__(/*! ./parts/tab */ "./parts/tab.js"),
      downloadBtn = __webpack_require__(/*! ./parts/download */ "./parts/download.js");

  fullPageSlider();
  videoButton();
  showDifference();
  autoplaySlider();
  form(); // modulesVideo();

  tab();
  downloadBtn();
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

/***/ "./parts/download.js":
/*!***************************!*\
  !*** ./parts/download.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function downloadBtn() {
  HTMLElement.prototype.click = function () {
    var evt = this.ownerDocument.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    this.dispatchEvent(evt);
  };

  var downloadBtn = document.querySelectorAll('.download');
  downloadBtn.forEach(function (item) {
    var link = document.createElement('a');
    link.setAttribute('href', 'assets/WP-2014-2-Five-Steps-to-Planning-Success.pdf');
    link.setAttribute('download', 'fileName');
    item.addEventListener('click', function (e) {
      e.preventDefault();
      link.click();
    });
  });
}

module.exports = downloadBtn;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var form = document.querySelectorAll('form.form');
  form.forEach(function (item) {
    var message = {
      loading: 'Loading...',
      succsess: 'Thank you! We will contact you soon!',
      failure: 'Something goes wrong...'
    };
    var input = item.querySelectorAll('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    input.forEach(function (item) {
      var name = item.getAttribute('name');

      if (name == 'phone') {
        mask(item, '+1 (___) ___-____');
      }

      if (name == 'email') {
        validate(item, /^[a-zA-Z0-9 .\-@()]*?$/);
      }

      if (name == 'datetime') {
        // validate(item, /^[0-9 .\/]*?$/);
        mask(item, '__.__.____');
      }
    });
    item.addEventListener('submit', function (e) {
      e.preventDefault();
      this.appendChild(statusMessage);
      statusMessage.classList.remove('hidden');
      var formData = new FormData(this),
          obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(data);
        }); // Promise end
      } // postData end


      var clearInput = function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }; // clearInput end


      var clearMessage = function clearMessage() {
        setTimeout(function () {
          return statusMessage.classList.add('hidden');
        }, 3000);
        setTimeout(function () {
          return statusMessage.parentNode.removeChild(statusMessage);
        }, 4000);
      }; //clearMessage end


      postData(json).then(function () {
        statusMessage.style.backgroundColor = '#BEAB2A';
        statusMessage.innerHTML = message.loading;
      }).then(function () {
        statusMessage.style.backgroundColor = '#166D29';
        statusMessage.innerHTML = message.succsess;
      }).catch(function () {
        statusMessage.style.backgroundColor = 'red';
        statusMessage.innerHTML = message.failure;
      }).then(clearInput).then(clearMessage);
    }); // submin end
  }); // validate

  function validate(input, regex) {
    var value = input.value;
    input.addEventListener('input', function (e) {
      var newValue = e.target.value;

      if (!newValue.match(regex)) {
        input.value = value;
        return;
      }

      value = newValue;
    });
  } // end validate
  // mask


  function mask(input, regex) {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    } // end setCursorPosition


    function change(event) {
      var matrix = regex,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      });

      if (event.type == "blur") {
        if (this.value.length == 2) this.value = "";
      } else setCursorPosition(this.value.length, this);
    } // end Change


    input.addEventListener("input", change, false);
    input.addEventListener("focus", change, false);
    input.addEventListener("blur", change, false);
  } // end mask

}

module.exports = form;

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

    var toggleClass = function toggleClass(object, animation) {
      var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      object.classList.add(animation);
      setTimeout(function () {
        if (display !== null) object.style.display = display;
        object.classList.remove(animation);
      }, 400);
    };

    var showSlides = function showSlides(n) {
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
    }; // end showSlides
    // showAll


    showSlides(slideIndex); // next-prev

    var nextSlide = function nextSlide(n) {
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
    }; // end nextSlide


    next.addEventListener('click', function (e) {
      e.preventDefault();
      nextSlide(1);
    });
    prev.addEventListener('click', function (e) {
      e.preventDefault();
      nextSlide(-1);
    }); // infinite

    if (sliderContainer.hasAttribute('data-loop')) {
      var timerId = setTimeout(function run() {
        nextSlide(1);
        setTimeout(run, 4000);
      }, 4000);
    }
  });
}

module.exports = autoplaySlider;

/***/ }),

/***/ "./parts/tab.js":
/*!**********************!*\
  !*** ./parts/tab.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tab() {
  var tab = document.querySelectorAll('.module__info-show');
  tab.forEach(function (item) {
    var next = item.nextElementSibling,
        plus = item.querySelector('.plus');
    next.style.height = '0';
    plus.addEventListener('click', function (e) {
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

/***/ }),

/***/ "./parts/video-btn.js":
/*!****************************!*\
  !*** ./parts/video-btn.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function videoButton() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var videoId = 'ZpCluchEflg';

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
      width: '100%',
      height: '100%',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  function onPlayerReady(event) {}

  function onPlayerStateChange(event) {}

  var play = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay'),
      videoWrap = overlay.querySelector('.video'),
      close = overlay.querySelector('.close'),
      videoArr = document.querySelectorAll('.module__video'),
      activeVideo;
  play.forEach(function (item) {
    var videoUrl = item.dataset.url;
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (!item.querySelector('.closed') || !item.querySelector('.attention')) {
        overlay.style.display = 'flex';
        videoWrap.style.display = 'block';
        player.cueVideoByUrl({
          mediaContentUrl: videoUrl
        });
        player.playVideo();
        activeVideo = item;
      }
    });
  });
  close.addEventListener('click', function (e) {
    e.preventDefault();
    player.stopVideo();

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
    });
  });

  if (document.querySelector('.moduleapp')) {
    videoArr.forEach(function (item) {
      var video = item.querySelectorAll('.module__video-item'),
          active = video[0],
          activeBtn = active.querySelector('.play').innerHTML;
      var a = 0;

      var _loop = function _loop(i) {
        if (a == i) {
          close.addEventListener('click', function () {
            if (video[i].querySelector('.play') == activeVideo && player.getPlayerState() === 0) {
              if (video[i + 1] !== undefined) {
                video[i + 1].classList.add('active');
                video[i + 1].querySelector('.play').innerHTML = activeBtn;
              }
            }
          }); // close

          a++;
        }
      };

      for (var i = 0; i < video.length; i++) {
        _loop(i);
      } //end for

    }); // end ForEach
  }
}

module.exports = videoButton;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map