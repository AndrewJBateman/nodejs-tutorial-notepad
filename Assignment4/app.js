const path = require("path");
const express = require("express");

const homeRoute = require("./routes/home").routes;
const usersRoute = require("./routes/users");
const notFoundRoute = require("./routes/404");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use(homeRoute);
app.use(usersRoute);
app.use(notFoundRoute);

const port = 5000;
app.listen(port, () => {
	console.log("Listening on port " + port);
});
