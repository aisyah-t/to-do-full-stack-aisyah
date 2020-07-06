
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('TodoList', (table) => {
        
        table.increments('id').primary()
        table.string('Tasks')
        table.string('Description')
        table.integer('Priority')
        table.boolean('Completed')
      })
}


exports.down = function(knex, Promise) {

    return knex.schema.dropTable('TodoList')
  
}