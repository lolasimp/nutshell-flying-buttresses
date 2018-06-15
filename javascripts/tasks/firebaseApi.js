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
  const tasksPlusFirebaseKeys = [];
  return new Promise((resolve, reject) => {
    $.ajax(`https://nutshell-flying-buttresses.firebaseio.com/tasks.json`)
      .then((allTasks) => {
        if (allTasks !== null) {
          Object.keys(allTasks).forEach((key) => {
            allTasks[key].id = key;
            tasksPlusFirebaseKeys.push(allTasks[key]);
          });
        }
        resolve(allTasks);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveNewTask,
  viewSavedTasks,
};
