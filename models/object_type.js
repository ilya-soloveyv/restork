'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectType = sequelize.define(
    'object_type',
    {
      iObjectTypeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      iObjectTypeGroupID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      sObjectTypeTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iObjectTypeSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iObjectTypeActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      iRoomPermission: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_type'
    }
  )
  ObjectType.associate = function(models) {
    // associations can be defined here
  }

  ObjectType.getTypes = async function() {
    const types = await ObjectType.findAll({
      order: [
        ['iObjectTypeActive', 'DESC'],
        ['iObjectTypeSort', 'ASC'],
        ['iObjectTypeID', 'ASC']
      ]
    })
    return types
  }

  return ObjectType
}
