
const express = require('express')
const db = require('../db/animals')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAnimalsAndTheirNouns()
  .then(animals => {
    res.json(animals)
  })
})
// where do you get the nouns and animals
module.exports = router