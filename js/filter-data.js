'use strict';

(function () {
  var QUANTITY_RANDOM_POSTS = 10;
  var filterPanel = document.querySelector('.img-filters__form');
  var defaultFilterButton = filterPanel.querySelector('#filter-default');
  var randomFilterButton = filterPanel.querySelector('#filter-random');
  var discussedFilterButton = filterPanel.querySelector('#filter-discussed');
  var activeButton = defaultFilterButton;


  var setActiveFilter = function (el) {
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

  filterPanel.addEventListener('click', window.utils.debounce(function (evt) {
    if (evt.target !== activeButton) {
      var posts = window.gallery.posts;
      var postsCopy = posts.slice();
      var filteredPosts;

      switch (evt.target) {
        case randomFilterButton:
          filteredPosts = [];
          for (var i = 0; i < QUANTITY_RANDOM_POSTS; i++) {
            var randomIndex = window.utils.getRandomNumber(0, postsCopy.length - 1);
            filteredPosts.push(postsCopy[randomIndex]);
            postsCopy.splice(randomIndex, 1);
          }
          break;
        case discussedFilterButton:
          filteredPosts = postsCopy;

          filteredPosts.sort(function (a, b) {
            return b.comments.length - a.comments.length;
          });
          break;
        default: filteredPosts = posts;
      }

      resetPicture();
      setActiveFilter(evt.target);
      window.gallery.render(filteredPosts);
    }
  }));

})();
