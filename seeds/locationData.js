const { Locations } = require('../model');

const locationData = [
  {
    // Fields go here
  },

];

const seedLocation = () => Locations.bulkCreate(userData);

module.exports = seedLocation;