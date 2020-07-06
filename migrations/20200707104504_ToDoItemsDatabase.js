exports.up = (knex, Promise) => {
    return knex.schema.createTable('ToDoDB', (table) => {
      table.increments('id').primary()
      table.string('task')
      table.integer('done_status')
    })
  }

exports.down = (knex, Promise) => {
return knex.schema.dropTable('ToDoDb')
}


