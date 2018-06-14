const writeToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

const appendToDom = (myString, myElement) => {
  $(`#${myElement}`).append(myString);
};

module.exports = {
  writeToDom,
  appendToDom,
};
