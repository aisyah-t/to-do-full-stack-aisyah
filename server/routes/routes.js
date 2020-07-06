const express = require('express')
const db = require ('../db/connection')
const router = express.Router()


router.get('/', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.send(tasks)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.post('/', (req, res) => {
    const newTask = req.body

    db.addTask(newTask)
        .then(taskId => {
            res.send(taskId)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

module.exports = router