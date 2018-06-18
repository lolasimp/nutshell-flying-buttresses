// const whatHappensEvents = require('./events_events');
const { callAllEvents, saveToFirebase, deleteEvent, } = require('./events_events');

const initialierEvents = () => {
  callAllEvents();
  saveToFirebase();
  deleteEvent();
};

module.exports = {
  initialierEvents,
};
