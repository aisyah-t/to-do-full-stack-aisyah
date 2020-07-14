
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
      table.integer('id').primary()
      table.string('task')
      table.string('task_details')
      table.boolean('priority')
      table.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
