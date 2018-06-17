const firebaseAPI = require('../auth/firebaseAPI');

const updateFirebaseMessages = (messageId, message) => {
  message.uid = firebaseAPI.getUID();
  const firebaseConfig = firebaseAPI.getConfig();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/messages/${messageId}.json`,
      data: JSON.stringify(message),
    })
      .done((updatedMessage) => {
        resolve(updatedMessage);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  updateFirebaseMessages,
};
