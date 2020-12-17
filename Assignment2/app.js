const express = require("express");

const app = express();

//app.use([path,] callback [, callback...])
//note, path defaults to “/” if no path specified.

//path has to begin with /users
app.use("/users", (req, res, next) => {
	console.log("Middleware /users route");
	res.send("<p>Users page</p>");
	next();
});

app.use("/", (req, res, next) => {
	console.log("Middleware / common route");
	res.send("<p>Welcome to the Home page</p>");
});

const port = 5000;
app.listen(port, () => {
	console.log("Listening on port " + port);
});
