const connection = require('./connection')

function getTasks(db = connection) {
    return db('tasks')
}

function addTask(task, db = connection) {
    console.log("this works");
    return db('tasks').insert({
        task: task.task,
        task_details: task.task_details,
        priority: task.priority,
        completed: task.completed,
    })
}

function deleteTask(id, db = connection) {
    return db('tasks').where('id', id).delete()
}

function updateTask(task, id, db = connection) {
    return db('tasks').where('id', id).update({
        task: task.task,
        task_details: task.task_details,
        priority: task.priority,
        completed: task.completed,
    })
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask,
}