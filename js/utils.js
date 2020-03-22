'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;

  var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    ESC_KEY: 'Escape',
    ENTER_KEY: 'Enter',
    getRandomNumber: getRandomNumber,
    debounce: debounce
  };
})();
