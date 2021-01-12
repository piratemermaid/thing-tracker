const { keyBy } = require("lodash");
const { testUser, categories, things } = require("../data/testData");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }

    await knex("users").insert(testUser);

    const categoriesByName = keyBy(
        await knex("categories")
            .insert(
                categories.map((name) => {
                    return { name };
                })
            )
            .returning("*"),
        "name"
    );

    await knex("users_categories").insert(
        categories.map((name) => {
            return { user_id: 1, category_id: categoriesByName[name].id };
        })
    );

    const thingsByKey = keyBy(
        await knex("things")
            .insert(
                things.map(({ name, category, info }) => {
                    return {
                        name,
                        key: `${info.type}-${category}-${name}`,
                        category_id: categoriesByName[category].id,
                        info
                    };
                })
            )
            .returning("*"),
        "key"
    );

    await knex("users_things").insert(
        things.map(({ name, category, info }) => {
            return {
                user_id: 1,
                thing_id: thingsByKey[`${info.type}-${category}-${name}`].id
            };
        })
    );
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};

const tableOrder = [
    "users",
    "categories",
    "users_categories",
    "things",
    "users_things"
];
