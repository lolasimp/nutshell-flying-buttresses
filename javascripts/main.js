const init = require('./auth/events');
const api = require('./auth/apiKeys');
const ajwFriends = require('./friends/main.js');
// const test = require('./friends/events.js');
// const lastEvents = require('./events/events_main');

api.retrieveKeys();
init.initializer();
ajwFriends.initializer();
// test.addRequestEvents();
// lastEvents.initialierEvents();
