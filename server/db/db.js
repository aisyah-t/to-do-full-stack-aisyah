
const config = require('../../knexfile').development
const connection = require('knex')(config)

function getTodos (db = connection) {
  return db('todos').select()
}

module.exports = {
  getTodos
}