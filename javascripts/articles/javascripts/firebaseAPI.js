const firebase = require('../../firebaseAPI');

const saveArticle = (newArticle) =>
{
  newArticle.userUid = firebase.getUID();
  return new Promise ((resolve, reject) =>
  {
    $.ajax({
      method: 'POST',
      url: `https://nutshell-flying-buttresses.firebaseio.com/articles.json`,
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
  // getUrl,
};
