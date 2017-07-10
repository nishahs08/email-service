const express = require('express');
const morgan = require('morgan');
const parser =require('body-parser');
const userRoute = require('./../controller/user');
const route = require('./../routes/user');
const app = express();

// Requiring this file will make express execute everything in passport.js file, thereby
// setting passport middleware to use localstrategy that you defined in passport.js
require('./../controller/passport');

// This passport require will be usefull to call initialize method on app.use.
const passport = require('passport')
const User = require('./../models/user');

var LocalStrategy = require('passport-local').Strategy;

app.use(parser.json({ }));
app.use(parser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(route);
//app.post('/api/user',userRoute.register);
//app.get('/usersList',userRoute.listOfUsers);

module.exports = app;

