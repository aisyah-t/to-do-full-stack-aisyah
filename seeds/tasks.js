exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          name: "clean bathroom",
          details: "shower, toilet, ceiling",
          urgency: false,
          completed: false,
          listed: Date(),
        },
        {
          id: 2,
          name: "renew rego",
          details: "for scooter, expires in 2 months",
          urgency: false,
          completed: false,
          listed: Date(),
        },
        {
          id: 3,
          name: "find job",
          details: "find the job earn the doll hairs",
          urgency: false,
          completed: false,
          listed: Date(),
        },
      ])
    })
}
