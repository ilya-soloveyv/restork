'use strict'

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'room',
    {
      iRoomID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'object',
          key: 'iObjectID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iRoomTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'room_type',
          key: 'iRoomTypeID'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      },
      iRoomArea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iRoomCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iRoomBed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iRoomPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iRoomPlaceDop: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      tRoomDesc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      iRoomActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'room'
    }
  )
  Room.associate = function(models) {
    Room.belongsTo(models.object, {
      foreignKey: 'iObjectID'
    })
    Room.belongsTo(models.room_type, {
      foreignKey: 'iRoomTypeID'
    })
    Room.hasMany(models.room_room_option, {
      foreignKey: 'iRoomID'
    })
  }

  Room.getRoom = async function(iRoomID) {
    const room = await Room.findByPk(iRoomID)
    return room
  }

  return Room
}
