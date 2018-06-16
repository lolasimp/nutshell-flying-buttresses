const printToDom = (id, string) => {
  $(id).html(string);
};

const eventsAdded = (ThingsToDoArray) => {
  let strang = '';
  // strang += `<div><span>Upcoming Events<span></div>`;
  ThingsToDoArray.forEach((item) => {
    // if (index % 8 === 0) {
    strang += `<div class='event-container'>`;
    strang += `<ul>`;
    strang += `<li>`;
    strang += `<div class='clearfix row padding-left'>`;
    strang += `<div class='dateOfEvent left'>`;
    strang += `<h4>${item.startDate}</h4>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `<div class='clearfix row padding-right'>`;
    strang += `<header><h3 class='event-name'>${item.event}</h3><header>`;
    // strang += `<div>`;
    strang += `<h2>${item.location}</h2>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `<div class="${item.userUid}" right'> `;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</li>`;
    strang += `</ul>`;
    strang += `<button type="button" class="btn btn-danger editBtn"><span>Edit</span></button>`;
    strang += `<button type="button" class="btn btn-danger deleteBtn"><span>Delete</span></button>`;
    strang += `</div>`;
    // }
  });
  printToDom('#upcomingEvents', strang);
};

const eventsSaved = (ThingsToSaveArray) => {
  let string = '';
  // strang += `<div><span>Upcoming Events<span></div>`;
  ThingsToSaveArray.forEach((item) => {
    // if (index % 8 === 0) {
    string += `<div class='event-container'>`;
    string += `<ul>`;
    string += `<li>`;
    string += `<div class='clearfix row padding-left'>`;
    string += `<div class='dateOfEvent left'>`;
    string += `<h4>${item.startDate}</h4>`;
    string += `</div>`;
    string += `</div>`;
    string += `<div class='clearfix row padding-right'>`;
    string += `<header><h3 class='event-name'>${item.event}</h3><header>`;
    // strang += `<div>`;
    string += `<h2>${item.location}</h2>`;
    string += `</div>`;
    string += `</div>`;
    string += `<div class="${item.userUid}" right'> `;
    string += `</div>`;
    string += `</div>`;
    string += `</li>`;
    string += `</ul>`;
    string += `<button type="button" class="btn btn-danger editBtn"><span>Edit</span></button>`;
    string += `<button type="button" class="btn btn-danger deleteBtn"><span>Delete</span></button>`;
    string += `</div>`;
    // }
  });
  printToDom('#upcomingEvents', string);
};

module.exports = {
  eventsAdded,
  eventsSaved,
};
