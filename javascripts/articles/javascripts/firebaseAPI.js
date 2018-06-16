const firebaseAPI = require('../../auth/firebaseAPI');

const saveArticle = (newArticle) =>
{
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
  console.log('poop', firebaseConfig);
  newArticle.userUid = firebaseAPI.getUID();
  return new Promise ((resolve, reject) =>
  {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/articles.json`,
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

const getAllArticles = () =>
{
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
  const uid = firebaseAPI.getUID();
  return new Promise((resolve, reject) =>
  {
    const allArticlesArr = [];
    $.ajax(
      {
        method: 'GET',
        url: `${firebaseConfig.databaseURL}/articles.json?orderBy="uid"&equalTo="${uid}"`,
      })
      .done((allArticlesObject) =>
      {
        if (allArticlesObject !== null)
        {
          Object.keys(allArticlesObject).forEach((fbKey) =>
          {
            allArticlesObject[fbKey].id = fbKey;
            allArticlesArr.push(allArticlesObject[fbKey]);
          });
        }
        resolve(allArticlesArr);
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
  getAllArticles,
};
