
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'make bed', task_details: 'need to do', priority: true, completed: false},
        {id: 2, task: 'clean car', task_details: 'need to do', priority: false, completed: false},
        {id: 3, task: 'wash dog', task_details: 'need to do', priority: true, completed: false}
      ]);
    });
};
