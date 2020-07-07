const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask
  }

function getTask(db = connection) {
    return db('todos').select()
  }
  
  function saveTask(todo, db = connection) {
    return db('todos')
      .insert({
        task: todo.task,
        taskDetails: todo.task,
        priority: todo.priority,
        completed: todo.completed
    })
  }
  
  function updateTask(todo, id, db = connection) {
    return db('todos').update(todo).where('id', id)
  }
  
  function deleteTask(id, db=connection){
    return db('todos').where('id', id).del()
  }

//   function updateTask (todo, db = connection) {
//     return db ('todos')
//     .where ('task' , '=', todo.currentTask)
//     .update ({
//       task: todo.newTask,
//       taskDetails: todo.task,
//       priority: todo.priority,
//       completed: todo.completed
//     })
//   } 