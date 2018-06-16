const eventFirebase = require('./events_crud');

const saveToSave = () => {
  $(document).on('click', '#save-event-btn', (e) => {
    const eventNameToAdd = $('#typed-event-name').val();
    const eventLocationToAdd = $('#typed-event-location').val();
    const eventDateToAdd = $('#typed-event-date').val();
    const eventPrintToPage = {
      'startDate': `${eventNameToAdd}`,
      'event': `${eventLocationToAdd}`,
      'location': `${eventDateToAdd}`,
    };
    eventFirebase.saveToSave(eventPrintToPage)
      .catch((error) => {
        console.error('error not getting it', error);
      });
  });
};

module.exports = {
  saveToSave,
};
