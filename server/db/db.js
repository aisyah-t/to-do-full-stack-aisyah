
const config = require('../../knexfile').development
const connection = require('knex')(config)

function getTodos (db = connection) {
  return db('todos').select()
}

function updateTask (id, task, db = connection) {
  return db('todos').update(task).where('id', id)
}

module.exports = {
  getTodos,
  updateTask
}