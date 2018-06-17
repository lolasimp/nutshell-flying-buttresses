// let newTask = '';

// create panel for new task
const newTaskToAdd = (taskArray) => {
  let domString = '';
  taskArray.forEach((task) => {

    domString += `<div class="panel panel-default">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `${task.task}`;
    domString +=   `</div>`;
    domString += `</div>`;
  });

  printToDom('print-tasks-here', domString);
};

// universal print function
const printToDom = (whereToPrint, task) => {
  $(`#${whereToPrint}`).html(task);
};

module.exports = {
  newTaskToAdd,
};
