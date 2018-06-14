// let newTask = '';

// create panel for new task
const newTaskToAdd = (taskToAdd) => {
  const domString =
    `<div class="panel panel-default">
      <div class="panel-body">
        ${taskToAdd}
      </div>
    </div>`;

  printToDom('where-tasks-live', domString);
};

// universal print function
const printToDom = (whereToPrint, task) => {
  $(`#${whereToPrint}`).html(task);
};

module.exports = {
  newTaskToAdd,
};
