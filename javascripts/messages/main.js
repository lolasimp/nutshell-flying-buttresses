// Build up the message string from the data collected from firebase

const dom = require('./../dom');

// TEMPORARY USERINFO TO TEST FUNCTION
const myMessageArray = [
  {
    'username': 'John Doe',
    'message': 'Whats up?',
    'timestamp': 1528763298535,
    'isEdited': true,
  },
  {
    'username': 'Mary Jane',
    'message': 'I am bored.',
    'timestamp': 1528763298535,
    'isEdited': false,
  },
  {
    'username': 'Ben Dover',
    'message': 'Tell me about it.',
    'timestamp': 1528763298535,
    'isEdited': true,
  },
];

// TEMPORARY FUNCTION TO TEST BRANCH
const callMessageBuilder = () => {
  messageBuilder(myMessageArray);
};

const messageBuilder = (messageArray) => {
  let messageString = '';
  messageArray.forEach((message, index) => {
    messageString += `<div class='message' id='${messageArray.indexOf(message)}'>`;
    messageString +=    `<div class='row'>`;
    messageString +=       `<div class='col-sm-10'>`;
    messageString +=          `<div class='row message-padding-left'>`;
    messageString +=             `<div class='col-sm-5'><h5><strong>From: </strong>${message.username}</h5></div>`;
    messageString +=             `<div class='col-sm-3'><h6><strong>At: </strong>${message.timestamp}</h6></div>`;
    if (message.isEdited === true) {
      messageString +=             `<div class='col-sm-4'><h6><em>(edited)<em></h6></div>`;
    };
    messageString +=          `</div>`;
    messageString +=          `<div class='row message-padding-left'>`;
    messageString +=            `<div class='col-sm-12'><h5>${message.message}</h5></div>`;
    messageString +=          `</div>`;
    messageString +=          `<div class='row'>`;
    messageString +=          `</div>`;
    messageString +=        `</div>`;
    messageString +=        `<div class='col-sm-2'>`;
    messageString +=           `<div class ='col-sm-12 text-right'>`;
    messageString +=             `<button class='btn btn-primary btn-message-edit'><span class='glyphicon glyphicon-pencil ignore-click'></span></button>`;
    messageString +=             `<button class='btn btn-danger btn-message-delete'><span class='glyphicon glyphicon-trash ignore-click'></span></button>`;
    messageString +=           `</div>`;
    messageString +=         `</div>`;
    messageString +=       `</div>`;
    messageString +=     `</div>`;
    messageString +=   `</div>`;
  });

  dom.writeToDom(messageString, 'place-messages-here');
};

module.exports = {
  messageBuilder,
  callMessageBuilder,
};
