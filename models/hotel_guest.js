'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelGuest = sequelize.define(
    'hotel_guest',
    {
      iHotelGuestID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sHotelGuestTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iHotelGuestSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iHotelGuestActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_guest'
    }
  )
  HotelGuest.associate = function(models) {
    // associations can be defined here
  }

  HotelGuest.getGuests = async function () {
    var guests = await HotelGuest.findAll({
      order: [
        ['iHotelGuestActive', 'DESC'],
        ['iHotelGuestSort', 'ASC'],
        ['iHotelGuestID', 'ASC']
      ]
    })
    return guests
  }
  
  return HotelGuest
}
