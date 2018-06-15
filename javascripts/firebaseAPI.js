let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
  console.error(fireBaseConfig);
};

const getConfig = () => {
  return fireBaseConfig;
};

const getFirebaseConfig = () => {
  return fireBaseConfig;
};

const setUID = (newUID) => {
  uid = newUID;
  console.error(uid);
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
