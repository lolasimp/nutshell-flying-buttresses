const mFirebase = require('./message_firebase');
const mGet = require('./messages_get');
const mDom = require('./message_dom');

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
      .then(() => {
        $('#user-message-input').val('');
        getAllMessagesEvent();
      })
      .catch((error) => {
        console.error('error in saving message', error);
      });
  });
};

const getAllMessagesEvent = () => {
  mGet.getAllMessages()
    .then((messagesArray) => {
      mDom.messageBuilder(messagesArray);
      $('#place-messages-here').scrollTop($('#place-messages-here')[0].scrollHeight);
    })
    .catch((error) => {
      console.error('error in get all messages', error);
    });
};

module.exports = {
  addMessageEvent,
  getAllMessagesEvent,
};
