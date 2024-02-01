const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Users = sequelize.define('Users', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Users;