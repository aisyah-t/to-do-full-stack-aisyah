import request from 'superagent'

const apiUrl = '/tasks'


export function listTasks() {
  request.get('/')
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function addTaskAPI(task) {
  return request.post(apiUrl)
    .send(task)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
}



export function updateTaskAPI(task) {
  return request.put(`${apiUrl}/${task.id}`)
    .send(task)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
}

export function deleteTaskAPI(id) {
  return request.delete(`${apiUrl}/${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
}