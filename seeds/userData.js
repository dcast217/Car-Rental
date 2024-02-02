const { Users } = require('../model');

const userData = [
  {
    // Fields go here
  },

];

const seedUser = () => Users.bulkCreate(userData);

module.exports = seedUser;