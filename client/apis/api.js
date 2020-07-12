import request from 'superagent'


const apiurl = "http://localhost:3000/api/v1/todos/"

export function gettasks() {
   
    return request
    .get(apiurl)
    .then(response => response.body)
    .catch(err => console.log(err))
}

export function createtasks(data) {
   
    return request
    .post(apiurl)
    .send(data)
    .then(response => response.body)
}

export function deletetaskapi(data) {
   
    return request
    .delete(apiurl)
    .send({data})
    .then(response => response.body)
}

export function updatetask(data) {
   
    return request
    .post(apiurl + "update")
    .send({data})
    .then(response => response.body)
}