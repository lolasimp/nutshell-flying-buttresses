const init = require('./events');
const api = require('./apiKeys');
const test = require('./friends/events.js');

api.retrieveKeys();
init.initializer();
test.addRequestEvents();
