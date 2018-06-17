const firebaseAPI = require('../auth/firebaseAPI');
// const dom = require('./events_dom');

const saveToPost = (newEvent) => {
  const uid = firebaseAPI.getUID();
  newEvent.uid = uid;
  const firebaseConfig = firebaseAPI.getConfig();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/events.json`,
      data: JSON.stringify(newEvent),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveToPost,
};
