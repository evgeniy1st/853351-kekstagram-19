'use strict';

(function () {
  var body = document.querySelector('body');
  var bigPictureContainer = document.querySelector('.big-picture');
  var btnCloseBigPicture = bigPictureContainer.querySelector('.big-picture__cancel');


  var createComment = function (postData, commentIndex) {
    var comment = document.querySelector('.social__comment').cloneNode(true);
    var commentImg = comment.querySelector('.social__picture');

    commentImg.src = postData.comments[commentIndex].avatar;
    commentImg.alt = postData.comments[commentIndex].name;
    comment.querySelector('.social__text').textContent = postData.comments[commentIndex].message;

    return comment;
  };

  var showBigPicture = function (index) {
    var commentsList = document.querySelector('.social__comments');

    var postData = window.gallery.listOfCreatedPosts[index];

    bigPictureContainer.querySelector('.big-picture__img img').src = postData.url;
    bigPictureContainer.querySelector('.likes-count').textContent = postData.likes;
    bigPictureContainer.querySelector('.comments-count').textContent = postData.comments.length;
    bigPictureContainer.querySelector('.social__caption').textContent = postData.description;

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < postData.comments.length; i++) {
      fragment.appendChild(createComment(postData, i));
    }
    commentsList.appendChild(fragment);

    bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    document.addEventListener('keydown', closeBigPictureEscPress);
  };

  var closeBigPicture = function () {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', closeBigPictureEscPress);
  };

  var closeBigPictureEscPress = function (evt) {
    if (evt.key === window.utils.ESC_KEY && evt.target.type !== 'text') {
      closeBigPicture();
    }
  };

  btnCloseBigPicture.addEventListener('click', function () {
    closeBigPicture();
  });

  window.bigPicture = {
    show: showBigPicture
  };
})();
