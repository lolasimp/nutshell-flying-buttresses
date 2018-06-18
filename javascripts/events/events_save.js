const { getConfig, } = require('../auth/firebaseAPI');
// const { apiKeys, } = require('../apiKeys');

let firebaseConfig = {};

const saveToPost = (newEvent) => {
  return new Promise((resolve, reject) => {
    firebaseConfig = getConfig();
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
