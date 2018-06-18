const {getConfig,} = require('../auth/firebaseAPI');

let firebaseConfig = {};

const updateEvent = (updateEvent, eventId) => {
  return new Promise((resolve, reject) => {
    firebaseConfig = getConfig();
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/events/${eventId}.json`,
      data: JSON.stringify(updateEvent),
    })
      .done((updatedAfter) => {
        resolve(updatedAfter);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  updateEvent,
};
