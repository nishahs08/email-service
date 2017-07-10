"use strict";

const express = require('express');

const router = express.Router();

const base = require('./../../app/http/controllers/base');

router.get("/", base.index);

module.exports = router;