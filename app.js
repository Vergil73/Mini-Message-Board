// app.js

const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

// Serve static file i.e stylr.css
app.use(express.static('public'));


// Parse form data into request body
app.use(express.urlencoded({extended: true}));

// For Views
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

// Normal message(index)
const messageRoute = require("./routes/indexRoute");
app.use("/", messageRoute); // Index/Homepage
app.use("/post", messageRoute); // Post page


// Form request
const formRoute = require("./routes/newMessage");
app.use("/form", formRoute); // Post request
app.use("/newMessage", formRoute); // Submit post request

// Error messages
// Handle real route errors(500)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("404 Not Found");
});

// Handle 404 errors if route is not matched
app.use((req, res) => {
    res.status(404).send("It doesn't exist");
});

// listens to the port
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
