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

  var showBigPicture = function (data) {
    var commentsList = document.querySelector('.social__comments');

    bigPictureContainer.querySelector('.big-picture__img img').src = data.url;
    bigPictureContainer.querySelector('.likes-count').textContent = data.likes;
    bigPictureContainer.querySelector('.comments-count').textContent = data.comments.length;
    bigPictureContainer.querySelector('.social__caption').textContent = data.description;

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.comments.length; i++) {
      fragment.appendChild(createComment(data, i));
    }
    commentsList.appendChild(fragment);

    bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');
    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    document.addEventListener('keydown', onCloseBigPictureEscPress);
  };

  var closeBigPicture = function () {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onCloseBigPictureEscPress);
  };

  var onCloseBigPictureEscPress = function (evt) {
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
