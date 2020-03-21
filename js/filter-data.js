'use strict';

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

var defaultFiltrat = function (data) {
  resetPicture();
  window.gallery.render(data);
};

var randomFiltrat = function (data) {
  resetPicture();

  var dataCopy = data.slice();
  var randomPosts = [];
  for (var i = 0; i < QUANTITY_RANDOM_POSTS; i++) {
    var randomIndex = window.utils.getRandomNumber(0, dataCopy.length - 1);
    randomPosts.push(dataCopy[randomIndex]);
    dataCopy.splice(randomIndex, 1);
  }

  window.gallery.render(randomPosts);
};

var discussedFiltrat = function (data) {
  resetPicture();

  var dataCopy = data.slice();

  dataCopy.sort(function (a, b) {
    return b.comments.length - a.comments.length;
  });

  window.gallery.render(dataCopy);
};

defaultFilterButton.addEventListener('click', window.debounce(function (evt) {
  var posts = window.gallery.posts;

  defaultFiltrat(posts);
  setActive(evt.target);
}));

randomFilterButton.addEventListener('click', window.debounce(function (evt) {
  var posts = window.gallery.posts;

  randomFiltrat(posts);
  setActive(evt.target);
}));

discussedFilterButton.addEventListener('click', window.debounce(function (evt) {
  var posts = window.gallery.posts;

  discussedFiltrat(posts);
  setActive(evt.target);
}));
