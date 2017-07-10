"use strict";

const express = require('express');
const app = express();

/* Requiring config/index.js which exports a function and passing it app reference to configure express app */
const configureApp = require('./../config');

configureApp(app);

/* Exporting configured app to be used in root/index.js */
module.exports = app;