const express = require('express')
const db = require('../db/db')
const router = express.Router()
//const api = require('./api')


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


module.exports = router