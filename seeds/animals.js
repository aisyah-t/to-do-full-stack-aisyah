
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'ducks', nouns: JSON.stringify(["sord", "badling", "waddling"])},
        {id: 2, name: 'cats', nouns: JSON.stringify(["clowder", "pride"])},
      ])
    })
}