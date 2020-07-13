const connection = require('./connection')

// function getAnimalSummaries(db = connection) {
//   return db('animals')
//     .join('nouns', 'animals.id', 'nouns.animal_id')
//     .select('animals.id as animal_id', 'animals.name', 'nouns.word', 'nouns.id as noun_id')
// }

function getAnimalsAndTheirNouns(db = connection) {
  return db('animals')
    .then(animals => {
      // loop animals and return nouns where ids match
      // knex functions return arrays.
      return Promise.all(animals.map(animal, index => {
        return db('nouns').where('id', animals[index].id)
        .then(nounArray => {
          return animals[index].nouns = nounArray
        })
      }))
      // get array of nouns and insert into animal object
      // - how keep animal object?
      // - can just keep passing them after .thens
    })
}

module.exports = {
  // getAnimalSummaries,
  getAnimalsAndTheirNouns,
}

// get animals and their ids
// use their ids to get nouns that have a matching id
//o -get list of noun objects
//o -- must loop? (Ross removed loop at some point in Lecture)
// remove ids from noun objects
// return molded js array of objects