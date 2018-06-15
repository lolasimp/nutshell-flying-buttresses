const {getFirebaseConfig, getUID,} = require('../firebaseAPI.js');
const toDom = require('./toDom.js');

const getMyFriends = () => {
  return new Promise((resolve, reject) => {
    const friendsArray = [];
    const config = getFirebaseConfig();
    const uid = getUID();
    $.ajax({
      method: `GET`,
      url: `${config.databaseURL}/friends.json?orderBy="friendUid"&equalTo="${uid}"`,
    }).done((friends) => {
      Object.keys(friends).forEach((key) => {
        friends[key].id = key;
        friendsArray.push(friends[key]);
      });
      resolve(friendsArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const usersArray = [];
    const config = getFirebaseConfig();
    $.ajax({
      method: `GET`,
      url: `${config.databaseURL}/users.json`,
    }).done((users) => {
      Object.keys(users).forEach((key) => {
        users[key].id = key;
        usersArray.push(users[key]);
      });
      resolve(usersArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getFriendRequests = () => {
  Promise.all([getMyFriends(), getUsers(),]).then((friendRequests) => {
    const allFriendRequests = [];
    friendRequests[0].forEach((request) => {
      friendRequests[1].forEach((user) => {
        if (request.isPending && user.uid === request.userUid) {
          const newRequest = {};
          newRequest.userName = user.username;
          newRequest.userUid = user.uid;
          newRequest.id = request.id;
          allFriendRequests.push(newRequest);
        }
      });
    });
    toDom.friendRequestBuilder(allFriendRequests);
  }).catch((err) => {
    console.error('Getting friend requests failed: ', err);
  });
};

const updateFriendRequest = (requestResponse) => {
  new Promise ((resolve, reject) => {
    const config = getFirebaseConfig();
    requestResponse.friendUid = getUID();
    $.ajax({
      method: `POST`,
      url: `${config.databaseURL}/friends/${requestResponse.id}.json`,
      data: JSON.stringify(requestResponse),
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

module.exports = {
  updateFriendRequest,
  getFriendRequests,
};
