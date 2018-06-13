let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
  console.log(fireBaseConfig);
};

const setUID = (newUID) => {
  uid = newUID;
  console.log(uid);
};

module.exports =
{
  setConfig,
  setUID,
};
