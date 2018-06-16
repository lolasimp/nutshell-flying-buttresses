const mFirebase = require('./message_create');
const mGet = require('./messages_get');
const mDom = require('./message_dom');
const mDelete = require('./messages_delete');

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

const deleteMessageEvent = () => {
  $(document).on('click', '.btn-message-delete', (e) => {
    const messageId = $(e.target).closest('.message').data('firebaseId');
    mDelete.deleteMessage(messageId)
      .then(() => {
        getAllMessagesEvent();
      })
      .catch((error) => {
        console.error('There was an error in delete movie event', error);
      });
  });
};

module.exports = {
  addMessageEvent,
  getAllMessagesEvent,
  deleteMessageEvent,
};
