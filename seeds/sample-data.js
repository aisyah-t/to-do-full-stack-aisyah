
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ToDo').del()
    .then(function () {
      // Inserts seed entries
      return knex('ToDo').insert([
        {id: 1, task: 'walk the dog', priority: 'med', complete: false},
        {id: 2, task: 'bake a pie', priority: 'high', complete: true},
        {id: 3, task: 'engage the hyperdrive', priority: 'med', complete: false},
        {id: 4, task: 'hack the grid', priority: 'low', complete: false},
        {id: 5, task: 'alter the matrix', priority: 'high', complete: false}
      ]);
    });
};
