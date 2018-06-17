const firebaseAPI = require('../auth/firebaseAPI');

const getUID = () => {
  return firebaseAPI.getUID();
};

module.exports = {
  getUID,
};
