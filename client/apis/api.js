import request from 'superagent'

const todosUrl = 'http://localhost:3000/api/v1/todos/'

export function getTodosApi () {
  return request
    .get(todosUrl)
    .then(response => response.body)
}

// export function makeTaskApi (todo) {
//   return request
//     .post(todoUrl)
//     .send(todo)
//     .then(response => response.body)
// }

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