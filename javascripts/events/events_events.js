const eventFirebase = require('./events_firebase');

const makeEvent = () => {
  $('#save-event-btn').on('click', (e) => {
    const eventNameToAdd = $('#typed-event-name').val();
    const eventLocationToAdd = $('#typed-event-location').val();
    const eventDateToAdd = $('#typed-event-date').val();
    const eventPrintToPage = {
      'startDate': `${eventNameToAdd}`,
      'event': `${eventLocationToAdd}`,
      'location': `${eventDateToAdd}`,
    };
    eventFirebase.getEvents(eventPrintToPage)
      .catch((error) => {
        console.error('error not getting it', error);
      });
  });
};

module.exports = {
  makeEvent,
};
