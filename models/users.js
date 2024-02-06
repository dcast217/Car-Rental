const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
  validatePW(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'location',
      key: 'id'
    }
  },
  address: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING(99),
    allowNull: false,
    validate: { 
      len: {
        args: [6,99],
        msg: 'Password must be 6 characters or greater.'
      }
    },
  },
  }, 
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }, 
  {
    indexes: [{ unique: true, fields: ["email"] }],
    /* 
      fix for too many keys err
      -------------------------
      code: 'ER_TOO_MANY_KEYS'
      errno: 1069
      sqlState: '42000'
      sqlMessage: 'Too many keys specified; max 64 keys allowed'
    */
  }

);

module.exports = User;