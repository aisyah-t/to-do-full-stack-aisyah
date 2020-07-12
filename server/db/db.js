const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getTodos,
    createTask,
    deleteTask,
    editTask,
}

function getTodos(db = connection) {
  return db('tasks').select()
}

function createTask(todo, db = connection) {
  
  console.log("adding data to data base")
  console.log(todo.name)
  return db('tasks')
    .insert({
      name: todo.name,
      info: todo.info,
      priority: (todo.priority == "on") ? 1 : 0,
      due: todo.due,
      started: Date()
  })
}

function deleteTask(data, db = connection) {
  console.log("running delete db func")
  console.log(data.data)
  return db('tasks').where("name", data.data).delete()
}

function editTask(data, db = connection) {
console.log("running edit task")
return db('tasks')

}