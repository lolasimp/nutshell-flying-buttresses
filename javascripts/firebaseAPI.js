let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
  console.error(fireBaseConfig);
};

const setUID = (newUID) => {
  uid = newUID;
  console.error(uid);
};

module.exports =
{
  setConfig,
  setUID,
};
