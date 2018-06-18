const printToDom = (id, string) => {
  $(id).html(string);
};

const eventsAdded = (ThingsToDoArray) => {
  let strang = '';
  // strang += `<div><span>Upcoming Events<span></div>`;
  ThingsToDoArray.forEach((item) => {
    // if (index % 8 === 0) {
    strang += `<div class="item" data-firebase-id="${item.id}">`;
    // strang += `<div class="item">`;
    // strang += `<div class="item-date">`;
    strang += `<h4 class="item=start">${item.startDate}</h4>`;
    // strang += `</div>`;
    // strang += `</div>`;
    // strang += `<div class="item-name">`;
    strang += `<h3 class="item-event">${item.event}</h3>`;
    // strang += `<div>`;
    strang += `<h2 class="item-location">${item.location}</h2>`;
    // strang += `</div>`;
    // strang += `</div>`;
    strang += `<div class="item-user"> `;
    // strang += `</div>`;
    // strang += `</div>`;
    strang += `<button type="button" class="btn btn-danger editBtn"><span>Edit</span></button>`;
    strang += `<button type="button" class="btn btn-danger deleteBtn"><span>Delete</span></button>`;
    strang += `</div>`;
    // }
  });
  printToDom('#upcomingEvents', strang);
};

module.exports = {
  eventsAdded,
};
