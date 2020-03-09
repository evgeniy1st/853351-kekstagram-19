'use strict';

(function () {
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevel = document.querySelector('.img-upload__effect-level');
  var effectLevelLine = effectLevel.querySelector('.effect-level__line');
  var effectLevelValue = document.querySelector('.effect-level__value');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var imageEditingPreview = document.querySelector('.img-upload__preview img');

  effectLevelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startX = evt.clientX;

    var onMouseMove = function (moveEvt) {
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


      imageEditingPreview.style.filter = window.filterSelection.effect();
    };

    var onMouseUp = function () {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
