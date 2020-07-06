const connection = require('./connection')

module.exports = {
  listTasks,
  addTask,
  updateTask, 
  deleteTask,
}


function listTasks(db = connection) {
  return db('tasks').select()
}

function addTask(task, db = connection) {
  return db('tasks').insert(task)
    .then(ids => {
      return ids[0]
    })
}

function updateTask(task, id, db = connection) {
  return db('tasks').update(task)
  .then(() => {
    return db('tasks').where('id', id)
  })
}

function deleteTask(id, db = connection) {
  return db('tasks').where('id', id).delete()
}