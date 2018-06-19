const {setUID,} = require('./firebaseAPI');
const {initMessageBoard,} = require('../messages/message_main');
const firebaseFriends = require('../friends/firebaseFriends.js');
const allArticles = require('../articles/javascripts/events');
const {initialierEvents,} = require('../events/events_main');
const {callAllEvents,} = require('../events/events_events');

initialierEvents();

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
      $('#friends-main-container, #friend-requests, #right-sidebar, #contain-all-friends').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#auth').addClass('hide');
      $('#myFriends-container').removeClass('hide');
      $('#suggestedFriends-container').removeClass('hide');
      // GET DATA FROM FIREBASE AND SET MESSAGE BOARD LISTENERS
      initMessageBoard();
      firebaseFriends.getFriendRequests();
      allArticles.getAllArticlesEvent();
      firebaseFriends.friendsList();
      firebaseFriends.suggestFriends();
      callAllEvents();
    } else {
      $('#mess, #tsk, #evnts, #artcls, #frnds, #logout').addClass('hide');
      $('#message-main-container').addClass('hide');
      $('#tasks-main-container').addClass('hide');
      $('#events-main-container').addClass('hide');
      $('#articles-main-container').addClass('hide');
      $('#friends-main-container, #friend-requests, #right-sidebar, #contain-all-friends').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#login-form').removeClass('hide');
      $('#friend-requests').html('');
      $('#myFriends').html('');
      $('#suggestedFriends').html('');
      $('#myFriends-container').addClass('hide');
      $('#suggestedFriends-container').addClass('hide');
    }
  });
};

module.exports =
  {
    checkLoginStatus,
  };

module.exports =
  {
    checkLoginStatus,
  };
