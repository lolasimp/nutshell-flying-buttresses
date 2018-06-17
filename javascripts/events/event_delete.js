const firebaseAPI = require('../auth/firebaseAPI');

const deleteEventsNow = (eventId) => {
  return new Promise((resolve, reject) => {
    const firebaseConfig = firebaseAPI.getConfig();
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
