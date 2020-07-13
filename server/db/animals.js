const connection = require('./connection')

function getAnimalSummaries(db = connection) {
  return db('animals')
    .select('name', 'nouns')
}

module.exports = {
  getAnimalSummaries,
}