
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'wash car', info: "wash the blue car", priority: false, due: new Date(2030, 11, 17).toDateString(), started: Date()},
        {id: 2, name: 'fix sink', info: "replace leeky pipe", priority: true, due: new Date(2040, 11, 17).toDateString(), started: Date()},
        {id: 3, name: 'go shopping', info: "buy carrots", priority: false, due: new Date(2050, 11, 17).toDateString(), started: Date()},
      ]);
    });
};
