
exports.up = function (knex) {
    return knex.schema.createTable("greetings", table => {
        table.increments("id");
        table.string("text");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("greetings")
};
