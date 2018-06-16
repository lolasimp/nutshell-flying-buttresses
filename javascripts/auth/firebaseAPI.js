let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getConfig = () => {
  return fireBaseConfig;
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
  getConfig,
  setUID,
  getFirebaseConfig,
  getUID,
};
