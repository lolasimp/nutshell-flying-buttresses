const mFirebase = require('./message_create');
const mGet = require('./message_get');
const mDom = require('./message_dom');
const mDelete = require('./message_delete');
const mUpdate = require('./message_update');
const mUsers = require('./message_user');

// POST MESSAGE TO FIREBASE
const addMessageEvent = () => {
  $('#submit-message').on('click', (e) => {
    const timeStamp = moment().format('LLL');
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
  const user = mUsers.getUID();
  mGet.getAllMessages()
    .then((messagesArray) => {
      mDom.messageBuilder(messagesArray, user);
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

const updateMessageEvent = () => {
  $(document).on('click', '.btn-message-edit', (e) => {
    const myMessage = $(e.target).closest('.message');
    myMessage.attr('id', 'beingEdited');
    const messageToEdit = myMessage.find('.message-text').text();
    const messageID = myMessage.data('firebaseId');
    // SET MESSAGE TEXT IN TEXT AREA TO EDIT
    $('#message-to-update').val(messageToEdit);
    // SET DATA MESSAGE ID TO REFERNCE WHEN SETTING CHANGE
    $('#message-to-update').data('firebaseId', messageID);
    updateMessageBoard();
  });
};

const updateMessageBoard = () => {
  let newMessage = '';
  $('#save-message').on('click', (e) => {
    newMessage = $('#message-to-update').val();
    const messageID = $('#beingEdited').data('firebaseId');
    const updatedMessage = {
      isEdited: true,
      message: `${newMessage}`,
      timestamp: $('#beingEdited').find('.timestamp').text(),
    };
    mUpdate.updateFirebaseMessages(messageID, updatedMessage)
      .then(() => {
        getAllMessagesEvent();
      })
      .catch((error) => {
        console.error('There was an error in update', error);
      });
  });
};

const getUsers = () => {
  mUsers.getAllUsers()
    .then((usersArray) => {
      console.log(usersArray);
      mUsers.convertUsers(usersArray);
    })
    .catch((error) => {
      console.error('error in get all users', error);
    });
};

const buttonBehavior = () => {
  $(document).on('mouseenter', '.message', (e) => {
    $(e.target).find('.btn-message-edit').removeClass('hide');
    $(e.target).find('.btn-message-delete').removeClass('hide');
  });
  $(document).on('mouseleave', '.message', (e) => {
    $(e.target).find('.btn-message-edit').addClass('hide');
    $(e.target).find('.btn-message-delete').addClass('hide');
  });
};

module.exports = {
  addMessageEvent,
  getAllMessagesEvent,
  deleteMessageEvent,
  updateMessageEvent,
  buttonBehavior,
  getUsers,
};
