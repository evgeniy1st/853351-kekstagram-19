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

  window.gallery = {
    listOfCreatedPosts: listOfCreatedPosts
  };
})();
