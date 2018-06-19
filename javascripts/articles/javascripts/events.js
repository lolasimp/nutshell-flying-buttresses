const firebaseAPI = require('./firebaseAPI');
const firebaseAPI2 = require('../../auth/firebaseAPI');
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
  const user = firebaseAPI2.getUID();
  firebaseAPI.getAllArticles()
    .then((articlesArr) =>
    {
      dom.domStringBuilder(articlesArr, user);
    })
    .catch((err) =>
    {
      console.error('damn',err);
    });
};

const deleteArticleEvent = () =>
{
  $(document).on('click', '.deleteArticle', (e) =>
  {
    const articleId = $(e.target).closest('.article').data('firebaseId');
    firebaseAPI.deleteArticle(articleId)
      .then(() =>
      {
        getAllArticlesEvent();
      })
      .catch((error) =>
      {
        console.error('There was an error in delete movie event', error);
      });
  });
};

const editArticlesEvent = () =>
{
  $(document).on('click','.editArticle', (e) =>
  {
    const articleToEdit = $(e.target).closest('.article');
    const articleToUpdateId = $(e.target).closest('.article').data('firebaseId');
    const title = articleToEdit.find('.titleText').text();
    console.log(title);
    const url = articleToEdit.find('.urlText').text();
    const synopsis = articleToEdit.find('.synopsisText').text();
    $('#editModal').data(articleToUpdateId);
    $('.titleInput2').val(title);
    $('.urlInput2').val(url);
    $('.synopsisInput2').val(synopsis);
  });
};

const initializer = () =>
{
  saveArticleEvent();
  deleteArticleEvent();
  editArticlesEvent();
};

module.exports =
{
  initializer,
  getAllArticlesEvent,
};
