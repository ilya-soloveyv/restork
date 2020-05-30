'use strict'

module.exports = (sequelize, DataTypes) => {
  const ApplicationObjectOption = sequelize.define(
    'applicationObjectOption',
    {
      iApplicationObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iApplicationID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iObjectOptionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'application_object_option'
    }
  )

  ApplicationObjectOption.associate = function(models) {
    ApplicationObjectOption.belongsTo(models.application, {
      foreignKey: 'iApplicationID'
    })
    ApplicationObjectOption.belongsTo(models.object_option, {
      foreignKey: 'iObjectOptionID'
    })
  }

  ApplicationObjectOption.add = ({
    iApplicationID = false,
    iObjectOptionID = false
  }) => {
    if (iApplicationID && iObjectOptionID) {
      return ApplicationObjectOption.create({
        iApplicationID,
        iObjectOptionID
      })
    }
    return false
  }

  return ApplicationObjectOption
}
