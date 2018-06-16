const domStringBuilder = (articleArr) =>
{
  let domString = '';
  articleArr.forEach(article =>
  {
    domString += `<div id='individualArticle'>`;
    domString +=  `<h3>${article.title}</h3>`;
    domString +=  `<p>${article.synopsis}</p>`;
    domString +=  `<p>${article.url}</p>`;
    domString +=  `<button id='editArticle'>Edit</button>`;
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
