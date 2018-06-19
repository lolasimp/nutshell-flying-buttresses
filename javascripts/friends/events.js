const firebaseFriends = require('./firebaseFriends.js');

const addRequestEvents = () => {
  $('body').on('click', '.respond', requestResponse);
};

const requestResponse = (e) => {
  // console.log('Request Event Happened');
  const friendRequest = $(e.target).closest('.friend-request');
  if ($(e.target).hasClass('accept')) {
    const acceptedRequest = {
      requestId: friendRequest.data('requestid'),
      userUid: friendRequest.data('userid'),
      isAccepted: true,
      isPending: false,
    };
    firebaseFriends.updateFriendRequest(acceptedRequest);
  } else if ($(e.target).hasClass('reject')) {
    const rejectedRequest = {
      requestId: friendRequest.data('requestid'),
      userUid: friendRequest.data('userid'),
      isAccepted: false,
      isPending: false,
    };
    firebaseFriends.updateFriendRequest(rejectedRequest);
  }
  friendRequest.addClass('hide');
};

module.exports = {
  addRequestEvents,
};
