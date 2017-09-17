const db = require('../db/db');

const getBarbers = () => db.get('barbers');
const getBarber = (barber) => getBarbers().find(barber);

exports.barbers = (req, res) => {
  const barbers = getBarbers();
  res.json(barbers);
}

exports.worklist = (req, res) => {
  const worklist = db.get('jobs');
  res.json(worklist);
}
