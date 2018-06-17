const firebaseAPI = require('../auth/firebaseAPI');

const updateEvent = (eventId, event) => {
  event.uid = firebaseAPI.getUID();
  const firebaseConfig = firebaseAPI.getConfig();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/events/${eventId}.json`,
      data: JSON.stringify(event),
    })
      .done((updatedEvent) => {
        resolve(updatedEvent);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  updateEvent,
};
