const init = require('./auth/events');
const api = require('./auth/apiKeys');
const test = require('./friends/events.js');
const lastEvents = require('./events/events_main');

api.retrieveKeys();
init.initializer();
test.addRequestEvents();
lastEvents.initialierEvents();
