const express = require('express')
const router = express.Router()
const dbfunctions = require('../db/todos')

router.get('/', (req, res) => {
    dbfunctions.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({message: 'doesnt work'})
        })
})

router.post('/', (req, res) => {
    // console.log(req.body);
    const todo = req.body
    dbfunctions.addTask(todo)
        .then(() => {
            res.send(todo)
        })
        .catch((error) => {
            res.status(500).send(error.message)
        })
})

router.delete('/:id', (req, res) => {
    // console.log("deleting");
    dbfunctions.deleteTask(req.params.id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            res.status(500).send(err.message)
        })
})

router.patch('/:id', (req, res) => {
    console.log(req.body, req.params.id);
    dbfunctions.updateTask(req.body, req.params.id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            res.status(500).send(error.message)
        })
})

module.exports = router