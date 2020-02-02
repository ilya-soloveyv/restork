'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Object = sequelize.define(
    'object',
    {
      iObjectID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iUserID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iObjectTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sObjectTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      iObjectArea: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iObjectRoomCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      iObjectBed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iObjectPlace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      iObjectPlaceDop: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      sObjectAddress: {
        type: DataTypes.STRING,
        allowNull: true
      },
      aObjectCoordinate: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
      },
      tObjectDesc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      iObjectActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      iObjectVerification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object'
    }
  )
  Object.associate = function(models) {
    Object.belongsTo(models.user, {
      foreignKey: 'iUserID'
    })
    Object.belongsTo(models.object_type, {
      foreignKey: 'iObjectTypeID'
    })
    Object.hasMany(models.object_object_option, {
      foreignKey: 'iObjectID'
    })
    Object.hasMany(models.object_room_option, {
      foreignKey: 'iObjectID'
    })
    Object.hasMany(models.object_image, {
      foreignKey: 'iObjectID'
    })
    Object.hasMany(models.room, {
      foreignKey: 'iObjectID'
    })
  }

  Object.getObject = async function(iObjectID) {
    let object = await Object.findByPk(iObjectID, {
      include: [
        {
          model: sequelize.models.user,
          attributes: [
            'iUserID',
            'sUserLastName',
            'sUserMiddleName',
            'sUserFirstName',
            'sUserPhone',
            'iUserAdmin'
          ]
        },
        {
          model: sequelize.models.object_type
        },
        {
          model: sequelize.models.object_object_option
        },
        {
          model: sequelize.models.object_room_option
        },
        {
          model: sequelize.models.object_image
        },
        {
          model: sequelize.models.room,
          include: [
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
        }
      ],
      order: [[sequelize.models.room, 'iRoomID', 'ASC']]
    })

    object = object || {}

    object.object_object_options = object.object_object_options || []
    object.object_room_options = object.object_room_options || []
    object.rooms = object.rooms || []

    object.sObjectAddress = object.sObjectAddress || ''

    if (object.aObjectCoordinate == null) {
      object.aObjectCoordinate = {}
      object.aObjectCoordinate.type = 'Point'
      object.aObjectCoordinate.coordinates = [null, null]
    }

    return object
  }

  sequelizePaginate.paginate(Object)
  return Object
}
