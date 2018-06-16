const {setUID,} = require('./firebaseAPI');
const {initMessageBoard,} = require('../messages/message_main');
const firebaseFriends = require('../friends/firebaseFriends.js');
const allArticles = require('../articles/javascripts/events');

const checkLoginStatus = () =>
{
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUID(user.uid);
      $('#mess, #tsk, #evnts, #artcls, #frnds, #logout').removeClass('hide');
      $('#message-main-container').removeClass('hide');
      $('#tasks-main-container').removeClass('hide');
      $('#events-main-container').removeClass('hide');
      $('#articles-main-container').removeClass('hide');
      $('#friends-main-container').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#auth').addClass('hide');
      // GET DATA FROM FIREBASE AND SET MESSAGE BOARD LISTENERS
      initMessageBoard();
      firebaseFriends.getFriendRequests();
      allArticles.getAllArticlesEvent();
    } else {
      $('#mess, #tsk, #evnts, #artcls, #frnds, #logout').addClass('hide');
      $('#message-main-container').addClass('hide');
      $('#tasks-main-container').addClass('hide');
      $('#events-main-container').addClass('hide');
      $('#articles-main-container').addClass('hide');
      $('#friends-main-container').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#friend-requests').html('');
    }
  });
};

module.exports =
{
  checkLoginStatus,
};
