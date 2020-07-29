'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectRoomOption = sequelize.define(
    'object_room_option',
    {
      iObjectRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
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
      tableName: 'object_room_option'
    }
  )
  ObjectRoomOption.associate = function(models) {
    ObjectRoomOption.belongsTo(models.room_option, {
      foreignKey: 'iRoomOptionID'
    })
  }

  return ObjectRoomOption
}
