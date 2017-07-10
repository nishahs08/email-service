"use strict";

const express = require('express');
const router = express.Router();

// All the controllers will go in app/http/controllers directory
const base = require('./../../app/http/controllers/base');

// Define all the routes here
router.get("/users", base.index);
router.post("/user", base.create);

// Export the router from here
module.exports = router;