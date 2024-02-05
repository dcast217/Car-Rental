const { Reservation } = require('../models');

const reservationData = [
  {
    "location_id": 1,
    "user_id": 1,
    "check_out": '2024-02-06',
    "check_in": '2024-02-10'
  },
  {
    "location_id": 2,
    "user_id": 1,
    "check_out": '2024-02-07',
    "check_in": '2024-02-12'
  },

];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;