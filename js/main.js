'use strict';

var LIST_OF_URL_FOTOS = [];
var LIST_OF_DESCRIPTION = ['Pariatur est reprehenderit anim dolor proident irure. Consequat consequat nostrud aute duis aliquip laborum aliquip nisi incididunt irure minim nulla sunt ullamco. Magna ullamco commodo ad exercitation consectetur exercitation sint in voluptate do. Enim sit aliquip minim officia consectetur proident id. Exercitation ad ad officia nisi reprehenderit minim cillum excepteur aliqua. Non exercitation et nulla ullamco minim deserunt aute incididunt esse ad pariatur anim amet ut.', 'Ea nisi esse officia velit tempor nostrud. Mollit labore in enim sunt non sunt ullamco non excepteur in anim exercitation veniam. Ipsum mollit eiusmod ea esse commodo labore incididunt in ut duis nostrud nulla sunt ipsum. Irure exercitation dolor aliquip deserunt tempor amet commodo in. Commodo proident mollit aliquip reprehenderit do anim in aliquip cupidatat.', 'Adipisicing ut esse id ad Lorem voluptate magna aliqua occaecat. Sunt incididunt incididunt velit ut duis magna eiusmod mollit adipisicing nisi culpa culpa in. Et aliqua labore magna mollit consequat exercitation laborum et cupidatat laboris dolor irure Lorem minim. Lorem anim exercitation irure culpa ullamco dolor. Excepteur adipisicing esse officia nisi ullamco aliquip reprehenderit non non officia. Dolore ad in deserunt occaecat id magna cupidatat irure cillum enim ex nisi cillum pariatur.', 'Cillum sunt aliqua esse nulla. Mollit sit est et exercitation et nostrud commodo duis duis proident magna amet ea dolore. Consequat reprehenderit et enim anim exercitation id cillum. Fugiat aliqua esse Lorem sint. Sint eu proident qui officia mollit labore ea in velit fugiat Lorem non occaecat fugiat. Incididunt excepteur tempor occaecat laborum sint anim ipsum laboris irure cillum.', 'Adipisicing ipsum aute duis anim veniam culpa ullamco irure. Incididunt voluptate do eiusmod amet excepteur nulla pariatur est deserunt sunt labore. Laboris quis voluptate do laboris consectetur aliquip eu fugiat proident esse anim minim reprehenderit. Irure nostrud consequat ullamco consequat. In ut proident cillum magna non reprehenderit et qui elit id enim dolor.', 'Ex voluptate ullamco est quis nulla excepteur amet sint sit est est eu. Est incididunt consectetur commodo irure et velit sint pariatur tempor dolor enim minim quis ex. Tempor exercitation ad consequat qui commodo nisi proident cupidatat id. Aute sunt nulla sit ea dolor duis mollit adipisicing mollit pariatur culpa. Incididunt nisi ex et aute magna labore Lorem magna eiusmod ipsum.', 'Irure pariatur ullamco minim incididunt cillum officia Lorem irure nostrud elit nisi irure sunt. Magna Lorem adipisicing non pariatur consequat sunt velit consequat adipisicing exercitation ea eiusmod deserunt mollit. Amet labore mollit ullamco id est consequat occaecat quis proident amet deserunt dolor aliqua cillum. Voluptate occaecat culpa dolor ut commodo adipisicing qui eu ex pariatur id eiusmod excepteur eu. Ipsum sint elit ad officia. Velit fugiat nisi esse occaecat id minim mollit irure laboris nisi.', ' Eu ipsum esse consequat et do voluptate. Tempor ut ex cupidatat veniam eu consequat ut fugiat veniam non magna in. Id ipsum laborum dolor nulla cillum. Aliqua ut nulla qui culpa labore Lorem. Commodo consequat dolor sunt consequat aliquip fugiat.', 'Ea elit dolor ut ad. Ut veniam cillum nisi nisi aliquip excepteur do veniam nulla fugiat quis. Reprehenderit Lorem cupidatat enim eu officia reprehenderit sint quis commodo excepteur deserunt. Velit elit duis excepteur adipisicing culpa magna.', 'Ullamco est id do velit incididunt veniam amet aute laborum enim exercitation. Sunt adipisicing adipisicing irure cupidatat fugiat pariatur fugiat aliquip occaecat laboris. Fugiat officia sunt sunt velit pariatur ex laborum ea dolore eu adipisicing consectetur. Proident mollit culpa quis pariatur Lorem cillum commodo dolore amet eu. Officia cillum adipisicing aliqua officia ex occaecat occaecat nulla anim ad. Duis ea quis dolore in ea ipsum qui pariatur sunt eu. Officia consequat magna ullamco ex in cupidatat eiusmod duis est ad est et aute enim.'];
var LIST_OF_COMMENTS = [];
var LIST_OF_AVATARS = [];
var LIST_OF_MESSAGE = ['Всё отлично!', 'В целом всё неплохо.Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'];
var LIST_OF_NAMES = ['Samuel Simmons', 'Cynthia Collins', 'Sophia Payne', 'Luke Howell', 'Mason Ray', 'Susie Johnston', 'Christopher Gill', 'Eugenia Shelton', 'Lillie Boone', 'Rosalie Sparks', 'Charles Griffin', 'Ida Ball', 'Leila Ross', 'Grace Soto', 'Alfred Hardy', 'Gilbert Snyder', 'Clyde Howell', 'Nannie Blake', 'Lester Silva', 'Raymond Gonzales', 'Lela Cole', 'Joe Brown', 'Scott Vasquez', 'Edgar White', 'Rena Barton'];
var TOTAL_QUANTITY = 25;
var TOTAL_AVATARS = 6;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MIN_COMMENTS = 1;
var MAX_COMMENTS = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var START_SYMBOL = '#';
var SEPARATOR = ' ';
var MIN_LENGTH = 2;
var MAX_LENGTH = 20;
var MAX_QUANTITY = 5;
var RULES = /^#[а-яА-ЯёЁa-zA-Z0-9]{1,19}$/;
var SCALE_STEP_UP = 25;
var SCALE_STEP_DOWN = -25;
var MAX_SCALE = 100;
var MIN_SCALE = 25;
var stringHashtag = document.querySelector('.text__hashtags');
var listPosts = document.querySelector('.pictures');
var picture = document.querySelector('#picture').content.querySelector('.picture');
var bigPictureContainer = document.querySelector('.big-picture');
var btnCloseBigPicture = bigPictureContainer.querySelector('.big-picture__cancel');
var uploadField = document.querySelector('#upload-file');
var imageEditingWindow = document.querySelector('.img-upload__overlay');
var imageEditingWindowCloseBtn = imageEditingWindow.querySelector('#upload-cancel');
var effectLevelPin = document.querySelector('.effect-level__pin');
var effectLevel = document.querySelector('.img-upload__effect-level');
var effectLevelLine = effectLevel.querySelector('.effect-level__line');
var effectLevelDepth = document.querySelector('.effect-level__depth');
var effectLevelValue = document.querySelector('.effect-level__value');
var effectPanel = document.querySelector('.img-upload__effects');
var effectNone = document.querySelector('#effect-none');
var scaleControlSmaller = document.querySelector('.scale__control--smaller');
var scaleControlBigger = document.querySelector('.scale__control--bigger');
var scaleControlInput = document.querySelector('.scale__control--value');
var scaleControlInputValue = 100;
var imageEditingPreview = document.querySelector('.img-upload__preview img');
var effectList = document.querySelector('.effects__list');
var currentFilter = 'effect-none';
var currentEffect = '';
var commentField = document.querySelector('.text__description');
var listOfCreatedPosts = [];
var body = document.querySelector('body');
// var effect = 'none';


var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateUrl = function (dir, quantity) {
  for (var i = 1; i <= quantity; i++) {
    LIST_OF_URL_FOTOS.push(dir + '/' + i + '.jpg');
  }
};

var getComment = function () {
  return {
    avatar: LIST_OF_AVATARS[getRandomNumber(0, LIST_OF_AVATARS.length)],
    message: LIST_OF_MESSAGE[getRandomNumber(0, LIST_OF_MESSAGE.length)],
    name: LIST_OF_NAMES[getRandomNumber(0, LIST_OF_NAMES.length)]
  };
};

var generateComments = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    LIST_OF_COMMENTS.push(getComment());
  }
};

var generateAvatars = function (dir, prefix, quantity) {
  for (var i = 1; i <= quantity; i++) {
    LIST_OF_AVATARS.push(dir + '/' + prefix + '-' + i + '.svg');
  }
};

var getRandomListComments = function () {
  var randomListComments = [];
  for (var i = 0; i < getRandomNumber(MIN_COMMENTS, MAX_COMMENTS); i++) {
    randomListComments.push(LIST_OF_COMMENTS[getRandomNumber(0, LIST_OF_COMMENTS.length)]);
  }
  return randomListComments;
};

var getPostData = function (index) {
  return {
    url: LIST_OF_URL_FOTOS[index],
    description: LIST_OF_DESCRIPTION[getRandomNumber(0, LIST_OF_DESCRIPTION.length)],
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: getRandomListComments(),
    order: index
  };
};

var generatePost = function (index) {
  var post = picture.cloneNode(true);
  var postData = getPostData(index);
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

  var postData = listOfCreatedPosts[index];

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
  if (evt.key === ESC_KEY && evt.target.type !== 'text') {
    closeBigPicture();
  }
};

var openImageEditingWindow = function () {
  imageEditingWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleControlInput.value = scaleControlInputValue + '%';

  document.addEventListener('keydown', closeImageEditingWindowEscPress);
};

var closeImageEditingWindow = function () {
  imageEditingWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadField.value = '';
  resetSlider();
  imageEditingPreview.style.filter = 'none';

  document.removeEventListener('keydown', closeImageEditingWindowEscPress);
};

var closeImageEditingWindowEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target.type !== 'text' && evt.target.type !== 'textarea') {
    closeImageEditingWindow();
  }
};

var checkEffectNone = function () {
  effectLevel.classList.toggle('hidden', effectNone.checked);
};

var zoomImageEditingPreview = function (step) {
  if (scaleControlInputValue + step >= MIN_SCALE && scaleControlInputValue + step <= MAX_SCALE) {
    scaleControlInputValue += parseInt(step, 10);
  }
  imageEditingPreview.style.transform = 'scale(' + (scaleControlInputValue / 100) + ')';
  scaleControlInput.value = scaleControlInputValue + '%';
};

var resetSlider = function () {
  effectLevelValue.value = 0;
  effectLevelPin.style.left = effectLevelValue.value;
  effectLevelDepth.style.width = effectLevelValue.value;
};

var defaultValueEffect = function () {
  if (imageEditingPreview.classList.contains(currentEffect)) {
    imageEditingPreview.classList.remove(currentEffect);
  }
  imageEditingPreview.style.filter = '';

  switch (currentFilter) {
    case 'effect-none': currentEffect = 'effects__preview--none';
      break;
    case 'effect-chrome': currentEffect = 'effects__preview--chrome';
      break;
    case 'effect-sepia': currentEffect = 'effects__preview--sepia';
      break;
    case 'effect-marvin': currentEffect = 'effects__preview--marvin';
      break;
    case 'effect-phobos': currentEffect = 'effects__preview--phobos';
      break;
    case 'effect-heat': currentEffect = 'effects__preview--heat';
  }

  imageEditingPreview.classList.add(currentEffect);
  effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
  effectLevelDepth.style.width = effectLevelPin.style.left;
  effectLevelValue.value = effectLevelPin.style.left;
};

var checkEffect = function () {
  var effectValue = '';
  switch (currentFilter) {
    case 'effect-none': effectValue = 'none';
      break;
    case 'effect-chrome': effectValue = 'grayscale(' + (1 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + ')';
      break;
    case 'effect-sepia': effectValue = 'sepia(' + (1 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + ')';
      break;
    case 'effect-marvin': effectValue = 'invert(' + (100 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + '%)';
      break;
    case 'effect-phobos': effectValue = 'blur(' + (3 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth).toFixed(2) + 'px)';
      break;
    case 'effect-heat': effectValue = 'brightness(' + (2 / effectLevelLine.offsetWidth * effectLevelDepth.offsetWidth + 1).toFixed(2) + ')';
  }
  return effectValue;
};

var validateHashtags = function () {
  var arrHashtags = stringHashtag.value.split(SEPARATOR);
  var message = '';

  if (arrHashtags[arrHashtags.length - 1] === '') {
    arrHashtags.length = arrHashtags.length - 1;
  }
  for (var i = 0; i < arrHashtags.length; i++) {
    var hashtag = arrHashtags[i].toLowerCase();

    if (!RULES.test(hashtag)) {
      message = 'хештег должен начинаться с ' + START_SYMBOL + ' и содержать только буквы или цифры. Длина ' + MIN_LENGTH + ' - ' + MAX_LENGTH + ' символов';
      break;
    } else {
      if (arrHashtags.slice(0, i).includes(hashtag)) {
        message = 'нельзя использовать одинаковые хештеги';
        break;
      } else {
        message = '';
      }
    }
  }

  if (arrHashtags.length > MAX_QUANTITY) {
    message = 'максимальное количество хештегов ' + MAX_QUANTITY;
  }

  stringHashtag.setCustomValidity(message);
};

btnCloseBigPicture.addEventListener('click', function () {
  closeBigPicture();
});

uploadField.addEventListener('change', function () {
  openImageEditingWindow();

  if (effectNone.checked) {
    effectLevel.classList.add('hidden');
  }
});

imageEditingWindowCloseBtn.addEventListener('click', function () {
  closeImageEditingWindow();
});

imageEditingWindowCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeImageEditingWindow();
  }
});

effectPanel.addEventListener('click', function () {
  checkEffectNone();
});

scaleControlSmaller.addEventListener('click', function () {
  zoomImageEditingPreview(SCALE_STEP_DOWN);
});

scaleControlBigger.addEventListener('click', function () {
  zoomImageEditingPreview(SCALE_STEP_UP);
});

effectLevelPin.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startX = evt.clientX;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var currentX = moveEvt.clientX;
    var shift = startX - currentX;
    startX = moveEvt.clientX;

    effectLevelPin.style.left = (effectLevelPin.offsetLeft - shift) + 'px';
    effectLevelValue.value = (effectLevelPin.offsetLeft - shift);

    if ((effectLevelPin.offsetLeft - shift) > effectLevelLine.offsetWidth) {
      effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
      effectLevelValue.value = effectLevelLine.offsetWidth;
    } else if ((effectLevelPin.offsetLeft - shift) < (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth)) {
      effectLevelPin.style.left = (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth) + 'px';
      effectLevelValue.value = (effectLevelLine.offsetLeft - effectLevelPin.offsetWidth);
    }
    effectLevelDepth.style.width = effectLevelPin.style.left;


    imageEditingPreview.style.filter = checkEffect();
  };

  var onMouseUp = function () {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

effectList.addEventListener('change', function (evt) {
  currentFilter = evt.target.id;
  defaultValueEffect();
});

listPosts.addEventListener('click', function (evt) {
  var index = evt.target.dataset.order;
  if (index) {
    showBigPicture(index);
  }
});

listPosts.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY && evt.target.classList.contains('picture')) {
    var index = evt.target.querySelector('.picture__img').dataset.order;
    showBigPicture(index);
  }
});

stringHashtag.addEventListener('input', validateHashtags);

generateUrl('photos', TOTAL_QUANTITY);
generateAvatars('img', 'avatar', TOTAL_AVATARS);
generateComments(TOTAL_QUANTITY);

renderPosts(TOTAL_QUANTITY);
// resetSlider();
