const { saveToFirebase, deleteEvent,} = require('./events_events');

const initialierEvents = () => {
  saveToFirebase();
  deleteEvent();
  // modalEditEvent();
};

module.exports = {
  initialierEvents,
};
