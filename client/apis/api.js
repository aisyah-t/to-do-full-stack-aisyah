import request from 'superagent'

const todosUrl = 'http://localhost:3000/api/v1/todos/'

export function getTodosApi () {
  return request
    .get(todosUrl)
    .then(response => response.body)
}

export function addTaskApi (task) {
  return request
    .post(todosUrl)
    .send(task)
    .then(response => request.body)
}

// export function updateTaskApi (widget){
//   return request
//   .put(widgetUrl)
//   .send(widget)
//   .then(response => response.body)
// }

// export function deleteTaskApi (widget) {
//   return request
//   .delete(widgetUrl)
//   .send(widget)
//   .then(response => response.body)
// }