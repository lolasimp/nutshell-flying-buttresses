// MESSAGES MODULE
// PURPOSE: A simple message board using CRUD to create and manage messages posted by all users.
// AUTHOR: A. Slayton

const messageEvents = require('./message_events');

const initMessageBoard = () => {
  messageEvents.addMessageEvent();
  messageEvents.getAllMessagesEvent();
  messageEvents.deleteMessageEvent();
  messageEvents.updateMessageEvent();
  messageEvents.buttonBehavior();
  messageEvents.getUsers();
};

module.exports = {
  initMessageBoard,
};
