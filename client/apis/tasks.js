import request from 'superagent'

const apiUrl = 'http://localhost:3000/tasks'


export function listTasks() {
  request.get('/')
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function addTaskAPI(task) {
  return request
    .post(apiUrl)
    .send(task)
    .then(res => {
      console.log('lh',res.body)
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
}



export function updateTask(task, id) {
  request.put(`/${id}`)
    .send(task)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function deleteTaskAPI(id) {
  return request.delete(`/tasks/${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
}