const domStringBuilder = (articleArr, user) =>
{
  let domString = '';
  articleArr.forEach(article =>
  {
    domString += `<div class='article' id='individualArticle' data-firebase-id="${article.id}">`;
    domString +=  `<h3 class='titleText'>${article.title}</h3>`;
    domString +=  `<p class='urlText'>${article.synopsis}</p>`;
    domString +=  `<p class='synopsisText'>${article.url}</p>`;
    if (article.userUid === user)
    {
      domString +=  `<button class='editArticle' data-toggle="modal" data-target="#editModal">Edit</button>`;
      domString +=  `<button class='deleteArticle'>Delete</button>`;
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
