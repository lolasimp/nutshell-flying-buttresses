const dom = require('./dom');

const addTaskBtn = () => {
  $('#add-task-btn').on('click', (e) => {
    e.preventDefault();
    const ui = grabUserInput();
    dom.newTaskToAdd(ui);
  });

  $('#add-task-btn').keypress((e) => {
    e.preventDefault();
    const ui = grabUserInput();
    dom.newTaskToAdd(ui);
  });
};

const grabUserInput = () => {
  const newInput = $('#task-add').val();
  return newInput;
};

const initializer = () => {
  addTaskBtn();
};

module.exports = {
  initializer,
};
