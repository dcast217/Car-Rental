const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedVehicle = require('./vehicleData.js');
const seedLocation = require('./locationData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('----- Seed User -----')
  await seedVehicle();
  console.log('----- Seed Vehicle -----')
  await seedLocation();
  console.log('----- Seed Location -----')

  process.exit(0);
};

seedDatabase();