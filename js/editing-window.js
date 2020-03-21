'use strict';

(function () {
  var TIMEOUT = 10000;
  var DATA_URL = 'https://js.dump.academy/kekstagram';
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
  var main = document.querySelector('main');
  var successMessage = document.querySelector('#success').content.querySelector('.success');
  var closeSuccessButton = successMessage.querySelector('.success__button');
  var successInner = successMessage.querySelector('.success__inner');
  var errorMessage = document.querySelector('#error').content.querySelector('.error');
  var closeErrorButton = errorMessage.querySelector('.error__button');
  var errorInner = errorMessage.querySelector('.error__inner');

  var openImageEditingWindow = function () {
    imageEditingWindow.classList.remove('hidden');
    body.classList.add('modal-open');
    scaleControlInput.value = 100 + '%';

    document.addEventListener('keydown', keydownHandler);
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

    document.removeEventListener('keydown', keydownHandler);
  };

  var keydownHandler = function (evt) {
    if (evt.key === window.utils.ESC_KEY && evt.target.type !== 'text' && evt.target.type !== 'textarea') {
      closeImageEditingWindow();
    }
  };

  var closeResultMessage = function (el) {
    el.parentNode.removeChild(el);
    body.classList.remove('modal-open');
  };

  var successKeydownHandler = function (evt) {
    if (evt.key === window.utils.ESC_KEY) {
      closeResultMessage(successMessage);
      document.removeEventListener('keydown', successKeydownHandler);
    }
  };

  var successClickHandler = function (evt) {
    if (evt.target !== successInner || evt.target === closeSuccessButton) {
      closeResultMessage(successMessage);
      successMessage.removeEventListener('click', successClickHandler);
    }
  };

  var errorKeydownHandler = function (evt) {
    if (evt.key === window.utils.ESC_KEY) {
      closeResultMessage(errorMessage);
      document.removeEventListener('keydown', errorKeydownHandler);
    }
  };

  var errorClickHandler = function (evt) {
    if (evt.target !== errorInner || evt.target === closeErrorButton) {
      closeResultMessage(errorMessage);
      errorMessage.removeEventListener('click', errorClickHandler);
    }
  };

  var successHandler = function () {
    closeImageEditingWindow();
    main.appendChild(successMessage);
    body.classList.add('modal-open');
    document.addEventListener('keydown', successKeydownHandler);
    successMessage.addEventListener('click', successClickHandler);
  };

  var errorHandler = function () {
    closeImageEditingWindow();
    main.appendChild(errorMessage);
    body.classList.add('modal-open');
    document.addEventListener('keydown', errorKeydownHandler);
    errorMessage.addEventListener('click', errorClickHandler);
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

  form.addEventListener('submit', function (evt) {
    window.loadData(successHandler, errorHandler, DATA_URL, TIMEOUT, 'POST', new FormData(form));

    evt.preventDefault();
  });
})();
