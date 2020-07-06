
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Meal prep', priority: 'High', completed: 'No'},
        {id: 2, task: 'Study', priority: 'Medium',  completed: 'Yes'},
        {id: 3, task: 'Muay Thai', priority: 'High', completed: 'No'}
      ]);
    });
};
