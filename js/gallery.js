'use strict';

(function () {
  var listPosts = document.querySelector('.pictures');

  var errorHandler = function (message) {
    var errorNotification = document.createElement('div');

    errorNotification.textContent = message;
    errorNotification.setAttribute('style', 'background-color: red; font-size: 16px; display: flex; justify-content: center; align-items: center; width: 100%; color: #fff; padding: 10px 0;');
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
