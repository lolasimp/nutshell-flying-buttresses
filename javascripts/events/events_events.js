const { saveToPost, } = require('./events_save');
const { getAllEvents, } = require('./events_crud');
const { deleteEventsNow, } = require('./event_delete');
const { eventsAdded, } = require('./events_dom');
const {updateEvent,} = require('./event_update');

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

const modalEditEvent = () => {
  $(document).on('click', '.editBtn', (e) => {
    const eventToEdit = $(e.target).closest('.item');
    console.error(eventToEdit);
    const eventLocationEdit = $(e.target).closest('.item-location').text();
    const eventIdEdit = $(e.target).closest('.item').data('firebaseId');
    const eventNameEdit = $(e.target).closest('.item-event').text();
    const eventDateEdit = $(e.target).closest('.item-start').text();
    eventToEdit.attr('.id', 'whatWeChange');
    $('#edit-event-modal').data(eventIdEdit);
    $('#typed-event-name2').val(eventNameEdit);
    $('#typed-event-location2').val(eventLocationEdit);
    $('#typed-event-date2').val(eventDateEdit);
    updateEditedEvents();
  });
};

const updateEditedEvents = () => {
  let newEventName = '';
  let newEventLocation = '';
  let newStartDate = '';
  $('#save-event-btn2').on('click', (e) => {
    newStartDate = $('#typed-event-date2').val();
    newEventName = $('#typed-event-name2').val();
    newEventLocation = $('#typed-event-location2').val();
    const editedEventId = $('whatWeChange').data('firebaseId');
    const newEvent =
      {
        event: `${newEventName}`,
        location: `${newEventLocation}`,
        startDate: `${newStartDate}`,
      };
    updateEvent(newEvent, editedEventId)
      .then(() => {
        callAllEvents();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

module.exports = {
  callAllEvents,
  saveToFirebase,
  deleteEvent,
  modalEditEvent,
};
