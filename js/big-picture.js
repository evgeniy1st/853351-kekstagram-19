'use strict';

(function () {
  var COMMENT_STEP = 5;
  var body = document.querySelector('body');
  var bigPictureContainer = document.querySelector('.big-picture');
  var btnCloseBigPicture = bigPictureContainer.querySelector('.big-picture__cancel');
  var commentsLoader = bigPictureContainer.querySelector('.comments-loader');


  var createComment = function (postData, commentIndex) {
    var comment = document.querySelector('.social__comment').cloneNode(true);
    var commentImg = comment.querySelector('.social__picture');


    commentImg.src = postData[commentIndex].avatar;
    commentImg.alt = postData[commentIndex].name;
    comment.querySelector('.social__text').textContent = postData[commentIndex].message;

    return comment;
  };

  var showBigPicture = function (data) {
    var commentsList = document.querySelector('.social__comments');
    var totalComments = data.comments;
    var totalCommentsLength = totalComments.length;
    var count = 0;
    var fragment = document.createDocumentFragment();

    bigPictureContainer.querySelector('.big-picture__img img').src = data.url;
    bigPictureContainer.querySelector('.likes-count').textContent = data.likes;
    bigPictureContainer.querySelector('.social__caption').textContent = data.description;

    var commentsClickHandler = function (first) {
      var step;
      if (totalCommentsLength - count - COMMENT_STEP >= 0) {
        step = COMMENT_STEP;
      } else {
        step = totalCommentsLength - count;
      }
      for (var i = count; i < count + step; i++) {
        fragment.appendChild(createComment(totalComments, i));
      }
      if (totalCommentsLength >= count + COMMENT_STEP) {
        count += COMMENT_STEP;
      } else {
        count = totalCommentsLength;
        commentsLoader.removeEventListener('click', commentsClickHandler);
      }
      bigPictureContainer.querySelector('.social__comment-count').textContent = count + ' из ' + totalCommentsLength + ' комментариев';
      if (first === true) {
        commentsList.innerHTML = '';
      }
      commentsList.appendChild(fragment);
    };


    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    document.addEventListener('keydown', keydownHandler);

    commentsLoader.addEventListener('click', commentsClickHandler);

    commentsClickHandler(true);
  };

  var closeBigPicture = function () {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', keydownHandler);
  };

  var keydownHandler = function (evt) {
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
