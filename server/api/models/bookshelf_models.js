const { bookshelf } = require("./config");

const User = bookshelf.model("User", {
    tableName: "users",
    things() {
        return this.belongsToMany("Thing", "users_things");
    }
});

const Category = bookshelf.model("Category", {
    tableName: "categories"
});

const Thing = bookshelf.model("Thing", {
    tableName: "things"
});

module.exports = { User, Category, Thing };
