const firebaseAPI = require('../auth/firebaseAPI');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const firebaseConfig = firebaseAPI.getConfig();
    const allUsersArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/users.json`,
    })
      .done((allUsersObj) => {
        if (allUsersObj !== null) {
          Object.keys(allUsersObj).forEach((fbKey) => {
            allUsersObj[fbKey].id = fbKey;
            allUsersArray.push(allUsersObj[fbKey]);
          });
        };
        resolve(allUsersArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getUID = () => {
  return firebaseAPI.getUID();
};

module.exports = {
  getUID,
  getAllUsers,
};
