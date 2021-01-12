exports.up = async function (knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("username").unique().notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("sessionId");
        table.string("reset_password_token");
        table.timestamp("reset_token_expiry");
    });

    await knex.schema.createTable("categories", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("things", (table) => {
        table.increments("id");
        table.string("name");
        table.string("key").unique();
        table.jsonb("info");
        table.integer("category_id").references("id").inTable("categories");
    });

    await knex.schema.createTable("users_categories", (table) => {
        table.increments("id");
        table.integer("user_id").references("id").inTable("users");
        table.integer("category_id").references("id").inTable("categories");
    });

    await knex.schema.createTable("users_things", (table) => {
        table.increments("id");
        table.integer("user_id").references("id").inTable("users");
        table.integer("thing_id").references("id").inTable("things");
    });
};

exports.down = async function (knex) {
    const tableOrder = [
        "users",
        "categories",
        "users_categories",
        "things",
        "users_things"
    ];

    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await knex.schema.dropTableIfExists(tableOrder[i]);
    }
};
