const domStringBuilder = (articleArr, user) =>
{
  let domString = '';
  articleArr.forEach(article =>
  {
    domString += `<div class='article' id='individualArticle' data-firebase-id="${article.id}">`;
    domString +=  `<h3 class='titleText'>${article.title}</h3>`;
    domString +=  `<h5 class='urlText'>${article.synopsis}</h5>`;
    domString +=  `<h5 class='synopsisText'>${article.url}</h5>`;
    if (article.userUid === user)
    {
      domString += `<button class='btn btn-default btn-message-edit hide editArticle' data-toggle="modal" data-target="#editModal"><span class='glyphicon glyphicon-pencil ignore-click'></span></button>`;
      // domString +=  `<button class='editArticle' data-toggle="modal" data-target="#editModal">Edit</button>`;
      domString += `<button class='btn btn-default btn-message-delete hide deleteArticle'><span class='glyphicon glyphicon-trash ignore-click'></span></button>`;
      // domString +=  `<button class='deleteArticle'>Delete</button>`;
    }
    domString += `</div>`;
  });
  printToDom(domString, 'articleHolder');
};

const printToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

module.exports =
{
  domStringBuilder,
};
