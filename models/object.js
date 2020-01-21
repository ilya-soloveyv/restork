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
      iObjectPlaceDop: { // Кол-во дополнительных мест
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      sObjectAddress: { // Адрес
        type: DataTypes.STRING,
        allowNull: true
      },
      aObjectCoordinate: { // Координаты объекта
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
      },
      tObjectDesc: { // Описание объекта
        type: DataTypes.TEXT,
        allowNull: true
      },
      iObjectActive: { // Активность объекта
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      iObjectVerification: { // Верификация объекта
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
  }

  Object.getObject = async function (iObjectID) {
    var object = await Object.findByPk(iObjectID, {
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
        }
      ]
    })

    object = object || {}

    object.object_object_options = object.object_object_options || []
    object.object_room_options = object.object_room_options || []

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
