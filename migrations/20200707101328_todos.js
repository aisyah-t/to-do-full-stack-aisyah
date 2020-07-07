
exports.up = function(knex) {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary()
        table.string('task')
        table.string('taskDetails')
        table.boolean('priority')
        table.boolean('completed')
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos')
  
};
