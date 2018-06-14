const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const friendRequestBuilder = (requestArray) => {
  let stringToPrint = '';
  requestArray.forEach((request) => {
    stringToPrint += `<div data-requestId="${request.id}" class="alert alert-info" role="alert">${request.userName} added you as a friend!`;
    stringToPrint += `<button type="button" class="btn btn-success">Accept</button>`;
    stringToPrint += `<button type="button" class="btn btn-danger">Stranger Danger!</button>`;
    stringToPrint += `</div>`;
  });
  printToDom('#friend-requests', stringToPrint);
};

module.exports = {
  friendRequestBuilder,
};
