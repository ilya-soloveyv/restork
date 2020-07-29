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
    Room.hasMany(models.room_image, {
      foreignKey: 'iRoomID'
    })
  }

  Room.getRoom = async function(iRoomID) {
    const room = await Room.findByPk(iRoomID, {
      include: [
        {
          model: sequelize.models.object
        },
        {
          model: sequelize.models.room_type
        },
        {
          model: sequelize.models.room_room_option
        },
        {
          model: sequelize.models.room_image
        }
      ]
    })
    return room
  }

  Room.up = async function(room = {}) {
    const iRoomID = room.iRoomID && Number(room.iRoomID) ? room.iRoomID : false
    const iRoomTypeID =
      room.iRoomTypeID && Number(room.iRoomTypeID) ? room.iRoomTypeID : false
    const iRoomArea =
      room.iRoomArea && Number(room.iRoomArea) ? room.iRoomArea : 0
    const iRoomCount =
      room.iRoomCount && Number(room.iRoomCount) ? room.iRoomCount : 0
    const iRoomBed = room.iRoomBed && Number(room.iRoomBed) ? room.iRoomBed : 0
    const iRoomPlace =
      room.iRoomPlace && Number(room.iRoomPlace) ? room.iRoomPlace : 0
    const iRoomPlaceDop =
      room.iRoomPlaceDop && Number(room.iRoomPlaceDop) ? room.iRoomPlaceDop : 0
    const tRoomDesc = room.tRoomDesc ? room.tRoomDesc : null
    const iRoomActive = room.iRoomActive || false

    if (iRoomID) {
      const update = await Room.update(
        {
          iRoomTypeID,
          iRoomArea,
          iRoomCount,
          iRoomBed,
          iRoomPlace,
          iRoomPlaceDop,
          tRoomDesc,
          iRoomActive
        },
        {
          where: {
            iRoomID
          }
        }
      )
      return update
    } else {
      const create = await Room.create({
        iRoomTypeID,
        iRoomArea,
        iRoomCount,
        iRoomBed,
        iRoomPlace,
        iRoomPlaceDop,
        tRoomDesc,
        iRoomActive
      })
      return create
    }
  }

  return Room
}
