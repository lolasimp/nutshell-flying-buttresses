let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
  console.log(fireBaseConfig);
};

const getFirebaseConfig = () => {
  return fireBaseConfig;
};

const setUID = (newUID) => {
  uid = newUID;
  console.log(uid);
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
