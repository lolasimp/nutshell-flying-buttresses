const {getConfig,} = require('../auth/firebaseAPI');

let firebaseConfig = {};

const deleteEventsNow = (eventId) => {
  return new Promise((resolve, reject) => {
    firebaseConfig = getConfig();
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/events/${eventId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  deleteEventsNow,
};
