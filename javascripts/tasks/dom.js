// let newTask = '';

// read tasks from fb
const readTasks = (taskArray) => {
  let domString = '';
  taskArray.forEach((task) => {
    domString += `<div class="panel panel-default">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `${task.task}`;
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
  readTasks,
};
