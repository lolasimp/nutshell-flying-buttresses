const events = require('./events.js');

const initializer = () => {
  events.addFriendEvent();
  events.addRequestEvents();
  events.addUnFriendEvent();
};

module.exports = {
  initializer,
};
