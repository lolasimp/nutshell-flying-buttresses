// const whatHappensEvents = require('./events_events');
const { saveToFirebase, deleteEvent, } = require('./events_events');

const initialierEvents = () => {
  saveToFirebase();
  deleteEvent();
};

module.exports = {
  initialierEvents,
};
