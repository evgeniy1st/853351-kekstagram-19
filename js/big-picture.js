'use strict';

(function () {
  var body = document.querySelector('body');
  var listPosts = document.querySelector('.pictures');
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
    if (evt.key === window.keyCode.ESC_KEY && evt.target.type !== 'text') {
      closeBigPicture();
    }
  };

  btnCloseBigPicture.addEventListener('click', function () {
    closeBigPicture();
  });

  listPosts.addEventListener('click', function (evt) {
    var index = evt.target.dataset.order;
    if (index) {
      showBigPicture(index);
    }
  });

  listPosts.addEventListener('keydown', function (evt) {
    if (evt.key === window.keyCode.ENTER_KEY && evt.target.classList.contains('picture')) {
      var index = evt.target.querySelector('.picture__img').dataset.order;
      showBigPicture(index);
    }
  });
})();
