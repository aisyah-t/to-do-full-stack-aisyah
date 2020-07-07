
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'vaccuum', taskDetails: 'vaccuum', priority: false, completed: true},
        {id: 2, task: 'buy groceries', taskDetails: 'buy groceries today', priority: true, completed: false},
        {id: 3, task: 'third task', taskDetails: 'do third task', priority: false, completed: false},
      ]);
    });
};
