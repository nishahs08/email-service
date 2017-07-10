"use strict";

// Attach env file options on to process.env
require('dotenv').config();

const dbConfig = require('./db');

// Exporting a function that will be called by bootstrap/app.js to configure app.
// This function accepts a reference to express app.
module.exports = function (app) {

	dbConfig();
}