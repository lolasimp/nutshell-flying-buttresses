const {getFirebaseConfig, getUID,} = require('../auth/firebaseAPI.js');
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
      method: `PUT`,
      url: `${config.databaseURL}/friends/${requestResponse.requestId}.json`,
      data: JSON.stringify(requestResponse),
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const friendsList = () => {
  Promise.all([getMyFriends(), getUsers(),]).then((friendsAndUsers) => {
    const myFriends = [];
    friendsAndUsers[0].forEach((friendObject) => {
      if (friendObject.isAccepted) {
        friendsAndUsers[1].forEach((user) => {
          if (friendObject.userUid === user.uid) {
            const newFriend = {};
            newFriend.id = friendObject.id;
            newFriend.username = user.username;
            myFriends.push(newFriend);
          }
        });
      }
    });
    toDom.printMyFriends(myFriends);
  }).catch((err) => {
    console.error('Friends list failed to load: ', err);
  });
};

const getAllFriendObjects = () => {
  return new Promise((resolve, reject) => {
    const friendsArray = [];
    const config = getFirebaseConfig();
    $.ajax({
      method: `GET`,
      url: `${config.databaseURL}/friends.json`,
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

const suggestFriends = () => {
  Promise.all([getAllFriendObjects(), getUsers(),]).then((friendsAndUsers2) => {
    const suggestFriendsArray = [];
    const myId = getUID();
    friendsAndUsers2[1].forEach((user) => {
      let relationships = 0;
      if (user.uid !== myId) {
        friendsAndUsers2[0].forEach((friendObject) => {
          if ((friendObject.userUid === myId && friendObject.userUid === user.uid) || (friendObject.friendUid === myId && friendObject.userUid === user.uid)) {
            relationships += 1;
          };
        });
        if (relationships === 0) {
          suggestFriendsArray.push(user);
        }
      }
    });
    toDom.suggestedFriends(suggestFriendsArray);
  }).catch((err) => {
    console.error('Suggested friends failed: ', err);
  });
};

const createNewRelationship = (newRelationship) => {
  return new Promise ((resolve, reject) => {
    const config = getFirebaseConfig();
    $.ajax({
      method: `POST`,
      url: `${config.databaseURL}/friends.json`,
      data: JSON.stringify(newRelationship),
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
  friendsList,
  suggestFriends,
  createNewRelationship,
};
