'use strict';

(function () {
  var SCALE_STEP_UP = 25;
  var SCALE_STEP_DOWN = -25;
  var MAX_SCALE = 100;
  var MIN_SCALE = 25;
  var scaleControlSmaller = document.querySelector('.scale__control--smaller');
  var scaleControlBigger = document.querySelector('.scale__control--bigger');
  var scaleControlInput = document.querySelector('.scale__control--value');
  var scaleControlInputValue = 100;
  var imageEditingPreview = document.querySelector('.img-upload__preview img');

  var zoomImageEditingPreview = function (step) {
    if (scaleControlInputValue + step >= MIN_SCALE && scaleControlInputValue + step <= MAX_SCALE) {
      scaleControlInputValue += parseInt(step, 10);
    }
    imageEditingPreview.style.transform = 'scale(' + (scaleControlInputValue / 100) + ')';
    scaleControlInput.value = scaleControlInputValue + '%';
  };

  scaleControlSmaller.addEventListener('click', function () {
    zoomImageEditingPreview(SCALE_STEP_DOWN);
  });

  scaleControlBigger.addEventListener('click', function () {
    zoomImageEditingPreview(SCALE_STEP_UP);
  });

  var resetScale = function () {
    scaleControlInputValue = 100;
    imageEditingPreview.style.transform = 'none';
  };

  window.scaleTransform = {
    reset: resetScale
  };
})();
