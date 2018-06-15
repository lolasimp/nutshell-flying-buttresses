const message = require ('./messages/message_main');

const authEvents = () =>
{
  $('#signin-btn').click((e) =>
  {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((user) => {
      })
      .catch((err) =>
      {
        $('#signin-error-messaage').text(err.message);
        $('#signInErrorDiv').removeClass('hide');
        console.error(err.message);
      });
  });
  $('#register-btn').click(() =>
  {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      $('#registerError').text(error.message);
      $('#registerErrorDiv').removeClass('hide');
      console.error(error.message);
    });
  });
  $('#register-link').click(() =>
  {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });
  $('#signin-link').click((e) =>
  {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });
  $('#logout').click(() =>
  {
    firebase.auth().signOut().then(function () {
      $('#auth').removeClass('hide');
      $('#authScreen').removeClass('hide');
      $('#message-main-container').addClass('hide');
      $('#tasks-main-container').addClass('hide');
      $('#events-main-container').addClass('hide');
      $('#articles-main-container').addClass('hide');
      $('#friends-main-container').addClass('hide');
      $('#mess, #tsk, #evnts, #artcls, #frnds, #logout').addClass('hide');
    }).catch(function (error) {
      console.error(error);
    });
  });
};

const initializer = () =>
{
  // GET DATA FROM FIREBASE AND SET MESSAGE BOARD LISTENERS
  message.initMessageBoard();
  authEvents();
};

module.exports =
{
  initializer,
};
