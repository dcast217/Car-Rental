const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedVehicle = require('./vehicleData.js');
const seedLocation = require('./locationData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();
  console.log('----- Seed Location -----')
  await seedVehicle();
  console.log('----- Seed Vehicle -----')
  await seedUser();
  console.log('----- Seed User -----')

  process.exit(0);
};

seedDatabase();