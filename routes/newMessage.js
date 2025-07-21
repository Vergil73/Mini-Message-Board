// routes/messages.js
const { Router } = require("express");
const routes = Router();
const messages = require("../data/database");

routes.get("/", (req, res) => {
    res.render("form", { title: "New Messages" }  );
});

// Post request from form.ejs
routes.post("/", (req, res) => {
    const user = req.body.user;
    const text = req.body.text;
    const added = new Date();
    messages.push({user: user, text: text, added: added});
    res.redirect("/");
});

module.exports = routes;