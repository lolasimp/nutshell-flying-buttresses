const articleInit = require('./articles/javascripts/main');
const init = require('./auth/events');
const api = require('./auth/apiKeys');
const ajwFriends = require('./friends/main.js');
const taskEvents = require('./tasks/events');

taskEvents.initializer();
api.retrieveKeys();
init.initializer();
ajwFriends.initializer();
articleInit;
