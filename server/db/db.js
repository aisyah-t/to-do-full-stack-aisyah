
const config = require('../../knexfile').development
const connection = require('knex')(config)

function getTasks (db = connection) {
  return db('todos').select()
}

module.exports = {
  getTasks
}