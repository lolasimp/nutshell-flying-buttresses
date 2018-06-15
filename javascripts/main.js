const init = require('./events');
const api = require('./apiKeys');
const events = require('./tasks/events');

api.retrieveKeys();
init.initializer();
events.initializer();
// console.log(moment().format());
