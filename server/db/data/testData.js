const { hash } = require("../../api/helpers/account");

const testUser = {
    username: "testuser",
    password: hash("userpass12"),
    email: "a@a.com",
    sessionId: "123"
};

const categories = ["Workout", "Plant Care", "Pet Care", "Adulting", "Notes"];
const things = [
    {
        name: "Jug hang/pullups",
        category: "Workout",
        info: {
            type: "todo",
            recurring: true,
            frequency_type: "days",
            frequency_amount: 1
        }
    },
    {
        name: "Endurance laps",
        category: "Workout",
        info: {
            type: "todo",
            recurring: true,
            variable_frequency: true,
            frequency: "every gym visit"
        }
    },
    {
        name: "Water palm plant",
        category: "Plant Care",
        info: {
            type: "todo",
            recurring: true,
            frequency_range: true,
            frequency_type: "days",
            frequency_range_min: 8,
            frequency_range_max: 10
        }
    },
    {
        name: "Amazon return",
        category: "Adulting",
        info: {
            type: "todo",
            recurring: false,
            deadline: "02/01/2021" //todo: make date
        }
    },
    {
        name: "Climb at gym",
        category: "Workout",
        info: {
            type: "activity",
            custom_fields: [
                {
                    type: "string",
                    name: "location",
                    entry: "Rockspot PVD"
                },
                {
                    type: "text",
                    name: "notes",
                    entry: "Sent 5.9 on lead. Topped 5.11- on TR in 2 tries."
                }
            ]
        }
    },
    {
        name: "Daily mood",
        category: "Notes",
        info: {
            type: "rank",
            rank_min: 1,
            rank_max: 5
        }
    }
];

module.exports = { testUser, categories, things };
