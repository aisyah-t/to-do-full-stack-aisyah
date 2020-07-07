
exports.up = function(knex) {
  return knex.schema.createTable('ToDo', (table) => {
      table.increments('id').primary()
      table.string('task')
      table.string('priority')
      table.boolean('complete')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ToDo')
};
