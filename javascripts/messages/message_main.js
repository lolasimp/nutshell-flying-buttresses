const messageEvents = require('./message_events');

const initMessageBoard = () => {
  messageEvents.addMessageEvent();
  messageEvents.getAllMessagesEvent();
};

module.exports = {
  initMessageBoard,
};
