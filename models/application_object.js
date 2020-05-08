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
  }

  ApplicationObject.get = async function({ iApplicationObjectID }) {
    const applicationObject = await ApplicationObject.findByPk(
      iApplicationObjectID,
      {
        include: [
          {
            model: sequelize.models.object
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

  ApplicationObject.objectView = async function({ iApplicationObjectID }) {
    const applicationObject = await ApplicationObject.findByPk(
      iApplicationObjectID
    )
    if (
      applicationObject !== undefined &&
      !applicationObject.iObjectView &&
      applicationObject.iObjectView === false
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

  ApplicationObject.userView = async function({ iApplicationObjectID }) {
    const applicationObject = await ApplicationObject.findByPk(
      iApplicationObjectID
    )
    if (!applicationObject.iUserView && applicationObject.iUserView === null) {
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

  ApplicationObject.updateApplicationObject = async function({
    iApplicationObjectID,
    iObjectPrice
  }) {
    const update = await ApplicationObject.update(
      {
        iObjectPrice
      },
      {
        where: {
          iApplicationObjectID
        }
      }
    )
    return update
  }

  return ApplicationObject
}
