'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelHotelOption = sequelize.define(
    'hotel_hotel_option',
    {
      iHotelHotelOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iHotelID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iHotelOptionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_hotel_option'
    }
  )
  HotelHotelOption.associate = function(models) {
    // associations can be defined here
  }

  return HotelHotelOption
}
