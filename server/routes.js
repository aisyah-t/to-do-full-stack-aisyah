const express = require('express')
const db = require('./db/db')
const router = express.Router()


router.get('/', (req, res) => {
  db.getTodos()
      .then(tasks => {
          res.json(tasks)
      })
      .catch(err => {
          console.log('error!', err)
          res.status(500).send(err.message)
      })
})

router.patch('/:id', (req, res) => {
    db.updateTask(req.params.id, task)
        .then(() => {
            return db.getTodos(req.params.id)
            .then(() => {
                res.json({})
            })
        })
})


module.exports = router