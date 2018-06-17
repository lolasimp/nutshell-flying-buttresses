const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const friendRequestBuilder = (requestArray) => {
  let stringToPrint = '';
  requestArray.forEach((request) => {
    stringToPrint += `<div data-requestid="${request.id}" data-userid="${request.userUid}" class="alert alert-info col-md-3 friend-request" role="alert">${request.userName} added you as a friend! `;
    stringToPrint += `<div class='btn-group' role='group'>`;
    stringToPrint += `<button id='fucking-click' type="button" class="btn btn-success accept respond">Accept</button>`;
    stringToPrint += `<button type="button" class="btn btn-danger reject respond">Reject!</button>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  printToDom('#friend-requests', stringToPrint);
};

module.exports = {
  friendRequestBuilder,
};
