const eventFirebase = require('./events_save');
const getAllEventsNow = require('./events_crud');
const deleteOneEvent = require('./event_delete');
const dom = require('./events_dom');

// const callAllEvents = () => {
//   getAllEvents().then((eventsArray) => {
//     dom.eventsAdded(eventsArray);
//   }).catch((err) => {
//     console.error('Failed To Load all events: ', err);
//   });
// };

const saveToFirebase = () => {
  $(document).on('click', '#save-event-btn', (e) => {
    $('#myEvent').modal('hide');
    const eventNameToAdd = $('#typed-event-name').val();
    const eventLocationToAdd = $('#typed-event-location').val();
    const eventDateToAdd = $('#typed-event-date').val();
    const eventPrintToPage = {
      'event': `${eventNameToAdd}`,
      'location': `${eventLocationToAdd}`,
      'startDate': `${eventDateToAdd}`,
    };
    eventFirebase.saveToPost(eventPrintToPage)
      .then(() => {
        $('#typed-event-name').val('');
        $('#typed-event-location').val('');
        $('#typed-event-date').val('');
        callAllEvents();
      })
      .catch((error) => {
        console.error('not saving what to get', error);
      });
  });
};

const callAllEvents = () => {
  getAllEventsNow.getAllEvents()
    .then((eventArray) => {
      dom.eventsAdded(eventArray);
      console.log('hey:', eventArray);
      $('#upcomingEvents');
    })
    .catch((error) => {
      console.error('Not calling all messages', error);
    });
};

const deleteEvent = () => {
  $(document).on('click', '.deleteBtn', (e) => {
    const eventId = $(e.target).closest('.item').data('firebaseId');

    deleteOneEvent.deleteEventsNow(eventId)
      .then(() => {
        callAllEvents();
      })
      .catch((error) => {
        console.error('Did Not Delete', error);
      });
  });
};

module.exports = {
  callAllEvents,
  saveToFirebase,
  deleteEvent,
};
