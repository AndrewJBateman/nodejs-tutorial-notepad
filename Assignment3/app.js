const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');
const notFoundRoute = require('./routes/404');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoutes);
app.use(homeRoutes);
app.use(notFoundRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3005, () => {
	console.log(`Server listening on port 3005`);
});
