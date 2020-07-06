
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Send off parcel', details: 'By end of the week', priority: 'medium', completed: false},
        {id: 2, task: 'Make bed', details: 'Change sheets this week', priority: 'low', completed: false},
        {id: 3, task: 'Feed kitties', details: '1 teaspoon wet food each', priority: 'high', completed: false}
      ]);
    });
};
