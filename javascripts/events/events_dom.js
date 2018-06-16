
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
  // writeToDom(strang, 'upcomingEvents');
  printToDom('#upcomingEvents', strang);
  $('#events-main-container').removeClass('hide');
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  eventsAdded,
};
