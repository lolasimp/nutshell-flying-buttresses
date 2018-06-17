const firebaseAPI = require('../auth/firebaseAPI');

const getAllMessages = () => {
  return new Promise((resolve, reject) => {
    const firebaseConfig = firebaseAPI.getConfig();
    const allMessagesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/messages.json`,
    })
      .done((allMessagesObj) => {
        if (allMessagesObj !== null) {
          Object.keys(allMessagesObj).forEach((fbKey) => {
            allMessagesObj[fbKey].id = fbKey;
            allMessagesArray.push(allMessagesObj[fbKey]);
          });
        };
        resolve(allMessagesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAllMessages,
};
