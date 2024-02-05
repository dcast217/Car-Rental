const { Location } = require('../models');

const locationData = [
  {
    "name": "Locale 1",
    "address": "1234 Main St. Charlotte, NC 28105"
  },
  {
    "name": "Locale 2",
    "address": "1234 Ikea Blvd, Charlotte NC 28105",
  },

];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;