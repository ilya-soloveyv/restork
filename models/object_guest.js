'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectGuest = sequelize.define(
    'object_guest',
    {
      iObjectGuestID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sObjectGuestTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iObjectGuestSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iObjectGuestActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_guest'
    }
  )
  ObjectGuest.associate = function(models) {
    // associations can be defined here
  }

  ObjectGuest.getGuests = async function () {
    var guests = await ObjectGuest.findAll({
      order: [
        ['iObjectGuestActive', 'DESC'],
        ['iObjectGuestSort', 'ASC'],
        ['iObjectGuestID', 'ASC']
      ]
    })
    return guests
  }
  
  return ObjectGuest
}
