'use strict'

const consola = require('consola')
const { Op } = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')
const _ = require('lodash')

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
      sApplicationCountry: {
        type: DataTypes.STRING
      },
      sApplicationState: {
        type: DataTypes.STRING
      },
      sApplicationCity: {
        type: DataTypes.STRING
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
      dDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      iActive: {
        type: DataTypes.BOOLEAN
      },
      iObjectID: {
        type: DataTypes.INTEGER
      },
      iSearchRadius: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'application'
    }
  )

  Application.associate = function(models) {
    Application.hasMany(models.application_object, {
      foreignKey: 'iApplicationID'
    })
    Application.belongsTo(models.object, {
      foreignKey: 'iObjectID'
    })
  }

  Application.get = async function({ iApplicationID }) {
    const application = await Application.findByPk(iApplicationID, {
      include: [
        {
          model: sequelize.models.application_object
        },
        {
          model: sequelize.models.object
        }
      ]
    })
    return application
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
      sApplicationCountry: params.sApplicationCountry,
      sApplicationState: params.sApplicationState,
      sApplicationCity: params.sApplicationCity,
      dApplicationDateFrom: params.dApplicationDateFrom,
      dApplicationDateTo: params.dApplicationDateTo,
      iApplicationAdult: params.iApplicationAdult,
      iApplicationChild: params.iApplicationChild,
      dDate: new Date(),
      iActive: true,
      iObjectID: null
    })
    // response.object = await Object.get(req.body)

    return response
  }

  Application.list = async function({ iUserID }) {
    const response = await Application.findAll({
      include: [
        {
          model: sequelize.models.application_object,
          include: [
            {
              model: sequelize.models.object
            }
          ]
        },
        {
          model: sequelize.models.object
        }
      ],
      where: {
        iUserID
      },
      order: [
        ['dDate', 'ASC'],
        ['iApplicationID', 'ASC'],
        [sequelize.models.application_object, 'dDate', 'ASC'],
        [sequelize.models.application_object, 'iApplicationObjectID', 'ASC']
      ]
    })
    return response
  }

  Application.searchObject = async function() {
    const response = {}
    response.applications = await Application.findAll({
      attributes: ['iApplicationID', 'aApplicationCoordinate', 'iSearchRadius'],
      where: {
        iActive: true,
        dApplicationDateFrom: {
          [Op.gte]: new Date()
        },
        iObjectID: null,
        iSearchRadius: {
          [Op.lt]: 10
        }
      },
      include: [
        {
          model: sequelize.models.application_object
        }
      ]
    })
    for (const application of response.applications) {
      await Application.addRadius(application)
      await Application.searchGetObjectList(application)
    }
    return response
  }

  Application.searchGetObjectList = async function({
    iApplicationID,
    aApplicationCoordinate,
    iSearchRadius,
    application_objects
  }) {
    const iObjectIDArray = application_objects.map((object) => {
      return object.iObjectID
    })
    let whereNotInObject = ''
    consola.log(iObjectIDArray)
    const iObjectIDString = _.join(iObjectIDArray, ',')
    consola.log(iObjectIDString)
    if (iObjectIDString) {
      whereNotInObject = 'WHERE iObjectID NOT IN (' + iObjectIDString + ')'
    }

    const count = 10 - application_objects.length
    const query =
      'SELECT * from (SELECT * ,(ST_Distance_Sphere(ST_GeomFromText("POINT(' +
      aApplicationCoordinate.coordinates[0] +
      ' ' +
      aApplicationCoordinate.coordinates[1] +
      ')"), aObjectCoordinate, 6373)) AS distance FROM object ' +
      whereNotInObject +
      ' ORDER BY distance) x WHERE x.distance <= ' +
      iSearchRadius +
      ' LIMIT ' +
      count
    const objects = await sequelize.query(query)
    for (const object of objects[0]) {
      await sequelize.models.application_object.add({
        iApplicationID,
        iObjectID: object.iObjectID
      })
    }
    return true
  }

  Application.addRadius = async ({ iApplicationID, iSearchRadius }) => {
    await Application.update(
      {
        iSearchRadius: iSearchRadius + 1
      },
      {
        where: {
          iApplicationID
        }
      }
    )
    return true
  }

  sequelizePaginate.paginate(Application)
  return Application
}
