exports.up = (knex, Promise) => (
  knex.schema
    .createTable('rides', table => {
      table.integer('id')
        .unique()
        .notNullable();
      table.text('name')
        .unique()
        .notNullable();
      table.string('status', 255)
        .notNullable();
      table.boolean('fastPass')
        .notNullable();
      table.integer('waitTime');
    })
);

exports.down = (knex, Promise) => {
  knex.schema
    .dropTableIfExists('rides');
};
