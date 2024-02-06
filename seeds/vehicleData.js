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
    "brand": "Ferrari",
    "model": "SF90",
    "year": "2023",
    "location_id": 2
  },
  {
    "brand": "Ferrari",
    "model": "SF90",
    "year": "2023",
    "location_id": 1
  },
  {
    "brand": "Porsche",
    "model": "GT4RS",
    "year": "2023",
    "location_id": 1
  },
  {
    "brand": "McLaren",
    "model": "765LT",
    "year": "2021",
    "location_id": 2
  },

];

const seedVehicle = () => Vehicle.bulkCreate(carData);

module.exports = seedVehicle;