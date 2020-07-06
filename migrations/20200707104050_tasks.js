
exports.up = function(knex) {
  return knex.schema.createTable('tasks', function (table) {
      table.increments('id').primary()
      table.string('task')
      table.string('priority')
      table.string('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
