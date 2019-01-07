const express = require('express');

const users = require('./home').users;
const totalUsers = users.length;

const router = express.Router();
router.get('/users', (req, res, next) => {
	res.render('users', {
		users,
		pageTitle: 'Users',
		totalUsers: totalUsers 
	});
});

module.exports = router;