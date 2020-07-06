
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TodoList').del()
    .then(function () {
      // Inserts seed entries
      return knex('TodoList').insert([
        {id: 1, Tasks: 'Eat', Description:'Eat dinner', Priority:2, Completed:false},
        {id: 2, Tasks: 'Eat', Description:'Eat Lunch', Priority:2, Completed: true},
      ]);
    });
};
