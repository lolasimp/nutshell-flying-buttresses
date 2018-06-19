// let newTask = '';

// read tasks from fb
const readTasks = (taskArray) => {
  let domString = '';
  taskArray.forEach((task) => {
    domString += `<div class="panel panel-default task" data-firebase-id="${task.id}" data-user-uid="${task.userUid}">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `${task.task}`;
    domString +=     `<div class="pull-right">`;
    if (`${task.isCompleted}` === 'true') {
      domString +=      `<a class="margin complete-task"><span class="glyphicon glyphicon-saved check-mark" aria-hidden="true"></span></a>`;
    } else {
      domString +=      `<a class="margin complete-task"><span class="glyphicon glyphicon-ok check-mark" aria-hidden="true"></span></a>`;
    }
    domString +=      `<a class="margin delete-task"><span class="glyphicon glyphicon-remove remove-mark" aria-hidden="true"></span></a>`;
    domString +=     `</div>`;
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
