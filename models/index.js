// Import the models
const Location = require('./locations');
const User = require('./users');
const Vehicle = require('./vehicle');
const Reservation = require('./reservation');

// Define the associations
 User.belongsTo(Location, { foreignKey: 'location_id' });
 Location.hasMany(User, { foreignKey: 'id' })

 Vehicle.hasOne(Location, { foreignKey: 'id' })
 Location.hasMany(Vehicle, { foreignKey: 'location_id' })
 


module.exports = { User, Location, Vehicle, Reservation };