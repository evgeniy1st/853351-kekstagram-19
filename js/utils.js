'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.utils = {
    ESC_KEY: 'Escape',
    ENTER_KEY: 'Enter',
    getRandomNumber: getRandomNumber
  };
})();
