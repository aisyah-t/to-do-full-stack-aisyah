exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toDos').del()
    .then(function () {
      // Inserts seed entries
      return knex('toDos').insert([
        {id: 1, to_do: 'Wash the big car', priority: 'high', completed: false},
        {id: 2, to_do: 'Wash the small car', priority: 'medium', completed: false},
        {id: 3, to_do: 'Wash the medium car', priority: 'low', completed: true}
      ])
    })
}
