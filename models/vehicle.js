const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Vehicles = sequelize.define('Vehicles', {
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
});

module.exports = Vehicles;