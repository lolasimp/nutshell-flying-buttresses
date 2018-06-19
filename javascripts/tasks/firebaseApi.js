// CREATE

const saveNewTask = (newTask) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `https://nutshell-flying-buttresses.firebaseio.com/tasks.json`,
      data: JSON.stringify(newTask),
    })
      .then((newUniqueKey) => {
        resolve(newUniqueKey);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// READ
const viewSavedTasks = () => {
  return new Promise((resolve, reject) => {
    const tasksPlusFirebaseKeys = [];
    $.ajax(`https://nutshell-flying-buttresses.firebaseio.com/tasks.json`)
      .done((allTasks) => {
        if (allTasks !== null) {
          Object.keys(allTasks).forEach((key) => {
            allTasks[key].id = key;
            tasksPlusFirebaseKeys.push(allTasks[key]);
          });
        }
        resolve(tasksPlusFirebaseKeys);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

// UPDATE
const updateTask = (modifiedTask, taskId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `https://nutshell-flying-buttresses.firebaseio.com/tasks/${taskId}.json`,
      data: JSON.stringify(modifiedTask),
    })
      .then((updatedTaskFromFirebase) => {
        resolve(updatedTaskFromFirebase);
      })
      .catch((errrrr) => {
        reject(errrrr);
      });
  });
};

// DELETE
const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `https://nutshell-flying-buttresses.firebaseio.com/tasks/${taskId}.json`,
    })
      .then((theVoid) => {
        resolve(theVoid);
      })
      .catch((oops) => {
        reject(oops);
      });
  });
};

module.exports = {
  saveNewTask,
  viewSavedTasks,
  updateTask,
  deleteTask,
};
