const db = require('../db/db');

const getBarbers = () => db.get('barbers');
const getBarber = (barber) => getBarbers().find(barber);

exports.getBarbers = (req, res) => {
  const barbers = getBarbers();
  res.json(barbers);
}
