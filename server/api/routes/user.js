const { Router } = require("express");
const router = new Router();
const models = require("../models/bookshelf_models");
const { Session } = require("../helpers/account");

router.get("/user_things", async (req, res) => {
    const { sessionString } = req.cookies;

    if (!sessionString || !Session.verify(sessionString)) {
        const error = new Error("Invalid session");

        error.status = 400;

        return next(error);
    } else {
        const { username } = Session.parse(sessionString);

        const data = await models.User.forge({ username }).fetch({
            withRelated: ["things"]
        });

        res.send(
            data.toJSON().things.map(({ name, key, info }) => {
                return { name, key, info };
            })
        );
    }
});

module.exports = router;
