const { hash } = require("../../api/helpers/account");

const testUser = {
    username: "testuser",
    password: hash("userpass12"),
    email: "a@a.com",
    sessionId: "123"
};

const categories = ["Workout", "Plant Care", "Pet Care"];

const things = [
    {
        name: "Jug hang/pullups",
        category: "Workout",
        info: {
            type: "todo",
            frequency: "daily"
        }
    }
];

module.exports = { testUser, categories, things };
