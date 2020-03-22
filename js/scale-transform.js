'use strict';

(function () {
  var SCALE_STEP = 25;
  var MAX_SCALE = 100;
  var MIN_SCALE = 25;
  var DEFAULT_SCALE = 100;
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
    zoomImageEditingPreview(SCALE_STEP * -1);
  });

  scaleControlBigger.addEventListener('click', function () {
    zoomImageEditingPreview(SCALE_STEP);
  });

  var resetScale = function () {
    scaleControlInputValue = DEFAULT_SCALE;
    imageEditingPreview.style.transform = 'none';
  };

  window.scaleTransform = {
    reset: resetScale
  };
})();
