const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {}

Vehicle.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Year: {
    type: DataTypes.INTEGER
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
  });

module.exports = Vehicle;