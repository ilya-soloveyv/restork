'use strict'

module.exports = (sequelize, DataTypes) => {
  const HotelRoomOption = sequelize.define(
    'hotel_room_option',
    {
      iHotelRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iHotelID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iRoomOptionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'hotel_room_option'
    }
  )
  HotelRoomOption.associate = function(models) {
    // associations can be defined here
  }

  return HotelRoomOption
}
