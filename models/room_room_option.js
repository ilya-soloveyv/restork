'use strict'

module.exports = (sequelize, DataTypes) => {
  const RoomRoomOption = sequelize.define(
    'room_room_option',
    {
      iRoomRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iRoomID: {
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
      tableName: 'room_room_option'
    }
  )
  RoomRoomOption.associate = function(models) {
    // associations can be defined here
  }

  return RoomRoomOption
}
