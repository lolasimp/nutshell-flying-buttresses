const firebaseAPI = require('../firebaseAPI');

const deleteMessage = (messageId) => {
  const firebaseConfig = firebaseAPI.getConfig();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/messages/${messageId}.json`,
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
  deleteMessage,
};
