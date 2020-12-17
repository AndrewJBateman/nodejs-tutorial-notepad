//  path module provides utilities for working with file and directory paths.
const path = require("path");
const express = require("express");

const app = express();

// set up route paths
const usersRoutes = require("./routes/users");
const homeRoutes = require("./routes/home");
const notFoundRoute = require("./routes/404");

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// use to serve static files such as the CSS file here.
// root is shown defined as the public folder.
app.use(express.static(path.join(__dirname, "public")));

// use routes
app.use("/users", usersRoutes);
app.use(homeRoutes);
app.use(notFoundRoute);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000, () => {
	console.log(`Server listening on port 5000`);
});
