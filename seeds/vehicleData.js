const { Vehicle } = require('../models');

const carData = [
  {
    // Fields go here
    "brand": "Lamborghini",
    "model": "Urus",
    "year": "2021",
    "location_id": 1
  },
  {
    // Fields go here
    "brand": "Ferrari",
    "model": "SF90",
    "year": "2023",
    "location_id": 2
  },
  {
    // Fields go here
    "brand": "Ferrari",
    "model": "SF90",
    "year": "2023",
    "location_id": 1
  },
  {
    // Fields go here
    "brand": "Porsche",
    "model": "718 Cayman GT4 RS",
    "year": "2023",
    "location_id": 1
  },
  {
    // Fields go here
    "brand": "McLaren",
    "model": "765LT",
    "year": "2021",
    "location_id": 2
  },

];

const seedVehicle = () => Vehicle.bulkCreate(carData);

module.exports = seedVehicle;