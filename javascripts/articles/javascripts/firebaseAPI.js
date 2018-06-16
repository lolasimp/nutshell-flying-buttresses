let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const setUID = (newUID) =>
{
  uid = newUID;
};

const saveArticle = (newArticle) =>
{
  newArticle.uid = uid;
  return new Promise ((resolve, reject) =>
  {
    $.ajax({
      method: 'POST',
      url: `${fireBaseConfig.databaseURL}/articles.json`,
      data: JSON.stringify(newArticle),
    })
      .done((uniqueKey) =>
      {
        resolve(uniqueKey);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

module.exports =
{
  saveArticle,
  setConfig,
  setUID,
};
