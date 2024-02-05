const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  check_out: {
    type: DataTypes.DATE
  },
  check_in: {
    type: DataTypes.DATE
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
  });

module.exports = Reservation;