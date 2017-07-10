const express = require('express');
const morgan = require('morgan');
const parser =require('body-parser');
const userRoute = require('./../controller/user');
const route = require('./../routes/user');
const app = express();
const passport = require('passport')
const User = require('./../models/user');

var LocalStrategy = require('passport-local').Strategy;

app.use(parser.json({ }));
app.use(parser.urlencoded({ extended: false }));
passport.authenticate();
app.use(route);
//app.post('/api/user',userRoute.register);
//app.get('/usersList',userRoute.listOfUsers);

module.exports = app;

