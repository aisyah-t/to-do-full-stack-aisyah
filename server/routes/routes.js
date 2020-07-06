const express = require('express')
const db = require('../db/connection')
const router = express.Router()
const api = require('./api')


router.get('/', (req, res) => {
  db.getTodos()
      .then(task => {
          res.json(task)
      })
      .catch(err => {
          console.log('error!', err)
          res.status(500).send(err.message)
      })
})


module.exports = router