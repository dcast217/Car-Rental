const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
  });
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
  });

module.exports = Vehicle;