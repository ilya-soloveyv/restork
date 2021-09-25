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
      iRoomTypeID: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sObjectTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      iObjectArea: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectAreaLocation: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectFloorAll: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectFloor: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectRoomCount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectRoomHotelCount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectBed: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectPlace: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iObjectPlaceDop: {
        type: DataTypes.INTEGER,
        allowNull: true
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
      },
      sTutorialStepActive: {
        type: DataTypes.STRING,
        defaultValue: null
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
    Object.hasMany(models.application_object, {
      foreignKey: 'iObjectID'
    })
    Object.hasMany(models.object_feature, {
      foreignKey: 'iObjectID'
    })
    Object.hasMany(models.object_place, {
      foreignKey: 'iObjectID'
    })
  }

  Object.getObject = async function(iObjectID, iUserID) {
    const where = {}
    if (iObjectID) {
      where.iObjectID = iObjectID
    }
    if (iUserID) {
      where.iUserID = iUserID
    }
    let object = await Object.findOne({
      where,
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
          model: sequelize.models.object_object_option,
          include: [
            {
              model: sequelize.models.object_option
            }
          ]
        },
        {
          model: sequelize.models.object_room_option,
          include: [
            {
              model: sequelize.models.room_option
            }
          ]
        },
        {
          model: sequelize.models.object_feature
        },
        {
          model: sequelize.models.object_place
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
        // {
        //   model: sequelize.models.application_object,
        //   include: [
        //     {
        //       model: sequelize.models.application,
        //       include: [
        //         {
        //           model: sequelize.models.applicationObjectOption,
        //           include: [
        //             {
        //               model: sequelize.models.object_option
        //             }
        //           ]
        //         },
        //         {
        //           model: sequelize.models.applicationRoomOption,
        //           include: [
        //             {
        //               model: sequelize.models.room_option
        //             }
        //           ]
        //         },
        //         {
        //           model: sequelize.models.user,
        //           attributes: {
        //             exclude: [
        //               'sUserPhoneKod',
        //               'sUserPassword',
        //               'iUserKey',
        //               'iUserAdmin'
        //             ]
        //           }
        //         }
        //       ]
        //     }
        //   ]
        // }
      ],
      order: [
        [sequelize.models.object_image, 'iObjectImageIndex', 'DESC'],
        [sequelize.models.object_image, 'iObjectImageSort', 'ASC'],
        [sequelize.models.object_image, 'iObjectImageID', 'ASC']
      ]
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

  // Object.item = async function({ iObjectID, iUserID }) {

  // }

  Object.getList = async (params) => {
    const objects = await Object.findAll({
      where: {
        iUserID: params.iUserID
      },
      include: [
        {
          model: sequelize.models.object_image
        },
        {
          model: sequelize.models.application_object,
          include: [
            {
              model: sequelize.models.application,
              include: [
                {
                  model: sequelize.models.user
                }
              ]
            }
          ]
        },
        {
          model: sequelize.models.object_type
        }
      ]
    })
    return objects
  }

  Object.get = async (coo0, coo1, radius) => {
    // const response = await sequelize.query('SELECT * FROM object')

    // SET @pt1 = ST_GeomFromText('POINT(43.6617826 40.315748)');
    // SELECT * from (SELECT * ,(ST_Distance_Sphere(@pt1, aObjectCoordinate, 6373)) AS distance FROM object ORDER BY distance) x WHERE x.distance <= 5;
    const query =
      'SELECT * from (SELECT * ,(ST_Distance_Sphere(ST_GeomFromText("POINT(' +
      coo0 +
      ' ' +
      coo1 +
      ')"), aObjectCoordinate, 6373)) AS distance FROM object ORDER BY distance) x WHERE x.distance <= ' +
      radius
    const response = await sequelize.query(query)

    return response
    // SET @pt1 = ST_GeomFromText('POINT(43.6617826 40.315748)');
    // SELECT * from (SELECT * ,(ST_Distance_Sphere(@pt1, aObjectCoordinate, 6373)) AS distance FROM object ORDER BY distance) x WHERE x.distance <= 5;
    // const object = await Object.findAll({
    //   where: sequelize.where(
    //     sequelize.fn(
    //       'ST_Distance_Sphere',
    //       sequelize.col('aObjectCoordinate'),
    //       sequelize.fn('ST_MakePoint', 43.6636072, 40.3143871),
    //       10000
    //     ),
    //     true
    //   )
    // })
    // return object
  }

  Object.up = async ({ iObjectID = false, iObjectTypeID = false }) => {
    if (iObjectID) {
      const response = await Object.update(
        {
          iObjectTypeID
        },
        {
          where: {
            iObjectID
          }
        }
      )
      return response
    } else {
      const response = await Object.create({
        iObjectTypeID
      })
      return response
    }
  }

  Object.add = async ({
    iUserID = false,
    iObjectTypeID = false,
    sObjectTitle = 'Без названия'
  }) => {
    if (iUserID && iObjectTypeID) {
      const response = await Object.create({
        iUserID,
        iObjectTypeID,
        sObjectTitle
      })
      return response
    } else {
      return false
    }
  }

  sequelizePaginate.paginate(Object)
  return Object
}
