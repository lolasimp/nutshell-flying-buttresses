const events = require('./events.js');

const initializer = () => {
  events.addFriendEvent();
  events.addRequestEvents();
};

module.exports = {
  initializer,
};
