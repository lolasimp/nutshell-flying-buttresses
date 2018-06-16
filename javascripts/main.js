const init = require('./events');
const api = require('./apiKeys');
const articleInit = require('./articles/javascripts/main');

api.retrieveKeys();
init.initializer();
articleInit;
