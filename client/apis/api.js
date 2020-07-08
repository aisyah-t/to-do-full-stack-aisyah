import request from "superagent"

const Url = "http://localhost:3000/api/v1/tasks/"

export function getTasks() {
  return request.get(Url).then((response) => response.body)
}

export function newTask(task) {
  return request
    .post(Url)
    .send(task)
    .then((response) => response.body)
}

export function editTask(id, task) {
  return request
    .put(Url + id)
    .send(task)
    .then((response) => response.body)
}

export function killTask(task) {
  return request
    .del(Url)
    .send(task)
    .then((response) => response.body)
}
