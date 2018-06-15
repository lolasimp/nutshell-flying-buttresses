const firebaseFriends = require('./firebaseFriends.js');

$('body').on('click', '.accept', becomeFriends);

const becomeFriends = () => {
  firebaseFriends.beFriends();
};
