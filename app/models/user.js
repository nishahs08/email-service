"use strict";

const mongoose = require('mongoose');
const UserSchema = require('./schemas/user');

// Always define schema for a model in schema folder then simply use that schema to derive a model out of it, like below.
// First parameter to mongoose.model is the name by which we want to register our model
// Second parameter to mongoose.model is the Schema to be used for the model
// Check for its usage in base controller
module.exports = mongoose.model('User', UserSchema);