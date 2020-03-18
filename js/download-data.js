'use strict';

(function () {
  window.downloadData = function (url, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    var errorMessage = '';
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          successHandler(xhr.response);
          break;
        case 400:
          errorMessage = 'неверный запрос ' + xhr.status;
          break;
        case 401:
          errorMessage = 'пользователь не авторизован ' + xhr.status;
          break;
        case 404:
          errorMessage = 'ничего не найдено ' + xhr.status;
          break;
        case 500:
          errorMessage = 'внутренняя ошибка сервера ' + xhr.status;
          break;
        case 503:
          errorMessage = 'сервис недоступен ' + xhr.status;
          break;
        default: errorMessage = 'Cтатус ответа:  ' + xhr.status + ' ' + xhr.statusText;
      }

      if (errorMessage) {
        errorHandler(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  };
})();
