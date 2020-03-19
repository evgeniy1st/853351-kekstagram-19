'use strict';

(function () {
  var listPosts = document.querySelector('.pictures');

  var errorHandler = function (message) {
    var errorNotification = document.createElement('div');

    errorNotification.textContent = message;
    errorNotification.style.padding = '10px 0';
    errorNotification.style.backgroundColor = 'red';
    errorNotification.style.fontSize = 16 + 'px';
    errorNotification.style.display = 'flex';
    errorNotification.style.justifyContent = 'center';
    errorNotification.style.alignItems = 'center';
    errorNotification.style.width = 100 + '%';
    errorNotification.style.color = '#fff';
    document.querySelector('body').insertAdjacentElement('afterbegin', errorNotification);
  };

  var renderPosts = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(window.preview.generatePost(i, data));
    }
    listPosts.appendChild(fragment);
  };

  window.downloadData(renderPosts, errorHandler);
})();
