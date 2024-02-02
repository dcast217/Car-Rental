const { Vehicles } = require('../model');

const carData = [
  {
    // Fields go here
  },

];

const seedVehicle = () => Vehicles.bulkCreate(userData);

module.exports = seedVehicle;