const init = require('./events');
const api = require('./apiKeys');
const articleInit = require('./articles/javascripts/main');
const test = require('./friends/events.js');

api.retrieveKeys();
init.initializer();
test.addRequestEvents();
articleInit;
