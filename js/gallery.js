'use strict';

(function () {
  var DATA_URL = 'https://js.dump.academy/kekstagram/data';
  var TIMEOUT = 10000;
  var listPosts = document.querySelector('.pictures');
  var imgFilters = document.querySelector('.img-filters');
  var inactiveFilterPanelClass = 'img-filters--inactive';

  var errorHandler = function (message) {
    var errorNotification = document.createElement('div');

    errorNotification.textContent = message;
    errorNotification.classList.add('error-visible');
    document.querySelector('body').insertAdjacentElement('afterbegin', errorNotification);
  };

  var successHandler = function (data) {
    window.gallery.posts = data;
    renderPosts(data);
  };

  var renderPosts = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(window.preview.generatePost(i, data));
    }
    listPosts.appendChild(fragment);
  };

  window.addEventListener('load', function () {
    if (imgFilters.classList.contains(inactiveFilterPanelClass)) {
      imgFilters.classList.remove(inactiveFilterPanelClass);
    }
  });

  window.loadData(successHandler, errorHandler, DATA_URL, TIMEOUT, 'GET');

  window.gallery = {
    render: renderPosts
  };
})();
