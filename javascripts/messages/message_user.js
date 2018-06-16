const firebaseAPI = require('../firebaseAPI');

const getUID = () => {
  return firebaseAPI.getUID();
};

module.exports = {
  getUID,
};
