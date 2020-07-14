
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'washing', task_details: 'whites and darks', priority: 'true', completed: 'false'},
        {id: 2, task: 'clean kitchen', task_details: 'mop floor', priority: 'false', completed: 'false'},
        {id: 3, task: 'make bed', task_details: 'clean sheets', priority: 'false', completed: 'false'}
      ]);
    });
};
