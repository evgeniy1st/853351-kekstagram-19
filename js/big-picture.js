'use strict';

(function () {
  var COMMENT_STEP = 5;
  var body = document.querySelector('body');
  var bigPictureContainer = document.querySelector('.big-picture');
  var btnCloseBigPicture = bigPictureContainer.querySelector('.big-picture__cancel');
  var commentsLoader = bigPictureContainer.querySelector('.comments-loader');
  var commentTemplate = document.querySelector('.social__comment');
  var fragment = document.createDocumentFragment();
  var commentsList = document.querySelector('.social__comments');
  var totalComments;
  var totalCommentsCopy;
  var count = 0;

  var createComment = function (commentData) {
    var comment = commentTemplate.cloneNode(true);
    var commentImg = comment.querySelector('.social__picture');

    commentImg.src = commentData.avatar;
    commentImg.alt = commentData.name;
    comment.querySelector('.social__text').textContent = commentData.message;

    return comment;
  };

  var showBigPicture = function (data) {
    count = 0;
    bigPictureContainer.querySelector('.big-picture__img img').src = data.url;
    bigPictureContainer.querySelector('.likes-count').textContent = data.likes;
    bigPictureContainer.querySelector('.social__caption').textContent = data.description;
    totalComments = data.comments;
    totalCommentsCopy = totalComments.slice();

    commentsList.innerHTML = '';

    body.classList.add('modal-open');
    bigPictureContainer.classList.remove('hidden');

    document.addEventListener('keydown', keydownHandler);

    commentsLoader.addEventListener('click', commentsClickHandler);

    commentsClickHandler(true);
  };

  var renderComments = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(createComment(arr[i]));
      count++;
    }
    commentsList.appendChild(fragment);

    toggleCommentsLoader(totalComments.length === count);
  };

  var cutComments = function (arr) {
    renderComments(arr.splice(0, COMMENT_STEP));
  };

  var commentsClickHandler = function () {
    cutComments(totalCommentsCopy);
    bigPictureContainer.querySelector('.social__comment-count').textContent = count + ' из ' + totalComments.length + ' комментариев';
  };

  var closeBigPicture = function () {
    bigPictureContainer.classList.add('hidden');
    body.classList.remove('modal-open');
    commentsLoader.removeEventListener('click', commentsClickHandler);

    document.removeEventListener('keydown', keydownHandler);
  };

  var keydownHandler = function (evt) {
    if (evt.key === window.utils.ESC_KEY && evt.target.type !== 'text') {
      closeBigPicture();
    }
  };

  var toggleCommentsLoader = function (isHidden) {
    commentsLoader.classList.toggle('hidden', isHidden);
  };

  btnCloseBigPicture.addEventListener('click', function () {
    closeBigPicture();
  });

  window.bigPicture = {
    show: showBigPicture
  };
})();
