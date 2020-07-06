const connection = require("./connection")

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
}

function getTasks(db = connection) {
  return db("tasks").select()
}

function addTask(task, db = connection) {
  return db("tasks").insert(task)
}

function updateTask(id, task, db = connection){
  return db('tasks').where('id', id).update(task)
}

function deleteTask(id, db = connection){
  return db('tasks').where('id', id).del()
}