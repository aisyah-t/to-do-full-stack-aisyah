
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nouns').del()
    .then(function () {
      // Inserts seed entries
      return knex('nouns').insert([
        {id: 1, noun: "sord", animal_id: 1},
        {id: 2, noun: "badling", animal_id: 1},
        {id: 3, noun: "waddling", animal_id: 1},
        {id: 4, noun: "clowder", animal_id: 2},
        {id: 5, noun: "pride", animal_id: 2}
      ])
    })
}
