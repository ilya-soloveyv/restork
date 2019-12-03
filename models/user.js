'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    iUserID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sUserLastName: {
      type: DataTypes.STRING
    },
    sUserMiddleName: {
      type: DataTypes.STRING
    },
    sUserFirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sUserPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sUserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iUserKey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUserAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user'
  })
  User.associate = function(models) {

  }
  return User
}
