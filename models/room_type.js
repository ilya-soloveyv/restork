'use strict'

module.exports = (sequelize, DataTypes) => {
  const RoomType = sequelize.define(
    'room_type',
    {
      iRoomTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sRoomTypeTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iRoomTypeSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iRoomTypeActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'room_type'
    }
  )
  RoomType.associate = function(models) {
    // associations can be defined here
  }

  RoomType.getTypes = async function() {
    const types = await RoomType.findAll({
      order: [
        ['iRoomTypeActive', 'DESC'],
        ['iRoomTypeSort', 'ASC'],
        ['iRoomTypeID', 'ASC']
      ]
    })
    return types
  }

  return RoomType
}
