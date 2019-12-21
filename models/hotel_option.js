'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelOption = sequelize.define(
    'hotel_option',
    {
      iHotelOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sHotelOptionTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iHotelOptionSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iHotelOptionActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_option'
    }
  )
  HotelOption.associate = function(models) {
    // associations can be defined here
  }

  HotelOption.getOptions = async function () {
    var options = await HotelOption.findAll({
      order: [
        ['iHotelOptionActive', 'DESC'],
        ['iHotelOptionSort', 'ASC'],
        ['iHotelOptionID', 'ASC']
      ]
    })
    return options
  }
  
  return HotelOption
}
