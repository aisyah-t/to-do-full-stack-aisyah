const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
    db.getToDos()
    .then((toDos) => {
        res.send(toDos)
    })
    .catch(err => {
        res.status(500).send(err.message)
      })
})

router.post('/', (req, res) => {
    db.addToDo(req.body)
    .then(newId => res.json(newId))
    .catch(err => {
        res.status(500).send(err.message)
      })
})

router.put('/:id', (req, res) => {
    db.updateToDo(req.body)
    .then(toDo => res.json(toDo))
    .catch(err => {
        res.status(500).send(err.message)
      })
})

router.delete('/:id', (req, res) => {
    db.deleteToDo(req.params.id)
    .then(toDo => res.json(toDo))
    .catch(err => {
        res.status(500).send(err.message)
      })
})


module.exports = router