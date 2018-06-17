const eventFirebase = require('./events_save');
const deletemessage = require('./events_crud');

const saveToSave = () => {
  $(document).on('click', '#save-event-btn', (e) => {
    const eventNameToAdd = $('#typed-event-name').val();
    const eventLocationToAdd = $('#typed-event-location').val();
    const eventDateToAdd = $('#typed-event-date').val();
    const eventPrintToPage = {
      'event': `${eventNameToAdd}`,
      'location': `${eventLocationToAdd}`,
      'startDate': `${eventDateToAdd}`,
    };
    eventFirebase.saveMyNewEvent(eventPrintToPage)
      .catch((error) => {
        console.error('error not getting it', error);
      });
  });
};

$('#close-event-btn').click(function () {
  $('#1').modal('hide');
});
// const closeModal = () => {
//   $(document).replace('click', '#close-event-btn', (e) => {
//   });
// };

const deleteEvent = () => {
  $(document).on('click', '#deleteBtn', (e) => {
    const eventId = $(e.target).closest('.item').data('firebaseId');
    deletemessage.deleteEvents(eventId)
      .then(() => {
        saveToSave();
      })
      .catch((error) => {
        console.error('Did Not Delete', error);
      });
  });
};

module.exports = {
  saveToSave,
  // closeModal,
  deleteEvent,
};
