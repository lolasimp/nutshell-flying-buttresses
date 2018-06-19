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
  Promise.all([getAllFriendObjects(), getUsers(),]).then((friendsAndUsers) => {
    const myFriends = [];
    const myId = getUID();
    friendsAndUsers[0].forEach((friendObject) => {
      if (friendObject.isAccepted) {
        friendsAndUsers[1].forEach((user) => {
          if ((friendObject.userUid === myId && friendObject.friendUid === user.uid) || (friendObject.friendUid === myId && friendObject.userUid === user.uid)) {
            const newFriend = {};
            newFriend.id = friendObject.id;
            newFriend.username = user.username;
            newFriend.userUid = user.uid;
            myFriends.push(newFriend);
          }
        });
      }
    });
    toDom.printMyFriends(myFriends, myId);
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
          if ((friendObject.userUid === myId && friendObject.friendUid === user.uid) || (friendObject.friendUid === myId && friendObject.userUid === user.uid)) {
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

const deFriend = (unFriendObject, relationshipID) => {
  return new Promise ((resolve, reject) => {
    const config = getFirebaseConfig();
    $.ajax({
      method: `PUT`,
      url: `${config.databaseURL}/friends/${relationshipID}.json`,
      data: JSON.stringify(unFriendObject),
    }).done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getAllArticles = () => {
  return new Promise ((resolve, reject) => {
    const config = getFirebaseConfig();
    const allArticles = [];
    $.ajax({
      method: `GET`,
      url: `${config.databaseURL}/articles.json`,
    }).done((data) => {
      if (data !== null) {
        Object.keys(data).forEach((key) => {
          data[key].id = key;
          allArticles.push(data[key]);
        });
      };
      resolve(allArticles);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getMyArticles = () => {
  return new Promise ((resolve, reject) => {
    const config = getFirebaseConfig();
    const uid = getUID();
    const articlesArray = [];
    $.ajax({
      method: `GET`,
      url: `${config.databaseURL}/articles.json?orderBy="userUid"&equalTo="${uid}"`,
    }).done((data) => {
      if (data !== null) {
        Object.keys(data).forEach((key) => {
          data[key].id = key;
          articlesArray.push(data[key]);
        });
      }
      resolve(articlesArray);
    }).fail((err) => {
      reject(err);
    });
  });
};

const getFriendArticles = () => {
  Promise.all([getAllFriendObjects(), getAllArticles(), getMyArticles(),]).then((allRelationshipsAndArticles) => {
    const myId = getUID();
    const myRelationships = [];
    const friendsArticles = [];
    const myArticles = allRelationshipsAndArticles[2];
    allRelationshipsAndArticles[0].forEach((relationship) => {
      if (relationship.isAccepted) {
        if (relationship.userUid === myId || relationship.friendUid === myId) {
          myRelationships.push(relationship);
        }
      }
    });

    allRelationshipsAndArticles[1].forEach((article) => {
      if (article.userUid !== myId) {
        myRelationships.forEach((relationshipz) => {
          if ((article.userUid === relationshipz.userUid) || (article.userUid === relationshipz.friendUid)) {
            friendsArticles.push(article);
          }
        });
      }
    });
    toDom.domStringBuilder(friendsArticles, myArticles, myId);
  }).catch((err) => {
    console.error('Failed to get friends articles: ', err);
  });
};

module.exports = {
  updateFriendRequest,
  getFriendRequests,
  friendsList,
  suggestFriends,
  createNewRelationship,
  deFriend,
  getFriendArticles,
};
