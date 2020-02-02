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
var listPosts = document.querySelector('.pictures');
var picture = document.querySelector('#picture').content.querySelector('.picture');

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

var getPostData = function () {
  return {
    url: LIST_OF_URL_FOTOS[getRandomNumber(0, LIST_OF_URL_FOTOS.length)],
    description: LIST_OF_DESCRIPTION[getRandomNumber(0, LIST_OF_DESCRIPTION.length)],
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    commens: getRandomListComments()
  };
};

var generatePost = function () {
  var post = picture.cloneNode(true);

  post.querySelector('.picture__img').src = getPostData().url;
  post.querySelector('.picture__likes').textContent = getPostData().likes;
  post.querySelector('.picture__comments').textContent = getPostData().commens.length;

  return post;
};

var renderPosts = function (quantity) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < quantity; i++) {
    fragment.appendChild(generatePost());
  }
  listPosts.appendChild(fragment);
};

generateUrl('photos', TOTAL_QUANTITY);
generateAvatars('img', 'avatar', TOTAL_AVATARS);
generateComments(TOTAL_QUANTITY);

renderPosts(TOTAL_QUANTITY);
