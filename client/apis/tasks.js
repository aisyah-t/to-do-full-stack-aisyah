import request from 'superagent'

export function listTasks() {
  request.get('/')
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function addTask(task) {
  request.post('/')
    .send(task)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function updateTask(task, id) {
  request.put(`/${id}`)
    .send(task)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export function deleteTask(id) {
  request.delete(`/${id}`)
    .then(res => {
      return res.body
    })
    .catch(logError)
}