const passport = require('passport');
const config = require('../config');
const db = require('../db/db');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

});
