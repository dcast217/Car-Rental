// Import the models
const Location = require('./models/location');
const User = require('./models/user');
const Vehicle = require('./models/vehicle');

// Define the associations
Location.hasMany(User, { foreignKey: 'locationId' });
User.belongsTo(Location, { foreignKey: 'locationId' });

Location.hasMany(Vehicle, { foreignKey: 'locationId' });
Vehicle.belongsTo(Location, { foreignKey: 'locationId' });

module.exports = {
    User, Location, Vehicle
};