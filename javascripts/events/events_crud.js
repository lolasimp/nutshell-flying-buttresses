const firebaseAPI = require('../auth/firebaseAPI');
// const dom = require('./events_dom');

const getAllEvents = () => {
  return new Promise((resolve, reject) => {
    const getAllEventsArray = [];
    const firebaseConfig = firebaseAPI.getConfig();
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/events.json`,
    })
      .done((getAllEventsObj) => {
        if (getAllEventsObj !== null) {
          Object.keys(getAllEventsObj).forEach((fbKey) => {
            getAllEventsObj[fbKey].id = fbKey;
            getAllEventsArray.push(getAllEventsObj[fbKey]);
          });
        };
        resolve(getAllEventsArray);
        // console.log(getAllEventsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

// const callAllEvents = () => {
//   getAllEvents().then((eventsArray) => {
//     dom.eventsAdded(eventsArray);
//   }).catch((err) => {
//     console.error('Failed To Load all events: ', err);
//   });
// };

module.exports = {
  // callAllEvents,
  getAllEvents,
};
