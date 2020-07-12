const connection = require('./connection')

function getAnimalSummary (db = connection) {
  return db('animals')
    .select('name', 'nouns')
}

module.export = {
  getAnimalSummary,
}