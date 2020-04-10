'use strict'

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    'application',
    {
      iApplicationID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iUserID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sApplicationAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      aApplicationCoordinate: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
      },
      dApplicationDateFrom: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      dApplicationDateTo: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      iApplicationAdult: {
        type: DataTypes.INTEGER
      },
      iApplicationChild: {
        type: DataTypes.INTEGER
      },
      dApplicationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      iActive: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'application'
    }
  )
  Application.associate = function(models) {
    // Object.belongsTo(models.user, {
    //   foreignKey: 'iUserID'
    // })
    // Object.belongsTo(models.object_type, {
    //   foreignKey: 'iObjectTypeID'
    // })
    // Object.hasMany(models.object_object_option, {
    //   foreignKey: 'iObjectID'
    // })
    // Object.hasMany(models.object_room_option, {
    //   foreignKey: 'iObjectID'
    // })
    // Object.hasMany(models.object_image, {
    //   foreignKey: 'iObjectID'
    // })
    // Object.hasMany(models.room, {
    //   foreignKey: 'iObjectID'
    // })
  }

  Application.add = async function(params) {
    const response = {}

    const aApplicationCoordinate = sequelize.fn(
      'ST_GeomFromText',
      'POINT(' +
        params.aApplicationCoordinate.coordinates[0] +
        ' ' +
        params.aApplicationCoordinate.coordinates[1] +
        ')'
    )

    response.application = await Application.create({
      iUserID: params.iUserID,
      sApplicationAddress: params.sApplicationAddress,
      aApplicationCoordinate,
      dApplicationDateFrom: params.dApplicationDateFrom,
      dApplicationDateTo: params.dApplicationDateTo,
      iApplicationAdult: params.iApplicationAdult,
      iApplicationChild: params.iApplicationChild,
      dApplicationDate: new Date(),
      iActive: true
    })
    // response.object = await Object.get(req.body)

    return response
  }

  sequelizePaginate.paginate(Application)
  return Application
}
