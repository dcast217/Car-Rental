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
 
Reservation.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Reservation, {foreignKey: 'user_id'})

Reservation.belongsTo(Location, {foreignKey: 'location_id'})
Location.hasMany(Reservation, {foreignKey: 'location_id'})

Reservation.belongsTo(Vehicle, {foreignKey: 'vehicle_id'})
Vehicle.hasOne(Reservation, {foreignKey: 'vehicle_id'})

module.exports = { User, Location, Vehicle, Reservation };