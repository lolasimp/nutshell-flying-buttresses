// let fireBaseConfig = {};

// const setConfig = (fbConfig) =>
// {
//   fireBaseConfig = fbConfig;
// };

// const apiKeys = () =>
// {
//   return new Promise((resolve, reject) =>
//   {
//     $.ajax('./db/apiKeys.json')
//       .done((data) =>
//       {
//         resolve(data.apiKeys);
//       })
//       .fail((err) =>
//       {
//         reject(err);
//       });
//   });
// };

// const getUrl = () =>
// {
//   apiKeys()
//     .then((result) =>
//     {
//       setConfig(result);
//     }).catch((err) =>
//     {
//       console.error(err);
//     });
// };

const saveArticle = (newArticle) =>
{
  // newArticle.uid = uid;
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
