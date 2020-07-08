const connection = require("./connection")

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
}

function getTasks(db = connection) {
  return db("tasks")
    .select()
    .then((tasks) => {
      return tasks.map((task) => {
        task.urgency = task.urgency ? "Urgent" : null
        return task
      })
    })
}

function addTask(task, db = connection) {
  return db("tasks")
    .insert(task)
    .then((ids) => ids[0])
  // .then((task) => {
  //   task.urgency = task.urgency ? "Urgent" : "Not-Urgent"
  //   return task
  // })
}

function updateTask(id, task, db = connection) {
  return db("tasks").where("id", id).update(task)
}

function deleteTask(id, db = connection) {
  return db("tasks").where("id", id).del()
}
