
exports.up = (knex, promise ) => {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('info')
        table.boolean('priority')
        table.date('due')
        table.time('started')
      })
};

exports.down = function(knex) {
  
};
