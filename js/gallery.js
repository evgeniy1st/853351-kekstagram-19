'use strict';

(function () {
  var listPosts = document.querySelector('.pictures');

  var errorHandler = function (message) {
    console.error(message);
  };

  var renderPosts = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(window.preview.generatePost(i, data));
    }
    listPosts.appendChild(fragment);
  };

  window.downloadData(' https://js.dump.academy/kekstagram/data', renderPosts, errorHandler);
})();
