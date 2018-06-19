const firebaseAPI = require('../../auth/firebaseAPI');

const saveArticle = (newArticle) =>
{
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
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
  return new Promise((resolve, reject) =>
  {
    const allArticlesArr = [];
    $.ajax(
      {
        method: 'GET',
        url: `${firebaseConfig.databaseURL}/articles.json`,
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

const deleteArticle = (articleId) =>
{
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
  return new Promise((resolve, reject) =>
  {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/articles/${articleId}.json`,
    })
      .done(() =>
      {
        resolve();
      })
      .fail((error) =>
      {
        reject(error);
      });
  });
};

const editArticles = (updatedArticle, articleId) =>
{
  updatedArticle.userUid = firebaseAPI.getUID();
  const firebaseConfig = firebaseAPI.getFirebaseConfig();
  return new Promise((resolve, reject) =>
  {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/articles/${articleId}.json`,
      data: JSON.stringify(updatedArticle),
    })
      .done((modifiedArticle) =>
      {
        resolve(modifiedArticle);
      })
      .fail((error) =>
      {
        reject(error);
      });
  });
};

module.exports =
{
  saveArticle,
  getAllArticles,
  deleteArticle,
  editArticles,
};
