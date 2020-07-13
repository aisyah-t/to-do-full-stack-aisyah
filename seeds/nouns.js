
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nouns').del()
    .then(function () {
      // Inserts seed entries
      return knex('nouns').insert([
        {id: 1, word: "sord", animal_id: 1},
        {id: 2, word: "badling", animal_id: 1},
        {id: 3, word: "waddling", animal_id: 1},
        {id: 4, word: "clowder", animal_id: 2},
        {id: 5, word: "pride", animal_id: 2}
      ])
    })
}
