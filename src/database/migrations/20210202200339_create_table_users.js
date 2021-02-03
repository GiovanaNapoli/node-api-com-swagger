
exports.up = function (knex) {
  return knex.schema.createTable("user", table => {
    table.increments("id");
    table.text("name").unique().notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
