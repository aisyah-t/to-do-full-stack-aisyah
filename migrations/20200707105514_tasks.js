exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary()
    table.string("name")
    table.string("details")
    table.boolean("urgency")
    table.boolean("completed")
    table.date("listed")
  })
}

exports.down = function (knex) {
  return knex.schema.droptTable("tasks")
}
