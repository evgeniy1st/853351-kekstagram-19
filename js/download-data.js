'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  var posts;
  var error;
  var errorHandler = function (message) {
    var errorMessage = document.createElement('div');
    errorMessage.textContent = message;
  };

  var successHandler = function (data) {
    posts = data;
    error = 0;
  };

  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    switch (xhr.status) {
      case 200:
        successHandler(xhr.response);
        break;
      case 400:
        error = 'неверный запрос ' + xhr.status;
        break;
      case 401:
        error = 'пользователь не авторизован ' + xhr.status;
        break;
      case 404:
        error = 'ничего не найдено ' + xhr.status;
        break;
      case 500:
        error = 'внутренняя ошибка сервера ' + xhr.status;
        break;
      case 503:
        error = 'сервис недоступен ' + xhr.status;
        break;
      default: error = 'Cтатус ответа:  ' + xhr.status + ' ' + xhr.statusText;
    }

    if (error) {
      errorHandler(error);
    }
  });

  xhr.open('GET', 'https://js.dump.academy/kekstagram/data');
  xhr.send();

  window.downloadData = {
    error: error,
    success: posts
  };
})();
