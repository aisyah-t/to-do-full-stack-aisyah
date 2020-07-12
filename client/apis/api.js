import request from 'superagent'


const apiurl = "http://localhost:3000/api/v1/todos/"

export function gettasks() {
    console.log("api is getting tasks")
    return request
    .get(apiurl)
    .then(response => response.body)
    .catch(err => console.log(err))
}

export function createtasks(data) {
    console.log("api is creating a task ")
    console.log("api recived ", data)
    return request
    .post(apiurl)
    .send(data)
    .then(response => response.body)
}

export function deletetaskapi(data) {
    console.log("api is deleteing task")
    console.log("api recived ", data)
    return request
    .delete(apiurl)
    .send({data})
    .then(response => response.body)
}
