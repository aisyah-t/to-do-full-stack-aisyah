import request from "superagent"

const Url = "http://localhost:3000/api/v1/tasks/"

export function getTasks() {
  return request.get(Url).then((response) => response.body)
}

export function addTasks(task) {
  return request
    .post(Url)
    .send(task)
    .then((response) => response.body)
}

export function updateTasks(task) {
  return request
    .put(Url)
    .send(task)
    .then((response) => response.body)
}

export function deleteTasks(task) {
  return request
    .del(Url)
    .send(task)
    .then((response) => response.body)
}
