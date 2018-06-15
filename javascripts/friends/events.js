const firebaseFriends = require('./firebaseFriends.js');

$('body').on('click', '.respond', requestResponse);

const requestResponse = (e) => {
  if ($(e.target).hasClass('accept')) {
    const friendRequest = $(e.target).closest('.friend-request');
    const acceptedRequest = {
      userUid: friendRequest.data('userId'),
      isAccepted: true,
      isPending: false,
    };
    firebaseFriends.updateFriendRequest(acceptedRequest);
  } else if ((e.target).hasClass('reject')) {
    const friendRequest = $(e.target).closest('.friend-request');
    const rejectedRequest = {
      userUid: friendRequest.data('userId'),
      isAccepted: false,
      isPending: false,
    };
    firebaseFriends.updateFriendRequest(rejectedRequest);
  }
};
