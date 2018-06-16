const firebaseAPI = require('../auth/firebaseAPI');

const saveMessage = (newMessage) => {
  const uid = firebaseAPI.getUID();
  newMessage.uid = uid;
  const firebaseConfig = firebaseAPI.getConfig();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/messages.json`,
      data: JSON.stringify(newMessage),
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
  saveMessage,
};
