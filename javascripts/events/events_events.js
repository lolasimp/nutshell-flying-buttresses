const { saveToPost, } = require('./events_save');
const { getAllEvents, } = require('./events_crud');
const { deleteEventsNow, } = require('./event_delete');
const { eventsAdded, } = require('./events_dom');
const { updateEvent, } = require('./event_update');

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
    const eventToEditId = $(e.target).closest('.item').data('firebaseId');
    const eventToEdit = $(e.target).closest('.item');
    const dateToEdit = eventToEdit.find('.childClass').text('.item-start');
    const nameToEdit = eventToEdit.find('.childClass').text('.item-name');
    const locationToEdit = eventToEdit.text('.item-location');
    $('#typed-event-date2').val(dateToEdit);
    $('#typed-event-name2').val(nameToEdit);
    $('#typed-event-location2').val(locationToEdit);
    updateEditedEvents(eventToEditId);
  });
};

const updateEditedEvents = (editedEventId) => {
  $('#save-event-btn2').on('click', () => {
    $('#edit-event-modal').modal('hide');
    const newStartDate = $('#typed-event-date2').val();
    const newEventName = $('#typed-event-name2').val();
    const newEventLocation = $('#typed-event-location2').val();
    //     const editedEventId = $('whatWeChange').data('firebaseId');
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
    $('#typed-event-date2').val('');
  });
};

module.exports = {
  callAllEvents,
  saveToFirebase,
  deleteEvent,
  modalEditEvent,
};
