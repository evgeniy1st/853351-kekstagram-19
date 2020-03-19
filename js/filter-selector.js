'use strict';


(function () {
  var effectPanel = document.querySelector('.img-upload__effects');
  var effectNone = document.querySelector('#effect-none');
  var imageEditingPreview = document.querySelector('.img-upload__preview img');
  var effectList = document.querySelector('.effects__list');
  var currentFilter = 'effect-none';
  var currentEffect = '';
  var effectLevel = document.querySelector('.img-upload__effect-level');
  var effectLevelValue = effectLevel.querySelector('.effect-level__value');
  var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
  var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  var effectLevelLine = effectLevel.querySelector('.effect-level__line');

  var checkEffectNone = function () {
    effectLevel.classList.toggle('hidden', effectNone.checked);
  };

  var defaultValueEffect = function () {
    if (imageEditingPreview.classList.contains(currentEffect)) {
      imageEditingPreview.classList.remove(currentEffect);
    }
    imageEditingPreview.style.filter = '';

    switch (currentFilter) {
      case 'effect-chrome': currentEffect = 'effects__preview--chrome';
        break;
      case 'effect-sepia': currentEffect = 'effects__preview--sepia';
        break;
      case 'effect-marvin': currentEffect = 'effects__preview--marvin';
        break;
      case 'effect-phobos': currentEffect = 'effects__preview--phobos';
        break;
      case 'effect-heat': currentEffect = 'effects__preview--heat';
        break;
      default: currentEffect = 'effects__preview--none';
    }

    imageEditingPreview.classList.add(currentEffect);
    effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
    effectLevelDepth.style.width = effectLevelPin.style.left;
    effectLevelValue.value = effectLevelPin.style.left;
  };

  var checkEffect = function () {
    var effectValue = '';
    switch (currentFilter) {
      case 'effect-chrome': effectValue = 'grayscale(' + (1 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + ')';
        break;
      case 'effect-sepia': effectValue = 'sepia(' + (1 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + ')';
        break;
      case 'effect-marvin': effectValue = 'invert(' + (100 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + '%)';
        break;
      case 'effect-phobos': effectValue = 'blur(' + (3 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + 'px)';
        break;
      case 'effect-heat': effectValue = 'brightness(' + (2 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth + 1).toFixed(2) + ')';
        break;
      default: effectValue = 'none';
    }
    return effectValue;
  };

  effectPanel.addEventListener('click', function () {
    checkEffectNone();
  });


  effectList.addEventListener('change', function (evt) {
    currentFilter = evt.target.id;
    defaultValueEffect();
  });

  window.filterSelector = {
    effect: checkEffect
  };
})();
