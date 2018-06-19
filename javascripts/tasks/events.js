const dom = require('./dom');
const firebaseApi = require('./firebaseApi');

// Create Tasks

const addTaskBtn = () => {
  $('#add-task-btn').on('click', (e) => {
    e.preventDefault();
    saveTasktoFbEvent();
  });
};

const saveTasktoFbEvent = () => {
  const newestTask = grabUserInput();

  const taskToAdd = {
    userUid: '5ykBb0xyadPZLgH4EPO4i88HIql2',
    task: `${newestTask}`,
    isCompleted: false,
  };

  firebaseApi.saveNewTask(taskToAdd)
    .then(() => {
      getAllTasks();
    })
    .catch((error) => {
      console.error(`I'm gonna give it to you straight, something went wrong when saving your task.`, error);
    });
};

const grabUserInput = () => {
  const newInput = $('#task-add').val();
  return newInput;
};

// Read Tasks
const getAllTasks = () => {
  firebaseApi.viewSavedTasks()
    .then((tasksArray) => {
      dom.readTasks(tasksArray);
    })
    .catch((errr) => {
      console.error('Something fudged up while pulling data from Firebase', errr);
    });
};

const initializer = () => {
  addTaskBtn();
  getAllTasks();
};

module.exports = {
  initializer,
};
