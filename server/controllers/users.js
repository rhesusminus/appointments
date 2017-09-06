const R = require('rambda');
const jwt = require('jwt-simple');
const db = require('../db/db');

const getUsers = () => db.get('users');
const getUser = (user) => getUsers().find(user);

exports.currentUser = (req, res) => {
  const user = getUser({ id: req.user.id }).value();
  const userData = R.pick(['email', 'name', 'address', 'phonenumber', 'id'], user);
  res.json(userData);
}

exports.user = (req, res) => {
  const user = getUser({ id: req.params.id }).value();
  res.json(user ? { user } : { error: 'User not found' });
}
