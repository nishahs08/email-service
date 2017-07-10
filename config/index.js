"use strict";

// Attach env file options on to process.env
const a = require('dotenv');
a.config();

// Exporting a function that will be called by bootstrap/app.js to configure app.
// This function accepts a reference to express app.
module.exports = function (app) {

}