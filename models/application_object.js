'use strict'

module.exports = (sequelize, DataTypes) => {
  const ApplicationObject = sequelize.define(
    'application_object',
    {
      iApplicationObjectID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iApplicationID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iObjectID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
      },
      iObjectView: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dObjectViewDate: {
        type: DataTypes.DATE
      },
      iObjectPrice: {
        type: DataTypes.INTEGER
      },
      iUserView: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dUserViewDate: {
        type: DataTypes.DATE
      },
      iUserCancel: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dUserCancelDate: {
        type: DataTypes.DATE
      },
      iUserSelected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dUserSelectedDate: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'application_object'
    }
  )

  ApplicationObject.associate = function(models) {
    ApplicationObject.belongsTo(models.object, {
      foreignKey: 'iObjectID'
    })
    ApplicationObject.belongsTo(models.application, {
      foreignKey: 'iApplicationID'
    })
    ApplicationObject.hasMany(models.message, {
      foreignKey: 'iApplicationObjectID'
    })
  }

  ApplicationObject.get = async function({ iApplicationObjectID }) {
    const applicationObject = await ApplicationObject.findByPk(
      iApplicationObjectID,
      {
        include: [
          {
            model: sequelize.models.object,
            include: [
              {
                model: sequelize.models.user,
                attributes: {
                  exclude: [
                    'sUserPhoneKod',
                    'sUserPassword',
                    'iUserKey',
                    'iUserAdmin'
                  ]
                }
              },
              {
                model: sequelize.models.object_image
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
                model: sequelize.models.object_type
              }
            ]
          },
          {
            model: sequelize.models.application,
            include: [
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
              },
              {
                model: sequelize.models.user,
                attributes: {
                  exclude: [
                    'sUserPhoneKod',
                    'sUserPassword',
                    'iUserKey',
                    'iUserAdmin'
                  ]
                }
              }
            ]
          }
        ]
      }
    )
    return applicationObject
  }

  ApplicationObject.add = async function({ iApplicationID, iObjectID }) {
    await ApplicationObject.create({
      iApplicationID,
      iObjectID,
      dDate: new Date()
    })
  }

  ApplicationObject.objectView = async function({
    iApplicationObjectID,
    iUserID
  }) {
    const applicationObject = await ApplicationObject.get({
      iApplicationObjectID
    })
    if (
      applicationObject !== undefined &&
      !applicationObject.iObjectView &&
      applicationObject.iObjectView === false &&
      applicationObject.object.iUserID === iUserID
    ) {
      await ApplicationObject.update(
        {
          iObjectView: true,
          dObjectViewDate: new Date()
        },
        {
          where: {
            iApplicationObjectID
          }
        }
      )
      return true
    }
    return false
  }

  ApplicationObject.userView = async function({
    iApplicationObjectID,
    iUserID
  }) {
    const applicationObject = await ApplicationObject.get({
      iApplicationObjectID
    })
    if (
      applicationObject.iObjectView !== null &&
      applicationObject.iObjectPrice !== null &&
      applicationObject.iUserView === false &&
      applicationObject.application.iUserID === iUserID
    ) {
      await ApplicationObject.update(
        {
          iUserView: true,
          dUserViewDate: new Date()
        },
        {
          where: {
            iApplicationObjectID
          }
        }
      )
      return true
    }
    return false
  }

  ApplicationObject.up = async function({
    iApplicationID = false,
    iApplicationObjectID = false,
    iObjectPrice = null,
    iUserCancel = false,
    dUserCancelDate = null,
    iUserSelected = false,
    dUserSelectedDate = null
  }) {
    const update = await ApplicationObject.update(
      {
        iObjectPrice,
        iUserCancel,
        dUserCancelDate,
        iUserSelected,
        dUserSelectedDate
      },
      {
        where: {
          iApplicationObjectID
        }
      }
    )
    await sequelize.models.application.searchObjectInApplication({
      iApplicationID
    })
    return update
  }

  return ApplicationObject
}
