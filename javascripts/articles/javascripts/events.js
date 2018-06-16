const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

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
        getAllArticlesEvent();
      })
      .catch((err) =>
      {
        console.error('error in saving article', err);
      });
  });
};

const getAllArticlesEvent = () =>
{
  firebaseAPI.getAllArticles()
    .then((articlesArr) =>
    {
      dom.domStringBuilder(articlesArr);
    })
    .catch((err) =>
    {
      console.error('damn',err);
    });
};

const initializer = () =>
{
  saveArticleEvent();
};

module.exports =
{
  initializer,
  getAllArticlesEvent,
};
