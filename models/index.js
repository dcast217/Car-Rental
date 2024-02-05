// Import the models
const Location = require('./locations');
const User = require('./users');
const Vehicle = require('./vehicle');

// Define the associations
Location.hasMany(User, { foreignKey: 'locationId' });
User.belongsTo(Location, { foreignKey: 'locationId' });

Location.hasMany(Vehicle, { foreignKey: 'locationId' });
Vehicle.belongsTo(Location, { foreignKey: 'locationId' });

module.exports = {
    User, Location, Vehicle
};