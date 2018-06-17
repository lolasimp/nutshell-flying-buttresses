const firebaseFriends = require('./firebaseFriends.js');
const authFirebase = require('../auth/firebaseAPI.js');

// Friend Request Response Event

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

// Add a Friend events

const addFriendEvent = () => {
  $('body').on('click', '.add-friend', addFriend);
};

const addFriend = (e) => {
  const newRelationship = {
    userUid: authFirebase.getUID(),
    friendUid: $(e.target).data('uid'),
    isAccepted: false,
    isPending: true,
  };
  firebaseFriends.createNewRelationship(newRelationship).catch((err) => {
    console.error('Creating a Relationship Failed: ', err);
  });
};

module.exports = {
  addRequestEvents,
  addFriendEvent,
};
