const connection = require('./connection')

module.exports = {
  listTasks,
  addTask,
  updateTask, 
  deleteTask,
}


function listTasks(db = connection) {
  return db('tasks').select().orderBy('priority', 'asc')
}

function addTask(task, db = connection) {
  return db('tasks').insert(task)
    .then(ids => {
      return ids[0]
    })
}

function updateTask(task, id, db = connection) {
  return db('tasks').update(task).where('id', id)
}

function deleteTask(id, db = connection) {
  return db('tasks').where('id', id).delete()
}