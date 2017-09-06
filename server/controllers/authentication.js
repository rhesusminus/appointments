const uuid = require('uuid/v1');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../config');
const db = require('../db/db');

const getUsers = () => db.get('users');
const getUser = (user) => getUsers().find(user);
const tokenForUser = (user) => jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.secret);
const cryptPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

exports.signin = (req, res, next) => res.send({ token: tokenForUser(req.user) });

exports.signup = (req, res, next) => {
  const email = req.body.email || '';
  const password = req.body.password || '';
  const user = {
    email,
    password
  };

  // TODO: could add more validations
  if (!email || !password) res.json({ error: 'You must provide email and password.' })

  const users = getUsers();
  const existingUser = getUser({email}).value();

  // adds new user and returns added user
  const addUser = (user) => {
    const newUser = {
      ...user,
      id: uuid(),
      password: cryptPassword(user.password)
    }
    users.push(newUser).write();
    res.json({ token: tokenForUser(newUser) });
  }

  existingUser === undefined
    ? addUser(user)
    : res.status(422).send({ error: 'Email is in use!' });
}
