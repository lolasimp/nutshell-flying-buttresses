const messageEvents = require('./message_events');
const messageFirebase = require('./message_firebase');

const initMessageBoard = () => {
  messageEvents.addMessageEvent();
  messageFirebase.getMessages();
};

module.exports = {
  initMessageBoard,
};
