// let newTask = '';

// create panel for new task
const newTaskToAdd = (taskArray) => {
  console.log(taskArray);

  let domString = '';
  Object.keys(taskArray).forEach((task) => {
    console.log(task);
    domString += `<div class="panel panel-default">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `${task}`;
    domString +=   `</div>`;
    domString += `</div>`;
  });

  printToDom('where-tasks-live', domString);
};

// universal print function
const printToDom = (whereToPrint, task) => {
  $(`#${whereToPrint}`).html(task);
};

module.exports = {
  newTaskToAdd,
};
