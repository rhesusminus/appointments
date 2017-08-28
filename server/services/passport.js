const passport = require('passport');
const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config');
const db = require('../db/db');


const comparePassword = (candidatePassword) => {
  bcrypt.compare(candidatePassword);
}

// Local strategy
const localLogin = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  const user = db.get('users')
    .find( email )
    .value();
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  const user = db.get('users')
    .find({ id: payload.sub })
    .value();

  user !== undefined
    ? done(null, user)
    : done(null, false);
});

passport.use(jwtLogin);
