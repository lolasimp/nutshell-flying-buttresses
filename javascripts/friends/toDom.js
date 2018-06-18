const printToDom = (divID, stringToPrint) => {
  $(divID).html(stringToPrint);
};

const appendToDom = (divID, stringToPrint) => {
  $(divID).append(stringToPrint);
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

const printMyFriends = (friendsArray, myId) => {
  let stringToPrint = '';
  stringToPrint += `<div class="panel-heading">Friends List</div>`;
  friendsArray.forEach((friend) => {
    stringToPrint += `<div>`;
    stringToPrint += `<div class="panel-body">`;
    stringToPrint += `${friend.username}`;
    stringToPrint += `<button data-relationship-Id="${friend.id}" data-friend-id="${friend.uid}" data-myId="${myId}"  type="button" class="btn btn-danger de-friend">Un-Friend</button>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  appendToDom('#myFriends', stringToPrint);
};

const suggestedFriends = (friendsArray) => {
  let stringToPrint = '';
  stringToPrint += `<div class="panel-heading">Suggested Friends</div>`;
  friendsArray.forEach((friend) => {
    stringToPrint += `<div>`;
    stringToPrint += `<div class="panel-body">`;
    stringToPrint += `${friend.username}`;
    stringToPrint += `<button data-uid="${friend.uid}" type="button" class="btn btn-danger add-friend">Friend</button>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  appendToDom('#suggestedFriends', stringToPrint);
};

module.exports = {
  friendRequestBuilder,
  printMyFriends,
  suggestedFriends,
};
