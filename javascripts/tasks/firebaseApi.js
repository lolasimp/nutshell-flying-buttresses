const saveNewTask = (newTask) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `https://nutshell-flying-buttresses.firebaseio.com/tasks.json`,
      data: JSON.stringify(newTask),
    })
      .then((newTaskFbUniqueKey) => {
        resolve(newTaskFbUniqueKey);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveNewTask,
};
