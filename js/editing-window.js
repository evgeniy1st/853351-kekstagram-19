'use strict';

(function () {
  var form = document.querySelector('.img-upload__form');
  var uploadField = form.querySelector('#upload-file');
  var imageEditingWindow = form.querySelector('.img-upload__overlay');
  var imageEditingWindowCloseBtn = imageEditingWindow.querySelector('#upload-cancel');
  var effectLevel = form.querySelector('.img-upload__effect-level');
  var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
  var effectLevelValue = effectLevel.querySelector('.effect-level__value');
  var effectNone = document.querySelector('#effect-none');
  var imageEditingPreview = form.querySelector('.img-upload__preview img');
  var body = document.querySelector('body');
  var scaleControlInput = form.querySelector('.scale__control--value');

  var openImageEditingWindow = function () {
    imageEditingWindow.classList.remove('hidden');
    body.classList.add('modal-open');
    scaleControlInput.value = 100 + '%';

    document.addEventListener('keydown', onCloseImageEditingWindowEscPress);
  };

  var resetSlider = function () {
    effectLevelPin.style.left = effectLevelValue.value;
    effectLevelDepth.style.width = effectLevelValue.value;
  };

  var closeImageEditingWindow = function () {
    imageEditingWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    resetSlider();
    imageEditingPreview.style.filter = 'none';
    window.scaleTransform.reset();
    form.reset();

    document.removeEventListener('keydown', onCloseImageEditingWindowEscPress);
  };

  var onCloseImageEditingWindowEscPress = function (evt) {
    if (evt.key === window.utils.ESC_KEY && evt.target.type !== 'text' && evt.target.type !== 'textarea') {
      closeImageEditingWindow();
    }
  };

  uploadField.addEventListener('change', function () {
    openImageEditingWindow();

    if (effectNone.checked) {
      effectLevel.classList.add('hidden');
    }
  });

  imageEditingWindowCloseBtn.addEventListener('click', function () {
    closeImageEditingWindow();
  });

  imageEditingWindowCloseBtn.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      closeImageEditingWindow();
    }
  });
})();
