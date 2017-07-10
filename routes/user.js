var express = require('express')
var router = express.Router()

var userController = require('./../controller/user');
router.post('/register', userController.register);

module.exports = router;