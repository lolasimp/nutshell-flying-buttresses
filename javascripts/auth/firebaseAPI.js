let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getFirebaseConfig = () => {
  return fireBaseConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const getUID = () => {
  return uid;
};

module.exports =
{
  setConfig,
  setUID,
  getFirebaseConfig,
  getUID,
};
