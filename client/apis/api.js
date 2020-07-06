import request from 'superagent'

const TodoListUrl= 'http://localhost:3000/api/v1/todoList/'

export function getTask () {
    return request
      .get(TodoListUrl)
      .then(response => response.body)
  }
  
  export function addTask (tasks) {
    return request
      .post(widgetUrl)
      .send(widget)
      .then(response => response.body)
  }
  
  export function deleteTask (id) {
    return request
    .delete(`${TodoListUrl}/${id}`)
    .then(response => response)
  }
  
  
  export function editTask (id) {
    return request
    .put(`${TodoListUrl}/${id}`)
    .then(response => response)
  }
  