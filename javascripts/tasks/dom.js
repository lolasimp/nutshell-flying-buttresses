// create panel for new task
const newTask = (taskToAdd) => {
  const domString =
    `<div class="panel panel-default">
      <div class="panel-body">
        ${taskToAdd}
      </div>
    </div>`;

  printToDom('where-tasks-live', domString);
};

// universal functions
const printToDom = (whereToPrint, task) => {
  $(`#${whereToPrint}`).html(task);
};

module.exports = {
  newTask,
};
