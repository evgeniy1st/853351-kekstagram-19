'use strict';

(function () {
  var COMMENT_STEP = 5;
  var body = document.querySelector('body');
  var bigPictureContainer = document.querySelector('.big-picture');
  var btnCloseBigPicture = bigPictureContainer.querySelector('.big-picture__cancel');
  var commentsLoader = bigPictureContainer.querySelector('.comments-loader');
  var commentsList = document.querySelector('.social__comments');
  var commentTemplate = commentsList.querySelector('.social__comment');


  var createComment = function (commentData) {
    var comment = commentTemplate.cloneNode(true);
    var commentImg = comment.querySelector('.social__picture');


    commentImg.src = commentData.avatar;
    commentImg.alt = commentData.name;
    comment.querySelector('.social__text').textContent = commentData.message;

    return comment;
  };

  var showBigPicture = function (data) {
    commentsList.innerHTML = '';
    var totalComments = data.comments;
    var totalCommentsLength = totalComments.length;
    var totalCommentsCopy = totalComments.slice();
    var count = 0;
    var fragment = document.createDocumentFragment();

    bigPictureContainer.querySelector('.big-picture__img img').src = data.url;
    bigPictureContainer.querySelector('.likes-count').textContent = data.likes;
    bigPictureContainer.querySelector('.social__caption').textContent = data.description;

    var renderComments = function (arr) {
      for (var i = 0; i < arr.length; i++) {
        fragment.appendChild(createComment(totalComments[i]));
        count++;
      }
      commentsList.appendChild(fragment);
    };

    var cutComments = function (arr) {
      if (arr.length < COMMENT_STEP + 1) {
        commentsLoader.classList.add('hidden');
      }
      renderComments(arr.splice(0, COMMENT_STEP));
    };

    var commentsClickHandler = function () {
      cutComments(totalCommentsCopy);
      bigPictureContainer.querySelector('.social__comment-count').textContent = count + ' из ' + totalCommentsLength + ' комментариев';
    };

    var removeHandler = function () {
      if (bigPictureContainer.classList.contains('hidden')) {
        commentsLoader.removeEventListener('click', commentsClickHandler);
        window.removeEventListener('click', windowClickHandler);
        window.removeEventListener('keydown', windowKeydownHandler);
      }
    };

    var windowClickHandler = function () {
      removeHandler();
    };

    var windowKeydownHandler = function () {
      removeHandler();
    };

    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    document.addEventListener('keydown', keydownHandler);

    commentsLoader.addEventListener('click', commentsClickHandler);
    window.addEventListener('keydown', windowKeydownHandler);
    window.addEventListener('click', windowClickHandler);

    commentsClickHandler();
  };

  var closeBigPicture = function () {
    commentsLoader.classList.remove('hidden');
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
