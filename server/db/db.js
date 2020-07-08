const connection = require('./connection')


module.exports = {
    getTasksList,
    addTask,
    updateTask,
    deleteTask
}

function getTasksList(db = connection) {
    return db('ToDoDB').select()
}


function addTask(taskObj, db = connection) {
    return db('ToDoDB')
        .insert({
            task: taskObj.task,
            done_status: taskObj.done_status
        })

}

function updateTask(taskObj, db = connection) {
    return db('ToDoDB')
        .where('id', taskObj.id)
        .update({
            task: taskObj.task,
            done_status: taskObj.done_status
        })
}


function deleteTask (id, db = connection) {
    return db ('ToDoDB')
    .where ('id' , id)
    .del()
}


