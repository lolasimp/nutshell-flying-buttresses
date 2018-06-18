const domStringBuilder = (articleArr, user) =>
{
  let domString = '';
  articleArr.forEach(article =>
  {
    domString += `<div class='article' id='individualArticle' data-firebase-id="${article.id}">`;
    domString +=  `<h3>${article.title}</h3>`;
    domString +=  `<p>${article.synopsis}</p>`;
    domString +=  `<p>${article.url}</p>`;
    if (article.userUid === user)
    {
      domString +=  `<button class='editArticle' data-toggle="modal" data-target="#myModal">Edit</button>`;
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
