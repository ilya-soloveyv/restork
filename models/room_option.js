'use strict'

module.exports = (sequelize, DataTypes) => {
  const RoomOption = sequelize.define(
    'room_option',
    {
      iRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sRoomOptionTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iRoomOptionSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iRoomOptionActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'room_option'
    }
  )
  RoomOption.associate = function(models) {
    // associations can be defined here
  }

  RoomOption.getOptions = async function() {
    const options = await RoomOption.findAll({
      order: [
        ['iRoomOptionActive', 'DESC'],
        ['iRoomOptionSort', 'ASC'],
        ['iRoomOptionID', 'ASC']
      ]
    })
    return options
  }

  return RoomOption
}
