const printToDom = (id, strang) => {
  $(id).html(strang);
};

const eventsAdded = (ThingsToDoArray) => {
  let strang = '';
  ThingsToDoArray.forEach((item) => {
    strang += `<div class="item" data-firebase-id="${item.id}">`;
    strang += `<h4 class="item-start">${item.startDate}</h4>`;
    strang += `<h3 class="item-event">${item.event}</h3>`;
    strang += `<h2 class="item-location" data-event-id=${item.location}">${item.location}</h2>`;
    strang += `<div class="btn-group" role="group""> `;
    strang += `<button type="button" class="btn btn-danger editBtn" data-toggle="modal" data-target="#edit-event-modal">Edit</button>`;
    strang += `<button type="button" class="btn btn-danger deleteBtn"><span>Delete</span></button>`;
    strang += `</div>`;
    // }
  });
  printToDom('#upcomingEvents', strang);
};

module.exports = {
  eventsAdded,
};
