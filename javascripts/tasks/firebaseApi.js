// CREATE

const saveNewTask = (newTask) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `https://nutshell-flying-buttresses.firebaseio.com/tasks`,
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

module.exports = {
  saveNewTask,
  viewSavedTasks,
};
