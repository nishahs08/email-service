var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/user');

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ username: id })
    .then(user => done(user))
    .catch(err => done(null, false))
});

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    console.log('ASDAS');
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));