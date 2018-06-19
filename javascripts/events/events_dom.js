const printToDom = (id, strang) => {
  $(id).html(strang);
};

const eventsAdded = (ThingsToDoArray) => {
  let strang = '';
  ThingsToDoArray.forEach((item) => {
    strang += `<div class="item" data-firebase-id="${item.id}">`;
    strang += `<h3 class="item-event">${item.event}</h3>`;
    strang += `<h5 class="item-location">${item.location}</h5>`;
    strang += `<h5 class="item-start">${item.startDate}</h5>`;
    strang +=  `<div class="btn-group" role="group""> `;
    strang +=     `<button type="button" class="btn btn-default btn-message-edit editBtn hide" data-toggle="modal" data-target="#edit-event-modal"><span class='glyphicon glyphicon-pencil ignore-click'></span></button>`;
    strang +=     `<button type="button" class="btn btn-default btn-message-delete deleteBtn hide"><span class='glyphicon glyphicon-trash ignore-click'></span></button>`;
    strang +=   `</div>`;
    strang += `</div>`;

  });
  printToDom('#upcomingEvents', strang);
};

module.exports = {
  eventsAdded,
};
