'use strict'

const consola = require('consola')
const { Op } = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')
const _ = require('lodash')
const moment = require('moment')

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
    Application.belongsTo(models.user, {
      foreignKey: 'iUserID'
    })
    Application.hasMany(models.applicationObjectOption, {
      foreignKey: 'iApplicationID'
    })
    Application.hasMany(models.applicationRoomOption, {
      foreignKey: 'iApplicationID'
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

  Application.add = async function({
    iUserID,
    sApplicationAddress,
    aApplicationCoordinate,
    sApplicationCountry,
    sApplicationState,
    sApplicationCity,
    dApplicationDateFrom,
    dApplicationDateTo,
    iApplicationAdult,
    iApplicationChild,
    objectOption = [],
    roomOption = []
  }) {
    const response = {}
    response.error = []

    iUserID = Number.isInteger(iUserID) ? iUserID : false
    if (!iUserID) {
      response.error.push({
        message: 'Не передан обязательный параметр iUserID'
      })
    }

    sApplicationAddress =
      sApplicationAddress !== undefined &&
      sApplicationAddress !== null &&
      sApplicationAddress !== ''
        ? sApplicationAddress
        : false
    if (!sApplicationAddress) {
      response.error.push({
        input: 'input-sApplicationAddress',
        message: 'Не выбран пункт назначения'
      })
    }

    aApplicationCoordinate =
      aApplicationCoordinate !== undefined &&
      'coordinates' in aApplicationCoordinate &&
      aApplicationCoordinate.coordinates[0] !== undefined &&
      aApplicationCoordinate.coordinates[1] !== undefined
        ? aApplicationCoordinate.coordinates
        : false
    if (!aApplicationCoordinate) {
      response.error.push({
        input: 'input-sApplicationAddress',
        message: 'Ошибка с распознованием координат'
      })
    } else {
      aApplicationCoordinate = sequelize.fn(
        'ST_GeomFromText',
        'POINT(' +
          aApplicationCoordinate[0] +
          ' ' +
          aApplicationCoordinate[1] +
          ')'
      )
    }

    sApplicationCountry =
      sApplicationCountry !== undefined &&
      sApplicationCountry !== null &&
      sApplicationCountry !== ''
        ? sApplicationCountry
        : null

    sApplicationState =
      sApplicationState !== undefined &&
      sApplicationState !== null &&
      sApplicationState !== ''
        ? sApplicationState
        : null

    sApplicationCity =
      sApplicationCity !== undefined &&
      sApplicationCity !== null &&
      sApplicationCity !== ''
        ? sApplicationCity
        : null

    dApplicationDateFrom =
      dApplicationDateFrom !== undefined &&
      moment(dApplicationDateFrom, 'YYYY-MM-DD', true).isValid()
        ? dApplicationDateFrom
        : false
    if (!dApplicationDateFrom) {
      response.error.push({
        input: 'input-dApplicationDateFrom',
        message: 'Необходимо указать дату'
      })
    }

    dApplicationDateTo =
      dApplicationDateTo !== undefined &&
      moment(dApplicationDateTo, 'YYYY-MM-DD', true).isValid()
        ? dApplicationDateTo
        : false
    if (!dApplicationDateTo) {
      response.error.push({
        input: 'input-dApplicationDateTo',
        message: 'Необходимо указать дату'
      })
    }

    iApplicationAdult =
      Number.isInteger(iApplicationAdult) && iApplicationAdult > 0
        ? iApplicationAdult
        : 1

    iApplicationChild =
      Number.isInteger(iApplicationChild) && iApplicationChild > 0
        ? iApplicationChild
        : 0

    if (!response.error.length) {
      response.application = await Application.create({
        iUserID,
        sApplicationAddress,
        aApplicationCoordinate,
        sApplicationCountry,
        sApplicationState,
        sApplicationCity,
        dApplicationDateFrom,
        dApplicationDateTo,
        iApplicationAdult,
        iApplicationChild,
        dDate: new Date(),
        iActive: true,
        iObjectID: null,
        iSearchRadius: 0
      })

      for (const iObjectOptionID of objectOption) {
        await sequelize.models.applicationObjectOption.add({
          iApplicationID: response.application.iApplicationID,
          iObjectOptionID
        })
      }

      for (const iRoomOptionID of roomOption) {
        await sequelize.models.applicationRoomOption.add({
          iApplicationID: response.application.iApplicationID,
          iRoomOptionID
        })
      }
    }

    return response
  }

  Application.list = async function({ iUserID }) {
    const response = await Application.findAll({
      include: [
        {
          model: sequelize.models.application_object,
          include: [
            {
              model: sequelize.models.object,
              include: [
                {
                  model: sequelize.models.object_image
                }
              ]
            }
          ]
        },
        {
          model: sequelize.models.object
        },
        {
          model: sequelize.models.applicationObjectOption,
          include: [
            {
              model: sequelize.models.object_option
            }
          ]
        },
        {
          model: sequelize.models.applicationRoomOption,
          include: [
            {
              model: sequelize.models.room_option
            }
          ]
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

  // Application.searchObject = async function() {
  //   const response = {}
  //   response.applications = await Application.findAll({
  //     attributes: ['iApplicationID', 'aApplicationCoordinate', 'iSearchRadius'],
  //     where: {
  //       iActive: true,
  //       dApplicationDateFrom: {
  //         [Op.gte]: new Date()
  //       },
  //       iObjectID: null,
  //       iSearchRadius: {
  //         [Op.lt]: 10
  //       }
  //     },
  //     include: [
  //       {
  //         model: sequelize.models.application_object
  //       }
  //     ]
  //   })
  //   for (const application of response.applications) {
  //     await Application.addRadius(application)
  //     await Application.searchGetObjectList(application)
  //   }
  //   return response
  // }

  // Application.searchGetObjectList = async function({
  //   iApplicationID,
  //   aApplicationCoordinate,
  //   iSearchRadius,
  //   application_objects
  // }) {
  //   const iObjectIDArray = application_objects.map((object) => {
  //     return object.iObjectID
  //   })
  //   let whereNotInObject = ''
  //   consola.log(iObjectIDArray)
  //   const iObjectIDString = _.join(iObjectIDArray, ',')
  //   consola.log(iObjectIDString)
  //   if (iObjectIDString) {
  //     whereNotInObject = 'WHERE iObjectID NOT IN (' + iObjectIDString + ')'
  //   }

  //   const count = 10 - application_objects.length
  //   const query =
  //     'SELECT * from (SELECT * ,(ST_Distance_Sphere(ST_GeomFromText("POINT(' +
  //     aApplicationCoordinate.coordinates[0] +
  //     ' ' +
  //     aApplicationCoordinate.coordinates[1] +
  //     ')"), aObjectCoordinate, 6373)) AS distance FROM object ' +
  //     whereNotInObject +
  //     ' ORDER BY distance) x WHERE x.distance <= ' +
  //     iSearchRadius +
  //     ' LIMIT ' +
  //     count
  //   const objects = await sequelize.query(query)
  //   for (const object of objects[0]) {
  //     await sequelize.models.application_object.add({
  //       iApplicationID,
  //       iObjectID: object.iObjectID
  //     })
  //   }
  //   return true
  // }

  // Application.addRadius = async ({ iApplicationID, iSearchRadius }) => {
  //   await Application.update(
  //     {
  //       iSearchRadius: iSearchRadius + 1
  //     },
  //     {
  //       where: {
  //         iApplicationID
  //       }
  //     }
  //   )
  //   return true
  // }

  Application.searchObjectInApplication = async ({ iApplicationID }) => {
    const application = await Application.get({ iApplicationID })

    const objectsID = application.application_objects.map((object) => {
      return {
        iObjectID: object.iObjectID,
        iObjectPrice: object.iObjectPrice
      }
    })

    const iObjectIDArray = objectsID.map((object) => object.iObjectID)
    let count = objectsID.filter((object) => object.iObjectPrice === null).length

    let whereNotInObject = ''
    const iObjectIDString = _.join(iObjectIDArray, ',')
    if (iObjectIDString) {
      whereNotInObject = 'WHERE iObjectID NOT IN (' + iObjectIDString + ')'
    }

    count = 5 - count
    if (count < 0) count = 0

    const query =
      'SELECT * from (SELECT * ,(ST_Distance_Sphere(ST_GeomFromText("POINT(' +
      application.aApplicationCoordinate.coordinates[0] +
      ' ' +
      application.aApplicationCoordinate.coordinates[1] +
      ')"), aObjectCoordinate, 6373)) AS distance FROM object ' +
      whereNotInObject +
      ' ORDER BY distance) x WHERE x.distance <= 15 LIMIT ' +
      count
    const objects = await sequelize.query(query)

    for (const object of objects[0]) {
      await sequelize.models.application_object.add({
        iApplicationID,
        iObjectID: object.iObjectID
      })
    }

    return { objects }
  }

  sequelizePaginate.paginate(Application)
  return Application
}
