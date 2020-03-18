'use strict';

(function () {
  var picture = document.querySelector('#picture').content.querySelector('.picture');

  var generatePost = function (index, arr) {
    var post = picture.cloneNode(true);
    var postData = arr[index];
    var pictureImg = post.querySelector('.picture__img');
    pictureImg.src = postData.url;
    pictureImg.dataset.order = postData.order;
    post.querySelector('.picture__likes').textContent = postData.likes;
    post.querySelector('.picture__comments').textContent = postData.comments.length;

    post.addEventListener('click', function () {
      window.bigPicture.show(postData);
    });
    return post;
  };

  window.preview = {
    generatePost: generatePost
  };
})();
