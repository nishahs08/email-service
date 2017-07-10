"use strict";

const mongoose = require('mongoose')
const User = require('./../../models/user');

module.exports = {
	index (req, res) {
		// Please notice that we are using promises instead of callback functions to access User model
		User.find({})
			.then(users => res.json(users))
			.catch(error => res.json(error));

		//	With callback function
		/* User.find({}, function (err, users) {
			if (err) res.json(err);
			else res.json(users);
		}) */
	},

	create (req, res) {
		// Email and password are to sent in request body

		// First way
		User.create({
			"email": req.body.email,
			"password": req.body.password
		})
			.then(user => res.json(user))
			.catch(err => res.json(err));

		//	Second way

		/* let user = new User({
			"email": req.body.email,
			"password": req.body.password
		});

		user.save()
			.then(user => res.json(user))
			.catch(err => res.json(err)); */

		//	Third way
		/* let user = new User();

		user.email = req.body.email
		user.password = req.body.password;

		 user.save()
		 .then(user => res.json(user))
		 .catch(err => res.json(err)); */
	}
};