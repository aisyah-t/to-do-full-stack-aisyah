
const express = require('express')
const db = require('../db/animals')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAnimalSummaries()
  .then(animals => {
    res.json(animals)
  })
})

module.exports = router