const messageEvents = require('./message_events');

const initMessageBoard = () => {
  messageEvents.addMessageEvent();
  messageEvents.getAllMessagesEvent();
  messageEvents.deleteMessageEvent();
};

module.exports = {
  initMessageBoard,
};
