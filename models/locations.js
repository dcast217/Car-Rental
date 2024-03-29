const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Location extends Model {}

Location.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, 
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }

);

module.exports = Location;