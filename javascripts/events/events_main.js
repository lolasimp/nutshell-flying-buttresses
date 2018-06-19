const { saveToFirebase, deleteEvent, modalEditEvent,} = require('./events_events');

const initialierEvents = () => {
  saveToFirebase();
  deleteEvent();
  modalEditEvent();
};

module.exports = {
  initialierEvents,
};
