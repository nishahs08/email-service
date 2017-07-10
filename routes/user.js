var express = require('express')
var router = express.Router()
var passport = require('passport');
var userController = require('./../controller/user');

router.post('/register', userController.register);
router.get('/usersList',userController.listOfUsers);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({
      a: true
    });
});


module.exports = router;