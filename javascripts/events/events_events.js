const {saveToPost, } = require('./events_save');
const {getAllEvents, } = require('./events_crud');
const {deleteEventsNow,} = require('./event_delete');
const {eventsAdded,} = require('./events_dom');
// const {updateEvent,} = require('./event_update');

const callAllEvents = () => {
  getAllEvents()
    .then((eventsArray) => {
      eventsAdded(eventsArray);
    })
    .catch((error) => {
      console.error('Failed To Load all events: ', error);
    });
};

const saveToFirebase = () => {
  $('#save-event-btn').click(() => {
    $('#myEvent').modal('hide');
    const eventNameToAdd = $('#typed-event-name').val();
    const eventLocationToAdd = $('#typed-event-location').val();
    const eventDateToAdd = $('#typed-event-date').val();
    const eventPrintToPage = {
      'event': `${eventNameToAdd}`,
      'location': `${eventLocationToAdd}`,
      'startDate': `${eventDateToAdd}`,
    };
    saveToPost(eventPrintToPage);
    $('#typed-event-name').val('');
    $('#typed-event-location').val('');
    $('#typed-event-date').val('');
    callAllEvents();
  });
};

const deleteEvent = () => {
  $(document).on('click', '.deleteBtn', (e) => {
    const eventId = $(e.target).closest('.item').data('firebaseId');
    deleteEventsNow(eventId)
      .then(() => {
        callAllEvents();
      })
      .catch((error) => {
        console.error('Did Not Delete', error);
      });
  });
};

// const modalEditEvent = () => {
//   $(document).on('click', '.editBtn', (e) => {
//     const theEvent = $(e.target).closest('.item-location').data('event');
//     theEvent.attr()
//     const EventToEdit =theEvent.find()

//   });
// };

// const saveEditedEvent = () => {
//   $('#save-event-btn').click(() => {
//     $('#myEvent').modal('hide');
//     const eventNameToAdd = $('#typed-event-name').val();
//     const eventLocationToAdd = $('#typed-event-location').val();
//     const eventDateToAdd = $('#typed-event-date').val();
//     const eventPrintToPage = {
//       'event': `${eventNameToAdd}`,
//       'location': `${eventLocationToAdd}`,
//       'startDate': `${eventDateToAdd}`,
//     };
//     saveToPost(eventPrintToPage);
//     $('#typed-event-name').val('');
//     $('#typed-event-location').val('');
//     $('#typed-event-date').val('');
//     callAllEvents();
//   });
// };

module.exports = {
  callAllEvents,
  saveToFirebase,
  deleteEvent,
  // modalEditEvent,
  // saveEditedEvent,
};
