'use strict';

(function () {
  var START_SYMBOL = '#';
  var SEPARATOR = ' ';
  var MIN_LENGTH = 2;
  var MAX_LENGTH = 20;
  var MAX_QUANTITY = 5;
  var RULES = /^#[а-яА-ЯёЁa-zA-Z0-9]{1,19}$/;
  var stringHashtag = document.querySelector('.text__hashtags');

  var stringHashtagInputHandler = function () {
    var arrHashtags = stringHashtag.value.split(SEPARATOR);
    var message = '';

    if (arrHashtags[arrHashtags.length - 1] === '') {
      arrHashtags.length = arrHashtags.length - 1;
    }
    for (var i = 0; i < arrHashtags.length; i++) {
      var hashtag = arrHashtags[i].toLowerCase();

      if (!RULES.test(hashtag)) {
        message = 'хештег должен начинаться с ' + START_SYMBOL + ' и содержать только буквы или цифры. Длина ' + MIN_LENGTH + ' - ' + MAX_LENGTH + ' символов';
        break;
      } else {
        if (arrHashtags.slice(0, i).includes(hashtag)) {
          message = 'нельзя использовать одинаковые хештеги';
          break;
        } else {
          message = '';
        }
      }
    }

    if (arrHashtags.length > MAX_QUANTITY) {
      message = 'максимальное количество хештегов ' + MAX_QUANTITY;
    }

    stringHashtag.setCustomValidity(message);
  };

  stringHashtag.addEventListener('input', stringHashtagInputHandler);
})();
