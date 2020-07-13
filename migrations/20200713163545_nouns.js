
exports.up = function(knex) {
  return knex.schema.createTable('nouns', (table) => {
    table.increments('id').primary()
    table.string('noun')
    table.integer('animal_id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('nouns')
}
