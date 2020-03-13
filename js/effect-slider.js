'use strict';

(function () {
  var effectLevel = document.querySelector('.img-upload__effect-level');
  var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  var effectLevelLine = effectLevel.querySelector('.effect-level__line');
  var effectLevelValue = effectLevel.querySelector('.effect-level__value');
  var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
  var imageEditingPreview = document.querySelector('.img-upload__preview img');

  effectLevelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startX = evt.clientX;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      var currentX = moveEvt.clientX;
      var shift = startX - currentX;
      startX = moveEvt.clientX;

      effectLevelPin.style.left = (effectLevelPin.offsetLeft - shift) + 'px';
      effectLevelValue.value = (effectLevelPin.offsetLeft - shift);

      if ((effectLevelPin.offsetLeft - shift) > effectLevelLine.offsetWidth) {
        effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
        effectLevelValue.value = effectLevelLine.offsetWidth;
      } else if ((effectLevelPin.offsetLeft - shift) < (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth)) {
        effectLevelPin.style.left = (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth) + 'px';
        effectLevelValue.value = (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth);
      }
      effectLevelDepth.style.width = effectLevelPin.style.left;


      imageEditingPreview.style.filter = window.filterSelector.effect();
    };

    var mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
