var express = require('express')
var router = express.Router()
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userController = require('./../controller/user');
router.post('/register', userController.register);
router.get('/usersList',userController.listOfUsers);
router.post('/login', passport.authenticate('LocalStrategy'), function(req, res) {
      res.redirect('/');
  });


module.exports = router;