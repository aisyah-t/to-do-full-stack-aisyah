const config = require('../../knexfile').development
const db = require('knex')(config)



function getTasks() {
    return db('ToDo')
        .then(posts => posts.map(parseParagraphs))   
        .catch(errr => console.log("an error happened in getTasks in server/db/db.js", errr.message))  
}

function getTask(id) {
    return db('ToDo')
        .where('id', id)
        .first()
        .then(task => {
            // task.paragraphs = JSON.parse(task.paragraphs)
            return task
        })
        .catch(err => console.log("an error happened in getTask in server/db/db.js", err))  

}

function createTask(task) {
    task.complete = false

    // task.paragraphs = JSON.stringify(task.paragraphs)

    return db('ToDo')
        .insert(task)
        .then(([id]) => id)
        .catch(err => console.log("an error happened in createTask in server/db/db.js", err))  

}

function updateTask(task) {
    // task.paragraphs = JSON.stringify(task.paragraphs)

    return db('ToDo')
        .update(task)
        .where('id', task.id)
        .catch(err => console.log("an error happened in updateTask in server/db/db.js", err))  

}

function deleteTask(id) {
    return db('ToDo')
        .delete()
        .where('id', id)
        .catch(err => console.log("an error happened in deleteTask in server/db/db.js", err))  


}


function parseParagraphs(post) {
    // post.paragraphs = JSON.parse(post.paragraphs)

    return post
}


module.exports = {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask
}