const Authentication = require('./controllers/authentication');
const Users = require('./controllers/users');
const Barbers = require('./controllers/barbers');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/user/:id', requireAuth, Users.user);
  app.get('/currentUser', requireAuth, Users.currentUser);

  app.get('/barbers', Barbers.barbers);
  app.get('/worklist', Barbers.worklist);
}
