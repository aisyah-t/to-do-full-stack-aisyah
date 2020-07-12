import request from 'superagent'

const todosUrl = 'http://localhost:3000/api/v1/todos/'

export function getTodosApi() {
  return request
    .get(todosUrl)
    .then(response => response.body)
}

export function addTaskApi(task) {
  return request
    .post(todosUrl)
    .send(task)
    .then(response => request.body)
}

export function deleteTaskApi(id) {
  return request
    .delete(todosUrl + id)
    .then(response => {
      return response.body
    })
}

export function updateTaskApi(task) {
  // console.log(task)
  return request
    .patch(todosUrl + task.taskId)
    .send(task)
    .then(response => {
      return response.body
    })
}
