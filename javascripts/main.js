const init = require('./auth/events');
const api = require('./auth/apiKeys');

api.retrieveKeys();
init.initializer();
