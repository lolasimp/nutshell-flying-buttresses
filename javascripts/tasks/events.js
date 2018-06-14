const dom = require('./dom');
const firebaseApi = require('./firebaseApi');

const addTaskBtn = () => {
  $('#add-task-btn').on('click', (e) => {
    e.preventDefault();
    const ui = grabUserInput();
    dom.newTaskToAdd(ui);
    saveTasktoFbEvent();
  });

  $('#add-task-btn').keypress((e) => {
    e.preventDefault();
    const ui = grabUserInput();
    dom.newTaskToAdd(ui);
    saveTasktoFbEvent();
  });
};

const saveTasktoFbEvent = () => {
  $(document).on('click', '#add-task-btn', (e) => {
    const newestTask = grabUserInput();

    const taskToAdd = {
      userUid: '5ykBb0xyadPZLgH4EPO4i88HIql2',
      task: `${newestTask}`,
      isCompleted: false,
    };

    firebaseApi.saveNewTask(taskToAdd)
      .then(() => {
        console.log('Task saved!');
      })
      .catch((error) => {
        console.error(`I'm gonna give it to you straight, something went wrong when saving your task.`, error);
      });
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
