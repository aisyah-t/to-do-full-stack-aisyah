// const environment = process.env.NODE_ENV || 'development'
// const config = require('../../knexfile')[environment]
// const connection = require('knex')(config)
const connection = require('./connection')


module.exports = {
    getTodo,
    // saveTask,
    // updateTask,
    // deleteTask
  }

function getTodo(db = connection) {
    return db('todos').select()
  }
  
  // function saveTask(todo, db = connection) {
  //   return db('todos')
  //     .insert({
  //       task: todo.task,
  //       taskDetails: todo.task,
  //       priority: todo.priority,
  //       completed: todo.completed
  //   })
  // }
  
  // function updateTask(todo, id, db = connection) {
  //   return db('todos').update(todo).where('id', id)
  // }
  
  // function deleteTask(id, db=connection){
  //   return db('todos').where('id', id).del()
  // }

