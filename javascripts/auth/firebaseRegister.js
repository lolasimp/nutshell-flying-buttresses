const firebaseAPI = require('./firebaseAPI.js');

const createUser = (newUser) => {
  return new Promise ((resolve, reject) => {
    const firebaseConfig = firebaseAPI.getFirebaseConfig();
    $.ajax({
      method: `POST`,
      url: `${firebaseConfig.databaseURL}/users.json`,
      data: JSON.stringify(newUser),
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

module.exports = {
  createUser,
};
