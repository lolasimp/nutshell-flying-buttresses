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

  // Currently the friendsArticleArry parameter has been left out of your domStringBuilder, it breaks this function if we use the delete and edit buttons.

  //this is because of the parameters being passed to the domStringBuilder else where, you can I can fix this if we have time. Currently working now, but the edit and delete print out every article.

  // friendsArticleArr.forEach(articles =>
  // {
  //   domString += `<div class='article' id='individualArticle' data-firebase-id="${articles.id}">`;
  //   domString +=  `<h3 class='titleText'>${articles.title}</h3>`;
  //   domString +=  `<p class='urlText'>${articles.synopsis}</p>`;
  //   domString +=  `<p class='synopsisText'>${articles.url}</p>`;
  //   domString += `</div>`;
  // });

  printToDom(domString, 'articleHolder');
};

const printToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

module.exports =
{
  domStringBuilder,
};
