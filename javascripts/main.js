
const init = require('./auth/events');
const api = require('./auth/apiKeys');
const taskEvents = require('./tasks/events');
// const test = require('./friends/events.js');
// const lastEvents = require('./events/events_main');

taskEvents.initializer();
api.retrieveKeys();
init.initializer();
// test.addRequestEvents();
// lastEvents.initialierEvents();
