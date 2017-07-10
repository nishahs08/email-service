"use strict";

// Attach env file options on to process.env
require('dotenv').config();

const dbConfig = require('./db');
const router = require('./routers');

// Exporting a function that will be called by bootstrap/app.js to configure app.
// This function accepts a reference to express app.
function ConfigureApp (app) {
	dbConfig();
	app.use('/api/v1', router);
}

module.exports = ConfigureApp;