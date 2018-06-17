const whatHappensEvents = require('./events_events');

const initialierEvents = () => {
  whatHappensEvents.callAllEvents();
  whatHappensEvents.saveToFirebase();
  // whatHappensEvents.closeModal();
  whatHappensEvents.deleteEvent();
};

module.exports = {
  initialierEvents,
};
