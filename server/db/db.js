const connection = require("./connection");

module.exports = {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
};

function getTodo(db = connection) {
  return db("todos").select();
}

function addTodo(todo, db = connection) {
  return db("todos").insert({
    task: todo.task,
    task_details: todo.task_details,
    priority: todo.priority,
    completed: todo.completed,
  });
}

function deleteTodo(id, db = connection) {
  return db("todos").where("id", id).delete();
}

function updateTodo(todo, id, db = connection) {
  return db("todos").where("id", id).update({
    task: todo.task,
    task_details: todo.task_details,
    priority: todo.priority,
    completed: todo.completed,
  });
}
