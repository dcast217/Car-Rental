const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

const Locations = sequelize.define('Locations', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Locations;