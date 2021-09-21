'use strict'

module.exports = (sequelize, DataTypes) => {
  const ObjectOption = sequelize.define(
    'object_option',
    {
      iObjectOptionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sObjectOptionTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iObjectOptionSort: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      iObjectOptionActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      sObjectOptionIcon: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      sObjectOptionDesc: {
        type: DataTypes.STRING,
        defaultValue: null
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'object_option'
    }
  )
  ObjectOption.associate = function(models) {
    // associations can be defined here
  }

  ObjectOption.getOptions = async function() {
    const options = await ObjectOption.findAll({
      order: [
        ['iObjectOptionActive', 'DESC'],
        ['iObjectOptionSort', 'ASC'],
        ['iObjectOptionID', 'ASC']
      ]
    })
    return options
  }

  return ObjectOption
}
