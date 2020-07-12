
const connection = require('./connection')


module.exports = {
  getTodo,
  addTodo,
  deleteTodo,
  // updateTask,
}

function getTodo(db = connection) {
  return db('todos').select()
}

function addTodo(todo, db = connection) {
  return db('todos').insert({
    task: todo.task,
    taskDetails: todo.taskDetails,
    priority: todo.priority,
    completed: todo.completed
  })
}

function deleteTodo(id, db=connection){
  return db('todos').where('id', id).delete()
}

  // function updateTask(todo, id, db = connection) {
  //   return db('todos').update(todo).where('id', id)
  // }


