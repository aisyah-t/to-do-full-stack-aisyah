import request from 'superagent'

const taskUrl = 'api/v1/todos/'

export function getTasks() {
  return request
    .get(taskUrl)
    .then(response => response.body)
}

// export function addTask(task) {
//   return request
//     .post(taskUrl)
//     .send(task)
//     .then(response => {
//       return response.body
//     })
// }

export function updateTask(task, id) {
  return request.patch(taskUrl + `${id}`)
    .send(task)
    .then(response => response.body)
}

// export function deleteTask(id) {
//   return request
//     .delete(taskUrl + id)
//     .then(response => response.body)
// }