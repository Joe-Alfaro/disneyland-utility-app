exports.up = (knex, Promise) => (
  knex.schema
    .createTable('rides', table => {
      table.integer('id').unique().notNullable();
      table.text('name').unique().notNullable();
      table.string('status', 255).notNullable();
      table.string('fastPassStartTime').notNullable();
      table.string('fastPassEndTime').notNullable();
      table.string('park').notNullable();
      table.boolean('singleRider').notNullable();
      table.integer('waitTime').notNullable();
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('rides')
);
