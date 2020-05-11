'use strict'

module.exports = (sequelize, DataTypes) => {
  const ApplicationRoomOption = sequelize.define(
    'applicationRoomOption',
    {
      iApplicationRoomOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iApplicationID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iRoomOptionID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'application_room_option'
    }
  )

  ApplicationRoomOption.associate = function(models) {
    ApplicationRoomOption.belongsTo(models.application, {
      foreignKey: 'iApplicationID'
    })
    ApplicationRoomOption.belongsTo(models.room_option, {
      foreignKey: 'iRoomOptionID'
    })
  }

  ApplicationRoomOption.add = ({
    iApplicationID = false,
    iRoomOptionID = false
  }) => {
    if (iApplicationID && iRoomOptionID) {
      return ApplicationRoomOption.create({
        iApplicationID,
        iRoomOptionID
      })
    }
    return false
  }

  return ApplicationRoomOption
}
