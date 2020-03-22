'use strict';

(function () {
  var QUANTITY_RANDOM_POSTS = 10;
  var defaultFilterButton = document.querySelector('#filter-default');
  var randomFilterButton = document.querySelector('#filter-random');
  var discussedFilterButton = document.querySelector('#filter-discussed');
  var activeButton = defaultFilterButton;


  var setActive = function (el) {
    activeButton = el;
    activeButton.classList.add('img-filters__button--active');
  };

  var resetPicture = function () {
    var pictures = document.querySelectorAll('.picture');
    for (var i = 0; i < pictures.length; i++) {
      pictures[i].remove();
    }
    activeButton.classList.remove('img-filters__button--active');
  };

  var filterPanel = document.querySelector('.img-filters__form');

  filterPanel.addEventListener('click', function (evt) {
    var posts = window.gallery.posts;
    var postsOut;

    switch (evt.target) {
      case randomFilterButton:
        postsOut = [];
        var postsCopy = posts.slice();
        for (var i = 0; i < QUANTITY_RANDOM_POSTS; i++) {
          var randomIndex = window.utils.getRandomNumber(0, postsCopy.length - 1);
          postsOut.push(postsCopy[randomIndex]);
          postsCopy.splice(randomIndex, 1);
        }
        break;
      case discussedFilterButton:
        postsOut = posts.slice();

        postsOut.sort(function (a, b) {
          return b.comments.length - a.comments.length;
        });
        break;
      default: postsOut = posts;
    }

    resetPicture();
    setActive(evt.target);
    window.gallery.render(postsOut);
  });

})();
