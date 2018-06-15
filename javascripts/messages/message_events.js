const mFirebase = require('./message_firebase');

// POST MESSAGE TO FIREBASE
const addMessageEvent = () => {
  $('#submit-message').on('click', (e) => {
    const timeStamp = moment().format();
    const messageToAdd = $('#user-message-input').val();
    const messageToPost = {
      'message': `${messageToAdd}`,
      'timestamp': timeStamp,
      'isEdited': false,
    };
    mFirebase.saveMessage(messageToPost)
      .catch((error) => {
        console.error('error in saving message', error);
      });
  });
};

module.exports = {
  addMessageEvent,
};
