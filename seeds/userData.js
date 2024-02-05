const { User } = require('../models');

const userData = [
  {
    "name": "Jared Elliott",
    "email": "jared@jaredclt.com",
    "dob": "08/13/1984",
    "address": "1234 Mill St, Matthews NC 28105",
    "password": "password123",
    "location_id": "2"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;