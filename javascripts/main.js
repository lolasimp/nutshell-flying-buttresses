const init = require('./auth/events');
const api = require('./auth/apiKeys');
const test = require('./friends/events.js');

api.retrieveKeys();
init.initializer();
test.addRequestEvents();
