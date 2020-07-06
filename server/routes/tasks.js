const express = require('express')

const router = express.Router()

const db = require('../db/tasks')

router.get('/', (req, res) => {
  db.listTasks()
    .then(tasks => {
      res.json(tasks)
    })
})

router.post('/', (req, res) => {
  

  db.addTask(req.body)
    .then(id => {
      res.json(id)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/:id', (req, res) => {
  const task = {
    task: req.body.task,
    details: req.body.details,
    priority: req.body.priority,
    completed: req.body.completed
}
  db.updateTask(task, req.params.id)
    .then(tasks => {
      res.json(tasks[0])
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.delete('/:id', (req, res) => {
  db.deleteTask(req.params.id) 
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router