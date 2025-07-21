// routes/indexRouter.js
const { Router } = require("express"); // DESTRUCTURING the Router class from express

const routes = Router(); // Route is now a Router object
const messages = require("../data/database"); // Import database

routes.get("/", (req, res) =>{
    res.render("index", {title: "Mini Messageboard", messages:messages});

});

// Changing the page to form after clicking Post button

routes.get("/", (req, res) => {
    res.render("form", {title:"New Messages"});
});


module.exports = routes; // Exporting the Router instance
