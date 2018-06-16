const messageBuilder = (messageArray) => {
  let messageString = '';
  messageArray.forEach((message) => {
    messageString += `<div class='message' data-firebase-id="${message.id}">`;
    messageString +=    `<div class='row'>`;
    messageString +=       `<div class='col-sm-10'>`;
    messageString +=          `<div class='row message-padding-left'>`;
    messageString +=             `<div class='col-sm-5'><h5><strong>From: </strong>${message.uid}</h5></div>`;
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
    messageString +=        `<div class='col-sm-2'>`;
    messageString +=           `<div class ='col-sm-12 text-right'>`;
    messageString +=             `<button class='btn btn-primary btn-message-edit' data-toggle="modal" data-target="#edit-message-modal"><span class='glyphicon glyphicon-pencil ignore-click'></span></button>`;
    messageString +=             `<button class='btn btn-danger btn-message-delete'><span class='glyphicon glyphicon-trash ignore-click'></span></button>`;
    messageString +=           `</div>`;
    messageString +=         `</div>`;
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
