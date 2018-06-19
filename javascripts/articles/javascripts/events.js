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

const editArticleEvent = () =>
{
  $(document).on('click','.editArticle', (e) =>
  {
    const articleToEdit = $(e.target).closest('.article');
    const articleToUpdateId = $(e.target).closest('.article').data('firebaseId');
    const title = articleToEdit.find('.titleText').text();
    const url = articleToEdit.find('.urlText').text();
    const synopsis = articleToEdit.find('.synopsisText').text();
    articleToEdit.attr('id', 'beingModified');
    $('#editModal').data(articleToUpdateId);
    $('.titleInput2').val(title);
    $('.urlInput2').val(url);
    $('.synopsisInput2').val(synopsis);
    updateArticles();
  });
};

const updateArticles = () =>
{
  let newTitle = '';
  let newUrl = '';
  let newSynopsis = '';
  $('#editedArticleToAddToList').on('click', (e) =>
  {
    newTitle = $('.titleInput2').val();
    newUrl = $('.urlInput2').val();
    newSynopsis = $('.synopsisInput2').val();
    const articleId = $('#beingModified').data('firebaseId');
    const updatedArticle =
    {
      synopsis: `${newSynopsis}`,
      title: `${newTitle}`,
      url: `${newUrl}`,
    };
    firebaseAPI.editArticles(updatedArticle, articleId)
      .then(() =>
      {
        getAllArticlesEvent();
      })
      .catch((err) =>
      {
        console.error(err);
      });
  });
};

const initializer = () =>
{
  saveArticleEvent();
  deleteArticleEvent();
  editArticleEvent();
};

module.exports =
{
  initializer,
  getAllArticlesEvent,
};
