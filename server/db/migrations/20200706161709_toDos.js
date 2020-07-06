
exports.up = function(knex) {
  return knex.schema.createTable('toDos', (table) => {
      table.increments('id').primary()
      table.string('to_do')
      table.string('priority')
      table.boolean('completed')
  })
}

exports.down = function(knex) {
    return knex.schema.dropTable('toDos')
}
