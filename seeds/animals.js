
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'duck', nouns: '["sord", "badling", "waddling"]'},
        {id: 2, name: 'cat', nouns: '["clowder", "pride"]'},
      ]);
    });
};