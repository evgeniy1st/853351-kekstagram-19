'use strict';

var uploadField = document.querySelector('#upload-file');
var imageEditingWindow = document.querySelector('.img-upload__overlay');
var imageEditingWindowCloseBtn = imageEditingWindow.querySelector('#upload-cancel');
var effectLevel = document.querySelector('.img-upload__effect-level');
var effectLevelPin = effectLevel.querySelector('.effect-level__pin');
var effectLevelDepth = effectLevel.querySelector('.effect-level__depth');
var effectLevelValue = effectLevel.querySelector('.effect-level__value');
var effectNone = document.querySelector('#effect-none');
var imageEditingPreview = document.querySelector('.img-upload__preview img');
var body = document.querySelector('body');
var scaleControlInput = document.querySelector('.scale__control--value');

var openImageEditingWindow = function () {
  imageEditingWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleControlInput.value = 100 + '%';

  document.addEventListener('keydown', closeImageEditingWindowEscPress);
};

var resetSlider = function () {
  effectLevelValue.value = 0;
  effectLevelPin.style.left = effectLevelValue.value;
  effectLevelDepth.style.width = effectLevelValue.value;
};

var closeImageEditingWindow = function () {
  imageEditingWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadField.value = '';
  resetSlider();
  imageEditingPreview.style.filter = 'none';
  window.scaleFilter.reset();

  document.removeEventListener('keydown', closeImageEditingWindowEscPress);
};

var closeImageEditingWindowEscPress = function (evt) {
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
