const messageBuilder = (messageArray, currentUser, allUserArray) => {
  let messageString = '';
  let username = '';
  messageArray.forEach((message) => {
    for (let i = 0; i < allUserArray.length; i++) {
      if (allUserArray[i].uid === message.uid) {
        username = allUserArray[i].username;
        break;
      } else {
        username = message.uid;
      };
    };
    messageString += `<div class='message' data-firebase-id="${message.id}" data-user-id="${message.uid}">`;
    messageString +=    `<div class='row'>`;
    messageString +=       `<div class='col-sm-10'>`;
    messageString +=          `<div class='row message-padsding-left'>`;

    messageString +=             `<div class='col-sm-5'><h5><strong>From: </strong>${username}</h5></div>`;
    messageString +=             `<div class='col-sm-3'><h6><strong>At: </strong><span class="timestamp">${message.timestamp}</span></h6></div>`;
    if (message.isEdited === true) {
      messageString +=             `<div class='col-sm-4'><h6><em>(edited)</em></h6></div>`;
    };
    messageString +=          `</div>`;
    messageString +=          `<div class='row message-padding-left'>`;
    messageString +=            `<div class='col-sm-12'><h5 class="message-text">${message.message}</h5></div>`;
    messageString +=          `</div>`;
    messageString +=          `<div class='row'>`;
    messageString +=          `</div>`;
    messageString +=        `</div>`;
    if (currentUser === message.uid) {
      messageString +=        `<div class='col-sm-2'>`;
      messageString +=           `<div class ='col-sm-12 text-right'>`;
      messageString +=             `<button class='btn btn-default btn-message-edit hide' data-toggle="modal" data-target="#edit-message-modal"><span class='glyphicon glyphicon-pencil ignore-click'></span></button>`;
      messageString +=             `<button class='btn btn-default btn-message-delete hide'><span class='glyphicon glyphicon-trash ignore-click'></span></button>`;
      messageString +=           `</div>`;
      messageString +=         `</div>`;
    };
    messageString +=       `</div>`;
    messageString +=     `</div>`;
    messageString +=   `</div>`;
  });

  writeToDom(messageString, 'place-messages-here');
};

const writeToDom = (myString, myElement) => {
  $(`#${myElement}`).html(myString);
};

module.exports = {
  messageBuilder,
};
