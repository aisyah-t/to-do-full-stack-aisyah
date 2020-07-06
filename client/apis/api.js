import request from 'superagent'

const taskUrl = 'api/v1/tasks/'

export function getTasks() {
  return request
    .get(taskUrl)
    .then(response => response.body)
}