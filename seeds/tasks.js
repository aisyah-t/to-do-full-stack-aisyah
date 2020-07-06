
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Get milk', details: 'Get dark blue', priority: 'low', completed: false},
        {id: 2, task: 'Make coffee', details: 'Add sugar', priority: 'low', completed: false},
        {id: 3, task: 'Walk dog', details: 'remember doggie bags', priority: 'low', completed: false}
      ]);
    });
};
