const whatHappensEvents = require('./events_events');

const initialierEvents = () => {
  whatHappensEvents.saveToSave();
  whatHappensEvents.closeModal();
  whatHappensEvents.deleteEvent();
};

module.exports = {
  initialierEvents,
};
