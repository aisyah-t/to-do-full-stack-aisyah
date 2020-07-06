
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ToDoDB').del()
    .then(function () {
      // Inserts seed entries
      return knex('ToDoDB').insert([
        {task: "Pay Jono", done_status: 0},
        {task: "Close some aussie accounts", done_status: 0}, 
        {task: "1 hr Revision", done_status: 1}, 
      ]);
    });
};
