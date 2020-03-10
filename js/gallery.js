'use strict';

(function () {
  var picture = document.querySelector('#picture').content.querySelector('.picture');
  var listOfCreatedPosts = [];
  var listPosts = document.querySelector('.pictures');

  var generatePost = function (index) {
    var post = picture.cloneNode(true);
    var postData = window.data.getPostData(index);
    var pictureImg = post.querySelector('.picture__img');

    listOfCreatedPosts.push(postData);
    pictureImg.src = postData.url;
    pictureImg.dataset.order = postData.order;
    post.querySelector('.picture__likes').textContent = postData.likes;
    post.querySelector('.picture__comments').textContent = postData.comments.length;

    return post;
  };

  var renderPosts = function (quantity) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < quantity; i++) {
      fragment.appendChild(generatePost(i));
    }
    listPosts.appendChild(fragment);
  };

  renderPosts(window.data.TOTAL_QUANTITY);

  listPosts.addEventListener('click', function (evt) {
    var index = evt.target.dataset.order;
    if (index) {
      window.bigPicture.show(index);
    }
  });

  listPosts.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY && evt.target.classList.contains('picture')) {
      var index = evt.target.querySelector('.picture__img').dataset.order;
      window.bigPicture.show(index);
    }
  });

  window.gallery = {
    listOfCreatedPosts: listOfCreatedPosts
  };
})();
