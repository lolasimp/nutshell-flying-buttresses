const firebaseAPI = require('./firebaseAPI');

const saveArticleEvent = () =>
{
  $(document).on('click', '.articleToAddToList', (e) =>
  {
    const titleData = $('.titleInput').val();
    const urlData = $('.urlInput').val();
    const synopsisData = $('.synopsisInput').val();
    const articleToAdd =
    {
      title: titleData,
      url: urlData,
      synopsis: synopsisData,
    };
    firebaseAPI.saveArticle(articleToAdd)
      .then(() =>
      {
      })
      .catch((err) =>
      {
        console.error('error in saving article', err);
      });
  });
};

const getAllMoviesEvent = () =>
{
  firebaseAPI.getAllArticles()
    .then((articlesArr) =>
    {
      console.log(articlesArr);
    })
    .catch((err) =>
    {
      console.error(err);
    });
};

const initializer = () =>
{
  saveArticleEvent();
  getAllMoviesEvent();
};

module.exports =
{
  initializer,
};
