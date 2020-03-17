'use strict';

(function () {
  var listPosts = document.querySelector('.pictures');

  var renderPosts = function (quantity) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < quantity; i++) {
      fragment.appendChild(window.preview.generatePost(i));
    }
    listPosts.appendChild(fragment);
  };

  renderPosts(window.downloadData.success.length);
})();
