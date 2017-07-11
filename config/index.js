"use strict";

// Attach env file options on to process.env
require('dotenv').config();

const expressConfig = require('./express');
const dbConfig = require('./db');
const router = require('./routers');

const bodyParser = require('body-parser');

// Exporting a function that will be called by bootstrap/app.js to configure app.
// This function accepts a reference to express app.
function ConfigureApp (app) {
	dbConfig();

	expressConfig.configureExpress(app);
	
	console.log('hkh');
	console.log("nisha singh",expressConfig);
}
module.exports = ConfigureApp;