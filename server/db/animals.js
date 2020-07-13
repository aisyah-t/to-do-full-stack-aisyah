const connection = require('./connection')

// function getAnimalSummaries(db = connection) {
//   return db('animals')
//     .join('nouns', 'animals.id', 'nouns.animal_id')
//     .select('animals.id as animal_id', 'animals.name', 'nouns.word', 'nouns.id as noun_id')
// }

function getAnimalSummaries(db = connection) {
  return db('animals')
    .join('nouns', 'animals.id', 'nouns.animal_id')
    .select('animals.id as animal_id', 'animals.name', 'nouns.word', 'nouns.id as noun_id')
}

module.exports = {
  getAnimalSummaries,
}