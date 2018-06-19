// const { getConfig, } = require('../auth/firebaseAPI');
const firebaseAPI = require('../auth/firebaseAPI');

// let firebaseConfig = {};

const saveToPost = (newEvent) => {
  // return new Promise((resolve, reject) => {
  // firebaseConfig = getConfig();
  const uid = firebaseAPI.getUID();
  newEvent.uid = uid;
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
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

// const uid = firebaseAPI.getUID();
// newMessage.uid = uid;
// const firebaseConfig = firebaseAPI.getFirebaseConfig();
